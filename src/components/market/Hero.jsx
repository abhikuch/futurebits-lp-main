"use client";
import React from "react";

import Link from "next/link";

import ShimmerButton from "./ShimerButton";
import WavyBackground from "./WavyBackground";
import { ROUTES } from "@/config/site";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center bg-[#080808]">
      <div className="fb-markets-hero-bg absolute inset-0 z-10">
        <div className="absolute z-10 h-full w-full">
          <WavyBackground />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #000000 32.59%, rgba(0, 0, 0, 1),100%",
          }}
        />
      </div>

      <div className="relative z-20 mx-auto flex w-full max-w-[1180px] flex-col px-4 pb-12 pt-28 sm:px-8 sm:pt-32 lg:pt-36">
        <div className="fb-markets-hero-kicker mt-0">
          <p className="mb-5 text-center">
            <span className="fb-kicker">
              Trading infrastructure for serious teams
            </span>
          </p>
          <h1 className="fb-hero-title fb-markets-hero-title px-4 text-center sm:px-0">
            Trading systems built to survive the next regime change.
          </h1>
        </div>

        <div className="fb-markets-hero-copy-anim mx-auto mt-5 w-full max-w-[750px] px-1 text-center">
          <span className="fb-hero-copy">
            Backtests with realistic costs. Paper-and-shadow before production.
            Runbooks and kill-switches that a junior can run at 2am. We build the
            boring layer that makes alpha survive.
          </span>
        </div>

        <div className="fb-markets-hero-cta mt-10 flex flex-col gap-4 px-1 sm:flex-row sm:justify-center sm:gap-6 sm:px-0">
          <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href={ROUTES.contact.path}
              className="fb-cta-secondary w-full text-base transition duration-300 ease-fb-ease-out hover:-translate-y-0.5 sm:w-[220px] sm:text-lg"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
