"use client";

import BeamButton from "./BeamButton";
import Link from "next/link";
import TestimonialSection from "@/components/shared/TestimonialSection";

export default function TestimonialsCarousel() {
  return (
    <TestimonialSection
      theme="design"
      cta={
        <Link href="https://cal.com/futurebits/design?duration=30" target="_blank">
          <BeamButton title="Book a call" />
        </Link>
      }
    />
  );
}
