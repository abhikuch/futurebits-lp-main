"use client";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

export function PrivacyPolicyCards({ children }) {
  return (
    <MotionStagger className="space-y-8">{children}</MotionStagger>
  );
}

export function PrivacyPolicyCard({ title, children }) {
  return (
    <MotionStaggerItem className="fb-interactive-surface fb-panel p-6">
      <h2 className="mb-3 font-montserrat text-lg font-semibold">{title}</h2>
      <div className="text-sm leading-relaxed text-white/65">{children}</div>
    </MotionStaggerItem>
  );
}

export function PrivacyPolicyHero({ children }) {
  return <MotionFadeIn>{children}</MotionFadeIn>;
}
