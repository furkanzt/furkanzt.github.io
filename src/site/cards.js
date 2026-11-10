// The live card illustrations. One WebGL renderer for all of them (browsers allow only a few
// WebGL contexts, fewer on phones, and the hero already holds one): each visible card is drawn
// in turn into the shared offscreen canvas and copied onto that card's own 2D canvas. Cards
// off screen are not drawn; nothing runs while the tab is hidden. Started by main.js only when
// WebGL works, motion is allowed and Save-Data is off; the static drawing stays otherwise.
import { WebGLRenderer, Vector3 } from "three";
import { createTdd } from "./vignettes/tdd.js";
import { createStars } from "./vignettes/stars.js";

const FACTORIES = { tdd: createTdd, stars: createStars };
// Two kinds of host: a card illustration (.pv, its drawing in .pv-stage) and the hero's
// constellation (.cn-stage, the drawing itself). Still drawings of single steps are not hosts.
const HOSTS = ".pv[data-art]:not(.pv--step), .cn-stage[data-art]";

export function createCards() {
  // The WebGL context is made when the first illustration comes into view, not at page load.
  let glCanvas = null;
  let renderer = null;
  function ensureRenderer() {
    if (renderer) return renderer;
    glCanvas = document.createElement("canvas");
    renderer = new WebGLRenderer({ canvas: glCanvas, antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setPixelRatio(1); // device pixels are handled per card below
    renderer.setClearColor(0x000000, 0);
    renderer.setScissorTest(true);
    return renderer;
  }
  let bufW = 0;
  let bufH = 0;

  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  let entries = [];
  let raf = 0;
  let last = 0;
  let disposed = false;
  const v3 = new Vector3();

  const io = new IntersectionObserver(
    (list) => {
      for (const it of list) {
        const e = entries.find((x) => x.pv === it.target);
        if (!e) continue;
        e.visible = it.isIntersecting;
        if (e.visible && !e.inst) e.inst = FACTORIES[e.kind]();
        if (e.inst && e.focus !== undefined) e.inst.setFocus(e.focus);
      }
      schedule();
    },
    { rootMargin: "120px 0px" }
  );

  function schedule() {
    if (disposed || raf || document.hidden) return;
    if (!entries.some((e) => e.visible)) return;
    raf = requestAnimationFrame(frame);
  }
  const onVis = () => {
    if (document.hidden && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
    last = 0;
    schedule();
  };
  document.addEventListener("visibilitychange", onVis);

  function draw(e, dt, time) {
    ensureRenderer();
    const stage = e.stage;
    const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1.75 : 2);
    const w = Math.round(stage.clientWidth * dpr);
    const h = Math.round(stage.clientHeight * dpr);
    if (w < 4 || h < 4) return;
    if (e.canvas.width !== w || e.canvas.height !== h) {
      e.canvas.width = w;
      e.canvas.height = h;
    }
    if (w > bufW || h > bufH) {
      bufW = Math.max(bufW, w);
      bufH = Math.max(bufH, h);
      renderer.setSize(bufW, bufH, false);
    }
    // ease the pointer, so the parallax never jumps
    const k = 1 - Math.exp(-dt / 0.12);
    e.pointer.x += (e.pointerTarget.x - e.pointer.x) * k;
    e.pointer.y += (e.pointerTarget.y - e.pointer.y) * k;
    const inst = e.inst;
    inst.camera.aspect = w / h;
    inst.camera.updateProjectionMatrix();
    // where the host is on screen (-1 above .. 0 centred .. 1 below), for scroll-linked motion
    const r = stage.getBoundingClientRect();
    const vh = window.innerHeight || 1;
    const scroll = Math.max(-1.5, Math.min(1.5, (r.top + r.height / 2 - vh / 2) / vh));
    inst.update(dt, time, { w, h, dpr, pointer: e.pointer, scroll });
    renderer.setViewport(0, 0, w, h);
    renderer.setScissor(0, 0, w, h);
    renderer.clear();
    renderer.render(inst.scene, inst.camera);
    // WebGL's origin is bottom-left: the drawn region is the bottom of the shared canvas.
    e.ctx.clearRect(0, 0, w, h);
    e.ctx.drawImage(glCanvas, 0, bufH - h, w, h, 0, 0, w, h);
    if (!e.live) {
      e.live = true;
      e.pv.classList.add("is-live");
    }
    // HTML labels follow their anchors (the figure tilts a little)
    for (const lab of e.labels) {
      const a = inst.anchors[lab.key];
      if (!a) continue;
      v3.copy(a).applyMatrix4(inst.scene.children[0].matrixWorld).project(inst.camera);
      const x = ((v3.x + 1) / 2) * 100;
      const y = ((1 - v3.y) / 2) * 100;
      if (Math.abs(x - lab.x) > 0.05 || Math.abs(y - lab.y) > 0.05) {
        lab.x = x;
        lab.y = y;
        lab.el.style.left = x.toFixed(2) + "%";
        lab.el.style.top = y.toFixed(2) + "%";
      }
    }
  }

  function frame(now) {
    raf = 0;
    if (disposed) return;
    const dt = last ? Math.min((now - last) / 1000, 0.05) : 1 / 60;
    last = now;
    const time = now / 1000;
    for (const e of entries) {
      if (e.visible && e.inst) draw(e, dt, time);
    }
    schedule();
  }

  /** Attach to every illustration under `root` (again after a language swap re-renders them). */
  function mount(root) {
    for (const pv of root.querySelectorAll(HOSTS)) {
      const kind = pv.getAttribute("data-art");
      if (!FACTORIES[kind] || entries.some((e) => e.pv === pv)) continue;
      // hidden layouts (the constellation has a wide and a tall one) are skipped until shown
      if (pv.offsetParent === null && getComputedStyle(pv).position !== "fixed") continue;
      const stage = pv.querySelector(".pv-stage") || pv;
      const canvas = document.createElement("canvas");
      canvas.className = stage === pv ? "cn-canvas" : "pv-canvas";
      canvas.setAttribute("aria-hidden", "true");
      stage.insertBefore(canvas, stage.querySelector(".pv-labels, .cn-links"));
      const labels = [...pv.querySelectorAll(".pv-label[data-anchor]")].map((el) => ({ el, key: el.dataset.anchor, x: -1, y: -1, left: el.style.left, top: el.style.top }));
      const e = {
        pv,
        stage,
        kind,
        canvas,
        ctx: canvas.getContext("2d"),
        labels,
        inst: null,
        visible: false,
        live: false,
        // an explainer may already be open (the 3D starts after the text is on screen)
        focus: pv.hasAttribute("data-focus") ? pv.getAttribute("data-focus").split(" ") : undefined,
        pointer: { x: 0, y: 0 },
        pointerTarget: { x: 0, y: 0 },
      };
      if (fine.matches) {
        e.onMove = (ev) => {
          const r = stage.getBoundingClientRect();
          e.pointerTarget.x = ((ev.clientX - r.left) / r.width) * 2 - 1;
          e.pointerTarget.y = ((ev.clientY - r.top) / r.height) * 2 - 1;
        };
        e.onLeave = () => {
          e.pointerTarget.x = 0;
          e.pointerTarget.y = 0;
        };
        pv.addEventListener("pointermove", e.onMove);
        pv.addEventListener("pointerleave", e.onLeave);
      }
      entries.push(e);
      io.observe(pv);
    }
  }

  function release(e) {
    io.unobserve(e.pv);
    if (e.onMove) {
      e.pv.removeEventListener("pointermove", e.onMove);
      e.pv.removeEventListener("pointerleave", e.onLeave);
    }
    if (e.inst) e.inst.dispose();
    e.canvas.remove();
    e.pv.classList.remove("is-live");
    for (const lab of e.labels) {
      lab.el.style.left = lab.left; // back to the static drawing's positions
      lab.el.style.top = lab.top;
    }
  }

  /** Detach from illustrations that are no longer in the document (before a re-render). */
  function unmount() {
    entries.forEach(release);
    entries = [];
  }

  /** Focus parts of one card's illustration (words from card-art.js steps), or null for all. */
  function setFocus(pv, words) {
    const e = entries.find((x) => x.pv === pv);
    if (!e) return;
    e.focus = words;
    if (e.inst) e.inst.setFocus(words);
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    unmount();
    io.disconnect();
    document.removeEventListener("visibilitychange", onVis);
    if (!renderer) return;
    const gl = renderer.getContext();
    renderer.dispose();
    try {
      const lose = gl && gl.getExtension("WEBGL_lose_context");
      if (lose) lose.loseContext();
    } catch (err) {
      /* nothing to release */
    }
  }

  return { mount, unmount, setFocus, dispose };
}
