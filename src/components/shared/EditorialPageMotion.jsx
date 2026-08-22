"use client";

import { Children } from "react";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

export function EditorialCardGrid({ className, children }) {
  const items = Children.toArray(children).filter(Boolean);

  return (
    <MotionFadeIn>
      <MotionStagger className={className}>
        {items.map((child) => (
          <MotionStaggerItem key={child.key} className="h-full">
            {child}
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </MotionFadeIn>
  );
}

export function EditorialSections({ className = "mt-12 space-y-12", children }) {
  const sections = Children.toArray(children).filter(Boolean);

  return (
    <MotionStagger className={className}>
      {sections.map((section) => (
        <MotionStaggerItem key={section.key}>{section}</MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}

export function EditorialBlock({ children, className }) {
  return <MotionFadeIn className={className}>{children}</MotionFadeIn>;
}
