"use client";
import Image from "next/image";

import circle from "@/assets/landing-page-AI/circle.webp";
import quote from "@/assets/landing-page-AI/quote.svg";
import AayushImg from "@/assets/landing-page-AI/aayush_kucheria.webp";
import AboutMeImg from "@/assets/landing-page-AI/about_me_mobile.webp";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const topCircleRef = useRef(null);
  const isTopCircleInView = useInView(topCircleRef, { once: true });
  
  const bottomCircleRef = useRef(null);
  const isBottomCircleInView = useInView(bottomCircleRef, { once: true });

  return (
    <section className="relative py-0 sm:py-28 h-[860px] lg:px-[80px]  sm:h-[1120px] lg:h-[880px] overflow-hidden">

      <div className="container h-[700px] sm:max-w-[700px] sm:h-[700px] lg:h-[480px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1200px] 3xl:max-w-[1400px] mx-auto px-4 relative z-20">
        <div 

          className="hidden lg:block">

          <div className="absolute right-[-20px] top-[-50px] transform  z-50 opacity-50 w-[110px] h-[110px]">
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

          <div className="absolute right-[-20px] top-[-50px] w-[110px] h-[110px] rounded-full  z-50 bg-[#2E2688] blur-[50px]"></div>
        </div>

        <div

          className="p-[1px] rounded-3xl w-full sm:w-[85%] sm:mx-auto lg:w-full relative z-10 h-full font-poppins"
          style={{
            background:
              "linear-gradient(106.97deg, #060618 6.84%, #2E2688 31.15%, #01B0EA 39.25%, #FFFFFF 47.35%, #FFFFFF 51.4%, #01B0EA 55.45%, #2E2688 63.56%, #060618 87.86%)",
          }}
        >
          <div className="bg-[#0D0D0D] rounded-3xl h-full flex flex-col lg:flex-row  overflow-hidden">
            <div className="w-full   lg:w-[40%] xl:w-[30%]">
              <div className=" w-full h-full">
                <Image
                  src={AayushImg}
                  alt="Aayush Kucheria"
                  className=" hidden lg:flex w-full h-full "
                />
                <Image
                  src={AboutMeImg}
                  alt="Aayush Kucheria"
                  className=" w-full h-[300px] sm:h-[350px] lg:hidden "
                />
              </div>
            </div>

            <div className="w-full h-full  lg:w-[60%] xl:w-[70%] font-montserrat flex flex-col justify-center px-[20px] sm:px-[40px] sm:py-[40px] lg:px-[40px]  space-y-6 lg:space-y-16  xl:pl-[70px] xl:pr-[80px] lg:py-[60px]">
              <div className=" flex flex-col space-y-6 text-[13px] lg:text-[14px] lg:leading-[24px] xl:text-[16px] leading-[22px] xl:leading-[30px] font-normal text-white/80 ">
                <p>
                  I lead AI at Futurebits. We build production systems —
                  retrieval, agents, evals — for ops, support, and product teams.
                  The work I&apos;m proudest of: LLM behavior research, AI in
                  healthcare, and applied modelling that actually shipped.
                </p>
                <p>
                  We take engagements where AI clearly pays back. If your
                  problem is better solved another way, we&apos;ll tell you on the
                  first call. No theatre.
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <span className="text-[18px] lg:text-[24px] font-semibold  leading-[22px] lg:leading-[30px] text-white">
                  - Aayush Kucheria
                </span>
                <span className="text-[12px] pl-[10px] max-w-[230px] sm:max-w-[300px] xl:max-w-full lg:text-[12px] xl:text-[14px] font-normal leading-[18px] lg:leading-[22px]  sm:pl-4  xl:leading-[30px] text-white/50">
                  AI Lead, Futurebits — production AI, evals, applied research.
                </span>
              </div>
            </div>

           
              <Image
                src={quote}
                alt="Quote"
                className="absolute right-4 bottom-8 sm:right-5 sm:bottom-5 lg:right-10 lg:bottom-10 rotate-[180deg] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]  "
                />
           
          </div>
        </div>
      </div>

      {/* bottom center gradient blob */}
      <div ref={bottomCircleRef} className="flex items-center justify-center w-full h-[400px] absolute bottom-0 left-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isBottomCircleInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="absolute bottom-[-120px] w-[200px] h-[200px] sm:bottom-[-210px] sm:w-[400px] sm:h-[400px] z-0 bg-[#2E2688] blur-[140px] rounded-full"
        ></motion.div>

        <div 
     
          className="absolute bottom-[-120px] w-[200px] h-[200px] z-20 opacity-70 sm:bottom-[-170px] sm:w-[300px] sm:h-[300px]"
        >
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
      </div>
    </section>
  );
};

export default AboutMe;