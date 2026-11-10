// Build furkanzt.github.io into docs/ (what GitHub Pages serves).
//
//   npm run build        (= node scripts/build_site.mjs)
//
// Reads  content/content.json   all text, English and Turkish, plus contact data
//        src/site/page.html     the page template (<!--@slot--> markers, {{placeholders}})
//        src/site/render.js     the render functions (the browser uses the same ones)
//        src/site/main.js       browser entry, bundled with three.js by esbuild
//        src/site/style.css
//        src/assets/cv/*.pdf    the no-phone CVs (made by scripts/make_web_cv.py)
// Writes docs/index.html (English, follows the browser), docs/en/index.html, docs/tr/index.html,
//        docs/assets/{site.js,site.css,THREE-LICENSE.txt}, docs/assets/cv/*.pdf, docs/.nojekyll
//
// Everything is built in memory and checked first; docs/ is only replaced when every check
// passes. The checks fail the build on anything private or third-party in the served files.
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { createHash } from "node:crypto";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "docs");
const SITE = join(ROOT, "src", "site");

const PAGES = [
  // output path, language of the raw HTML, forced language, path on the site
  { out: "index.html", lang: "en", force: "", path: "/" },
  { out: "en/index.html", lang: "en", force: "en", path: "/en/" },
  { out: "tr/index.html", lang: "tr", force: "tr", path: "/tr/" },
];
const OG_LOCALE = { en: "en_US", tr: "tr_TR" };

/* ------------------------------------------------------------------ */
/* Guard rules                                                          */
/* ------------------------------------------------------------------ */
const ALLOWED_HOSTS = new Set([
  "github.com",
  "www.linkedin.com",
  "furkanzt.github.io",
  "arrow-escape.kutie.workers.dev",
  "cobite.kutie.workers.dev",
  "matching-numbers.kutie.workers.dev",
  "www.w3.org", // XML namespaces (the favicon SVG, three.js's createElementNS), never fetched
]);
// URLs that sit inside comments of three.js's GLSL shader chunks (shipped as strings, never
// fetched). Allowed in site.js only. A new one fails the build until a person has looked at it.
const THREE_INERT_HOSTS = new Set(["jcgt.org"]);
// Long integer literals in the minified JavaScript that are maths, not phone numbers.
// Allowed in site.js only; any other 10+ digit run fails the build.
const JS_NUMERIC_CONSTANTS = new Set([
  "4294967295", // 2^32 - 1 (three.js and our PRNG)
  "4294967296", // 2^32 (our PRNG, mulberry32)
  "2147483647", // 2^31 - 1 (three.js)
  "1831565813", // 0x6d2b79f5, the mulberry32 increment
  "1431655765", // 0x55555555, a bit-interleaving mask (three.js)
  "10000000000000001", // the mantissa of 10000000000000001e-32, a float epsilon (three.js Line3)
]);
const EMAIL = /[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z.]+/g;
// Words that must never be served (private names and handles). The list itself is private, so
// it lives in content/private/ (git-ignored) and is never committed to this public repo:
// one word per line, matched case-insensitively anywhere in the text; "#" starts a comment.
const WORDS_FILE = join(ROOT, "content", "private", "guard-words.txt");
const WORDS = loadWords(WORDS_FILE);

