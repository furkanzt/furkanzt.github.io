// Bundle one prototype into a single self-contained .html file (opens from file://).
//
//   node scripts/proto_build.mjs <name>
//
// Reads  prototypes/<name>/index.html   (source page; references main.js and style.css)
//        prototypes/<name>/main.js      (ES module; may `import ... from "three"`)
//        prototypes/<name>/style.css    (optional)
//        prototypes/content.json        (shared content, injected where the page has {{CONTENT_JSON}})
// Writes prototypes/dist/<name>.html and prints the sizes.
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const name = process.argv[2];
if (!name) {
  console.error("usage: node scripts/proto_build.mjs <name>");
  process.exit(2);
}
const dir = resolve(root, "prototypes", name);
const htmlPath = resolve(dir, "index.html");
if (!existsSync(htmlPath)) {
  console.error("missing " + htmlPath);
  process.exit(2);
}

const result = await build({
  entryPoints: [resolve(dir, "main.js")],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  legalComments: "inline", // keeps three.js's MIT license comment in the bundle
  write: false,
  logLevel: "warning",
});
const js = result.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");

let html = readFileSync(htmlPath, "utf8");
const cssPath = resolve(dir, "style.css");
const css = existsSync(cssPath) ? readFileSync(cssPath, "utf8") : "";
const contentPath = resolve(root, "prototypes", "content.json");
const content = existsSync(contentPath) ? readFileSync(contentPath, "utf8").replace(/<\//g, "<\\/") : "{}";

html = html
  .replace(/<link[^>]*href="style\.css"[^>]*>/i, () => `<style>\n${css}\n</style>`)
  .replace(/<script[^>]*src="main\.js"[^>]*><\/script>/i, () => `<script>\n${js}\n</script>`)
  .replace(/\{\{CONTENT_JSON\}\}/g, () => content);

if (/src="main\.js"|href="style\.css"/.test(html)) {
  console.error("main.js or style.css reference was not replaced: use <script src=\"main.js\"></script> and <link rel=\"stylesheet\" href=\"style.css\"> exactly");
  process.exit(1);
}

const outDir = resolve(root, "prototypes", "dist");
mkdirSync(outDir, { recursive: true });
const out = resolve(outDir, name + ".html");
writeFileSync(out, html);
const kb = (n) => (n / 1024).toFixed(1) + " KB";
console.log(`wrote ${out}`);
console.log(`  js: ${kb(Buffer.byteLength(js))} raw, ${kb(gzipSync(js).length)} gzip`);
console.log(`  html total: ${kb(Buffer.byteLength(html))} raw, ${kb(gzipSync(html).length)} gzip`);
console.log(`  file URL: file://${out}`);
