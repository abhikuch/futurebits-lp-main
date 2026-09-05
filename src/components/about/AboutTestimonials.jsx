"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";
import { TESTIMONIALS } from "@/components/shared/testimonialsData";
import { assertNever } from "@/components/about/assert-never";
import { MOTION, MOTION_VARIANTS } from "@/lib/motion-tokens";

const IMPACT_RULES = [
  { pattern: /(founder|co-founder|ceo)/i, score: 5 },
  { pattern: /(professor|post-doc|research)/i, score: 4 },
  { pattern: /(portfolio manager|director|chairman|head)/i, score: 3 },
  { pattern: /(author|artist)/i, score: 2 },
];

const CARD_ANIMATION = {
  hidden: MOTION_VARIANTS.staggerItem.hidden,
  show: (index) => ({
    ...MOTION_VARIANTS.staggerItem.show,
    transition: {
      duration: MOTION.duration,
      delay: Math.min(index * MOTION.stagger, 0.26),
      ease: MOTION.ease,
    },
  }),
};

const NEUTRAL_CARD =
  "border-white/12 bg-gradient-to-b from-white/[0.07] to-[#060618]/80";

function getImpactScore(item) {
  let score = Number(item.rating || 0);
  for (const rule of IMPACT_RULES) {
    if (rule.pattern.test(item.position || "")) {
      score += rule.score;
    }
  }
  if ((item.content || "").length > 180) score += 1;
  return score;
}

function sequenceTestimonials(items) {
  return [...items]
    .map((item) => ({
      ...item,
      impact: getImpactScore(item),
      length: (item.content || "").length,
    }))
    .sort((a, b) => {
      if (b.impact !== a.impact) return b.impact - a.impact;
      return Math.abs(185 - a.length) - Math.abs(185 - b.length);
    });
}

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, index) => (
        <Image key={index} src={star} alt="" className="h-3 w-3 lg:h-4 lg:w-4" />
      ))}
    </div>
  );
}

/**
 * @param {"hero" | "support" | "compact"} variant
 */
function resolveCardChrome(variant) {
  switch (variant) {
    case "hero":
      return {
        shellClass: "min-h-[320px] sm:min-h-[340px] p-6",
        copyClass: "text-[15px] sm:text-base leading-7 sm:leading-8",
        clampClass: "line-clamp-5",
      };
    case "support":
      return {
        shellClass: "min-h-[260px] sm:min-h-[280px] p-5",
        copyClass: "text-[14px] sm:text-[15px] leading-6 sm:leading-7",
        clampClass: "line-clamp-4",
      };
    case "compact":
      return {
        shellClass: "min-h-[220px] sm:min-h-[240px] p-5",
        copyClass: "text-[14px] leading-6",
        clampClass: "line-clamp-3",
      };
    default:
      return assertNever(variant);
  }
}

function BentoCard({ item, className, variant = "compact", animationIndex = 0 }) {
  const chrome = resolveCardChrome(variant);

  return (
    <motion.article
      variants={CARD_ANIMATION}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={animationIndex}
      whileHover={{ y: -4 }}
      className={`flex h-full flex-col justify-between rounded-[24px] border ${chrome.shellClass} ${NEUTRAL_CARD} ${className}`}
    >
      <p className={`${chrome.copyClass} text-white/85 ${chrome.clampClass}`}>
        {item.content}
      </p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <StarRow count={item.rating} />
          <div className="mt-3 flex items-center gap-3">
            <Image
              src={item.avatar}
              alt={item.author}
              width={46}
              height={46}
              className="h-[46px] w-[46px] rounded-full object-cover"
            />
            <div>
              <p className="font-montserrat text-sm font-semibold text-white">
                {item.author}
              </p>
              <p className="line-clamp-1 text-xs text-white/60">{item.position}</p>
            </div>
          </div>
        </div>
        <Image src={quote} alt="" className="h-8 w-8 opacity-55" />
      </div>
    </motion.article>
  );
}

export default function AboutTestimonials() {
  const sequenced = sequenceTestimonials(TESTIMONIALS);
  const hero = sequenced[0];
  const support = sequenced.slice(1, 4);
  const compact = sequenced.slice(4);

  return (
    <section
      id="testimonials"
      className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-[110px]"
      />

      <div className="relative z-10 fb-shell">
        <div className="mx-auto w-full max-w-[1120px]">
          <p className="text-center fb-kicker">Proof, in their words</p>
          <h2 className="fb-h2 mt-3 text-center">People we have shipped with</h2>

          {hero ? (
            <div className="mt-10">
              <BentoCard
                item={hero}
                className="w-full"
                variant="hero"
                animationIndex={0}
              />
            </div>
          ) : null}

          {support.length ? (
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-fr">
              {support.map((item, index) => (
                <BentoCard
                  key={item.id}
                  item={item}
                  className="md:col-span-4"
                  variant="support"
                  animationIndex={index + 1}
                />
              ))}
            </div>
          ) : null}

          {compact.length ? (
            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-12 md:auto-rows-fr">
              {compact.map((item, index) => (
                <BentoCard
                  key={item.id}
                  item={item}
                  className="md:col-span-3"
                  variant="compact"
                  animationIndex={index + 4}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
