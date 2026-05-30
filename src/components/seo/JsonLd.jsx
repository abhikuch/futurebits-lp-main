import {
  DEFAULT_OG_IMAGE,
  COMPANY,
  NAV_ITEMS,
  ROUTES,
  SITE_URL,
  SOCIAL,
} from "@/config/site";

export const ORGANIZATION_ID = `${SITE_URL}#organization`;
export const WEBSITE_ID = `${SITE_URL}#website`;

function pageUrl(path) {
  return path.startsWith("http") ? path : `${SITE_URL}${path}`;
}

function pageId(path, fragment = "webpage") {
  return `${pageUrl(path)}#${fragment}`;
}

function compactDocs(docs) {
  return docs.filter(Boolean);
}

/**
 * Renders one or more JSON-LD documents inline.
 * Pass `data` as a single object or an array of objects.
 */
export default function JsonLd({ data }) {
  const docs = compactDocs(Array.isArray(data) ? data : [data]);
  if (docs.length === 0) return null;

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

function defaultOffer(url) {
  return {
    "@type": "Offer",
    url,
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      description:
        "Project-based pricing. Book a discovery call for a scoped quote.",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: SITE_URL,
    email: COMPANY.email,
    telephone: COMPANY.phone,
    foundingDate: COMPANY.founded,
    description: COMPANY.tagline,
    logo: {
      "@type": "ImageObject",
      url: DEFAULT_OG_IMAGE,
      contentUrl: DEFAULT_OG_IMAGE,
    },
    image: DEFAULT_OG_IMAGE,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: COMPANY.email,
        telephone: COMPANY.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: COMPANY.email,
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
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: COMPANY.name,
    description: COMPANY.tagline,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items, path) {
  if (!items || items.length === 0) return null;

  const breadcrumbId = path ? pageId(path, "breadcrumb") : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(breadcrumbId ? { "@id": breadcrumbId } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webPageJsonLd({
  path,
  name,
  description,
  pageType = "WebPage",
  image,
  breadcrumbItems,
  mainEntityId,
}) {
  if (!path || !name) return null;

  const breadcrumb =
    breadcrumbItems && breadcrumbItems.length > 0
      ? breadcrumbJsonLd(breadcrumbItems, path)
      : null;

  return {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": pageId(path),
    url: pageUrl(path),
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
    ...(image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: image,
          },
        }
      : {}),
    ...(breadcrumb
      ? { breadcrumb: { "@id": pageId(path, "breadcrumb") } }
      : {}),
    ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
  };
}

export function faqJsonLd(items, path) {
  if (!items || items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(path ? { "@id": pageId(path, "faq") } : {}),
    ...(path ? { url: pageUrl(path) } : {}),
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

export function itemListJsonLd({ name, description, path, items }) {
  if (!items || items.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    ...(path ? { "@id": pageId(path, "itemlist") } : {}),
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : pageUrl(item.url),
    })),
  };
}

export function serviceJsonLd(routeKey) {
  const route = ROUTES[routeKey];
  if (!route) return null;

  const serviceId = pageId(route.path, "service");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: route.title,
    description: route.description,
    url: pageUrl(route.path),
    serviceType: route.title,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    offers: defaultOffer(route.cta),
    ...(route.ogImage
      ? {
          image: {
            "@type": "ImageObject",
            url: route.ogImage,
          },
        }
      : {}),
  };
}

export function customServiceJsonLd({
  title,
  description,
  path,
  serviceType,
  category,
  offerUrl,
  image,
}) {
  if (!title || !description || !path) return null;

  const serviceId = pageId(path, "service");

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: title,
    description,
    url: pageUrl(path),
    serviceType: serviceType ?? title,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    ...(category ? { category } : {}),
    offers: defaultOffer(offerUrl ?? ROUTES.contact.cta),
    ...(image
      ? {
          image: {
            "@type": "ImageObject",
            url: image,
          },
        }
      : {}),
  };
}

const VERTICAL_BREADCRUMB_LABELS = {
  ai: "AI",
  design: "Design",
  markets: "Markets",
};

export function verticalLandingJsonLd(routeKey) {
  const route = ROUTES[routeKey];
  if (!route) return null;

  const serviceId = pageId(route.path, "service");
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    {
      name: VERTICAL_BREADCRUMB_LABELS[routeKey] ?? route.title,
      url: pageUrl(route.path),
    },
  ];

  return compactDocs([
    webPageJsonLd({
      path: route.path,
      name: route.title,
      description: route.description,
      image: route.ogImage,
      breadcrumbItems,
      mainEntityId: serviceId,
    }),
    breadcrumbJsonLd(breadcrumbItems, route.path),
    serviceJsonLd(routeKey),
  ]);
}

