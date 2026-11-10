// Pure rendering for furkanzt.github.io. No DOM, no three.js: the build (Node) bakes this
// output into the static pages, and the browser calls the same functions when the language
// toggle swaps the text in place, so the raw HTML and the toggled page cannot drift apart.

import { ART, renderArtPoster, artSteps } from "./card-art.js";

/* ------------------------------------------------------------------ */
/* Shared layout of the figure, in normalised stage coordinates (0..1). */
/* The static poster, the 3D scene and the tier buttons all read this.  */
/* ------------------------------------------------------------------ */
export const LAYOUT = {
  aspect: 4 / 3,
  src: { x: 0.035, y0: 0.12, y1: 0.88 },
  router: { x: 0.38, y: 0.5 },
  tiers: [
    { id: "haiku", x: 0.7, y: 0.2 },
    { id: "sonnet", x: 0.7, y: 0.5 },
    { id: "opus", x: 0.7, y: 0.8 },
  ],
};

// Task kinds and their tier, from the claude-agenting routing table (skills/agenting/SKILL.md).
// Order matters only for picking a kind at random in the scene; no frequencies are claimed.
export const KINDS = ["haiku", "sonnet", "haiku", "sonnet", "opus", "sonnet"];

// Text for the figure. Tier names and effort values are the plugin's own identifiers, so
// they stay the same in both languages.
export const VIZ = {
  en: {
    tasks: "tasks",
    router: "router",
    caption: "Illustrative. Each task passes a router and goes to the cheapest model tier that does the job, as claude-agenting routes subagents.",
    hint: "Select a tier to see what it is used for.",
    link: "claude-agenting on GitHub",
    tiers: {
      haiku: {
        desc: "cheap and fast",
        jobs: [
          ["Listing and counting files", "medium"],
          ["Reading code or prose and reporting what it does", "medium"],
        ],
      },
      sonnet: {
        desc: "balanced",
        jobs: [
          ["Mechanical text cleanup", "low"],
          ["Turning prose into rules; classifying", "medium–high"],
          ["Adversarial verification", "high"],
        ],
      },
      opus: {
        desc: "deep reasoning",
        jobs: [["Synthesizing across a whole document", "xhigh"]],
      },
    },
  },
  tr: {
    tasks: "görevler",
    router: "yönlendirici",
    caption: "Temsilî. Her görev bir yönlendiriciden geçer ve işi yapabilen en ucuz model katmanına gider; claude-agenting alt ajanları böyle yönlendirir.",
    hint: "Ne için kullanıldığını görmek için bir katman seçin.",
    link: "GitHub'da claude-agenting",
    tiers: {
      haiku: {
        desc: "ucuz ve hızlı",
        jobs: [
          ["Dosyaları listeleme ve sayma", "medium"],
          ["Kodu ya da metni okuyup ne yaptığını raporlama", "medium"],
        ],
      },
      sonnet: {
        desc: "dengeli",
        jobs: [
          ["Mekanik metin temizliği", "low"],
          ["Düz metni kurallara dönüştürme; sınıflandırma", "medium–high"],
          ["Çekişmeli doğrulama", "high"],
        ],
      },
      opus: {
        desc: "derin akıl yürütme",
        jobs: [["Bütün bir belge boyunca sentez", "xhigh"]],
      },
    },
  },
};

const AGENTING_URL = "https://github.com/furkanzt/claude-agenting";

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */
export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

const ARROW =
  '<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4.5 11.5 11 5M6 4.5h5.5V10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
const DOWN =
  '<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M8 2.5v8M4.75 7.5 8 10.75l3.25-3.25M3 13.5h10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';

