import { ASSETS, COMPANY, SITE_URL, SOCIAL } from "@/config/site";

/** Copy-paste blocks for Clutch, GoodFirms, DesignRush, etc. */
export const DIRECTORY_PROFILE = {
  companyName: COMPANY.legalName,
  shortName: COMPANY.name,
  tagline: COMPANY.tagline,
  website: SITE_URL,
  email: COMPANY.email,
  phone: COMPANY.phone,
  founded: COMPANY.founded,
  minProjectSize: "$10,000+",
  hourlyRate: "$50 - $99 / hr",
  teamSize: "10 - 49",
  locations: ["Remote", "Worldwide"],
  shortDescription:
    "Futurebits is a design and engineering studio delivering AI automation, UI/UX design, software development, and trading infrastructure for ambitious teams worldwide.",
  longDescription: `Futurebits Technologies is a design and engineering studio focused on production outcomes — not slide decks. We work across three tracks:

AI & Automation: chatbots, custom GPTs, RAG knowledge bases, AI agents, workflow automation, and content generation systems built with evals and guardrails.

Design & Product: UI/UX design, website UX audits, landing page design, branding, design systems, and frontend code shipped in your repo.

Build & Integrations: SaaS development, MVPs, dashboards, Excel automation, Stripe/billing, and platform integrations.

We work in 2-4 week sprints or 8-12 week pods with weekly demos, clear acceptance criteria, and direct ownership from the same small team.`,
  servicesOffered: [
    "AI Chatbot Development",
    "Custom GPT & Knowledge Base Solutions",
    "UI/UX Design",
    "Website UX Audit",
    "Landing Page Design",
    "SaaS Development",
    "MVP Development",
    "AI Agents Development",
    "Product Design & Development",
    "Trading System Development",
  ],
  industries: [
    "SaaS",
    "FinTech",
    "Ed-Tech",
    "E-commerce",
    "Prop Trading",
    "B2B Software",
  ],
  profileLinks: {
    linkedin: SOCIAL.linkedin,
    twitter: SOCIAL.twitter,
    dribbble: SOCIAL.dribbble,
    behance: SOCIAL.behance,
  },
  priorityServiceUrls: [
    `${SITE_URL}/services/ai-automation/chatbot-development`,
    `${SITE_URL}/services/ai-automation/custom-gpt-knowledge-base`,
    `${SITE_URL}/services/design/website-ux-audit`,
    `${SITE_URL}/services/design/ui-ux-design`,
    `${SITE_URL}/services/design/landing-page-design`,
    `${SITE_URL}/services/build/mvp-development`,
    `${SITE_URL}/services/build/saas-development`,
    `${SITE_URL}/services/startup-tech-partner/end-to-end-product-design-development`,
  ],
};

export const LINK_TO_US = {
  preferredUrl: SITE_URL,
  suggestedAnchors: [
    { text: "Futurebits", url: SITE_URL },
    { text: "Futurebits AI automation agency", url: `${SITE_URL}/ai` },
    { text: "Website UX audit services", url: `${SITE_URL}/services/design/website-ux-audit` },
    { text: "AI chatbot development", url: `${SITE_URL}/services/ai-automation/chatbot-development` },
    { text: "Custom GPT development", url: `${SITE_URL}/services/ai-automation/custom-gpt-knowledge-base` },
    { text: "UI/UX design agency", url: `${SITE_URL}/design` },
  ],
  htmlSnippet: `<a href="${SITE_URL}" title="Futurebits — Design, AI, and Automation">Futurebits</a>`,
};

export const UX_AUDIT_CHECKLIST = {
  title: "Website UX Audit Checklist (Free)",
  description:
    "A 24-point checklist for auditing website UX, conversion paths, and product experience — free from Futurebits.",
  categories: [
    {
      name: "First impression & value prop",
      items: [
        "Headline states who the product is for and the outcome they get within 5 seconds.",
        "Primary CTA is visible above the fold on desktop and mobile.",
        "Visual hierarchy guides the eye: headline → proof → CTA.",
        "Page load (LCP) under 2.5s on mobile — test with PageSpeed Insights.",
      ],
    },
    {
      name: "Navigation & information architecture",
      items: [
        "Main nav labels match user mental models (not internal jargon).",
        "No more than 7 top-level nav items; dropdowns are scannable.",
        "Footer includes key conversion pages: pricing, product, contact, legal.",
        "Breadcrumbs or clear back-path on nested pages.",
        "404 page offers helpful links, not a dead end.",
      ],
    },
    {
      name: "Conversion paths",
      items: [
        "One primary CTA per page — not competing demo/trial/contact buttons.",
        "Form fields are minimal; each field has a stated reason to exist.",
        "Pricing page answers: who is each plan for, what is included, what happens next.",
        "Social proof is specific (outcomes/metrics), not generic logo walls only.",
        "Trust signals near conversion points: security badges, testimonials, guarantees.",
      ],
    },
    {
      name: "Mobile experience",
      items: [
        "Tap targets at least 44px; no overlapping clickable elements.",
        "Text readable without pinch-zoom (16px+ body on mobile).",
        "Sticky nav or CTA does not cover critical content.",
        "Forms use appropriate mobile keyboards (email, tel, number).",
      ],
    },
    {
      name: "Accessibility & usability",
      items: [
        "Color contrast meets WCAG AA for text and interactive elements.",
        "All images have alt text; decorative images use empty alt.",
        "Keyboard navigation works for menus, modals, and forms.",
        "Error messages are specific and appear next to the relevant field.",
      ],
    },
    {
      name: "Analytics & measurement",
      items: [
        "Key conversion events tracked in GA4 or equivalent (signup, demo, purchase).",
        "Funnel drop-off points identified for top 3 user journeys.",
        "Heatmaps or session recordings on highest-traffic pages.",
        "Post-launch A/B test backlog prioritized by expected impact.",
      ],
    },
  ],
};

export const FREE_RESOURCES = [
  {
    slug: "ux-audit-checklist",
    title: "Website UX Audit Checklist",
    description: "24-point checklist for conversion, navigation, mobile, and analytics.",
    path: "/resources/ux-audit-checklist",
    category: "Design",
  },
];
