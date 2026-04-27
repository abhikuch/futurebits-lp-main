import JsonLd, { serviceJsonLd } from "@/components/seo/JsonLd";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("design");

export default function DesignLayout({ children }) {
  return (
    <>
      <JsonLd data={serviceJsonLd("design")} />
      {children}
    </>
  );
}
