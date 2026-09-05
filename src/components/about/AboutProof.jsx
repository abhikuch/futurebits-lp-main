"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { ABOUT_STATS } from "@/content/about";
import { MotionStatGrid } from "@/components/shared/MotionContentBlocks";
import { MotionFadeIn } from "@/components/shared/MotionReveal";

export default function AboutProof() {
  return (
    <Section className="bg-[#050512] py-12 sm:py-14">
      <Container className="max-w-5xl">
        <MotionFadeIn>
          <div className="fb-panel p-6 sm:p-8">
            <p className="font-poppins text-xs uppercase tracking-[0.22em] text-white/50">
              What is already true
            </p>
            <MotionStatGrid stats={ABOUT_STATS} />
          </div>
        </MotionFadeIn>
      </Container>
    </Section>
  );
}
