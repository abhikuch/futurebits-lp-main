/**
 * Vanilla Three.js studio for the home hero.
 * Single WebGL dependency: `three` in package.json. No R3F / drei.
 * Imported only from HomeHeroWebGLCanvas (next/dynamic, ssr: false).
 */

import * as THREE from "three";

import { assertNever } from "@/lib/assert-never";

/** @typedef {"glass" | "metal" | "paper"} StudioRoomKind */

/**
 * @param {StudioRoomKind} kind
 */
function roomSpec(kind) {
  switch (kind) {
    case "glass":
      return {
        x: -1.38,
        z: 0.18,
        rotY: 0.2,
        w: 1.06,
        h: 2.12,
        d: 0.08,
      };
    case "metal":
      return {
        x: 0.02,
        z: -0.08,
        rotY: 0.03,
        w: 1.18,
        h: 2.36,
        d: 0.1,
      };
    case "paper":
      return {
        x: 1.42,
        z: 0.22,
        rotY: -0.18,
        w: 0.98,
        h: 1.92,
        d: 0.06,
      };
    default:
      return assertNever(kind);
  }
}

/**
 * @param {typeof THREE} THREELib
 * @param {StudioRoomKind} kind
 */
function createRoomMaterial(THREELib, kind) {
  switch (kind) {
    case "glass":
      return new THREELib.MeshPhysicalMaterial({
        color: 0xf2f6fa,
        metalness: 0.22,
        roughness: 0.1,
        transparent: true,
        opacity: 0.78,
        envMapIntensity: 0.85,
      });
    case "metal":
      return new THREELib.MeshStandardMaterial({
        color: 0xd8dce3,
        metalness: 0.94,
        roughness: 0.18,
      });
    case "paper":
      return new THREELib.MeshStandardMaterial({
        color: 0xfff6e8,
        metalness: 0.02,
        roughness: 0.64,
      });
    default:
      return assertNever(kind);
  }
}

function createRoom(kind, frameMaterial) {
  const spec = roomSpec(kind);
  const group = new THREE.Group();
  group.position.set(spec.x, spec.h / 2 - 1.06, spec.z);
  group.rotation.y = spec.rotY;

  const inner = new THREE.Mesh(
    new THREE.BoxGeometry(spec.w * 0.78, spec.h * 0.78, spec.d * 0.42),
    createRoomMaterial(THREE, kind)
  );
  inner.position.z = -0.02;

  const postW = 0.055;
  const left = new THREE.Mesh(
    new THREE.BoxGeometry(postW, spec.h, spec.d + 0.05),
    frameMaterial
  );
  left.position.x = -spec.w / 2 + postW / 2;
  const right = left.clone();
  right.position.x = spec.w / 2 - postW / 2;

  const top = new THREE.Mesh(
    new THREE.BoxGeometry(spec.w, postW, spec.d + 0.05),
    frameMaterial
  );
  top.position.y = spec.h / 2 - postW / 2;
  const bot = top.clone();
  bot.position.y = -spec.h / 2 + postW / 2;

  group.add(inner, left, right, top, bot);
  return group;
}

/**
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   host: HTMLElement,
 *   dpr: number,
 *   onReady?: () => void,
 * }} options
 * @returns {() => void}
 */
export function mountHomeHeroWebGL({ canvas, host, dpr, onReady }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: dpr < 1.25,
      alpha: true,
      powerPreference: "high-performance",
      stencil: false,
      depth: true,
    });
  } catch {
    return () => {};
  }
  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.28;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 40);
  camera.position.set(0.05, 0.55, 5.35);
  camera.lookAt(1.62, 0.22, 0);

  scene.add(new THREE.HemisphereLight(0xe8edf4, 0x14161c, 0.72));
  scene.add(new THREE.AmbientLight(0x2a2d36, 0.38));

  const key = new THREE.DirectionalLight(0xf7f3ea, 1.65);
  key.position.set(-2.1, 3.6, 3.8);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xdce3ec, 0.62);
  fill.position.set(3.4, 1.1, 2.2);
  scene.add(fill);

  const rim = new THREE.PointLight(0xffffff, 0.55);
  rim.position.set(1.6, 2.2, -0.6);
  scene.add(rim);

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0xa7adb6,
    metalness: 0.78,
    roughness: 0.32,
  });

  const studio = new THREE.Group();
  studio.position.set(1.78, 0.08, 0.28);
  studio.scale.setScalar(1.12);
  studio.add(
    createRoom("glass", frameMaterial),
    createRoom("metal", frameMaterial),
    createRoom("paper", frameMaterial)
  );

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 6.5),
    new THREE.MeshStandardMaterial({
      color: 0x0c0c16,
      metalness: 0.42,
      roughness: 0.58,
    })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0.2, -1.08, 0.35);
  studio.add(floor);

  const lintel = new THREE.Mesh(
    new THREE.BoxGeometry(4.4, 0.04, 0.28),
    frameMaterial
  );
  lintel.position.set(0.04, 1.42, -0.55);
  studio.add(lintel);

  scene.add(studio);

  const clock = new THREE.Clock();
  const pointer = { x: 0, y: 0 };
  let visible = true;
  let pageVisible = true;
  let frameId = 0;
  let readySignaled = false;

  const resize = () => {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  const tick = () => {
    if (!visible || !pageVisible) return;
    const t = clock.getElapsedTime();
    studio.rotation.y = Math.sin(t * 0.18) * 0.055 + pointer.x * 0.12;
    studio.rotation.x = pointer.y * 0.045;
    studio.position.y = -0.18 + Math.sin(t * 0.32) * 0.028;
    renderer.render(scene, camera);
    if (!readySignaled) {
      readySignaled = true;
      onReady?.();
    }
    frameId = window.requestAnimationFrame(tick);
  };

  const resume = () => {
    if (!visible || !pageVisible) return;
    if (frameId) return;
    clock.getDelta();
    frameId = window.requestAnimationFrame(tick);
  };

  const pause = () => {
    if (!frameId) return;
    window.cancelAnimationFrame(frameId);
    frameId = 0;
  };

  const onPointerMove = (event) => {
    const rect = host.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
  };

  const onVisibility = () => {
    pageVisible = document.visibilityState === "visible";
    if (pageVisible) resume();
    else pause();
  };

  const intersection = new IntersectionObserver(
    ([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      if (visible) resume();
      else pause();
    },
    { threshold: 0.05 }
  );
  intersection.observe(host);

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);

  resize();
  resume();

  return () => {
    pause();
    intersection.disconnect();
    resizeObserver.disconnect();
    window.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("visibilitychange", onVisibility);
    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry?.dispose();
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      for (const material of materials) {
        material?.dispose();
      }
    });
    renderer.dispose();
  };
}
