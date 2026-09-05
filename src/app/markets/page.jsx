import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import VerticalPageOutline from "@/components/seo/VerticalPageOutline";
import MarketPage from "@/components/market/MarketLandingPage";

export default function MarketHomePage() {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("markets")} />
      <MarketPage />
      <VerticalPageOutline vertical="markets" />
    </>
  );
}
