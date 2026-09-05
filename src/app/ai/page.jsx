import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import VerticalPageOutline from "@/components/seo/VerticalPageOutline";
import LandingPageAI from "@/components/landing-page-AI/LandingPageAI";

export default function AIHomePage() {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("ai")} />
      <LandingPageAI />
      <VerticalPageOutline vertical="ai" />
    </>
  );
}
