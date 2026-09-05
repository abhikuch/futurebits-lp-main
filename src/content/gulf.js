import { lintText } from "@/content/content-voice";
import { SERVICE_CATEGORIES, SERVICES } from "@/content/services";
import { COMPANY } from "@/config/site";
import { assertNever } from "@/lib/assert-never";
import { UAE, getUaeServicePath } from "@/content/uae";

/**
 * GCC / Gulf country hubs. Substantial unique pages — not 90×country doorways.
 * Per-service rankable URLs live once at /uae/services/[category]/[service].
 */

export const GULF = {
  region: "Gulf Cooperation Council",
  phone: COMPANY.phone,
  phoneDisplay: UAE.phoneDisplay,
  timezoneLabel: UAE.timezoneLabel,
  language: "English",
};

export const GULF_PATHS = {
  hub: "/gulf",
  "saudi-arabia": "/gulf/saudi-arabia",
  qatar: "/gulf/qatar",
  kuwait: "/gulf/kuwait",
  bahrain: "/gulf/bahrain",
  oman: "/gulf/oman",
};

export const GULF_PAGE_KEYS = /** @type {const} */ ([
  "hub",
  "saudi-arabia",
  "qatar",
  "kuwait",
  "bahrain",
  "oman",
]);

/** @typedef {(typeof GULF_PAGE_KEYS)[number]} GulfPageKey */

export const GULF_COUNTRIES = [
  {
    key: "saudi-arabia",
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    shortName: "KSA",
    countryCode: "SA",
    cities: ["Riyadh", "Jeddah", "Dammam"],
    week: "Sunday–Thursday",
    currency: "SAR",
    vatNote: "15% VAT is the usual commercial reality",
  },
  {
    key: "qatar",
    slug: "qatar",
    name: "Qatar",
    shortName: "Qatar",
    countryCode: "QA",
    cities: ["Doha", "Lusail"],
    week: "Sunday–Thursday",
    currency: "QAR",
    vatNote: "no VAT today; invoices still need a clean audit trail",
  },
  {
    key: "kuwait",
    slug: "kuwait",
    name: "Kuwait",
    shortName: "Kuwait",
    countryCode: "KW",
    cities: ["Kuwait City"],
    week: "Sunday–Thursday",
    currency: "KWD",
    vatNote: "no VAT; procurement still wants a written scope",
  },
  {
    key: "bahrain",
    slug: "bahrain",
    name: "Bahrain",
    shortName: "Bahrain",
    countryCode: "BH",
    cities: ["Manama"],
    week: "Sunday–Thursday",
    currency: "BHD",
    vatNote: "10% VAT on most commercial invoices",
  },
  {
    key: "oman",
    slug: "oman",
    name: "Oman",
    shortName: "Oman",
    countryCode: "OM",
    cities: ["Muscat"],
    week: "Sunday–Thursday",
    currency: "OMR",
    vatNote: "5% VAT",
  },
];

const FEATURED_BY_COUNTRY = {
  "saudi-arabia": [
    "chatbot-development",
    "whatsapp-api-integration",
    "rag-application-development",
    "ui-ux-design",
    "saas-development",
    "authentication-setup",
    "website-ux-audit",
    "founder-tech-partner",
    "crm-development",
    "ai-workflow-automation",
  ],
  qatar: [
    "client-portal-development",
    "reporting-platform-development",
    "strategy-backtesting",
    "real-time-pnl-exposure-monitoring",
    "custom-software-development",
    "ui-ux-design",
    "role-based-access-control",
    "dashboard-development",
  ],
  kuwait: [
    "internal-tool-development",
    "crm-development",
    "excel-automation-smart-reporting",
    "business-process-automation",
    "ui-ux-design",
    "whatsapp-api-integration",
    "admin-panel-development",
    "product-consulting",
  ],
  bahrain: [
    "stripe-integration",
    "authentication-setup",
    "saas-development",
    "landing-page-design",
    "payment-gateway-integration",
    "subscription-billing-setup",
    "cloud-deployment",
    "website-ux-audit",
  ],
  oman: [
    "startup-mvp",
    "landing-page-design",
    "web-app-development",
    "cms-integration",
    "idea-to-mvp",
    "ui-ux-design",
    "whatsapp-api-integration",
    "cloud-deployment",
  ],
};

