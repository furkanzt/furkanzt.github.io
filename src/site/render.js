// Pure rendering for furkanzt.github.io. No DOM, no three.js: the build (Node) bakes this
// output into the static pages, and the browser calls the same functions when the language
// toggle swaps the home page's text in place, so the raw HTML and the toggled page cannot
// drift apart.
//
// Two kinds of page:
//   home   /, /en/, /tr/                 an Apple-style pitch: overview, four chapters, specs, contact
//   story  /en/projects/<id>/, /tr/...   one project told in steps as you scroll
import { ART, renderArtPoster, artSteps, artFocus } from "./card-art.js";
import { CONSTELLATION, renderConstellationPoster } from "./constellation.js";

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */
export const esc = (s) =>
  String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

const ARROW =
  '<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4.5 11.5 11 5M6 4.5h5.5V10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
const NEXT =
  '<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M3 8h9.5M8.75 4.25 12.5 8l-3.75 3.75" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
const BACK =
  '<svg class="ic ic--back" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M13 8H3.5M7.25 4.25 3.5 8l3.75 3.75" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
const DOWN =
  '<svg class="ic" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M8 2.5v8M4.75 7.5 8 10.75l3.25-3.25M3 13.5h10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';
const CHEVRON =
  '<svg class="ic chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M4 6.25 8 10.25l4-4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/></svg>';

const hostOf = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
const pct = (v) => +(v * 100).toFixed(2) + "%";

// Code-like text (file paths, test ids) may wrap after ::, / and _, never inside a word.
const breakable = (s) => esc(s).replace(/(::|\/|_)/g, "$1<wbr>");

/** The no-JavaScript form of an address: readable, but not a harvestable string. */
export const spelledEmail = (e) => `${e.user} [at] ${e.domain}`;

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

export const storyPath = (lang, id) => `/${lang}/projects/${id}/`;
const projectById = (t, id) => t.projects.find((p) => p.id === id);
// Short display names for the constellation and the proof tiles.
const shortName = (p) => p.name.replace(/\s*\(.*\)\s*$/, "");

/** Where a project leads: its story page when it has one, else its repo, else its first live link. */
function projectHref(lang, p) {
  if (p.story) return storyPath(lang, p.id);
  if (p.url) return p.url;
  return p.links && p.links[0] ? p.links[0].url : "#work";
}

/* ------------------------------------------------------------------ */
/* Shared chrome                                                        */
/* ------------------------------------------------------------------ */
function renderNav(t, base) {
  return ["work", "specs", "contact"].map((id) => `<a href="${base}#${id}">${esc(t.ui[id])}</a>`).join("");
}

function renderFooter(t) {
  return `<p>${esc(t.name)}</p><p>${esc(t.location)}</p>`;
}

/* ------------------------------------------------------------------ */
/* Home                                                                 */
/* ------------------------------------------------------------------ */
function renderConstellation(t, lang) {
  const nodeLinks = (kind) =>
    Object.entries(CONSTELLATION[kind].nodes)
      .map(([id, n]) => {
        const p = projectById(t, id);
        if (!p) throw new Error(`constellation: no project "${id}"`);
        return (
          `<a class="cn-node cn-node--${n.side}" data-node="${id}" href="${esc(projectHref(lang, p))}" style="left:${pct(n.x)};top:${pct(n.y)}">` +
          `<span class="cn-dot" aria-hidden="true"></span><span class="cn-name">${esc(shortName(p).replace(/^claude-/, ""))}</span></a>`
        );
      })
      .join("");
  // Both layouts are in the markup; CSS shows the one that fits the screen (no script needed).
  return (
    `<figure class="cn">` +
    ["wide", "tall"]
      .map(
        (kind) =>
          `<div class="cn-stage cn-stage--${kind}" data-layout="${kind}" data-art="stars">${renderConstellationPoster(kind)}` +
          `<nav class="cn-links" aria-label="${esc(t.home.constellation.label)}">${nodeLinks(kind)}</nav></div>`
      )
      .join("") +
    `<figcaption class="cn-cap">${esc(t.home.constellation.label)}<span class="cn-hint"> · ${esc(t.home.constellation.hint)}</span></figcaption>` +
    `</figure>`
  );
}

