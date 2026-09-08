"use client";

import { useEffect, useRef } from "react";

import { capHeroDpr } from "@/lib/home-hero-stage";
import { mountHomeHeroWebGL } from "./home-hero-webgl";

export default function HomeHeroWebGLCanvas({ onFailure, onReady }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);
  const onReadyRef = useRef(onReady);
  const onFailureRef = useRef(onFailure);
  onReadyRef.current = onReady;
  onFailureRef.current = onFailure;

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    try {
      return mountHomeHeroWebGL({
        canvas,
        host,
        dpr: capHeroDpr(window.devicePixelRatio, "full"),
        onFailure: () => onFailureRef.current?.(),
        onReady: () => onReadyRef.current?.(),
      });
    } catch {
      onFailureRef.current?.();
      return undefined;
    }
  }, []);

  return (
    <div ref={hostRef} className="absolute inset-0" data-home-hero-webgl="on">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
