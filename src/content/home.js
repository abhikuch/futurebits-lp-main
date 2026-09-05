import { buildCalUrl } from "@/lib/cal";
import { COMPANY, ROUTES } from "@/config/site";

const CAL_AI = "https://cal.com/futurebits/ai?duration=30";
const CAL_MARKETS = "https://cal.com/futurebits/markets?duration=30";
const CAL_DESIGN = "https://cal.com/futurebits/design?duration=30";

export const HOME_CAL = {
  hero: buildCalUrl(CAL_AI, { medium: "cta", campaign: "home-hero" }),
  ai: buildCalUrl(CAL_AI, { medium: "cta", campaign: "home-ai" }),
  markets: buildCalUrl(CAL_MARKETS, { medium: "cta", campaign: "home-markets" }),
  design: buildCalUrl(CAL_DESIGN, { medium: "cta", campaign: "home-design" }),
  close: buildCalUrl(CAL_AI, { medium: "cta", campaign: "home-close" }),
};

export const HOME_HERO = {
  kicker: `${COMPANY.name} · three isolated tracks`,
  title: "Pick the room. We will not sell you the other two.",
  lede:
    "AI, markets, and design do not share a palette, a process, or a pitch. Same small team. Different failure modes. Walk into the room that already has a problem — we ship in your repo, and we will tell you if we should pass.",
  primaryCta: "Book a call",
  secondaryCta: "See the tracks",
  index: [
    {
      n: "01",
      label: "AI",
      href: "#track-ai",
      line: "Retrieval, agents, and automations that cut real hours.",
    },
    {
      n: "02",
      label: "Markets",
      href: "#track-markets",
      line: "Execution and risk plumbing that survives the next regime.",
    },
    {
      n: "03",
      label: "Design",
      href: "#track-design",
      line: "Product surfaces that ship in your repo, not a deck.",
    },
  ],
};

export const HOME_TRACKS_INTRO = {
  kicker: "The rooms",
  title: "Three worlds. The doors stay closed.",
  lede:
    "We do not remix an AI pitch into a trading desk, or a markets motif into a marketing site. Each chapter below uses that vertical’s tokens only. Start in one room.",
};

export const HOME_TRACKS = [
  {
    id: "ai",
    index: "01",
    href: ROUTES.ai.path,
    calHref: HOME_CAL.ai,
    enterLabel: "Enter the AI room",
    kicker: "AI & Automation",
    title: "Production AI that cuts manual work.",
    lede:
      "Retrieval, automation, and agent systems inside your repo. First useful automation in 2–3 weeks; a full rollout in 8–12. We map the workflow before we pick a model.",
    point:
      "Most teams should not start with an agent. Start with the line that already burns hours every week.",
    wontDo:
      "We will not ship a demo that cannot survive a first week of real tickets.",
    signals: [
      { label: "First useful automation", value: "2–3 weeks" },
      { label: "Typical rollout", value: "8–12 weeks" },
      { label: "Bar to ship", value: "Evals, or it waits" },
    ],
    services: [
      { categorySlug: "ai-automation", serviceSlug: "chatbot-development" },
      { categorySlug: "ai-automation", serviceSlug: "ai-agents-development" },
      { categorySlug: "ai-automation", serviceSlug: "custom-gpt-knowledge-base" },
    ],
  },
  {
    id: "markets",
    index: "02",
    href: ROUTES.markets.path,
    calHref: HOME_CAL.markets,
    enterLabel: "Enter Markets",
    kicker: "Markets",
    title: "Trading systems built to survive the next regime change.",
    lede:
      "Event-driven backtests with real costs. Paper-and-shadow before production. Runbooks and kill-switches a junior can run at 2am. Edge dies. Infrastructure compounds.",
    point:
      "We do not run your capital. That keeps the invoice honest and the incentives clean.",
    wontDo:
      "We will not treat slippage, fees, or latency as a footnote you discover after go-live.",
    signals: [
      { label: "Backtests", value: "Event-driven + real costs" },
      { label: "Go-live", value: "Paper, then shadow" },
      { label: "Ops", value: "Runbook + kill switch" },
    ],
    services: [
      { categorySlug: "markets-trading", serviceSlug: "strategy-backtesting" },
      {
        categorySlug: "markets-trading",
        serviceSlug: "live-trading-execution-systems",
      },
      {
        categorySlug: "markets-trading",
        serviceSlug: "trading-system-audits-consulting",
      },
    ],
  },
  {
    id: "design",
    index: "03",
    href: ROUTES.design.path,
    calHref: HOME_CAL.design,
    enterLabel: "Enter Design",
    kicker: "Design",
    title: "Design that moves the metric, not the deck.",
    lede:
      "Product design plus frontend in one small team. Onboarding, activation, upgrade. Mockups are throwaways. The artefact is live code in your repo, every week.",
    point:
      "We default to fewer pixels, fewer pages, and fewer features. The hard work is removing things.",
    wontDo:
      "We will not polish a flow that has no named number attached to it.",
    signals: [
      { label: "Team shape", value: "Design + frontend together" },
      { label: "Cadence", value: "Weekly demo" },
      { label: "The number", value: "Activation, conversion, retention" },
    ],
    services: [
      { categorySlug: "design", serviceSlug: "website-ux-audit" },
      { categorySlug: "design", serviceSlug: "landing-page-design" },
      { categorySlug: "design", serviceSlug: "design-systems" },
    ],
  },
];

export const HOME_BELIEFS = {
  kicker: "How this studio works",
  title: "We say no more often than shops that only say yes.",
  lede:
    "Most teams should not hire us for a logo, a strategy PDF, or a bench of interchangeable juniors. We take scoped work we can merge. If that feels tight, we are the wrong call — better on the first conversation than in month three.",
  manifesto: {
    title: "Three rooms. One bar.",
    body:
      "Isolation is the product. AI cyan stays in the AI room. Markets teal stays on the desk. Design keeps its air and its white type. We will not flatten the three into a generic services grid and hope you pick something.",
  },
  items: [
    {
      title: "You talk to the people doing the work.",
      body:
        "No account-manager layer. No junior hot-swaps mid-sprint. Designers, engineers, and AI builders in the same thread as the weekly demo.",
    },
    {
      title: "Smallest bet that can fail in public.",
      body:
        "We cut scope until one hypothesis is testable. A sprint before a pod. A pod before a partner seat. The first useful version should land in weeks.",
    },
    {
      title: "A metric you can check weekly, or we stop.",
      body:
        "Hours saved, fill quality, activation. If we cannot name the number on the first call, we will not invent a program around the fog.",
    },
  ],
};

export const HOME_FEATURED_SERVICES = [
  { categorySlug: "ai-automation", serviceSlug: "chatbot-development" },
  { categorySlug: "ai-automation", serviceSlug: "ai-agents-development" },
  { categorySlug: "markets-trading", serviceSlug: "strategy-backtesting" },
  {
    categorySlug: "markets-trading",
    serviceSlug: "live-trading-execution-systems",
  },
  { categorySlug: "design", serviceSlug: "website-ux-audit" },
  { categorySlug: "design", serviceSlug: "landing-page-design" },
];

export const HOME_CLOSE = {
  kicker: "Start in one room",
  title: "Bring the problem, not the wishlist.",
  lede:
    "Thirty minutes. We will tell you which track, which model, and whether we should pass. Keep the one-page scope sketch either way.",
  phoneNote:
    "UAE number +971 58 516 5671. GST invoicing is available when you need it — this page is the studio door, not a regional landing.",
};
