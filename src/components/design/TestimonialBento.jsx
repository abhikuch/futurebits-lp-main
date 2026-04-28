"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";
import { TESTIMONIALS } from "@/components/shared/testimonialsData";

function StarRow({ count = 5 }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: count }).map((_, index) => (
        <Image key={index} src={star} alt="" className="h-3.5 w-3.5" />
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

function FeaturedCard({ item }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-[#10253A]/95 via-[#091530]/95 to-[#070C24]/95 p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(1,176,234,0.2),transparent_52%)]" />
      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-[1.35fr_0.65fr] md:items-end">
        <div>
          <p className="line-clamp-4 text-[15px] leading-7 text-white/90 sm:text-base sm:leading-8">
            "{item.content}"
          </p>
          <div className="mt-5">
            <StarRow count={item.rating} />
            <TestimonialMeta item={item} />
          </div>
        </div>

        <div className="hidden h-full items-end justify-end md:flex">
          <Image src={quote} alt="" className="h-12 w-12 opacity-65" />
        </div>
      </div>
    </motion.article>
  );
}

function SmallCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 * index }}
      whileHover={{ y: -4 }}
      className="group h-full rounded-[22px] border border-white/15 bg-gradient-to-b from-white/[0.07] to-[#060618]/90 p-5"
    >
      <p className="line-clamp-4 text-[14px] leading-6 text-white/85 sm:text-[15px] sm:leading-7">
        "{item.content}"
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

export default function TestimonialBento() {
  const [featured, ...rest] = TESTIMONIALS;
  const spanPattern = [
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-3",
    "md:col-span-3",
    "md:col-span-3",
  ];

  return (
    <section id="testimonials" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#01B0EA]/20 to-white/5 blur-[110px]" />

      <div className="relative z-10 fb-shell">
        <div className="mx-auto max-w-[1120px]">
          <p className="text-center uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-white/90">
            Testimonials
          </p>
          <h2 className="fb-h2 mt-3 text-center">What people say about us</h2>

          {featured ? <div className="mt-10"><FeaturedCard item={featured} /></div> : null}

          <div className="mt-4 grid grid-cols-1 gap-3 md:auto-rows-fr md:grid-cols-12">
            {rest.map((item, index) => (
              <div
                key={item.id}
                className={spanPattern[index % spanPattern.length]}
              >
                <SmallCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

