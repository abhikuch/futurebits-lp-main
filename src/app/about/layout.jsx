import JsonLd from "@/components/seo/JsonLd";
import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata, COMPANY, SITE_URL, SOCIAL } from "@/config/site";

export const metadata = buildRouteMetadata("about");

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: `${SITE_URL}/about`,
  about: {
    "@type": "Organization",
    name: COMPANY.legalName,
    url: SITE_URL,
    sameAs: [SOCIAL.twitter, SOCIAL.linkedin, SOCIAL.behance, SOCIAL.dribbble],
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <TopNavbar />
      <JsonLd data={aboutPageJsonLd} />
      {children}
    </>
  );
}
