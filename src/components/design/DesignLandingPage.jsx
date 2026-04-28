"use client";

import Image from "next/image";
import Particles from "@/components/ui/particles";
import { motion } from "framer-motion";
import ImgHero from "@/assets/design/light.webp";
import Hero from "@/components/design/hero";
import PortfolioWrapper from "@/components/design/portfolio-wrapper";
import Offering from "@/components/design/offering";
import Benefits from "@/components/design/benefits";
import IntroSection from "@/components/design/intro-section";
import Footer from "@/components/design/Footer";
import TestimonialsCarousel from "@/components/design/TestimonialCarousel";
import POVStrip from "@/components/shared/POVStrip";
import EngagementModels from "@/components/shared/EngagementModels";
import FAQSection from "@/components/shared/FAQSection";
import ProofBand from "@/components/shared/ProofBand";
import { CAL } from "@/config/site";
import LazyMount from "@/components/ui/lazy-mount";

export default function DesignPage() {
  return (
    <section className="w-full bg-[#08081E]">
      <main
        id="main-content"
        className="w-full px-0 sm:px-10  relative md:px-0 flex justify-center"
      >
        <div className="absolute !z-20 w-[300px] top-[60px] sm:w-[500px] sm:top-[60px] lg:w-[800px] mx-auto h-[200px]">
          <LazyMount fallbackClassName="h-[200px] w-full">
            <Particles
              quantity={15}
              ease={80}
              vx={0.1}
              vy={0.2}
              refresh
              size={0.4}
              className="!z-40 hidden sm:block inset-0"
            />
            <Particles
              quantity={15}
              ease={80}
              vx={0.1}
              vy={0.2}
              refresh
              size={0.1}
              className="!z-40 block sm:hidden inset-0"
            />
          </LazyMount>
        </div>

        <div className="max-w-[1000px] w-full absolute -top-8 left-1/2 transform -translate-x-1/2 h-full">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute top-[85px] sm:top-[70px] xl:top-[75px] left-0 z-[5] w-full h-full"
          >
            <Image
              src={ImgHero.src}
              width={1000}
              height={1000}
              alt=""
              aria-hidden="true"
              className="z-0 w-full"
              priority
            />
          </motion.div>
        </div>
        <div className="z-10 w-full">
          <Hero />
        </div>
      </main>
      <ProofBand vertical="design" ctaHref={CAL.design} ctaLabel="Book a call" />

      <div className="w-full fb-section">
        <PortfolioWrapper />
      </div>

      <div className="w-full py-20 fb-section">
        <Offering />
      </div>

      <div className="w-full py-8 sm:py-10 px-8 sm:px-20 fb-section">
        <Benefits />
      </div>

      <POVStrip vertical="design" accent="#01B0EA" />

      <div className="w-full py-8 sm:py-10 fb-section">
        <TestimonialsCarousel />
      </div>

      <EngagementModels ctaHref={CAL.design} ctaLabel="Book a call" />

      <FAQSection vertical="design" />

      <div className="fb-section">
        <IntroSection />
      </div>

      <Footer />
    </section>
  );
}
