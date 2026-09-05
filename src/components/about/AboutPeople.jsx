"use client";

import Image from "next/image";

import AayushImg from "@/assets/landing-page-AI/aayush_kucheria.webp";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { ABOUT_PEOPLE } from "@/content/about";
import { MotionFadeIn } from "@/components/shared/MotionReveal";

export default function AboutPeople() {
  return (
    <Section id="people" className="scroll-mt-28 py-16 sm:py-24">
      <Container className="max-w-5xl">
        <MotionFadeIn className="max-w-2xl">
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
            People, without a chart
          </p>
          <h2 className="fb-h2 mt-4">A named counterpart. Not a roster swap.</h2>
        </MotionFadeIn>

        <MotionFadeIn delay={0.06} className="mt-10">
          <div className="fb-panel grid overflow-hidden md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)]">
            <div className="relative min-h-[280px] bg-white/[0.03] md:min-h-[360px]">
              <Image
                src={AayushImg}
                alt={ABOUT_PEOPLE.name}
                fill
                sizes="(min-width: 768px) 360px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              {ABOUT_PEOPLE.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mt-4 text-sm leading-relaxed text-white/75 first:mt-0 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
              <p className="mt-8 font-montserrat text-lg font-semibold text-white">
                {ABOUT_PEOPLE.name}
              </p>
              <p className="mt-1 text-sm text-white/50">{ABOUT_PEOPLE.role}</p>
            </div>
          </div>
        </MotionFadeIn>

        <MotionFadeIn delay={0.1}>
          <p className="mt-8 max-w-2xl text-pretty text-sm leading-relaxed text-white/60 sm:text-base">
            {ABOUT_PEOPLE.studio}
          </p>
        </MotionFadeIn>
      </Container>
    </Section>
  );
}
