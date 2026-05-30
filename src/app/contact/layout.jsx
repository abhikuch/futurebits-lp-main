import JsonLd, { contactPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("contact");

export default function ContactLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={contactPageJsonLd()} />
      {children}
    </>
  );
}