export function aboutPageJsonLd() {
  const path = ROUTES.about.path;
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "About", url: pageUrl(path) },
  ];

  return compactDocs([
    webPageJsonLd({
      path,
      name: ROUTES.about.title,
      description: ROUTES.about.description,
      pageType: "AboutPage",
      image: ROUTES.about.ogImage,
      breadcrumbItems,
      mainEntityId: ORGANIZATION_ID,
    }),
    breadcrumbJsonLd(breadcrumbItems, path),
  ]);
}

export function contactPageJsonLd() {
  const path = ROUTES.contact.path;
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: pageUrl(path) },
  ];

  return compactDocs([
    webPageJsonLd({
      path,
      name: ROUTES.contact.title,
      description: ROUTES.contact.description,
      pageType: "ContactPage",
      image: ROUTES.contact.ogImage,
      breadcrumbItems,
      mainEntityId: ORGANIZATION_ID,
    }),
    breadcrumbJsonLd(breadcrumbItems, path),
  ]);
}

export function privacyPageJsonLd() {
  const path = ROUTES.privacy.path;
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Privacy Policy", url: pageUrl(path) },
  ];

  return compactDocs([
    webPageJsonLd({
      path,
      name: ROUTES.privacy.title,
      description: ROUTES.privacy.description,
      image: ROUTES.privacy.ogImage,
      breadcrumbItems,
      mainEntityId: ORGANIZATION_ID,
    }),
    breadcrumbJsonLd(breadcrumbItems, path),
  ]);
}

export function servicesHubJsonLd(categories) {
  const path = ROUTES.services.path;
  const serviceId = pageId(path, "service");
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Services", url: pageUrl(path) },
  ];

  return compactDocs([
    webPageJsonLd({
      path,
      name: ROUTES.services.title,
      description: ROUTES.services.description,
      image: ROUTES.services.ogImage,
      breadcrumbItems,
      mainEntityId: serviceId,
    }),
    breadcrumbJsonLd(breadcrumbItems, path),
    customServiceJsonLd({
      title: "Futurebits Services",
      description: ROUTES.services.description,
      path,
      serviceType: "Software, AI, Design and Integration Services",
      offerUrl: ROUTES.services.cta,
      image: ROUTES.services.ogImage,
    }),
    itemListJsonLd({
      name: "Futurebits Service Categories",
      description: "Core service tracks offered by Futurebits.",
      path,
      items: categories.map((category) => ({
        name: category.title,
        url: `/services/${category.slug}`,
      })),
    }),
  ]);
}

export function serviceCategoryJsonLd(categoryBundle) {
  const path = `/services/${categoryBundle.slug}`;
  const serviceId = pageId(path, "service");
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Services", url: pageUrl(ROUTES.services.path) },
    { name: categoryBundle.title, url: pageUrl(path) },
  ];
  const title = `${categoryBundle.title} Services`;
  const description = `${categoryBundle.description} Explore service coverage, delivery model, and implementation paths.`;

  return compactDocs([
    webPageJsonLd({
      path,
      name: title,
      description,
      breadcrumbItems,
      mainEntityId: serviceId,
    }),
    breadcrumbJsonLd(breadcrumbItems, path),
    customServiceJsonLd({
      title,
      description,
      path,
      serviceType: categoryBundle.title,
      category: categoryBundle.title,
      offerUrl: categoryBundle.ctaHref,
    }),
    itemListJsonLd({
      name: `${categoryBundle.title} Services`,
      description: categoryBundle.description,
      path,
      items: categoryBundle.services.map((service) => ({
        name: service.title,
        url: service.path,
      })),
    }),
  ]);
}

export function serviceDetailJsonLd({ service, category, faqs }) {
  const path = service.path;
  const serviceId = pageId(path, "service");
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Services", url: pageUrl(ROUTES.services.path) },
    { name: category.title, url: pageUrl(`/services/${category.slug}`) },
    { name: service.title, url: pageUrl(path) },
  ];

  return compactDocs([
    webPageJsonLd({
      path,
      name: service.metaTitle,
      description: service.metaDescription,
      breadcrumbItems,
      mainEntityId: serviceId,
    }),
    breadcrumbJsonLd(breadcrumbItems, path),
    customServiceJsonLd({
      title: service.title,
      description: service.shortDescription,
      path,
      serviceType: service.title,
      category: category.title,
      offerUrl: category.ctaHref,
    }),
    faqJsonLd(faqs, path),
  ]);
}

export function articleJsonLd(post) {
  if (!post?.slug || !post.title) return null;

  const path = `/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl(path)}#article`,
    headline: post.title,
    description: post.description,
    url: pageUrl(path),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: COMPANY.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageId(path),
    },
    articleSection: post.category,
    inLanguage: "en",
  };
}

export function siteNavigationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main navigation",
    url: SITE_URL,
    hasPart: NAV_ITEMS.map((item) => ({
      "@type": "WebPage",
      name: item.label,
      url: `${SITE_URL}${item.url}`,
    })),
  };
}
