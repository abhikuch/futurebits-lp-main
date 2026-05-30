"use client"

import React, { useRef } from "react";
import navbarDiamond from "@/assets/design/navbar.svg";
import CardLineSvg from "@/assets/design/lines.svg";
import P1 from "@/assets/design/lightnew.webp";
import P2 from "@/assets/design/bulbnew.webp";
import P3 from "@/assets/design/globnew.webp";
import P4 from "@/assets/design/rocketnew.webp";
import P5 from "@/assets/design/handshakenew.webp";
import P6 from "@/assets/design/transparent.webp";
import Image from "next/image";
import Particles from "../ui/particles";
import { BorderBeamDemo } from "../ui/beam";

import { useInView } from "framer-motion";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";

const services = [
  {
    img: P1,
    title: "Fixed sprints, one outcome",
    description:
      "Two-to-four week sprints, scoped to one shipped artefact. No retainer trap.",
    span: 1,
    type: "NORMAL",
  },
  {
    img: P2,
    title: "Strategy, design, and frontend in one team",
    description:
      "One brief, one team, one repo. The mockup and the merged PR are the same artefact.",
    span: 2,
    type: "GRADIENT",
  },
  {
    img: P3,
    title: "Founders in the loop",
    description:
      "You talk to the people doing the work — not an account manager between you and the team.",
    span: 1,
    type: "NORMAL",
  },
  {
    img: P4,
    title: "Tied to a metric you care about",
    description:
      "Every sprint defines a target — activation, conversion, or retention — and reports against it on demo day.",
    span: 2,
    type: "GRADIENT",
  },
  {
    img: P5,
    title: "Weekly working session",
    description:
      "Live demo each week, daily async, and a short Loom whenever something is worth showing.",
    span: 1,
    type: "GRADIENT",
  },
  {
    img: P6,
    title: "One number, written down",
    description:
      "Fixed-scope pricing on a single page. Changes go through a written change-order — no surprises.",
    span: 1,
    type: "GRADIENT",
  },
];

const Card = ({ service, index }) => {
  return (
    <div
      style={{
        background:
          " linear-gradient(331.79deg, rgba(1, 176, 234, 0.2) -2.38%, rgba(12, 10, 34, 0.2) 47.04%)",
        backdropFilter: "blur(42px)",
      }}
      className={`${
        service.type == "NORMAL" ? "" : ""
      }  px-5  sm:px-10 py-6 overflow-hidden border border-solid border-[#383847]/90   relative ${
        service.span == 2 ? "xl:col-span-3" : "xl:col-span-2"
      } group rounded-3xl h-full cursor-pointer `}
    >
      <Image
        src={CardLineSvg}
        alt=""
        width={1000}
        height={1000}
        className="absolute top-0 left-0 max-w-[230px] w-full"
      />

      <div className="flex justify-center items-center">
        <Image
          src={service.img.src}
          alt=""
          width={1000}
          height={1000}
          className="w-[150px] h-[150px] sm:max-w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[200px]  z-[60] object-contain"
        />
      </div>
      <p className="font-poppins text-[18px] sm:text-[20px] leading-[28px] mt-10  text-white font-medium">
        {service.title}
      </p>
      <p className="font-poppins text-[14px] sm:text-[16px] text-white/50 mt-3">
        {service.description}
      </p>

      <BorderBeamDemo
        size={150}
        delay={0}
        duration={5}
        colorFrom="#01B0EA"
        colorTo="#ffffff"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

const Benefits = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <div className="py-0 sm:py-10 max-w-[1250px]  mx-auto w-full bg-[#08081E]">
      <div className="mx-auto flex w-full max-w-[360px] items-center justify-center gap-3 sm:max-w-[480px]">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/30" />
        <Image
          src={navbarDiamond}
          width={16}
          height={16}
          alt=""
          className="h-3.5 w-3.5 opacity-80"
        />
        <AnimatedShinyText className="uppercase text-sm sm:text-base font-semibold tracking-[0.08em] text-[#01B0EA]">
          Why teams hire us
        </AnimatedShinyText>
        <Image
          src={navbarDiamond}
          width={16}
          height={16}
          alt=""
          className="h-3.5 w-3.5 opacity-80"
        />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/30" />
      </div>
      <h2 className="fb-h2 mt-2 sm:mt-8 text-[30px] sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-[60px] text-center">
        What you get when design and engineering are one pod
      </h2>
      <div className="relative mt-10">
        <Particles
          quantity={10}
          ease={200}
          refresh
          size={0.5}
          className="!z-10 absolute top-0 left-0 w-full h-full"
        />
        <div
          ref={cardRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-7 gap-x-4 gap-y-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                service.span == 2 ? "xl:col-span-3" : "xl:col-span-2"
              }`}
            >
              <Card service={service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;