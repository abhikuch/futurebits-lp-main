import JsonLd, { aboutPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("about");

export default function AboutLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={aboutPageJsonLd()} />
      {children}
    </>
  );
}
