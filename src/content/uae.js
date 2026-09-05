import { lintText } from "@/content/content-voice";
import { SERVICE_CATEGORIES, SERVICES } from "@/content/services";
import { COMPANY } from "@/config/site";

/**
 * UAE / GCC geo content. One hub + three vertical pages.
 * Each catalog service gets a unique UAE note so Dubai/Abu Dhabi
 * intent can land without 90 doorway URLs.
 */

export const UAE = {
  country: "United Arab Emirates",
  countryCode: "AE",
  cities: ["Dubai", "Abu Dhabi", "Sharjah"],
  hubs: ["DIFC", "ADGM", "DMCC"],
  timezoneLabel: "GST (UTC+4)",
  phone: COMPANY.phone,
  phoneDisplay: "+971 58 516 5671",
  language: "English",
};

export const UAE_PAGE_KEYS = /** @type {const} */ ([
  "hub",
  "ai",
  "markets",
  "design",
]);

/** @typedef {(typeof UAE_PAGE_KEYS)[number]} UaePageKey */

export const UAE_PATHS = {
  hub: "/uae",
  ai: "/ai/uae",
  markets: "/markets/uae",
  design: "/design/uae",
};

export const AREA_SERVED = [
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "City", name: "Dubai" },
  { "@type": "City", name: "Abu Dhabi" },
  { "@type": "Country", name: "India" },
  { "@type": "Place", name: "Worldwide" },
];

const VERTICAL_CATEGORY = {
  ai: "ai-automation",
  markets: "markets-trading",
  design: "design",
};

const CATEGORY_UAE_INTRO = {
  build:
    "Free-zone and mainland operators who need software in their repo, not a local retainer that never ships.",
  "ai-automation":
    "Support, ops, and product teams in Dubai and Abu Dhabi who want AI that answers in English, hands off to a human, and survives PDPL review.",
  design:
    "Founders and product leads who need bilingual-ready UI and frontend in the same sprint, not a Figma dump.",
  "markets-trading":
    "DIFC and ADGM desks, prop shops, and family-office traders who want kill switches and fees in the spec, not a weekend bot.",
  "integrations-platform":
    "Teams wiring Stripe, WhatsApp, CRM, and auth for UAE customers without a six-vendor pile-up.",
  "startup-tech-partner":
    "Hub71, in5, and DIFC Innovation Hub teams that need an MVP with cut lines, not a slide about product-market fit.",
};

