"use client";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import ShimmerButton from "./ShimerButton";
import WavyBackground from "./WavyBackground";
import { ROUTES } from "@/config/site";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center bg-[#080808]">
      {/* Background with image and gradient overlay */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute z-10 h-full w-full">
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
      <div className="relative z-20 mx-auto flex w-full max-w-[1180px] flex-col px-4 pb-12 pt-28 sm:px-8 sm:pt-32 lg:pt-36">
        {/* Headline */}
        <motion.div
          className="mt-0"
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
          className="mx-auto mt-5 w-full max-w-[750px] px-1 text-center"
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
          className="mt-10 flex flex-col gap-4 px-1 sm:flex-row sm:justify-center sm:gap-6 sm:px-0"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={ROUTES.contact.path}
              className="w-full sm:w-[220px] fb-cta-secondary text-base sm:text-lg"
            >
              Talk to the team
            </Link>
            <Link
              href="https://cal.com/futurebits/markets?duration=30"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <ShimmerButton
                size="lg"
                href="/book-call"
                className="w-full text-base sm:text-lg"
              >
                Book a call
              </ShimmerButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
