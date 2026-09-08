import Link from "next/link";

import { MotionFadeIn } from "@/components/shared/MotionReveal";
import MarketingButton from "@/components/ui/marketing-button";
import { HOME_CAL, HOME_CLOSE } from "@/content/home";

export default function HomeClose() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#050511] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-[48rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_68%)]"
      />
      <div className="fb-shell relative z-10 py-24 text-center sm:py-32">
        <MotionFadeIn>
          <p className="fb-kicker">{HOME_CLOSE.kicker}</p>
          <h2 className="fb-h2 mx-auto mt-6 max-w-3xl">{HOME_CLOSE.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/62 sm:text-lg">
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
          <p className="mx-auto mt-6 max-w-xl text-xs leading-relaxed text-white/42">
            {HOME_CLOSE.phoneNote}
          </p>
        </MotionFadeIn>
      </div>
    </section>
  );
}
