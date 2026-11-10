// Shared pieces for the card illustrations (three.js). Each vignette builds a scene in a
// 16:10 world from the normalised layout in card-art.js and exposes the same small interface:
//
//   { scene, camera, update(dt, t, view), setFocus(words | null), anchors, dispose() }
//
// `view` = { w, h, dpr, pointer: {x, y} } for the frame being drawn. Lines are fat lines
// (three's Line2), so they keep a real width on high-density screens.
import {
  Scene,
  PerspectiveCamera,
  Group,
  Vector3,
  Color,
  Shape,
  ShapeGeometry,
  Mesh,
  MeshBasicMaterial,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  Points,
  NormalBlending,
} from "three";
import { Line2 } from "three/addons/lines/Line2.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { ART_ASPECT } from "../card-art.js";

export const WORLD_H = 10;
export const WORLD_W = WORLD_H * ART_ASPECT;
/** Normalised figure coordinates to world coordinates (y up). */
export const toWorld = (nx, ny, z = 0) => new Vector3((nx - 0.5) * WORLD_W, (0.5 - ny) * WORLD_H, z);

export function readPalette() {
  const cs = getComputedStyle(document.documentElement);
  const get = (name, fb) => (cs.getPropertyValue(name) || "").trim() || fb;
  return {
    neutral: new Color(get("--viz-neutral", "#6b717b")),
    accent: new Color(get("--viz-accent", "#557300")),
    line: new Color(get("--viz-line", "#d0d1c9")),
    bad: new Color(get("--viz-bad", "#b0412e")),
    warn: new Color(get("--viz-warn", "#8f5f00")),
    raise: new Color(get("--bg-raise", "#ebebe5")),
    bg: new Color(get("--bg", "#f4f4f0")),
  };
}

/** A perspective camera that frames the whole 16:10 world with a little room for the tilt. */
export function makeCamera(fov = 28) {
  const camera = new PerspectiveCamera(fov, ART_ASPECT, 0.1, 100);
  const dist = (WORLD_H / 2 / Math.tan(((fov / 2) * Math.PI) / 180)) * 1.08;
  camera.position.set(0, 0, dist);
  camera.lookAt(0, 0, 0);
  return camera;
}

/** Points of a rounded rectangle centred on (cx, cy) in world units, closed. */
export function roundedRect(cx, cy, w, h, r, z = 0, seg = 5) {
  const pts = [];
  const corners = [
    [cx + w / 2 - r, cy + h / 2 - r, 0],
    [cx - w / 2 + r, cy + h / 2 - r, Math.PI / 2],
    [cx - w / 2 + r, cy - h / 2 + r, Math.PI],
    [cx + w / 2 - r, cy - h / 2 + r, (3 * Math.PI) / 2],
  ];
  for (const [x, y, a0] of corners) {
    for (let s = 0; s <= seg; s++) {
      const a = a0 + (s / seg) * (Math.PI / 2);
      pts.push(new Vector3(x + Math.cos(a) * r, y + Math.sin(a) * r, z));
    }
  }
  pts.push(pts[0].clone());
  return pts;
}

export function circlePoints(cx, cy, r, z = 0, seg = 48) {
  const pts = [];
  for (let s = 0; s <= seg; s++) {
    const a = (s / seg) * Math.PI * 2;
    pts.push(new Vector3(cx + Math.cos(a) * r, cy + Math.sin(a) * r, z));
  }
  return pts;
}

/**
 * Keeps every material of a vignette, eases each object's opacity toward a target (exponential
 * ease-out, about 250 ms to settle) and sets line widths for the current screen density.
 */
