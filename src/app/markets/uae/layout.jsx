import JsonLd, { uaePageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("uaeMarkets");

export default function UaeMarketsLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={uaePageJsonLd("markets")} />
      {children}
    </>
  );
}
