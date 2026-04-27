"use client";

import MarketingButton from "@/components/ui/marketing-button";

const ShimerButton = ({ 
  size = "lg", 
  children = "Book a 30-min call", 
  variant = "gradient",
  className,
  ...props
}) => {
  const tone = variant === "transparent" ? "ghost" : "markets";
  const mappedSize = size === "sm" ? "sm" : size === "md" ? "md" : "lg";

  return (
    <MarketingButton
      tone={tone}
      size={mappedSize}
      className={className}
      {...props}
    >
      {children}
    </MarketingButton>
  );
};

export default ShimerButton;