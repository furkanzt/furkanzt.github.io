// claude-tdd-bdd-harness, live: scenario cards cite test files, small pulses run along each
// citation, a check sweeps across them on every "push", and the explainer's steps focus the
// parts in turn (a broken citation in the check step, an @gap scenario in the last one).
import { TDD, linkPoint } from "../card-art.js";
import { Scene, Group, createKit, readPalette, makeCamera, toWorld, roundedRect, circlePoints, pulses, WORLD_H } from "./kit.js";

const Z_SCEN = 0.45;
const Z_TEST = -0.45;
const S = WORLD_H; // normalised height -> world units (the figure is 16:10, so x uses WORLD_W)

export function createTdd() {
  const pal = readPalette();
  const kit = createKit();
  const scene = new Scene();
  const camera = makeCamera();
  const root = new Group();
  scene.add(root);

  const t = TDD;
  const wx = (nx) => toWorld(nx, 0).x;
  const wy = (ny) => toWorld(0, ny).y;

  /* scenario cards: a filled card, its outline, three Given/When/Then lines */
  t.rows.forEach((ny, i) => {
    const g = new Group();
    const cx = wx(t.scen.cx);
    const cy = wy(ny);
    const w = t.scen.w * (S * 1.6);
    const h = t.scen.h * S;
    g.add(kit.fill(cx, cy, w, h, 0.16, Z_SCEN - 0.01, { color: pal.raise }));
    g.add(kit.line(roundedRect(cx, cy, w, h, 0.16, Z_SCEN), { color: pal.neutral, width: 1.5 }));
    const x0 = cx - w / 2 + 0.03 * S * 1.6;
    [0.15, 0.18, 0.12].forEach((len, k) => {
      const y = wy(ny - 0.032 + k * 0.032);
      g.add(kit.line([toWorld(0, 0, Z_SCEN).setX(x0).setY(y), toWorld(0, 0, Z_SCEN).setX(x0 + len * S * 1.6).setY(y)], { color: pal.neutral, width: 1.25, base: 0.85 }));
    });
    root.add(kit.fade(g, ["scen", "s" + i]));
  });

  /* test files: smaller cards with two "code" lines */
  t.rows.forEach((ny, i) => {
    const g = new Group();
    const cx = wx(t.test.cx);
    const cy = wy(ny);
    const w = t.test.w * (S * 1.6);
    const h = t.test.h * S;
    g.add(kit.fill(cx, cy, w, h, 0.1, Z_TEST - 0.01, { color: pal.raise }));
    g.add(kit.line(roundedRect(cx, cy, w, h, 0.1, Z_TEST), { color: pal.neutral, width: 1.5 }));
    const x0 = cx - w / 2 + 0.025 * S * 1.6;
    [0.09, 0.06].forEach((len, k) => {
      const y = wy(ny - 0.016 + k * 0.032);
      g.add(kit.line([toWorld(0, 0, Z_TEST).setX(x0).setY(y), toWorld(0, 0, Z_TEST).setX(x0 + len * S * 1.6).setY(y)], { color: pal.neutral, width: 1.25, base: 0.85 }));
    });
    root.add(kit.fade(g, ["tests", "t" + i]));
  });

  /* citations: S curves from a scenario's edge to its test, sinking from the cards to the tests */
  const pathPts = (i, n = 40) => {
    const out = [];
    for (let s = 0; s <= n; s++) {
      const u = s / n;
      const [nx, ny] = linkPoint(i, u);
      out.push(toWorld(nx, ny, Z_SCEN + (Z_TEST - Z_SCEN) * u));
    }
    return out;
  };
  const paths = t.rows.map((_, i) => pathPts(i, 64));
  t.rows.forEach((_, i) => {
    root.add(kit.fade(kit.line(paths[i], { color: pal.accent, width: 1.75 }), ["links", "l" + i]));
  });

  /* pulses: two per citation, travelling scenario -> test */
  const PER = 2;
  const dots = pulses(kit, t.rows.length * PER, pal.accent, 7);
  root.add(kit.fade(dots, ["links", "pulses"]));

  /* the check: a scanner line that sweeps the citations, and the build result at the top */
  const check = new Group();
  const scanH = (t.scan.y1 - t.scan.y0) * S;
  const scanY = wy((t.scan.y0 + t.scan.y1) / 2);
  const scanner = kit.line(
    [toWorld(0, 0, 0).set(0, scanY - scanH / 2, 0), toWorld(0, 0, 0).set(0, scanY + scanH / 2, 0)],
    { color: pal.neutral, width: 1.25, dashed: true, dash: 0.12, gap: 0.2 }
  );
  check.add(scanner);
  root.add(kit.fade(check, ["check"]));

  const gx = wx(t.gate.x);
  const gy = wy(t.gate.y);
  const gr = t.gate.r * S;
  const ok = new Group();
  ok.add(kit.line(circlePoints(gx, gy, gr, 0), { color: pal.accent, width: 2 }));
  ok.add(
    kit.line([toWorld(0, 0).set(gx - gr * 0.42, gy, 0), toWorld(0, 0).set(gx - gr * 0.12, gy - gr * 0.32, 0), toWorld(0, 0).set(gx + gr * 0.44, gy + gr * 0.3, 0)], {
      color: pal.accent,
      width: 2,
    })
  );
  root.add(kit.fade(ok, ["check", "gateok"]));
  const bad = new Group();
  bad.add(kit.line(circlePoints(gx, gy, gr, 0), { color: pal.bad, width: 2 }));
  bad.add(kit.line([toWorld(0, 0).set(gx - gr * 0.36, gy + gr * 0.36, 0), toWorld(0, 0).set(gx + gr * 0.36, gy - gr * 0.36, 0)], { color: pal.bad, width: 2 }));
  bad.add(kit.line([toWorld(0, 0).set(gx + gr * 0.36, gy + gr * 0.36, 0), toWorld(0, 0).set(gx - gr * 0.36, gy - gr * 0.36, 0)], { color: pal.bad, width: 2 }));
  root.add(kit.fade(bad, ["gatebad"]));

  /* a broken citation: its test was renamed, so the link points at nothing */
  const ghost = new Group();
  ghost.add(kit.line(paths[t.ghost], { color: pal.bad, width: 1.75, dashed: true, dash: 0.16, gap: 0.14 }));
  {
    const ny = t.rows[t.link[t.ghost]];
    ghost.add(
      kit.line(roundedRect(wx(t.test.cx), wy(ny), t.test.w * S * 1.6, t.test.h * S, 0.1, Z_TEST), { color: pal.bad, width: 1.5, dashed: true, dash: 0.14, gap: 0.12 })
    );
  }
  root.add(kit.fade(ghost, ["ghost"]));

  /* where the HTML labels sit (projected every frame) */
  const anchors = {
    scenarios: toWorld(t.labels.scenarios.x, t.labels.scenarios.y, Z_SCEN),
    tests: toWorld(t.labels.tests.x, t.labels.tests.y, Z_TEST),
    check: toWorld(t.labels.check.x, t.labels.check.y, 0),
    gap: toWorld(t.labels.gap.x, t.labels.gap.y, Z_SCEN),
  };

  /* focus: the same rules as the static drawing's CSS */
  let focus = null;
  function setFocus(words) {
    focus = words && words.length ? new Set(words) : null;
    const has = (w) => !!focus && focus.has(w);
    kit.setTargets((tags) => {
      const is = (w) => tags.includes(w);
      if (is("gatebad") || is("ghost")) return has("ghost") ? 1 : 0;
      if (is("gap")) return has("gap") ? 1 : 0;
      if (has("ghost") && (is("l" + t.ghost) || is("t" + t.link[t.ghost]) || is("gateok"))) return 0;
      if (has("gap") && (is("l" + t.gap) || is("t" + t.link[t.gap]))) return 0;
      if (!focus) return 1;
      return tags.some((w) => focus.has(w)) ? 1 : 0.18;
    });
  }
  setFocus(null);
  kit.snap();

  /* motion */
  const pos = dots.geometry.attributes.position;
  const alpha = dots.geometry.attributes.aAlpha;
  let rotX = 0;
  let rotY = 0;
  let scanPhase = 0;
  function update(dt, time, view) {
    // a slow sway plus a little parallax toward the pointer
    const tx = 0.07 + view.pointer.y * 0.05 + Math.sin(time * 0.31) * 0.012;
    const ty = -0.2 + view.pointer.x * 0.08 + Math.sin(time * 0.23) * 0.02;
    const k = 1 - Math.exp(-dt / 0.25);
    rotX += (tx - rotX) * k;
    rotY += (ty - rotY) * k;
    root.rotation.set(rotX, rotY, 0);

    // pulses: linear travel (constant motion); hidden on the citation that is broken or missing
    let n = 0;
    for (let i = 0; i < t.rows.length; i++) {
      const hidden = (focus && focus.has("ghost") && i === t.ghost) || (focus && focus.has("gap") && i === t.gap);
      for (let p = 0; p < PER; p++) {
        const u = (time * 0.16 + p / PER + i * 0.23) % 1;
        const [nx, ny] = linkPoint(i, u);
        const v = toWorld(nx, ny, Z_SCEN + (Z_TEST - Z_SCEN) * u);
        pos.setXYZ(n, v.x, v.y, v.z);
        // fade in and out at the ends so a pulse never pops
        alpha.setX(n, hidden ? 0 : Math.min(1, u * 6, (1 - u) * 6));
        n++;
      }
    }
    pos.needsUpdate = true;
    alpha.needsUpdate = true;
    dots.material.uniforms.uPx.value = view.dpr;

    // the scanner sweeps while the check is in focus, and rests in the middle otherwise
    const sweeping = focus && focus.has("check");
    scanPhase = sweeping ? scanPhase + dt / 3.2 : 0;
    const s = sweeping ? 0.5 - 0.5 * Math.cos(scanPhase * Math.PI * 2) : 0.5;
    scanner.position.x = wx(t.scan.x0 + (t.scan.x1 - t.scan.x0) * s);

    kit.step(dt, view);
  }

  return {
    scene,
    camera,
    anchors,
    update,
    setFocus,
    dispose() {
      kit.dispose();
    },
  };
}
