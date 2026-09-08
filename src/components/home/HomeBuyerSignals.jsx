import Link from "next/link";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import { HOME_SIGNALS } from "@/content/home";

export default function HomeBuyerSignals() {
  return (
    <section
      id="tracks"
      aria-labelledby="home-signals-title"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/10 bg-[#060618] text-white"
    >
      <div className="fb-shell py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <MotionFadeIn className="lg:col-span-8">
            <p className="fb-kicker">{HOME_SIGNALS.kicker}</p>
            <h2 id="home-signals-title" className="fb-h2 mt-6 max-w-3xl">
              {HOME_SIGNALS.title}
            </h2>
          </MotionFadeIn>
          <MotionFadeIn delay={0.06} className="lg:col-span-4">
            <p className="text-base leading-relaxed text-white/60">
              {HOME_SIGNALS.lede}
            </p>
          </MotionFadeIn>
        </div>

        <MotionStagger as="ol" className="mt-14 border-y border-white/10">
          {HOME_SIGNALS.items.map((item, index) => (
            <MotionStaggerItem
              key={item.id}
              as="li"
              className="group border-b border-white/10 last:border-b-0"
            >
              <article
                id={`signal-${item.id}`}
                className="grid scroll-mt-28 gap-4 py-8 sm:py-10 lg:grid-cols-12 lg:items-start"
              >
                <div className="flex items-center gap-4 lg:col-span-3">
                  <span className="font-montserrat text-sm tabular-nums text-white/30">
                    0{index + 1}
                  </span>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/55">
                    {item.label}
                  </p>
                </div>
                <h3 className="font-montserrat text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:col-span-5">
                  {item.signal}
                </h3>
                <div className="lg:col-span-4 lg:pl-6">
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.detail}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex border-b border-white/30 pb-1 text-sm font-medium text-white transition-colors hover:border-white"
                  >
                    {item.routeLabel} <span aria-hidden="true" className="ml-2">↓</span>
                  </Link>
                </div>
              </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
