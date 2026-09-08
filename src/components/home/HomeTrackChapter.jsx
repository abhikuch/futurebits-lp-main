import Link from "next/link";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

const TRACK_LABELS = {
  ai: "Automation / retrieval / agents",
  markets: "Research / execution / risk",
  design: "Product / interface / frontend",
};

function getTrackLabel(id) {
  const label = TRACK_LABELS[id];
  if (!label) throw new Error(`Unhandled home track: ${id}`);
  return label;
}

export default function HomeTrackChapter({ track }) {
  return (
    <article id={`practice-${track.id}`} data-home-track={track.id} className={`fb-practice fb-practice-${track.id}`}>
      <div className="fb-editorial-shell">
        <header className="fb-practice-header"><p>{track.index}</p><p>{track.kicker}</p><p>{getTrackLabel(track.id)}</p></header>
        <MotionFadeIn className="fb-practice-lead"><h2>{track.title}</h2><p>{track.lede}</p></MotionFadeIn>
        <MotionStagger className="fb-practice-body">
          <MotionStaggerItem className="fb-practice-problem">
            <p className="fb-practice-label">What we usually find</p><p>{track.painfulState}</p><p className="fb-practice-boundary">{track.scopeNote}</p>
          </MotionStaggerItem>
          <MotionStaggerItem className="fb-practice-artifacts">
            <p className="fb-practice-label">What reaches your repo</p>
            <ol>{track.artifacts.map((artifact, index) => <li key={artifact}><span>{String(index + 1).padStart(2, "0")}</span>{artifact}</li>)}</ol>
          </MotionStaggerItem>
          <MotionStaggerItem className="fb-practice-gate">
            <p className="fb-practice-label">First release</p><strong>{track.milestone}</strong>
            <div className="fb-practice-actions">
              <Link href={track.href}>{track.enterLabel}<span aria-hidden="true">→</span></Link>
            </div>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </article>
  );
}
