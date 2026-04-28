import {
  DEFAULT_OG_IMAGE,
  COMPANY,
  ROUTES,
  SITE_URL,
  SOCIAL,
} from "@/config/site";

/**
 * Renders one or more JSON-LD documents inline.
 * Pass `data` as a single object or an array of objects.
 */
export default function JsonLd({ data }) {
  const docs = Array.isArray(data) ? data : [data];
  return (
    <>
      {docs.map((doc, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doc) }}
        />
      ))}
    </>
  );
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    foundingDate: COMPANY.founded,
    logo: DEFAULT_OG_IMAGE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: COMPANY.email,
        telephone: COMPANY.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
    sameAs: [SOCIAL.twitter, SOCIAL.linkedin, SOCIAL.behance, SOCIAL.dribbble],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: COMPANY.name,
    description: COMPANY.tagline,
    publisher: { "@id": `${SITE_URL}#organization` },
  };
}

export function serviceJsonLd(routeKey) {
  const route = ROUTES[routeKey];
  if (!route) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: route.title,
    description: route.description,
    url: `${SITE_URL}${route.path}`,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: "Worldwide",
  };
}

export function faqJsonLd(items) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function customServiceJsonLd({ title, description, path }) {
  if (!title || !description || !path) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}#organization` },
    areaServed: "Worldwide",
  };
}
