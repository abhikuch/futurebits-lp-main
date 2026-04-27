"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import ShimmerButton from "./ShimerButton";
import WavyBackground from "./WavyBackground";
import { ROUTES } from "@/config/site";

const Hero = () => {
  return (
    <section className="relative w-full h-[75vh] sm:h-[600px] lg:h-[600px] xl:h-screen 2xl:h-full bg-[#080808]">
      {/* Background with image and gradient overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute z-10 w-full h-[75vh] sm:h-[600px] lg:h-[600px] xl:h-[800px]">
          <WavyBackground />
        </div>

        {/* Gradient overlay - dark only, no white */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #000000 32.59%, rgba(0, 0, 0, 1),100%",
          }}
        />
      </motion.div>

      {/* Content container */}
      <div className="max-w-[1180px] w-full flex flex-col z-20 mx-auto py-0  md:py-24  px-0 relative">
        {/* Headline */}
        <motion.div
          className="mt-28"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="mb-5 text-center">
            <span className="fb-kicker">
              Trading infrastructure for serious teams
            </span>
          </p>
          <h1 className="fb-hero-title px-4 sm:px-0 text-center">
            Trading systems built to survive the next regime change.
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="px-4 sm:px-0 mt-[20px] sm:mt-[20px] lg:mt-5 xl:max-w-[750px] max-w-[700px] w-full mx-auto text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="fb-hero-copy">
            Backtests with realistic costs. Paper-and-shadow before production.
            Runbooks and kill-switches that a junior can run at 2am. We build the
            boring layer that makes alpha survive.
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex lg:items-center lg:justify-center flex-col sm:flex-row gap-4 sm:gap-8 sm:mt-14 sm:px-0 px-5"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-center w-full gap-4">
            <Link
              href={ROUTES.contact.path}
              className="mt-[70px] sm:mt-[20px] lg:mt-0 w-full sm:w-[220px] fb-cta-secondary text-[16px] sm:text-[18px]"
            >
              Talk to the team
            </Link>
            <Link
              href="https://cal.com/futurebits/markets?duration=30"
              target="_blank"
              className="mt-[70px] sm:mt-[20px] lg:mt-0"
            >
              <ShimmerButton
                size="lg"
                href="/book-call"
                className="text-[18px] sm:text-[20px]"
              >
                Book a 30-min markets call
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
