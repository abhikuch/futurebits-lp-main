"use client"

import React from "react";
import Link from "next/link";
import navbarDiamond from "@/assets/design/navbar.svg";
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
  {
    img: POne,
    alt: "Profile 1",
  },
  {
    img: PTwo,
    alt: "Profile 2",
  },
  {
    img: PThree,
    alt: "Profile 3",
  },
  {
    img: PFour,
    alt: "Profile 4",
  },
  {
    img: PFive,
    alt: "Profile 5",
  },
  {
    img: PSix,
    alt: "Profile 6",
  },
];

const Hero = () => {
  return (
    <section className=" w-full flex flex-col z-10 mx-auto gap-5">
      <DesignNavbar />

      <div className="w-full mt-[80px] lg:mt-[180px] lg:max-w-[1250px] mx-auto">
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

        <div className="w-full xl:min-w-[1250px] relative">
          <motion.div
            className="w-full hidden sm:block left-0 absolute -top-[75px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
          </motion.div>
          <motion.div
            className="h-[480px] z-0 hidden animatedLine sm:block absolute -top-[110px] left-[60px] lg:left-[130px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          </motion.div>
          <motion.div
            className="w-full hidden sm:block left-0 absolute top-[20px] h-[2px] "
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
          </motion.div>
          <motion.div
            className="h-[480px] z-0 line animatedLine hidden sm:block absolute -top-[110px] left-[120px] lg:left-[210px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[5px] left-[105px] lg:left-[195px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[5px] right-[105px] lg:right-[195px]"
            />
          </motion.div>
          
          <motion.div
            className="h-[480px] z-0 animatedLine hidden sm:block absolute -top-[110px] right-[120px] lg:right-[210px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
          </motion.div>
          <motion.div
            className="w-full hidden sm:block  absolute -bottom-[220px] h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[202px] left-[105px] lg:left-[195px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.35 }}
            className="hidden sm:block"
          >
            <Image
              src={navbarDiamond}
              width={32}
              height={32}
              alt=""
              className="w-8 h-8 z-20 absolute top-[202px] right-[105px] lg:right-[195px]"
            />
          </motion.div>
          <motion.div
            className="h-[480px] z-0 hidden animatedLine sm:block absolute -top-[110px] right-[60px] lg:right-[130px] w-[2px] opacity-50"
            style={{
              background:
                "linear-gradient(180deg, #000000 0%, rgba(255, 255, 255, 0.4) 50%, #000000 100%)",
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
          </motion.div>
        </div>

        <motion.div
          className=""
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
          className="mt-2 sm:mt-20 px-[30px] sm:px-[30px] max-w-[650px] w-full mx-auto text-center xl:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <span className="fb-hero-copy">
            We pair product design with frontend engineering in one senior pod.
            Onboarding, activation, upgrade — we ship the surfaces that move your
            numbers, in your repo, every week.
          </span>
        </motion.div>
      </div>

      <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      
      className="flex flex-col mt-8 sm:mt-8 xl:mt-5 px-5 sm:px-0 sm:flex-row gap-4 justify-center">
        <Link
          href={SOCIAL.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="fb-cta-secondary w-full sm:w-[240px] text-[16px] sm:text-[18px]"
        >
          See selected work
          <ChevronRightIcon strokeWidth={3} className="h-4 w-4 ml-1" />
        </Link>
        <Link href={CAL.design} target="_blank" rel="noopener noreferrer">
          <BeamButton title="Book a 30-min product call" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;