import JsonLd, { gulfPageJsonLd } from "@/components/seo/JsonLd";
import GulfGeoPage from "@/components/gulf/GulfGeoPage";
import { getGulfPage } from "@/content/gulf";

export default function GulfHubPage() {
  return (
    <>
      <JsonLd data={gulfPageJsonLd("hub")} />
      <GulfGeoPage page={getGulfPage("hub")} />
    </>
  );
}