function featuredServices(countryKey) {
  const slugs = FEATURED_BY_COUNTRY[countryKey] ?? [];
  return slugs
    .map((slug) => SERVICES.find((service) => service.slug === slug))
    .filter(Boolean)
    .map((service) => ({
      title: service.title,
      slug: service.slug,
      path: getUaeServicePath(service),
      catalogPath: service.path,
      categoryTitle: service.categoryTitle,
    }));
}

function categoryServicePreview(limit = 6) {
  return SERVICE_CATEGORIES.map((category) => ({
    slug: category.slug,
    title: category.title,
    href: `/services/${category.slug}`,
    services: SERVICES.filter((service) => service.categorySlug === category.slug)
      .slice(0, limit)
      .map((service) => ({
        title: service.title,
        path: getUaeServicePath(service),
        slug: service.slug,
      })),
  }));
}

const HUB_FAQS = [
  {
    q: "Do you have an office in every Gulf capital?",
    a: "No. Futurebits is a remote studio with a UAE phone (+971 58 516 5671). We keep GST hours, ship in your repo, and travel when a workshop is faster than another call. We will not invent a brass-plate address in Riyadh or Doha.",
  },
  {
    q: "Is the working language Arabic?",
    a: "English. Interfaces can take Arabic copy without restacking the layout. Native Arabic writing is yours or a specialist we can introduce. We will not auto-translate legal, brand, or regulator-facing copy.",
  },
  {
    q: "How do you handle data protection across the GCC?",
    a: "We write a short data map before production data moves: what is stored, which region hosts it, who can replay it. UAE PDPL, KSA PDPL, and Qatar data rules are not the same form. We answer the one that applies to your tenant.",
  },
  {
    q: "Do you build a separate site for every Gulf city?",
    a: "No. One geo landing per service covers UAE and the wider Gulf. Country hubs here explain local buyers, week, and money. That is the honest structure — not 540 thin city pages.",
  },
  {
    q: "What does a first call look like?",
    a: "Thirty minutes on Cal.com or the +971 line. We will tell you if we are the wrong team. If we continue, you get a written scope with cut lines and a GST demo cadence.",
  },
];

