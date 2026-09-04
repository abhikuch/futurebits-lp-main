"use client";

import BenefitsSection from "@/components/market/Benefits";
import FooterCTA from "@/components/market/FooterCTA";
import Hero from "@/components/market/Hero";
import OurSolutions from "@/components/market/OurSolutions";
import SupportedBroker from "@/components/market/SupportedBroker";
import WhyUs from "@/components/market/WhyUs";
import SiteFooter from "@/components/shared/SiteFooter";
import TestimonialSection from "@/components/shared/TestimonialSection";
import TopNavbar from "@/components/shared/TopNavbar";
import MarketingButton from "@/components/ui/marketing-button";
import logo from "@/assets/logo.svg";
import POVStrip from "@/components/shared/POVStrip";
import EngagementModels from "@/components/shared/EngagementModels";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import FAQSection from "@/components/shared/FAQSection";
import ProofBand from "@/components/shared/ProofBand";
import { CAL } from "@/config/site";

const MarketPage = () => {
  return (
    <div className="bg-[#080808] ">
      <main id="main-content" className="relative bg-[#080808]">
        <TopNavbar />
        <Hero />
      </main>
      <ProofBand vertical="markets" ctaHref={CAL.markets} ctaLabel="Book a call" />
      <FeaturedServiceLinks
        title="Markets services teams hire us for"
        viewAllHref="/services/markets-trading"
        services={[
          { categorySlug: "markets-trading", serviceSlug: "strategy-backtesting" },
          { categorySlug: "markets-trading", serviceSlug: "live-trading-execution-systems" },
          { categorySlug: "markets-trading", serviceSlug: "trading-system-audits-consulting" },
          { categorySlug: "markets-trading", serviceSlug: "real-time-pnl-exposure-monitoring" },
          { categorySlug: "markets-trading", serviceSlug: "trade-analytics-reporting" },
          { categorySlug: "markets-trading", serviceSlug: "forward-testing-shadow-mode" },
        ]}
      />
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
        <TestimonialSection
          theme="markets"
          cta={
            <a href={CAL.markets} target="_blank" rel="noopener noreferrer">
              <MarketingButton
                tone="markets"
                size="lg"
                className="text-base sm:text-[20px]"
              >
                Book a call
              </MarketingButton>
            </a>
          }
        />
      </div>
      <div className="fb-section">
        <BenefitsSection />
      </div>

      <EngagementModels ctaHref={CAL.markets} ctaLabel="Book a call" />

      <FAQSection vertical="markets" />

      <div className="fb-section">
        <FooterCTA />
      </div>
      <SiteFooter logo={logo} backgroundClassName="bg-transparent" />
    </div>
  );
};

export default MarketPage;