function renderLead(text) {
  const [lead, rest] = splitOnce(text, ": ");
  return lead ? `<strong>${esc(lead)}:</strong> ${esc(rest)}` : esc(rest);
}

function renderHero(t, site, lang) {
  return (
    `<section class="ov" id="overview" aria-labelledby="ov-name"><div class="wrap ov-inner">` +
    `<img class="ov-photo" src="/assets/img/headshot.webp" width="96" height="96" alt="" decoding="async">` +
    `<h1 class="ov-name" id="ov-name">${esc(t.name)}</h1>` +
    `<p class="ov-headline">${esc(t.home.hero.headline)}</p>` +
    `<p class="ov-sub">${renderLead(t.headline)}</p>` +
    `<p class="avail"><span class="avail-dot" aria-hidden="true"></span>${esc(t.availability)}</p>` +
    `<div class="actions">` +
    `<a class="btn btn--primary" data-email="0" href="#contact">${esc(t.ui.email)}</a>` +
    `<a class="btn" href="${esc(site.cv[lang])}" type="application/pdf" hreflang="${lang}">${esc(t.ui.cv)}</a>` +
    `</div>` +
    `<p class="ov-links"><a href="${esc(site.linkedin)}">LinkedIn${ARROW}</a><a href="${esc(site.github)}">GitHub${ARROW}</a></p>` +
    `</div>` +
    `<div class="wrap">${renderConstellation(t, lang)}</div>` +
    `</section>`
  );
}

// A proof under a chapter: a project (links to its story page, repo or game) or work at İMPARK
// (no public link, named as the CV names it).
function renderProof(t, lang, pr, chId) {
  const p = projectById(t, pr.ref);
  if (p && !p.story && !p.url && p.links && p.links.length > 1) {
    // every game is one tap away; the network caveat sits with them, once, in the "open" chapter
    const plays = p.links.map((l) => `<a href="${esc(l.url)}">${esc(l.label)}${ARROW}</a>`).join("");
    return (
      `<li class="pf pf--multi"><div class="pf-link"><span class="pf-name">${esc(shortName(p))}</span>` +
      `<span class="pf-line">${esc(pr.line)}</span><span class="pf-plays">${plays}</span>` +
      (chId === "ships" ? `<span class="pf-note">${esc(t.ui.gamesNote)}</span>` : "") +
      `</div></li>`
    );
  }
  if (p) {
    const go = p.story ? `${esc(t.ui.seeHow)}${NEXT}` : `${esc(p.cta || (p.url ? "GitHub" : t.ui.playIt))}${ARROW}`;
    return (
      `<li class="pf"><a class="pf-link" href="${esc(projectHref(lang, p))}">` +
      `<span class="pf-name">${esc(shortName(p))}</span>` +
      `<span class="pf-line">${esc(pr.line)}</span>` +
      `<span class="pf-go">${go}</span></a></li>`
    );
  }
  const label = t.home.refs[pr.ref];
  if (!label) throw new Error(`chapter proof: unknown ref "${pr.ref}"`);
  const at = pr.ref.startsWith("impark-") ? ` <span class="pf-at">${esc(t.home.refsNote)}</span>` : "";
  const internal = pr.ref.startsWith("impark-") ? `<span class="pf-go pf-go--muted">${esc(t.ui.internal)}</span>` : "";
  return `<li class="pf pf--plain"><div class="pf-link"><span class="pf-name">${esc(label)}${at}</span><span class="pf-line">${esc(pr.line)}</span>${internal}</div></li>`;
}

// The illustration a chapter may carry, only where it explains something: the tests chapter
// shows scenarios tied to tests.
const CHAPTER_ART = { tests: "tdd" };

