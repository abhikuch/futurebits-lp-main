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
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: MOTION.viewportAmount }}
      variants={reduceMotion ? undefined : MOTION_VARIANTS.fadeUp}
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
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: MOTION.viewportAmount }}
      variants={reduceMotion ? undefined : MOTION_VARIANTS.staggerContainer}
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
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      variants={reduceMotion ? undefined : MOTION_VARIANTS.staggerItem}
    >
      {children}
    </MotionTag>
  );
}