const SLUG_ANGLES = {
  "saas-development":
    "UAE SaaS buyers expect English admin, AED pricing, and VAT-ready invoices from week one.",
  "web-app-development":
    "Most Dubai web apps fail on the Arabic toggle or the Sunday–Thursday week. We write both into scope.",
  "custom-software-development":
    "Family offices and free-zone operators come to us when the off-the-shelf stack cannot hold their process.",
  "mvp-development":
    "We cut a UAE MVP to one hypothesis you can demo in DIFC before the next investor coffee.",
  "full-stack-development":
    "One team owns browser to database so your Dubai launch does not split across three vendors.",
  "frontend-development":
    "React/Next in your repo, GST standups, and layouts that do not collapse when Arabic copy arrives.",
  "backend-development":
    "APIs with idempotency and audit logs. Useful when a UAE regulator or enterprise buyer asks how a write happened.",
  "api-development":
    "Partner APIs for UAE banks, logistics, and marketplaces. Sandbox first, then a written go-live checklist.",
  "dashboard-development":
    "Ops dashboards for GST hours: the number a manager in Dubai can check before the London open.",
  "admin-panel-development":
    "Admin tools your bilingual staff will actually use. Roles, not a shared password in a WhatsApp group.",
  "client-portal-development":
    "Portals for UAE clients who expect English, invoices, and a mobile-usable status view.",
  "internal-tool-development":
    "Replace the Excel-plus-WhatsApp ops stack common in free-zone teams with a tool in your repo.",
  "crm-development":
    "A CRM that matches how UAE sales actually work: WhatsApp, referrals, and a Sunday start.",
  "marketplace-development":
    "Two-sided markets for UAE supply and demand, with AED settlement and KYC as requirements, not later.",
  "subscription-platform-development":
    "Subscriptions that can bill AED, show VAT, and cancel without a support ticket storm.",
  "workflow-automation-software":
    "Kill the copy-paste between Tabreed-style ops sheets, email, and chat. Written triggers, weekly demos.",
  "reporting-platform-development":
    "Board and family-office packs that refresh themselves. No intern rebuilding a slide every Sunday.",
  "business-process-automation":
    "Map the process a UAE ops lead actually runs, then automate the dull middle. We skip the transformation workshop.",
  "no-code-to-code-migration":
    "Graduate the Airtable/Zapier tangle before a UAE enterprise security review kills it.",
  "legacy-software-modernization":
    "Keep the data, replace the 2014 desktop tool your Dubai staff still lives in.",
  "excel-automation-smart-reporting":
    "UAE finance teams still close in Excel. We automate the refresh and leave a file they can audit.",
  "ai-saas-development":
    "AI products sold into the GCC need evals, a fallback, and a story for PDPL. We write those in.",
  "ai-product-development":
    "We will tell a Dubai product team when the model is decoration. If it ships, it has a metric.",
  "ai-workflow-automation":
    "Document in, action out, human in the loop. Built for Sunday–Thursday ops, not a US timezone bot.",
  "chatbot-development":
    "UAE support lives on web chat and WhatsApp. The bot answers in English, then hands off to a named agent.",
  "rag-application-development":
    "Retrieve from your policies and contracts, cite the chunk, refuse when the corpus is thin. PDPL-aware hosting.",
  "ai-document-processing":
    "Trade licenses, invoices, and Emirates ID packets. Extraction with a human review queue, not a magic PDF.",
  "ai-search-systems":
    "Search that understands your UAE corpus: mixed English, scanned Arabic, and the filenames nobody normalized.",
  "ai-recommendation-systems":
    "Recommendations with an explain line. Useful when a Dubai merchandiser has to defend why SKU A won.",
  "ai-agents-development":
    "Agents with tools, timeouts, and a kill switch. We do not leave a loop running unattended on a UAE desk.",
  "llm-integration":
    "Wire the model into your stack with logging and cost caps. GST-hour support while we land it.",
  "openai-api-integration":
    "OpenAI (or the model you already approved) behind your auth, with a written fallback if the key dies.",
  "custom-ai-tools":
    "A small internal tool, not a platform. One job a Dubai operator repeats every week.",
  "ai-dashboard-development":
    "Show model quality, cost, and the queue. The chart a UAE ops lead can read without a data scientist.",
  "ai-data-extraction":
    "Pull structured fields from the messy PDFs free-zone vendors still send. Confidence scores, not silent guesses.",
  "ai-customer-support-tools":
    "Deflection that a UAE support manager can measure by Tuesday. Macros and handoff, not a personality.",
  "custom-gpt-knowledge-base":
    "A GPT on your policies, with citations. Hosted where your UAE counsel can accept the data map.",
  "ai-content-generation":
    "Drafts for English UAE campaigns. A human editor stays in the loop; we will not auto-publish Arabic.",
  "ai-video-generation":
    "Short product clips for paid social. Brand kit and cut list first; we do not spray unreviewed footage.",
  "ui-ux-design":
    "Flows for bilingual products. We design the English path and leave room for Arabic without restacking the page.",
  "product-design":
    "Decide what a UAE user does in the first three screens. Then we draw and ship those, not a 40-screen myth.",
  "web-app-design":
    "Web apps that survive luxury-brand taste and a harsh noon screen on Sheikh Zayed Road.",
  "saas-ui-design":
    "SaaS UI that a DIFC analyst and a warehouse clerk can both finish. Density where it earns its keep.",
  "dashboard-ui-design":
    "Trading and ops dashboards: the number, the state, the next action. No ornament that hides a breach.",
  "design-systems":
    "A token set that can grow an Arabic theme later. We start English-first so you can ship this quarter.",
  "wireframing":
    "Low-fi that forces the Sunday kickoff decision: what is in v1 for the Dubai launch.",
  "prototyping":
    "Clickable prototypes you can put in front of a UAE buyer before we write production CSS.",
  "landing-page-design":
    "Landing pages for AED offers and GST-hour CTAs. One job: book the call, not win an award.",
  "mobile-app-ui-design":
    "Mobile UI that works in a car on Emirates Road and in a quiet ADGM office. Thumbs first.",
  "user-flow-design":
    "Map the real UAE path: WhatsApp inbound, English form, human callback. Then we cut the extra steps.",
  "figma-design":
    "Figma in your project, components named, and a frontend partner on the same team. No orphan file.",
  "website-ux-audit":
    "We score the UAE site the way a buyer from Dubai Internet City actually clicks, including the Arabic switch if you have one.",
  "ux-research":
    "Short research with the users you can reach in Dubai or remotely. Five conversations beat a 60-page persona deck.",
  "branding-visual-identity":
    "Identity that can sit next to DIFC and Hub71 neighbors without looking like a template. We will say no to gold-foil clichés.",
  "data-visualization-design":
    "Charts a family office or desk head can read in ten seconds. We cut the 3D pies.",
  "strategy-backtesting":
    "Event-driven backtests with fees and sessions that match the venues you actually trade, including UAE holidays you name.",
  "forward-testing-shadow-mode":
    "Shadow the live book in GST hours before capital moves. We treat fill quality as a requirement.",
  "live-trading-execution-systems":
    "Execution with idempotent orders and a kill switch someone in Dubai can hit. No weekend-bot theatrics.",
  "real-time-pnl-exposure-monitoring":
    "PnL and exposure a principal can see before London opens. Alerts that mean something.",
  "trade-analytics-reporting":
    "Post-trade reports for allocators who sit in DIFC. The file they asked for last quarter, on a schedule.",
  "quant-research-infrastructure":
    "Research stacks with reproducibility. Useful when two PMs in Abu Dhabi disagree about a feature.",
  "trading-system-audits-consulting":
    "We read the code and the runbook. Then we tell you what would fail a serious ops review.",
  "trading-stack-observability-alerting":
    "Pages that fire when the feed dies, not when CPU is ‘a bit high’. GST on-call windows we agree in writing.",
  "tradingview-indicators-automation":
    "If TradingView is the source of truth, we automate from it carefully. We will say when you have outgrown it.",
  "trading-tech-maintenance-on-call":
    "A named engineer in an overlapping GST window. Not a ticket queue in another hemisphere.",
  "payment-gateway-integration":
    "Checkout for UAE cards and the processor you already have. Reconciliation in the same sprint.",
  "stripe-integration":
    "Stripe for AED and cards UAE customers actually hold. Webhooks idempotent, receipts you can show finance.",
  "razorpay-integration":
    "Razorpay is an India rail. For UAE checkout we will steer you to Stripe or a local processor and say why.",
  "subscription-billing-setup":
    "Recurring AED billing, proration, and dunning that does not shame a customer in a WhatsApp screenshot.",
  "crm-integration":
    "HubSpot or the CRM you already pay for, wired to the forms and WhatsApp inbox your Dubai team uses.",
  "whatsapp-api-integration":
    "Official WhatsApp Cloud API. Templates, opt-in, and a handoff. We will not scrape WhatsApp Web.",
  "email-automation-integration":
    "Lifecycle mail that respects GST send windows and the Friday–Saturday weekend.",
  "google-analytics-setup":
    "GA4 with UAE consent reality in mind: events you can defend, not 40 tags from a leftover GTM dump.",
  "cms-integration":
    "A CMS your marketing lead in Dubai can edit without paging engineering every Thursday.",
  "third-party-api-integration":
    "The third-party you already signed. Sandbox, retries, and a written failure mode.",
  "authentication-setup":
    "Auth that survives an enterprise SSO ask from a UAE group. MFA on, passwords not in a sheet.",
  "role-based-access-control":
    "Roles for the org chart you actually have: sponsor in Abu Dhabi, operators in Dubai, vendor in India.",
  "database-setup":
    "A database with backups and a region you can point at in a PDPL conversation. We pick it with you.",
  "cloud-deployment":
    "Vercel, AWS, or the cloud your UAE IT already approved. Staging first, then a rollback you have rehearsed.",
  "startup-mvp":
    "A Hub71 or in5 MVP with one metric. We will cut the marketplace-plus-AI-plus-app fantasy.",
  "founder-tech-partner":
    "A founder in Dubai gets a named counterpart, not a rotating bench. Weekly demos in GST.",
  "product-strategy":
    "Two or three written bets. We will not sell a 12-week strategy that never touches the repo.",
  "product-consulting":
    "A short, opinionated read of the product. Useful before you hire a 20-person agency in Business Bay.",
  "tech-consulting":
    "Architecture advice you can act on this month. We decline work that is only a slide.",
  "saas-launch-partner":
    "Launch the UAE SaaS with billing, auth, and a landing page that books a call. Same team.",
  "prototype-to-product":
    "Take the Figma or no-code demo you showed at GITEX and make it a repo someone can maintain.",
  "idea-to-mvp":
    "From a WhatsApp voice note to a scoped MVP. We write the cut list before we write code.",
  "product-roadmap-planning":
    "A roadmap that fits a Sunday–Thursday team and a real budget. Dates we will defend.",
  "software-architecture-planning":
    "A one-sitting architecture for the next two quarters. We name the boring parts: auth, backups, kill switches.",
  "end-to-end-product-design-development":
    "Design and build in one pod for a UAE launch. No hand-off to a mystery frontend shop.",
};

