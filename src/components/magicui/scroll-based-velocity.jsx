"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function ParallaxText({
  children,
  baseVelocity = 100,
  reverse = false,
  ...props
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  
  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const prevScrollY = useRef(0);
  const directionFactor = useRef(reverse ? -1 : 1);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil((containerWidth / textWidth) * 1.5) + 1;
        setRepetitions(Math.max(2, newRepetitions));
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  // Update direction based on scroll
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      // If scrolling up (decreasing Y value)
      if (latest < prevScrollY.current) {
        directionFactor.current = reverse ? 1 : 1; // Left to right
      } 
      // If scrolling down (increasing Y value)
      else if (latest > prevScrollY.current) {
        directionFactor.current = reverse ? 1 : 1; // Right to left
      }
      // Update previous value
      prevScrollY.current = latest;
    });

    return () => unsubscribe();
  }, [reverse, scrollY]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    // Use constant speed regardless of scroll velocity
    const moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="w-full whitespace-nowrap"
      {...props}>
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <span key={i} ref={i === 0 ? textRef : null} className="inline-flex">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 3,
  numRows = 1,
  children,
  className,
  reverse = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative",
        className
      )}
      {...props}>
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText 
          key={i} 
          baseVelocity={defaultVelocity} 
          reverse={reverse}
        >
          {children}
        </ParallaxText>
      ))}
    </div>
  );
}