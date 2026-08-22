"use client";

import Link from "next/link";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import Heading from "@/components/ui/heading";

export function ServiceCategoryPopular({ services, shortTitle }) {
  if (!services.length) return null;

  return (
    <MotionFadeIn>
      <Heading as="h2" className="fb-h3">
        Popular {shortTitle.toLowerCase()} services
      </Heading>
      <div className="mt-6 flex flex-wrap gap-2">
        {services.map((serviceItem) => (
          <Link
            key={serviceItem.slug}
            href={serviceItem.path}
            className="fb-interactive-surface rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            {serviceItem.title}
          </Link>
        ))}
      </div>
    </MotionFadeIn>
  );
}

export function ServiceCategoryGrid({ services, theme }) {
  return (
    <MotionFadeIn>
      <Heading as="h2" className="fb-h2">
        Services in this track
      </Heading>
      <MotionStagger className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((serviceItem) => (
          <MotionStaggerItem key={serviceItem.slug} className="h-full">
            <Link
              href={serviceItem.path}
              className={`${theme.serviceCardClass} fb-interactive-surface flex h-full flex-col`}
            >
              <h3 className="fb-h3">{serviceItem.title}</h3>
              <p className="mt-3 text-sm text-white/70">
                {serviceItem.shortDescription}
              </p>
            </Link>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </MotionFadeIn>
  );
}

export function ServiceDetailRelated({ related }) {
  if (!related.length) return null;

  return (
    <MotionFadeIn>
      <Heading as="h2" className="fb-h3">
        Related services
      </Heading>
      <MotionStagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <MotionStaggerItem key={item.slug} className="h-full">
            <Link
              href={item.path}
              className="fb-interactive-surface block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
            >
              <h3 className="fb-h3 text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.shortDescription}</p>
            </Link>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </MotionFadeIn>
  );
}