function renderChapter(t, lang, ch, i) {
  const art = CHAPTER_ART[ch.id];
  const artProj = art && t.projects.find((p) => p.art && p.art.kind === art);
  const figure = artProj ? `<div class="chap-fig">${renderArtFigure(artProj, "pv--chapter")}</div>` : "";
  return (
    `<section class="chap chap--${esc(ch.id)}${figure ? " chap--art" : ""}" id="${i === 0 ? "work" : "ch-" + esc(ch.id)}" aria-labelledby="h-${esc(ch.id)}">` +
    `<div class="wrap chap-inner">` +
    `<div class="chap-copy"><h2 class="chap-title rv" id="h-${esc(ch.id)}">${esc(ch.title)}</h2>` +
    `<p class="chap-body rv">${esc(ch.body)}</p></div>` +
    figure +
    `<ul class="pfs">${ch.proofs.map((pr) => renderProof(t, lang, pr, ch.id)).join("")}</ul>` +
    `</div></section>`
  );
}

// Tech Specs: the CV as a spec sheet. Each row is a label and a short value; the full CV text
// sits behind one "Full details" per job (a plain <details>, so it opens without JavaScript).
function renderSpecs(t) {
  const ui = t.ui;
  const job = (j) => {
    const roles = j.roles
      .map((r) => `<p class="sp-line"><span class="sp-strong">${esc(r.title)}</span><span class="sp-dates">${esc(r.dates)}</span></p>`)
      .join("");
    return (
      `<div class="sp-job"><p class="sp-org sp-org--first">${esc(j.org)} · ${esc(j.location)}</p>${roles}` +
      `<p class="sp-hl">${esc(j.highlight)}</p>` +
      `<details class="sp-more"><summary><span>${esc(ui.fullDetails)}</span>${CHEVRON}</summary>` +
      `<ul class="bullets">${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></details></div>`
    );
  };
  const [now, ...before] = t.experience;
  const ed = t.education;
  const degrees = ed.degrees
    .map(
      (d) =>
        `<p class="sp-line"><span class="sp-strong">${esc(d.title)}</span><span class="sp-dates">${esc(d.dates)}</span></p>` +
        (d.thesis ? `<p class="sp-note">${esc(d.thesis)}</p>` : "")
    )
    .join("");
  const research = t.research
    .map((r) => {
      const [lead, rest] = splitOnce(r.title, " — ");
      const note = [rest, r.people].filter(Boolean).join(" · ");
      return (
        `<p class="sp-line"><span class="sp-strong">${esc(lead || r.title)}</span><span class="sp-dates">${esc(r.dates)}</span></p>` +
        (note ? `<p class="sp-note">${esc(note)}</p>` : "")
      );
    })
    .join("");
  const [, tech] = splitOnce(t.skills[0], ": ");
  const [, langs] = splitOnce(t.skills[1], ": ");
  const row = (label, body) => `<div class="sp-row"><dt>${esc(label)}</dt><dd>${body}</dd></div>`;
  return (
    `<section class="specs" id="specs" aria-labelledby="h-specs"><div class="wrap">` +
    `<h2 class="specs-title rv" id="h-specs">${esc(t.home.specs.title)}</h2>` +
    `<p class="specs-lead rv">${esc(t.home.specs.lead)}</p>` +
    `<dl class="sp">` +
    row(ui.now, job(now)) +
    row(ui.before, before.map(job).join("")) +
    row(ui.education, `<p class="sp-org sp-org--first">${esc(ed.org)} · ${esc(ed.location)}</p>${degrees}`) +
    row(ui.research, research) +
    row(ui.skills, renderSkills(splitList(tech), ui.skillGroups)) +
    row(ui.languages, `<p class="sp-plain">${esc(langs)}</p>`) +
    `</dl></div></section>`
  );
}

// The CV's one long skills line, in three labelled groups (same order in both languages).
const SKILL_GROUPS = [
  [0, 6], // languages and frameworks
  [6, 9], // cloud and tooling
  [9, 13], // AI
];
function renderSkills(items, labels) {
  if (items.length !== 13) throw new Error(`skills: expected 13 items to group, got ${items.length}; update SKILL_GROUPS`);
  return SKILL_GROUPS.map(
    ([a, b], i) => `<p class="sp-skill"><span class="sp-strong">${esc(labels[i])}</span> ${esc(items.slice(a, b).join(", "))}</p>`
  ).join("");
}

