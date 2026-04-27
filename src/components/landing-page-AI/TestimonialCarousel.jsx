"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import quote from "@/assets/landing-page-AI/quote.svg";
import star from "@/assets/design/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import stars from "@/assets/landing-page-AI/stars.webp";
import Particles from "../ui/particles";
import circle from "@/assets/landing-page-AI/circle.webp";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import Avatar1 from "@/assets/avatar_1.webp";
import Avatar2 from "@/assets/avatar_2.webp";
import Avatar3 from "@/assets/avatar_3.webp";
import Avatar4 from "@/assets/avatar_4.webp";
 

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

// Single testimonial card component - updated styling to match design
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="relative flex w-full h-[450px] sm:min-h-[550px] sm:w-[400px] lg:w-[580px] lg:min-h-[550px] xl:w-[750px] 2xl:w-[900px] px-4 sm:px-6 lg:px-8 xl:px-10">
      <div className="absolute tcard-gradient left-[40px] sm:left-[80px]  w-[80%]  h-[2px]"></div>

      <div className="z-20 flex flex-col justify-between overflow-visible w-full px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12 relative bg-gradient-to-b from-[#01B0EA]/10 to-[#060618] rounded-[32px]">
        <p className=" text-white/90 text-[14px] sm:text-[14px] sm:leading-[26px] lg:text-[16px] lg:leading-[28px]  xl:text-[18px]  xl:leading-[32px] font-normal  sm:mb-10 lg:mb-6 z-50  mb-6 break-words">
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
            className="sm:block hidden w-[50px] h-[50px] sm:h-[60px] sm:w-[60px] lg:w-[50px] lg:h-[50px] xl:w-[60px] xl:h-[60px] "
          />
        </div>
      </div>
    </div>
  );
};

const slides = testimonials.map((testimonial) => ({
  content: <TestimonialCard key={testimonial.id} testimonial={testimonial} />,
}));

// Main testimonials carousel component
export default function TestimonialsCarousel() {
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
    <section className="relative py-24 dark-background ">
      {/* Top left gradient blob */}
      <div className="absolute top-[200px] w-[150px] h-[150px] left-[-50px] sm:top-[0px] sm:left-[-100px] sm:w-[400px] sm:h-[400px] z-0 bg-[#2E2688] blur-[150px] sm:blur-[250px]  rounded-full"></div>

      {/* Top left rotating circle */}
      <div className="absolute -top-[20px] z-20 opacity-30 left-[-55px]  w-[105px] h-[105px] sm:left-[-210px]   sm:w-[350px] sm:h-[350px]">
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

      <div className="w-full  px-4 sm:px-0 relative z-10  overflow-hidden">
        <div className="flex items-center relative w-fit mx-auto  text-center">
          <AnimatedShinyText
            className="uppercase text-base sm:text-lg font-semibold tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-[#01B0EA] to-[#2E2688]"
            shimmerWidth={150}
          >
            Testimonials
          </AnimatedShinyText>
          <Image src={stars} className="w-[30px] h-[30px] " alt="star" />
        </div>

        <h2 className="fb-h2 text-[20px] sm:text-[38px] sm:leading-[60px] text-center mt-[2px]">
          What people say about us
        </h2>

        <div className="flex w-full justify-center items-center ">
          <div className="relative w-full h-full items-center  mx-auto ">
            <Swiper
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              spaceBetween={80}
              slidesPerView={2}
              loop={true}
              centeredSlides={true}
              autoplay={{ delay: 5000 }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className=" w-full h-full flex  "
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
                  }  my-10 relative transition-opacity  duration-300 ease-linear 0 flex items-center justify-center`}
                >
                  {slide.content}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center w-full absolute bottom-[10px] sm:bottom-[40px] lg:bottom-[40px] justify-center mt-4 gap-5 z-40">
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

        <Particles
          quantity={15}
          ease={200}
          refresh
          size={0.3}
          staticity={100}
          className="!z-10 absolute top-0 left-0 w-full h-full"
        />

      </div>
    </section>
  );
}