const hostOf = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const repoOf = (url) => url.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");
const fileOf = (path) => path.slice(path.lastIndexOf("/") + 1);
// A long file name may break after its first underscore only, and the icon stays with the
// last word ("MustafaFurkanOzates_" / "CV_EN.pdf ↓" on a 320 px screen).
function fileLabel(name, icon) {
  const i = name.indexOf("_");
  if (i < 0) return `<span class="nowrap">${esc(name)}${icon}</span>`;
  return `${esc(name.slice(0, i + 1))}<wbr><span class="nowrap">${esc(name.slice(i + 1))}${icon}</span>`;
}
const pct = (v) => +(v * 100).toFixed(2) + "%";

/** The no-JavaScript form of an address: readable, but not a harvestable string. */
export const spelledEmail = (e) => `${e.user} [at] ${e.domain}`;

// Split "Label: rest" once (headline, skills). Text is kept exactly; only markup is added.
function splitOnce(text, sep) {
  const i = text.indexOf(sep);
  return i < 0 ? [null, text] : [text.slice(0, i), text.slice(i + sep.length)];
}

// Split a comma list but not inside parentheses: "LLM Integration (OpenAI, Anthropic, Gemini)" stays whole.
function splitList(text) {
  const out = [];
  let depth = 0;
  let cur = "";
  for (const ch of text) {
    if (ch === "(") depth++;
    if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

/* ------------------------------------------------------------------ */
/* Slots                                                                */
/* ------------------------------------------------------------------ */
const SECTION_IDS = ["experience", "projects", "research", "education", "skills", "contact"];

function renderNav(t) {
  return SECTION_IDS.map((id) => `<a href="#${id}">${esc(t.ui[id])}</a>`).join("");
}

function renderHero(t, site, lang) {
  const [lead, rest] = splitOnce(t.headline, ": ");
  const headline = lead ? `<strong>${esc(lead)}:</strong> ${esc(rest)}` : esc(rest);
  return (
    `<h1 class="name">${esc(t.name)}</h1>` +
    `<p class="headline">${headline}</p>` +
    `<p class="avail"><span class="avail-dot" aria-hidden="true"></span>${esc(t.availability)}</p>` +
    `<div class="actions">` +
    `<a class="btn btn--primary" data-email="0" href="#contact">${esc(t.ui.email)}</a>` +
    `<a class="btn" href="${esc(site.linkedin)}">LinkedIn</a>` +
    `<a class="btn" href="${esc(site.github)}">GitHub</a>` +
    `<a class="btn" href="${esc(site.cv[lang])}" type="application/pdf" hreflang="${lang}">${esc(t.ui.cv)}</a>` +
    `</div>`
  );
}

function renderStageText(lang) {
  const v = VIZ[lang];
  const r = LAYOUT.router;
  let html =
    `<span class="vz-label vz-label--tasks" style="left:${pct(LAYOUT.src.x)};top:4.5%">${esc(v.tasks)}</span>` +
    `<span class="vz-label vz-label--router" style="left:${pct(r.x)};top:${pct(r.y + 0.085)}">${esc(v.router)}</span>`;
  for (const tier of LAYOUT.tiers) {
    html +=
      `<button type="button" class="tier" data-tier="${tier.id}" aria-expanded="false" aria-controls="vz-pin" style="left:${pct(tier.x)};top:${pct(tier.y)}">` +
      `<span class="tier-hit" aria-hidden="true"></span>` +
      `<span class="tier-text"><span class="tier-name">${tier.id}</span><span class="tier-desc">${esc(v.tiers[tier.id].desc)}</span></span>` +
      `</button>`;
  }
  return html;
}

function renderCaption(lang) {
  const v = VIZ[lang];
  return (
    `<span class="cap-text">${esc(v.caption)} <span class="cap-hint">${esc(v.hint)}</span></span>` +
    `<a class="cap-link" href="${AGENTING_URL}">${esc(v.link)}${ARROW}</a>`
  );
}

/** The pinned label for one tier (shown only after a tier is selected, so never in the raw HTML). */
export function renderPin(lang, tierId) {
  const v = VIZ[lang];
  const tier = v.tiers[tierId];
  const jobs = tier.jobs
    .map(([job, effort]) => `<li><span class="pin-job">${esc(job)}</span><code class="pin-effort">effort: ${esc(effort)}</code></li>`)
    .join("");
  return `<p class="pin-head"><code class="pin-tier">${tierId}</code><span>${esc(tier.desc)}</span></p><ul class="pin-jobs">${jobs}</ul>`;
}

// One employer: the latest role is the heading; earlier roles at the same employer follow as
// quieter lines. Every employer after the first is set as a lighter, secondary entry (CSS).
function renderJob(job, i) {
  const [latest, ...earlier] = job.roles;
  const line = (role, tag, cls) =>
    `<div class="job-line${cls}"><${tag} class="job-role">${esc(role.title)}</${tag}><p class="dates">${esc(role.dates)}</p></div>`;
  return (
    `<article class="job${i ? " job--earlier" : ""}"><header class="job-head">` +
    line(latest, "h3", "") +
    earlier.map((role) => line(role, "p", " job-line--prev")).join("") +
    `<p class="job-org">${esc(job.org)}<span class="sep" aria-hidden="true"></span>${esc(job.location)}</p>` +
    `</header><ul class="bullets">${job.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></article>`
  );
}

function renderExperience(t) {
  return (
    `<section class="sec" id="experience" aria-labelledby="h-experience"><h2 id="h-experience">${esc(t.ui.experience)}</h2><div class="sec-body">` +
    `<div class="jobs">${t.experience.map(renderJob).join("")}</div>` +
    `</div></section>`
  );
}

const CHEVRON =
  '<svg class="ic xp-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 6.25 8 10.25l4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';

/** "{n} steps" style strings from content.json. */
const fill = (tpl, vars) => String(tpl).replace(/\{(\w+)\}/g, (all, k) => (k in vars ? String(vars[k]) : all));

// The illustration of one card: the static drawing plus its text labels (positioned from the
// shared layout). aria-hidden: everything it shows is also said in the explainer text.
function renderArt(p) {
  if (!p.art) return "";
  const layout = ART[p.art.kind];
  const labels = Object.entries(p.art.labels || {})
    .map(([key, text]) => {
      const a = layout.labels[key];
      if (!a) throw new Error(`card art ${p.art.kind}: no anchor for label "${key}"`);
      return `<span class="pv-label pv-label--${key}" data-anchor="${key}" style="left:${pct(a.x)};top:${pct(a.y)}">${esc(text)}</span>`;
    })
    .join("");
  return (
    `<figure class="pv" data-art="${esc(p.art.kind)}" aria-hidden="true">` +
    `<div class="pv-stage">${renderArtPoster(p.art.kind)}<div class="pv-labels">${labels}</div></div>` +
    `</figure>`
  );
}

// The layered explainer: a plain <details>, so it opens without JavaScript and the whole text
// is in the raw HTML. The script adds the step navigation and syncs the illustration.
function renderExplain(p, ui) {
  const x = p.explain;
  if (!x) return "";
  if (p.art && artSteps(p.art.kind) !== x.steps.length) {
    throw new Error(`${p.id}: ${x.steps.length} steps in content.json, the ${p.art.kind} illustration has ${artSteps(p.art.kind)}`);
  }
  const steps = x.steps
    .map(
      (st, k) =>
        `<li class="xp-step" data-step="${k}"><span class="xp-n" aria-hidden="true">${k + 1}</span>` +
        `<div class="xp-st"><p class="xp-st-t">${esc(st.title)}</p><p class="xp-st-x">${esc(st.text)}</p></div></li>`
    )
    .join("");
  const facts = (x.deeper || []).map((d) => `<li>${esc(d)}</li>`).join("");
  const links = (x.links || [])
    .map((l) => `<li><a href="${esc(l.url)}">${esc(l.label)}${ARROW}</a></li>`)
    .join("");
  const deeper = facts
    ? `<details class="xp-deep"><summary class="xp-deep-sum"><span>${esc(ui.goDeeper)}</span>${CHEVRON}</summary>` +
      `<div class="xp-deep-body"><ul class="xp-facts">${facts}</ul>${links ? `<ul class="xp-links">${links}</ul>` : ""}</div></details>`
    : "";
  return (
    `<details class="xp" id="xp-${esc(p.id)}">` +
    `<summary class="xp-sum"><span class="xp-sum-t">${esc(ui.howItWorks)}</span><span class="xp-sum-n">${esc(fill(ui.stepsCount, { n: x.steps.length }))}</span>${CHEVRON}</summary>` +
    `<div class="xp-body">` +
    (x.lead ? `<p class="xp-lead">${esc(x.lead)}</p>` : "") +
    `<ol class="xp-steps">${steps}</ol>` +
    `<div class="xp-nav" hidden><button type="button" class="xp-btn" data-dir="-1">${esc(ui.back)}</button>` +
    `<p class="xp-count" aria-live="polite" data-tpl="${esc(ui.stepOf)}"></p>` +
    `<button type="button" class="xp-btn xp-btn--next" data-dir="1">${esc(ui.next)}</button></div>` +
    deeper +
    `</div></details>`
  );
}

function renderProject(p, i, ui) {
  let foot = "";
  if (p.url) {
    foot = `<p class="proj-link"><a href="${esc(p.url)}">${esc(ui.viewOnGitHub)}${ARROW}</a><code class="repo">${esc(repoOf(p.url))}</code></p>`;
  }
  let plays = "";
  if (p.links && p.links.length) {
    plays =
      `<ul class="plays">` +
      p.links
        .map(
          (l) =>
            `<li><a href="${esc(l.url)}"><span class="play-verb">${esc(ui.playNow)}</span><span class="play-name">${esc(l.label)}</span><code class="play-host">${esc(hostOf(l.url))}</code>${ARROW}</a></li>`
        )
        .join("") +
      `</ul><p class="note">${esc(ui.gamesNote)}</p>`;
  }
  const art = renderArt(p);
  return (
    `<article class="proj${art ? " proj--art" : ""}"${p.id ? ` id="p-${esc(p.id)}" data-proj="${esc(p.id)}"` : ""}>` +
    art +
    `<div class="proj-body">` +
    `<div class="proj-id"><h3 class="proj-name">${esc(p.name)}</h3><p class="proj-tech">${esc(p.tech)}</p></div>` +
    `<div class="proj-main"><p class="proj-text">${esc(p.text)}</p>${plays}${foot}</div>` +
    renderExplain(p, ui) +
    `</div></article>`
  );
}

function renderProjects(t) {
  return (
    `<section class="sec" id="projects" aria-labelledby="h-projects"><h2 id="h-projects">${esc(t.ui.projects)}</h2><div class="sec-body">` +
    `<div class="projects">${t.projects.map((p, i) => renderProject(p, i, t.ui)).join("")}</div>` +
    `</div></section>`
  );
}

function renderTitle(title) {
  const [lead, rest] = splitOnce(title, " — ");
  return lead ? `<strong>${esc(lead)}</strong> — ${esc(rest)}` : esc(title);
}

function renderResearch(t) {
  const rows = t.research
    .map(
      (r) =>
        `<li class="row"><p class="row-title">${renderTitle(r.title)}</p><p class="dates">${esc(r.dates)}</p>` +
        (r.people ? `<p class="row-meta">${esc(r.people)}</p>` : "") +
        `</li>`
    )
    .join("");
  return `<section class="sec" id="research" aria-labelledby="h-research"><h2 id="h-research">${esc(t.ui.research)}</h2><div class="sec-body"><ul class="rows">${rows}</ul></div></section>`;
}

function renderEducation(t) {
  const ed = t.education;
  const rows = ed.degrees
    .map(
      (d) =>
        `<li class="row"><p class="row-title">${esc(d.title)}</p><p class="dates">${esc(d.dates)}</p>` +
        (d.thesis ? `<p class="row-meta">${esc(d.thesis)}</p>` : "") +
        `</li>`
    )
    .join("");
  return (
    `<section class="sec" id="education" aria-labelledby="h-education"><h2 id="h-education">${esc(t.ui.education)}</h2><div class="sec-body">` +
    `<p class="edu-org"><strong>${esc(ed.org)}</strong><span class="sep" aria-hidden="true"></span>${esc(ed.location)}</p>` +
    `<ul class="rows">${rows}</ul></div></section>`
  );
}

function renderSkills(t) {
  const rows = t.skills
    .map((s) => {
      const [label, rest] = splitOnce(s, ": ");
      const items = splitList(rest)
        .map((x) => `<li>${esc(x)}</li>`)
        .join("");
      return `<div class="skill"><dt>${esc(label || "")}</dt><dd><ul class="inline-list">${items}</ul></dd></div>`;
    })
    .join("");
  return `<section class="sec" id="skills" aria-labelledby="h-skills"><h2 id="h-skills">${esc(t.ui.skills)}</h2><div class="sec-body"><dl class="skills">${rows}</dl></div></section>`;
}

function renderContact(t, site, lang) {
  const labels = [t.ui.email, t.ui.emailUni];
  // Without JavaScript the address shows spelled out and is not a link; the script turns
  // each one into a mailto link (the full address never appears in the served files).
  const emails = site.emails
    .map(
      (e, i) =>
        `<li class="c-row"><span class="c-label">${esc(labels[i] || t.ui.email)}</span><a class="c-link" data-email="${i}">${esc(spelledEmail(e))}</a></li>`
    )
    .join("");
  return (
    `<section class="sec sec--contact" id="contact" aria-labelledby="h-contact"><h2 id="h-contact">${esc(t.ui.contact)}</h2><div class="sec-body">` +
    `<ul class="contact">${emails}` +
    `<li class="c-row"><span class="c-label">LinkedIn</span><a class="c-link" href="${esc(site.linkedin)}">${esc(hostOf(site.linkedin).replace(/^www\./, ""))}${ARROW}</a></li>` +
    `<li class="c-row"><span class="c-label">GitHub</span><a class="c-link" href="${esc(site.github)}">${esc(hostOf(site.github))}${ARROW}</a></li>` +
    `<li class="c-row"><span class="c-label">${esc(t.ui.cv)}</span><a class="c-link" href="${esc(site.cv[lang])}" type="application/pdf" hreflang="${lang}">${fileLabel(fileOf(site.cv[lang]), DOWN)}</a></li>` +
    `</ul><p class="c-loc">${esc(t.location)}</p></div></section>`
  );
}

function renderFooter(t) {
  return `<p>${esc(t.name)}</p><p>${esc(t.location)}</p>`;
}

/** Every language-dependent slot of the page body, keyed by its data-slot name. */
export function renderSlots(content, lang) {
  const t = content[lang];
  const site = content.site;
  return {
    nav: renderNav(t),
    hero: renderHero(t, site, lang),
    stage: renderStageText(lang),
    caption: renderCaption(lang),
    sections:
      renderExperience(t) +
      renderProjects(t) +
      renderResearch(t) +
      renderEducation(t) +
      renderSkills(t) +
      renderContact(t, site, lang),
    footer: renderFooter(t),
  };
}

/* ------------------------------------------------------------------ */
/* Path helpers in normalised coordinates, shared by poster and scene.  */
/* ------------------------------------------------------------------ */
export const lerp = (a, b, t) => a + (b - a) * t;
function quad(p0, p1, p2, t) {
  const u = 1 - t;
  return u * u * p0 + 2 * u * t * p1 + t * t * p2;
}
function cubic(p0, p1, p2, p3, t) {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}
export function inPoint(sy, t) {
  const { src, router } = LAYOUT;
  const cx = 0.25;
  const cy = lerp(sy, router.y, 0.55);
  return [quad(src.x, cx, router.x, t), quad(sy, cy, router.y, t)];
}
export function outPoint(tier, t) {
  const r = LAYOUT.router;
  return [cubic(r.x, r.x + 0.13, tier.x - 0.15, tier.x, t), cubic(r.y, r.y, tier.y, tier.y, t)];
}

/* ------------------------------------------------------------------ */
/* Static poster (SVG): the same composition as the 3D scene, frozen.  */
/* It carries no text, so it is the same in both languages.            */
/* ------------------------------------------------------------------ */
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function renderPoster() {
  const W = 1200;
  const H = 900;
  const rnd = mulberry32(20261110);
  const f = (n) => n.toFixed(1);
  let routes = "";
  const ins = 9;
  for (let k = 0; k < ins; k++) {
    const sy = lerp(LAYOUT.src.y0, LAYOUT.src.y1, k / (ins - 1));
    let d = "";
    for (let s = 0; s <= 24; s++) {
      const [x, y] = inPoint(sy, s / 24);
      d += (s ? "L" : "M") + f(x * W) + " " + f(y * H);
    }
    routes += `<path d="${d}"/>`;
  }
  for (const tier of LAYOUT.tiers) {
    let d = "";
    for (let s = 0; s <= 32; s++) {
      const [x, y] = outPoint(tier, s / 32);
      d += (s ? "L" : "M") + f(x * W) + " " + f(y * H);
    }
    routes += `<path d="${d}"/>`;
  }
  let dotsIn = "";
  for (let i = 0; i < 70; i++) {
    const sy = lerp(LAYOUT.src.y0, LAYOUT.src.y1, rnd());
    const [x, y] = inPoint(sy, Math.pow(rnd(), 0.8));
    dotsIn += `<circle cx="${f(x * W + (rnd() - 0.5) * 10)}" cy="${f(y * H + (rnd() - 0.5) * 10)}" r="${f(2 + rnd() * 2)}"/>`;
  }
  const tierDots = { haiku: "", sonnet: "", opus: "" };
  for (let i = 0; i < 90; i++) {
    const id = KINDS[(rnd() * KINDS.length) | 0];
    const tier = LAYOUT.tiers.find((x) => x.id === id);
    if (rnd() < 0.45) {
      const [x, y] = outPoint(tier, 0.1 + rnd() * 0.85);
      tierDots[id] += `<circle cx="${f(x * W)}" cy="${f(y * H)}" r="${f(2 + rnd() * 2)}"/>`;
    } else {
      const a = rnd() * Math.PI * 2;
      const rad = 20 + rnd() * 55;
      tierDots[id] += `<circle cx="${f(tier.x * W + Math.cos(a) * rad)}" cy="${f(tier.y * H + Math.sin(a) * rad * 0.55)}" r="${f(2 + rnd() * 2.4)}"/>`;
    }
  }
  const rx = LAYOUT.router.x * W;
  const ry = LAYOUT.router.y * H;
  let nuclei = "";
  for (const tier of LAYOUT.tiers) {
    const cx = tier.x * W;
    const cy = tier.y * H;
    nuclei += `<g class="p-nucleus p-${tier.id}"><ellipse cx="${cx}" cy="${cy}" rx="44" ry="24" fill="none"/><path d="M${cx} ${cy - 15}L${cx + 13} ${cy}L${cx} ${cy + 15}L${cx - 13} ${cy}Z" fill="none"/></g>`;
  }
  return (
    `<svg class="poster" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">` +
    `<g class="p-routes" fill="none">${routes}</g>` +
    `<g class="p-dots p-dots--in">${dotsIn}</g>` +
    `<g class="p-dots p-haiku">${tierDots.haiku}</g><g class="p-dots p-sonnet">${tierDots.sonnet}</g><g class="p-dots p-opus">${tierDots.opus}</g>` +
    `<g class="p-router" fill="none"><circle cx="${rx}" cy="${ry}" r="38"/><path d="M${rx} ${ry - 18}L${rx + 18} ${ry}L${rx} ${ry + 18}L${rx - 18} ${ry}Z"/></g>` +
    nuclei +
    `</svg>`
  );
}
