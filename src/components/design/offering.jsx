"use client";

import React from "react";

import navbarDiamond from "@/assets/design/navbar.svg";


import Image from "next/image";
import Particles from "../ui/particles";

import { Marquee } from "../ui/marquee";

import BeamButton from "./BeamButton";

import stars from "@/assets/landing-page-AI/stars.webp";
import Link from "next/link";
import { SERVICE_CATEGORIES, getServiceBySlugs } from "@/content/services";
import {
  MotionFadeIn,
} from "@/components/shared/MotionReveal";

const services = [
  {
    category: "Logos",
    subcategories: [
      "Logos",
      "UX Design",
      "App Design",
      "UX Research",
      "Iconography",
    ],
  },
  {
    category: "UI/UX Design",
    subcategories: [
      "UI Design",
      "Web Design",
      "Landing Page",
      "UX Auditing",
      "Dashboard",
    ],
  },
  { category: "Additional", subcategories: ["Wireframing & Prototyping"] },
];

const DESIGN_SERVICE_LINKS = {
  "UX Design": "ui-ux-design",
  "App Design": "mobile-app-ui-design",
  "UI Design": "ui-ux-design",
  "Web Design": "web-app-design",
  "Landing Page": "landing-page-design",
  Dashboard: "dashboard-ui-design",
  "UX Research": "ux-research",
  "UX Auditing": "website-ux-audit",
  Logos: "branding-visual-identity",
  Iconography: "branding-visual-identity",
  "Wireframing & Prototyping": "wireframing",
};

const Card = ({ service, className = "" }) => {
  const serviceSlug = DESIGN_SERVICE_LINKS[service];
  const href = serviceSlug
    ? getServiceBySlugs("design", serviceSlug)?.path || "/services/design"
    : "/services/design";
  return (
    <Link
      href={href}
      className={`
    ${className} 
    font-medium
    px-5
    sm:px-10
    lg:px-6
    xl:px-10
    py-3
    text-[14px]
    sm:text-[20px]
    text-center 
    text-white
    relative
    rounded-2xl
    overflow-hidden font-montserrat
    bg-gradient-to-b 
    from-[rgba(51,51,51,0.6)] 
    to-[rgba(27,27,27,0)]
  `}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          inset: 0,
          borderRadius: "16px", // Same as parent
          padding: "3px", // Border width
          background:
            "linear-gradient(143.63deg, rgba(255, 255, 255, 0.05) 5.04%, rgba(1, 176, 234, 0.2) 23.38%, rgba(46, 38, 136, 0.6) 31.31%, rgba(1, 176, 234, 0.1) 39.25%, rgba(255, 255, 255, 0.05) 57.59%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
      {service}
    </Link>
  );
};

const Offering = () => {
  return (
    <div
      id="design-services"
      className="relative  w-full  lg:px-8 xl:px-0 bg-[#08081E] sm:mb-0 mb-[-60px] mt-[-120px] sm:mt-[-20%] lg:mt-[-5%]"
    >
      
      
      <div
        className="xl:block hidden absolute xl:left-[-20%] top-[-20%] 2xl:left-0 -translate-y-1/2 w-[250px] sm:w-[410px] h-[30px] sm:h-[65px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>
      
      <div className="max-w-[1250px] relative  w-full  mx-auto overflow-hidden">
        <Particles
          quantity={30}
          ease={200}
          refresh
          size={0.7}
          className="!z-40 hidden sm:block absolute top-0 left-0 w-full h-full"
        />
        <Particles
          quantity={10}
          ease={200}
          refresh
          size={0.3}
          className="!z-40 sm:hidden absolute top-0 left-0 w-full h-full"
        />
        <div className="flex flex-col-reverse sm:px-20 lg:px-0 lg:flex-row relative gap-16 sm:gap-16 lg:gap-12 xl:gap-16 w-full justify-center items-center">

          <div className="relative flex w-full">
            <Marquee vertical className="[--duration:20s] w-full h-[500px]">
              <div className="grid  grid-cols-2 w-full gap-x-4 gap-y-3 sm:gap-y-6 px-5 sm:px-0">
                {services[0].subcategories.map((service, index) => {
                  return (
                    <Card className="py-5" key={index} service={service} />
                  );
                })}
                {services[1].subcategories.map((service, index) => {
                  return (
                    <Card className="py-5" key={index} service={service} />
                  );
                })}
                {services[2].subcategories.map((service, index) => {
                  return (
                    <Card
                      key={index}
                      service={service}
                      className="!col-span-2 py-5"
                    />
                  );
                })}
              </div>
            </Marquee>

            <div className="pointer-events-none absolute top-0 w-full h-[100px] bg-gradient-to-b from-[#08081E]"></div>
            <div className="pointer-events-none absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-[#08081E]"></div>
          </div>

          <MotionFadeIn
            className="relative flex w-full flex-col gap-6 px-8 sm:pr-10 lg:px-0 xl:px-8 sm:gap-8 lg:gap-4 xl:gap-8"
          >
            <div className="z-10 relative w-fit text-left">
              <Image
                src={navbarDiamond}
                width={32}
                height={32}
                alt=""
                className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[40px]"
              />

              <div
                className="max-w-[150px] absolute top-1/2 -right-[125px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2 !z-50"
                style={{
                  background:
                    "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
                }}
              ></div>

              <p className="fb-kicker text-[#01B0EA]">Offerings</p>
            </div>
            <p className="z-0 text-white text-[32px] leading-[44px] sm:text-[40px] lg:text-[32px] xl:text-[40px] sm:leading-[60px]  font-bold font-montserrat lg:max-w-[500px] ">
              Design, research, and build in one pod.
              <span className="inline-block">
                <Image src={stars} className="w-[40px] h-[40px]" alt="star" />
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {[
                SERVICE_CATEGORIES.find((c) => c.slug === "design"),
                SERVICE_CATEGORIES.find((c) => c.slug === "build"),
                SERVICE_CATEGORIES.find((c) => c.slug === "startup-tech-partner"),
              ]
                .filter(Boolean)
                .map((category) => (
                  <Link
                    key={category.slug}
                    href={`/services/${category.slug}`}
                    className="rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    {category.title}
                  </Link>
                ))}
            </div>

            <div className="hidden lg:flex h-[100px] w-[100px] bg-[#01B0EA] rounded-full blur-[80px]  absolute top-[70px] left-[120px] z-0" />

            <Link
              href="https://cal.com/futurebits/design?duration=30"
              target="_blank"
            >
              <BeamButton />
            </Link>
          </MotionFadeIn>
        </div>
      </div>
    </div>
  );
};

export default Offering;