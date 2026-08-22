"use client";

import Link from "next/link";

import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";
import Heading from "@/components/ui/heading";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { getCategoryTheme } from "@/lib/page-theme";

export function ServicesHubTracks({ categories }) {
  return (
    <MotionFadeIn>
      <Heading as="h2" className="fb-h2">
        Core service tracks
      </Heading>
      <MotionStagger className="mt-8 grid gap-4 md:grid-cols-2">
        {categories.map((category) => {
          const categoryTheme = getCategoryTheme(category.slug);
          return (
            <MotionStaggerItem key={category.slug}>
              <Link
                href={`/services/${category.slug}`}
                className={`${categoryTheme.serviceCardClass} fb-interactive-surface block p-6`}
              >
                <h3 className="fb-h3">{category.title}</h3>
                <p className="mt-3 text-sm text-white/70">{category.description}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/45">
                  {category.services.length} services
                </p>
              </Link>
            </MotionStaggerItem>
          );
        })}
      </MotionStagger>
    </MotionFadeIn>
  );
}

export function ServicesHubEngagement({ models }) {
  return (
    <MotionFadeIn>
      <Heading as="h2" className="fb-h2">
        Engagement models
      </Heading>
      <MotionStagger className="mt-8 grid gap-4 md:grid-cols-3">
        {models.map((model) => (
          <MotionStaggerItem
            key={model.name}
            className={`${SERVICE_HUB_THEME.hubCardClass} fb-interactive-surface`}
          >
            <h3 className="fb-h3">{model.name}</h3>
            <p className="mt-3 text-sm text-white/70">{model.detail}</p>
          </MotionStaggerItem>
        ))}
      </MotionStagger>
    </MotionFadeIn>
  );
}
