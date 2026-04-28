"use client";

import Link from "next/link";
import ShimerButton from "./ShimerButton";
import TestimonialSection from "@/components/shared/TestimonialSection";

export default function Testimonials() {
  return (
    <TestimonialSection
      theme="markets"
      cta={
        <Link href="https://cal.com/futurebits/markets?duration=30" target="_blank">
          <ShimerButton size="lg" href="/book-call" className="text-base sm:text-[20px]">
            Book a call
          </ShimerButton>
        </Link>
      }
    />
  );
}
