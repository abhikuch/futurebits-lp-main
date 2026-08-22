import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import VerticalPageOutline from "@/components/seo/VerticalPageOutline";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("ai");

export default function AILayout({ children }) {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("ai")} />
      {children}
      <VerticalPageOutline vertical="ai" />
    </>
  );
}
