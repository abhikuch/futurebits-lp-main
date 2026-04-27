"use client";

import MarketingButton from "@/components/ui/marketing-button";

const BeamButton = ({
  title = "Book a 30-min AI working call",
  className = "w-full sm:w-[240px]",
  children,
  ...props
}) => {
  return (
    <MarketingButton tone="ai" className={className} title={title} {...props}>
      {children}
    </MarketingButton>
  );
};

export default BeamButton;
