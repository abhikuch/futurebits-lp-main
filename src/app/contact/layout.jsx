import JsonLd from "@/components/seo/JsonLd";
import { buildRouteMetadata, COMPANY, SITE_URL } from "@/config/site";

export const metadata = buildRouteMetadata("contact");

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  about: {
    "@type": "Organization",
    name: COMPANY.legalName,
    email: COMPANY.email,
    url: SITE_URL,
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />
      {children}
    </>
  );
}
