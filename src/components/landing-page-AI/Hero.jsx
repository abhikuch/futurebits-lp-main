"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import Navbar from "./Navbar";

import BeamButton from "./BeamButton";
import LeftDecoration from "@/assets/landing-page-AI/LeftRectangle.svg";
import RightDecoration from "@/assets/landing-page-AI/RightRectangle.svg";
import GlowingPlanet from "@/assets/landing-page-AI/hero.svg";
import { motion } from "framer-motion";
import Particles from "../ui/particles";
import LazyMount from "@/components/ui/lazy-mount";

const Hero = () => {
  return (
    <section className="relative w-full h-[700px]  sm:h-[800px] xl:h-screen 3xl:h-[1000px]    flex flex-col text-white overflow-hidden">
      <div className="">
        <Navbar />
      </div>
      <LazyMount fallbackClassName="absolute top-0 left-0 w-full h-1/3">
        <Particles
          quantity={14}
          ease={200}
          refresh
          size={0.4}
          staticity={100}
          className="!z-10 absolute top-0 left-0 w-full h-1/3"
        />
      </LazyMount>
      {/* Background effects */}
      <div
        className="xl:block hidden absolute xl:left-[-20%] top-[-15%] 2xl:left-0 -translate-y-1/2 w-[250px] sm:w-[410px] h-[30px] sm:h-[65px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>

      <div
        className="xl:block hidden absolute right-[-15%] xl:right-[-15%] 2xl:right-0 top-[-5%] -translate-y-1/2 w-[250px] lg:w-[340px] xl:w-[360px] h-[30px] xl:h-[65px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-45deg) translateX(-60%)",
        }}
      ></div>
      {/* Side decorations positioned absolutely but outside the content area */}
      <div className="hidden xl:flex absolute h-full left-0 top-0 z-0">
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

      <div className="hidden xl:flex absolute h-full right-0 top-0 z-0">
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-[50px] sm:top-[80px]  3xl:top-[90px]  w-full h-full z-0"
      >
        <Image
          src={GlowingPlanet}
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Main content - fills the available space */}
      <div className="flex-grow flex items-center justify-center px-0 sm:px-10 lg:px-12 lg:pt-20 3xl:pt-0 relative z-40">
        <div className="text-center w-full max-w-4xl mx-auto space-y-12 md:space-y-6 lg:space-y-8">
          <div className="w-full mx-auto  px-6 sm:px-0">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mb-5"
            >
              <span className="fb-kicker">
                Applied AI for ops, support, and product teams
              </span>
            </motion.p>
            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="fb-hero-title"
            >
              Production AI that cuts manual work — shipped in weeks, not
              quarters.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="fb-hero-copy mt-4 md:mt-6 text-center"
            >
              We build retrieval, automation, and agent systems inside your
              repo. First useful automation lands in 2–3 weeks, full rollout in
              8–12. Senior pod, no hand-offs.
            </motion.p>
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col px-5 sm:px-0 sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#project"
              className="fb-cta-secondary w-full sm:w-[240px] text-[18px]"
            >
              See what we ship
              <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            </Link>

            <Link
              href="https://cal.com/futurebits/ai?duration=30"
              target="_blank"
              className=" "
            >
              <BeamButton title="Book a 30-min AI working call" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Gradient border at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10"
        style={{
          background:
            "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #FFFFFF 64.77%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)",
          height: "4px",
          width: "100%",
        }}
      ></div>
    </section>
  );
};

export default Hero;
