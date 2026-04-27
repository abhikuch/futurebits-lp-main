"use client";

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ShimerButton from "./ShimerButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Avatar1 from "@/assets/avatar_1.webp";
import Avatar2 from "@/assets/avatar_2.webp";
import Avatar3 from "@/assets/avatar_3.webp";
import Avatar4 from "@/assets/avatar_4.webp";
import Avatar5 from "@/assets/avatar_5.webp";
import Avatar6 from "@/assets/avatar_6.webp";
import Avatar7 from "@/assets/avatar_7.webp";
import Avatar8 from "@/assets/avatar_8.webp";
import Link from "next/link";
// Import framer-motion
import { motion } from "framer-motion";

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

// Animation variants for card animations from down to up
const cardAnimationVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Star rating component - simplified without animations
const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-[#F0C419] text-[28px]">
          <Image
            src={star}
            alt="Quote"
            className=" w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]"
          />
        </span>
      ))}
    </div>
  );
};

// Single testimonial card component - updated with down-to-up animation
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative flex w-full h-[450px] sm:min-h-[550px] sm:w-[400px] lg:w-[580px] lg:min-h-[550px] xl:w-[750px] 2xl:w-[900px] px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="absolute tcard-gradient-market left-[40px] sm:left-[80px]  w-[80%]  h-[2px]"></div>

      <div
        className="z-20 flex flex-col justify-between overflow-visible w-full px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 rounded-[32px]"
        style={{
          background:
            "linear-gradient(360deg, rgba(6, 6, 24, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)",
        }}
      >
        <p className="text-white/90 text-[14px] sm:text-[14px] sm:leading-[26px] lg:text-[16px] lg:leading-[28px]  xl:text-[18px]  xl:leading-[32px] font-normal  sm:mb-10 lg:mb-6 z-50  mb-6 break-words">
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
            className="sm:block hidden w-[50px] h-[50px] sm:h-[60px] sm:w-[60px] lg:w-[60px] lg:h-[60px] xl:w-[60px] xl:h-[60px] "
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
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // Function to handle diamond click
  const handleDiamondClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Slide to the specific index
      swiperRef.current.swiper.slideToLoop(index); // +1 because of loop mode
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative md:py-0 lg:py-24 overflow-hidden mx-auto">
      {/* Keep these divs unchanged as they have transform styles */}
      <div
        className="xl:block hidden absolute left-[-14%] 2xl:left-0  top-[5%]  w-[400px] h-[45px] "
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(40deg) translateX(60%)",
        }}
      ></div>

      {/* Right glowing vector effect as shown in image */}
      <div
        className="xl:block hidden absolute lg:right-[-22%] xl:right-[-14%] 2xl:right-[10%] -top-[-8%]  w-[400px] h-[45px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-40deg) translateX(-60%)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[0%] right-0 w-[200px] md:w-[400px]  h-[200px] md:h-[400px] opacity-100 rounded-full z-0 bg-[#2670881A]"
        style={{
          filter: "blur(90px)",
        }}
      ></div>
      <div
        className="xl:block hidden absolute top-[0%] left-0 w-[200px] md:w-[400px] h-[300px] md:h-[400px] opacity-100 rounded-full z-0"
        style={{
          filter: "blur(90px)",
          background: "#2670881A",
        }}
      ></div>

      <div className="w-full px-4 relative z-10">
        <div className="relative w-fit mx-auto text-center">
          <span className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF]/60 to-[#999999]/60">
            TESTIMONIALS
          </span>
        </div>

        <h2 className="fb-h2 text-[26px] sm:text-[38px] sm:leading-[60px] text-center mt-6">
          What people say about us
        </h2>

        <div className="flex w-full justify-center items-center z-20">
          <div className="relative w-full h-full items-center mx-auto z-20">
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
                0: { slidesPerView: 1, spaceBetween: 0 }, // 1 slide for mobile
                520: { slidesPerView: 2, spaceBetween: 30 }, // 2 slides for tablets & desktops
                1020: { slidesPerView: 2, spaceBetween: 30 }, // 2 slides for tablets & desktops
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide
                  key={index}
                  className={`${
                    index === activeIndex
                      ? "sm:my-20 lg:my-20 opacity-100"
                      : " opacity-70"
                  }  my-10 relative transition-opacity duration-300 ease-linear 0 flex items-center justify-center`}
                >
                  {index === activeIndex && (
                    <div className="left-[35%] top-[10px] sm:left-[45%] sm:-top-[40px] h-[120px] w-[120px] absolute rounded-full blur-[90px] sm:blur-[90px] lg:blur-[80px] z-50"></div>
                  )}
                  {slide.content}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center w-full absolute bottom-[30px] sm:bottom-[-40px] lg:bottom-[40px] justify-center mt-4 gap-5 z-50">
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
        </div>

        {/* CTA Button */}
        <Link
          href="https://cal.com/futurebits/markets?duration=30"
          target="_blank"
          className=""
        >
          <div className="flex justify-center items-center mt-[20px] sm:mt-[80px] lg:mt-[20px]">
            <div className="relative">
              <ShimerButton size="lg" href="/book-call" className="text-[20px]">
                Book a 30-min markets call
              </ShimerButton>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
