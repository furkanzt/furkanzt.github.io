// The illustrative routing scene (three.js). Started by main.js after the text is on screen,
// only when WebGL works, motion is allowed and Save-Data is off; the SVG poster stays
// underneath and is what every other visitor sees.
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  Points,
  AdditiveBlending,
  NormalBlending,
  LineBasicMaterial,
  Line,
  LineSegments,
  EdgesGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  Group,
  Vector3,
  Color,
} from "three";
import { LAYOUT, KINDS, lerp, inPoint, outPoint } from "./render.js";

function hexToRgb(hex) {
  const h = hex.trim().replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function readPalette() {
  const cs = getComputedStyle(document.documentElement);
  const get = (name, fb) => (cs.getPropertyValue(name) || fb).trim() || fb;
  const neutral = hexToRgb(get("--viz-neutral", "#8a919c"));
  const accent = hexToRgb(get("--viz-accent", "#c8f53c"));
  const mix = (t) => neutral.map((v, i) => lerp(v, accent[i], t));
  const dark = get("--viz-mode", "dark") === "dark";
  return {
    dark,
    // On the light ground, normal blending makes the soft particles read faint; a little
    // more opacity and size gives them the presence they have on the dark ground.
    alphaGain: dark ? 1 : 1.3,
    sizeGain: dark ? 1 : 1.12,
    neutral,
    tier: { haiku: mix(0.38), sonnet: mix(0.68), opus: accent },
    lineHex: get("--viz-line", "#2a2f37"),
    neutralHex: get("--viz-neutral", "#8a919c"),
  };
}

const VERT = `
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
uniform float uPx;
uniform float uDist;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx * (uDist / -mv.z);
  vColor = aColor;
  vAlpha = aAlpha;
}`;

const FRAG = `
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.16, d);
  if (a * vAlpha < 0.01) discard;
  gl_FragColor = vec4(vColor, a * vAlpha);
}`;

const TIER_INDEX = { haiku: 0, sonnet: 1, opus: 2 };

/**
 * Builds the scene inside `stage` and starts it. Throws if WebGL cannot be created.
 * Returns { select(id), placeButtons(), dispose() }.
 */
export function createScene(stage, getSelected) {
  const small = window.innerWidth < 640;
  const dprCap = small ? 1.5 : 2;
  const canvas = document.createElement("canvas");
  canvas.className = "viz-canvas";
  canvas.setAttribute("aria-hidden", "true");
  stage.insertBefore(canvas, stage.querySelector(".vz-overlay"));

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  } catch (err) {
    canvas.remove();
    throw err;
  }
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));

  const scene = new Scene();
  const FOV = 30;
  const WORLD_H = 9;
  const DIST = WORLD_H / 2 / Math.tan(((FOV / 2) * Math.PI) / 180);
  const camera = new PerspectiveCamera(FOV, LAYOUT.aspect, 0.1, 100);
  camera.position.set(0, 0, DIST);

  let worldW = WORLD_H * LAYOUT.aspect;
  const toWorld = (nx, ny) => [(nx - 0.5) * worldW, (0.5 - ny) * WORLD_H];

  let pal = readPalette();
  const disposables = [];
  const track = (o) => (disposables.push(o), o);

  /* --- routes (hairlines) --- */
  const routeGroup = new Group();
  scene.add(routeGroup);
  const lineMat = track(new LineBasicMaterial({ color: new Color(pal.lineHex), transparent: true, opacity: 1 }));
  function buildRoutes() {
    routeGroup.children.slice().forEach((c) => {
      routeGroup.remove(c);
      c.geometry.dispose();
    });
    const curves = [];
    const ins = 9;
    for (let k = 0; k < ins; k++) {
      const sy = lerp(LAYOUT.src.y0, LAYOUT.src.y1, k / (ins - 1));
      const pts = [];
      for (let s = 0; s <= 40; s++) pts.push(inPoint(sy, s / 40));
      curves.push(pts);
    }
    for (const tier of LAYOUT.tiers) {
      const pts = [];
      for (let s = 0; s <= 48; s++) pts.push(outPoint(tier, s / 48));
      curves.push(pts);
    }
    for (const pts of curves) {
      const arr = new Float32Array(pts.length * 3);
      pts.forEach(([nx, ny], i) => {
        const [x, y] = toWorld(nx, ny);
        arr[i * 3] = x;
        arr[i * 3 + 1] = y;
        arr[i * 3 + 2] = -0.4;
      });
      const g = new BufferGeometry();
      g.setAttribute("position", new BufferAttribute(arr, 3));
      routeGroup.add(new Line(g, lineMat));
    }
  }
  buildRoutes();

  /* --- router node --- */
  const routerGroup = new Group();
  scene.add(routerGroup);
  const ringGeo = track(new BufferGeometry());
  {
    const seg = 96;
    const arr = new Float32Array((seg + 1) * 3);
    for (let i = 0; i <= seg; i++) {
      const a = (i / seg) * Math.PI * 2;
      arr[i * 3] = Math.cos(a) * 0.42;
      arr[i * 3 + 1] = Math.sin(a) * 0.42;
    }
    ringGeo.setAttribute("position", new BufferAttribute(arr, 3));
  }
  const routerMat = track(new LineBasicMaterial({ color: new Color(pal.neutralHex), transparent: true, opacity: 0.9 }));
  routerGroup.add(new Line(ringGeo, routerMat));
  const octGeo = track(new EdgesGeometry(new OctahedronGeometry(0.2)));
  const oct = new LineSegments(octGeo, routerMat);
  routerGroup.add(oct);

  /* --- tier nuclei --- */
  const icoGeo = track(new EdgesGeometry(new IcosahedronGeometry(0.17, 0)));
  const nuclei = LAYOUT.tiers.map((tier) => {
    const mat = track(new LineBasicMaterial({ color: new Color().setRGB(...pal.tier[tier.id]), transparent: true, opacity: 0.95 }));
    const mesh = new LineSegments(icoGeo, mat);
    scene.add(mesh);
    return { id: tier.id, mesh, mat, scale: 1 };
  });

  function placeNodes() {
    const [rx, ry] = toWorld(LAYOUT.router.x, LAYOUT.router.y);
    routerGroup.position.set(rx, ry, 0);
    LAYOUT.tiers.forEach((tier, i) => {
      const [x, y] = toWorld(tier.x, tier.y);
      nuclei[i].mesh.position.set(x, y, 0);
    });
  }
  placeNodes();

  /* --- particles --- */
  const N = small ? 520 : 1100;
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const size = new Float32Array(N);
  const alpha = new Float32Array(N);
  const phase = new Uint8Array(N);
  const tt = new Float32Array(N);
  const spd = new Float32Array(N);
  const tierIx = new Uint8Array(N);
  const sy = new Float32Array(N);
  const zj = new Float32Array(N);
  const base = new Float32Array(N);
  const oa = new Float32Array(N);
  const orad = new Float32Array(N);
  const ospd = new Float32Array(N);
  const oinc = new Float32Array(N);
  const age = new Float32Array(N);
  const life = new Float32Array(N);
  const ox = new Float32Array(N);
  const oy = new Float32Array(N);
  const vx = new Float32Array(N);
  const vy = new Float32Array(N);

  function spawn(i, first) {
    phase[i] = 0;
    tt[i] = -Math.random() * 0.25;
    spd[i] = 0.2 + Math.random() * 0.14;
    tierIx[i] = TIER_INDEX[KINDS[(Math.random() * KINDS.length) | 0]];
    sy[i] = lerp(LAYOUT.src.y0, LAYOUT.src.y1, Math.random());
    zj[i] = (Math.random() - 0.5) * 1.4;
    base[i] = 2.0 + Math.random() * 1.8 + (tierIx[i] === 2 ? 0.9 : 0);
    oa[i] = Math.random() * Math.PI * 2;
    orad[i] = 0.18 + Math.pow(Math.random(), 0.7) * 0.55;
    ospd[i] = (0.35 + Math.random() * 0.6) * (Math.random() < 0.5 ? -1 : 1);
    oinc[i] = 0.35 + Math.random() * 0.9;
    age[i] = 0;
    life[i] = 3 + Math.random() * 4.5;
    ox[i] = oy[i] = vx[i] = vy[i] = 0;
    if (first) {
      // Start in a steady state that matches the poster, so the crossfade reads as the
      // still composition coming alive rather than an empty figure filling up.
      const r = Math.random();
      if (r < 0.4) {
        tt[i] = Math.random();
      } else if (r < 0.6) {
        phase[i] = 1;
        tt[i] = Math.random();
        spd[i] = 0.42 + Math.random() * 0.2;
      } else {
        phase[i] = 2;
        age[i] = 0.7 + Math.random() * life[i];
      }
    }
  }
  for (let i = 0; i < N; i++) spawn(i, true);

  const geo = track(new BufferGeometry());
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setAttribute("aColor", new BufferAttribute(col, 3));
  geo.setAttribute("aSize", new BufferAttribute(size, 1));
  geo.setAttribute("aAlpha", new BufferAttribute(alpha, 1));
  const pmat = track(
    new ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: { uPx: { value: renderer.getPixelRatio() }, uDist: { value: DIST } },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: pal.dark ? AdditiveBlending : NormalBlending,
    })
  );
  const points = new Points(geo, pmat);
  points.frustumCulled = false;
  scene.add(points);

  /* --- pointer stir --- */
  const pointer = { x: 0, y: 0, nx: 0, ny: 0, energy: 0, inside: false };
  function onMove(ev) {
    const r = stage.getBoundingClientRect();
    const nx = (ev.clientX - r.left) / r.width;
    const ny = (ev.clientY - r.top) / r.height;
    const [wx, wy] = toWorld(nx, ny);
    if (pointer.inside) {
      const d = Math.hypot(wx - pointer.x, wy - pointer.y);
      pointer.energy = Math.min(1, pointer.energy + d * 0.9);
    }
    pointer.x = wx;
    pointer.y = wy;
    pointer.nx = nx - 0.5;
    pointer.ny = ny - 0.5;
    pointer.inside = true;
  }
  function onLeave() {
    pointer.inside = false;
    pointer.nx = 0;
    pointer.ny = 0;
  }
  stage.addEventListener("pointermove", onMove, { passive: true });
  stage.addEventListener("pointerleave", onLeave, { passive: true });

  /* --- selection --- */
  let selected = getSelected();
  let selMix = 0; // 0..1, eased towards target

  /* --- size, theme, visibility --- */
  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 640 ? 1.5 : 2));
    pmat.uniforms.uPx.value = renderer.getPixelRatio();
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    worldW = WORLD_H * camera.aspect;
    buildRoutes();
    placeNodes();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(stage);
  resize();

  const schemeMQ = matchMedia("(prefers-color-scheme: dark)");
  function onScheme() {
    pal = readPalette();
    lineMat.color.set(pal.lineHex);
    routerMat.color.set(pal.neutralHex);
    nuclei.forEach((n) => n.mat.color.setRGB(...pal.tier[n.id]));
    pmat.blending = pal.dark ? AdditiveBlending : NormalBlending;
    pmat.needsUpdate = true;
  }
  if (schemeMQ.addEventListener) schemeMQ.addEventListener("change", onScheme);

  let inView = true;
  const io = new IntersectionObserver((entries) => {
    inView = entries[entries.length - 1].isIntersecting;
    schedule();
  });
  io.observe(stage);
  const onVis = () => schedule();
  document.addEventListener("visibilitychange", onVis);

  /* --- tier buttons follow the projected nuclei --- */
  const v3 = new Vector3();
  function placeButtons() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    stage.querySelectorAll(".tier").forEach((btn) => {
      const n = nuclei.find((x) => x.id === btn.dataset.tier);
      if (!n) return;
      v3.copy(n.mesh.position).project(camera);
      btn.style.left = (v3.x * 0.5 + 0.5) * w + "px";
      btn.style.top = (-v3.y * 0.5 + 0.5) * h + "px";
    });
  }

  /* --- frame loop --- */
  let raf = 0;
  let last = 0;
  let time = 0;
  let firstFrame = true;
  let disposed = false;

  function step(dt) {
    time += dt;
    const tiers = LAYOUT.tiers;
    const trgb = [pal.tier.haiku, pal.tier.sonnet, pal.tier.opus];
    const neutral = pal.neutral;
    const target = selected ? 1 : 0;
    selMix += (target - selMix) * Math.min(1, dt * 8);
    const selIx = selected ? TIER_INDEX[selected] : -1;
    const R = 1.5;
    const R2 = R * R;
    pointer.energy *= Math.pow(0.9, dt * 60);
    const stir = pointer.inside ? pointer.energy : 0;
    const damp = Math.pow(0.9, dt * 60);

    for (let i = 0; i < N; i++) {
      let nx;
      let ny;
      let z = zj[i];
      let a = 1;
      let c1 = neutral;
      let cm = 0;
      const ti = tierIx[i];
      if (phase[i] === 0) {
        tt[i] += spd[i] * dt;
        const t = Math.max(0, tt[i]);
        [nx, ny] = inPoint(sy[i], t);
        ny += Math.sin(time * 1.3 + i) * 0.004 * (1 - t);
        z = zj[i] * (1 - t);
        a = tt[i] < 0 ? 0 : Math.min(1, tt[i] / 0.08) * 0.75;
        if (tt[i] >= 1) {
          phase[i] = 1;
          tt[i] = 0;
          spd[i] = 0.42 + Math.random() * 0.2;
        }
      } else if (phase[i] === 1) {
        tt[i] += spd[i] * dt;
        const t = Math.min(1, tt[i]);
        [nx, ny] = outPoint(tiers[ti], t);
        // A little spread across the route so a busy lane reads as a stream, not a solid line.
        const bulge = Math.sin(Math.PI * t);
        ny += (zj[i] / 1.4) * 0.03 * bulge;
        z = zj[i] * 0.4 * bulge;
        a = 0.8 + 0.2 * t;
        c1 = trgb[ti];
        cm = Math.min(1, t * 1.6);
        if (tt[i] >= 1) {
          phase[i] = 2;
          age[i] = 0;
        }
      } else {
        age[i] += dt;
        oa[i] += ospd[i] * dt;
        const grow = Math.min(1, age[i] / 0.7);
        const rr = orad[i] * (1 - Math.pow(1 - grow, 3));
        const tier = tiers[ti];
        // Orbit in 3D around the nucleus.
        c1 = trgb[ti];
        cm = 1;
        const fadeOut = Math.max(0, (age[i] - life[i]) / 0.6);
        a = Math.max(0, 1 - fadeOut);
        const [wx0, wy0] = toWorld(tier.x, tier.y);
        const ca = Math.cos(oa[i]);
        const sa = Math.sin(oa[i]);
        pos[i * 3] = wx0 + ca * rr;
        pos[i * 3 + 1] = wy0 + sa * rr * Math.cos(oinc[i]) * 0.75;
        pos[i * 3 + 2] = sa * rr * Math.sin(oinc[i]);
        if (fadeOut >= 1) spawn(i, false);
        nx = null;
      }
      if (nx !== null) {
        const [wx, wy] = toWorld(nx, ny);
        pos[i * 3] = wx;
        pos[i * 3 + 1] = wy;
        pos[i * 3 + 2] = z;
      }

      // Pointer stir: push and swirl, then spring back to the path.
      if (stir > 0.002) {
        const dx = pos[i * 3] + ox[i] - pointer.x;
        const dy = pos[i * 3 + 1] + oy[i] - pointer.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2 && d2 > 1e-6) {
          const d = Math.sqrt(d2);
          const f = (1 - d / R) * stir * dt * 9;
          vx[i] += (dx / d) * 0.7 * f - (dy / d) * 1.1 * f;
          vy[i] += (dy / d) * 0.7 * f + (dx / d) * 1.1 * f;
        }
      }
      vx[i] = (vx[i] - ox[i] * 5 * dt) * damp;
      vy[i] = (vy[i] - oy[i] * 5 * dt) * damp;
      ox[i] += vx[i] * dt * 6;
      oy[i] += vy[i] * dt * 6;
      pos[i * 3] += ox[i];
      pos[i * 3 + 1] += oy[i];

      // Selection: the chosen tier's particles grow, the rest recede.
      let sz = base[i];
      if (selIx >= 0 && phase[i] > 0) {
        if (ti === selIx) sz *= 1 + 0.35 * selMix;
        else a *= 1 - 0.6 * selMix;
      } else if (selIx >= 0) a *= 1 - 0.35 * selMix;

      alpha[i] = Math.min(1, a * pal.alphaGain);
      size[i] = sz * pal.sizeGain;
      col[i * 3] = lerp(neutral[0], c1[0], cm);
      col[i * 3 + 1] = lerp(neutral[1], c1[1], cm);
      col[i * 3 + 2] = lerp(neutral[2], c1[2], cm);
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aColor.needsUpdate = true;
    geo.attributes.aSize.needsUpdate = true;
    geo.attributes.aAlpha.needsUpdate = true;

    oct.rotation.y += dt * 0.6;
    oct.rotation.x += dt * 0.25;
    nuclei.forEach((n, k) => {
      n.mesh.rotation.y += dt * (0.35 + k * 0.12);
      n.mesh.rotation.x += dt * 0.2;
      const s = 1 + (selected === n.id ? 0.45 : 0) * selMix;
      n.scale += (s - n.scale) * Math.min(1, dt * 10);
      n.mesh.scale.setScalar(n.scale);
      n.mat.opacity = selected && selected !== n.id ? 1 - 0.55 * selMix : 0.95;
    });

    // Gentle parallax from the pointer, plus a slow drift.
    const tx = pointer.nx * 0.9 + Math.sin(time * 0.11) * 0.25;
    const ty = -pointer.ny * 0.6 + Math.sin(time * 0.07) * 0.12;
    camera.position.x += (tx - camera.position.x) * Math.min(1, dt * 2.5);
    camera.position.y += (ty - camera.position.y) * Math.min(1, dt * 2.5);
    camera.lookAt(0, 0, 0);
  }

  function frame(now) {
    raf = 0;
    if (disposed) return;
    const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
    last = now;
    step(dt);
    renderer.render(scene, camera);
    placeButtons();
    if (firstFrame) {
      firstFrame = false;
      // The canvas already has a computed opacity of 0 (resize() forced a style pass after
      // it was inserted), so adding the class runs the crossfade from the poster.
      stage.classList.add("is-live");
    }
    schedule();
  }

  function schedule() {
    if (disposed) return;
    const run = inView && !document.hidden;
    if (run && !raf) {
      raf = requestAnimationFrame(frame);
    } else if (!run && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    }
  }
  // Make sure the canvas has a computed style (opacity 0) before the first frame.
  void getComputedStyle(canvas).opacity;
  schedule();

  return {
    select(id) {
      selected = id;
    },
    placeButtons,
    dispose() {
      if (disposed) return;
      disposed = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      if (schemeMQ.removeEventListener) schemeMQ.removeEventListener("change", onScheme);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
      routeGroup.children.forEach((c) => c.geometry.dispose());
      disposables.forEach((d) => d.dispose());
      const gl = renderer.getContext();
      renderer.dispose();
      // Release the GL context now rather than at garbage collection, so a restart (motion
      // turned back on, a page restored from the back-forward cache) does not pile up contexts.
      // three.js has removed its context-lost listener in dispose(), so this logs nothing.
      try {
        const lose = gl && gl.getExtension("WEBGL_lose_context");
        if (lose) lose.loseContext();
      } catch (e) {
        /* nothing to release */
      }
      canvas.remove();
      stage.classList.remove("is-live");
      // Hand the buttons back to the static layout.
      stage.querySelectorAll(".tier").forEach((btn) => {
        const tier = LAYOUT.tiers.find((x) => x.id === btn.dataset.tier);
        btn.style.left = +(tier.x * 100).toFixed(2) + "%";
        btn.style.top = +(tier.y * 100).toFixed(2) + "%";
      });
    },
  };
}
