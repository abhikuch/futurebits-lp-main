import { CAL } from "@/config/site";

export const SERVICE_CATEGORIES = [
  {
    slug: "build",
    title: "Build",
    shortTitle: "Development",
    description:
      "End-to-end software engineering, Excel automation, smart reporting, dashboards, and modernization for SaaS and internal tooling.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    description:
      "Applied AI systems, agents, chatbots, custom GPTs, content generation, video pipelines, and workflow automation built for production outcomes.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
  {
    slug: "design",
    title: "Design",
    shortTitle: "Design",
    description:
      "UI/UX design, UX audits, branding, wireframing, prototyping, landing pages, and design systems focused on activation, conversion, and retention.",
    ctaLabel: "Book a call",
    ctaHref: CAL.design,
  },
  {
    slug: "markets-trading",
    title: "Markets & Trading Systems",
    shortTitle: "Markets",
    description:
      "Execution, backtesting, risk controls, monitoring, and analytics infrastructure for serious trading teams.",
    ctaLabel: "Book a call",
    ctaHref: CAL.markets,
  },
  {
    slug: "integrations-platform",
    title: "Integrations & Platform",
    shortTitle: "Integrations",
    description:
      "Payments, auth, analytics, APIs, and deployment foundations that keep products reliable.",
    ctaLabel: "Book a call",
    ctaHref: CAL.ai,
  },
  {
    slug: "startup-tech-partner",
    title: "Startup Tech Partner",
    shortTitle: "Startup Partner",
    description:
      "Founder-focused product strategy, end-to-end design and development, architecture, and delivery from idea to launch.",
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

const PRIORITY_COPY = {
  "mvp-development": {
    hero:
      "MVPs built to validate fast and scale cleanly.",
    subhead:
      "We define the smallest shippable scope, build it end-to-end, and launch with instrumentation from day one.",
    metaTitle: "MVP Development Services | Launch in Weeks, Not Months",
    metaDescription:
      "Build and launch a focused MVP with a senior full-stack pod. Validate quickly, ship reliably, and avoid overbuilding.",
  },
  "saas-development": {
    hero: "SaaS products engineered for growth and reliability.",
    subhead:
      "From first release to scale-up, we ship product increments that improve business metrics.",
    metaTitle: "SaaS Development Services | Full-Stack Product Delivery",
    metaDescription:
      "End-to-end SaaS development for startups and growth teams — architecture, frontend, backend, billing, and deployment.",
  },
  "ai-agents-development": {
    hero: "AI agents that do real work, not demos.",
    subhead:
      "We design and deploy production-ready agents for sales, marketing, ed-tech, fintech, support, and internal workflows.",
    metaTitle: "AI Agents Development | Sales, Marketing, Ed-Tech & FinTech",
    metaDescription:
      "Build AI agents for sales, marketing, ed-tech, fintech, and personal branding with guardrails, observability, and measurable outcomes.",
  },
  "rag-application-development": {
    hero: "RAG systems and AI knowledge bases with grounded answers.",
    subhead:
      "We build retrieval pipelines, custom knowledge bases, chunking strategies, and eval loops that keep quality measurable.",
    metaTitle: "RAG & AI Knowledge Base Development | Custom GPT Solutions",
    metaDescription:
      "Build RAG systems and AI knowledge bases with high-quality retrieval, evaluation pipelines, and enterprise-ready safety controls.",
  },
  "llm-integration": {
    hero: "LLM integrations that improve product outcomes.",
    subhead:
      "Add generation, summarization, classification, and assistants to your product with clear ROI.",
    metaTitle: "LLM Integration Services | Add AI to Existing Products",
    metaDescription:
      "Integrate LLM capabilities into your SaaS, app, or workflow with secure architecture and performance monitoring.",
  },
  "openai-api-integration": {
    hero: "OpenAI API integrations built for production.",
    subhead:
      "We implement, optimize, and monitor OpenAI-powered features inside your real product stack.",
    metaTitle: "OpenAI API Integration Services | Production Implementation",
    metaDescription:
      "Production-grade OpenAI API integration with prompt architecture, fallback handling, and analytics.",
  },
  "chatbot-development": {
    hero: "AI chatbots for websites and customer support that resolve issues.",
    subhead:
      "Website chatbots and support systems with context-awareness, escalation paths, and integration into your CRM and workflows.",
    metaTitle: "AI Chatbot Development | Website & Customer Support Systems",
    metaDescription:
      "AI chatbots for websites and customer support systems — accurate, fast, and integrated with your existing support workflows.",
  },
  "workflow-automation-software": {
    hero: "Workflow automation software that gives teams hours back.",
    subhead:
      "We map bottlenecks, automate high-friction steps, and track measurable operational gains.",
    metaTitle:
      "Workflow Automation Software Development | Reduce Manual Ops",
    metaDescription:
      "Build automation software to remove repetitive tasks, reduce errors, and improve operational throughput.",
  },
  "dashboard-development": {
    hero: "Dashboards that drive decisions, not vanity reporting.",
    subhead:
      "We build fast, role-aware dashboards with meaningful metrics and reliable data pipelines.",
    metaTitle:
      "Dashboard Development Services | Product and Analytics Dashboards",
    metaDescription:
      "Build dashboards for product, operations, and leadership with actionable metrics and clean information architecture.",
  },
  "internal-tool-development": {
    hero: "Internal tools tailored to your operating model.",
    subhead:
      "We turn spreadsheets and ad-hoc workflows into secure, scalable internal systems.",
    metaTitle:
      "Internal Tool Development Services | Custom Ops Platforms",
    metaDescription:
      "Build internal tools for operations, support, and finance to reduce manual processes and increase team velocity.",
  },
  "stripe-integration": {
    hero: "Stripe integrations that keep revenue flowing.",
    subhead:
      "We implement checkout, subscriptions, invoicing, and billing logic with production-grade reliability.",
    metaTitle:
      "Stripe Integration Services | Payments and Billing Implementation",
    metaDescription:
      "Integrate Stripe for payments, subscriptions, webhooks, and billing workflows with robust error handling.",
  },
  "subscription-billing-setup": {
    hero: "Subscription billing setup for predictable recurring revenue.",
    subhead:
      "We build billing architecture that supports upgrades, proration, retries, and finance visibility.",
    metaTitle:
      "Subscription Billing Setup | SaaS Recurring Revenue Systems",
    metaDescription:
      "Set up recurring billing, plans, trials, upgrades, and dunning workflows for SaaS products.",
  },
  "ui-ux-design": {
    hero: "UI/UX design that improves product performance.",
    subhead:
      "We redesign critical user flows to remove friction and move activation and conversion metrics.",
    metaTitle:
      "UI/UX Design Services | Conversion-Focused Product Design",
    metaDescription:
      "UI/UX design for SaaS and web apps focused on usability, conversion, and retention outcomes.",
  },
  "product-design": {
    hero: "Product design from problem framing to shipped interface.",
    subhead:
      "We align product goals, user needs, and engineering constraints into execution-ready design.",
    metaTitle:
      "Product Design Services | End-to-End UX and Interface Design",
    metaDescription:
      "Product design from strategy and user flows to high-fidelity UI and implementation-ready assets.",
  },
  "founder-tech-partner": {
    hero: "A senior tech partner for founders building from zero.",
    subhead:
      "We help you prioritize, build, and launch with clarity — without wasting cycles on low-leverage work.",
    metaTitle:
      "Founder Tech Partner Services | Idea to MVP to Scale",
    metaDescription:
      "Technical partner for founders across product strategy, MVP scope, architecture, and launch execution.",
  },
  "strategy-backtesting": {
    hero: "Backtests that survive contact with live markets.",
    subhead:
      "We model fees, slippage, partial fills, and execution constraints so your edge estimate is grounded in reality.",
    metaTitle: "Strategy Backtesting Services | Realistic Trading Backtests",
    metaDescription:
      "Build event-driven backtesting systems with realistic costs, execution assumptions, and reproducible research pipelines.",
  },
  "forward-testing-shadow-mode": {
    hero: "Forward testing and shadow mode before real capital.",
    subhead:
      "Validate strategy behavior on live feeds in paper and shadow environments with strict promotion criteria.",
    metaTitle: "Forward Testing & Shadow Mode | Trading Validation Services",
    metaDescription:
      "Deploy forward testing and shadow mode workflows to validate trading systems before live deployment.",
  },
  "live-trading-execution-systems": {
    hero: "Live trading execution systems built for failure scenarios.",
    subhead:
      "Production execution with retries, idempotency, risk guardrails, and operational runbooks your team can trust.",
    metaTitle: "Live Trading Execution Systems | Production Trading Infrastructure",
    metaDescription:
      "Build resilient live execution systems with risk controls, retries, order lifecycle handling, and auditability.",
  },
  "real-time-pnl-exposure-monitoring": {
    hero: "Real-time monitoring for PnL, exposure, and system health.",
    subhead:
      "Get actionable visibility into performance and risk with alerts that page humans before small issues compound.",
    metaTitle: "Real-Time PnL & Exposure Monitoring | Trading Ops Visibility",
    metaDescription:
      "Implement real-time dashboards and alerting for PnL, exposure, latency, and execution health across trading systems.",
  },
  "trade-analytics-reporting": {
    hero: "Trade analytics that expose edge decay and execution drag.",
    subhead:
      "Daily and per-trade analytics for slippage, attribution, and performance decomposition tied to strategy decisions.",
    metaTitle: "Trade Analytics & Reporting | Performance Attribution Systems",
    metaDescription:
      "Build trading analytics pipelines for attribution, slippage analysis, and decision-grade reporting.",
  },
  "trading-system-audits-consulting": {
    hero: "Independent audits for trading architecture, risk, and execution quality.",
    subhead:
      "We inspect your stack, identify hidden failure modes, and deliver a prioritized remediation plan with owner-ready actions.",
    metaTitle: "Trading System Audits & Consulting | Risk and Architecture Review",
    metaDescription:
      "Audit trading systems for execution reliability, risk controls, and architecture quality with actionable fix plans.",
  },
  "website-ux-audit": {
    hero: "Complete website UX audits that expose what's blocking growth.",
    subhead:
      "We audit navigation, conversion paths, mobile experience, and product friction — then deliver a prioritized fix plan tied to revenue metrics.",
    metaTitle: "Website UX Audit & Product Experience Audit | Futurebits",
    metaDescription:
      "Complete website UX audit and product experience review. Identify conversion blockers, usability gaps, and prioritized fixes for growth.",
  },
  "ux-research": {
    hero: "UX research that informs decisions, not slide decks.",
    subhead:
      "User interviews, journey mapping, and usability testing tied to activation, conversion, and retention outcomes.",
    metaTitle: "UX Research Services | User Interviews & Usability Testing",
    metaDescription:
      "UX research including user interviews, journey mapping, and usability testing to inform product and design decisions.",
  },
  "branding-visual-identity": {
    hero: "Branding and visual identity that scales with your product.",
    subhead:
      "Logo systems, color palettes, typography, and visual language that work across web, mobile, and marketing touchpoints.",
    metaTitle: "Branding & Visual Identity Design | Product Identity Creation",
    metaDescription:
      "Branding, visual design, and product identity creation — logos, iconography, and scalable brand systems for digital products.",
  },
  "data-visualization-design": {
    hero: "Data visualization and dashboard design that drives action.",
    subhead:
      "Role-aware dashboards, charts, and workflow views that turn complex data into decisions your team can act on.",
    metaTitle: "Data Visualization & Dashboard Design | Workflow Optimization",
    metaDescription:
      "Dashboard design, data visualization, and workflow optimization for SaaS, ops, and analytics teams.",
  },
  "landing-page-design": {
    hero: "Landing pages designed for conversion and growth.",
    subhead:
      "We design high-converting landing pages with clear value props, social proof, and CTA flows tuned to your acquisition channel.",
    metaTitle: "Landing Page Design Services | Conversion-Focused Growth Pages",
    metaDescription:
      "Landing page design focused on conversion and growth — clear messaging, optimized CTAs, and mobile-first layouts that convert.",
  },
  "design-systems": {
    hero: "Design systems that speed up your entire product team.",
    subhead:
      "Component libraries, tokens, and documentation that keep design and engineering aligned as you scale.",
    metaTitle: "Design Systems & Scalable Product Architecture | Futurebits",
    metaDescription:
      "Design systems and scalable product architecture — component libraries, design tokens, and documentation for growing teams.",
  },
  "custom-gpt-knowledge-base": {
    hero: "Custom GPTs and knowledge bases grounded in your business.",
    subhead:
      "We build retrieval pipelines, custom GPT assistants, and internal knowledge bases that answer accurately from your docs and data.",
    metaTitle: "Custom GPT & AI Knowledge Base Solutions | Futurebits",
    metaDescription:
      "Custom GPT and AI knowledge base solutions for businesses — grounded answers, document retrieval, and enterprise-ready controls.",
  },
  "ai-content-generation": {
    hero: "AI content generation systems with quality you can trust.",
    subhead:
      "Production pipelines for marketing copy, product content, and personalization with tone, accuracy, and brand guardrails built in.",
    metaTitle: "AI Content Generation & Workflow Automation | Futurebits",
    metaDescription:
      "AI workflow automation and content generation systems for marketing, product, and ops teams with quality gates and brand controls.",
  },
  "ai-video-generation": {
    hero: "AI video generation for creators, brands, and content teams.",
    subhead:
      "Automated video pipelines for social, ads, and product demos — with templates, brand consistency, and scalable output.",
    metaTitle: "AI Video Generation Services | Creators, Brands & Content Teams",
    metaDescription:
      "AI video generation for creators, brands, and content teams — automated pipelines for social, ads, and product marketing video.",
  },
  "excel-automation-smart-reporting": {
    hero: "Excel automation and smart reporting that replaces manual work.",
    subhead:
      "We turn spreadsheet workflows into automated reporting systems with live data, scheduled exports, and dashboard views.",
    metaTitle: "Excel Automation & Smart Reporting Systems | Futurebits",
    metaDescription:
      "Excel automation and smart reporting systems — replace manual spreadsheet work with automated pipelines and live dashboards.",
  },
  "end-to-end-product-design-development": {
    hero: "End-to-end product design and development in one senior pod.",
    subhead:
      "From strategy and UX through design, frontend, and backend — one team ships your product without handoff loss.",
    metaTitle: "End-to-End Product Design & Development Support | Futurebits",
    metaDescription:
      "End-to-end product design and development support — strategy, UX, UI, frontend, and backend delivery from one senior pod.",
  },
  "product-strategy": {
    hero: "Product strategy focused on revenue, not roadmap theater.",
    subhead:
      "We align product bets to revenue metrics, define success criteria, and prioritize what to build first for maximum business impact.",
    metaTitle: "Product Strategy & Revenue-Focused UX | Futurebits",
    metaDescription:
      "Product strategy and revenue-focused user experiences — prioritize features, define metrics, and align UX to business outcomes.",
  },
  "ai-product-development": {
    hero: "AI-powered product features built for real users.",
    subhead:
      "Smart automation, intelligent search, recommendations, and AI-native workflows integrated into your existing product.",
    metaTitle: "AI-Powered Product Features & Smart Automation | Futurebits",
    metaDescription:
      "AI-powered product features and smart automation solutions — retrieval, agents, and intelligent workflows built into your product.",
  },
  "mobile-app-ui-design": {
    hero: "Mobile app UI/UX design for iOS, Android, and cross-platform.",
    subhead:
      "Native-feeling mobile interfaces for apps, SaaS platforms, and web products — optimized for touch, onboarding, and retention.",
    metaTitle: "Mobile App UI/UX Design | Apps, Websites & SaaS Platforms",
    metaDescription:
      "UI/UX design for mobile apps, websites, and SaaS platforms — conversion-focused interfaces for iOS, Android, and web.",
  },
  "wireframing": {
    hero: "Wireframing and interactive prototyping to de-risk builds.",
    subhead:
      "Low and high-fidelity wireframes and clickable prototypes that validate flows before engineering investment.",
    metaTitle: "Wireframing & Interactive Prototyping Services | Futurebits",
    metaDescription:
      "UX research, wireframing, and interactive prototyping — validate user flows and product concepts before full development.",
  },
};

export const SERVICES = RAW_SERVICES.map(([categorySlug, slug, title]) => {
  const category = SERVICE_CATEGORIES.find((item) => item.slug === categorySlug);
  const copy = PRIORITY_COPY[slug];
  return {
    categorySlug,
    categoryTitle: category?.title ?? "Services",
    slug,
    title,
    path: `/services/${categorySlug}/${slug}`,
    shortDescription:
      copy?.metaDescription ??
      `${title} delivered by a senior Futurebits pod with clear scope, measurable outcomes, and production-grade execution.`,
    hero:
      copy?.hero ??
      `${title} delivered with outcome-first execution.`,
    subhead:
      copy?.subhead ??
      "We scope, build, and ship this service with tight execution loops and direct senior ownership.",
    metaTitle: copy?.metaTitle ?? `${title} Services | Futurebits`,
    metaDescription:
      copy?.metaDescription ??
      `${title} by Futurebits. Senior pod delivery with practical timelines, measurable outputs, and clear communication.`,
    isPriority: PRIORITY_SERVICE_SLUGS.has(slug),
  };
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
  return SERVICES.filter(
    (item) => item.categorySlug === categorySlug && item.slug !== serviceSlug
  ).slice(0, limit);
}

export function getServiceFaq(service) {
  return [
    {
      q: `What outcomes should we expect from ${service.title.toLowerCase()}?`,
      a: `We align ${service.title.toLowerCase()} work to measurable outcomes such as cycle-time reduction, quality improvements, and conversion or retention gains depending on your use case.`,
    },
    {
      q: "How long does delivery usually take?",
      a: "Focused scopes usually land in 2-4 weeks. Broader implementations run 8-12 week pod engagements with weekly demos and clear milestones.",
    },
    {
      q: "Can you work with our existing team and stack?",
      a: "Yes. We typically work inside your stack and repo, follow your review process, and leave your team with clean documentation and handoff clarity.",
    },
    {
      q: "How do you manage risk and quality?",
      a: "We define acceptance criteria up front, ship in small increments, and track quality with explicit checks, observability, and rollback-safe delivery habits.",
    },
  ];
}
