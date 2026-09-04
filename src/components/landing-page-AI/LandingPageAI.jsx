import dynamic from "next/dynamic";
import Hero from "./Hero";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import FAQSection from "@/components/shared/FAQSection";
import ProofBand from "@/components/shared/ProofBand";
import { CAL } from "@/config/site";

const ServicesSection = dynamic(() => import("./services"), {
  loading: () => <div className="min-h-[28rem] w-full" aria-hidden />,
});
const ProjectsSection = dynamic(() => import("./ProjectSection"), {
  loading: () => <div className="min-h-[24rem] w-full" aria-hidden />,
});
const TestimonialsCarousel = dynamic(() => import("./TestimonialCarousel"), {
  loading: () => <div className="min-h-[20rem] w-full" aria-hidden />,
});
const EngagementModels = dynamic(
  () => import("@/components/shared/EngagementModels"),
  { loading: () => <div className="min-h-[18rem] w-full" aria-hidden /> }
);
const AboutMe = dynamic(() => import("./AboutMe"), {
  loading: () => <div className="min-h-[16rem] w-full" aria-hidden />,
});
const Feature = dynamic(() => import("./Feature"), {
  loading: () => <div className="min-h-[24rem] w-full" aria-hidden />,
});
const Footer = dynamic(() => import("./Footer"), {
  loading: () => <div className="min-h-[12rem] w-full" aria-hidden />,
});

export default function LandingPageAI() {
  return (
    <div className="bg-[#060719]" id="ai">
      <main id="main-content" className="bg-[#000000] ">
        <Hero />
      </main>
      <ProofBand vertical="ai" />
      <FeaturedServiceLinks
        title="AI services teams hire us for"
        viewAllHref="/services/ai-automation"
        services={[
          { categorySlug: "ai-automation", serviceSlug: "chatbot-development" },
          { categorySlug: "ai-automation", serviceSlug: "custom-gpt-knowledge-base" },
          { categorySlug: "ai-automation", serviceSlug: "ai-agents-development" },
          { categorySlug: "ai-automation", serviceSlug: "ai-content-generation" },
          { categorySlug: "ai-automation", serviceSlug: "ai-workflow-automation" },
          { categorySlug: "ai-automation", serviceSlug: "llm-integration" },
        ]}
      />
      <div className="fb-section">
        <ServicesSection />
      </div>
      <div className="fb-section">
        <ProjectsSection />
      </div>

      <div className="fb-section">
        <TestimonialsCarousel />
      </div>

      <EngagementModels ctaHref={CAL.ai} ctaLabel="Book a call" />

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
