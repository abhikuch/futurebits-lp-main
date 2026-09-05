"use client";
import Image from "next/image";
import MarketingButton from "@/components/ui/marketing-button";
import { CAL } from "@/config/site";
// Import placeholder images - replace with your actual paths
import speedIcon from "@/assets/market/speed-icon.webp";
import objectiveIcon from "@/assets/market/objective-icon.webp";
import alwaysOnIcon from "@/assets/market/always-on-icon.webp";
import patternImage from "@/assets/landing-page-AI/pattern.svg";
import Link from "next/link";
import { BorderBeamDemo } from "../ui/beam";

const BenefitCard = ({ title, description, icon, gradient }) => {
  return (
    <div
      className="p-[0.5px] w-full lg:max-w-[300px] xl:max-w-[380px] rounded-3xl relative z-10 h-full font-poppins group cursor-pointer"
      style={{
        background: gradient,
      }}
    >
      {/* Card content with dark background */}
      <div className="bg-[#0D0D0D] rounded-3xl h-full flex flex-col xl:py-4">
        <div className="absolute bottom-0 sm:bottom-[-1.5rem] right-0">
          <Image
            src={patternImage || "/placeholder.svg"}
            alt="Pattern"
            width={180}
            height={200}
            className="opacity-100 sm:w-[120px] sm:h-[160px] lg:w-[150px] lg:h-[180px] xl:w-[180px] xl:h-[200px]"
            style={{ transform: "scaleY(-1)" }}
          />
        </div>
        {/* Image Container - Fixed height to ensure alignment */}
        <div className="relative w-full h-[200px] lg:h-[240px] xl:h-[210px] mx-auto lg:px-12 ">
          <div className="relative w-full h-full z-10">
            <Image
              src={icon || "/placeholder.svg"}
              alt={`${title} illustration`}
              width={300}
              height={220}
              objectFit="cover"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Text content - Fixed height to ensure alignment */}
        <div className="p-8 flex-1 flex flex-col">
          <h3 className="fb-h3 text-2xl mb-2">
            {title}
          </h3>
          <p className="text-[#FFFFFF66] font-normal tracking-tighter text-base leading-[26px] flex-grow">
            {description}
          </p>
        </div>

        {/* Grid pattern overlay for background */}
        <div className="absolute inset-0 z-[-1] opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>
      </div>
      <BorderBeamDemo
        size={150}
        delay={0}
        duration={5}
        colorFrom="#060618"
        colorTo="#ffffff"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Execution that doesn\u2019t fumble",
      description:
        "Orders fire and reconcile correctly, even on bad days. Latency, retries, and idempotency are first-class.",
      icon: speedIcon,
      gradient:
        "linear-gradient(106.76deg, #060618 6.84%, rgba(255, 255, 255, 0.6) 31.15%, rgba(255, 255, 255, 0.8) 39.25%, #FFFFFF 47.35%, rgba(255, 255, 255, 0.8) 55.45%, rgba(255, 255, 255, 0.6) 63.56%, #060618 87.86%)",
    },
    {
      id: 2,
      title: "Rules over reactions",
      description:
        "Strategies follow the rules you wrote. No panic exits, no revenge trades, no second-guessing at 3am.",
      icon: objectiveIcon,
      gradient:
        "linear-gradient(146.26deg, #060618 20.4%, rgba(255, 255, 255, 0.6) 38.27%, rgba(255, 255, 255, 0.8) 44.23%, #FFFFFF 50.19%, rgba(255, 255, 255, 0.8) 56.14%, rgba(255, 255, 255, 0.6) 62.1%, #060618 79.98%)",
    },
    {
      id: 3,
      title: "24×7 without staffing 24×7",
      description:
        "Systems run across sessions and venues with monitoring that escalates only when a human is needed.",
      icon: alwaysOnIcon,
      gradient:
        "linear-gradient(90deg, #060618 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0.4) 70%, #060618 100%)",
    },
  ];

  return (
    <section className="w-full lg:max-w-[1200px] xl:max-w-full mx-auto relative py-20 md:py-28 font-poppins overflow-hidden">
      <div
        className="xl:block hidden absolute left-[-25%]  top-[10%] -translate-y-1/2 w-[410px] h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>

      {/* Right glowing vector effect as shown in image */}
      <div
        className="xl:block hidden absolute xl:right-[-25%] xl:top-[10%] right-[-8%] top-[15%] -translate-y-1/2 w-[200px] h-[45px] xl:w-[410px] xl:h-[45px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-45deg) translateX(-60%)",
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-1 sm:mb-4">
            <span className="uppercase text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF]/60 to-[#999999]/60">
              Why automate
            </span>
          </div>
          <h2 className="fb-h2 text-[24px] md:text-[38px] leading-[1.3] md:leading-[60px]">
            What you actually get from automation
          </h2>
        </div>

        {/* Benefits grid - Modified for consistent width on all screens */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 font-poppins px-[20px] sm:px-[40px] lg:px-0">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="h-full flex w-full">
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                gradient={benefit.gradient}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href={CAL.markets}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center items-center mt-16">
            <div className="relative">
              <MarketingButton tone="markets" size="lg" className="text-[20px]">
                Book a call
              </MarketingButton>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BenefitsSection;