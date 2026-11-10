// furkanzt.github.io in the browser. The static page is already complete in its own language;
// this script picks the visitor's language (and swaps the text in place with the same render
// functions the build used), turns the spelled-out emails into mailto links, runs the tier
// labels of the figure, and starts the illustrative routing scene once the text is on screen.
// No network requests, no cookies; one localStorage key for the language choice.
import content from "../../content/content.json";
import { renderSlots, renderPin, LAYOUT } from "./render.js";
import { pick, STORAGE_KEY } from "./lang.js";
import { createScene } from "./scene.js";
import { createCards } from "./cards.js";
import { createExplainers } from "./explain.js";

window.__langPick = pick;

const doc = document;
const root = doc.documentElement;

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
  selected: null,
  scene: null,
  cards: null, // the live card illustrations (null: the static drawings show)
};

const explain = createExplainers({
  onFocus: (pv, words) => {
    if (state.cards) state.cards.setFocus(pv, words);
  },
});

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

function setLang(lang) {
  const t = content[lang];
  if (!t) return;
  if (lang !== state.rendered) {
    // The sections are re-rendered: remember the open explainers and let go of the live
    // illustrations first, then wire the new markup the same way.
    const open = explain.snapshot();
    if (state.cards) state.cards.unmount();
    const slots = renderSlots(content, lang);
    for (const name of Object.keys(slots)) {
      const el = doc.querySelector(`[data-slot="${name}"]`);
      if (el) el.innerHTML = slots[name];
    }
    state.rendered = lang;
    if (state.cards) state.cards.mount(doc);
    explain.mount(doc, open);
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
  if (state.selected) openPin(state.selected);
  if (state.scene) state.scene.placeButtons();
}

/* ------------------------------------------------------------------ */
/* Tier buttons and the pinned label                                    */
/* ------------------------------------------------------------------ */
const stageEl = () => doc.querySelector(".viz-stage");
const pinEl = () => doc.getElementById("vz-pin");
// Below this width the label docks under the figure instead of floating over it, so it never
// covers the tier buttons or gets clipped by the stage (same breakpoint as style.css).
const narrowMQ = window.matchMedia("(max-width: 479px)");

function placePin() {
  const pin = pinEl();
  const stage = stageEl();
  if (!pin || !stage || !state.selected) return;
  if (narrowMQ.matches) {
    pin.style.left = "";
    pin.style.top = "";
    pin.style.maxWidth = "";
    return;
  }
  const btn = stage.querySelector(`.tier[data-tier="${state.selected}"]`);
  const box = pin.parentElement.getBoundingClientRect();
  const sr = stage.getBoundingClientRect();
  const br = btn ? btn.getBoundingClientRect() : null;
  const tier = LAYOUT.tiers.find((x) => x.id === state.selected);
  const cx = br ? br.left + br.width / 2 - box.left : sr.left - box.left + tier.x * sr.width;
  const cy = br ? br.top + br.height / 2 - box.top : sr.top - box.top + tier.y * sr.height;
  const sx = sr.left - box.left;
  const sy = sr.top - box.top;
  const gap = Math.max(sr.width * 0.075 + 6, (br ? br.width / 2 : 24) + 16);
  const maxW = Math.min(272, cx - gap - sx - 8);
  pin.style.maxWidth = maxW + "px";
  const pw = pin.offsetWidth;
  const ph = pin.offsetHeight;
  pin.style.left = Math.max(sx + 8, cx - gap - pw) + "px";
  pin.style.top = Math.min(Math.max(sy + 8, cy - ph / 2), sy + sr.height - ph - 8) + "px";
}

function openPin(tierId) {
  const stage = stageEl();
  const pin = pinEl();
  if (!stage || !pin) return;
  state.selected = tierId;
  pin.innerHTML = renderPin(state.lang, tierId);
  pin.lang = state.lang;
  pin.hidden = false;
  pin.setAttribute("data-tier", tierId);
  stage.setAttribute("data-selected", tierId);
  stage.querySelectorAll(".tier").forEach((b) => b.setAttribute("aria-expanded", String(b.dataset.tier === tierId)));
  placePin();
  // Retrigger the entrance: one short ease-out, interruptible by the next click.
  pin.classList.remove("is-in");
  void pin.offsetWidth;
  pin.classList.add("is-in");
  if (state.scene) state.scene.select(tierId);
}

function closePin() {
  const stage = stageEl();
  const pin = pinEl();
  state.selected = null;
  if (pin) {
    pin.hidden = true;
    pin.classList.remove("is-in");
  }
  if (stage) {
    stage.removeAttribute("data-selected");
    stage.querySelectorAll(".tier").forEach((b) => b.setAttribute("aria-expanded", "false"));
  }
  if (state.scene) state.scene.select(null);
}

function wire() {
  doc.querySelectorAll("[data-lang-btn]").forEach((b) => {
    b.addEventListener("click", () => {
      const lang = b.getAttribute("data-lang-btn");
      save(lang);
      if (lang !== state.lang) setLang(lang);
      setAddress(lang);
    });
  });

  // One listener for the tier buttons (they are re-rendered on a language swap) and for
  // closing the label with a tap or click anywhere outside it.
  doc.addEventListener("click", (ev) => {
    const target = ev.target instanceof Element ? ev.target : null;
    const tierBtn = target && target.closest(".tier");
    if (tierBtn) {
      const id = tierBtn.dataset.tier;
      if (state.selected === id) closePin();
      else openPin(id);
      return;
    }
    if (!state.selected) return;
    if (target && target.closest(".pin, .lang")) return;
    closePin();
  });

  doc.addEventListener("keydown", (ev) => {
    if (ev.key !== "Escape" || !state.selected) return;
    const id = state.selected;
    closePin();
    const btn = doc.querySelector(`.tier[data-tier="${id}"]`);
    if (btn) btn.focus();
  });

  window.addEventListener("resize", placePin, { passive: true });
  if (narrowMQ.addEventListener) narrowMQ.addEventListener("change", placePin);
}

wire();
explain.mount(doc);
explain.openFromHash();
window.addEventListener("hashchange", () => explain.openFromHash());
{
  const forced = doc.body.getAttribute("data-force") || "";
  const nav = window.navigator;
  const languages = nav.languages && nav.languages.length ? nav.languages : [nav.language || "en"];
  setLang(pick(forced, forced ? null : readSaved(), languages));
}

/* ------------------------------------------------------------------ */
/* The 3D scene, after the text is on screen                            */
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

function startCards() {
  if (state.cards) return;
  try {
    state.cards = createCards();
    state.cards.mount(doc);
  } catch (err) {
    state.cards = null;
  }
}

function start3D() {
  if (state.scene || !canRun3D()) return;
  startCards();
  const stage = stageEl();
  if (!stage) return;
  try {
    state.scene = createScene(stage, () => state.selected);
    if (state.selected) {
      state.scene.select(state.selected);
      placePin();
    }
  } catch (err) {
    state.scene = null;
    stage.classList.remove("is-live");
  }
}

function stop3D() {
  if (state.cards) {
    state.cards.dispose();
    state.cards = null;
  }
  if (!state.scene) return;
  state.scene.dispose();
  state.scene = null;
  if (state.selected) placePin();
}

function later() {
  if ("requestIdleCallback" in window) window.requestIdleCallback(start3D, { timeout: 1200 });
  else window.setTimeout(start3D, 400);
}

// Two frames after the first paint, then when the main thread is idle.
window.requestAnimationFrame(() => window.requestAnimationFrame(later));

// Motion turned on or off while the page is open: stop and show the poster, or start again.
const onReduce = () => {
  if (reduceMQ.matches) stop3D();
  else later();
};
if (reduceMQ.addEventListener) reduceMQ.addEventListener("change", onReduce);
else if (reduceMQ.addListener) reduceMQ.addListener(onReduce);

// Back-forward cache: release the GL context when the page is hidden away, rebuild on return.
window.addEventListener("pagehide", stop3D);
window.addEventListener("pageshow", (ev) => {
  if (ev.persisted) later();
});
