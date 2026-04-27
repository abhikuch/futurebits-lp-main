"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import navbarDiamond from "@/assets/design/navbar.svg";
import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";
import BeamButton from "./BeamButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Particles from "../ui/particles";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Link from "next/link";
import Avatar1 from "@/assets/avatar_1.webp";
import Avatar2 from "@/assets/avatar_2.webp";
import Avatar3 from "@/assets/avatar_3.webp";
import Avatar4 from "@/assets/avatar_4.webp";
import Avatar5 from "@/assets/avatar_5.webp";
import Avatar6 from "@/assets/avatar_6.webp";
import Avatar7 from "@/assets/avatar_7.webp";
import Avatar8 from "@/assets/avatar_8.webp";
import { motion, useInView } from "framer-motion";
// Testimonial data - keeping original structure but updating first item to match design
const testimonials = [
  {
    id: 1,
    content:
      "Aayush's work has been indispensable to the progress of our project. He expertly set up and maintained organizational tools while providing sophisticated coding solutions throughout our machine learning pipeline. His technical expertise combined with his collaborative approach made him an invaluable asset to our research team.",
    rating: 5,
    author: "Dr. Rasmus Herlo",
    position: "Post-Doc at University of Copenhagen",
    avatar: Avatar1,
  },
  {
    id: 2,
    content:
      "Aayush demonstrated exceptional analytical abilities in his research on AI tutoring systems. His systematic comparison of human and AI teaching patterns revealed critical insights that advance our understanding of educational technology. His work shows a rare combination of technical mastery and thoughtful consideration of human-AI interaction—precisely the skillset needed to build AI systems that truly serve human needs.",
    rating: 5,
    author: " Dr. Nitin Sawhney",
    position: "Professor at Aalto University",
    avatar: Avatar2,
  },
  {
    id: 3,
    content:
      "Working with a technology partner is often a headache—requirements keep changing, and communication gaps are common.Futurebits is the only vendor I've worked with where documentation is so strong that nothing gets lost in translation. Their first-principles thinking and deep discussions help clarify evolving needs.They tick all the right boxes: extremely talented (Decoding Me's website and dashboard are loved by all), prompt, dependable, and truly trustworthy with time and money.",
    rating: 5,
    author: "Khushbu Chopda",
    position: "Founder, Decoding Me",
    avatar: Avatar3,
  },
  {
    id: 4,
    content:
      "Futurebits delivered exceptional work ahead of schedule, making the entire experience truly seamless. Their adaptability to evolving requirements and collaborative approach greatly contributed to the project's success. A dependable and efficient partner—we sincerely value their contribution.",
    rating: 5,
    author: "Vinod Bombale",
    position: "Portfolio Manager - Global Pricing Innovation",
    avatar: Avatar4,
  },
  {
    id: 5,
    content:
      "Working with Futurebits has been a seamless experience. Their team is always receptive to our requirements, and quickly addresses any challenges that arise. They are proactive, engaging and focused to coming to a simpler, and more practical solution in all our web design & build requirements. We appreciate their collaborative approach and their dedication to ensuring our website runs smoothly.",
    rating: 5,
    author: "Ajay Menon",
    position: "Senior Lead TechnoServe / Program Director Greenr",
    avatar: Avatar5,
  },
  {
    id: 6,
    content:"A team of self-starters through and through, Futurebits not only delivered high-quality work but also uplifted the entire team with their positive energy and collaborative spirit. Their creativity stood out—whether in layout, color schemes, or user flow. Every design choice reflected a deep concern for the end user’s experience. Our discussions were richer and more productive thanks to their thoughtful contributions and genuine enthusiasm.I wholeheartedly recommend Futurebits to any team looking for a talented, user-centered design partner that combines aesthetic sensibility with strategic thinking.",
    rating: 5,
    author: "Gopesh Mittal",
    position: "Co-Founder Alphaquark",
    avatar: Avatar6,
  },
  {
    id: 7,
    content:"Futurebits is a detail-oriented design company with a strong understanding of the fintech space and provides valuable inputs to projects as needed.",
    rating: 5,
    author: "Pratik Ghosh",
    position: "Founder Alphaquark",
    avatar: Avatar7,
  },
  {
    id: 8,
    content:"I had a fantastic experience working with Futurebits. From the initial consultation to the final launch, their team was professional, creative, and incredibly responsive. They took the time to understand my vision and transformed it into a beautiful, user-friendly website that truly represented my art brand.What impressed me most was their attention to detail, timely delivery, and willingness to go the extra mile to ensure I was completely satisfied.Highly recommended!",
    rating: 5,
    author: "Anita Rajwade",
    position: "Artist",
    avatar: Avatar8,
  },
];