const CATEGORY_CONSTRAINTS = {
  build: [
    "Sunday–Thursday delivery, GST standups",
    "VAT-aware invoices and AED pricing in the UI when you need them",
    "code in your repo, not a black-box local retainer",
  ],
  "ai-automation": [
    "English first, Arabic only when you supply copy or a specialist",
    "PDPL and data-map questions answered in writing",
    "human handoff your Dubai agents already use",
  ],
  design: [
    "layouts that can take Arabic later without a redesign",
    "frontend in the same sprint as the Figma",
    "a CTA that books a call, not a mood film",
  ],
  "markets-trading": [
    "fees, sessions, and kill switches in the spec",
    "GST monitoring windows you can name",
    "no unattended weekend bots",
  ],
  "integrations-platform": [
    "sandbox, then prod, with a rollback",
    "WhatsApp and card rails treated as real requirements",
    "reconciliation in the same window as the integration",
  ],
  "startup-tech-partner": [
    "one hypothesis, one demo, one metric",
    "GST hours with a named counterpart",
    "no equity-only deals",
  ],
};

function hashIndex(seed, modulo) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % modulo;
}

function categoryConstraint(categorySlug, slug) {
  const options = CATEGORY_CONSTRAINTS[categorySlug] ?? CATEGORY_CONSTRAINTS.build;
  return options[hashIndex(slug, options.length)];
}

