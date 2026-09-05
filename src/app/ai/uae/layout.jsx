import JsonLd, { uaePageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("uaeAi");

export default function UaeAiLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={uaePageJsonLd("ai")} />
      {children}
    </>
  );
}
