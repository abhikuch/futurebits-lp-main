import dynamic from "next/dynamic";

import logo from "@/assets/logo.svg";
import Hero from "@/components/market/Hero";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import ProofBand from "@/components/shared/ProofBand";
import SiteFooter from "@/components/shared/SiteFooter";
import TestimonialSection from "@/components/shared/TestimonialSection";
import TopNavbar from "@/components/shared/TopNavbar";
import MarketingButton from "@/components/ui/marketing-button";
import { CAL } from "@/config/site";

const OurSolutions = dynamic(() => import("@/components/market/OurSolutions"), {
  loading: () => <div className="min-h-[24rem] w-full" aria-hidden />,
});
const SupportedBroker = dynamic(
  () => import("@/components/market/SupportedBroker"),
  { loading: () => <div className="min-h-[16rem] w-full" aria-hidden /> }
);
const WhyUs = dynamic(() => import("@/components/market/WhyUs"), {
  loading: () => <div className="min-h-[20rem] w-full" aria-hidden />,
});
const POVStrip = dynamic(() => import("@/components/shared/POVStrip"), {
  loading: () => <div className="min-h-[8rem] w-full" aria-hidden />,
});
const BenefitsSection = dynamic(() => import("@/components/market/Benefits"), {
  loading: () => <div className="min-h-[18rem] w-full" aria-hidden />,
});
const EngagementModels = dynamic(
  () => import("@/components/shared/EngagementModels"),
  { loading: () => <div className="min-h-[18rem] w-full" aria-hidden /> }
);
const FAQSection = dynamic(() => import("@/components/shared/FAQSection"), {
  loading: () => <div className="min-h-[16rem] w-full" aria-hidden />,
});
const FooterCTA = dynamic(() => import("@/components/market/FooterCTA"), {
  loading: () => <div className="min-h-[12rem] w-full" aria-hidden />,
});

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
