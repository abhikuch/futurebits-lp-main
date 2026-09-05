import JsonLd, { uaePageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("uae");

export default function UaeLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={uaePageJsonLd("hub")} />
      {children}
    </>
  );
}
