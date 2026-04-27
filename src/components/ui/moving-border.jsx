"use client";
import React from "react";
import {
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 1000,
  rx,
  ry,
  ...otherProps
}) => {
  const [scope, animate] = useAnimate();
  const progressValue = useMotionValue(0);

  useEffect(() => {
    const controls = animate(progressValue, 1, {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
    });

    return () => controls.stop();
  }, [animate, duration, progressValue]);

  // Transform the gradient's x1 and x2 values to create smooth movement
  const gradientMove = useTransform(
    progressValue, 
    [0, 1], 
    ['-20%', '120%']
  );

  return (
    <svg
      ref={scope}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full"
      width="100%"
      height="100%"
      {...otherProps}>
      {/* Animated Gradient Definition */}
      <defs>
        <linearGradient 
          id="movingBorderGradient" 
          x1={gradientMove} 
          x2={gradientMove} 
          y1="0%" 
          y2="0%"
        >
          <stop offset="20%" stopColor="#060618"/>
          <stop offset="30%" stopColor="#2E2688"/>
          <stop offset="40%" stopColor="#01B0EA"/>
          <stop offset="50%" stopColor="#FFFFFF"/>
          <stop offset="55%" stopColor="#FFFFFF"/>
          <stop offset="60%" stopColor="#01B0EA"/>
          <stop offset="70%" stopColor="#2E2688"/>
          <stop offset="80%" stopColor="#060618"/>
        </linearGradient>
      </defs>
      
      {/* Rect with moving gradient stroke */}
      <rect 
        fill="none" 
        width="100%" 
        height="100%" 
        rx={rx} 
        ry={ry} 
        stroke="url(#movingBorderGradient)"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 1000,
  className,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}>
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]",
              borderClassName
            )} />
        </MovingBorder>
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}>
        {children}
      </div>
    </Component>
  );
}