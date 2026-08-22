"use client";
import Image from "next/image";
import chatbotIcon from "@/assets/landing-page-AI/chatbot-demo.webp";
import workflowIcon from "@/assets/landing-page-AI/workflow-demo.webp";
import contentIcon from "@/assets/landing-page-AI/content-demo.webp";
import llmIcon from "@/assets/landing-page-AI/llm-demo.webp";
import aiConsultingIcon from "@/assets/landing-page-AI/ai-consulting-demo.webp";
import circle from "@/assets/landing-page-AI/circle.webp";
import patternImage from "@/assets/landing-page-AI/pattern.webp";

import BeamButton from "./BeamButton";

import stars from "@/assets/landing-page-AI/stars.webp";
import { AnimatedShinyText } from "../magicui/animated-shiny-text"; // Adjust the import path as needed

import Link from "next/link";
import { SERVICE_CATEGORIES, getServiceBySlugs } from "@/content/services";
import {
  MotionFadeIn,
  MotionStagger,
  MotionStaggerItem,
} from "@/components/shared/MotionReveal";

const ServiceCard = ({
  title,
  description,
  icon,
  borderStyle,
  fullWidthImage,
  href,
}) => (
  <Link
    href={href}
    className="fb-interactive-surface card-gred-1 relative z-10 block h-full cursor-pointer rounded-3xl p-[1px] font-poppins sm:p-[2px]"
  >
    <div className="bg-[#0D0D0D] rounded-3xl h-full flex flex-col">
      {/* Pattern in top right */}
      <div className="absolute top-0 right-0">
        <Image
          src={patternImage || "/placeholder.svg"}
          alt="Pattern"
          width={180}
          height={200}
          className="opacity-100"
        />
      </div>

      <div className="flex flex-col h-full font-poppins">
        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="fb-h3 text-base sm:text-lg leading-[28px] mb-2">
            {title}
          </h3>
          <p className="text-[#FFFFFF80] text-xs sm:text-sm">{description}</p>
        </div>
        <div
          className={`mt-0 rounded-lg ${
            fullWidthImage ? "px-0 pb-4" : "px-4 sm:px-6 md:px-8 pb-4"
          }`}
        >
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} illustration`}
            width={500}
            height={300}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  </Link>
);

const ServicesSection = () => {
  const borderStyles = {
    card1: {
      gradient:
        "linear-gradient(106.97deg, #060618 6.84%, #2E2688 31.15%, #01B0EA 39.25%, #FFFFFF 47.35%, #FFFFFF 51.4%, #01B0EA 55.45%, #2E2688 63.56%, #060618 87.86%)",
    },
    card2: {
      gradient:
        "linear-gradient(146.26deg, #060618 20.4%, #2E2688 38.27%, #01B0EA 44.23%, #FFFFFF 50.19%, #FFFFFF 53.17%, #01B0EA 56.14%, #2E2688 62.1%, #060618 79.98%)",
    },
    card3: {
      gradient:
        "linear-gradient(104.29deg, #060618 0%, #2E2688 30%, #01B0EA 40%, #FFFFFF 50%, #FFFFFF 55%, #01B0EA 60%, #2E2688 70%, #060618 100%)",
    },
    card4: {
      gradient:
        "linear-gradient(54.79deg, #060618 0%, #2E2688 30%, #01B0EA 40%, #FFFFFF 50%, #FFFFFF 55%, #01B0EA 60%, #2E2688 70%, #060618 100%)",
    },
    card5: {
      gradient:
        "linear-gradient(180deg, #060618 0%, #2E2688 30%, #01B0EA 40%, #FFFFFF 50%, #FFFFFF 55%, #01B0EA 60%, #2E2688 70%, #060618 100%)",
    },
  };

  const services = [
    {
      id: 1,
      title: "Workflow automation",
      description:
        "Replace repetitive ops work with measured automations. We track hours saved, not tickets closed.",
      icon: contentIcon,
      borderStyle: borderStyles.card1,
      href: getServiceBySlugs("ai-automation", "ai-workflow-automation")?.path || "/services/ai-automation",
    },
    {
      id: 2,
      title: "LLMs and custom models",
      description:
        "Custom models and retrieval pipelines tuned to your data, with evaluations you can defend.",
      icon: llmIcon,
      borderStyle: borderStyles.card2,
      href: getServiceBySlugs("ai-automation", "llm-integration")?.path || "/services/ai-automation",
    },
    {
      id: 3,
      title: "Internal copilots and assistants",
      description:
        "Domain-aware assistants for your team, scoped to one job they can do reliably.",
      icon: chatbotIcon,
      borderStyle: borderStyles.card3,
      href: getServiceBySlugs("ai-automation", "ai-agents-development")?.path || "/services/ai-automation",
    },
    {
      id: 4,
      title: "Content systems and personalization",
      description:
        "Production content pipelines with quality gates — tone, accuracy, and brand checks built in.",
      icon: workflowIcon,
      borderStyle: borderStyles.card4,
      href: getServiceBySlugs("ai-automation", "ai-content-generation")?.path || "/services/ai-automation",
    },
    {
      id: 5,
      title: "AI strategy and architecture",
      description:
        "A two-week diagnostic that ends in a one-page plan: where AI pays back, where it doesn't, and what to build first.",
      icon: aiConsultingIcon,
      borderStyle: borderStyles.card5,
      href: getServiceBySlugs("startup-tech-partner", "product-strategy")?.path || "/services/startup-tech-partner",
    },
  ];

  const aiCategory = SERVICE_CATEGORIES.find((c) => c.slug === "ai-automation");
  const buildCategory = SERVICE_CATEGORIES.find((c) => c.slug === "build");
  const integrationsCategory = SERVICE_CATEGORIES.find((c) => c.slug === "integrations-platform");



  return (
    <section
      id="ai-services"
      className="relative py-20 px-6 sm:py-20 sm:px-10 lg:py-28 lg:px-[30px] xl:px-[80px] overflow-x-hidden"
    >
      {/* <div className="absolute top-10 left-0 w-[100px] h-[100px] blur-[400px] sm:top-[440px] sm:left-0 sm:w-[550px] sm:h-[550px] rounded-full  bg-[#2E2688] sm:blur-[250px]"></div> */}
      {/* <div className="absolute top-[400px] right-[-100px]  w-[150px] h-[150px] sm:top-[440px] sm:-right-20 sm:w-[550px] sm:h-[550px] rounded-full  bg-[#2E2688] blur-[500px] "></div> */}

      <div>
        <div
          className="absolute top-1/2 right-0 w-[300px] md:w-[600px] -translate-y-[40%] translate-x-[30%] h-[300px] md:h-[600px] bg-[#2E2688] opacity-20 rounded-full z-0 backdrop-blur-[580px]"
          style={{
            filter: "blur(120px)",
            opacity: 0.4,
          }}
        ></div>
        <div className="absolute right-0 top-1/2 transform -translate-y-[40%] translate-x-[30%] z-20 opacity-50 w-[150px] h-[150px] sm:w-[268px] sm:h-[268px] md:w-[536px] md:h-[536px] overflow-hidden">
          <div className="relative w-full h-full bg-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="aa base-one absolute w-full h-full rounded-full overflow-hidden">
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
      </div>

      <div className="container mx-auto px-0 relative z-20">
        {/* Section header */}
        <MotionFadeIn className="mb-8 text-center sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1 mb-2 sm:mb-4">
            <AnimatedShinyText
              className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]"
              shimmerWidth={150}
            >
              What we ship
            </AnimatedShinyText>
            {/* <span className="text-yellow-400">✨</span> */}
            <Image src={stars} className="w-[30px] h-[30px]" alt="star" />
          </div>
          <h2
            className="fb-h2 text-2xl sm:text-3xl md:text-4xl leading-[1.3] md:leading-[60px] mb-6 sm:mb-8 md:mb-12"
            style={{
              fontFamily: "Montserrat",
            }}
          >
            Five problem shapes we solve well
          </h2>
          <div className="mx-auto mb-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { label: aiCategory?.title || "AI & Automation", href: aiCategory ? `/services/${aiCategory.slug}` : "/services/ai-automation" },
              { label: buildCategory?.title || "Build", href: buildCategory ? `/services/${buildCategory.slug}` : "/services/build" },
              { label: integrationsCategory?.title || "Integrations & Platform", href: integrationsCategory ? `/services/${integrationsCategory.slug}` : "/services/integrations-platform" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/20 bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </MotionFadeIn>

        {/* Services grid - first 2 cards */}
        <MotionStagger
          className="mb-4 grid cursor-pointer grid-cols-1 gap-4 px-2 font-poppins sm:mb-6 sm:gap-6 sm:px-0 md:grid-cols-2 lg:mb-8 lg:gap-6 lg:px-10 xl:px-20"
        >
          {services.slice(0, 2).map((service) => (
            <MotionStaggerItem
              key={service.id}
              className={
                service.id === 3 ? "sm:col-span-2 md:col-span-1" : ""
              }
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                borderStyle={service.borderStyle}
                fullWidthImage={false}
                href={service.href}
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Services grid - next 3 cards in second row */}
        <MotionStagger className="grid grid-cols-1 gap-4 px-2 font-poppins sm:grid-cols-1 sm:gap-6 sm:px-0 lg:grid-cols-3 lg:gap-6 lg:px-10 xl:px-16">
          {services.slice(2).map((service) => (
            <MotionStaggerItem
              key={service.id}
              className={
                service.id === 3 ? "sm:col-span-2 md:col-span-1" : ""
              }
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                borderStyle={service.borderStyle}
                fullWidthImage={false}
                href={service.href}
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* CTA Button */}
        <MotionFadeIn delay={0.06}>
        <Link
          href="https://cal.com/futurebits/ai?duration=30"
          target="_blank"
          className=" "
        >
          <div className="w-full flex items-center justify-center mt-16 ">
            <BeamButton title="Book a call" className="w-[300px]" />
          </div>
        </Link>
        </MotionFadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
