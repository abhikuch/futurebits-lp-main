import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import { HOME_FIT } from "@/content/home";

function FitList({ items, label, muted = false }) {
  return (
    <div
      className={
        muted
          ? "border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          : ""
      }
    >
      <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
        {label}
      </h3>
      <MotionStagger as="ul" className="mt-6 space-y-0">
        {items.map((item, index) => (
          <MotionStaggerItem
            key={item}
            as="li"
            className="grid grid-cols-[2.25rem_1fr] border-t border-white/10 py-5 first:border-t-0"
          >
            <span className="font-montserrat text-xs tabular-nums text-white/25">
              0{index + 1}
            </span>
            <span
              className={`text-sm leading-relaxed sm:text-base ${
                muted ? "text-white/48" : "text-white/80"
              }`}
            >
              {item}
            </span>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </div>
  );
}

export default function HomeFit() {
  return (
    <section
      aria-labelledby="home-fit-title"
      className="border-t border-white/10 bg-[#060618] text-white"
    >
      <div className="fb-shell py-20 sm:py-28">
        <MotionFadeIn className="max-w-2xl">
          <p className="fb-kicker">{HOME_FIT.kicker}</p>
          <h2 id="home-fit-title" className="fb-h2 mt-6">
            {HOME_FIT.title}
          </h2>
        </MotionFadeIn>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <FitList label={HOME_FIT.forTitle} items={HOME_FIT.forItems} />
          <FitList
            label={HOME_FIT.notForTitle}
            items={HOME_FIT.notForItems}
            muted
          />
        </div>
      </div>
    </section>
  );
}
