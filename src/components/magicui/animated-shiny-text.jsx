"use client";

import { cn } from "@/lib/utils";

export const AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span
      style={{
        "--shiny-width": `${shimmerWidth}px`
      }}
      className={cn(
        // Base styles
        "relative",
        // Original text with your gradient
        className
      )}
      {...props}
    >
      {children}
      {/* Overlay for the shine effect */}
      <span 
        className={cn(
          "absolute inset-0 bg-clip-text text-transparent",
          // Shine effect animation
          "animate-shiny-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_0.1s_cubic-bezier(.6,.6,0,1)_infinite]",
          // Shine gradient
          "bg-gradient-to-r from-transparent via-white to-transparent"
        )}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  );
};