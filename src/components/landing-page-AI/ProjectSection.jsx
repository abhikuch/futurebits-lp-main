"use client";
import React from "react";
import Image from "next/image";

import patternImage from "@/assets/landing-page-AI/pattern.svg";
import circle from "@/assets/landing-page-AI/circle.webp";

import { MagicCard } from "../magicui/magic-card";

import stars from "@/assets/landing-page-AI/stars.webp";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
 
const ProjectCard = ({ title, description }) => {

  return (
    <MagicCard
      gradientColor="#2E2688"
      className="rounded-r-[32px] cursor-pointer"
    >
      <div className="relative overflow-hidden h-full">
        <div
          className="px-6 py-5 lg:px-16 lg:py-12 h-full relative flex flex-col"
          style={{
            borderLeft: "4px solid transparent",
            borderRadius: "32px",
            borderImage:
              "linear-gradient(176.49deg, #2E2688 26.24%, #01B0EA 34.99%, #FFFFFF 43.73%, #FFFFFF 48.1%, #01B0EA 52.48%, #2E2688 61.22%) 1",
          }}
        >
          <div className="absolute top-0 right-0 z-10">
            <Image
              src={patternImage}
              alt="Pattern"
              width={168}
              height={150}
              className="opacity-100"
            />
          </div>
          <div className="font-poppins">
            <h3 className="fb-h3 text-[16px] lg:text-[24px] leading-[28px] mb-4">
              {title}
            </h3>
            <p className="text-[#FFFFFF80] text-[14px] lg:text-[16px] lg:leading-[26px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "AI Assessment Engine",
      description:
        "Autonomous scoring engine for descriptive and essay responses with personalized feedback loops to improve learner outcomes.",
    },
    {
      id: 2,
      title: "Review Response Assistant",
      description:
        "AI assistant that monitors and responds to public reviews across listing platforms to improve response speed and brand consistency.",
    },
    {
      id: 3,
      title: "Seizure Detection Pipeline",
      description:
        "Medical-grade machine learning pipeline combining CNN and K-Means models, delivered with production handoff for a pharma stakeholder.",
    },
  ];

  return (
    <section id="project" className="relative pt-20 sm:pt-48  overflow-hidden">
      {/* Top left gradient blob */}
      <div className="absolute  w-[105px] h-[105px] top-[15px] right-[-50px] sm:right-[-200px] sm:w-[450px] sm:h-[450px] z-0 bg-[#2E2688]  blur-[100px] sm:blur-[250px] rounded-full"></div>

      {/* Top left rotating circle */}
      <div className="absolute   z-40 opacity-30 w-[105px] h-[105px] top-[15px]  right-[-50px] sm:top-[0px] sm:right-[-200px] sm:w-[400px] sm:h-[400px] ">
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

      <div className="container mx-auto px-0 relative bg-transparent z-40">
        {/* Section header */}
        <div className="mb-11 text-center">
          <div className="inline-flex items-center justify-center font-poppins">
            <AnimatedShinyText
              className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]"
              shimmerWidth={150}
            >
              Work shipped
            </AnimatedShinyText>
            {/* <span className="text-yellow-500 text-lg">✨</span> */}
            <Image src={stars} className="w-[30px] h-[30px]" alt="star" />
          </div>
          <h2 className="fb-h2 text-[22px] leading-[36px] lg:text-[38px] lg:leading-[60px]">
            What we&apos;ve actually shipped
          </h2>
        </div>

        {/* Main content area with background image and cards */}
        <div className="relative z-40">
          {/* Project cards with proper padding */}
          <div className="relative z-10 py-8 sm:px-[60px] px-6 lg:px-[90px] md:py-16 xl:pt-0 xl:pb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
