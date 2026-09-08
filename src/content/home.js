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
  kicker: `${COMPANY.name} · design and engineering studio`,
  title: "AI workflows. Trading infrastructure. Product interfaces.",
  lede:
    "We build the systems behind manual operations, live markets, and products people struggle to use. Different disciplines, one standard: observable behavior, written acceptance checks, and code your team owns.",
  audience:
    "Hired by founders, product and operations leads, and trading teams with a specific failure to fix.",
  primaryCta: "Book a call",
  secondaryCta: "Choose a track",
  index: [
    {
      n: "01",
      label: "AI & automation",
      href: "#signal-ai",
      line: "A queue, handoff, or search problem is consuming the week.",
    },
    {
      n: "02",
      label: "Markets",
      href: "#signal-markets",
      line: "Research, execution, and live risk no longer agree.",
    },
    {
      n: "03",
      label: "Design",
      href: "#signal-design",
      line: "The product works, but users still miss the next step.",
    },
  ],
};

export const HOME_SIGNALS = {
  kicker: "Start with the failure",
  title: "You probably have one of three expensive problems.",
  lede:
    "Do not start by shopping for a capability. Start where time, control, or conversion is leaking.",
  items: [
    {
      id: "ai",
      label: "AI & automation",
      href: "#track-ai",
      signal:
        "People keep reading, classifying, copying, or answering the same material.",
      detail:
        "The queue grows with the team. Search is unreliable. A wrong automated answer still needs an owner.",
      routeLabel: "Follow the AI track",
    },
    {
      id: "markets",
      label: "Markets systems",
      href: "#track-markets",
      signal:
        "The backtest looks clean. Live fills, risk, and PnL tell a different story.",
      detail:
        "Fees are approximate, observability is late, or nobody trusts the path from signal to execution.",
      routeLabel: "Follow the Markets track",
    },
    {
      id: "design",
      label: "Design + frontend",
      href: "#track-design",
      signal:
        "Users arrive, hesitate, and leave before the product proves its value.",
      detail:
        "The flow has accumulated exceptions. Design and frontend disagree. Nobody owns the last mile.",
      routeLabel: "Follow the Design track",
    },
  ],
};

export const HOME_TRACKS_INTRO = {
  kicker: "Three practices",
  title: "One studio for systems where mistakes stay expensive.",
  lede:
    "The common work is not a technology. It is turning ambiguous behavior into something visible, testable, and maintainable. Each practice keeps its own methods, specialists, and visual language.",
};

