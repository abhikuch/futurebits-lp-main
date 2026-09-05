"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import MarketingButton from "@/components/ui/marketing-button";
import { getHomeTrackVisual } from "@/lib/home-track-theme";
import { getServiceBySlugs } from "@/content/services";
import LeftDecoration from "@/assets/landing-page-AI/LeftRectangle.svg";
import RightDecoration from "@/assets/landing-page-AI/RightRectangle.svg";
import DesignLight from "@/assets/design/light.webp";

const AI_BOTTOM_RAIL =
  "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)";

const MARKETS_TOP_RAIL =
  "linear-gradient(90deg, #080808 10%, #267088 48%, #7BC3D8 52%, #267088 56%, #080808 90%)";

function TrackDecor({ id }) {
  switch (id) {
    case "ai":
      return (
        <>
          <div className="pointer-events-none absolute -left-28 top-24 h-[360px] w-[360px] rounded-full bg-[#2E2688]/35 blur-[120px]" />
          <div className="pointer-events-none absolute -right-24 top-40 h-[320px] w-[320px] rounded-full bg-[#01B0EA]/25 blur-[120px]" />
          <div className="pointer-events-none absolute left-0 top-0 z-0 hidden h-full xl:flex">
            <Image
              src={LeftDecoration}
              alt=""
              className="h-full w-auto"
              width={100}
              height={500}
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
          <div className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full xl:flex">
            <Image
              src={RightDecoration}
              alt=""
              className="h-full w-auto"
              width={100}
              height={500}
              style={{ objectFit: "cover", objectPosition: "right" }}
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 z-10 h-1"
            style={{ background: AI_BOTTOM_RAIL }}
          />
        </>
      );
    case "markets":
      return (
        <>
          <div className="pointer-events-none absolute -left-24 top-28 h-[360px] w-[360px] rounded-full bg-[#267088]/30 blur-[120px]" />
          <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[280px] w-[480px] rounded-full bg-[#7BC3D8]/10 blur-[110px]" />
          <div
            className="absolute left-0 right-0 top-0 z-10 h-px"
            style={{ background: MARKETS_TOP_RAIL }}
          />
        </>
      );
    case "design":
      return (
        <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[340px] max-w-[1000px]">
          <Image
            src={DesignLight}
            alt=""
            width={1000}
            height={1000}
            className="w-full opacity-80"
          />
        </div>
      );
    default: {
      const unhandled = id;
      throw new Error(`Unhandled home track decor: ${unhandled}`);
    }
  }
}

function TrackServices({ track, cardClass }) {
  const links = track.services
    .map((item) => {
      const service = getServiceBySlugs(item.categorySlug, item.serviceSlug);
      if (!service) return null;
      return { href: service.path, label: service.title };
    })
    .filter(Boolean);

  if (links.length === 0) return null;

  return (
    <MotionStagger className="mt-6 space-y-2">
      {links.map((link) => (
        <MotionStaggerItem key={link.href}>
          <Link href={link.href} className={`${cardClass} block px-4 py-3`}>
            <span className="text-sm text-white/85">{link.label}</span>
          </Link>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}

export default function HomeTrackRoom({ track }) {
  const visual = getHomeTrackVisual(track.id);
  const { theme } = visual;
  const isDesign = track.id === "design";

  return (
    <section
      id={`track-${track.id}`}
      data-home-track={track.id}
      className={visual.sectionClass}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <TrackDecor id={track.id} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className={visual.innerClass}>
          <MotionFadeIn className={visual.copyClass}>
            <p className={theme.kickerClass}>
              {track.index} / {track.kicker}
            </p>
            <div className={theme.dividerClass} />
            <h2 className={`${theme.titleClass} !mt-6`}>{track.title}</h2>
            <p className={theme.bodyClass}>{track.lede}</p>
            <p
              className={`mt-6 max-w-xl text-base leading-relaxed text-white/80 ${
                isDesign ? "mx-auto" : ""
              }`}
            >
              {track.point}
            </p>
            <p
              className={`mt-3 max-w-xl text-sm leading-relaxed text-white/55 ${
                isDesign ? "mx-auto" : ""
              }`}
            >
              {track.wontDo}
            </p>
            <div
              className={`mt-10 flex flex-col gap-3 sm:flex-row sm:items-center ${
                isDesign ? "justify-center" : ""
              }`}
            >
              {isDesign ? (
                <Link
                  href={track.calHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-home-cta={track.id}
                  className={`${theme.ctaButtonClass} !mt-0 h-[55px] px-7 text-base sm:text-lg`}
                >
                  Book a call
                </Link>
              ) : (
                <Link
                  href={track.calHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-home-cta={track.id}
                >
                  <MarketingButton
                    tone={visual.buttonTone}
                    title="Book a call"
                  />
                </Link>
              )}
              <Link
                href={track.href}
                className="fb-cta-secondary h-[55px] px-7 text-base sm:text-lg"
              >
                {track.enterLabel}
              </Link>
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.08} className={visual.asideClass}>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              In this room
            </p>
            <MotionStagger className="mt-4 space-y-3">
              {track.signals.map((signal) => (
                <MotionStaggerItem
                  key={signal.label}
                  className={`${theme.serviceCardClass} !p-5`}
                >
                  <p className="text-xs uppercase tracking-wide text-white/50">
                    {signal.label}
                  </p>
                  <p className="mt-1 font-montserrat text-lg font-semibold text-white">
                    {signal.value}
                  </p>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-white/40">
              A few doors
            </p>
            <TrackServices track={track} cardClass={theme.serviceCardClass} />
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}
