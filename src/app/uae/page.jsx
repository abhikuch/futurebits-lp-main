import JsonLd, { uaePageJsonLd } from "@/components/seo/JsonLd";
import UaeGeoPage from "@/components/uae/UaeGeoPage";
import { getUaePage } from "@/content/uae";

export default function UaeHubPage() {
  return (
    <>
      <JsonLd data={uaePageJsonLd("hub")} />
      <UaeGeoPage page={getUaePage("hub")} />
    </>
  );
}
