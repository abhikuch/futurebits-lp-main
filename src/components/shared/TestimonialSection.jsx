"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";
import { MOTION, MOTION_VARIANTS } from "@/lib/motion-tokens";
import { TESTIMONIALS } from "./testimonialsData";

const THEME = {
  ai: {
    kickerClass: "fb-kicker text-[#01B0EA]",
    cardClass:
      "border-[#01B0EA]/30 bg-gradient-to-b from-[#01B0EA]/10 to-[#060618]/80",
    glowClass: "from-[#01B0EA]/30 to-[#2E2688]/20",
  },
  markets: {
    kickerClass: "fb-kicker text-[#7BC3D8]",
    cardClass:
      "border-white/20 bg-gradient-to-b from-white/[0.08] to-[#060618]/85",
    glowClass: "from-[#267088]/30 to-white/10",
  },
  design: {
    kickerClass: "fb-kicker text-white/85",
    cardClass:
      "border-white/25 bg-gradient-to-b from-white/[0.12] to-[#060618]/85",
    glowClass: "from-white/20 to-[#01B0EA]/15",
  },
  home: {
    kickerClass: "fb-kicker text-white/70",
    cardClass:
      "border-white/15 bg-gradient-to-b from-white/[0.07] to-[#060618]/88",
    glowClass: "from-white/12 to-[#15203a]/30",
  },
};

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

function StarRow({ count }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, index) => (
        <Image key={index} src={star} alt="" className="h-3 w-3 lg:h-4 lg:w-4" />
      ))}
    </div>
  );
}

function TestimonialMeta({ item }) {
  return (
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
  );
}

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

function BentoCard({
  item,
  themeClass,
  className,
  variant = "compact",
  animationIndex = 0,
}) {
  const isHero = variant === "hero";
  const isSupport = variant === "support";
  const contentClampClass = isHero
    ? "line-clamp-5"
    : isSupport
      ? "line-clamp-4"
      : "line-clamp-3";

  const shellClass = isHero
    ? "min-h-[320px] sm:min-h-[340px] p-6"
    : isSupport
      ? "min-h-[260px] sm:min-h-[280px] p-5"
      : "min-h-[220px] sm:min-h-[240px] p-5";

  const copyClass = isHero
    ? "text-[15px] sm:text-base leading-7 sm:leading-8"
    : isSupport
      ? "text-[14px] sm:text-[15px] leading-6 sm:leading-7"
      : "text-[14px] leading-6";

  return (
    <motion.article
      variants={CARD_ANIMATION}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={animationIndex}
      whileHover={{ y: -4 }}
      className={`flex h-full flex-col justify-between rounded-[24px] border ${shellClass} ${themeClass} ${className}`}
    >
      <p className={`${copyClass} text-white/85 ${contentClampClass}`}>
        {item.content}
      </p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <StarRow count={item.rating} />
          <TestimonialMeta item={item} />
        </div>
        <Image src={quote} alt="" className="h-8 w-8 opacity-55" />
      </div>
    </motion.article>
  );
}

function resolveTestimonialTheme(theme) {
  switch (theme) {
    case "ai":
    case "markets":
    case "design":
    case "home":
      return THEME[theme];
    default: {
      const unhandled = theme;
      throw new Error(`Unhandled testimonial theme: ${unhandled}`);
    }
  }
}

export default function TestimonialSection({ theme = "ai", cta }) {
  const currentTheme = resolveTestimonialTheme(theme);
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
        className={`pointer-events-none absolute left-1/2 top-20 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br blur-[110px] ${currentTheme.glowClass}`}
      />

      <div className="relative z-10 fb-shell">
        <div className="mx-auto w-full max-w-[1120px]">
          <p className={`text-center ${currentTheme.kickerClass}`}>Testimonials</p>
          <h2 className="fb-h2 mt-3 text-center">What people say about us</h2>

          {hero ? (
            <div className="mt-10">
              <BentoCard
                item={hero}
                themeClass={currentTheme.cardClass}
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
                  themeClass={currentTheme.cardClass}
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
                  themeClass={currentTheme.cardClass}
                  className="md:col-span-3"
                  variant="compact"
                  animationIndex={index + 4}
                />
              ))}
            </div>
          ) : null}

          {cta ? <div className="mt-8 flex justify-center">{cta}</div> : null}
        </div>
      </div>
    </section>
  );
}

