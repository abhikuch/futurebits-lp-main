"use client";

import React from "react";
import LogoImg from "@/assets/design/futurebits_logo.webp";
import Image from "next/image";
import Particles from "../ui/particles";
import MarketingButton from "@/components/ui/marketing-button";
import stars from "@/assets/landing-page-AI/stars.webp";
import Link from "next/link";
import { LampIntro } from "./LampIntro";

const IntroSection = () => {
  return (
    <div className="overflow-hidden flex flex-col justify-center  sm:px-4 relative  h-[500px] sm:h-[590px] lg:h-[650px]  ">
    <div className="absolute inset-0 w-full h-full">
        <LampIntro className="w-full h-full" />
      </div>
      <div className="">
        <div className="absolute left-0 top-0 !z-10 w-full  max-h-[40%] overflow-hidden">
          <Particles
            quantity={12}
            ease={200}
            size={0.2}
            className="!z-10"
          />
        </div>
        <div className="max-w-[1250px] mx-auto flex justify-center items-center w-full z-20 ">
          <div className="flex flex-col items-center">
            <Image
              src={LogoImg}
              alt="Futurebits Logo"
              className="object-contain max-w-[220px] max-h-[84px] sm:max-w-[320px] sm:max-h-[80px] lg:max-w-[420px] lg:max-h-[114px] "
            />
          </div>
        </div>

        <div>
          <p className="hidden sm:block  mt-16 max-w-[750px] mx-auto font-montserrat font-bold text-[24px] sm:text-[38px] sm:leading-[52px] lg:leading-[60px] text-center text-white mb-[32px] sm:mb-[35px]">
            Design that moves signup, activation, and revenue.
            <span className="inline-block">
              <Image
                src={stars}
                className="w-[40px] h-[40px] rotate-[180deg]"
                alt="star"
              />
            </span>
          </p>
          <p className="mt-10 sm:hidden max-w-[320px] mx-auto font-montserrat font-bold text-[20px] leading-[34px] text-center text-white mb-[32px]">
            Design that moves signup, activation, and revenue.
            <Image
              src={stars}
              className="w-[28px] h-[28px] rotate-[180deg] ml-2 inline-block"
              alt="star"
            />
          </p>
        </div>
      </div>
      <div className="z-20  w-full flex justify-center items-center ">
        <Link
          href="https://cal.com/futurebits/design?duration=30"
          target="_blank"
        >
          <MarketingButton tone="design" title="Book a call" />
        </Link>
      </div>
    </div>
  );
};

export default IntroSection;