export const HOME_TRACKS = [
  {
    id: "ai",
    index: "01",
    href: ROUTES.ai.path,
    calHref: HOME_CAL.ai,
    enterLabel: "Explore AI & automation",
    kicker: "AI & Automation",
    title: "Make the repeated decision visible before you automate it.",
    lede:
      "For operations, support, and product teams with a workflow already burning hours. We map the decisions, failure cost, data access, and human handoff before choosing a model.",
    point:
      "Most teams do not need an autonomous agent. They need one reliable step, measured on real cases.",
    wontDo:
      "Not a fit when there is no owner for bad output or no representative data to test.",
    buyer: "Support, ops, and product leads",
    milestone:
      "In 2–3 weeks: one bounded workflow on staging, tested against a first eval set.",
    artifacts: [
      "Workflow and data map",
      "Eval set from real cases",
      "Human review and escalation",
      "Repo code, logging, and runbook",
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
    enterLabel: "Explore Markets systems",
    kicker: "Markets",
    title: "Close the gap between the research result and the live system.",
    lede:
      "For funds, prop teams, and serious traders that need a defensible path from research to execution. Costs, partial fills, risk, and observability belong in the system—not in a post-launch explanation.",
    point:
      "Paper and shadow mode come before cutover. A calm rollback beats a heroic go-live.",
    wontDo:
      "We do not run your capital, promise alpha, or hide fees and latency in a footnote.",
    buyer: "Funds, prop desks, and trading product teams",
    milestone:
      "First useful slice: a realistic backtest or a shadow path with named failure checks.",
    artifacts: [
      "Event-driven backtest",
      "Execution and retry rules",
      "Risk, PnL, and alert views",
      "Kill switch, runbook, and rollback",
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
    enterLabel: "Explore Design + frontend",
    kicker: "Design",
    title: "Fix the decision path, then ship the interface.",
    lede:
      "For founders and product teams with a broken onboarding, activation, upgrade, or launch path. Design and frontend work together, so the argument ends in a working surface—not a handoff.",
    point:
      "We remove steps before we decorate them. Every screen needs a job and an acceptance check.",
    wontDo:
      "Not a fit for a standalone logo or a mockup package nobody is ready to build.",
    buyer: "Founders, product leads, and growth teams",
    milestone:
      "In 2–3 weeks: an audited priority flow and a working slice on a review URL.",
    artifacts: [
      "Flow audit and decision log",
      "Working prototype",
      "Component and state contracts",
      "Merged frontend with acceptance checks",
    ],
    services: [
      { categorySlug: "design", serviceSlug: "website-ux-audit" },
      { categorySlug: "design", serviceSlug: "landing-page-design" },
      { categorySlug: "design", serviceSlug: "design-systems" },
    ],
  },
];

export const HOME_DELIVERY = {
  kicker: "The first three weeks",
  title: "Reduce the risk before the scope gets bigger.",
  lede:
    "A focused slice usually runs 2–4 weeks. Broader work can run 8–12, but only after the first slice proves the working rhythm.",
  steps: [
    {
      index: "00",
      timing: "Before kickoff",
      title: "Write the bet and the cut line.",
      body:
        "One page: the failure, the acceptance checks, access needed, and what is explicitly out. You keep it even if we pass.",
      artifact: "Written scope",
    },
    {
      index: "01",
      timing: "Week one",
      title: "Make the risky part testable.",
      body:
        "Set up the repo and staging path. Use representative inputs. Name the failure checks before polishing the happy path.",
      artifact: "Repo + staging",
    },
    {
      index: "02",
      timing: "Weeks two and three",
      title: "Demo the slice against the checks.",
      body:
        "Working software every week. Decisions and misses are written down. If the slice does not hold, we cut or stop.",
      artifact: "Demo + acceptance",
    },
    {
      index: "03",
      timing: "Before handoff",
      title: "Leave an operable system.",
      body:
        "Runbook, ownership, alerts, and a rollback on load-bearing paths. The work stays in your repository.",
      artifact: "Runbook + rollback",
    },
  ],
  definition:
    "Done means another person can review the behavior, deploy it, and recover it without calling the person who built it.",
};

export const HOME_PROOF = {
  kicker: "Existing work",
  title: "Claims are cheap. Look for a record and a working cadence.",
  lede:
    "These are the counts already published by Futurebits. The testimonials below are unchanged; the delivery controls above are what you should ask us to demonstrate.",
  stats: [
    { value: "12+", label: "Engagements run end to end" },
    { value: "20+", label: "AI systems in production" },
    { value: "30+", label: "Trading systems live" },
    { value: COMPANY.founded, label: "Operating since" },
  ],
};

export const HOME_FIT = {
  kicker: "Fit check",
  title: "Useful when the problem has an owner.",
  forTitle: "Book the call if",
  forItems: [
    "A founder or lead can make scope decisions each week.",
    "There is a real workflow, trading path, or product flow to inspect.",
    "Your team can provide representative data and repository access.",
    "You want a focused slice before a broader commitment.",
  ],
  notForTitle: "Do not book if",
  notForItems: [
    "You need anonymous staff augmentation or a large bench.",
    "The deliverable is strategy slides with no build.",
    "You want unattended AI with no owner for bad output.",
    "You need alpha promises, capital management, or a standalone logo.",
  ],
};

export const HOME_CLOSE = {
  kicker: "The next step",
  title: "Bring one failure you want fixed.",
  lede:
    "The call is 30 minutes. We will ask what happens today, who owns the decision, and what must be true in 2–3 weeks. If there is a fit, the next artifact is a one-page scope. If not, we will say so.",
  phoneNote:
    "Prefer the phone? +971 58 516 5671 during GST working hours.",
};
