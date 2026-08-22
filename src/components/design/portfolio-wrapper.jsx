"use client";

import React from "react";
import { PortfolioCard } from "./portfolio-card";
import navbarDiamond from "@/assets/design/navbar.svg";
import Image from "next/image";
import Particles from "../ui/particles";
const PortfolioWrapper = () => {
  return (
    <section className="relative z-0 py-20 sm:py-20 xl:pt-20 xl:pb-16 bg-[#08081E]">
      <div className="relative w-fit mx-auto text-center">
        <Image
          src={navbarDiamond}
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[40px] sm:-right-[50px]"
        />
        <Image
          src={navbarDiamond}
          width={32}
          height={32}
          alt=""
          className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-[40px] sm:-left-[50px]"
        />
        <div
          className="max-w-[62px] sm:max-w-[150px] absolute top-1/2 -right-[80px] sm:-right-[180px] opacity-20 w-full h-[2px] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
          }}
        ></div>
        <div
          className="max-w-[62px] sm:max-w-[150px] absolute top-1/2 -left-[80px] sm:-left-[180px] opacity-20 w-full h-[2px] -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
          }}
        ></div>
        <p className="fb-kicker text-[#01B0EA]">Our portfolio</p>
      </div>
      
      <div className="relative">
        <div>
        <Particles 
          quantity={15} 
          ease={200} 
          refresh 
          size={0.3} 
          className="absolute max-w-[90vw] inset-0 z-10" 
        />
        </div>
        <div className="mt-0 sm:mt-10 relative z-20 w-full">
          <PortfolioCard />
        </div>
      </div>
    </section>
  );
};

export default PortfolioWrapper;