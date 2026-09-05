"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import LazyMount from "@/components/ui/lazy-mount";

const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
});

/**
 * Home-neutral atmosphere. White dust only — no vertical accent hex.
 * Skips particles when the user prefers reduced motion; idles in on desktop.
 */
export default function HomeAtmosphere() {
  const [enabled, setEnabled] = useState(false);
  const [quantity, setQuantity] = useState(10);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 640px)").matches;
    setQuantity(coarse || narrow ? 6 : 12);

    const enable = () => setEnabled(true);

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(enable, { timeout: 1400 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enable, 400);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 top-16 h-[420px] w-[420px] rounded-full bg-[#15203a]/55 blur-[140px]" />
      <div className="absolute -right-16 top-40 h-[320px] w-[320px] rounded-full bg-white/[0.06] blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {enabled ? (
        <LazyMount fallbackClassName="absolute inset-0">
          <Particles
            quantity={quantity}
            ease={200}
            refresh
            size={0.35}
            staticity={120}
            color="#ffffff"
            className="absolute inset-0"
          />
        </LazyMount>
      ) : null}
    </div>
  );
}
