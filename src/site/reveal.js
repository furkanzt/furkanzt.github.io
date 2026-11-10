// Headlines rise into place the first time they scroll into view, once. Content is visible by
// default: only what is still below the fold when the script runs is hidden and then revealed,
// so nothing blinks, and without the script (or in a screenshot) everything simply shows.
let io = null;

export function armReveals(root) {
  if (!("IntersectionObserver" in window)) return;
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
  }
  const vh = window.innerHeight;
  root.querySelectorAll(".rv:not(.is-in):not(.is-armed)").forEach((el) => {
    if (el.getBoundingClientRect().top < vh) {
      el.classList.add("is-in"); // already on screen: leave it be
      return;
    }
    el.classList.add("is-armed");
    io.observe(el);
  });
}

/** After the text is re-rendered in place (language toggle), show it as it is, no entrance. */
export function settleReveals(root) {
  root.querySelectorAll(".rv").forEach((el) => el.classList.add("is-in"));
}
