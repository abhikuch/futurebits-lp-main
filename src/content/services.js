import { CAL } from "@/config/site";
import { lintServiceCopy, lintText } from "@/content/content-voice";
import { SERVICE_PAGE_COPY } from "@/content/service-copy";

const META_TAIL_VARIANTS = [
  "Scoped in writing. Weekly demos in your repo.",
  "One team from kickoff to launch — no hand-offs.",
  "Fixed window quoted after a 30-minute scoping call.",
  "Acceptance tests signed before we call it done.",
  "Ship in your stack with explicit cut lines up front.",
  "Direct access to the people doing the work.",
];

const STANDARD_META_TAIL =
  /Fixed-scope sprints, direct team access, ship in your repo\.?$/;

function hashIndex(seed, modulo) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % modulo;
}

function varyMetaDescription(slug, description) {
  if (!description || !STANDARD_META_TAIL.test(description)) {
    return description;
  }
  const tail = META_TAIL_VARIANTS[hashIndex(slug, META_TAIL_VARIANTS.length)];
  return description.replace(STANDARD_META_TAIL, tail);
}

export const SERVICE_CATEGORIES = [
  {
    slug: "build",
    title: "Build",
    shortTitle: "Development",
    description:
      "Software engineering in your repo — SaaS, internal tools, dashboards, Excel automation, and legacy modernization with written scope and weekly demos.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    description:
      "Production AI — agents, RAG, chatbots, custom GPTs, and workflow automation with evals, fallbacks, and human review where it matters.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
  {
    slug: "design",
    title: "Design",
    shortTitle: "Design",
    description:
      "UI/UX, audits, research, branding, landing pages, and design systems — focused on flows that move signup, activation, and conversion.",
    ctaLabel: "Book a call",
    ctaHref: CAL.design,
  },
  {
    slug: "markets-trading",
    title: "Markets & Trading Systems",
    shortTitle: "Markets",
    description:
      "Backtesting, execution, shadow mode, PnL monitoring, and trading infra — with fees, idempotency, and kill switches treated as requirements.",
    ctaLabel: "Book a call",
    ctaHref: CAL.markets,
  },
  {
    slug: "integrations-platform",
    title: "Integrations & Platform",
    shortTitle: "Integrations",
    description:
      "Stripe, Razorpay, auth, billing, analytics, and API integrations — idempotent webhooks, sandbox validation, and reconciliation checklists.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
  {
    slug: "startup-tech-partner",
    title: "Startup Tech Partner",
    shortTitle: "Startup Partner",
    description:
      "Founder tech partner, MVP scope, product strategy, and idea-to-launch pods — one small team, no equity-only deals.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
];

const RAW_SERVICES = [
  // Development
  ["build", "saas-development", "SaaS Development"],
  ["build", "web-app-development", "Web App Development"],
  ["build", "custom-software-development", "Custom Software Development"],
  ["build", "mvp-development", "MVP Development"],
  ["build", "full-stack-development", "Full Stack Development"],
  ["build", "frontend-development", "Frontend Development"],
  ["build", "backend-development", "Backend Development"],
  ["build", "api-development", "API Development"],
  ["build", "dashboard-development", "Dashboard Development"],
  ["build", "admin-panel-development", "Admin Panel Development"],
  ["build", "client-portal-development", "Client Portal Development"],
  ["build", "internal-tool-development", "Internal Tool Development"],
  ["build", "crm-development", "CRM Development"],
  ["build", "marketplace-development", "Marketplace Development"],
  ["build", "subscription-platform-development", "Subscription Platform Development"],
  ["build", "workflow-automation-software", "Workflow Automation Software"],
  ["build", "reporting-platform-development", "Reporting Platform Development"],
  ["build", "business-process-automation", "Business Process Automation"],
  ["build", "no-code-to-code-migration", "No-Code to Code Migration"],
  ["build", "legacy-software-modernization", "Legacy Software Modernization"],
  ["build", "excel-automation-smart-reporting", "Excel Automation & Smart Reporting"],
  // AI & Automation
  ["ai-automation", "ai-saas-development", "AI SaaS Development"],
  ["ai-automation", "ai-product-development", "AI Product Development"],
  ["ai-automation", "ai-workflow-automation", "AI Workflow Automation"],
  ["ai-automation", "chatbot-development", "Chatbot Development"],
  ["ai-automation", "rag-application-development", "RAG Application Development"],
  ["ai-automation", "ai-document-processing", "AI Document Processing"],
  ["ai-automation", "ai-search-systems", "AI Search Systems"],
  ["ai-automation", "ai-recommendation-systems", "AI Recommendation Systems"],
  ["ai-automation", "ai-agents-development", "AI Agents Development"],
  ["ai-automation", "llm-integration", "LLM Integration"],
  ["ai-automation", "openai-api-integration", "OpenAI API Integration"],
  ["ai-automation", "custom-ai-tools", "Custom AI Tools"],
  ["ai-automation", "ai-dashboard-development", "AI Dashboard Development"],
  ["ai-automation", "ai-data-extraction", "AI-Based Data Extraction"],
  ["ai-automation", "ai-customer-support-tools", "AI Customer Support Tools"],
  ["ai-automation", "custom-gpt-knowledge-base", "Custom GPT & Knowledge Base Solutions"],
  ["ai-automation", "ai-content-generation", "AI Content Generation Systems"],
  ["ai-automation", "ai-video-generation", "AI Video Generation"],
  // Design
  ["design", "ui-ux-design", "UI/UX Design"],
  ["design", "product-design", "Product Design"],
  ["design", "web-app-design", "Web App Design"],
  ["design", "saas-ui-design", "SaaS UI Design"],
  ["design", "dashboard-ui-design", "Dashboard UI Design"],
  ["design", "design-systems", "Design Systems"],
  ["design", "wireframing", "Wireframing"],
  ["design", "prototyping", "Prototyping"],
  ["design", "landing-page-design", "Landing Page Design"],
  ["design", "mobile-app-ui-design", "Mobile App UI Design"],
  ["design", "user-flow-design", "User Flow Design"],
  ["design", "figma-design", "Figma Design"],
  ["design", "website-ux-audit", "Website UX Audit & Product Experience Audit"],
  ["design", "ux-research", "UX Research"],
  ["design", "branding-visual-identity", "Branding & Visual Identity"],
  ["design", "data-visualization-design", "Data Visualization Design"],
  // Markets & Trading Systems
  ["markets-trading", "strategy-backtesting", "Strategy Backtesting"],
  ["markets-trading", "forward-testing-shadow-mode", "Forward Testing & Shadow Mode"],
  ["markets-trading", "live-trading-execution-systems", "Live Trading Execution Systems"],
  ["markets-trading", "real-time-pnl-exposure-monitoring", "Real-Time PnL & Exposure Monitoring"],
  ["markets-trading", "trade-analytics-reporting", "Trade Analytics & Reporting"],
  ["markets-trading", "quant-research-infrastructure", "Quant Research Infrastructure"],
  ["markets-trading", "trading-system-audits-consulting", "Trading System Audits & Consulting"],
  ["markets-trading", "trading-stack-observability-alerting", "Trading Stack Observability & Alerting"],
  ["markets-trading", "tradingview-indicators-automation", "TradingView Indicators & Automation"],
  ["markets-trading", "trading-tech-maintenance-on-call", "Trading Tech Maintenance & On-Call"],
  // Integrations
  ["integrations-platform", "payment-gateway-integration", "Payment Gateway Integration"],
  ["integrations-platform", "stripe-integration", "Stripe Integration"],
  ["integrations-platform", "razorpay-integration", "Razorpay Integration"],
  ["integrations-platform", "subscription-billing-setup", "Subscription Billing Setup"],
  ["integrations-platform", "crm-integration", "CRM Integration"],
  ["integrations-platform", "whatsapp-api-integration", "WhatsApp API Integration"],
  ["integrations-platform", "email-automation-integration", "Email Automation Integration"],
  ["integrations-platform", "google-analytics-setup", "Google Analytics Setup"],
  ["integrations-platform", "cms-integration", "CMS Integration"],
  ["integrations-platform", "third-party-api-integration", "Third-Party API Integration"],
  ["integrations-platform", "authentication-setup", "Authentication Setup"],
  ["integrations-platform", "role-based-access-control", "Role-Based Access Control"],
  ["integrations-platform", "database-setup", "Database Setup"],
  ["integrations-platform", "cloud-deployment", "Cloud Deployment"],
  // Startup Focus
  ["startup-tech-partner", "startup-mvp", "Startup MVP"],
  ["startup-tech-partner", "founder-tech-partner", "Founder Tech Partner"],
  ["startup-tech-partner", "product-strategy", "Product Strategy"],
  ["startup-tech-partner", "product-consulting", "Product Consulting"],
  ["startup-tech-partner", "tech-consulting", "Tech Consulting"],
  ["startup-tech-partner", "saas-launch-partner", "SaaS Launch Partner"],
  ["startup-tech-partner", "prototype-to-product", "Prototype to Product"],
  ["startup-tech-partner", "idea-to-mvp", "Idea to MVP"],
  ["startup-tech-partner", "product-roadmap-planning", "Product Roadmap Planning"],
  ["startup-tech-partner", "software-architecture-planning", "Software Architecture Planning"],
  ["startup-tech-partner", "end-to-end-product-design-development", "End-to-End Product Design & Development"],
];

export const PRIORITY_SERVICE_SLUGS = new Set([
  "mvp-development",
  "saas-development",
  "ai-agents-development",
  "rag-application-development",
  "llm-integration",
  "openai-api-integration",
  "chatbot-development",
  "workflow-automation-software",
  "dashboard-development",
  "internal-tool-development",
  "stripe-integration",
  "subscription-billing-setup",
  "ui-ux-design",
  "product-design",
  "landing-page-design",
  "website-ux-audit",
  "ux-research",
  "branding-visual-identity",
  "data-visualization-design",
  "design-systems",
  "custom-gpt-knowledge-base",
  "ai-content-generation",
  "ai-video-generation",
  "excel-automation-smart-reporting",
  "end-to-end-product-design-development",
  "product-strategy",
  "founder-tech-partner",
  "strategy-backtesting",
  "forward-testing-shadow-mode",
  "live-trading-execution-systems",
  "real-time-pnl-exposure-monitoring",
  "trade-analytics-reporting",
  "trading-system-audits-consulting",
]);

export const SERVICES = RAW_SERVICES.map(([categorySlug, slug, title]) => {
  const category = SERVICE_CATEGORIES.find((item) => item.slug === categorySlug);
  const copy = SERVICE_PAGE_COPY[slug];
  const metaDescription = varyMetaDescription(
    slug,
    copy?.metaDescription ??
      `${title} by Futurebits. Fixed-scope sprints, direct team access, ship in your repo.`
  );

  return lintServiceCopy({
    categorySlug,
    categoryTitle: category?.title ?? "Services",
    slug,
    title,
    path: `/services/${categorySlug}/${slug}`,
    shortDescription:
      metaDescription ??
      `${title} — scoped, shipped in your repo, with weekly demos.`,
    hero: copy?.hero ?? `${title} — scoped, shipped, signed off.`,
    subhead:
      copy?.subhead ??
      "We write the scope first, ship in your repo, and demo every week until it's done.",
    metaTitle: copy?.metaTitle ?? `${title} | Futurebits`,
    metaDescription,
    isPriority: PRIORITY_SERVICE_SLUGS.has(slug),
  });
});

export const SERVICES_BY_CATEGORY = SERVICE_CATEGORIES.map((category) => ({
  ...category,
  services: SERVICES.filter((service) => service.categorySlug === category.slug),
}));

export function getCategoryBySlug(slug) {
  return SERVICE_CATEGORIES.find((item) => item.slug === slug);
}

export function getServiceBySlugs(categorySlug, serviceSlug) {
  return SERVICES.find(
    (item) => item.categorySlug === categorySlug && item.slug === serviceSlug
  );
}

export function getRelatedServices(categorySlug, serviceSlug, limit = 6) {
  const sameCategory = SERVICES.filter(
    (item) => item.categorySlug === categorySlug && item.slug !== serviceSlug
  );

  const crossCategory = SERVICES.filter(
    (item) =>
      item.categorySlug !== categorySlug &&
      item.isPriority &&
      item.slug !== serviceSlug
  );

  const merged = [...sameCategory.slice(0, 4), ...crossCategory.slice(0, 2)];
  const seen = new Set();
  return merged
    .filter((item) => {
      if (seen.has(item.slug)) return false;
      seen.add(item.slug);
      return true;
    })
    .slice(0, limit);
}

export function getServiceFaq(service) {
  return [
    {
      q: `What does the first week of ${service.title} look like?`,
      a: "Access, repo setup, and a written scope draft. We don't start build until you sign off on cut lines and the metric we're targeting.",
    },
    {
      q: "How long does delivery usually take?",
      a: "Focused scopes land in 2-4 weeks. Broader work runs 8-12 weeks with weekly demos and explicit milestones.",
    },
    {
      q: "Can you work with our existing team and stack?",
      a: "Yes. We work in your repo, follow your review process, and leave documentation your team can maintain.",
    },
    {
      q: "How do you handle quality and risk?",
      a: "Acceptance criteria up front, small increments, staging before prod, and rollback plans on load-bearing paths.",
    },
  ].map((item) => ({
    q: lintText(item.q),
    a: lintText(item.a),
  }));
}
