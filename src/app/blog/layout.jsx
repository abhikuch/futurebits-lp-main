import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata, ROUTES, SITE_URL } from "@/config/site";

export const metadata = buildRouteMetadata("blog");

export default function BlogLayout({ children }) {
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}${ROUTES.blog.path}` },
  ];

  return (
    <>
      <TopNavbar />
      <JsonLd
        data={[
          webPageJsonLd({
            path: ROUTES.blog.path,
            name: ROUTES.blog.title,
            description: ROUTES.blog.description,
            breadcrumbItems,
          }),
          breadcrumbJsonLd(breadcrumbItems, ROUTES.blog.path),
        ]}
      />
      {children}
    </>
  );
}