function loadWords(file) {
  let raw;
  try {
    raw = readFileSync(file, "utf8");
  } catch (e) {
    console.error(`BUILD FAILED: ${file} is missing; docs/ was not touched.\n` +
      "  The guard needs its private word list (one word per line). It is git-ignored on purpose.");
    process.exit(1);
  }
  const words = raw.split("\n").map((l) => l.replace(/#.*/, "").trim()).filter(Boolean);
  if (!words.length) {
    console.error(`BUILD FAILED: ${file} lists no words; docs/ was not touched.`);
    process.exit(1);
  }
  const escRe = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(words.map(escRe).join("|"), "gi");
}
// A Turkish mobile number written with separators (a bare digit run is caught below).
const PHONE_SPACED = /(?<![\d.])(?:\+?90|0)?[\s(]*5\d{2}[)\s.-]+\d{3}[\s.-]+\d{2}[\s.-]+\d{2}(?!\d)/g;

function guard(name, text, kind) {
  const problems = [];
  const hit = (what, m) =>
    problems.push(`${name}: ${what}: ...${text.slice(Math.max(0, m.index - 30), m.index + m[0].length + 30).replace(/\s+/g, " ")}...`);
  for (const m of text.matchAll(EMAIL)) hit("full email address", m);
  for (const m of text.matchAll(/tel:/gi)) hit('"tel:"', m);
  for (const m of text.matchAll(/\+90/g)) hit('"+90"', m);
  for (const m of text.matchAll(WORDS)) hit(`forbidden word "${m[0]}"`, m);
  for (const m of text.matchAll(PHONE_SPACED)) hit("phone-like number", m);
  if (kind === "js") {
    // Fractional parts of decimals (after a ".") are not phone numbers; whole runs are.
    for (const m of text.matchAll(/(?<![\d.])\d{10,}(?!\d)/g)) {
      if (!JS_NUMERIC_CONSTANTS.has(m[0])) hit("10+ digit run", m);
    }
  } else {
    for (const m of text.matchAll(/\d{10,}/g)) hit("10+ digit run", m);
  }
  const hosts = new Set();
  for (const m of text.matchAll(/https?:\/\/([^\/\s"'`<>)\\]+)/g)) {
    const host = m[1].toLowerCase();
    hosts.add(host);
    if (ALLOWED_HOSTS.has(host)) continue;
    if (kind === "js" && THREE_INERT_HOSTS.has(host)) continue;
    hit(`host not on the allow-list (${host})`, m);
  }
  return { problems, hosts };
}

/* ------------------------------------------------------------------ */
/* Build in memory                                                      */
/* ------------------------------------------------------------------ */
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
const shortHash = (buf) => createHash("sha256").update(buf).digest("hex").slice(0, 8);

const content = JSON.parse(readFileSync(join(ROOT, "content", "content.json"), "utf8"));
const template = readFileSync(join(SITE, "page.html"), "utf8");
const { renderSlots, renderPoster } = await import(pathToFileURL(join(SITE, "render.js")).href);

const bundle = await build({
  entryPoints: [join(SITE, "main.js")],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  legalComments: "inline", // keeps three.js's MIT licence notice in the bundle
  write: false,
  logLevel: "warning",
});
const js = Buffer.from(bundle.outputFiles[0].contents);
const css = readFileSync(join(SITE, "style.css"));

const files = new Map(); // path inside docs/ -> Buffer
files.set("assets/site.js", js);
files.set("assets/site.css", css);
files.set("assets/THREE-LICENSE.txt", readFileSync(join(ROOT, "node_modules", "three", "LICENSE")));
files.set(".nojekyll", Buffer.alloc(0));
const cvDir = join(ROOT, "src", "assets", "cv");
const cvs = readdirSync(cvDir).filter((f) => f.endsWith(".pdf"));
for (const f of cvs) files.set(`assets/cv/${f}`, readFileSync(join(cvDir, f)));
for (const lang of ["en", "tr"]) {
  const want = content.site.cv[lang].replace(/^\//, "");
  if (!files.has(want)) throw new Error(`content.site.cv.${lang} points to ${want}, which is not in src/assets/cv/`);
}

const poster = renderPoster();
for (const page of PAGES) {
  const t = content[page.lang];
  const other = page.lang === "en" ? "tr" : "en";
  const canonical = content.site.origin + page.path;
  const values = {
    lang: page.lang,
    force: page.force,
    title: esc(t.title),
    description: esc(t.description),
    name: esc(t.name),
    canonical: esc(canonical),
    origin: esc(content.site.origin),
    og_locale: OG_LOCALE[page.lang],
    og_locale_alt: OG_LOCALE[other],
    toggle_label: esc(t.ui.toggle),
    en_pressed: String(page.lang === "en"),
    tr_pressed: String(page.lang === "tr"),
    en_current: page.force === "en" ? ' aria-current="page"' : "",
    tr_current: page.force === "tr" ? ' aria-current="page"' : "",
    css_version: shortHash(css),
    js_version: shortHash(js),
  };
  let html = template.replace(/\{\{(\w+)\}\}/g, (all, key) => {
    if (!(key in values)) throw new Error(`page.html: unknown placeholder ${all}`);
    return values[key];
  });
  const slots = { ...renderSlots(content, page.lang), poster };
  for (const [name, value] of Object.entries(slots)) {
    const re = new RegExp(`<!--@${name}-->[\\s\\S]*?<!--/@${name}-->`);
    if (!re.test(html)) throw new Error(`page.html: slot marker missing: ${name}`);
    html = html.replace(re, () => value); // the markers only guide the build
  }
  const leftover = html.match(/<!--\/?@\w+-->/);
  if (leftover) throw new Error(`page.html: slot with no render function: ${leftover[0]}`);
  if (!html.startsWith(`<!doctype html>\n<html lang="${page.lang}">`)) throw new Error(`${page.out}: wrong <html lang>`);
  files.set(page.out, Buffer.from(html, "utf8"));
}

/* ------------------------------------------------------------------ */
/* Check, then write                                                    */
/* ------------------------------------------------------------------ */
const problems = [];
const hostsSeen = {};
for (const [path, buf] of files) {
  const kind = path.endsWith(".js") ? "js" : path.endsWith(".html") ? "html" : path.endsWith(".css") ? "css" : null;
  if (!kind) continue;
  const r = guard(path, buf.toString("utf8"), kind);
  problems.push(...r.problems);
  hostsSeen[path] = [...r.hosts].sort();
}
if (!/@license[\s\S]{0,120}Three\.js Authors[\s\S]{0,80}MIT/.test(js.toString("utf8"))) {
  problems.push("assets/site.js: three.js licence notice is missing from the bundle");
}
if (problems.length) {
  console.error(`BUILD FAILED: ${problems.length} problem(s); docs/ was not touched.\n`);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}

rmSync(OUT, { recursive: true, force: true });
for (const [path, buf] of files) {
  const target = join(OUT, path);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, buf);
}

const kb = (n) => (n / 1024).toFixed(1).padStart(7) + " KB";
console.log("wrote docs/ (checks passed: no full emails, no phone strings, no forbidden words, allow-listed hosts only)");
for (const [path, buf] of [...files].sort(([a], [b]) => a.localeCompare(b))) {
  const gz = /\.(html|js|css|txt)$/.test(path) ? kb(gzipSync(buf, { level: 9 }).length) + " gzip" : "";
  console.log(`  ${path.padEnd(42)}${kb(buf.length)} raw ${gz}`);
}
for (const [path, hosts] of Object.entries(hostsSeen)) {
  if (hosts.length) console.log(`  hosts in ${path}: ${hosts.join(", ")}`);
}
