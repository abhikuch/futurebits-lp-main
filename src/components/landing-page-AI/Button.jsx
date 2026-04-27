"use client";

import React from "react";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "px-2 h-10 w-44 text-base py-1",
  md: "px-6 h-11 rounded-3xl",
  semi: "w-full h-9 rounded-[32px] py-2 px-3  text-sm",
  start: "py-3 px-4 w-full h-[41px] text-sm gap-2 leading-4",
  lg: "w-[290px] text-base h-14 rounded-[28px] py-2 px-2 ",
  navbarButton: "w-[200px] h-[48px] rounded-[30px]"
};

const variantClasses = {
  fill: "text-black bg-white font-semibold",
  default: "text-white bg-[#0C0E1E]",
  secondary: "text-[#0C0E1E] border-[#EAEAEA] border rounded-3xl",
  tertiary: "bg-[#3C50E0] text-white rounded-3xl",
  figma: "bg-transparent text-white"
};

export const Button = ({
  children,
  variant = "fill",
  size = "md",
  className,
  ...props
}) => {
  const isFigma = variant === "figma";

  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-full w-full text-sm transition-all",
        variantClasses[variant],
        sizeClasses[size],
        isFigma && "overflow-hidden relative",
        className
      )}
      {...props}
    >
      {isFigma ? (
        <div className="flex w-full h-full items-center justify-center rounded-[30px]">
          <div 
            className="absolute inset-0 rounded-[32px]"
            style={{
              background: "#2E2688",
              boxShadow: '0px 4.92px 6.89px 0px #0000001F',
              boxShadow: '0px 7.87px 12.79px 0px #00000040',
              boxShadow: '0px 8.85px 18.69px 0px #33333340',
              boxShadow: '0px -19.38px 17.05px -5.81px #0000004A inset',

            }}
          />
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            {children}
          </div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;