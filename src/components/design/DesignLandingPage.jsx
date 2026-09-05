"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import ImgHero from "@/assets/design/light.webp";
import logo from "@/assets/logo.svg";
import Hero from "@/components/design/hero";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import ProofBand from "@/components/shared/ProofBand";
import SiteFooter from "@/components/shared/SiteFooter";
import TestimonialSection from "@/components/shared/TestimonialSection";
import MarketingButton from "@/components/ui/marketing-button";
import LazyMount from "@/components/ui/lazy-mount";
import { CAL } from "@/config/site";

const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
});
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
    <section className="w-full bg-[#08081E]">
      <main
        id="main-content"
        className="w-full px-0 sm:px-10  relative md:px-0 flex justify-center"
      >
        <div className="absolute !z-20 w-[300px] top-[60px] sm:w-[500px] sm:top-[60px] lg:w-[800px] mx-auto h-[200px]">
          <LazyMount fallbackClassName="h-[200px] w-full">
            <Particles
              quantity={12}
              ease={80}
              vx={0.1}
              vy={0.2}
              size={0.4}
              className="!z-40 inset-0"
            />
          </LazyMount>
        </div>

        <div className="max-w-[1000px] w-full absolute -top-8 left-0 right-0 mx-auto h-full">
          <div className="fb-page-hero-enter absolute top-[85px] sm:top-[70px] xl:top-[75px] left-0 z-[5] w-full h-full">
            <Image
              src={ImgHero.src}
              width={1000}
              height={1000}
              alt=""
              aria-hidden="true"
              className="z-0 w-full"
              priority
            />
          </div>
        </div>
        <div className="z-10 w-full">
          <Hero />
        </div>
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