export function createKit() {
  const disposables = [];
  const faders = []; // { mats: [{ mat, base }], tags, alpha, target }
  const lineMats = [];
  const track = (o) => (disposables.push(o), o);

  function line(points, { color, width = 1.5, dashed = false, dash = 0.18, gap = 0.16, base = 1 } = {}) {
    const geo = track(new LineGeometry());
    geo.setPositions(points.flatMap((p) => [p.x, p.y, p.z]));
    const mat = track(
      new LineMaterial({ color: color.getHex(), linewidth: width, transparent: true, opacity: base, dashed, dashSize: dash, gapSize: gap, worldUnits: false })
    );
    mat.userData.width = width;
    lineMats.push(mat);
    const l = new Line2(geo, mat);
    if (dashed) l.computeLineDistances();
    return l;
  }

  function fill(cx, cy, w, h, r, z, { color, base = 1 } = {}) {
    const s = new Shape();
    const x0 = cx - w / 2;
    const y0 = cy - h / 2;
    s.moveTo(x0 + r, y0);
    s.lineTo(x0 + w - r, y0);
    s.quadraticCurveTo(x0 + w, y0, x0 + w, y0 + r);
    s.lineTo(x0 + w, y0 + h - r);
    s.quadraticCurveTo(x0 + w, y0 + h, x0 + w - r, y0 + h);
    s.lineTo(x0 + r, y0 + h);
    s.quadraticCurveTo(x0, y0 + h, x0, y0 + h - r);
    s.lineTo(x0, y0 + r);
    s.quadraticCurveTo(x0, y0, x0 + r, y0);
    const geo = track(new ShapeGeometry(s, 4));
    const mat = track(new MeshBasicMaterial({ color, transparent: true, opacity: base, depthWrite: false }));
    const m = new Mesh(geo, mat);
    m.position.z = z;
    return m;
  }

  /** Register an object (and its children's materials) under tags for focus-driven fading. */
  function fade(obj, tags) {
    const mats = [];
    obj.traverse((o) => {
      if (o.material) mats.push({ mat: o.material, base: o.material.opacity });
    });
    faders.push({ mats, tags, alpha: 1, target: 1 });
    return obj;
  }

  function setTargets(fn) {
    for (const f of faders) f.target = fn(f.tags);
  }

  function step(dt, view) {
    const k = 1 - Math.exp(-dt / 0.085);
    for (const f of faders) {
      f.alpha += (f.target - f.alpha) * k;
      if (Math.abs(f.target - f.alpha) < 0.002) f.alpha = f.target;
      for (const { mat, base } of f.mats) {
        mat.opacity = base * f.alpha;
        mat.visible = mat.opacity > 0.004;
      }
    }
    for (const m of lineMats) {
      m.linewidth = m.userData.width * view.dpr;
      m.resolution.set(view.w, view.h);
    }
  }

  function snap() {
    for (const f of faders) f.alpha = f.target;
  }

  function dispose() {
    disposables.forEach((d) => d.dispose && d.dispose());
  }

  return { track, line, fill, fade, setTargets, step, snap, dispose };
}

/* Soft round points (pulses travelling along a path). */
const VERT = `
attribute float aAlpha;
uniform float uPx;
uniform float uSize;
varying float vAlpha;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * uPx;
  vAlpha = aAlpha;
}`;
const FRAG = `
precision mediump float;
uniform vec3 uColor;
uniform float uOpacity;
varying float vAlpha;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.2, d) * vAlpha * uOpacity;
  if (a < 0.01) discard;
  gl_FragColor = vec4(uColor, a);
}`;

export function pulses(kit, count, color, size = 7) {
  const geo = kit.track(new BufferGeometry());
  geo.setAttribute("position", new BufferAttribute(new Float32Array(count * 3), 3));
  geo.setAttribute("aAlpha", new BufferAttribute(new Float32Array(count).fill(1), 1));
  const mat = kit.track(
    new ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms: { uPx: { value: 1 }, uSize: { value: size }, uColor: { value: color.clone() }, uOpacity: { value: 1 } },
      transparent: true,
      depthWrite: false,
      blending: NormalBlending,
    })
  );
  // ShaderMaterial has no opacity property the fader can drive; mirror it into the uniform.
  Object.defineProperty(mat, "opacity", {
    get: () => mat.uniforms.uOpacity.value,
    set: (v) => (mat.uniforms.uOpacity.value = v),
    configurable: true,
  });
  const pts = new Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}

export { Scene, Group, Vector3 };
