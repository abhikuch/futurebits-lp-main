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

import { buildCalUrl } from "@/lib/cal";

export const SITE_URL = "https://www.futurebits.tech";

/**
 * Stable content revision date for sitemap lastmod.
 * Bump this when indexed copy or route inventory changes.
 * Never use `new Date()` in the sitemap — crawlers treat that as a full-site rewrite.
 */
export const CONTENT_UPDATED_AT = "2026-09-05";

export const COMPANY = {
  name: "Futurebits",
  legalName: "Futurebits Technologies",
  tagline: "Design, AI, and automation. Built by one team.",
  email: "admin@futurebits.tech",
  phone: "+971585165671",
  phoneDisplay: "+971 58 516 5671",
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
  home: buildCalUrl("https://cal.com/futurebits/ai?duration=30", {
    medium: "cta",
    campaign: "home-hero",
  }),
  ai: buildCalUrl("https://cal.com/futurebits/ai?duration=30", {
    medium: "cta",
    campaign: "ai-vertical",
  }),
  markets: buildCalUrl("https://cal.com/futurebits/markets?duration=30", {
    medium: "cta",
    campaign: "markets-vertical",
  }),
  design: buildCalUrl("https://cal.com/futurebits/design?duration=30", {
    medium: "cta",
    campaign: "design-vertical",
  }),
  build: buildCalUrl("https://cal.com/futurebits/build?duration=30", {
    medium: "cta",
    campaign: "build-vertical",
  }),
  startup: buildCalUrl("https://cal.com/futurebits/build?duration=30", {
    medium: "cta",
    campaign: "startup-tech-partner",
  }),
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
    cta: CAL.home,
    title: "Futurebits | A studio for AI, markets, and design",
    description:
      "Futurebits is one small team across three isolated tracks: production AI, trading infrastructure, and product design with frontend in your repo. Pick a room. Book a call.",
    keywords: [
      "Futurebits",
      "AI automation agency",
      "product design and development",
      "trading infrastructure",
      "software development partner",
      "software development Dubai",
      "AI agency UAE",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits",
    languages: {
      "en-AE": `${SITE_URL}/uae`,
      en: SITE_URL,
      "x-default": SITE_URL,
    },
  },
  ai: {
    path: "/ai",
    cta: CAL.ai,
    title: "Production AI for ops, support, and product teams | Futurebits",
    description:
      "Futurebits ships production AI: retrieval, agents, automations, and evals for ops, support, and product teams. One small team. First useful automation in 2–3 weeks.",
    keywords: [
      "AI automation agency",
      "AI chatbots",
      "Custom GPT",
      "AI agents development",
      "AI content generation",
      "AI video generation",
      "Workflow automation",
      "LLM integration",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits AI Solutions",
    shortLabel: "AI & Automation",
    languages: {
      "en-AE": `${SITE_URL}/ai/uae`,
      en: `${SITE_URL}/ai`,
      "x-default": `${SITE_URL}/ai`,
    },
  },
  markets: {
    path: "/markets",
    cta: CAL.markets,
    title: "Trading and risk infrastructure built to last | Futurebits Markets",
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
    ogImageAlt: "Futurebits Markets",
    shortLabel: "Markets",
    languages: {
      "en-AE": `${SITE_URL}/markets/uae`,
      en: `${SITE_URL}/markets`,
      "x-default": `${SITE_URL}/markets`,
    },
  },
  design: {
    path: "/design",
    cta: CAL.design,
    title: "Product design plus frontend that ships in your repo | Futurebits Design",
    description:
      "Futurebits pairs product design with frontend engineering in one small team. Sprints and pods that move activation, conversion, and retention, with code in your repo.",
    keywords: [
      "UI UX design",
      "UX audit",
      "Landing page design",
      "Branding and visual identity",
      "Wireframing and prototyping",
      "Design systems",
      "Product design",
      "Data visualization design",
    ],
    ogImage: ASSETS.ogDesign,
    ogImageAlt: "Futurebits Design & Development",
    shortLabel: "Design",
    languages: {
      "en-AE": `${SITE_URL}/design/uae`,
      en: `${SITE_URL}/design`,
      "x-default": `${SITE_URL}/design`,
    },
  },
  services: {
    path: "/services",
    cta: CAL.ai,
    title: "Software, AI, Design and Integration Services | Futurebits",
    description:
      "Software development, AI automation, UX audits, chatbots, custom GPTs, product design, branding, integrations, and startup tech partnership.",
    keywords: [
      "Software Development Services",
      "AI Automation Services",
      "UX Audit Services",
      "Custom GPT Solutions",
      "AI Chatbot Development",
      "Landing Page Design",
      "Excel Automation",
      "Branding and Visual Identity",
      "Product Design Services",
      "Startup Tech Partner",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits Services",
  },
  about: {
    path: "/about",
    cta: CAL.ai,
    title: "About Futurebits | A small studio for AI, markets, and design",
    description:
      "Futurebits is a roughly dozen-person studio founded in 2023. One team across production AI, trading infrastructure, and product design. No staff-aug bench. No slide decks.",
    keywords: [
      "About Futurebits",
      "Futurebits studio",
      "AI engineering studio",
      "trading infrastructure team",
      "product design studio",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "About Futurebits",
  },
  contact: {
    path: "/contact",
    cta: CAL.ai,
    title: "Contact Futurebits | Start a Conversation",
    description:
      "Tell us about your project. We respond within one business day on GST (UAE) weekdays. UAE phone +971 58 516 5671.",
    keywords: [
      "Contact Futurebits",
      "Hire Futurebits",
      "Project Inquiry",
      "software agency Dubai",
    ],
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
  blog: {
    path: "/blog",
    cta: CAL.ai,
    title: "Insights on UX, AI, and Product Growth | Futurebits Blog",
    description:
      "Guides on website UX audits, AI chatbots, custom GPT knowledge bases, landing page conversion, and product delivery from the Futurebits team.",
    keywords: [
      "UX audit guide",
      "AI chatbot development",
      "Custom GPT knowledge base",
      "SaaS landing page conversion",
      "Product design insights",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits Blog",
  },
  press: {
    path: "/press",
    cta: CAL.ai,
    title: "Press & Media Kit | Futurebits",
    description:
      "Futurebits media kit: company boilerplate, logos, contact, service links, and directory profile copy for Clutch, GoodFirms, and partners.",
    keywords: [
      "Futurebits media kit",
      "Futurebits press",
      "Futurebits company profile",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits Press Kit",
  },
  resources: {
    path: "/resources",
    cta: CAL.ai,
    title: "Free UX & Product Resources | Futurebits",
    description:
      "Free resources from Futurebits: UX audit checklists, guides, and tools for product teams, designers, and founders.",
    keywords: [
      "UX audit checklist",
      "Free UX resources",
      "Website audit checklist",
      "Product design resources",
    ],
    ogImage: ASSETS.ogDesign,
    ogImageAlt: "Futurebits Resources",
  },
  uae: {
    path: "/uae",
    cta: CAL.ai,
    title: "Software, AI, and trading systems for UAE teams | Futurebits",
    description:
      "Futurebits takes AI, design, and trading-systems work from Dubai, Abu Dhabi, and the UAE on a +971 line. GST hours, written scope, ship in your repo. Book a call.",
    keywords: [
      "software development Dubai",
      "AI agency UAE",
      "AI chatbot Dubai",
      "trading systems DIFC",
      "UI UX design Abu Dhabi",
      "software company UAE",
      "Futurebits UAE",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits for UAE teams",
    languages: {
      "en-AE": `${SITE_URL}/uae`,
      en: SITE_URL,
      "x-default": SITE_URL,
    },
  },
  uaeAi: {
    path: "/ai/uae",
    cta: CAL.ai,
    title: "AI automation for UAE ops and support teams | Futurebits",
    description:
      "Production AI for Dubai and Abu Dhabi teams: chatbots, RAG, agents, and WhatsApp automation with evals, handoff, and a written data map. Book a call.",
    keywords: [
      "AI agency Dubai",
      "chatbot development UAE",
      "WhatsApp automation Dubai",
      "RAG application UAE",
      "custom GPT Dubai",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits AI for UAE teams",
    languages: {
      "en-AE": `${SITE_URL}/ai/uae`,
      en: `${SITE_URL}/ai`,
      "x-default": `${SITE_URL}/ai`,
    },
  },
  uaeMarkets: {
    path: "/markets/uae",
    cta: CAL.markets,
    title: "Trading infrastructure for DIFC and ADGM desks | Futurebits",
    description:
      "Backtesting, shadow mode, execution, and PnL monitoring for UAE desks. Fees and kill switches in the spec. GST overlap. Book a call.",
    keywords: [
      "trading systems Dubai",
      "DIFC trading infrastructure",
      "ADGM quant systems",
      "algorithmic trading UAE",
    ],
    ogImage: ASSETS.ogMarkets,
    ogImageAlt: "Futurebits Markets for UAE desks",
    languages: {
      "en-AE": `${SITE_URL}/markets/uae`,
      en: `${SITE_URL}/markets`,
      "x-default": `${SITE_URL}/markets`,
    },
  },
  uaeDesign: {
    path: "/design/uae",
    cta: CAL.design,
    title: "Product design and frontend for UAE launches | Futurebits",
    description:
      "UI/UX, landing pages, and frontend for Dubai and Abu Dhabi products. English first, room for Arabic, code in your repo. Book a call.",
    keywords: [
      "UI UX design Dubai",
      "landing page design UAE",
      "product design Abu Dhabi",
      "UX audit Dubai",
    ],
    ogImage: ASSETS.ogDesign,
    ogImageAlt: "Futurebits Design for UAE teams",
    languages: {
      "en-AE": `${SITE_URL}/design/uae`,
      en: `${SITE_URL}/design`,
      "x-default": `${SITE_URL}/design`,
    },
  },
  gulf: {
    path: "/gulf",
    cta: CAL.ai,
    title: "Software, AI, and trading systems for Gulf & GCC teams | Futurebits",
    description:
      "Futurebits serves UAE and GCC buyers on a +971 line. One geo landing per service, plus country hubs for Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Book a call.",
    keywords: [
      "software development GCC",
      "AI agency Gulf",
      "software company Saudi Arabia",
      "software development Qatar",
      "Futurebits Gulf",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits for Gulf teams",
    languages: {
      "en-AE": `${SITE_URL}/uae`,
      en: `${SITE_URL}/gulf`,
      "x-default": `${SITE_URL}/gulf`,
    },
  },
  gulfSaudiArabia: {
    path: "/gulf/saudi-arabia",
    cta: CAL.ai,
    title: "Software and AI for Riyadh and Jeddah teams | Futurebits",
    description:
      "Remote studio for Saudi teams: Sunday–Thursday, English delivery, Arabic UI when you supply copy, KSA PDPL in writing. +971 58 516 5671. Book a call.",
    keywords: [
      "software development Riyadh",
      "AI agency Saudi Arabia",
      "software company Jeddah",
      "KSA PDPL software",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits for Saudi Arabia teams",
  },
  gulfQatar: {
    path: "/gulf/qatar",
    cta: CAL.ai,
    title: "Portals and trading infra for Doha and Lusail teams | Futurebits",
    description:
      "Client portals, reporting, and trading infrastructure for Qatar family offices and operators. GST hours, +971 line, no invented Doha office. Book a call.",
    keywords: [
      "software development Doha",
      "family office technology Qatar",
      "trading systems Qatar",
    ],
    ogImage: ASSETS.ogMarkets,
    ogImageAlt: "Futurebits for Qatar teams",
  },
  gulfKuwait: {
    path: "/gulf/kuwait",
    cta: CAL.ai,
    title: "Internal tools and CRM for Kuwait City teams | Futurebits",
    description:
      "Replace Excel-plus-WhatsApp stacks for Kuwaiti groups. Written scope, GST hours, official WhatsApp API. Remote studio, +971 line. Book a call.",
    keywords: [
      "software development Kuwait",
      "CRM Kuwait",
      "internal tools Kuwait City",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits for Kuwait teams",
  },
  gulfBahrain: {
    path: "/gulf/bahrain",
    cta: CAL.ai,
    title: "Billing, auth, and product for Manama teams | Futurebits",
    description:
      "Stripe, auth, and launch pages for Bahrain financial and professional teams. 10% VAT named. We are not your CBB consultant. Book a call.",
    keywords: [
      "software development Bahrain",
      "fintech product Manama",
      "Stripe integration Bahrain",
    ],
    ogImage: ASSETS.ogAi,
    ogImageAlt: "Futurebits for Bahrain teams",
  },
  gulfOman: {
    path: "/gulf/oman",
    cta: CAL.ai,
    title: "MVPs and launch sites for Muscat teams | Futurebits",
    description:
      "One hypothesis, a landing page that books a call, or an ops tool for Oman teams. 5% VAT, GST hours, +971 line. Book a call.",
    keywords: [
      "software development Muscat",
      "MVP development Oman",
      "startup tech partner Oman",
    ],
    ogImage: ASSETS.ogDesign,
    ogImageAlt: "Futurebits for Oman teams",
  },
};

const GULF_ROUTE_KEYS = {
  "saudi-arabia": "gulfSaudiArabia",
  qatar: "gulfQatar",
  kuwait: "gulfKuwait",
  bahrain: "gulfBahrain",
  oman: "gulfOman",
};

/**
 * @param {string} countryKey
 */
export function gulfRouteMetadata(countryKey) {
  const routeKey = GULF_ROUTE_KEYS[countryKey];
  if (!routeKey) {
    throw new Error(`Unknown Gulf country key: ${countryKey}`);
  }
  return buildRouteMetadata(routeKey);
}

/**
 * Site navigation IA.
 *
 * Rooms are the three verticals — the only primary destinations.
 * Utility sits to the right of the rooms (studio, not a fourth vertical).
 * Overflow lives in the mobile sheet + footer, never as equal-weight peers.
 * Logo always points at ROUTES.home (`/`), never `/ai`.
 */
export const NAV_ROOMS = [
  { label: "AI", url: ROUTES.ai.path },
  { label: "Markets", url: ROUTES.markets.path },
  { label: "Design", url: ROUTES.design.path },
];

export const NAV_UTILITY = [{ label: "About", url: ROUTES.about.path }];

export const NAV_OVERFLOW = [
  { label: "Contact", url: ROUTES.contact.path },
  { label: "Services", url: ROUTES.services.path },
  { label: "Blog", url: ROUTES.blog.path },
  { label: "UAE", url: ROUTES.uae.path },
];

/** Visible primary navigation — rooms + About. Used by chrome and JSON-LD. */
export const NAV_ITEMS = [...NAV_ROOMS, ...NAV_UTILITY];

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
      ...(route.languages ? { languages: route.languages } : {}),
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
      "contact:phone_number": COMPANY.phone,
      "contact:business": COMPANY.legalName,
    },
  };
}
