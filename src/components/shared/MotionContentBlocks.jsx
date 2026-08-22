"use client";

import { MotionStagger, MotionStaggerItem } from "./MotionReveal";

export function MotionCardList({ items, className = "mt-10 space-y-5" }) {
  return (
    <MotionStagger className={className}>
      {items.map((item) => (
        <MotionStaggerItem
          key={item.title}
          className="fb-interactive-surface fb-panel p-5"
        >
          <div className="font-montserrat text-base font-semibold">
            {item.title}
          </div>
          <div className="mt-1 text-sm text-white/65">{item.body}</div>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}

export function MotionBeliefGrid({
  beliefs,
  className = "mt-12 grid gap-5 sm:grid-cols-2",
}) {
  return (
    <MotionStagger className={className}>
      {beliefs.map((belief) => (
        <MotionStaggerItem
          key={belief.title}
          className="fb-interactive-surface fb-panel p-6"
        >
          <h2 className="font-montserrat text-lg font-semibold">{belief.title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {belief.body}
          </p>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}

export function MotionStatGrid({
  stats,
  className = "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
}) {
  return (
    <MotionStagger className={className}>
      {stats.map((stat) => (
        <MotionStaggerItem
          key={stat.label}
          className="fb-interactive-surface rounded-xl border border-white/10 bg-white/[0.03] p-5"
        >
          <p className="text-xs uppercase tracking-wide text-white/50">
            {stat.label}
          </p>
          <p className="mt-2 font-montserrat text-2xl font-semibold text-white">
            {stat.value}
          </p>
        </MotionStaggerItem>
      ))}
    </MotionStagger>
  );
}
