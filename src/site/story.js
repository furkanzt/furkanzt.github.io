// Story pages: as a step's text reaches the reading line, the pinned drawing switches to that
// step. Scrolling is the only control: no wheel hijacking, no snapping. Without the script the
// page shows every step with its own still drawing instead (see render.js).
import { artFocus } from "./card-art.js";

export function createStory({ onFocus }) {
  let current = -1;
  let stagePv = null;
  let steps = [];
  let cards = [];
  let raf = 0;
  const sideBySide = window.matchMedia("(min-width: 900px)");

  function set(k) {
    if (k === current || k < 0 || k >= steps.length) return;
    current = k;
    steps.forEach((li, i) => li.classList.toggle("is-current", i === k));
    if (!stagePv) return;
    const words = artFocus(stagePv.getAttribute("data-art"), k);
    if (words) stagePv.setAttribute("data-focus", words.join(" "));
    stagePv.setAttribute("data-step", String(k));
    onFocus(stagePv, words);
  }

  // The reading line, in px from the top of the window: the middle of the window when the
  // drawing sits beside the text; the middle of what is left below the pinned drawing when it
  // sits above (phones).
  function readingLine() {
    const vh = window.innerHeight;
    if (sideBySide.matches) return vh / 2;
    const stage = document.querySelector(".st-stage");
    const bar = document.querySelector(".bar");
    const top = (bar ? bar.offsetHeight : 0) + (stage ? stage.offsetHeight : 0);
    return top + (vh - top) / 2;
  }

  // The step being read is the last one whose title has reached the reading line. Worked out
  // from the scroll position every time, so a jump (Page Down, a fast flick, a reload halfway
  // down, a link to the middle) can never leave the drawing on the wrong step.
  function update() {
    raf = 0;
    const line = readingLine();
    let k = 0;
    for (let i = 0; i < cards.length; i++) {
      const r = cards[i].getBoundingClientRect();
      if (r.top <= line) k = i;
      else break;
    }
    set(k);
  }
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  function mount() {
    steps = [...document.querySelectorAll(".st-step")];
    if (!steps.length) return false;
    cards = steps.map((li) => li.querySelector(".st-card") || li);
    stagePv = document.querySelector(".st-stage .pv[data-art]");
    document.documentElement.classList.add("st-live");
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    if (sideBySide.addEventListener) sideBySide.addEventListener("change", schedule);
    // the browser may restore the scroll position after the script runs
    window.addEventListener("load", schedule);
    window.addEventListener("pageshow", schedule);
    return true;
  }

  return { mount };
}