/**
 * @param {{ slug: string, title: string, categorySlug: string, categoryTitle: string }} service
 */
export function getUaeServiceCopy(service) {
  const angle =
    SLUG_ANGLES[service.slug] ??
    `${service.title} for UAE teams: ${categoryConstraint(
      service.categorySlug,
      service.slug
    )}. Scoped in writing.`;

  const delivery = [
    `${service.title} is available to companies in Dubai, Abu Dhabi, and the wider UAE.`,
    `We work in ${UAE.timezoneLabel}, on ${UAE.phoneDisplay}, and we ship in your repo.`,
    `${angle} ${categoryConstraint(service.categorySlug, `${service.slug}-x`)}.`,
    "Travel to Dubai when a room is the faster path. We will not pretend a local brass-plate office is the product.",
  ].join(" ");

  const faq = {
    q: `Do you take UAE clients for ${service.title}?`,
    a: `Yes. Book a call on the +971 line. We scope in English, demo weekly in GST, and leave the work in your repo. ${angle}`,
  };

  return {
    angle: lintText(angle),
    delivery: lintText(delivery),
    faq: { q: lintText(faq.q), a: lintText(faq.a) },
  };
}

function servicesForCategory(categorySlug) {
  return SERVICES.filter((service) => service.categorySlug === categorySlug).map(
    (service) => ({
      title: service.title,
      path: service.path,
      slug: service.slug,
      angle: getUaeServiceCopy(service).angle,
    })
  );
}

