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
        color: 0xc8d2dc,
        metalness: 0.08,
        roughness: 0.12,
        transmission: 0.62,
        thickness: 0.45,
        transparent: true,
        opacity: 0.92,
        envMapIntensity: 0.55,
      });
    case "metal":
      return new THREELib.MeshStandardMaterial({
        color: 0x8f959e,
        metalness: 0.86,
        roughness: 0.28,
      });
    case "paper":
      return new THREELib.MeshStandardMaterial({
        color: 0xe8e2d4,
        metalness: 0.02,
        roughness: 0.78,
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

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 40);
  camera.position.set(0.25, 0.48, 6.45);
  camera.lookAt(1.35, 0.08, 0);

  scene.add(new THREE.AmbientLight(0x1a1c24, 0.48));

  const key = new THREE.DirectionalLight(0xf4f0e6, 1.12);
  key.position.set(-2.4, 3.2, 3.4);
  scene.add(key);

  const fill = new THREE.DirectionalLight(0xd8dde6, 0.38);
  fill.position.set(3.2, 1.4, 1.6);
  scene.add(fill);

  const rim = new THREE.PointLight(0xffffff, 0.22);
  rim.position.set(1.2, 2.4, -1.2);
  scene.add(rim);

  const frameMaterial = new THREE.MeshStandardMaterial({
    color: 0x6d727a,
    metalness: 0.72,
    roughness: 0.38,
  });

  const studio = new THREE.Group();
  studio.position.set(1.52, -0.18, 0);
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
