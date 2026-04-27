"use client";

import Footer from "./Footer";
import Hero from "./Hero";
import ServicesSection from "./services";
import ProjectsSection from "./ProjectSection";
import Feature from "./Feature";
import AboutMe from "./AboutMe";
import TestimonialsCarousel from "./TestimonialCarousel";
import EngagementModels from "@/components/shared/EngagementModels";
import FAQSection from "@/components/shared/FAQSection";
import ProofBand from "@/components/shared/ProofBand";
import { CAL } from "@/config/site";

export default function LandingPageAI() {
  return (
    <div className="bg-[#060719]" id="ai">
      <main id="main-content" className="bg-[#000000] ">
        <Hero />
      </main>
      <ProofBand vertical="ai" />
      <div className="fb-section">
        <ServicesSection />
      </div>
      <div className="fb-section">
        <ProjectsSection />
      </div>

      <div className="fb-section">
        <TestimonialsCarousel />
      </div>

      <EngagementModels ctaHref={CAL.ai} ctaLabel="Book a 30-min AI working call" />

      <FAQSection vertical="ai" />

      <div className="fb-section">
        <AboutMe />
      </div>
      <div className="fb-section">
        <Feature />
      </div>
      <Footer />
    </div>
  );
}
