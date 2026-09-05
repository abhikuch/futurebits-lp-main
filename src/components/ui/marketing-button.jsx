"use client";

import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { assertNever } from "@/lib/assert-never";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

/**
 * @typedef {import("@/lib/content-types").MarketingTone} MarketingTone
 */

const toneStyles = {
  ai: { background: "#2E2688", text: "text-white" },
  design: { background: "#01B0EA", text: "text-white" },
  markets: { background: "#FFFFFF", text: "text-black" },
  platform: { background: "#F5B942", text: "text-[#060618]" },
  home: { background: "#FFFFFF", text: "text-[#060618]" },
  ghost: { background: "transparent", text: "text-white border-2 border-white" },
};

const sizeStyles = {
  sm: "h-[40px] px-4 text-sm",
  md: "h-[46px] px-5 text-base",
  lg: "h-[55px] px-6 text-[18px]",
};

/**
 * @param {MarketingTone} tone
 */
function resolveToneStyle(tone) {
  switch (tone) {
    case "ai":
    case "design":
    case "markets":
    case "platform":
    case "home":
    case "ghost":
      return toneStyles[tone];
    default:
      return assertNever(tone);
  }
}

export default function MarketingButton({
  title,
  children,
  tone = "ai",
  size = "lg",
  className,
  showArrow = true,
  arrowClassName = "h-4 w-4 ml-1",
  analyticsEvent = "book_call_click",
  analyticsLabel,
  onClick,
  ...props
}) {
  const content = children ?? title ?? "Book a call";
  const toneStyle = resolveToneStyle(tone);
  const sizeStyle = sizeStyles[size] ?? sizeStyles.lg;
  const label =
    analyticsLabel ??
    (typeof content === "string" ? content : typeof title === "string" ? title : "Book a call");

  const handleClick = (event) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", analyticsEvent, {
        event_category: "cta",
        event_label: label,
        tone,
      });
    }
    onClick?.(event);
  };

  return (
    <ShimmerButton
      background={toneStyle.background}
      className={cn("font-medium", toneStyle.text, sizeStyle, className)}
      {...props}
      onClick={handleClick}
      data-cta-event={analyticsEvent}
      data-cta-label={label}
    >
      {content}
      {showArrow ? (
        <ChevronRightIcon strokeWidth={3} className={arrowClassName} />
      ) : null}
    </ShimmerButton>
  );
}
