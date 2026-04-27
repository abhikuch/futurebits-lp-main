
"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function LampIntro({ className }) {
  return (
    <div
      className={cn(
        "relative flex h-[300px] sm:h-[200px] flex-col items-center justify-center bg-transparent w-full overflow-hidden",
        className
      )}
    >
      {/* Glow effect */}
      <div className="absolute top-0 z-10 w-[20rem] h-24 sm:h-48 sm:w-[28rem] -translate-y-1/2 rounded-full bg-cyan-600 opacity-50 blur-3xl" />
      
    </div>
  );
}
