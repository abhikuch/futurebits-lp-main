import JsonLd, { privacyPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("privacy");

export default function PrivacyLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={privacyPageJsonLd()} />
      {children}
    </>
  );
}
