import { buildCalUrl } from "@/lib/cal";
import { ROUTES } from "@/config/site";

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
  kicker: "Makers of the bits",
  title: ["We make the bits", "your business", "runs on."],
  lede: "Digital design, software, and automation—planned, built, and shipped by one team. The interface people use, the systems behind it, and the repeat work worth automating.",
  primaryCta: "Book a call",
  secondaryCta: "See what we make",
  index: [
    { n: "01", label: "Design", href: ROUTES.design.path, line: "Make the interface understandable." },
    { n: "02", label: "Software", href: "/services/build", line: "Make the product and its systems work." },
    { n: "03", label: "Automation", href: ROUTES.ai.path, line: "Remove repeat work and connect the tools around it." },
  ],
};

export const HOME_DIAGNOSTIC = {
  kicker: "Three kinds of work. One maker team.",
  title: "Interface. System. Repeat work.",
  lede: "Design makes the interface understandable. Software makes the product work. Automation removes repeat work and connects the systems around it.",
  routes: [
    { n: "D", href: ROUTES.design.path, label: "The interface people need to understand and use.", answer: "Explore Design" },
    { n: "S", href: "/services/build", label: "The product, platform, or internal system behind it.", answer: "Explore Build" },
    { n: "A", href: ROUTES.ai.path, label: "The repeated work that should move without copying and chasing.", answer: "Explore AI & Automation" },
  ],
};

export const HOME_TRACKS = [
  {
    id: "design", index: "01", href: ROUTES.design.path, calHref: HOME_CAL.design, enterLabel: "Explore Design", kicker: "Design practice",
    title: "Make the interface make sense.",
    lede: "For founders and product leads with a named point of friction: activation, onboarding, upgrade, or conversion. Design and frontend stay in the same working loop.",
    painfulState: "People hesitate, abandon, or ask for help. The team keeps polishing screens while the critical path remains unclear.",
    wontDo: "We will not redraw the whole product to avoid deciding which journey matters.",
    artifacts: ["Journey diagnosis", "Critical-flow prototype", "Component and state contract", "Frontend code and instrumentation"],
    milestone: "First gate: the critical path works in your repo and the event is measurable.",
  },
  {
    id: "ai", index: "02", href: ROUTES.ai.path, calHref: HOME_CAL.ai, enterLabel: "Explore AI", kicker: "Automation / applied AI",
    title: "Take repeat work out of the loop.",
    lede: "For product and operations teams with a repeated job, real inputs, and someone accountable for the result. We map the exceptions before choosing a model.",
    painfulState: "Tickets are triaged by hand. Answers are copied between systems. A demo looked good, but nobody trusts it with live work.",
    wontDo: "We will not start with an autonomous agent when retrieval or a small automation is the safer answer.",
    artifacts: ["Workflow and exception map", "Real-input test set", "Retrieval or automation service", "Review queue, logs, and rollback"],
    milestone: "First gate: one narrow workflow handles real inputs with a human review path.",
  },
  {
    id: "markets", index: "03", href: ROUTES.markets.path, calHref: HOME_CAL.markets, enterLabel: "Explore Markets", kicker: "Specialized systems practice",
    title: "Build systems for markets.",
    lede: "For trading teams whose research has outrun their execution stack. We build the path from a costed backtest to observable, controlled deployment.",
    painfulState: "Fill assumptions are generous. Paper and live behavior disagree. Risk controls live in one person’s head.",
    wontDo: "We do not manage capital, promise returns, or hide slippage in a footnote.",
    artifacts: ["Event-driven, costed backtest", "Paper and shadow deployment", "Risk limits and kill switch", "Monitoring and operator runbook"],
    milestone: "First gate: the strategy survives explicit fees, slippage, latency, and bad data.",
  },
];

export const HOME_BELIEFS = {
  kicker: "Why one maker team",
  title: "Fewer handoffs. More proof.",
  lede: "The people shaping the interface also understand the system behind it and the automation around it. Progress shows up in work your team can inspect.",
  items: [
    { index: "01", title: "Written scope", body: "The job, the boundary, the acceptance checks, and the person who can make a call." },
    { index: "02", title: "Work in the repo", body: "Code and decisions live where your team can inspect them. No black-box handoff." },
    { index: "03", title: "Demos of working paths", body: "See the interface, system behavior, or automation run. A status percentage proves nothing." },
    { index: "04", title: "Acceptance and runbook", body: "We agree what done means, then leave the operating notes with the people running it." },
  ],
};

export const HOME_FIT = {
  fit: { title: "A good fit", items: ["An interface, system, or repeated task needs to work better.", "One person can make scope decisions.", "We can work in the repo and see real inputs.", "A useful first acceptance check can be named."] },
  notFit: { title: "Not a fit", items: ["A deck is the main deliverable.", "The brief is a 40-feature wishlist.", "Access to users, data, or code is off-limits.", "You need guaranteed trading or business results."] },
};

export const HOME_CLOSE = {
  kicker: "Make the next bit",
  title: "What should work better?",
  lede: "In 30 minutes, we will identify the interface, system, or repeated task that matters first—and say plainly if the work is not ready or not ours.",
  phoneNote: "No pitch deck. No obligation. You leave with a narrower first move.",
};