const COUNTRY_FAQS = {
  "saudi-arabia": [
    {
      q: "Can you work Sunday to Thursday with a Riyadh team?",
      a: "Yes. GST overlap covers a Riyadh or Jeddah weekday. We will not book you into a Thursday-night standup unless you ask.",
    },
    {
      q: "Do you write Arabic product copy?",
      a: "No. We reserve space, mirroring, and type. You or a specialist supply reviewed Arabic. English ships first unless the copy is already approved.",
    },
    {
      q: "How do you treat KSA PDPL?",
      a: "As a written data map, not a slide. Hosting region, logs, and who can export a transcript get named before go-live.",
    },
    {
      q: "Will you pretend you are a Riyadh agency?",
      a: "No. Remote studio, UAE phone, travel when a room is the faster path. If a local entity is a procurement gate, say so on the call.",
    },
  ],
  qatar: [
    {
      q: "Do you work with family offices and energy teams in Doha?",
      a: "Yes, on software, portals, reporting, and trading infrastructure. We do not take a discretionary investment mandate.",
    },
    {
      q: "Qatar has no VAT. How do you invoice?",
      a: "Clean line items, a written scope, and the currency we agree on the call. We will not invent a VAT line you do not owe.",
    },
    {
      q: "Can you sit in Lusail or West Bay for a workshop?",
      a: "When the scope says so. Day-to-day delivery stays remote with GST overlap.",
    },
    {
      q: "Arabic or English for the product?",
      a: "English working language. Bilingual UI is a layout problem we will reserve for. Native Arabic writing is not something we fake.",
    },
  ],
  kuwait: [
    {
      q: "Do you understand how Kuwaiti groups actually buy software?",
      a: "Enough to know the work is relationship-heavy and the Excel-plus-WhatsApp stack is real. We write scope, then ship in your repo. We do not sell a transformation programme.",
    },
    {
      q: "Is there VAT in Kuwait?",
      a: "Not today. You still get a written quote and invoices your finance lead can file.",
    },
    {
      q: "Can you replace a shared inbox and a spreadsheet?",
      a: "That is most of the Kuwait brief we see: CRM, admin, automation. We will tell you if a tool you already pay for is enough.",
    },
    {
      q: "Do you staff locally in Kuwait City?",
      a: "No local office. GST hours, +971 line, travel when a workshop earns it.",
    },
  ],
  bahrain: [
    {
      q: "Do you work with licensed financial firms in Manama?",
      a: "Yes, on product, auth, billing, and frontend. We are not your CBB consultant and we will not fill in a licence form.",
    },
    {
      q: "How do you handle 10% VAT?",
      a: "Named on the invoice when it applies. AED or USD quotes are fine if that is how you buy.",
    },
    {
      q: "Is English enough for a Bahrain launch?",
      a: "Often yes for fintech and professional services. We still reserve Arabic space so you are not redesigning in month four.",
    },
    {
      q: "FinTech Bay or a free-zone stack — can you deploy there?",
      a: "We deploy to the cloud your IT already approved. The zone is your entity problem; the repo is ours.",
    },
  ],
  oman: [
    {
      q: "Is Oman too small for a scoped studio?",
      a: "No. The briefs we take are usually an MVP, a launch site, or an ops tool — not a 40-person rebuild. That is a fit.",
    },
    {
      q: "How do you handle 5% VAT?",
      a: "On the invoice when it applies. Scope is still written in English with cut lines.",
    },
    {
      q: "Can you travel to Muscat?",
      a: "When a workshop is the faster path. Default delivery is remote in GST.",
    },
    {
      q: "Do you speak Arabic for government tenders?",
      a: "Working language is English. If the tender requires native Arabic authorship, we will say we are the wrong vendor.",
    },
  ],
};

