"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import ShimerButton from "./ShimerButton";
import "swiper/css";
import "swiper/css/pagination";
// Import placeholder images - replace with your actual paths
import humanMachineIcon from "@/assets/market/human-machine-icon.webp";
import automationIcon from "@/assets/market/automation-icon.webp";
import partnershipIcon from "@/assets/market/partnership-icon.webp";

import futurebitsLogo from "@/assets/market/futurebits-logo.webp";

import Link from "next/link";

const FeatureCircle = ({ title, description, icon, position, isActive }) => {
  // Position classes with explicit dimensions and more specific positioning for desktop
  const positionClasses = {
    left: "lg:absolute lg:left-16 lg:-bottom-[10%] lg:transform lg:-translate-x-1/2",
    bottom:
      "lg:absolute lg:-bottom-[5%] lg:left-[50%] xl:bottom-[-8%] lg:transform lg:-translate-x-1/2 lg:translate-y-1/2",
    right:
      "lg:absolute lg:right-16 lg:-bottom-[40%] xl:bottom-[-32%] lg:transform lg:translate-x-1/2 lg:-translate-y-1/2",
  };

  return (
    <div
      className={`${
        positionClasses[position]
      } w-full mx-auto sm:max-w-[350px]  lg:w-[300px] xl:w-[360px] mb-16 lg:mb-0 ${
        isActive ? "opacity-100" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Circular image with proper gradient border on hover */}
        <div className="relative w-32 h-32 lg:w-[180px] lg:h-[180px] mb-8 lg:mb-[24px] rounded-full flex items-center justify-center overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out group">
          {/* Gradient border that shows on hover */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "transparent",
              padding: "1px",
            }}
          ></div>

          <div>
            <Image
              src={icon}
              alt={`${title} illustration`}
              width={160}
              height={160}
              className="w-full h-full object-contain p-2 relative z-10 sm:w-[160px] sm:h-[160px]"
              priority
            />
          </div>
        </div>

        {/* Title and description */}
        <div>
          <h3 className="fb-h3 text-xl mb-4">{title}</h3>
          <p className="px-[0px]  text-[#FFFFFF80] text-base leading-[26px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
const WhyUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const swiperRef = useRef(null);

  const handleDiamondClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      // Slide to the specific index
      swiperRef.current.swiper.slideTo(index); // +1 because of loop mode
      setActiveIndex(index);
    }
  };

  const features = [
    {
      id: 1,
      title: "Quant judgement + clean infra",
      description:
        "We don't ship strategies you don't understand. The system explains itself before it executes.",
      icon: humanMachineIcon,
      position: "left",
    },
    {
      id: 2,
      title: "Asset-class agnostic",
      description:
        "From Indian equities to crypto perps, the same engineering bar: order safety, observability, recovery.",
      icon: automationIcon,
      position: "bottom",
    },
    {
      id: 3,
      title: "Broker-grade reliability",
      description:
        "We integrate against the venues you actually trade. SLAs, sandboxing, and failure-mode testing are non-negotiable.",
      icon: partnershipIcon,
      position: "right",
    },
  ];

  const slides = features.map((feature) => ({
    content: (
      <FeatureCircle
        key={feature.id}
        title={feature.title}
        description={feature.description}
        icon={feature.icon}
        position={feature.position}
      />
    ),
  }));

  return (
    <section
      className="py-16 sm:mb-20 mb-0 relative font-poppins overflow-hidden h-full"
      ref={sectionRef}
    >
      {/* Background effects */}
      <div
        className="xl:block hidden absolute xl:left-[-20%] top-[0%] 2xl:left-0 -translate-y-1/2 w-[250px] sm:w-[410px] h-[30px] sm:h-[65px] z-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(45deg) translateX(60%)",
        }}
      ></div>

      <div
        className="xl:block hidden absolute right-[-15%] xl:right-[-10%] 2xl:right-0 top-[0%] -translate-y-1/2 w-[250px] lg:w-[340px] xl:w-[360px] h-[30px] xl:h-[65px] z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)",
          filter: "blur(32px)",
          transform: "rotate(-45deg) translateX(-60%)",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 lg:-mt-60 xl:-mt-60">
        {/* Section header for mobile and tablet - FIXED: Changed from sm:hidden to lg:hidden */}
        <div
          className="lg:hidden block text-center mb-2 sm:mb-6"
          >
          <div className="inline-flex items-center justify-center mb-0 sm:mb-4">
            <p className="fb-kicker text-[#7BC3D8]">How we think</p>
          </div>
          <h2 className="fb-h2 text-[26px] md:text-[38px] md:leading-[60px]">
            Three commitments we don&apos;t break
          </h2>
        </div>

        {/* Mobile and tablet view - carousel - FIXED: Changed from lg:hidden to lg:hidden */}
        <div className="block pt-[10px] lg:hidden px-4 overflow-hidden">
          

          {/* Carousel for features on mobile and tablet */}
          <div
            className="relative w-full h-full items-center mx-auto z-20"
          >
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full h-full  flex items-center justify-center"
              
            >
              {features.map((feature, index) => (
                <SwiperSlide
                  key={index}
                  className={`${
                    index === activeIndex ? "opacity-100" : "opacity-70"
                  } my-10 relative transition-opacity duration-300 ease-linear flex items-center justify-center`}
                >
                  {index === activeIndex && (
                    <div className="left-[35%] top-[10px] h-[120px] w-[120px] absolute rounded-full blur-[90px] z-50"></div>
                  )}
                  <FeatureCircle
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    position={feature.position}
                    isActive={index === activeIndex}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination indicators */}
            <div className="flex items-center w-full absolute bottom-[40px] justify-center mt-4 gap-5 z-50">
              {features.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDiamondClick(index)}
                  className={`rotate-45 transition-all duration-300 ${
                    index === activeIndex
                      ? "w-[10px] h-[10px] bg-[#D9D9D9] scale-[1.02]"
                      : "w-[9.5px] h-[9.5px] bg-[#D9D9D9]/20"
                  }`}
                >
                  <span
                    className={`${
                      index === activeIndex
                        ? "absolute blur-[5px] bg-[#ffffff]"
                        : ""
                    } w-[10px] h-[10px]`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop view - circular layout */}
        <div className="hidden lg:flex justify-center items-center mb-20  xl:mb-0  pt-0 pb-20 lg:h-[1000px] xl:h-[1200px]">
          
           {/* Section header moved inside the inner circle - desktop only */}
           <div
                className="absolute top-[18%] xl:top-[19%] left-0 text-center z-50 w-full px-8"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <p className="fb-kicker text-[#7BC3D8]">How we think</p>
                </div>
                <h2 className="fb-h2 text-3xl md:text-5xl">
                  Three commitments we don&apos;t break
                </h2>
              </div>
          
          {/* Outer circle - updated to conic gradient that shows only at the bottom */}
          <div
            className="relative lg:-mt-[130px] xl:-mt-[180px] w-[700px] h-[700px] xl:h-[800px] xl:w-[800px] rounded-full"
            style={{
              background:
                "linear-gradient(90.4deg, rgba(6, 6, 24, 0.3) 0.3%, rgba(255, 255, 255, 0.3) 10.44%, rgba(255, 255, 255, 0.24) 30.73%, rgba(255, 255, 255, 0.3) 51.02%, rgba(255, 255, 255, 0.24) 71.31%, rgba(255, 255, 255, 0.18) 91.59%, rgba(6, 6, 24, 0.3) 101.74%)",
              boxShadow: "0 0 0 1px transparent",
              border: "1px solid",
              borderColor: "transparent",
              backgroundImage:
                "linear-gradient(#080808, #080808), conic-gradient(from 360deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            {/* Inner circle with similar approach but different size */}
            <div
              className="absolute top-[47%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] xl:h-[650px] xl:w-[650px] rounded-full"
              style={{
                background:
                  "linear-gradient(90.4deg, rgba(6, 6, 24, 0.3) 0.3%, rgba(255, 255, 255, 0.3) 10.44%, rgba(255, 255, 255, 0.24) 30.73%, rgba(255, 255, 255, 0.3) 51.02%, rgba(255, 255, 255, 0.24) 71.31%, rgba(255, 255, 255, 0.18) 91.59%, rgba(6, 6, 24, 0.3) 101.74%)",
                boxShadow: "0 0 0 1px transparent",
                border: "1px solid",
                borderColor: "transparent",
                backgroundImage:
                  "linear-gradient(#080808, #080808), conic-gradient(from 366deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
             
            </div>

            {/* Central Logo - with updated conic gradient border */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {/* Logo background with conic gradient border */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full z-20"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6, 6, 24, 0.05) 60%, rgba(255, 255, 255, 0.1) 100%)",
                  backdropFilter: "blur(42px)",
                  border: "1px solid",
                  borderColor: "transparent",
                  backgroundImage:
                    "linear-gradient(), conic-gradient(from 360deg at 50% 50%, #060618 0%, #060618 25%, rgba(6, 6, 24, 0.3) 30%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.24) 45%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.24) 55%, rgba(255, 255, 255, 0.18) 60%, rgba(6, 6, 24, 0.3) 65%, #060618 70%, #060618 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              ></div>

              {/* Logo container with highest z-index */}
              <div
                className="relative w-[400px] h-[400px] rounded-full flex items-center justify-center z-30"
              >
                <Image
                  src={futurebitsLogo || "/placeholder.svg"}
                  alt="FUTUREBITS TECHNOLOGY"
                  width={228}
                  height={200}
                  className="object-contain p-4 z-40"
                  priority
                />
              </div>
            </div>

            {/* Features arranged in a circular pattern */}
            {features.map((feature) => (
              <FeatureCircle
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                position={feature.position}
              />
            ))}
          </div>
        </div>

        {/* Button positioned correctly for both mobile and desktop */}
        <Link
          href="https://cal.com/futurebits/markets?duration=30"
          target="_blank"
          className=" "
        >
          <div
            className="flex justify-center items-center mt-[20px]"
          >
            <div className="relative ">
              <ShimerButton size="lg" href="/book-call" className="text-[20px]">
                Book a call
              </ShimerButton>
            </div>
          </div>
        </Link>
      </div>
    </section>
  ); 
};

export default WhyUs;