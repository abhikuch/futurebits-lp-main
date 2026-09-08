/**
 * Futurebits studio instrument.
 * Imported only by the deferred client canvas; `three` never enters the route shell.
 */

import * as THREE from "three";

const TAU = Math.PI * 2;

function smoothstep(value) {
  const clamped = THREE.MathUtils.clamp(value, 0, 1);
  return clamped * clamped * (3 - 2 * clamped);
}

function createFrame(width, height, depth, material) {
  const group = new THREE.Group();
  const bar = 0.035;
  const horizontalGeometry = new THREE.BoxGeometry(width, bar, depth);
  const verticalGeometry = new THREE.BoxGeometry(bar, height, depth);
  const top = new THREE.Mesh(horizontalGeometry, material);
  const bottom = new THREE.Mesh(horizontalGeometry, material);
  const left = new THREE.Mesh(verticalGeometry, material);
  const right = new THREE.Mesh(verticalGeometry, material);

  top.position.y = height / 2;
  bottom.position.y = -height / 2;
  left.position.x = -width / 2;
  right.position.x = width / 2;
  group.add(top, bottom, left, right);
  return group;
}

function createGlassSpecimen(materials) {
  const group = new THREE.Group();
  const panel = new THREE.Mesh(
    new THREE.BoxGeometry(0.86, 1.44, 0.045),
    materials.glass
  );
  const frame = createFrame(0.98, 1.56, 0.085, materials.edge);
  const etchingGeometry = new THREE.BufferGeometry();
  const positions = [];

  for (let index = 0; index < 8; index += 1) {
    const y = -0.55 + index * 0.16;
    positions.push(-0.33, y, 0.035, 0.33, y + 0.1, 0.035);
  }

  etchingGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  const etching = new THREE.LineSegments(etchingGeometry, materials.etch);
  group.add(panel, frame, etching);
  return group;
}

function createMetalSpecimen(materials) {
  const group = new THREE.Group();
  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 1.58, 0.11, 1, 1, 1),
    materials.metal
  );
  group.add(slab);

  for (let index = 0; index < 7; index += 1) {
    const fin = new THREE.Mesh(
      new THREE.BoxGeometry(0.98 - index * 0.025, 0.018, 0.18),
      index % 2 === 0 ? materials.edge : materials.darkMetal
    );
    fin.position.set(0, -0.57 + index * 0.19, 0.09);
    group.add(fin);
  }

  const inset = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.62, 0.025),
    materials.blackGlass
  );
  inset.position.set(0.13, 0.29, 0.07);
  group.add(inset);
  return group;
}

function createPaperSpecimen(materials) {
  const geometry = new THREE.PlaneGeometry(0.94, 1.5, 24, 28);
  const position = geometry.attributes.position;

  for (let index = 0; index < position.count; index += 1) {
    const x = position.getX(index);
    const y = position.getY(index);
    const normalizedY = y / 1.5 + 0.5;
    const curl = Math.pow(Math.max(0, normalizedY - 0.57), 2) * 1.35;
    position.setZ(index, Math.sin((x + 0.47) * Math.PI) * 0.035 + curl);
    position.setX(index, x + curl * 0.14);
  }

  geometry.computeVertexNormals();
  const group = new THREE.Group();
  const sheet = new THREE.Mesh(geometry, materials.paper);
  const line = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.012, 0.012),
    materials.paperInk
  );
  line.position.set(-0.07, -0.46, 0.025);
  const mark = line.clone();
  mark.scale.x = 0.48;
  mark.position.y = -0.39;
  group.add(sheet, line, mark);
  return group;
}

function createAperture(materials) {
  const group = new THREE.Group();
  const shell = new THREE.Mesh(
    new THREE.CylinderGeometry(0.22, 0.29, 1.95, 32, 1, true),
    materials.darkMetal
  );
  shell.rotation.z = Math.PI / 2;

  const slit = new THREE.Mesh(
    new THREE.PlaneGeometry(0.055, 1.62),
    materials.aperture
  );
  slit.position.z = 0.295;

  const capTop = new THREE.Mesh(
    new THREE.SphereGeometry(0.18, 24, 12, 0, TAU, 0, Math.PI / 2),
    materials.metal
  );
  capTop.position.y = 0.81;
  const capBottom = capTop.clone();
  capBottom.position.y = -0.81;
  capBottom.rotation.x = Math.PI;
  group.add(shell, slit, capTop, capBottom);
  return { group, slit };
}

