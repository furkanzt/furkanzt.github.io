// furkanzt.github.io in the browser. Every page is already complete in its own language; this
// script picks the visitor's language on "/" (and swaps the home page's text in place with the
// same render functions the build used), turns the spelled-out emails into mailto links, lets
// headlines rise in once, drives a story page's steps from the scroll, and starts the live
// illustrations once the text is on screen. No network requests, no cookies; one localStorage
// key for the language choice.
import content from "../../content/content.json";
import { renderHome } from "./render.js";
import { pick, STORAGE_KEY } from "./lang.js";
import { createCards } from "./cards.js";
import { createStory } from "./story.js";
import { armReveals, settleReveals } from "./reveal.js";

window.__langPick = pick;

const doc = document;
const root = doc.documentElement;
const page = doc.body.getAttribute("data-page") || "home";

/* ------------------------------------------------------------------ */
/* Language                                                             */
/* ------------------------------------------------------------------ */
function readSaved() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function save(lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* private mode or blocked storage: the page still works */
  }
}

/* On /en/ and /tr/ the address follows the visible language, so a shared link matches the
   screen. On "/" the address stays. */
function setAddress(lang) {
  if (!/^https?:$/.test(window.location.protocol)) return;
  const match = window.location.pathname.match(/^(.*\/)(en|tr)\/?(?:index\.html)?$/);
  if (!match) return;
  const path = match[1] + lang + "/";
  const next = path + window.location.search + window.location.hash;
  if (next !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(window.history.state, "", next);
  }
  const canonical = doc.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", content.site.origin + path);
}

const state = {
  lang: root.lang === "tr" ? "tr" : "en",
  rendered: root.lang === "tr" ? "tr" : "en", // the language the body text is in right now
  cards: null, // the live illustrations (null: the static drawings show)
};

/* Email addresses are assembled here, so the served files never hold a full address. */
function fillEmails() {
  const emails = content.site.emails;
  doc.querySelectorAll("[data-email]").forEach((a) => {
    const e = emails[Number(a.getAttribute("data-email"))];
    if (!e) return;
    const address = e.user + "@" + e.domain;
    a.setAttribute("href", "mailto:" + address);
    if (a.classList.contains("c-link")) a.textContent = address;
  });
}

// Home only: the text is swapped in place (the "/" address serves both languages).
function setLang(lang) {
  const t = content[lang];
  if (!t) return;
  if (lang !== state.rendered) {
    if (state.cards) state.cards.unmount();
    const slots = renderHome(content, lang);
    for (const name of Object.keys(slots)) {
      const el = doc.querySelector(`[data-slot="${name}"]`);
      if (el) el.innerHTML = slots[name];
    }
    state.rendered = lang;
    settleReveals(doc);
    if (state.cards) state.cards.mount(doc);
  }
  state.lang = lang;
  fillEmails();
  root.lang = lang;
  doc.title = t.title;
  const meta = doc.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", t.description);
  doc.querySelectorAll("[data-lang-btn]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.getAttribute("data-lang-btn") === lang));
  });
  const group = doc.querySelector(".lang");
  if (group) group.setAttribute("aria-label", t.ui.toggle);
}

doc.querySelectorAll("[data-lang-btn]").forEach((b) => {
  b.addEventListener("click", () => {
    const lang = b.getAttribute("data-lang-btn");
    save(lang);
    if (page !== "home") {
      // a story page exists in each language at its own address
      if (lang !== state.lang) window.location.assign(b.getAttribute("data-href") + window.location.hash);
      return;
    }
    if (lang !== state.lang) setLang(lang);
    setAddress(lang);
  });
});

if (page === "home") {
  const forced = doc.body.getAttribute("data-force") || "";
  const nav = window.navigator;
  const languages = nav.languages && nav.languages.length ? nav.languages : [nav.language || "en"];
  setLang(pick(forced, forced ? null : readSaved(), languages));
} else {
  fillEmails();
}
armReveals(doc);

/* ------------------------------------------------------------------ */
/* Story page: the steps follow the scroll                              */
/* ------------------------------------------------------------------ */
if (page === "story") {
  createStory({
    onFocus: (pv, words) => {
      if (state.cards) state.cards.setFocus(pv, words);
    },
  }).mount();
}

/* ------------------------------------------------------------------ */
/* The live illustrations, after the text is on screen                  */
/* ------------------------------------------------------------------ */
const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");
const saveData = () => !!(navigator.connection && navigator.connection.saveData);

function canRun3D() {
  if (reduceMQ.matches || saveData()) return false;
  try {
    const probe = doc.createElement("canvas");
    const gl = probe.getContext("webgl2") || probe.getContext("webgl");
    if (!gl) return false;
    const lose = gl.getExtension("WEBGL_lose_context");
    if (lose) lose.loseContext();
    return true;
  } catch (e) {
    return false;
  }
}

function start3D() {
  if (state.cards || !canRun3D()) return;
  try {
    state.cards = createCards();
    state.cards.mount(doc);
  } catch (err) {
    state.cards = null;
  }
}

function stop3D() {
  if (!state.cards) return;
  state.cards.dispose();
  state.cards = null;
}

function later() {
  if ("requestIdleCallback" in window) window.requestIdleCallback(start3D, { timeout: 1200 });
  else window.setTimeout(start3D, 400);
}

// Two frames after the first paint, then when the main thread is idle.
window.requestAnimationFrame(() => window.requestAnimationFrame(later));

// Motion turned on or off while the page is open: stop and show the stills, or start again.
const onReduce = () => {
  if (reduceMQ.matches) stop3D();
  else later();
};
if (reduceMQ.addEventListener) reduceMQ.addEventListener("change", onReduce);
else if (reduceMQ.addListener) reduceMQ.addListener(onReduce);

// Crossing the phone / desktop width shows the other constellation layout: attach to it.
let resizeT = 0;
window.addEventListener(
  "resize",
  () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => state.cards && state.cards.mount(doc), 200);
  },
  { passive: true }
);

// Back-forward cache: release the GL context when the page is hidden away, rebuild on return.
window.addEventListener("pagehide", stop3D);
window.addEventListener("pageshow", (ev) => {
  if (ev.persisted) later();
});
