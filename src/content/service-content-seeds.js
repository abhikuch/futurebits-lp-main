/**
 * Structured seeds for playbook generation.
 * Each seed adds specificity so generated copy cannot collapse into generic lists.
 */

function hashIndex(seed, modulo) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % modulo;
}

function pick(seed, key, pool) {
  return pool[hashIndex(`${seed}-${key}`, pool.length)];
}

const CATEGORY_META = {
  build: {
    tools: [
      ["Next.js", "PostgreSQL", "Vercel"],
      ["React", "Node.js", "AWS"],
      ["TypeScript", "Supabase", "Railway"],
      ["Python", "FastAPI", "Docker"],
    ],
    contrarian: [
      "Most MVPs ship too many features. We cut scope until one hypothesis is testable.",
      "Rewriting from scratch is rarely the answer; we extend what already works first.",
      "Spreadsheets are fine until they aren't. We automate only when manual cost is measurable.",
      "No-code is a starting point, not a sin, but we won't pretend it scales forever.",
    ],
    wontDo: [
      "We won't start build without written acceptance criteria for v1.",
      "We won't take projects with no access to staging or a repo.",
      "We won't estimate a full platform from a one-line brief.",
      "We won't ship without basic error monitoring on production paths.",
    ],
    timelines: [
      "2-4 weeks for a focused v1",
      "3-5 weeks for a scoped feature set",
      "6-8 weeks when integrations are load-bearing",
    ],
  },
  "ai-automation": {
    tools: [
      ["OpenAI", "Pinecone", "LangSmith"],
      ["Anthropic", "pgvector", "Python"],
      ["OpenAI", "Weaviate", "Next.js"],
      ["Azure OpenAI", "Redis", "FastAPI"],
    ],
    contrarian: [
      "Most chatbots should handle fewer intents, not more. Breadth kills accuracy.",
      "Fine-tuning before retrieval is usually backwards for internal knowledge bases.",
      "If you can't eval it with 50 real questions, it's not ready for customers.",
      "Demos that skip escalation paths fail the first week in production.",
    ],
    wontDo: [
      "We won't ship AI features without a test set and human fallback.",
      "We won't train on customer data without explicit access boundaries.",
      "We won't promise accuracy numbers without running evals on your docs.",
      "We won't replace your support team on day one. Deflection comes in phases.",
    ],
    timelines: [
      "2-3 weeks for first useful automation",
      "4-6 weeks for customer-facing AI with evals",
      "8-10 weeks when multiple systems need integration",
    ],
  },
  design: {
    tools: [
      ["Figma", "React", "Tailwind"],
      ["Figma", "Next.js", "Storybook"],
      ["Figma", "Framer", "GA4"],
      ["Figma", "Vue", "Hotjar"],
    ],
    contrarian: [
      "More mockups rarely fix a broken signup flow. We fix the flow first.",
      "Rebrands before fixing conversion are expensive distractions.",
      "Design systems should start at 10 components, not 100.",
      "Stakeholder opinions matter less than session recordings on key flows.",
    ],
    wontDo: [
      "We won't deliver decks without build-ready Figma files.",
      "We won't redesign every page when three flows drive 80% of drop-off.",
      "We won't ignore your existing component library if one exists.",
      "We won't hand off without a prioritized fix list your team can ship from.",
    ],
    timelines: [
      "2 weeks for a focused flow redesign",
      "3-4 weeks for landing page + mobile pass",
      "6-8 weeks for product-wide UI refresh with design system",
    ],
  },
  "markets-trading": {
    tools: [
      ["Python", "Interactive Brokers API", "PostgreSQL"],
      ["C++", "FIX protocol", "Redis"],
      ["TradingView", "webhooks", "Node.js"],
      ["Pandas", "broker REST APIs", "Grafana"],
    ],
    contrarian: [
      "Backtests that ignore fees are marketing, not research.",
      "Live trading without a kill switch is not a system. It's a bet.",
      "Most 'AI trading' projects should start with data hygiene, not models.",
      "Shadow mode should run longer than most teams want. That's the point.",
    ],
    wontDo: [
      "We won't go live without paper trading validation criteria in writing.",
      "We won't build execution without idempotent order handling.",
      "We won't skip runbooks because 'the team knows how it works'.",
      "We won't take PnL share deals. We bill for engineering only.",
    ],
    timelines: [
      "3-4 weeks for backtest framework v1",
      "6-8 weeks for paper/shadow environment",
      "10-12 weeks for production execution with risk gates",
    ],
  },
  "integrations-platform": {
    tools: [
      ["Stripe", "webhooks", "Next.js"],
      ["Razorpay", "PostgreSQL", "Node.js"],
      ["Auth0", "Stripe Billing", "Vercel"],
      ["Supabase Auth", "PostHog", "Resend"],
    ],
    contrarian: [
      "Webhook handlers without idempotency will duplicate charges. We've seen it twice this year.",
      "Billing edge cases (proration, failed payments) matter more than checkout UI.",
      "Third-party docs lie about rate limits. We load-test before launch.",
    ],
    wontDo: [
      "We won't go live on payments without a reconciliation checklist.",
      "We won't store API keys in frontend env vars.",
      "We won't skip sandbox-to-prod validation for billing events.",
    ],
    timelines: [
      "1-2 weeks for a single integration",
      "3-4 weeks for billing + auth foundation",
      "5-6 weeks for multi-vendor platform setup",
    ],
  },
  "startup-tech-partner": {
    tools: [
      ["Notion", "Figma", "GitHub"],
      ["Linear", "Cal.com", "Vercel"],
      ["Jira", "Figma", "AWS"],
    ],
    contrarian: [
      "Roadmaps with 40 features are wish lists. We force rank by revenue impact.",
      "Hiring a full-time CTO too early often slows founders down, not speeds them up.",
      "Investors care about one metric moving, not architecture diagrams.",
    ],
    wontDo: [
      "We won't pretend to be co-founders on cap tables.",
      "We won't build features without a defined success metric.",
      "We won't take equity-only deals.",
    ],
    timelines: [
      "2-4 weeks for MVP scope + architecture plan",
      "8-12 weeks for idea-to-first-customers pod",
      "ongoing partner engagements quarterly",
    ],
  },
};