const HUB_FAQS = [
  {
    q: "Are you a Dubai agency with a walk-in office?",
    a: "No. Futurebits is a small remote studio with a UAE phone (+971 58 516 5671). We deliver in your repo, keep GST hours, and travel to Dubai when a workshop is the faster path. If you need a brass-plate local entity as the vendor, say so on the call — we will tell you if that blocks us.",
  },
  {
    q: "Can you work Sunday to Thursday?",
    a: "Yes. GST (UTC+4) is the default for UAE work. India overlap is late morning GST. We will not book you into a 11pm Dubai standup unless you ask.",
  },
  {
    q: "Do you speak Arabic?",
    a: "Working language is English. We design and build interfaces that can take Arabic copy without restacking the layout. Native Arabic writing is yours or a specialist we can introduce. We will not auto-translate legal or brand copy.",
  },
  {
    q: "How do you handle UAE data protection?",
    a: "We write a short data map before anything leaves your tenant: what is stored, where it is hosted, who can see it. PDPL questions get a written answer. We do not move production data into a personal laptop to ‘go faster’.",
  },
  {
    q: "What does a first engagement look like?",
    a: "A 30-minute call, a written scope with cut lines, then a 2–4 week slice in your repo. You get weekly demos and a named team. Book a call if that is the shape you want.",
  },
  {
    q: "Do you cover all 90 services for UAE companies?",
    a: "Yes — the same catalog, delivered in GST. Start on this page, pick the vertical (AI, Markets, Design), or jump to the service URL. If two services overlap, we will pick one on the call instead of selling both.",
  },
];

const AI_FAQS = [
  {
    q: "Can a chatbot handle English and Arabic?",
    a: "English on day one. Arabic when you supply reviewed copy or a linguist. The dangerous part is mixing both in one intent table without a human review path — we will not do that.",
  },
  {
    q: "Where does the model run?",
    a: "Wherever your counsel accepts: your VPC, a region we name in the data map, or the provider you already approved. We will not silently send Emirates ID scans to a consumer chat UI.",
  },
  {
    q: "How fast can a UAE team see something useful?",
    a: "A first automation or retrieval slice in 2–3 weeks if you can grant access. Broader agent work is 8–12 weeks with evals and a fallback.",
  },
  {
    q: "WhatsApp or web chat?",
    a: "Whichever your Dubai customers already use. Official WhatsApp Cloud API only. We will not scrape WhatsApp Web.",
  },
];

const MARKETS_FAQS = [
  {
    q: "Do you trade ADX or DFM for us?",
    a: "No. We build the systems. You or your licensed entity place the risk. If you need a SEBI or SCA license holder, that is a different firm.",
  },
  {
    q: "Can you sit with a DIFC or ADGM desk?",
    a: "Yes, for workshops and go-lives we agree in the scope. Day-to-day delivery is remote with GST overlap and a kill-switch runbook.",
  },
  {
    q: "What venues do you know?",
    a: "Indian cash and F&O, US equities, FX, and crypto perps are the usual set. If your UAE book is on a local venue, bring the API docs to the call.",
  },
  {
    q: "Do you run unattended strategies?",
    a: "Not without shadow mode, alerts, and a person who owns the pager in a named window. We will refuse a ‘set and forget’ brief.",
  },
];

const DESIGN_FAQS = [
  {
    q: "Will you design in Arabic?",
    a: "We reserve space, mirroring, and type for Arabic. Native Arabic art direction is a specialist we can introduce. English ships first unless you already have Arabic copy.",
  },
  {
    q: "Do you only deliver Figma?",
    a: "No. Design and frontend are one team. The point of a UAE launch page is a booked call, not a file.",
  },
  {
    q: "Can you match a luxury or finance look without the cliché?",
    a: "Yes. We will push back on gold foil, skyline stock, and ‘innovation’ ligatures. Bring the two sites you respect.",
  },
  {
    q: "How do UX audits work for a bilingual site?",
    a: "We walk the English path and the language switch, then score the leaks: dead CTAs, form drop-off, and the pages a Dubai buyer actually uses.",
  },
];

