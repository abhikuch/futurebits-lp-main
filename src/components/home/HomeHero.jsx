import Link from "next/link";

import HomeHeroStage from "@/components/home/HomeHeroStage";
import MarketingButton from "@/components/ui/marketing-button";
import { HOME_CAL, HOME_HERO } from "@/content/home";

export default function HomeHero() {
  return (
    <section className="fb-home-hero relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#060618] text-white">
      <HomeHeroStage />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-end px-6 pb-10 pt-[19rem] sm:px-10 sm:pt-[24rem] lg:justify-center lg:px-16 lg:pb-24 lg:pt-32">
        <div className="max-w-[760px]">
          <p className="fb-kicker fb-home-hero-kicker">{HOME_HERO.kicker}</p>
          <h1 className="fb-hero-title fb-home-hero-title mt-5 text-left">
            {HOME_HERO.title}
          </h1>
          <p className="fb-home-hero-copy mt-5 max-w-[650px] text-pretty font-poppins text-[15px] leading-relaxed text-white/68 sm:text-lg">
            {HOME_HERO.lede}
          </p>
          <p className="mt-4 max-w-[580px] border-l border-white/20 pl-4 text-sm leading-relaxed text-white/48">
            {HOME_HERO.audience}
          </p>
          <div className="fb-home-hero-cta mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={HOME_CAL.hero}
              target="_blank"
              rel="noopener noreferrer"
              data-home-cta="hero"
            >
              <MarketingButton tone="home" title={HOME_HERO.primaryCta} />
            </Link>
            <Link
              href="#tracks"
              className="fb-cta-secondary h-[55px] w-full px-7 text-base sm:w-auto sm:text-lg"
            >
              {HOME_HERO.secondaryCta}
            </Link>
          </div>
        </div>
      </div>

      <nav aria-label="Practice index" className="fb-home-hero-index relative z-10">
        <ol className="mx-auto grid w-full max-w-[1200px] divide-y divide-white/10 border-t border-white/10 px-6 sm:px-10 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-16">
          {HOME_HERO.index.map((item) => (
            <li key={item.n}>
              <Link
                href={item.href}
                className="group flex items-start gap-4 py-5 transition-colors hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70 lg:px-6 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="font-montserrat text-sm tabular-nums text-white/35">
                  {item.n}
                </span>
                <span>
                  <span className="block font-montserrat text-base font-semibold text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block max-w-xs text-sm leading-relaxed text-white/55 group-hover:text-white/75">
                    {item.line}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
