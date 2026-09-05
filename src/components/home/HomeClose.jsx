"use client";

import Link from "next/link";

import { MotionFadeIn } from "@/components/shared/MotionReveal";
import MarketingButton from "@/components/ui/marketing-button";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { HOME_CAL, HOME_CLOSE } from "@/content/home";

export default function HomeClose() {
  return (
    <section
      className={`border-t border-white/10 ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
        <MotionFadeIn className={SERVICE_HUB_THEME.ctaPanelClass}>
          <p className="fb-kicker">{HOME_CLOSE.kicker}</p>
          <h2 className="fb-h2 mx-auto mt-6 max-w-3xl">{HOME_CLOSE.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
            {HOME_CLOSE.lede}
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href={HOME_CAL.close}
              target="_blank"
              rel="noopener noreferrer"
              data-home-cta="close"
            >
              <MarketingButton tone="home" title="Book a call" />
            </Link>
          </div>
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-white/45">
            {HOME_CLOSE.phoneNote}
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}
