// The hero's constellation, live: the background stars get real depth. They drift slowly, lean
// a little toward the pointer, and as the hero scrolls away the camera flies forward through
// them. The project nodes and their lines stay in the HTML/SVG layer above, so the links never
// move away from what they point at.
import { BufferGeometry, BufferAttribute, ShaderMaterial, Points, NormalBlending, PerspectiveCamera, Scene, Group, Color } from "three";
import { readPalette } from "./kit.js";

const VERT = `
attribute float aSize;
attribute float aAlpha;
attribute float aMix;
uniform float uPx;
uniform vec3 uNeutral;
uniform vec3 uAccent;
varying float vAlpha;
varying vec3 vColor;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  // nearer stars are larger, as they would be
  gl_PointSize = aSize * uPx * (6.0 / max(0.6, -mv.z));
  vAlpha = aAlpha * smoothstep(0.25, 1.2, -mv.z);
  vColor = mix(uNeutral, uAccent, aMix);
}`;
const FRAG = `
precision mediump float;
varying float vAlpha;
varying vec3 vColor;
void main() {
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.15, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`;

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createStars() {
  const pal = readPalette();
  const scene = new Scene();
  const camera = new PerspectiveCamera(50, 21 / 9, 0.05, 60);
  camera.position.set(0, 0, 6);
  const root = new Group();
  scene.add(root);

  const N = window.innerWidth < 760 ? 220 : 420;
  const rnd = mulberry32(20261110);
  const pos = new Float32Array(N * 3);
  const size = new Float32Array(N);
  const alpha = new Float32Array(N);
  const mix = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    // a deep slab of stars in front of and behind the plane where the nodes sit
    pos[i * 3] = (rnd() - 0.5) * 16;
    pos[i * 3 + 1] = (rnd() - 0.5) * 8;
    pos[i * 3 + 2] = -9 + rnd() * 13;
    size[i] = 1.8 + rnd() * rnd() * 5;
    alpha[i] = 0.35 + rnd() * 0.55;
    mix[i] = rnd() < 0.22 ? 0.9 : rnd() * 0.2; // about one star in five in the accent colour
  }
  const geo = new BufferGeometry();
  geo.setAttribute("position", new BufferAttribute(pos, 3));
  geo.setAttribute("aSize", new BufferAttribute(size, 1));
  geo.setAttribute("aAlpha", new BufferAttribute(alpha, 1));
  geo.setAttribute("aMix", new BufferAttribute(mix, 1));
  const mat = new ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      uPx: { value: 1 },
      uNeutral: { value: new Color().copy(pal.neutral) },
      uAccent: { value: new Color().copy(pal.accent) },
    },
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
  });
  const points = new Points(geo, mat);
  points.frustumCulled = false;
  root.add(points);

  let rotX = 0;
  let rotY = 0;
  let fly = 0;
  function update(dt, time, view) {
    mat.uniforms.uPx.value = view.dpr;
    // slow drift, plus a lean toward the pointer (eased, never a jump)
    const k = 1 - Math.exp(-dt / 0.35);
    const tx = view.pointer.y * 0.06 + Math.sin(time * 0.11) * 0.02;
    const ty = view.pointer.x * 0.1 + Math.sin(time * 0.07) * 0.08;
    rotX += (tx - rotX) * k;
    rotY += (ty - rotY) * k;
    root.rotation.set(rotX, rotY, 0);
    // scrolling the hero away flies the camera forward through the stars
    const target = Math.max(0, -view.scroll) * 4.2;
    fly += (target - fly) * (1 - Math.exp(-dt / 0.18));
    camera.position.z = 6 - fly;
  }

  return {
    scene,
    camera,
    anchors: {},
    update,
    setFocus() {},
    dispose() {
      geo.dispose();
      mat.dispose();
    },
  };
}
