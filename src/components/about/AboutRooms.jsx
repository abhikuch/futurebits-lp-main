"use client";

import Link from "next/link";

import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import { ABOUT_ROOMS } from "@/content/about";
import { getAboutRoomVisual } from "@/components/about/about-theme";
import { assertNever } from "@/components/about/assert-never";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

/**
 * @param {"lead" | "offset" | "wide"} layout
 */
function roomOuterClass(layout) {
  switch (layout) {
    case "lead":
      return "max-w-3xl";
    case "offset":
      return "ml-auto max-w-2xl";
    case "wide":
      return "max-w-4xl";
    default:
      return assertNever(layout);
  }
}

function RoomChapter({ room }) {
  const visual = getAboutRoomVisual(room.id);
  const { theme, glowClasses, layout } = visual;

  return (
    <article
      id={`room-${room.id}`}
      className="relative overflow-hidden rounded-[28px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {glowClasses.map((className) => (
          <div key={className} className={className} />
        ))}
        {layout === "wide" ? (
          <div className="absolute left-1/2 top-0 h-48 w-80 -translate-x-1/2 rounded-full bg-white/[0.08] blur-[90px]" />
        ) : null}
      </div>

      <div className={`${theme.ctaPanelClass} relative ${roomOuterClass(layout)}`}>
        <p className={theme.kickerClass}>{room.kicker}</p>
        <div className={theme.dividerClass} />
        <h3 className="mt-6 fb-h2 max-w-xl">{room.title}</h3>
        <p className={`${theme.bodyClass} !mt-4 text-base`}>{room.body}</p>
        <ul className="mt-6 space-y-3">
          {room.points.map((point) => (
            <li
              key={point}
              className={`${theme.serviceCardClass} !p-4 text-sm leading-relaxed text-white/80`}
            >
              {point}
            </li>
          ))}
        </ul>
        <Link href={room.href} className={theme.ctaButtonClass}>
          {room.cta} →
        </Link>
      </div>
    </article>
  );
}

export default function AboutRooms() {
  return (
    <Section id="rooms" className="scroll-mt-28 py-16 sm:py-24">
      <Container className="max-w-5xl">
        <MotionFadeIn className="max-w-2xl">
          <p className="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">
            Three rooms, one studio
          </p>
          <h2 className="fb-h2 mt-4">How AI, markets, and design live here</h2>
          <p className="mt-4 text-pretty text-white/60">
            They share a studio. They do not share a palette, a process, or a
            mashup pitch. Each room has its own bar. You enter the one that
            matches the problem.
          </p>
        </MotionFadeIn>

        <MotionStagger className="mt-14 space-y-10 sm:space-y-14">
          {ABOUT_ROOMS.map((room) => (
            <MotionStaggerItem key={room.id}>
              <RoomChapter room={room} />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Container>
    </Section>
  );
}
