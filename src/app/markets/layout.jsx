import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import VerticalPageOutline from "@/components/seo/VerticalPageOutline";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("markets");

export default function MarketsLayout({ children }) {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("markets")} />
      {children}
      <VerticalPageOutline vertical="markets" />
    </>
  );
}
