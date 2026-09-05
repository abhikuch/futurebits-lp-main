"use client";

import HomeTrackRoom from "@/components/home/HomeTrackRoom";
import { MotionFadeIn } from "@/components/shared/MotionReveal";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { HOME_TRACKS, HOME_TRACKS_INTRO } from "@/content/home";

export default function HomeTracks() {
  return (
    <div id="tracks" className="scroll-mt-28">
      <section
        className={`relative border-t border-white/10 ${SERVICE_HUB_THEME.pageBgClass} text-white`}
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <MotionFadeIn className="max-w-2xl">
            <p className="fb-kicker">{HOME_TRACKS_INTRO.kicker}</p>
            <h2 className="fb-h2 mt-6">{HOME_TRACKS_INTRO.title}</h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
              {HOME_TRACKS_INTRO.lede}
            </p>
          </MotionFadeIn>
        </div>
      </section>

      {HOME_TRACKS.map((track) => (
        <HomeTrackRoom key={track.id} track={track} />
      ))}
    </div>
  );
}
