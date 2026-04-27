"use client";
import React, { useState } from "react";
import Image from "next/image";

import patternImage from "@/assets/landing-page-AI/pattern.svg";
import circle from "@/assets/landing-page-AI/circle.webp";
import BeamButton from "./BeamButton";

import { MagicCard } from "../magicui/magic-card";

import stars from "@/assets/landing-page-AI/stars.webp";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Link from "next/link";


const ProjectCard = ({ title, description, tag }) => {

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
  const [activeTab, setActiveTab] = useState("workflow");

  // Define project sections
  const projectCategories = [
    { id: "workflow", label: "Workflow Automation" },
    { id: "assistants", label: "AI Assistants" },
    { id: "content", label: "AI Content" },
    { id: "llm", label: "LLM Development" },
    { id: "consulting", label: "AI Consulting" },
  ];

  const projectContent = {
    workflow: [
      {
        id: 1,
        title: "AI Assessment",
        description:
          "A fully autonomous evaluation engine that understands the context of diverse question types—descriptive, essay-based, and more—to accurately score responses. Beyond just grading, it provides personalized, actionable feedback to help learners improve and grow.",
      },
      {
        id: 2,
        title: "Gaussian Process Modeling for Industrial Applications",
        description:
          "Developed enhanced Gaussian Process implementation combining neural networks with Stan for industrial fouling detection. Created monitoring systems to track model behavior and resolved complex framework compatibility challenges between Stan and GPyTorch.",
      },
      {
        id: 3,
        title: "Review System",
        description:
          "An autonomous AI-powered assistant that monitors and responds to customer reviews and ratings across your online listings (e.g., Google Maps, Play Store). It crafts contextually relevant replies to engage customers, enhance brand credibility, and build a strong, responsive online presence—without manual effort.",
      },
      {
        id: 4,
        title: "RNA Structure Prediction using Deep Learning",
        description:
          "Reviewed cutting-edge algorithms combining neural networks with thermodynamic principles to predict how RNA molecules fold. The research examined various methods including convolutional neural networks, bidirectional LSTMs, and hybrid approaches that integrate traditional dynamic programming with deep learning to address the NP-complete challenge of RNA structure prediction.",
      },
      {
        id: 5,
        title: "Climate Emissions Analysis Platform",
        description:
          "Developed full-stack data visualization platform using Python, Plotly, and Streamlit. Implemented predictive models with uncertainty quantification for reliable emissions forecasting, enabling data-driven decision making for sustainability initiatives.",
      },
      {
        id: 6,
        title: "Epileptic Seizure Detection System",
        description:
          "Led development of machine learning pipeline combining CNN and K-Means models for medical-grade seizure detection. Managed technical team through the complete development cycle, resulting in successful delivery to Orion Pharma and inclusion in Futurice's technical showcase.",
      },
    ],
    assistants: [
      {
        id: 1,
        title: "Practice Space - AI-Powered Training Simulations",
        description:
          "Led early technical development for Practice Space, an AI-powered training simulation platform for psychotherapists. Worked on MVP development and initial product architecture before deciding to pursue other opportunities.",
      },
    ],
    content: [
      {
        id: 1,
        title: "Decoding Me ",
        description:
          "Created over 1,000 career discovery exercises for high school students, covering hundreds of industries and difficulty levels. These activities turn career exploration into an engaging and interactive experience, helping students identify and pursue their interests with clarity and confidence.",
      },
      {
        id: 2,
        title: "AI in the Newsroom",
        description:
          "Analyzed a dataset of 75,000 news articles to detect shifts in language patterns following ChatGPT's release. Discovered a significant increase in words favored by ChatGPT, indicating potential AI-driven changes in journalism that could impact media trust and authenticity.",
      },
    ],
    consulting: [
      {
        id: 1,
        title: "Live Theory: Architecting AI Interfaces",
        description:
          "Exploratory research into theoretical frameworks for how humans interact with advanced AI systems. This work bridges technical implementation with cognitive science to create more intuitive and reliable human-AI interfaces, directly benefiting enterprise AI deployments.",
      },
      {
        id: 2,
        title: "Swiss AI Safety Camp",
        description:
          "Participated in intensive research collaboration focused on ensuring advanced AI systems remain safe and aligned with human values. Contributed technical expertise to projects addressing fundamental challenges in machine learning safety.",
      },
      {
        id: 3,
        title: "Elements of AI - Interactive Learning Platform",
        description:
          "Developed interactive ML simulations and testing systems for Finnish government-backed global AI MOOC. Led technical migration of multi-lingual community platform and provided advanced technical support for complex ML concepts and implementations.",
      },
      {
        id: 4,
        title: "IQ Bayesian Analysis",
        description:
          "Developed multiple Bayesian models (pooled, separate, and hierarchical) to analyze relationships between IQ changes, time, and educational attainment. This statistical research explored global and continent-specific trends, demonstrating expertise in applying sophisticated statistical methods to complex sociological questions.",
      },
    ],
    llm: [
      {
        id: 1,
        title: "LLM Behavior Analysis",
        description:
          "Designed and implemented experimental frameworks to analyze how large language models approach teaching compared to human tutors. Revealing systematic differences with implications for educational technology and AI assistant design in training programs.",
      },
      {
        id: 2,
        title: "AI Concept Processing Framework",
        description:
          "Architected end-to-end pipeline for systematic analysis of concept representation in large language models. Developed methodologies for investigating token distribution patterns and built visualization systems for intuitive understanding of AI reasoning processes.",
      },
      {
        id: 3,
        title: "Computational Mechanics for AI Interpretability",
        description:
          "Investigated how transformer models internally represent complex hierarchical processes with changing dynamics. This research contributes to AI interpretability and safety by examining whether models develop formal representations of probability distributions across different hypotheses.",
      },
    ],
  };

  // Custom layouts based on the category and number of projects
  const renderProjectsWithLayout = () => {
    const projects = projectContent[activeTab];

    // Special layout for Assistants with just one card
    if (activeTab === "assistants") {
      return (
        <div className="grid grid-cols-1 gap-6">
          <ProjectCard
            title={projects[0].title}
            description={projects[0].description}
            tag={projects[0].tag}
          />
        </div>
      );
    }

    // Layout for LLM Development - 2x2 grid
    if (activeTab === "llm") {
      return (
        <section>
          <div className="grid grid-cols-1 gap-8 mb-8">
            {projects.slice(0, 1).map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(1).map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                />
              </div>
            ))}
          </div>
        </section>
      );
    }

    // Layout for Workflow Automation - 2 cards in one row
    if (activeTab === "workflow") {
      return (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="h-full">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tag={project.tag}
                />
              </div>
            ))}
          </div>
        </section>
      );
    }

    // Layout for Content - 2x2 grid
    if (activeTab === "content") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                tag={project.tag}
              />
            </div>
          ))}
        </div>
      );
    }

    // Layout for Consulting - 2x2 grid with wider cards
    if (activeTab === "consulting") {
      // Group projects into rows of 2
      const rows = [];
      for (let i = 0; i < projects.length; i += 2) {
        rows.push(projects.slice(i, i + 2));
      }

      return (
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {row.map((project) => (
                <div key={project.id} className="h-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    tag={project.tag}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }

    // Default layout - grid with responsive columns
    return (
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              tag={project.tag}
            />
          </div>
        ))}
      </div>
    );
  };

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

        {/* Navigation tabs */}
        <div className="flex overflow-x-auto md:overflow-hidden">
          {/* <div className="hidden sm:flex w-full space-x-6 px-[20px] sm:px-0 md:justify-center md:space-x-6 lg:space-x-8 xl:space-x-16 lg:mb-10 z-50 ">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={` py-2 relative text-[14px] md:text-[14px] lg:text-[20px] lg:leading-[42px] font-medium whitespace-nowrap font-montserrat ${
                  activeTab === category.id
                    ? "text-white"
                    : "text-[#FFFFFF99] hover:text-white"
                }`}
              >
                {category.label}
                {activeTab === category.id && (
                  <div
                    className={`
                      ${
                        activeTab === "workflow"
                          ? "w-[800px] sm:w-[600px] left-[-30%] lg:left-[-1%]"
                          : "w-[120px] left-[10%] lg:left-[-20%]"
                      }
                      
                      absolute bottom-0    md:left-[0%]  lg:w-[984px]
                      bg-project-underline-mobile sm:bg-project-underline
                      h-[2.5px] sm:h-[4px]
                      `}
                  ></div>
                )}
              </button>
            ))}
          </div> */}

          <div className="flex sm:hidden w-full space-x-6 px-[20px] sm:px-0 md:justify-center md:space-x-6 lg:space-x-8 xl:space-x-16 lg:mb-10 z-50 ">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={` py-2 relative text-[14px] md:text-[14px] lg:text-[20px] lg:leading-[42px] font-medium whitespace-nowrap font-montserrat ${
                  activeTab === category.id
                    ? "text-white"
                    : "text-[#FFFFFF99] hover:text-white"
                }`}
              >
                {category.label}
                {activeTab === category.id && (
                  <div
                    className={`
                      ${
                        activeTab === "workflow"
                          ? "w-[200px] sm:w-[600px] left-[2%] lg:left-[-1%]"
                          : "w-[150px] left-[-10%] lg:left-[-20%]"
                      }

                      ${
                        activeTab === "llm"
                          ? "w-[200px] left-[-3%]"
                          : ""
                      }
                      
                      absolute bottom-0  md:left-[0%]  lg:w-[984px]
                      bg-project-underline-mobile sm:bg-project-underline
                      h-[2.5px] sm:h-[4px]
                      `}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main content area with background image and cards */}
        <div className="relative z-40">
          {/* Project cards with proper padding */}
          <div className="relative z-10 py-8 sm:px-[60px] px-6 lg:px-[90px] md:py-16 xl:pt-0 xl:pb-10">
            {renderProjectsWithLayout()}
            {/* CTA Button */}

            <Link
              href="https://cal.com/futurebits/ai?duration=30"
              target="_blank"
              className=" "
            >
              <div className="w-full flex  items-center justify-center mt-20">
                <BeamButton
                  title="Book a 30-min AI working call"
                  className="w-[250px] sm:w-[220px]"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