const PAGES = {
  hub: {
    key: "hub",
    path: UAE_PATHS.hub,
    themeKey: "neutral",
    parent: { label: "Home", href: "/" },
    kicker: "UAE & GCC",
    title: "A small studio for UAE teams that need software, AI, and trading systems.",
    lede:
      "Futurebits takes work from Dubai, Abu Dhabi, and the rest of the UAE on a +971 line. We ship in your repo, keep GST hours, and travel when a room is faster than another deck.",
    body: [
      "Most ‘Dubai agencies’ sell presence. We sell a named team, a written scope, and weekly demos. The phone is UAE. The work is in your GitHub, GitLab, or whatever you already pay for.",
      "Start from the track you actually need: production AI, markets infrastructure, or design-plus-frontend. The other 90 services sit under those tracks. If two look identical, we will pick one on the call.",
      "We are not a staff-augmentation bench and we are not a local sponsorship. If you need a large on-site crew in Business Bay, we are the wrong call.",
    ],
    points: [
      {
        title: "GST hours, +971 phone",
        body: "Sunday–Thursday by default. India overlap is late morning GST. You can call +971 58 516 5671 or book a slot on Cal.com.",
      },
      {
        title: "English working language",
        body: "Interfaces can take Arabic later. We will not auto-translate legal or brand copy, and we will say so before you spend.",
      },
      {
        title: "Your repo, your cloud",
        body: "Access, staging, and a data map before production data moves. Useful when PDPL or a group IT review shows up.",
      },
    ],
    tracks: [
      {
        label: "AI & Automation",
        href: UAE_PATHS.ai,
        body: "Chatbots, RAG, agents, and workflow automation for UAE ops and support. Evals and a human handoff, not a personality.",
      },
      {
        label: "Markets",
        href: UAE_PATHS.markets,
        body: "Backtests, shadow mode, execution, and PnL for desks that can take a meeting in DIFC or ADGM.",
      },
      {
        label: "Design",
        href: UAE_PATHS.design,
        body: "UI/UX, audits, landing pages, and frontend in one team. The page should book a call, not win an award.",
      },
    ],
    faqs: HUB_FAQS,
  },
  ai: {
    key: "ai",
    path: UAE_PATHS.ai,
    themeKey: "ai-automation",
    parent: { label: "AI", href: "/ai" },
    kicker: "AI for UAE teams",
    title: "Production AI for Dubai and Abu Dhabi ops, support, and product teams.",
    lede:
      "Retrieval, agents, and automations that survive a Monday stand-up in GST. One small team. First useful slice in 2–3 weeks if you can grant access.",
    body: [
      "UAE support is WhatsApp-heavy and bilingual in ambition. We ship English first, with a handoff your agents already use. Arabic joins when the copy is reviewed — not when a model guesses.",
      "We write a data map before documents leave your tenant. That is the difference between a demo and something your counsel can live with.",
      "If the math does not work — low volume, no source of truth, no owner — we will say no on the call.",
    ],
    points: [
      {
        title: "WhatsApp or web, officially",
        body: "Cloud API and your existing desk. We will not scrape WhatsApp Web or train on Emirates ID images you did not approve.",
      },
      {
        title: "Evals before rollout",
        body: "A small labeled set, a fallback, and a weekly quality number. Useful when a Dubai ops lead asks ‘is it better than the macros?’",
      },
      {
        title: "PDPL in writing",
        body: "Where the model runs, what is logged, who can replay a transcript. Short, specific, no policy theatre.",
      },
    ],
    faqs: AI_FAQS,
  },
  markets: {
    key: "markets",
    path: UAE_PATHS.markets,
    themeKey: "markets-trading",
    parent: { label: "Markets", href: "/markets" },
    kicker: "Markets for UAE desks",
    title: "Trading and risk infrastructure for DIFC, ADGM, and remote UAE books.",
    lede:
      "Execution, shadow mode, and monitoring with fees and kill switches in the spec. Built for people who can lose real money, not a Telegram signal group.",
    body: [
      "Dubai has plenty of weekend bots. We build the unglamorous layer: idempotent orders, session calendars you name (including UAE holidays), and a pager someone owns in GST.",
      "We do not take a discretionary mandate and we do not lend you a license. You or your regulated entity own the risk. We own the repo quality.",
      "Indian cash and F&O, US equities, FX, and crypto perps are the usual venues. Bring ADX/DFM API docs if that is the book.",
    ],
    points: [
      {
        title: "Shadow before live",
        body: "Paper and shadow against the real book. Fill quality is a requirement, not a hope.",
      },
      {
        title: "A kill switch a human can hit",
        body: "Named owner, named window. We refuse unattended ‘set and forget’ briefs.",
      },
      {
        title: "Reports allocators will open",
        body: "PnL, exposure, and the post-trade file a DIFC principal asked for last quarter — on a schedule.",
      },
    ],
    faqs: MARKETS_FAQS,
  },
  design: {
    key: "design",
    path: UAE_PATHS.design,
    themeKey: "design",
    parent: { label: "Design", href: "/design" },
    kicker: "Design for UAE products",
    title: "Product design and frontend for UAE launches that need to book a call.",
    lede:
      "UI/UX, audits, landing pages, and React in one small team. English first, room for Arabic, no gold-foil skyline kit.",
    body: [
      "The UAE web is full of luxury templates that do not convert. We design the three screens a buyer from Dubai Internet City actually uses, then we ship them.",
      "Bilingual is a layout problem before it is a translation problem. We reserve the space. Native Arabic writing stays with you or a specialist.",
      "Figma without frontend is how projects stall after GITEX. We will not take that shape of work.",
    ],
    points: [
      {
        title: "Audit the real path",
        body: "Language switch, forms, and the CTA. We score leaks, then offer to fix them in the same team.",
      },
      {
        title: "Landing pages with AED honesty",
        body: "Price, timing, and Book a call. We cut the mood film that hides a missing offer.",
      },
      {
        title: "Systems that can grow Arabic",
        body: "Tokens and components that do not assume every string is short English. You can add the second language later.",
      },
    ],
    faqs: DESIGN_FAQS,
  },
};

