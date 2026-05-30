import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata, SITE_URL } from "@/config/site";

export const metadata = buildRouteMetadata("press");

export default function PressLayout({ children }) {
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Press", url: `${SITE_URL}/press` },
  ];

  return (
    <>
      <TopNavbar />
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/press",
            name: "Press & Media Kit",
            description: "Futurebits media kit and directory profile information.",
            breadcrumbItems,
          }),
          breadcrumbJsonLd(breadcrumbItems, "/press"),
        ]}
      />
      {children}
    </>
  );
}
