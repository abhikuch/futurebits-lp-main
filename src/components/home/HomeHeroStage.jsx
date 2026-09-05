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
    let idleId;
    let timeoutId;
    let cancelled = false;

    const apply = (next) => {
      setMode(next);
      if (!shouldLoadWebGL(next)) {
        setMountWebGL(false);
        setWebglReady(false);
        return;
      }
      if (cancelled) return;

      const start = () => {
        if (!cancelled) setMountWebGL(true);
      };

      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
        idleId = undefined;
      }
      if (timeoutId != null) {
        window.clearTimeout(timeoutId);
        timeoutId = undefined;
      }

      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(start, { timeout: 1400 });
        return;
      }

      timeoutId = window.setTimeout(start, 400);
    };

    apply(resolveHeroStageMode(readHeroStageContext(window)));

    const media = [
      window.matchMedia("(prefers-reduced-motion: reduce)"),
      window.matchMedia("(pointer: coarse)"),
      window.matchMedia("(max-width: 767px)"),
    ];
    const onChange = () => apply(resolveHeroStageMode(readHeroStageContext(window)));
    for (const query of media) {
      query.addEventListener("change", onChange);
    }

    return () => {
      cancelled = true;
      if (idleId != null && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId != null) window.clearTimeout(timeoutId);
      for (const query of media) {
        query.removeEventListener("change", onChange);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 bottom-[9.5rem] overflow-hidden lg:bottom-[8.5rem]"
      data-hero-stage={mode}
      data-hero-webgl={webglReady ? "ready" : mountWebGL ? "loading" : "off"}
    >
      <HomeHeroStageFallback replaced={webglReady} />
      {mountWebGL ? <HomeHeroWebGLCanvas onReady={handleReady} /> : null}
      <div className="fb-home-hero-scrim" />
    </div>
  );
}
