import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import VerticalPageOutline from "@/components/seo/VerticalPageOutline";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("design");

export default function DesignLayout({ children }) {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("design")} />
      {children}
      <VerticalPageOutline vertical="design" />
    </>
  );
}
