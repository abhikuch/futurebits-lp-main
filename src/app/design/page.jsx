import JsonLd, { verticalLandingJsonLd } from "@/components/seo/JsonLd";
import VerticalPageOutline from "@/components/seo/VerticalPageOutline";
import DesignPage from "@/components/design/DesignLandingPage";

export default function DesignHomePage() {
  return (
    <>
      <JsonLd data={verticalLandingJsonLd("design")} />
      <DesignPage />
      <VerticalPageOutline vertical="design" />
    </>
  );
}
