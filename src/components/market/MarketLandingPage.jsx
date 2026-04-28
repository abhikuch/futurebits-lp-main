"use client";

import Navbar from "@/components/market/Navbar";
import BenefitsSection from "@/components/market/Benefits";
import Footer from "@/components/market/Footer";
import FooterCTA from "@/components/market/FooterCTA";
import Hero from "@/components/market/Hero";
import OurSolutions from "@/components/market/OurSolutions";
import SupportedBroker from "@/components/market/SupportedBroker";
import WhyUs from "@/components/market/WhyUs";
import Testimonials from "@/components/market/Testimonials";
import POVStrip from "@/components/shared/POVStrip";
import EngagementModels from "@/components/shared/EngagementModels";
import FAQSection from "@/components/shared/FAQSection";
import ProofBand from "@/components/shared/ProofBand";
import { CAL } from "@/config/site";

const MarketPage = () => {
  return (
    <div className="bg-[#080808] ">
      <main id="main-content" className="relative bg-[#080808]">
        <Navbar />
        <Hero />
      </main>
      <ProofBand vertical="markets" ctaHref={CAL.markets} ctaLabel="Book a call" />
      <div className="fb-section">
        <OurSolutions />
      </div>
      <div className="fb-section">
        <SupportedBroker />
      </div>
      <div className="fb-section">
        <WhyUs />
      </div>

      <POVStrip vertical="markets" accent="#01B0EA" />

      <div className="fb-section">
        <Testimonials />
      </div>
      <div className="fb-section">
        <BenefitsSection />
      </div>

      <EngagementModels ctaHref={CAL.markets} ctaLabel="Book a call" />

      <FAQSection vertical="markets" />

      <div className="fb-section">
        <FooterCTA />
      </div>
      <Footer />
    </div>
  );
};

export default MarketPage;
