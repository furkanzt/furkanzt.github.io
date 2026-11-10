// Small illustrations for the project cards. Pure (no DOM, no three.js): the build bakes the
// static SVG of each one into the page, and the browser's three.js version (cards.js) reads the
// same layout, so the drawing and the animation cannot drift apart.
//
// Coordinates are normalised to the figure (0..1 across, 0..1 down, aspect ART_ASPECT).
// Each illustration is split into named groups. A step of the explainer "focuses" some of them
// (see `steps`); the SVG version dims the rest with CSS, the 3D version eases their opacity.

export const ART_ASPECT = 16 / 10;

const W = 640;
const H = 400;
const f = (n) => +n.toFixed(1);
const X = (nx) => f(nx * W);
const Y = (ny) => f(ny * H);

/* ------------------------------------------------------------------ */
/* claude-tdd-bdd-harness: scenarios cite tests, a CI check walks every */
/* citation, an unproven scenario must be tagged @gap.                  */
/* ------------------------------------------------------------------ */
const TDD_ROWS = [0.215, 0.4, 0.585, 0.77];
export const TDD = {
  rows: TDD_ROWS,
  scen: { cx: 0.19, w: 0.25, h: 0.13 },
  test: { cx: 0.81, w: 0.17, h: 0.1 },
  // scenario i cites test LINK[i] (crossed on purpose: a citation is a reference, not a row)
  link: [0, 2, 1, 3],
  scan: { x0: 0.36, x1: 0.68, y0: 0.13, y1: 0.85 },
  gate: { x: 0.44, y: 0.915, r: 0.042 },
  ghost: 1, // the citation that breaks in the "check" step (its test was renamed)
  gap: 3, // the scenario that has no proof yet in the "gap" step
  // label anchors (normalised); the text comes from content.json (`art` labels)
  labels: {
    scenarios: { x: 0.065, y: 0.105 },
    tests: { x: 0.725, y: 0.105 },
    check: { x: 0.49, y: 0.915 },
    gap: { x: 0.335, y: 0.77 },
  },
  // focus words per explainer step (must match the number of steps in content.json)
  steps: [
    ["scen"],
    ["scen", "links", "tests"],
    ["links", "tests", "check", "ghost"],
    ["scen", "links", "tests", "check", "gap"],
  ],
};

export function linkEnds(i) {
  const t = TDD;
  const sx = t.scen.cx + t.scen.w / 2;
  const tx = t.test.cx - t.test.w / 2;
  return { x0: sx, y0: t.rows[i], x1: tx, y1: t.rows[t.link[i]] };
}

/** A point on citation i (a horizontal S curve), t in 0..1. */
export function linkPoint(i, t) {
  const { x0, y0, x1, y1 } = linkEnds(i);
  const u = 1 - t;
  const cx0 = x0 + (x1 - x0) * 0.45;
  const cx1 = x0 + (x1 - x0) * 0.55;
  const x = u * u * u * x0 + 3 * u * u * t * cx0 + 3 * u * t * t * cx1 + t * t * t * x1;
  const y = u * u * u * y0 + 3 * u * u * t * y0 + 3 * u * t * t * y1 + t * t * t * y1;
  return [x, y];
}

function rect(cx, cy, w, h, r, cls = "") {
  return `<rect${cls ? ` class="${cls}"` : ""} x="${X(cx - w / 2)}" y="${Y(cy - h / 2)}" width="${X(w)}" height="${Y(h)}" rx="${r}"/>`;
}

function tddPoster() {
  const t = TDD;
  let scen = "";
  t.rows.forEach((y, i) => {
    const x0 = t.scen.cx - t.scen.w / 2 + 0.03;
    const bars = [0.15, 0.18, 0.12]
      .map((len, k) => `<path d="M${X(x0)} ${Y(y - 0.032 + k * 0.032)}H${X(x0 + len)}"/>`)
      .join("");
    scen += `<g class="ca-s${i}">${rect(t.scen.cx, y, t.scen.w, t.scen.h, 6, "ca-card")}${bars}</g>`;
  });
  let tests = "";
  t.rows.forEach((y, i) => {
    const x0 = t.test.cx - t.test.w / 2 + 0.025;
    const bars = [0.09, 0.06].map((len, k) => `<path d="M${X(x0)} ${Y(y - 0.016 + k * 0.032)}H${X(x0 + len)}"/>`).join("");
    tests += `<g class="ca-t${i}">${rect(t.test.cx, y, t.test.w, t.test.h, 4, "ca-card")}${bars}</g>`;
  });
  const path = (i) => {
    let d = "";
    for (let s = 0; s <= 24; s++) {
      const [x, y] = linkPoint(i, s / 24);
      d += (s ? "L" : "M") + X(x) + " " + Y(y);
    }
    return d;
  };
  let links = "";
  for (let i = 0; i < t.rows.length; i++) links += `<path class="ca-l${i}" d="${path(i)}"/>`;
  const g = t.gate;
  const gx = X(g.x);
  const gy = Y(g.y);
  const gr = f(g.r * H);
  const ok = `<g class="ca-gate-ok"><circle cx="${gx}" cy="${gy}" r="${gr}"/><path d="M${f(gx - gr * 0.42)} ${gy}l${f(gr * 0.3)} ${f(gr * 0.32)}l${f(gr * 0.56)} ${f(-gr * 0.62)}"/></g>`;
  const bad = `<g class="ca-gate-bad"><circle cx="${gx}" cy="${gy}" r="${gr}"/><path d="M${f(gx - gr * 0.36)} ${f(gy - gr * 0.36)}l${f(gr * 0.72)} ${f(gr * 0.72)}M${f(gx + gr * 0.36)} ${f(gy - gr * 0.36)}l${f(-gr * 0.72)} ${f(gr * 0.72)}"/></g>`;
  const ghostTest = t.link[t.ghost];
  const gt = t.rows[ghostTest];
  const ghost =
    `<g class="ca-ghost"><path d="${path(t.ghost)}"/>` +
    rect(t.test.cx, gt, t.test.w, t.test.h, 4) +
    `</g>`;
  return (
    `<g class="ca ca-check"><path class="ca-scan" d="M${X((t.scan.x0 + t.scan.x1) / 2)} ${Y(t.scan.y0)}V${Y(t.scan.y1)}"/>${ok}${bad}</g>` +
    `<g class="ca ca-links">${links}</g>` +
    `<g class="ca ca-scen">${scen}</g>` +
    `<g class="ca ca-tests">${tests}</g>` +
    ghost
  );
}

const POSTERS = { tdd: tddPoster };
export const ART = { tdd: TDD };

/** The static drawing of one card's illustration (no text, so the same in both languages). */
export function renderArtPoster(kind) {
  const draw = POSTERS[kind];
  if (!draw) throw new Error(`card art: no poster for "${kind}"`);
  return `<svg class="pv-poster pv-poster--${kind}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">${draw()}</svg>`;
}

/** Number of explainer steps an illustration supports (the build checks content.json against it). */
export const artSteps = (kind) => (ART[kind] ? ART[kind].steps.length : 0);
export const artFocus = (kind, step) => (ART[kind] && ART[kind].steps[step]) || null;
