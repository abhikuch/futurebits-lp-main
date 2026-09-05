"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { ABOUT_FIT } from "@/content/about";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

export default function AboutFit() {
  return (
    <Section id="fit" className="scroll-mt-28 py-16 sm:py-24">
      <Container className="max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <MotionFadeIn>
              <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
                Who it&apos;s for
              </p>
              <h2 className="fb-h2 mt-4">Stay if this is you</h2>
            </MotionFadeIn>
            <MotionStagger className="mt-8 space-y-4">
              {ABOUT_FIT.stay.map((item) => (
                <MotionStaggerItem
                  key={item.title}
                  className="fb-interactive-surface fb-panel p-6"
                >
                  <h3 className="fb-h3">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>

          <MotionFadeIn delay={0.08} className="lg:pt-10">
            <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
              Who should leave
            </p>
            <h2 className="fb-h3 mt-4">If this is the brief, don&apos;t book</h2>
            <ul className="mt-6 space-y-3">
              {ABOUT_FIT.leave.map((line) => (
                <li
                  key={line}
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-5 py-4 text-sm leading-relaxed text-white/80"
                >
                  {line}
                </li>
              ))}
            </ul>
          </MotionFadeIn>
        </div>
      </Container>
    </Section>
  );
}
