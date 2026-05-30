import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("markets");

export default function MarketsLayout({ children }) {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("markets")} />
      {children}
    </>
  );
}
