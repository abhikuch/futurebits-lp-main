"use client";

import { motion, useReducedMotion } from "framer-motion";

import { MOTION, MOTION_VARIANTS } from "@/lib/motion-tokens";

export function MotionFadeIn({
  children,
  className = "",
  delay = 0,
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    const Tag = as === "section" ? "section" : "div";
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: MOTION.viewportAmount }}
      variants={MOTION_VARIANTS.fadeUp}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
}

export function MotionStagger({
  children,
  className = "",
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    const Tag = as === "ul" ? "ul" : "div";
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: MOTION.viewportAmount }}
      variants={MOTION_VARIANTS.staggerContainer}
    >
      {children}
    </MotionTag>
  );
}

export function MotionStaggerItem({
  children,
  className = "",
  as = "div",
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    const Tag = as === "li" ? "li" : "div";
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag className={className} variants={MOTION_VARIANTS.staggerItem}>
      {children}
    </MotionTag>
  );
}