function createDust() {
  const count = 110;
  const positions = new Float32Array(count * 3);
  for (let index = 0; index < count; index += 1) {
    const radius = 1.25 + Math.random() * 2.4;
    const angle = Math.random() * TAU;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = (Math.random() - 0.5) * 3.4;
    positions[index * 3 + 2] = -0.8 + Math.sin(angle) * radius * 0.5;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xd9d8d2,
    opacity: 0.28,
    size: 0.012,
    transparent: true,
    depthWrite: false,
  });
  return new THREE.Points(geometry, material);
}

function createMaterials() {
  return {
    aperture: new THREE.MeshBasicMaterial({
      color: 0xfff4d4,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
    blackGlass: new THREE.MeshPhysicalMaterial({
      color: 0x080811,
      metalness: 0.35,
      roughness: 0.14,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
    }),
    darkMetal: new THREE.MeshStandardMaterial({
      color: 0x16171c,
      metalness: 0.94,
      roughness: 0.24,
    }),
    edge: new THREE.MeshStandardMaterial({
      color: 0x8c9097,
      metalness: 0.96,
      roughness: 0.17,
    }),
    etch: new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.26,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xe1e4e6,
      metalness: 0.05,
      roughness: 0.2,
      transmission: 0.24,
      thickness: 0.28,
      transparent: true,
      opacity: 0.84,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    }),
    metal: new THREE.MeshStandardMaterial({
      color: 0xd0d0ce,
      metalness: 0.86,
      roughness: 0.28,
    }),
    paper: new THREE.MeshPhysicalMaterial({
      color: 0xeee8da,
      metalness: 0,
      roughness: 0.72,
      side: THREE.DoubleSide,
      sheen: 0.45,
      sheenColor: new THREE.Color(0xffffff),
    }),
    paperInk: new THREE.MeshBasicMaterial({ color: 0x5a5750 }),
  };
}

function createInstrument() {
  const materials = createMaterials();
  const root = new THREE.Group();
  const armature = new THREE.Group();
  const specimens = [
    createGlassSpecimen(materials),
    createMetalSpecimen(materials),
    createPaperSpecimen(materials),
  ];
  const targets = [
    { position: [-1.02, 0.2, 0.18], rotation: [0.05, 0.42, -0.13] },
    { position: [0.15, -0.22, 0.48], rotation: [-0.02, -0.09, 0.04] },
    { position: [1.18, 0.25, 0.02], rotation: [-0.08, -0.43, 0.15] },
  ];

  const outerRail = new THREE.Mesh(
    new THREE.TorusGeometry(1.67, 0.025, 10, 96, Math.PI * 1.62),
    materials.edge
  );
  outerRail.rotation.set(1.18, 0.15, -0.54);
  const innerRail = new THREE.Mesh(
    new THREE.TorusGeometry(1.35, 0.014, 8, 80, Math.PI * 1.42),
    materials.darkMetal
  );
  innerRail.rotation.set(1.28, -0.12, 0.72);
  const crossbar = new THREE.Mesh(
    new THREE.BoxGeometry(3.36, 0.035, 0.05),
    materials.darkMetal
  );
  crossbar.position.set(0.02, -0.92, -0.12);
  crossbar.rotation.z = -0.04;

  const aperture = createAperture(materials);
  aperture.group.position.set(0.04, 0.03, 0.02);
  aperture.group.scale.setScalar(0.8);
  armature.add(outerRail, innerRail, crossbar, aperture.group);

  specimens.forEach((specimen, index) => {
    const target = targets[index];
    specimen.userData.target = target;
    specimen.position.set(0, 0, -0.4);
    specimen.scale.setScalar(0.72);
    armature.add(specimen);
  });

  const dust = createDust();
  root.add(armature, dust);
  return { aperture: aperture.slit, armature, dust, materials, root, specimens };
}

/**
 * @param {{
 *   canvas: HTMLCanvasElement,
 *   host: HTMLElement,
 *   dpr: number,
 *   onFailure?: () => void,
 *   onReady?: () => void,
 * }} options
 * @returns {() => void}
 */
