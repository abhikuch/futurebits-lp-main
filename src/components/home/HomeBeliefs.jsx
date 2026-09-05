"use client";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { HOME_BELIEFS } from "@/content/home";

export default function HomeBeliefs() {
  return (
    <section
      className={`relative overflow-hidden border-t border-white/10 ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-0 h-[280px] w-[280px] rounded-full bg-white/[0.04] blur-[120px]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <MotionFadeIn className="max-w-2xl">
          <p className="fb-kicker">{HOME_BELIEFS.kicker}</p>
          <h2 className="fb-h2 mt-6">{HOME_BELIEFS.title}</h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            {HOME_BELIEFS.lede}
          </p>
        </MotionFadeIn>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <MotionFadeIn
            delay={0.06}
            className="fb-panel lg:col-span-7 p-7 sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              Manifesto
            </p>
            <h3 className="mt-4 font-montserrat text-2xl font-semibold text-white sm:text-3xl">
              {HOME_BELIEFS.manifesto.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              {HOME_BELIEFS.manifesto.body}
            </p>
          </MotionFadeIn>

          <MotionStagger className="grid gap-4 lg:col-span-5">
            {HOME_BELIEFS.items.map((item) => (
              <MotionStaggerItem
                key={item.title}
                className="fb-interactive-surface fb-panel p-6"
              >
                <h3 className="font-montserrat text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.body}
                </p>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
