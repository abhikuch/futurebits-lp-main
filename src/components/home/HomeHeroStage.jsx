"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import {
  readHeroStageContext,
  resolveHeroStageMode,
  shouldLoadWebGL,
} from "@/lib/home-hero-stage";

const HomeHeroWebGLCanvas = dynamic(() => import("./HomeHeroWebGLCanvas"), {
  ssr: false,
  loading: () => null,
});

function HomeHeroStageFallback({ replaced }) {
  return (
    <div
      className={`fb-home-hero-rooms${replaced ? " is-replaced" : ""}`}
      data-home-hero-fallback={replaced ? "replaced" : "visible"}
    >
      <div className="fb-home-hero-room is-glass" />
      <div className="fb-home-hero-room is-metal" />
      <div className="fb-home-hero-room is-paper" />
    </div>
  );
}

export default function HomeHeroStage() {
  const [mode, setMode] = useState("still");
  const [mountWebGL, setMountWebGL] = useState(false);
  const [webglReady, setWebglReady] = useState(false);
  const handleReady = useCallback(() => setWebglReady(true), []);

  useEffect(() => {
    const next = resolveHeroStageMode(readHeroStageContext(window));
    setMode(next);
    if (!shouldLoadWebGL(next)) return undefined;

    const start = () => setMountWebGL(true);

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(start, { timeout: 1400 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(start, 400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
      data-hero-stage={mode}
      data-hero-webgl={webglReady ? "ready" : mountWebGL ? "loading" : "off"}
    >
      <HomeHeroStageFallback replaced={webglReady} />
      {mountWebGL ? <HomeHeroWebGLCanvas onReady={handleReady} /> : null}
      <div className="fb-home-hero-scrim" />
    </div>
  );
}
