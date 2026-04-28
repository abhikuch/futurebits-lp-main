/**
 * Central site configuration.
 *
 * Single source of truth for brand identity, route metadata, calendar links,
 * social accounts, and analytics IDs. Consumed by:
 *  - `generateMetadata` in every layout/page
 *  - JSON-LD structured data
 *  - sitemap, robots, manifest
 *  - navbars and footers
 *  - any component that needs an external link or contact email
 */

export const SITE_URL = "https://www.futurebits.tech";

export const COMPANY = {
  name: "Futurebits",
  legalName: "Futurebits Technologies",
  tagline: "Design, AI, and automation — built by one team.",
  email: "admin@futurebits.tech",
  phone: "+971585165671",
  founderName: "Futurebits Team",
  founded: "2023",
};

export const SOCIAL = {
  twitter: "https://x.com/FuturebitsTech",
  twitterHandle: "@FuturebitsTech",
  linkedin: "https://www.linkedin.com/company/futurebitstech/",
  behance: "https://www.behance.net/futurebits",
  dribbble: "https://dribbble.com/futurebits",
};

export const ANALYTICS = {
  gaMeasurementId: "G-QXFJJQ3B04",
};

export const CAL = {
  ai: "https://cal.com/futurebits/ai?duration=30",
  markets: "https://cal.com/futurebits/markets?duration=30",
  design: "https://cal.com/futurebits/design?duration=30",
};

const BLOB_BASE = "https://67uizwknbuzxqhet.public.blob.vercel-storage.com";

export const ASSETS = {
  favicon: `${BLOB_BASE}/favicon-i6TbSBL8Jc5DJbzl6jeMWA9XF9GlMl.ico`,
  ogAi: `${BLOB_BASE}/Futurebits_AI-8px7T2U1KIgESzSdrYmxnA0QpmcLSG.png`,
  ogMarkets: `${BLOB_BASE}/Futurebits_Markets-JMRSYisja8ddJMG9v1Ctk38BYbKdI8.png`,
  ogDesign: `${BLOB_BASE}/Futurebits_Design-E1Fc22OUTeWKEw5cZUtEvf281rlfyq.png`,
};

export const DEFAULT_OG_IMAGE = ASSETS.ogAi;

/**
 * Per-route metadata. Each entry is consumed by the route's `generateMetadata`.
 * `path` is the route path; `cta` is the canonical Cal.com link for that route.
 */
export const ROUTES = {
  home: {
    path: "/",
    cta: CAL.ai,
    title: "Futurebits | Design, AI, and Automation",
    description:
      "Futurebits is a senior product pod across AI systems, trading infrastructure, and product design with frontend delivery.",
    keywords: [
      "Futurebits",
      "AI automation agency",
      "product design and development",
      "trading infrastructure",
      "software development partner",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits",
  },
  ai: {
    path: "/ai",
    cta: CAL.ai,
    title: "Production AI for ops, support, and product teams — Futurebits",
    description:
      "Futurebits ships production AI — retrieval, agents, automations, evals — for ops, support, and product teams. Senior pod. First useful automation in 2–3 weeks.",
    keywords: [
      "AI",
      "Intelligent Automation",
      "Custom AI Models",
      "Business Impact",
      "Workflow Optimization",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits AI Solutions",
  },
  markets: {
    path: "/markets",
    cta: CAL.markets,
    title: "Trading and risk infrastructure built to last — Futurebits Markets",
    description:
      "Futurebits builds execution, analytics, and risk systems for funds, prop firms, and serious traders. Event-driven backtests, paper-and-shadow, runbooks, kill-switches.",
    keywords: [
      "Trading Automation",
      "Wealth Building",
      "Market Tech",
      "Trading Tools",
      "Automated Strategies",
    ],
    ogImage: ASSETS.ogMarkets,
    ogImageAlt: "Futurebits Market Automation",
  },
  design: {
    path: "/design",
    cta: CAL.design,
    title: "Product design plus frontend that ships in your repo — Futurebits Design",
    description:
      "Futurebits pairs product design with frontend engineering in one senior pod. Sprints and pods that move activation, conversion, and retention — with code in your repo.",
    keywords: [
      "Design and Development",
      "UI UX",
      "Product Design",
      "Tech Partner",
      "Growth-Driven Design",
    ],
    ogImage: ASSETS.ogDesign,
    ogImageAlt: "Futurebits Design & Development",
  },
  services: {
    path: "/services",
    cta: CAL.ai,
    title: "Software, AI, Design and Integration Services | Futurebits",
    description:
      "Explore Futurebits services across software development, AI automation, product design, integrations, and startup tech partnership.",
    keywords: [
      "Software Development Services",
      "AI Automation Services",
      "Product Design Services",
      "SaaS Development",
      "Startup Tech Partner",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits Services",
  },
  about: {
    path: "/about",
    cta: CAL.ai,
    title: "About Futurebits | Design, AI, and Automation",
    description:
      "Meet the team building Futurebits — a senior pod of designers, engineers, and AI builders helping ambitious teams ship faster, smarter, and with taste.",
    keywords: ["About Futurebits", "Team", "Founders", "Design Engineering"],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "About Futurebits",
  },
  contact: {
    path: "/contact",
    cta: CAL.ai,
    title: "Contact Futurebits | Start a Conversation",
    description:
      "Tell us about your project. We respond within one business day during weekdays.",
    keywords: ["Contact Futurebits", "Hire Futurebits", "Project Inquiry"],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Contact Futurebits",
  },
  privacy: {
    path: "/privacy-policy",
    cta: CAL.ai,
    title: "Privacy Policy | Futurebits",
    description:
      "How Futurebits collects, uses, and protects your personal information when you visit futurebits.tech.",
    keywords: ["Privacy Policy", "Data Protection", "GDPR"],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits Privacy Policy",
  },
};

/**
 * Top-level navigation surface. Consumed by all three navbars.
 * Order matters; first item is the implicit home/AI vertical.
 */
export const NAV_ITEMS = [
  { label: "AI", url: ROUTES.ai.path },
  { label: "Markets", url: ROUTES.markets.path },
  { label: "Design", url: ROUTES.design.path },
  { label: "About", url: ROUTES.about.path },
  { label: "Contact", url: ROUTES.contact.path },
];

/**
 * Build a full Next.js `Metadata` object for a given route key.
 * Centralizes the OpenGraph + Twitter + canonical pattern that was
 * previously copy-pasted in three layouts.
 */
export function buildRouteMetadata(routeKey) {
  const route = ROUTES[routeKey];
  if (!route) {
    throw new Error(`Unknown route key: ${routeKey}`);
  }
  const url = `${SITE_URL}${route.path}`;
  return {
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: COMPANY.name,
      title: route.title,
      description: route.description,
      images: [
        {
          url: route.ogImage,
          width: 1200,
          height: 630,
          alt: route.ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: SOCIAL.twitterHandle,
      creator: SOCIAL.twitterHandle,
      title: route.title,
      description: route.description,
      images: [route.ogImage],
    },
    icons: {
      icon: ASSETS.favicon,
    },
    other: {
      "contact:email": COMPANY.email,
      "contact:business": COMPANY.legalName,
    },
  };
}
