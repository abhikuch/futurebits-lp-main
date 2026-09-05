import JsonLd, { uaePageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("uaeDesign");

export default function UaeDesignLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={uaePageJsonLd("design")} />
      {children}
    </>
  );
}
