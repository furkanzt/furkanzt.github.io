// The project explainers. Each is a plain <details> that works without this script; the script
// adds one current step (Back / Next, or a click on a step), and tells the card's illustration
// which parts to focus. A link to #p-<id> opens that project's explainer.
import { artFocus } from "./card-art.js";

export function createExplainers({ onFocus }) {
  // The step each open explainer is on, kept across a language swap (which re-renders them).
  const steps = new Map();

  const projOf = (el) => el.closest(".proj");
  const idOf = (proj) => proj.getAttribute("data-proj");
  const xpOf = (proj) => proj.querySelector(".xp");
  const pvOf = (proj) => proj.querySelector(".pv[data-art]");

  function setStep(proj, k) {
    const xp = xpOf(proj);
    const items = [...xp.querySelectorAll(".xp-step")];
    const n = items.length;
    k = Math.max(0, Math.min(n - 1, k));
    steps.set(idOf(proj), k);
    items.forEach((li, i) => {
      li.classList.toggle("is-current", i === k);
      if (i === k) li.setAttribute("aria-current", "step");
      else li.removeAttribute("aria-current");
    });
    const count = xp.querySelector(".xp-count");
    if (count) count.textContent = count.getAttribute("data-tpl").replace("{n}", String(k + 1)).replace("{total}", String(n));
    const [back, next] = xp.querySelectorAll(".xp-nav .xp-btn");
    if (back) back.disabled = k === 0;
    if (next) next.disabled = k === n - 1;
    const pv = pvOf(proj);
    if (pv) {
      const words = artFocus(pv.getAttribute("data-art"), k);
      if (words) pv.setAttribute("data-focus", words.join(" "));
      else pv.removeAttribute("data-focus");
      onFocus(pv, words);
    }
  }

  // After Back/Next, keep the current step readable: below the pinned illustration on a
  // phone (where it sits above the steps), inside the window on a wide screen.
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  function reveal(proj) {
    const li = proj.querySelector(".xp-step.is-current");
    if (!li) return;
    const r = li.getBoundingClientRect();
    const bar = document.querySelector(".bar");
    let top = bar ? bar.getBoundingClientRect().bottom : 0;
    const pv = pvOf(proj);
    if (pv) {
      const p = pv.getBoundingClientRect();
      if (p.right > r.left && p.left < r.right) top = Math.max(top, p.bottom); // stacked above the steps
    }
    const gap = 12;
    let dy = 0;
    if (r.top < top + gap) dy = r.top - top - gap;
    else if (r.bottom > window.innerHeight - gap) dy = Math.min(r.bottom - window.innerHeight + gap, r.top - top - gap);
    if (Math.abs(dy) > 1) window.scrollBy({ top: dy, behavior: reduce.matches ? "auto" : "smooth" });
  }

  function opened(proj) {
    proj.classList.add("is-open");
    setStep(proj, steps.get(idOf(proj)) || 0);
    const hash = "#p-" + idOf(proj);
    if (window.location.hash !== hash) window.history.replaceState(window.history.state, "", hash);
  }

  function closed(proj) {
    proj.classList.remove("is-open");
    steps.delete(idOf(proj));
    const pv = pvOf(proj);
    if (pv) {
      pv.removeAttribute("data-focus");
      onFocus(pv, null);
    }
    if (window.location.hash === "#p-" + idOf(proj)) {
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.search);
    }
  }

  /** Wire every explainer under `root`. `restore` re-opens the ones open before a re-render. */
  function mount(root, restore) {
    root.querySelectorAll(".proj[data-proj]").forEach((proj) => {
      const xp = xpOf(proj);
      if (!xp || xp.dataset.wired) return;
      xp.dataset.wired = "1";
      xp.classList.add("is-stepped");
      const nav = xp.querySelector(".xp-nav");
      if (nav) nav.hidden = false;
      xp.addEventListener("toggle", () => (xp.open ? opened(proj) : closed(proj)));
      xp.querySelectorAll(".xp-nav .xp-btn").forEach((b) => {
        b.addEventListener("click", () => {
          setStep(proj, (steps.get(idOf(proj)) || 0) + Number(b.dataset.dir));
          reveal(proj);
        });
      });
      // A pointer shortcut; keyboard users have Back and Next. Clicking text inside a step
      // to select it must still work, so a click that ends a text selection is ignored.
      xp.querySelectorAll(".xp-step").forEach((li) => {
        li.addEventListener("click", () => {
          const sel = window.getSelection && window.getSelection();
          if (sel && String(sel).length) return;
          setStep(proj, Number(li.dataset.step));
        });
      });
      if (restore && restore.has(idOf(proj))) xp.open = true;
    });
  }

  /** Which explainers are open, and on which step (to re-open them after a language swap). */
  function snapshot() {
    return new Map(steps);
  }

  /** Open the explainer a #p-<id> address points to. */
  function openFromHash() {
    const m = window.location.hash.match(/^#p-([\w-]+)$/);
    if (!m) return;
    const proj = document.querySelector(`.proj[data-proj="${m[1]}"]`);
    const xp = proj && xpOf(proj);
    if (xp && !xp.open) xp.open = true;
  }

  return { mount, snapshot, openFromHash };
}
