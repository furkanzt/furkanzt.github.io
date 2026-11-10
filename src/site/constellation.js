// The hero's constellation of work: one node per project, faint lines between related ones, a
// field of small background stars. Pure (no DOM, no three.js): the build bakes the static
// drawing and the node links into the page; the live version reads the same layout.
//
// Coordinates are normalised to the figure: x 0..1 across, y 0..1 down. Two layouts: a wide
// one for desktop and a taller one for phones, so the labels never collide.

export const CONSTELLATION = {
  // two staggered rows; labels never share a band (checked at 760-1920 px in EN and TR)
  wide: {
    aspect: 21 / 9,
    nodes: {
      agenting: { x: 0.06, y: 0.3, side: "right" },
      "taste-detector": { x: 0.36, y: 0.22, side: "right" },
      "kutie-games": { x: 0.93, y: 0.3, side: "left" },
      tofu: { x: 0.62, y: 0.5, side: "right" },
      mstodo: { x: 0.16, y: 0.76, side: "right" },
      "tdd-bdd-harness": { x: 0.42, y: 0.84, side: "right" },
      "yzt-curricula": { x: 0.93, y: 0.76, side: "left" },
    },
    // the four open-source Claude Code plugins, joined as one ring that never crosses itself
    links: [
      ["agenting", "taste-detector"],
      ["taste-detector", "tdd-bdd-harness"],
      ["tdd-bdd-harness", "mstodo"],
      ["mstodo", "agenting"],
    ],
  },
  // phones: one node per row, sides alternating, so a label never meets another
  tall: {
    aspect: 3 / 4,
    nodes: {
      agenting: { x: 0.1, y: 0.08, side: "right" },
      "kutie-games": { x: 0.9, y: 0.22, side: "left" },
      "tdd-bdd-harness": { x: 0.1, y: 0.36, side: "right" },
      tofu: { x: 0.9, y: 0.5, side: "left" },
      mstodo: { x: 0.1, y: 0.64, side: "right" },
      "yzt-curricula": { x: 0.9, y: 0.78, side: "left" },
      "taste-detector": { x: 0.1, y: 0.92, side: "right" },
    },
    links: [
      ["agenting", "tdd-bdd-harness"],
      ["tdd-bdd-harness", "mstodo"],
      ["mstodo", "taste-detector"],
    ],
  },
  // the games and the curricula stand on their own; each layout joins the plugins its own way
};

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Background stars, deterministic (the same in the poster and the live version). */
export function stars(count, seed = 20261110) {
  const rnd = mulberry32(seed);
  const out = [];
  for (let i = 0; i < count; i++) out.push({ x: rnd(), y: rnd(), r: 0.6 + rnd() * 1.4, a: 0.25 + rnd() * 0.55, z: rnd() });
  return out;
}

/** The static drawing for one layout ("wide" or "tall"): stars and lines, no text. */
export function renderConstellationPoster(kind) {
  const L = CONSTELLATION[kind];
  const W = 1200;
  const H = Math.round(W / L.aspect);
  const f = (n) => n.toFixed(1);
  let s = "";
  for (const st of stars(kind === "wide" ? 140 : 90)) {
    s += `<circle cx="${f(st.x * W)}" cy="${f(st.y * H)}" r="${f(st.r * 1.6)}" opacity="${st.a.toFixed(2)}"/>`;
  }
  let lines = "";
  for (const [a, b] of L.links) {
    const p = L.nodes[a];
    const q = L.nodes[b];
    lines += `<path d="M${f(p.x * W)} ${f(p.y * H)}L${f(q.x * W)} ${f(q.y * H)}"/>`;
  }
  // the nodes themselves are the HTML links laid over this drawing (render.js), so they line
  // up exactly and take focus and hover
  return (
    `<svg class="cn-poster cn-poster--${kind}" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true" focusable="false">` +
    `<g class="cn-stars">${s}</g><g class="cn-lines">${lines}</g></svg>`
  );
}