export function mountHomeHeroWebGL({
  canvas,
  host,
  dpr,
  onFailure,
  onReady,
}) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: dpr <= 1.25,
      depth: true,
      powerPreference: "high-performance",
      stencil: false,
    });
  } catch {
    onFailure?.();
    return () => {};
  }

  renderer.setPixelRatio(dpr);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x060618, 0.085);
  const camera = new THREE.PerspectiveCamera(29, 1, 0.1, 30);
  camera.position.set(0, 0.35, 6.3);

  const instrument = createInstrument();
  instrument.root.position.set(1.92, 0.1, 0);
  instrument.root.scale.setScalar(0.94);
  instrument.root.rotation.set(-0.03, -0.14, 0.02);
  scene.add(instrument.root);

  const key = new THREE.DirectionalLight(0xf4efe4, 2.9);
  key.position.set(-3, 4, 4);
  const rim = new THREE.DirectionalLight(0xbfc9d5, 1.8);
  rim.position.set(4, 1, -2);
  const low = new THREE.PointLight(0xc5bda9, 11, 6, 2);
  low.position.set(1.8, -1.7, 1.5);
  scene.add(new THREE.AmbientLight(0x30313d, 1.15), key, rim, low);

  const clock = new THREE.Clock();
  const pointer = new THREE.Vector2();
  const pointerTarget = new THREE.Vector2();
  let frameId = 0;
  let heroVisible = true;
  let pageVisible = true;
  let readySignaled = false;
  let disposed = false;
  let scrollProgress = 0;

  const resize = () => {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    camera.aspect = width / height;
    camera.fov = width < 1024 ? 33 : 29;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  const onPointerMove = (event) => {
    const rect = host.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    pointerTarget.set(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ((event.clientY - rect.top) / rect.height) * 2 - 1
    );
  };

  const onScroll = () => {
    const rect = host.getBoundingClientRect();
    scrollProgress = THREE.MathUtils.clamp(-rect.top / (rect.height * 0.72), 0, 1);
  };

  const onContextLost = (event) => {
    event.preventDefault();
    onFailure?.();
  };

  const tick = () => {
    frameId = 0;
    if (disposed || !heroVisible || !pageVisible) return;

    const elapsed = clock.getElapsedTime();
    const reveal = smoothstep(elapsed / 1.65);
    pointer.lerp(pointerTarget, 0.045);

    instrument.specimens.forEach((specimen, index) => {
      const target = specimen.userData.target;
      const delay = index * 0.13;
      const localReveal = smoothstep((reveal - delay) / (1 - delay));
      specimen.position.set(
        target.position[0] * localReveal,
        target.position[1] * localReveal,
        THREE.MathUtils.lerp(-0.62, target.position[2], localReveal)
      );
      specimen.rotation.set(
        target.rotation[0] * localReveal,
        target.rotation[1] * localReveal,
        target.rotation[2] * localReveal
      );
      specimen.scale.setScalar(THREE.MathUtils.lerp(0.74, 1, localReveal));
    });

    const ambient = Math.sin(elapsed * 0.42);
    instrument.armature.rotation.y =
      -0.03 + pointer.x * 0.075 + ambient * 0.018 + scrollProgress * 0.2;
    instrument.armature.rotation.x = pointer.y * 0.04 - scrollProgress * 0.08;
    instrument.root.position.y = 0.1 + ambient * 0.018 - scrollProgress * 0.24;
    instrument.root.scale.setScalar(0.94 - scrollProgress * 0.07);
    instrument.dust.rotation.y = elapsed * 0.012;
    instrument.aperture.material.opacity = 0.78 + Math.sin(elapsed * 0.8) * 0.1;

    camera.position.x = pointer.x * 0.07;
    camera.position.y = 0.35 - pointer.y * 0.045;
    camera.lookAt(1.62, 0.04, 0);
    renderer.render(scene, camera);

    if (!readySignaled) {
      readySignaled = true;
      onReady?.();
    }
    frameId = window.requestAnimationFrame(tick);
  };

  const resume = () => {
    if (disposed || !heroVisible || !pageVisible || frameId) return;
    clock.getDelta();
    frameId = window.requestAnimationFrame(tick);
  };

  const pause = () => {
    if (!frameId) return;
    window.cancelAnimationFrame(frameId);
    frameId = 0;
  };

  const onVisibility = () => {
    pageVisible = document.visibilityState === "visible";
    if (pageVisible) resume();
    else pause();
  };

  const intersection = new IntersectionObserver(
    ([entry]) => {
      heroVisible = Boolean(entry?.isIntersecting);
      if (heroVisible) resume();
      else pause();
    },
    { threshold: 0.02 }
  );
  const resizeObserver = new ResizeObserver(resize);
  intersection.observe(host);
  resizeObserver.observe(host);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  canvas.addEventListener("webglcontextlost", onContextLost);

  resize();
  onScroll();
  resume();

  return () => {
    disposed = true;
    pause();
    intersection.disconnect();
    resizeObserver.disconnect();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("visibilitychange", onVisibility);
    canvas.removeEventListener("webglcontextlost", onContextLost);

    const geometries = new Set();
    const materials = new Set();
    scene.traverse((object) => {
      if (object.geometry) geometries.add(object.geometry);
      const objectMaterials = Array.isArray(object.material)
        ? object.material
        : [object.material];
      for (const material of objectMaterials) {
        if (material) materials.add(material);
      }
    });
    geometries.forEach((geometry) => geometry.dispose());
    materials.forEach((material) => material.dispose());
    renderer.dispose();
  };
}
