import HomeTrackChapter from "@/components/home/HomeTrackChapter";
import { MotionFadeIn } from "@/components/shared/MotionReveal";
import { HOME_TRACKS, HOME_TRACKS_INTRO } from "@/content/home";

export default function HomeTracks() {
  return (
    <section aria-label="Futurebits practices">
      <div className="border-t border-white/10 bg-[#060618] text-white">
        <div className="fb-shell py-20 sm:py-28">
          <MotionFadeIn className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="fb-kicker">{HOME_TRACKS_INTRO.kicker}</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="fb-h2 max-w-3xl">{HOME_TRACKS_INTRO.title}</h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
                {HOME_TRACKS_INTRO.lede}
              </p>
            </div>
          </MotionFadeIn>
        </div>
      </div>
      {HOME_TRACKS.map((track) => (
        <HomeTrackChapter key={track.id} track={track} />
      ))}
    </section>
  );
}
