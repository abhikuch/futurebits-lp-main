import Link from "next/link";

import { MotionFadeIn } from "@/components/shared/MotionReveal";
import { HOME_CAL, HOME_CLOSE, HOME_FIT } from "@/content/home";

function FitColumn({ data, marker }) {
  return <div className="fb-fit-column"><h3><span aria-hidden="true">{marker}</span>{data.title}</h3><ul>{data.items.map((item) => <li key={item}>{item}</li>)}</ul></div>;
}

export default function HomeClose() {
  return (
    <>
      <section className="fb-home-neutral fb-fit">
        <div className="fb-editorial-shell">
          <MotionFadeIn>
            <p className="fb-fit-kicker">Before we start</p>
            <div className="fb-fit-grid"><FitColumn data={HOME_FIT.fit} marker="+" /><FitColumn data={HOME_FIT.notFit} marker="−" /></div>
          </MotionFadeIn>
        </div>
      </section>
      <section className="fb-home-close">
        <MotionFadeIn className="fb-editorial-shell">
          <p>{HOME_CLOSE.kicker}</p><h2>{HOME_CLOSE.title}</h2>
          <div className="fb-home-close-foot">
            <div><p>{HOME_CLOSE.lede}</p><small>{HOME_CLOSE.phoneNote}</small></div>
            <Link href={HOME_CAL.close} target="_blank" rel="noopener noreferrer" data-home-cta="close">Book a call<span aria-hidden="true">↗</span></Link>
          </div>
        </MotionFadeIn>
      </section>
    </>
  );
}
