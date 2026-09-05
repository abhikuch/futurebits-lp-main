"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import Navbar from "./Navbar";

import BeamButton from "./BeamButton";
import LeftDecoration from "@/assets/landing-page-AI/LeftRectangle.svg";
import RightDecoration from "@/assets/landing-page-AI/RightRectangle.svg";
import LazyMount from "@/components/ui/lazy-mount";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("../ui/particles"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden text-white">
      <div className="">
        <Navbar />
      </div>
      <LazyMount fallbackClassName="absolute top-0 left-0 w-full h-1/3">
        <Particles
          quantity={10}
          ease={200}
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
          alt=""
          className="h-full w-auto"
          width={100}
          height={500}
          style={{ objectFit: "cover", objectPosition: "left" }}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="hidden xl:flex absolute h-full right-0 top-0 z-0">
        <Image
          src={RightDecoration}
          alt=""
          className="h-full w-auto"
          width={100}
          height={500}
          style={{ objectFit: "cover", objectPosition: "right" }}
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* LCP: optimized WebP + no motion wrapper (reduces element render delay) */}
      <div className="absolute top-[50px] sm:top-[80px] 3xl:top-[90px] w-full h-full z-0 pointer-events-none">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(max-width: 828px)"
            srcSet="/images/landing-page-ai/hero-lcp-828.webp"
            type="image/webp"
          />
          <img
            src="/images/landing-page-ai/hero-lcp-1440.webp"
            alt="Hero background"
            width={1440}
            height={734}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      {/* Main content - fills the available space */}
      <div className="relative z-40 flex flex-1 items-center justify-center px-4 pb-12 pt-36 sm:px-8 sm:pt-32 lg:px-12">
        <div className="mx-auto w-full max-w-4xl space-y-8 text-center md:space-y-10">
          <div className="mx-auto w-full">
            <p className="fb-ai-hero-kicker mb-5">
              <span className="fb-kicker">
                Applied AI for ops, support, and product teams
              </span>
            </p>
            {/* Main headline */}
            <h1 className="fb-ai-hero-title fb-hero-title leading-[1.15]">
              Production AI that cuts manual work. Shipped in weeks, not
              quarters.
            </h1>

            {/* Subheadline */}
            <p className="fb-ai-hero-copy-anim fb-hero-copy mt-4 md:mt-6 text-center">
              We build retrieval, automation, and agent systems inside your
              repo. First useful automation lands in 2–3 weeks, full rollout in
              8–12. One team, no hand-offs.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="fb-ai-hero-cta flex flex-col justify-center gap-4 px-2 sm:flex-row sm:px-0">
            <Link
              href="#project"
              className="fb-cta-secondary w-full sm:w-[240px] text-base sm:text-lg"
            >
              See what we ship
              <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
            </Link>

            <Link
              href="https://cal.com/futurebits/ai?duration=30"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <BeamButton title="Book a call" />
            </Link>
          </div>
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