// The quiet row of other ways in, under the big Email button.
function renderBuyLinks(t, site, lang) {
  return (
    `<ul class="buy-links">` +
    `<li><a href="${esc(site.linkedin)}">LinkedIn${ARROW}</a></li>` +
    `<li><a href="${esc(site.github)}">GitHub${ARROW}</a></li>` +
    `<li><a href="${esc(site.cv[lang])}" type="application/pdf" hreflang="${lang}">${esc(t.ui.cv)}${DOWN}</a></li>` +
    `</ul>`
  );
}

function renderContact(t, site, lang) {
  // One button, the address written out under it (some readers have no mail app), then a
  // quiet row of the other ways in. Without JavaScript the addresses show spelled out and are
  // not links; the script assembles them (the full address never appears in the served files).
  const [main, uni] = site.emails;
  return (
    `<section class="buy" id="contact" aria-labelledby="h-contact"><div class="wrap">` +
    `<h2 class="buy-title rv" id="h-contact">${esc(t.home.contact.title)}</h2>` +
    `<p class="buy-body rv">${esc(t.home.contact.body)}</p>` +
    `<p class="buy-cta"><a class="btn btn--primary btn--big" data-email="0" href="#contact-mail">${esc(t.ui.email)}</a></p>` +
    `<p class="buy-mail" id="contact-mail"><a class="c-link" data-email="0">${esc(spelledEmail(main))}</a>` +
    (uni ? `<span class="buy-uni">${esc(t.ui.emailUni)}: <a class="c-link" data-email="1">${esc(spelledEmail(uni))}</a></span>` : "") +
    `</p>` +
    renderBuyLinks(t, site, lang) +
    `</div></section>`
  );
}

/** The home page's language-dependent slots. */
export function renderHome(content, lang) {
  const t = content[lang];
  const site = content.site;
  return {
    nav: renderNav(t, ""),
    main:
      renderHero(t, site, lang) +
      t.home.chapters.map((ch, i) => renderChapter(t, lang, ch, i)).join("") +
      renderSpecs(t) +
      renderContact(t, site, lang),
    footer: renderFooter(t),
  };
}

/* ------------------------------------------------------------------ */
/* Card illustrations                                                   */
/* ------------------------------------------------------------------ */
// One illustration with its text labels (positioned from the shared layout). aria-hidden:
// everything it shows is also said in the text around it. `focus` fixes a step's focus in the
// static drawing (the per-step drawings shown without JavaScript).
function renderArtFigure(p, cls = "", focus = null) {
  const layout = ART[p.art.kind];
  const labels = Object.entries(p.art.labels || {})
    .map(([key, text]) => {
      const a = layout.labels[key];
      if (!a) throw new Error(`card art ${p.art.kind}: no anchor for label "${key}"`);
      return `<span class="pv-label pv-label--${key}" data-anchor="${key}" style="left:${pct(a.x)};top:${pct(a.y)}">${esc(text)}</span>`;
    })
    .join("");
  const f = focus ? ` data-focus="${focus.join(" ")}"` : "";
  return (
    `<figure class="pv ${cls}" data-art="${esc(p.art.kind)}"${f} aria-hidden="true">` +
    `<div class="pv-stage">${renderArtPoster(p.art.kind)}<div class="pv-labels">${labels}</div></div>` +
    `</figure>`
  );
}

