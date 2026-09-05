"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { ABOUT_BELIEFS } from "@/content/about";
import { assertNever } from "@/components/about/assert-never";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

/**
 * @param {import("@/content/about").AboutBeliefVariant} variant
 */
function beliefShellClass(variant) {
  switch (variant) {
    case "lead":
      return "fb-interactive-surface fb-panel max-w-3xl p-8 sm:p-10";
    case "offset":
      return "fb-interactive-surface fb-panel ml-auto max-w-xl p-6 sm:p-8";
    case "split":
      return "fb-interactive-surface fb-panel grid gap-6 p-7 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] sm:items-start sm:p-9";
    case "close":
      return "fb-interactive-surface mx-auto max-w-lg rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-7 text-center";
    default:
      return assertNever(variant);
  }
}

function BeliefCard({ belief }) {
  const shell = beliefShellClass(belief.variant);
  const isSplit = belief.variant === "split";
  const titleClass =
    belief.variant === "lead"
      ? "fb-h2"
      : belief.variant === "close"
        ? "font-montserrat text-lg font-semibold"
        : "fb-h3";

  return (
    <MotionStaggerItem className={shell}>
      {isSplit ? (
        <>
          <h3 className="fb-h3">{belief.title}</h3>
          <p className="text-sm leading-relaxed text-white/70 sm:text-base">
            {belief.body}
          </p>
        </>
      ) : (
        <>
          <h3 className={titleClass}>{belief.title}</h3>
          <p
            className={`mt-4 leading-relaxed text-white/70 ${
              belief.variant === "lead" ? "text-base sm:text-lg" : "text-sm sm:text-base"
            }`}
          >
            {belief.body}
          </p>
        </>
      )}
    </MotionStaggerItem>
  );
}

export default function AboutBeliefs() {
  return (
    <Section id="beliefs" className="scroll-mt-28 py-16 sm:py-24">
      <Container className="max-w-5xl">
        <MotionFadeIn>
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
            Point of view
          </p>
          <h2 className="fb-h2 mt-4 max-w-2xl">What we believe — and act on</h2>
          <p className="mt-4 max-w-2xl text-pretty text-white/60">
            These are defaults, not wallpaper. If any of this feels wrong for
            your team, we are probably not the right fit. That is worth learning
            in the first call, not month three.
          </p>
        </MotionFadeIn>

        <MotionStagger className="mt-12 space-y-5 sm:space-y-8">
          {ABOUT_BELIEFS.map((belief) => (
            <BeliefCard key={belief.title} belief={belief} />
          ))}
        </MotionStagger>
      </Container>
    </Section>
  );
}
