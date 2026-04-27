"use client";

import MarketingButton from "@/components/ui/marketing-button";

export const BeamButton = ({ children, className, ...props }) => (
  <MarketingButton tone="markets" className={className} {...props}>
    {children}
  </MarketingButton>
);

BeamButton.displayName = "BeamButton";
