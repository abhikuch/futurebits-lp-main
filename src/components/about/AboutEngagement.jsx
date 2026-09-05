"use client";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { ABOUT_ENGAGEMENT_STEPS } from "@/content/about";
import { assertNever } from "@/components/about/assert-never";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

/**
 * @param {import("@/content/about").AboutStepVariant} variant
 */
function stepClass(variant) {
  switch (variant) {
    case "wide":
      return "fb-interactive-surface fb-panel max-w-3xl p-7 sm:p-9";
    case "pair":
      return "fb-interactive-surface fb-panel p-6 sm:p-7";
    case "full":
      return "fb-interactive-surface fb-panel p-7 sm:p-8";
    case "cut":
      return "fb-interactive-surface rounded-2xl border border-white/15 bg-white/[0.05] p-7 sm:p-8";
    default:
      return assertNever(variant);
  }
}

function StepBody({ step }) {
  return (
    <>
      <p className="font-poppins text-xs uppercase tracking-[0.22em] text-white/40">
        {step.numeral}
      </p>
      <h3 className="fb-h3 mt-3">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
        {step.body}
      </p>
    </>
  );
}

function StepCard({ step }) {
  return (
    <MotionStaggerItem className={stepClass(step.variant)}>
      <StepBody step={step} />
    </MotionStaggerItem>
  );
}

export default function AboutEngagement() {
  const wide = ABOUT_ENGAGEMENT_STEPS.filter((step) => step.variant === "wide");
  const pair = ABOUT_ENGAGEMENT_STEPS.filter((step) => step.variant === "pair");
  const rest = ABOUT_ENGAGEMENT_STEPS.filter(
    (step) => step.variant === "full" || step.variant === "cut"
  );

  return (
    <Section id="engagement" className="scroll-mt-28 py-16 sm:py-24">
      <Container className="max-w-5xl">
        <MotionFadeIn className="max-w-2xl">
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
            How an engagement actually runs
          </p>
          <h2 className="fb-h2 mt-4">Access, scope, demos, repo, cut lines</h2>
          <p className="mt-4 text-pretty text-white/60">
            Not a discovery theatre. Not a process poster. This is the operating
            cadence we already run.
          </p>
        </MotionFadeIn>

        <MotionStagger className="mt-12 space-y-4">
          {wide.map((step) => (
            <StepCard key={step.numeral} step={step} />
          ))}
          <MotionStaggerItem>
            <div className="grid gap-4 md:grid-cols-2">
              {pair.map((step) => (
                <article key={step.numeral} className={stepClass(step.variant)}>
                  <StepBody step={step} />
                </article>
              ))}
            </div>
          </MotionStaggerItem>
          {rest.map((step) => (
            <StepCard key={step.numeral} step={step} />
          ))}
        </MotionStagger>
      </Container>
    </Section>
  );
}
