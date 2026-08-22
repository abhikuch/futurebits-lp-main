"use client";

import Link from "next/link";

import { ENGAGEMENT_MODELS } from "@/content/inline-modules";
import { ROUTES } from "@/config/site";
import Container from "@/components/ui/container";
import Heading from "@/components/ui/heading";
import Section from "@/components/ui/section";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "./MotionReveal";

export default function EngagementModels({
  ctaHref,
  ctaLabel = "Talk to us",
}) {
  const fallbackHref = ROUTES.contact.path;
  return (
    <Section
      aria-labelledby="engagement-models-title"
      className="bg-[#08081E]"
    >
      <Container>
        <MotionFadeIn className="max-w-2xl">
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
            Ways to work with us
          </p>
          <Heading id="engagement-models-title" className="mt-4">
            Three ways in. All senior, all scoped.
          </Heading>
          <p className="mt-4 text-pretty text-base text-white/70">
            Pick the smallest one that proves the bet. We'll tell you on the
            first call which model actually fits.
          </p>
        </MotionFadeIn>

        <MotionStagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {ENGAGEMENT_MODELS.map((model) => (
            <MotionStaggerItem
              key={model.name}
              as="article"
              className="group fb-interactive-surface relative flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <header>
                <h3 className="font-montserrat text-2xl font-semibold text-white">
                  {model.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-wider text-white/50">
                  {model.duration}
                </p>
              </header>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {model.bestFor}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/75">
                {model.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 inline-block size-1 shrink-0 rounded-full bg-white/40"
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        <MotionFadeIn delay={0.12} className="mt-12">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-white/60">
              Not sure which fits? Most teams start with a Sprint and graduate.
            </p>
            <Link
              href={ctaHref || fallbackHref}
              target={ctaHref ? "_blank" : undefined}
              rel={ctaHref ? "noopener noreferrer" : undefined}
              className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#060618] transition duration-300 ease-fb-ease-out hover:bg-white/90 hover:-translate-y-0.5"
            >
              {ctaLabel}
            </Link>
          </div>
        </MotionFadeIn>
      </Container>
    </Section>
  );
}
