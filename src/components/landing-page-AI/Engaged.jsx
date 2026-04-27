"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import index1 from "@/assets/landing-page-AI/index1.svg"
import index2 from "@/assets/landing-page-AI/index2.svg"
import index3 from "@/assets/landing-page-AI/index3.svg"
import index4 from "@/assets/landing-page-AI/index4.svg"
import index5 from "@/assets/landing-page-AI/index5.svg"
import index6 from "@/assets/landing-page-AI/index6.svg"
import index7 from "@/assets/landing-page-AI/index7.svg"
import index8 from "@/assets/landing-page-AI/index8.svg"
import index9 from "@/assets/landing-page-AI/index9.svg"
import index10 from "@/assets/landing-page-AI/index10.svg"
import index11 from "@/assets/landing-page-AI/index11.svg"
import index12 from "@/assets/landing-page-AI/index12.svg"
import index13 from "@/assets/landing-page-AI/index13.svg"

import LeftDecoration from "@/assets/landing-page-AI/LeftRectangle.svg";
import RightDecoration from "@/assets/landing-page-AI/RightRectangle.svg";

import { motion, useInView } from "framer-motion";


const Engaged = () => {
  // Define logo groups with consistent dimensions
  const logoGroups = [
    // First row
    [
      { src: index1, alt: "Elements of AI" },
      { src: index2, alt: "interdisciplinary-college" },
      { src: index3, alt: "futurice" },
      { src: index4, alt: "tutke" },
    ],
    // Second row
    [
      { src: index5, alt: "PRACTICE SPACE" },
      { src: index6, alt: "Apart" },
      { src: index7, alt: "Swissaisafetycamp" },
      { src: index8, alt: "BlueDot Impact" },
    ],
    // Third row
    [
      { src: index9, alt: "Aalto University" },
      { src: index10, alt: "European Network for AI Safety" },
      { src: index11, alt: "Orion Pharma" },
      { src: index12, alt: "University of Helsinki" },
      { src: index13, alt: "AISC" },
    ],
  ];

  // Flatten all logos into a single array for mobile view
  const allLogos = [
    { src: index1, alt: "Elements of AI" },
    { src: index2, alt: "interdisciplinary-college" },
    { src: index3, alt: "futurice" },
    { src: index4, alt: "tutke" },

    { src: index5, alt: "PARTIAL SPACE" },
    { src: index6, alt: "Apart" },
    { src: index7, alt: "Swissaisafetycamp" },
    { src: index8, alt: "BlueDot Impact" },

    { src: index9, alt: "Aalto University" },
    { src: index10, alt: "European Network for AI Safety" },
    { src: index11, alt: "Orion Pharma" },
    { src: index12, alt: "University of Helsinki" },
    { src: index13, alt: "AISC" },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <div className="relative bg-black py-20 md:py-32">
      {/* Background gradient/glow */}
      <div
        className="absolute bottom-0 left-0 h-[200px] w-[200px] sm:w-[400px] sm:h-[400px] md:w-[529px] md:h-[429px] bg-[#2E2688] opacity-20 blur-[200px] rounded-full z-0"
        style={{ transform: "translate(-30%, 90%)" }}
      ></div>

      {/* Side decorations positioned absolutely but outside the content area */}
      <div className="absolute hidden sm:block h-full left-0 top-0 z-0">
        <Image
          src={LeftDecoration}
          alt="Left decoration"
          className="h-full w-auto"
          width={100}
          height={500}
          style={{ objectFit: "cover", objectPosition: "left" }}
          priority
        />
      </div>

      <div className="absolute hidden sm:block h-full right-0 top-0 z-0">
        <Image
          src={RightDecoration}
          alt="Right decoration"
          className="h-full w-auto"
          width={100}
          height={500}
          style={{ objectFit: "cover", objectPosition: "right" }}
          priority
        />
      </div>

      {/* Content container with proper padding */}
      <div className="max-w-6xl mx-auto px-0 sm:px-0 lg:px-16 relative z-10">
        {/* Heading - centered with more space below */}
        <h2 className="fb-h2 text-center mb-4 max-w-3xl mx-auto sm:mb-6">
          Where our AI thinking comes from
        </h2>
        <p className="font-poppins text-center mb-[28px] max-w-[300px] mx-auto sm:max-w-[640px] text-[14px] sm:text-base lg:max-w-full font-normal text-white/50 leading-relaxed sm:mb-16">
          Logos below represent communities our AI lead actively contributes to
          in research and applied AI safety, not commercial clients.
        </p>

        <div className="flex sm:hidden items-center justify-center flex-wrap gap-x-6 gap-y-0 px-4 h-[250px] w-full ">

          {allLogos.map((logo) => (
            <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-[30px] w-auto"
            />
          ))}

        </div>



        

        {/* Large screen static logo grid (visible on lg screens and up) */}
        <div
          ref={containerRef}
          className="hidden sm:flex sm:flex-col space-y-16 sm:space-y-9 sm:px-16 lg:px-4"
        >
          {/* Map each row of logos */}
          {logoGroups.map((group, groupIndex) => (
            <div
              key={`group-${groupIndex}`}
              className="flex xl:flex-wrap justify-center items-center gap-x-12 lg:gap-x-12 gap-y-10"
            >
              {/* Map each logo in the row */}
              {group.map((logo, logoIndex) => {
                const delay = (groupIndex * group.length + logoIndex) * 0.2; // stagger delay

                return (
                  <motion.div
                    key={`logo-${groupIndex}-${logoIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.4,
                      delay,
                      ease: "easeOut",
                    }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={0}
                      height={45}
                      style={{
                        height: "auto",
                        width: "auto",
                        maxHeight: "45px",
                        filter: "brightness(1)",
                      }}
                      className="object-contain w-auto h-auto"
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engaged;