const INTRO_TEMPLATES = [
  (starter, title, timeline, tools) =>
    `${starter} ${title.toLowerCase()}, and the fix isn't another generic agency retainer. We scope to ${timeline}, using ${tools[0]} and ${tools[1]} in your stack where it makes sense. Weekly demos and a written cut line for what ships now versus later.`,
  (starter, title, timeline, tools) =>
    `${starter} ${title.toLowerCase()}. Most teams over-scope it. We write acceptance criteria first, then ship in ${timeline} with ${tools[0]} in your repo. We work in your repo, not a fork that rots.`,
  (starter, title, timeline, tools) =>
    `You need ${title.toLowerCase()} done properly: ${starter.toLowerCase()} We typically deliver in ${timeline}. Same team from kickoff to launch; ${tools[0]} where your stack already uses it.`,
  (starter, title, timeline, tools) =>
    `${starter} ${title.toLowerCase()} is blocking something else from shipping. We take a fixed window (${timeline}), integrate with ${tools.slice(0, 2).join(" and ")}, and demo progress every week.`,
  (starter, title, timeline) =>
    `${starter} ${title.toLowerCase()}. Scope creep is the enemy. We agree on one metric, one cut line, and ${timeline}. Then we build until that version is signed off.`,
];

const SCENARIO_STARTERS = {
  build: [
    "Your team is still copying data between",
    "You have a working prototype but",
    "Engineering is blocked on",
    "The spreadsheet workflow for",
    "Sales keeps asking for",
  ],
  "ai-automation": [
    "Support is answering the same",
    "Leadership wants AI in the product but",
    "You tried a chatbot demo that",
    "Your docs are scattered across",
    "The board slide says AI but",
  ],
  design: [
    "Signup completion dropped after",
    "You're relaunching and",
    "Design and engineering keep disagreeing on",
    "Your landing page gets traffic but",
    "Session recordings show users stuck on",
  ],
  "markets-trading": [
    "Your backtest looks great until",
    "You're moving from paper to",
    "The desk needs visibility into",
    "TradingView alerts fire but",
    "Risk flagged a gap in",
  ],
  "integrations-platform": [
    "Billing breaks every time",
    "You need Stripe live before",
    "Auth works in dev but",
    "CRM and product data live in",
    "Finance cannot reconcile",
  ],
  "startup-tech-partner": [
    "You have investor interest but",
    "The first developer hire starts in",
    "You're choosing between no-code and",
    "Technical debt from v1 is",
    "The roadmap has twenty items and",
  ],
};

const CHIP_POOL = [
  "Weekly demos",
  "Written scope",
  "Your repo",
  "Evals first",
  "Fix plan included",
  "Staging before prod",
  "One team start-to-finish",
  "Rollback plan",
];

export function generateServiceSeed(service, category) {
  const meta = CATEGORY_META[category.slug] ?? CATEGORY_META.build;
  const slug = service.slug;
  const title = service.title;
  const tools = pick(slug, "tools", meta.tools);
  const timeline = pick(slug, "timeline", meta.timelines);
  const contrarian = pick(slug, "contrarian", meta.contrarian);
  const wontDo = pick(slug, "wontDo", meta.wontDo);
  const starter = pick(
    slug,
    "starter",
    SCENARIO_STARTERS[category.slug] ?? SCENARIO_STARTERS.build
  );
  const introFn = pick(slug, "intro", INTRO_TEMPLATES);

  const intro = introFn(starter, title, timeline, tools);

  const chips = [
    timeline.split(" for")[0] ?? timeline,
    tools[0],
    pick(slug, "chip3", CHIP_POOL),
  ];

  return {
    intro,
    contrarian,
    wontDo,
    chips,
    tools,
    timeline,
  };
}
