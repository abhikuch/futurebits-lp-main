"use client";

import Link from "next/link";

import HomeAtmosphere from "@/components/home/HomeAtmosphere";
import MarketingButton from "@/components/ui/marketing-button";
import { HOME_CAL, HOME_HERO } from "@/content/home";

export default function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#060618] text-white">
      <HomeAtmosphere />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 pb-16 pt-32 sm:px-10 sm:pt-36 lg:px-16 lg:pb-20">
        <p className="fb-kicker fb-home-hero-kicker">{HOME_HERO.kicker}</p>
        <h1 className="fb-hero-title fb-home-hero-title mt-7 max-w-4xl text-left">
          {HOME_HERO.title}
        </h1>
        <p className="fb-home-hero-copy mt-7 max-w-2xl text-pretty font-poppins text-lg leading-relaxed text-white/70 sm:text-xl">
          {HOME_HERO.lede}
        </p>

        <div className="fb-home-hero-cta mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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

      <nav
        aria-label="Track index"
        className="fb-home-hero-index relative z-10 border-t border-white/10"
      >
        <ol className="mx-auto grid w-full max-w-[1200px] divide-y divide-white/10 px-6 sm:px-10 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-16">
          {HOME_HERO.index.map((item) => (
            <li key={item.n}>
              <Link
                href={item.href}
                className="group flex items-start gap-4 py-6 transition hover:bg-white/[0.03] lg:px-6 lg:first:pl-0 lg:last:pr-0"
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
