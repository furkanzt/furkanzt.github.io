// The routing figure of claude-agenting (formerly the hero): its layout, its text, the static
// poster and the path helpers the three.js version (scene.js) shares. Pure: no DOM, no three.js.
// Used by the claude-agenting story page.
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
const pct = (v) => +(v * 100).toFixed(2) + "%";
const ARROW =
  '<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4.5 11.5 11 5M6 4.5h5.5V10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
const AGENTING_URL = "https://github.com/furkanzt/claude-agenting";

/* ------------------------------------------------------------------ */
/* Layout of the figure, in normalised stage coordinates (0..1).       */
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


export function renderStageText(lang) {
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

export function renderCaption(lang) {
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