/* ------------------------------------------------------------------ */
/* Story page                                                           */
/* ------------------------------------------------------------------ */
/** A project's story page: a short pitch, the steps told as you scroll, then what's under the hood. */
export function renderStory(content, lang, id) {
  const t = content[lang];
  const ui = t.ui;
  const p = projectById(t, id);
  if (!p || !p.story) throw new Error(`no story for project ${id}`);
  const st = p.story;
  if (p.art && artSteps(p.art.kind) !== st.steps.length) {
    throw new Error(`${id}: ${st.steps.length} steps in content.json, the ${p.art.kind} illustration has ${artSteps(p.art.kind)}`);
  }
  const home = `/${lang}/`;
  const actions = [];
  if (p.url) actions.push(`<a class="btn btn--primary" href="${esc(p.url)}">${esc(ui.viewOnGitHub)}${ARROW}</a>`);
  for (const l of p.links || []) actions.push(`<a class="btn" href="${esc(l.url)}">${esc(ui.playNow)} ${esc(l.label)}${ARROW}</a>`);

  const steps = st.steps
    .map(
      (s, k) =>
        `<li class="st-step" data-step="${k}"><div class="st-card">` +
        `<p class="st-n" aria-hidden="true">${k + 1}<span> / ${st.steps.length}</span></p>` +
        `<h2 class="st-title">${esc(s.title)}</h2><p class="st-text">${breakable(s.text)}</p></div>` +
        // the same step as a still drawing, for readers without JavaScript (hidden once the
        // pinned drawing runs)
        (p.art ? renderArtFigure(p, "pv--step", artFocus(p.art.kind, k)) : "") +
        `</li>`
    )
    .join("");
  const deeper = st.deeper || [];
  const fold = deeper.length > 5; // keep it skimmable: the first three facts and the last one show
  const shown = fold ? [...deeper.slice(0, 3), deeper[deeper.length - 1]] : deeper;
  const folded = fold ? deeper.slice(3, -1) : [];
  const factsHtml =
    (shown.length ? `<ul class="deep-facts">${shown.map((d) => `<li>${breakable(d)}</li>`).join("")}</ul>` : "") +
    (folded.length
      ? `<details class="sp-more deep-more"><summary><span>${esc(ui.moreDetails)}</span>${CHEVRON}</summary>` +
        `<ul class="deep-facts">${folded.map((d) => `<li>${breakable(d)}</li>`).join("")}</ul></details>`
      : "");
  const links = (st.links || []).map((l) => `<li><a href="${esc(l.url)}">${esc(l.label)}${ARROW}</a></li>`).join("");

  // the next project with a story page (wrapping round), so the reader can keep going
  const withStory = t.projects.filter((x) => x.story);
  const at = withStory.findIndex((x) => x.id === id);
  const next = withStory.length > 1 ? withStory[(at + 1) % withStory.length] : null;

  const main =
    `<section class="sh" aria-labelledby="sh-name"><div class="wrap sh-inner">` +
    `<p class="sh-back"><a href="${home}#work">${BACK}${esc(ui.allWork)}</a></p>` +
    `<h1 class="sh-name" id="sh-name">${esc(shortName(p))}</h1>` +
    `<p class="sh-headline">${esc(st.headline)}</p>` +
    `<p class="sh-claim">${esc(st.claim)}</p>` +
    `<p class="sh-tech">${esc(p.tech)}</p>` +
    `<div class="actions">${actions.join("")}</div>` +
    `</div></section>` +
    `<section class="st" aria-label="${esc(ui.story)}"><div class="wrap st-inner">` +
    (p.art ? `<div class="st-stage">${renderArtFigure(p, "pv--story")}</div>` : "") +
    `<ol class="st-steps">${steps}</ol>` +
    `</div></section>` +
    (factsHtml
      ? `<section class="deep" aria-labelledby="h-deep"><div class="wrap">` +
        `<h2 class="deep-title rv" id="h-deep">${esc(ui.deeperTitle)}</h2>` +
        factsHtml +
        (links ? `<ul class="deep-links">${links}</ul>` : "") +
        `</div></section>`
      : "") +
    // after the proof, the way to get in touch, so a reader who landed here can act on it
    `<section class="buy buy--mini" aria-labelledby="h-contact"><div class="wrap">` +
    `<h2 class="buy-title" id="h-contact">${esc(t.home.contact.title)}</h2>` +
    `<p class="buy-cta"><a class="btn btn--primary btn--big" data-email="0" href="${home}#contact">${esc(ui.email)}</a></p>` +
    renderBuyLinks(t, content.site, lang) +
    `</div></section>` +
    `<nav class="sn" aria-label="${esc(ui.allWork)}"><div class="wrap sn-inner">` +
    `<a class="sn-link" href="${home}#work">${BACK}${esc(ui.allWork)}</a>` +
    (next ? `<a class="sn-link sn-link--next" href="${storyPath(lang, next.id)}">${esc(ui.nextProject)}: ${esc(shortName(next))}${NEXT}</a>` : "") +
    `</div></nav>`;
  return { nav: renderNav(t, home), main, footer: renderFooter(t) };
}

/** Projects that have a story page (the build makes one per language for each). */
export const storyIds = (content) => content.en.projects.filter((p) => p.story).map((p) => p.id);
