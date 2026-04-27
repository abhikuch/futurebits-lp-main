"use client";
import circle from "@/assets/landing-page-AI/circle.webp";
import Image from "next/image";
import meter from "@/assets/landing-page-AI/meter.webp";
import time from "@/assets/landing-page-AI/time.webp";
import customize from "@/assets/landing-page-AI/customize.webp";
import scale from "@/assets/landing-page-AI/scale.webp";
import accuracy from "@/assets/landing-page-AI/accuracy.webp";
import decision from "@/assets/landing-page-AI/decision.webp";
import stars from "@/assets/landing-page-AI/stars.webp";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";


const BenefitCard = ({ icon, title, description, index }) => {
  // Determine if this is an odd-indexed card for alternating backgrounds
  const isOdd = index % 2 !== 0;


  return (
    <div
  
      className={`flex flex-col items-start justify-center relative space-y-[16px] px-[40px] h-full ${
        index === 1
          ? "bg-grid-1"
          : index === 3
          ? "bg-grid-2"
          : index === 5
          ? "bg-grid-3"
          : "bg-transparent"
      }`}
    >
      {/* Icon animation */}
      <div
        
        className={`icon-container mb-4 md:mb-6 ${index === 5 ? "mt-[-25px]" : ""}`}
      >
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          width={60}
          height={60}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
        />
      </div>

      {/* Text block animation */}
      <div
       
        className={`max-w-full space-y-3 font-poppins ${index === 5 ? "mt-[-25px]" : ""}`}
      >
        <h3 className="fb-h3 text-[24px] sm:text-[24px] lg:text-[22px] xl:text-[24px]">
          {title}
        </h3>
        <p className="max-w-[282px] font-poppins text-[#FFFFFF]/50 font-normal text-[16px] leading-[26px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: meter,
      title: "Faster response times",
      description:
        "Support and product surfaces respond in seconds, not minutes, with grounded answers your team would have given.",
    },
    {
      id: 2,
      icon: time,
      title: "Hours back to your team",
      description:
        "Repetitive ops work moves off humans. We measure the hours saved per workflow and report it weekly.",
    },
    {
      id: 3,
      icon: customize,
      title: "Built around your data",
      description:
        "Models, prompts, and evals trained on your stack — not a horizontal SaaS pretending to know your business.",
    },
    {
      id: 4,
      icon: scale,
      title: "Scales without re-hiring",
      description:
        "Volume goes up; headcount doesn't have to. Your unit economics improve with usage.",
    },
    {
      id: 5,
      icon: accuracy,
      title: "Fewer escalations, fewer mistakes",
      description:
        "Guardrails, evals, and observability built in from day one. Quality is monitored, not assumed.",
    },
    {
      id: 6,
      icon: decision,
      title: "Decisions backed by your own data",
      description:
        "Internal analytics, dashboards, and copilots that turn raw activity into the next action.",
    },
  ];

  return (
    <section
      id="benefits-section"
      className="relative py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-10 xl:px-20"
    >
      {/* Top left gradient blob */}
      <div className="absolute top-[-150px] w-[250px] h-[250px] left-[-110px] sm:left-[-150px] sm:w-[450px] sm:h-[450px] z-0 bg-[#2E2688] blur-[250px]  rounded-full"></div>

      {/* Top left rotating circle */}
      <div className="absolute top-[-50px] z-20 opacity-30 left-[-50px]  w-[105px] h-[105px] sm:left-[-250px]   sm:w-[400px] sm:h-[400px]">
        <div className="relative w-full h-full bg-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="base-one absolute w-full h-full rounded-full">
              <Image
                src={circle || "/placeholder.svg"}
                alt="Animated Circle"
                fill
                className="opacity-100 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-20">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1 mb-2 sm:mb-4">
            <AnimatedShinyText
              className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]"
              shimmerWidth={150}
            >
              BENEFITS
            </AnimatedShinyText>
            <Image src={stars} className="w-[30px] h-[30px]" alt="star" />
          </div>
          <h2 className="fb-h2 text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-[60px]">
            What you&apos;ll feel in the first 30 days
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`
                relative h-[360px]
                ${index % 3 !== 2 ? "border-b-[0.5px] sm:border-b-0 sm:border-r-[0.5px] border-white/20" : ""}
                ${
                  index < 3
                    ? "border-b-[0.5px] sm:border-b-[0.5px] border-white/20"
                    : ""
                }
                ${
                  index >= 3 && index < 5 && index % 2 === 0
                    ? "sm:border-b-0 border-b-[0.5px] border-white/20 lg:border-b-0"
                    : ""
                }
                ${
                  index === 4
                    ? "sm:border-b-[0.5px] lg:border-b-0 border-white/20"
                    : ""
                }
              `}
            >
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