// Star rating component - enhanced to match design
const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F0C419] text-[28px]">
          <Image
            src={star}
            alt="Star"
            className=" w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
          />
        </span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative z-0 flex w-full h-[450px] sm:min-h-[550px] sm:w-[400px] lg:w-[580px] lg:min-h-[550px] xl:w-[750px] 2xl:w-[900px] px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="absolute tcard-gradient left-[40px] sm:left-[80px] w-[80%] h-[2px]"></div>

      <div className="z-20 flex flex-col justify-between overflow-visible w-full px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 bg-gradient-to-b from-[#01B0EA]/10 to-[#060618] rounded-[32px]">
        <p className="text-white/90 text-[14px] sm:text-[14px] sm:leading-[26px] lg:text-[16px] lg:leading-[28px]  xl:text-[18px]  xl:leading-[32px] font-normal  sm:mb-10 lg:mb-6 z-0  mb-6 break-words">
          {testimonial.content}
        </p>

        <div className="flex w-full items-center justify-between mt-2 lg:mt-4">
          <div className="mt-auto flex flex-col items-start space-y-3 sm:space-y-4">
            <StarRating rating={testimonial.rating} />

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="object-cover rounded-full w-full h-full"
                />
              </div>
              <div className="flex flex-col items-start">
                <h4 className="text-white text-sm lg:text-[16px] xl:text-lg">
                  {testimonial.author}
                </h4>
                <p className="text-white/50 text-[12px] lg:text-[11px] xl:text-[13px]  lg:max-w-full xl:max-w-[380px]">
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
          <Image
            src={quote}
            alt="Quote"
            className="sm:block hidden  w-[50px] h-[50px] sm:h-[60px] sm:w-[60px] lg:w-[60px] lg:h-[60px] xl:w-[60px] xl:h-[60px] "
          />
        </div>
      </div>
    </div>
  );
};

const slides = [
  {
    content: (
      <TestimonialCard
        key={`${testimonials[0].id}`}
        testimonial={testimonials[0]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[1].id}`}
        testimonial={testimonials[1]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[2].id}`}
        testimonial={testimonials[2]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[3].id}`}
        testimonial={testimonials[3]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[4].id}`}
        testimonial={testimonials[4]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[5].id}`}
        testimonial={testimonials[5]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[6].id}`}
        testimonial={testimonials[6]}
      />
    ),
  },
  {
    content: (
      <TestimonialCard
        key={`${testimonials[7].id}`}
        testimonial={testimonials[7]}
      />
    ),
  },
];

// Main testimonials carousel component
export default function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  // Function to handle diamond click and navigate to the clicked slide
  const handleDiamondClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <section ref={sectionRef} className="relative pb-16 lg:py-24 lg:pb-24  ">
      <div className="w-full px-4 relative z-0">
        <div className="relative w-fit mx-auto text-center">
          <Image
            src={navbarDiamond}
            width={32}
            height={32}
            alt=""
            className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -right-[40px]"
          />
          <Image
            src={navbarDiamond}
            width={32}
            height={32}
            alt=""
            className="w-8 h-8 absolute top-1/2 -translate-y-1/2 -left-[40px]"
          />
          <div
            className="max-w-[62px] sm:max-w-[150px] absolute top-1/2 -right-[90px] sm:-right-[150px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(-90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
            }}
          ></div>
          <div
            className="max-w-[62px] sm:max-w-[150px] absolute top-1/2 -left-[90px] sm:-left-[150px] bg-white opacity-20 w-full h-[2px] -translate-y-1/2"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 1) 47.22%)",
            }}
          ></div>
          <AnimatedShinyText
            className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-[#01B0EA]"
            shimmerWidth={150}
          >
            Testimonials
          </AnimatedShinyText>
        </div>

        <h2 className="fb-h2 text-[30px] mt-2 sm:text-[38px] sm:leading-[60px] text-center sm:mt-6">
          What people say about us
        </h2>

        {/* Particles Container - Limited to top half */}
        <div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden z-10 pointer-events-none">
          <Particles
            quantity={16}
            ease={200}
            refresh
            size={0.1}
            staticity={100}
            className="hidden sm:block w-full h-full"
          />

          <Particles
            quantity={10}
            ease={200}
            refresh
            size={0.1}
            staticity={100}
            className="sm:hidden w-full h-full"
          />
        </div>

        <div className="relative w-full h-full items-center mx-auto">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={120}
            slidesPerView={2}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000 }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="w-full h-full flex"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 0 },
              520: { slidesPerView: 2, spaceBetween: 30 },
              1020: { slidesPerView: 2, spaceBetween: 30 },
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className={`${
                  index === activeIndex
                    ? "sm:my-20 lg:my-20 opacity-100"
                    : "opacity-70"
                } my-16 relative transition-opacity duration-300 ease-linear 0 flex items-center justify-center`}
              >
                {index === activeIndex && (
                  <div className="bg-[#01B0EA] left-[35%] top-[50px] sm:left-[45%] sm:top-[50px] w-[60px] h-[60px] sm:h-[100px] sm:w-[100px] absolute rounded-full blur-[70px] sm:blur-[90px] lg:blur-[100px] z-0"></div>
                )}
                {slide.content}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex items-center w-full absolute bottom-[30px] sm:bottom-[40px] lg:bottom-[40px] justify-center gap-5 z-40">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDiamondClick(index)}
                className={`rotate-45 transition-all duration-300 cursor-pointer hover:scale-125 ${
                  index === activeIndex
                    ? "h-[8px] w-[8px] sm:w-[10px] sm:h-[10px] bg-[#D9D9D9] scale-[1.02]"
                    : "h-[7px] w-[7px] sm:w-[9.5px] sm:h-[9.5px] bg-[#D9D9D9]/20"
                }`}
                role="button"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`${
                    index === activeIndex
                      ? "absolute blur-[5px] bg-[#ffffff]"
                      : ""
                  } h-[8px] w-[8px]  sm:w-[10px] sm:h-[10px]`}
                ></span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-[20px] sm:mt-[20px] w-full flex justify-center items-center">
          <Link
            href="https://cal.com/futurebits/design?duration=30"
            target="_blank"
          >
            <BeamButton title="Book a 30-min product call" />
          </Link>
        </div>
      </div>
    </section>
  );
}
