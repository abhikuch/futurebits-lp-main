import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("ai");

export default function AILayout({ children }) {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("ai")} />
      {children}
    </>
  );
}
