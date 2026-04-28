"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";
import { TESTIMONIALS } from "./testimonialsData";

const THEME = {
  ai: {
    kickerClass:
      "uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]",
    cardClass:
      "border-[#01B0EA]/30 bg-gradient-to-b from-[#01B0EA]/10 to-[#060618]/80",
    glowClass: "from-[#01B0EA]/30 to-[#2E2688]/20",
  },
  markets: {
    kickerClass:
      "uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white/45",
    cardClass:
      "border-white/20 bg-gradient-to-b from-white/[0.08] to-[#060618]/85",
    glowClass: "from-[#267088]/30 to-white/10",
  },
  design: {
    kickerClass:
      "uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-white/90",
    cardClass:
      "border-white/25 bg-gradient-to-b from-white/[0.12] to-[#060618]/85",
    glowClass: "from-white/20 to-[#01B0EA]/15",
  },
};

const IMPACT_RULES = [
  { pattern: /(founder|co-founder|ceo)/i, score: 5 },
  { pattern: /(professor|post-doc|research)/i, score: 4 },
  { pattern: /(portfolio manager|director|chairman|head)/i, score: 3 },
  { pattern: /(author|artist)/i, score: 2 },
];

const CARD_ANIMATION = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, delay: Math.min(index * 0.05, 0.3), ease: "easeOut" },
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

function getCardSpec(item, index) {
  const length = (item.content || "").length;
  if (index === 0) return { span: "md:col-span-8", clamp: "line-clamp-4", featured: true };
  if (index === 1) return { span: "md:col-span-4", clamp: "line-clamp-4", featured: true };

  if (item.impact >= 9 && length > 190) {
    return { span: "md:col-span-6", clamp: "line-clamp-4", featured: false };
  }
  if (length <= 150) {
    return { span: "md:col-span-3", clamp: "line-clamp-3", featured: false };
  }
  if (length > 230) {
    return { span: "md:col-span-6", clamp: "line-clamp-4", featured: false };
  }
  return { span: "md:col-span-4", clamp: "line-clamp-4", featured: false };
}

function BentoCard({
  item,
  themeClass,
  className = "",
  featured = false,
  contentClampClass = "line-clamp-4",
}) {
  return (
    <motion.article
      variants={CARD_ANIMATION}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={item.animationIndex ?? 0}
      whileHover={{ y: -4 }}
      className={`flex h-full flex-col justify-between rounded-[24px] border ${featured ? "min-h-[290px] sm:min-h-[310px]" : "min-h-[230px] sm:min-h-[250px]"} p-5 ${themeClass} ${className}`}
    >
      <p
        className={`${featured ? "text-[15px] sm:text-base leading-7 sm:leading-8" : "text-[14px] sm:text-[15px] leading-6 sm:leading-7"} text-white/85 ${contentClampClass}`}
      >
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

export default function TestimonialSection({ theme = "ai", cta }) {
  const currentTheme = THEME[theme] ?? THEME.ai;
  const sequencedTestimonials = [...TESTIMONIALS]
    .map((item) => ({
      ...item,
      impact: getImpactScore(item),
      length: (item.content || "").length,
    }))
    .sort((a, b) => {
      if (b.impact !== a.impact) return b.impact - a.impact;
      const aDistance = Math.abs(190 - a.length);
      const bDistance = Math.abs(190 - b.length);
      return aDistance - bDistance;
    })
    .map((item, index) => ({ ...item, animationIndex: index }));

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

          <div className="mt-10 grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-12">
            {sequencedTestimonials.map((item, index) => {
              const spec = getCardSpec(item, index);
              return (
                <BentoCard
                  key={item.id}
                  item={item}
                  themeClass={currentTheme.cardClass}
                  className={spec.span}
                  featured={spec.featured}
                  contentClampClass={spec.clamp}
                />
              );
            })}
          </div>

          {cta ? <div className="mt-8 flex justify-center">{cta}</div> : null}
        </div>
      </div>
    </section>
  );
}

