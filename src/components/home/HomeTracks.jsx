import HomeTrackChapter from "@/components/home/HomeTrackChapter";
import { HOME_TRACKS } from "@/content/home";

export default function HomeTracks() {
  return (
    <section aria-label="Futurebits practices" className="fb-practices">
      {HOME_TRACKS.map((track) => <HomeTrackChapter key={track.id} track={track} />)}
    </section>
  );
}