const PAGES = {
  hub: {
    key: "hub",
    path: GULF_PATHS.hub,
    themeKey: "neutral",
    parent: { label: "Home", href: "/" },
    kicker: "Gulf & GCC",
    title: "Software, AI, and trading systems for Gulf teams — without a doorway farm.",
    lede:
      "Futurebits takes work from the UAE and the wider GCC on a +971 line. One geo landing per service. Country pages for buyers, week, and money — not 540 thin “service in Riyadh” URLs.",
    body: [
      "Gulf search is full of pages that swap a city name and call it localization. That is a doorway set. It does not help a Doha family office or a Riyadh ops lead, and it does not help us rank for “chatbot development Dubai” either.",
      "The rankable unit is the service. Each of the 90 catalog services has one dedicated UAE & Gulf page under /uae/services/… with its own title, H1, and body. This hub and the five country pages explain how delivery changes when the buyer sits in KSA, Qatar, Kuwait, Bahrain, or Oman.",
      "We are a remote studio. Phone +971 58 516 5671. GST (UTC+4), Sunday–Thursday. English working language. Arabic UI is possible; Arabic copy is yours or a specialist’s. We travel when a room is faster than another deck. We will not invent a Dubai office address or a Riyadh brass plate.",
      "Start on the UAE hub if you want the full catalog with Dubai / Abu Dhabi / Sharjah context. Use a country page if your constraint is KSA PDPL, QFC reporting, Kuwaiti procurement, Bahrain VAT, or an Oman MVP. Then open the service geo page that matches the work.",
    ],
    points: [
      {
        title: "One page per service",
        body: "Chatbot work, UX audits, and live execution each get a unique geo landing. We do not clone them once per capital.",
      },
      {
        title: "Country hubs for context",
        body: "Riyadh is not Doha. These pages say so: week, currency, data rules, and the services that actually show up in that market.",
      },
      {
        title: "GST hours, +971 phone",
        body: "Sunday–Thursday by default. Book a call or dial +971 58 516 5671. India overlap is late morning GST.",
      },
    ],
    faqs: HUB_FAQS,
  },
  "saudi-arabia": {
    key: "saudi-arabia",
    path: GULF_PATHS["saudi-arabia"],
    themeKey: "neutral",
    parent: { label: "Gulf", href: GULF_PATHS.hub },
    kicker: "Saudi Arabia",
    title: "A remote studio for Riyadh and Jeddah teams that need software in the repo.",
    lede:
      "Sunday–Thursday, English working language, Arabic UI when you supply copy. We will not pretend to be a local Riyadh agency.",
    body: [
      "Most KSA briefs we see are not “make us a Dubai clone.” They are Arabic-first enterprises in Riyadh or Jeddah that still run English for engineering, plus a WhatsApp layer the vendor ignored. Vision 2030 slides do not help. A written scope for one workflow does.",
      "Riyadh buyers often sit in large groups or giga-adjacent vendors. Jeddah and Dammam briefs look more like operators who need an admin, a CRM, or a support bot that survives a Sunday queue. We take the second kind more often. If you need a 200-person on-site crew in KAFD, we are the wrong call.",
      "KSA PDPL is not UAE PDPL. We write a data map: hosting region, logs, export, and who can replay a transcript. We do not move production data onto a laptop to go faster. If your group IT will only approve a named cloud in-kingdom, say that on the call before we quote.",
      "Money is SAR and 15% VAT for most commercial work. The product UI may still show SAR, AED, or USD depending on who pays. We treat currency and invoices as requirements, not a later “localization sprint.” The week is Sunday–Thursday. GST overlap covers a Riyadh afternoon without a 10pm standup.",
      "Arabic is the customer language. English is how we write tickets and code. We reserve RTL, type, and overflow. We will not auto-translate a privacy notice or a brand line. If the tender requires native Arabic authorship, we will say no.",
      "Services that show up repeatedly: WhatsApp-official chat, RAG on policy PDFs, bilingual-ready UI, auth that survives group SSO, and MVPs for teams around Hub71’s neighbors who also operate in KSA. There is no Tadawul execution product unless you bring venue docs — we do not invent a local broker story.",
    ],
    points: [
      {
        title: "Arabic-first users, English delivery",
        body: "Layouts that can take Arabic later. Native copy stays with you or a specialist. We will say this before you spend.",
      },
      {
        title: "KSA PDPL in writing",
        body: "A short data map, a named region, and no silent training on customer files.",
      },
      {
        title: "SAR, 15% VAT, Sunday start",
        body: "Invoices and UI currency are in scope when you need them. GST demos, +971 line.",
      },
    ],
    faqs: COUNTRY_FAQS["saudi-arabia"],
  },
  qatar: {
    key: "qatar",
    path: GULF_PATHS.qatar,
    themeKey: "neutral",
    parent: { label: "Gulf", href: GULF_PATHS.hub },
    kicker: "Qatar",
    title: "Portals, reporting, and trading infra for Doha and Lusail teams.",
    lede:
      "Family offices, energy operators, and QFC-adjacent teams. English delivery, GST hours, no invented Doha office.",
    body: [
      "Qatar work we take is usually a client portal, a board pack that should not be rebuilt every Sunday, or a book that needs shadow mode before anyone talks about live orders. Lusail and West Bay buyers are used to vendors who send a deck and a local sponsor. We send a repo and a named engineer.",
      "Energy and family-office processes are document-heavy. Trade licenses, invoices, and policy PDFs show up in the same folder. If the brief is AI, it is retrieval with citations — not a personality. If the brief is markets, you or your licensed entity own the risk. We own kill switches and fees in the spec.",
      "Qatar currently has no VAT. That does not mean sloppy invoices. We quote in QAR, AED, or USD as you prefer and keep a line-item trail your finance team can open. The week is Sunday–Thursday, often with a short Thursday. We plan demos accordingly.",
      "QFC and local data expectations get a written map. We will not quietly ship customer files to a consumer chat UI. English is the working language; bilingual UI is reserved when you already know Arabic will appear. We do not claim a World Cup case study we did not ship.",
      "Travel to Doha when a workshop unblocks a family-office stakeholder who will not decide on a call. Default remains remote. Phone +971 58 516 5671.",
    ],
    points: [
      {
        title: "Family-office reporting",
        body: "Scheduled packs, portals, and role-aware dashboards. No intern rebuilding a slide every Sunday.",
      },
      {
        title: "Markets without a mandate",
        body: "Infrastructure, not a discretionary book. Shadow before live. You hold the licence.",
      },
      {
        title: "No VAT theatre",
        body: "Clean invoices in the currency you actually pay. GST overlap with Doha weekdays.",
      },
    ],
    faqs: COUNTRY_FAQS.qatar,
  },
  kuwait: {
    key: "kuwait",
    path: GULF_PATHS.kuwait,
    themeKey: "neutral",
    parent: { label: "Gulf", href: GULF_PATHS.hub },
    kicker: "Kuwait",
    title: "Internal tools and CRM for Kuwaiti groups tired of Excel-plus-WhatsApp.",
    lede:
      "Conglomerates and operators in Kuwait City. Written scope, GST hours, no local sponsorship story.",
    body: [
      "Kuwait briefs are often quieter than Dubai ones. A family group, a trading company, or a services firm where the process lives in a shared inbox and three workbooks. The buy is relationship-heavy. The delivery still has to be a repo your IT can open, not a black-box portal a vendor hosts forever.",
      "We replace the dull middle: CRM that matches how Kuwaiti sales actually work (WhatsApp, referrals, a Sunday start), admin panels with real roles, Excel refreshes a finance lead can audit. We skip the “digital transformation” workshop.",
      "There is no VAT today. Procurement still wants a written scope, a named counterpart, and a number they can defend. We quote in KWD or AED. The week is Sunday–Thursday. Arabic is common on the customer side; English is how we ship. We reserve RTL. We do not auto-translate.",
      "If the work is a public-sector tender that requires a local entity and native Arabic authorship, say so early — that often blocks us. Private groups that want software in their cloud are the fit.",
      "We will not claim a Kuwait City office. Travel when a workshop is the faster path. +971 58 516 5671.",
    ],
    points: [
      {
        title: "Kill the workbook pile",
        body: "CRM, admin, and automation with acceptance tests. Your data stays in a tenant you can name.",
      },
      {
        title: "WhatsApp as a requirement",
        body: "Official Cloud API only. Templates, opt-in, handoff. We will not scrape WhatsApp Web.",
      },
      {
        title: "No VAT, still a paper trail",
        body: "Written quote, GST demos, invoices finance can file.",
      },
    ],
    faqs: COUNTRY_FAQS.kuwait,
  },
  bahrain: {
    key: "bahrain",
    path: GULF_PATHS.bahrain,
    themeKey: "neutral",
    parent: { label: "Gulf", href: GULF_PATHS.hub },
    kicker: "Bahrain",
    title: "Product, billing, and auth for Manama financial and professional teams.",
    lede:
      "Smaller market, sharper briefs. FinTech Bay neighbors, licensed firms, and operators who want English-first software with 10% VAT handled.",
    body: [
      "Bahrain is where we see more English-first product work than in Riyadh, and more licensed-firm caution than in a free-zone SaaS. Manama buyers often already have a processor, an auditor, and a cloud opinion. The job is to wire them without a six-vendor pile-up.",
      "Typical slices: Stripe or the gateway you already have, subscription billing that can show BHD, auth that survives an enterprise SSO ask, landing pages that book a call, SaaS UI a compliance officer will not reject on sight. We are not your CBB consultant. We will not fill licence forms.",
      "VAT is 10% on most commercial invoices. We name it. The week is Sunday–Thursday. English is usually enough to launch; we still reserve Arabic so a later language switch does not restack the page.",
      "Deploy to the cloud your IT approved — AWS, Vercel, or a region you can point at in a data conversation. The free-zone or FinTech Bay entity is yours. The repo is yours. We do not host production on a personal account.",
      "Remote studio, UAE phone, travel when a workshop in Manama unblocks a stakeholder. No invented office.",
    ],
    points: [
      {
        title: "Billing and auth first",
        body: "The two things that stall a Bahrain launch. Sandbox, then prod, with a rollback.",
      },
      {
        title: "10% VAT, named",
        body: "Invoices and, when needed, UI price notes. No surprise lines.",
      },
      {
        title: "Not your regulator",
        body: "We build product. You own the licence. We will say that on the call.",
      },
    ],
    faqs: COUNTRY_FAQS.bahrain,
  },
  oman: {
    key: "oman",
    path: GULF_PATHS.oman,
    themeKey: "neutral",
    parent: { label: "Gulf", href: GULF_PATHS.hub },
    kicker: "Oman",
    title: "MVPs and launch sites for Muscat teams who need a small counterpart.",
    lede:
      "Vision 2040 slides are not a brief. We take one hypothesis, a landing page that books a call, or an ops tool — then we ship it.",
    body: [
      "Oman work we accept is usually smaller and more specific than a KSA group brief. A founder in Muscat, a tourism or logistics operator, a team that needs a site and a booking path, or an internal tool so WhatsApp stops being the system of record. That is a fit for a small studio. A ministry-wide rebuild is not.",
      "5% VAT applies on most commercial invoices. Currency is OMR; AED is fine if that is how you already pay vendors. The week is Sunday–Thursday. English working language. Arabic UI reserved when you have copy. We will not write government Arabic.",
      "Relationship-driven buying is real. We still insist on written cut lines. The first useful slice should be demoable in GST within a few weeks if you can grant access. We will cut the marketplace-plus-app-plus-AI fantasy.",
      "Cloud and CMS choices stay boring on purpose: a stack your next hire in Muscat can maintain. Travel when a workshop helps. Phone +971 58 516 5671. No Muscat office story.",
    ],
    points: [
      {
        title: "One hypothesis",
        body: "MVP, launch page, or ops tool. We write the cut list before we write code.",
      },
      {
        title: "5% VAT, OMR or AED",
        body: "Invoices your finance lead can file. GST demos.",
      },
      {
        title: "Maintainable stack",
        body: "Your repo, your cloud. We will not leave a mystery host.",
      },
    ],
    faqs: COUNTRY_FAQS.oman,
  },
};

/**
 * @param {GulfPageKey} key
 */
export function getGulfPage(key) {
  switch (key) {
    case "hub":
    case "saudi-arabia":
    case "qatar":
    case "kuwait":
    case "bahrain":
    case "oman":
      break;
    default:
      return assertNever(key);
  }

  const page = PAGES[key];
  const countries = GULF_COUNTRIES.map((country) => ({
    ...country,
    href: GULF_PATHS[country.key],
  }));

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
    countries,
    featured: key === "hub" ? [] : featuredServices(key),
    categories: key === "hub" ? categoryServicePreview(5) : [],
    uaeHref: "/uae",
    serviceCount: SERVICES.length,
  };
}

/**
 * @param {string} pathname
 * @returns {GulfPageKey | null}
 */
export function getGulfPageKeyForPath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const entry = Object.entries(GULF_PATHS).find(([, href]) => href === path);
  return entry ? /** @type {GulfPageKey} */ (entry[0]) : null;
}

export function getGulfCountrySlugs() {
  return GULF_COUNTRIES.map((country) => country.slug);
}

export function isGulfCountryPath(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return getGulfCountrySlugs().some((slug) => path === `/gulf/${slug}`);
}