/**
 * @param {UaePageKey} key
 */
export function getUaePage(key) {
  const page = PAGES[key];
  if (!page) return null;

  const categorySlugs =
    key === "hub"
      ? SERVICE_CATEGORIES.map((category) => category.slug)
      : [VERTICAL_CATEGORY[key]];

  const categories = categorySlugs.map((slug) => {
    const category = SERVICE_CATEGORIES.find((item) => item.slug === slug);
    return {
      slug,
      title: category?.title ?? slug,
      intro: CATEGORY_UAE_INTRO[slug],
      href: `/services/${slug}`,
      services: servicesForCategory(slug),
    };
  });

  return {
    ...page,
    title: lintText(page.title),
    lede: lintText(page.lede),
    body: page.body.map((paragraph) => lintText(paragraph)),
    points: page.points.map((point) => ({
      title: lintText(point.title),
      body: lintText(point.body),
    })),
    faqs: page.faqs.map((item) => ({
      q: lintText(item.q),
      a: lintText(item.a),
    })),
    categories,
    serviceCount: categories.reduce(
      (sum, category) => sum + category.services.length,
      0
    ),
  };
}

/**
 * @param {string} pathname
 * @returns {UaePageKey | null}
 */
export function getUaePageKeyForPath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const entry = Object.entries(UAE_PATHS).find(([, href]) => href === path);
  return entry ? /** @type {UaePageKey} */ (entry[0]) : null;
}

export function getAllUaeServiceCopy() {
  return SERVICES.map((service) => ({
    slug: service.slug,
    ...getUaeServiceCopy(service),
  }));
}
