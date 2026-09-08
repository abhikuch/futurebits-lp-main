import dynamic from "next/dynamic";

import logo from "@/assets/logo.svg";
import Hero from "@/components/design/hero";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import ProofBand from "@/components/shared/ProofBand";
import SiteFooter from "@/components/shared/SiteFooter";
import TestimonialSection from "@/components/shared/TestimonialSection";
import MarketingButton from "@/components/ui/marketing-button";
import { CAL } from "@/config/site";

const PortfolioWrapper = dynamic(
  () => import("@/components/design/portfolio-wrapper"),
  { loading: () => <div className="min-h-[24rem] w-full" aria-hidden /> }
);
const Offering = dynamic(() => import("@/components/design/offering"), {
  loading: () => <div className="min-h-[24rem] w-full" aria-hidden />,
});
const Benefits = dynamic(() => import("@/components/design/benefits"), {
  loading: () => <div className="min-h-[18rem] w-full" aria-hidden />,
});
const POVStrip = dynamic(() => import("@/components/shared/POVStrip"), {
  loading: () => <div className="min-h-[8rem] w-full" aria-hidden />,
});
const EngagementModels = dynamic(
  () => import("@/components/shared/EngagementModels"),
  { loading: () => <div className="min-h-[18rem] w-full" aria-hidden /> }
);
const FAQSection = dynamic(() => import("@/components/shared/FAQSection"), {
  loading: () => <div className="min-h-[16rem] w-full" aria-hidden />,
});
const IntroSection = dynamic(() => import("@/components/design/intro-section"), {
  loading: () => <div className="min-h-[16rem] w-full" aria-hidden />,
});

export default function DesignPage() {
  return (
    <section
      className="fb-editorial-page w-full bg-[#08081E]"
      data-editorial-vertical="design"
    >
      <main id="main-content" className="w-full">
        <Hero />
      </main>
      <ProofBand vertical="design" ctaHref={CAL.design} ctaLabel="Book a call" />

      <FeaturedServiceLinks
        title="Design services teams hire us for"
        viewAllHref="/services/design"
        services={[
          { categorySlug: "design", serviceSlug: "website-ux-audit" },
          { categorySlug: "design", serviceSlug: "ui-ux-design" },
          { categorySlug: "design", serviceSlug: "landing-page-design" },
          { categorySlug: "design", serviceSlug: "branding-visual-identity" },
          { categorySlug: "design", serviceSlug: "ux-research" },
          { categorySlug: "design", serviceSlug: "design-systems" },
        ]}
      />

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
        <TestimonialSection
          theme="design"
          cta={
            <a href={CAL.design} target="_blank" rel="noopener noreferrer">
              <MarketingButton tone="design" title="Book a call" />
            </a>
          }
        />
      </div>

      <EngagementModels ctaHref={CAL.design} ctaLabel="Book a call" />

      <FAQSection vertical="design" />

      <div className="fb-section">
        <IntroSection />
      </div>

      <SiteFooter logo={logo} backgroundClassName="bg-[#08081E]" />
    </section>
  );
}
