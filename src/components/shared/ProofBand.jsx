"use client";

import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { PROOF } from "@/content/inline-modules";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "./MotionReveal";

export default function ProofBand({
  vertical,
  ctaHref,
  ctaLabel = "Book a call",
}) {
  const data = PROOF[vertical];
  if (!data) return null;

  return (
    <Section className="bg-[#050512] py-12 sm:py-14">
      <Container>
        <MotionFadeIn>
          <div className="fb-panel p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="font-poppins text-xs uppercase tracking-[0.22em] text-white/60">
                {data.eyebrow}
              </p>
              {ctaHref ? (
                <Link
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#060618] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050512]"
                >
                  {ctaLabel}
                </Link>
              ) : null}
            </div>

            <MotionStagger className="grid gap-4 sm:grid-cols-3">
              {data.items.map((item) => (
                <MotionStaggerItem
                  key={item.label}
                  className="fb-interactive-surface rounded-xl border border-white/10 bg-black/10 p-5"
                >
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    {item.label}
                  </p>
                  <p className="mt-2 font-montserrat text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </MotionStaggerItem>
              ))}
            </MotionStagger>

            {ctaHref ? (
              <Link
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[#060618] transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050512] sm:hidden"
              >
                {ctaLabel}
              </Link>
            ) : null}
          </div>
        </MotionFadeIn>
      </Container>
    </Section>
  );
}
