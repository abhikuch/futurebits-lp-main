import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata, SITE_URL } from "@/config/site";

export const metadata = buildRouteMetadata("resources");

export default function ResourcesLayout({ children }) {
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Resources", url: `${SITE_URL}/resources` },
  ];

  return (
    <>
      <TopNavbar />
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/resources",
            name: "Free Resources",
            description: "Free UX and product resources from Futurebits.",
            breadcrumbItems,
          }),
          breadcrumbJsonLd(breadcrumbItems, "/resources"),
        ]}
      />
      {children}
    </>
  );
}
