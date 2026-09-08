import Link from "next/link";

import { MotionFadeIn, MotionStagger, MotionStaggerItem } from "@/components/shared/MotionReveal";
import { getHomeTrackVisual } from "@/lib/home-track-theme";

export default function HomeTrackChapter({ track }) {
  const visual = getHomeTrackVisual(track.id);
  const { theme } = visual;
  const isDesign = track.id === "design";

  return (
    <section
      id={`track-${track.id}`}
      data-home-track={track.id}
      className={`${visual.sectionClass} border-t border-white/10`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16 lg:py-40">
        <div className={visual.innerClass}>
          <MotionFadeIn className={visual.copyClass}>
            <p className={visual.kickerClass} style={{ color: visual.kickerColor }}>
              {track.index} / {track.kicker}
            </p>
            <div className={theme.dividerClass} />
            <h2 className={`${theme.titleClass} !mt-6`}>{track.title}</h2>
            <p className={theme.bodyClass}>{track.lede}</p>
            <div
              className={`mt-8 border-y border-white/15 py-5 ${
                isDesign ? "mx-auto max-w-xl text-left" : "max-w-xl"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">
                Usually hired by
              </p>
              <p className="mt-2 font-montserrat text-base font-medium text-white/90">
                {track.buyer}
              </p>
            </div>
            <p className={`mt-7 max-w-xl text-base leading-relaxed text-white/80 ${isDesign ? "mx-auto" : ""}`}>
              {track.point}
            </p>
            <p className={`mt-4 max-w-xl text-sm leading-relaxed text-white/48 ${isDesign ? "mx-auto" : ""}`}>
              {track.wontDo}
            </p>
            <div className={`mt-9 flex flex-col gap-3 sm:flex-row ${isDesign ? "justify-center" : ""}`}>
              <Link href={track.href} className="fb-cta-secondary h-12 px-6 text-sm">
                {track.enterLabel}
              </Link>
              <Link
                href={track.calHref}
                target="_blank"
                rel="noopener noreferrer"
                data-home-cta={track.id}
                className={theme.ctaButtonClass}
              >
                Book a call ↗
              </Link>
            </div>
          </MotionFadeIn>

          <MotionFadeIn delay={0.08} className={visual.asideClass}>
            <p className="text-xs uppercase tracking-[0.22em] text-white/40">
              First useful milestone
            </p>
            <p className="mt-4 font-montserrat text-xl font-semibold leading-snug text-white sm:text-2xl">
              {track.milestone}
            </p>
            <p className="mt-9 text-xs uppercase tracking-[0.22em] text-white/40">
              Shipped artifacts
            </p>
            <MotionStagger as="ul" className="mt-4 border-t border-white/15">
              {track.artifacts.map((artifact, index) => (
                <MotionStaggerItem
                  key={artifact}
                  as="li"
                  className="grid grid-cols-[2rem_1fr] border-b border-white/15 py-4"
                >
                  <span className="font-montserrat text-xs tabular-nums text-white/30">
                    0{index + 1}
                  </span>
                  <span className="text-sm text-white/78">{artifact}</span>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}
