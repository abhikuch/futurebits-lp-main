"use client";

import Image from "next/image";

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

const BENTO_SPANS = [
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
  "md:col-span-3",
];

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

function BentoCard({
  item,
  themeClass,
  className = "",
  featured = false,
  contentClampClass = "line-clamp-4",
}) {
  return (
    <article
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
    </article>
  );
}

export default function TestimonialSection({ theme = "ai", cta }) {
  const currentTheme = THEME[theme] ?? THEME.ai;
  const [featured, ...rest] = TESTIMONIALS;

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

          {featured ? (
            <div className="mt-10">
              <BentoCard
                item={featured}
                themeClass={currentTheme.cardClass}
                featured
                contentClampClass="line-clamp-4"
              />
            </div>
          ) : null}

          <div className="mt-4 grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-12">
            {rest.map((item, index) => (
              <BentoCard
                key={item.id}
                item={item}
                themeClass={currentTheme.cardClass}
                className={BENTO_SPANS[index % BENTO_SPANS.length]}
                contentClampClass="line-clamp-4"
              />
            ))}
          </div>

          {cta ? <div className="mt-8 flex justify-center">{cta}</div> : null}
        </div>
      </div>
    </section>
  );
}

