"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import POne from "@/assets/design/profile1.png";
import PTwo from "@/assets/design/profile2.png";
import PThree from "@/assets/design/profile3.png";
import PFour from "@/assets/design/profile4.png";
import PFive from "@/assets/design/profile5.png";
import PSix from "@/assets/design/profile6.png";
import StarImg from "@/assets/design/star.svg";
import { ChevronRightIcon } from "lucide-react";
import BeamButton from "./BeamButton";
import DesignNavbar from "./DesignNavbar";
import { CAL, SOCIAL } from "@/config/site";

const PrfolieLists = [
  { img: POne, alt: "" },
  { img: PTwo, alt: "" },
  { img: PThree, alt: "" },
  { img: PFour, alt: "" },
  { img: PFive, alt: "" },
  { img: PSix, alt: "" },
];

const Hero = () => {
  return (
    <section className="z-10 mx-auto flex min-h-screen w-full flex-col gap-5">
      <DesignNavbar />

      <div className="mx-auto mt-[96px] w-full max-w-[1250px] px-4 sm:px-8 lg:mt-[140px]">
        <motion.div
          className=" flex w-full flex-col  sm:flex-row gap-4 items-center justify-center mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="flex items-center -space-x-4 "
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {PrfolieLists.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.05 * index + 0.1 }}
              >
                <Image
                  src={_.img}
                  alt={_.alt}
                  width={1000}
                  height={1000}
                  className={` w-[30px] sm:w-[35px] lg:w-[45px]  aspect-square rounded-full object-cover cursor-pointer`}
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-col gap-1 "
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="flex gap-1 items-center sm:justify-normal justify-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                  >
                    <Image src={StarImg} className="w-[18px] h-[18px] sm:w-[12px] sm:h-[12px] lg:w-[18px] lg:h-[18px]" alt="star" />
                  </motion.div>
                ))}
            </div>
            <p className="opacity-80  text-[13px] sm:text-[14px] lg:text-[18px] text-white font-poppins">
              Trusted by founders shipping 0→1 and 1→10 products.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <p className="mb-5 text-center">
            <span className="fb-kicker">Product design plus frontend delivery</span>
          </p>
          <h1 className="fb-hero-title mt-8 sm:mt-16 text-center xl:mt-8">
            Design that moves the metric — not just the deck.
          </h1>
        </motion.div>

        <motion.div
          className="mx-auto mt-6 w-full max-w-[650px] px-6 text-center sm:mt-16 lg:mt-16"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <span className="fb-hero-copy">
            We pair product design with frontend engineering in one small team.
            Onboarding, activation, upgrade — we ship the surfaces that move your
            numbers, in your repo, every week.
          </span>
        </motion.div>
      </div>

      <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      
      className="mt-8 flex flex-col justify-center gap-4 px-5 pb-12 sm:mt-8 sm:flex-row sm:px-0 xl:mt-5">
        <Link
          href={SOCIAL.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="fb-cta-secondary w-full sm:w-[240px] text-base sm:text-lg h-14 sm:h-[55px] px-7 font-semibold"
        >
          See selected work
          <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
        </Link>
        <Link href={CAL.design} target="_blank" rel="noopener noreferrer">
          <BeamButton title="Book a call" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;