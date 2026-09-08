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
  kicker: "Futurebits / independent product studio",
  title: ["Build the thing", "your team can", "actually run."],
  lede: "Futurebits designs and engineers AI systems, trading infrastructure, and digital products—from a written scope to production code in your repo.",
  primaryCta: "Book a call",
  secondaryCta: "Choose a track",
  index: [
    { n: "01", label: "AI", href: ROUTES.ai.path, line: "A workflow is repetitive, expensive, and ready to be tested." },
    { n: "02", label: "Markets", href: ROUTES.markets.path, line: "Research works on paper. Execution and risk still break under load." },
    { n: "03", label: "Design", href: ROUTES.design.path, line: "People reach the product, then hesitate, abandon, or ask for help." },
  ],
};

export const HOME_DIAGNOSTIC = {
  kicker: "Start with the failure",
  title: "Which sentence sounds like this quarter?",
  lede: "The right track is usually obvious once the problem is stated without the feature list.",
  routes: [
    { n: "A", href: "#practice-ai", label: "Hours disappear into a workflow nobody has fixed.", answer: "Start with AI" },
    { n: "M", href: "#practice-markets", label: "The model is ahead of the system meant to run it.", answer: "Start with Markets" },
    { n: "D", href: "#practice-design", label: "The product works, but the journey does not.", answer: "Start with Design" },
  ],
};

export const HOME_TRACKS = [
  {
    id: "ai", index: "01", href: ROUTES.ai.path, calHref: HOME_CAL.ai, enterLabel: "Explore AI", kicker: "AI systems",
    title: "Remove one expensive loop.",
    lede: "For product and operations teams with a repeated job, real inputs, and someone who owns the result. We map the exceptions before choosing a model.",
    painfulState: "Tickets are triaged by hand. Answers are copied between systems. A demo looked good, but nobody trusts it with live work.",
    wontDo: "We will not start with an autonomous agent when retrieval or a small automation is the safer answer.",
    artifacts: ["Workflow and exception map", "Real-input test set", "Retrieval or automation service", "Review queue, logs, and rollback"],
    milestone: "First gate: one narrow workflow handles real inputs with a human review path.",
  },
  {
    id: "markets", index: "02", href: ROUTES.markets.path, calHref: HOME_CAL.markets, enterLabel: "Explore Markets", kicker: "Markets",
    title: "Make the strategy executable.",
    lede: "For trading teams whose research has outrun their execution stack. We build the path from a costed backtest to observable, controlled deployment.",
    painfulState: "Fill assumptions are generous. Paper and live behavior disagree. Risk controls live in one person’s head.",
    wontDo: "We do not manage capital, promise returns, or hide slippage in a footnote.",
    artifacts: ["Event-driven, costed backtest", "Paper and shadow deployment", "Risk limits and kill switch", "Monitoring and operator runbook"],
    milestone: "First gate: the strategy survives explicit fees, slippage, latency, and bad data.",
  },
  {
    id: "design", index: "03", href: ROUTES.design.path, calHref: HOME_CAL.design, enterLabel: "Explore Design", kicker: "Product design",
    title: "Fix the journey in the product.",
    lede: "For founders and product leads with a named point of friction: activation, onboarding, upgrade, or conversion. Design and frontend stay in the same loop.",
    painfulState: "The team is polishing screens while the critical path remains unclear. Research, design, and implementation keep losing context at handoff.",
    wontDo: "We will not redraw the whole product to avoid deciding which journey matters.",
    artifacts: ["Journey diagnosis", "Critical-flow prototype", "Component and state contract", "Frontend code and instrumentation"],
    milestone: "First gate: the critical path is working in your repo and the event is measurable.",
  },
];

export const HOME_BELIEFS = {
  kicker: "Evidence of delivery",
  title: "The work leaves a trail.",
  lede: "A weekly update should point to something your team can inspect: a decision, an artifact, a working path, and the next gate.",
  items: [
    { index: "01", title: "Decision record", body: "The bet, the cut line, the owner, and the number that decides whether work continues." },
    { index: "02", title: "Inspect the artifact", body: "Test set, backtest, prototype, pull request, logs. Not a progress percentage." },
    { index: "03", title: "Pass the gate", body: "Each stage has a reason to stop. If the evidence is weak, scope changes before the invoice grows." },
    { index: "04", title: "Leave it operable", body: "Code, instrumentation, runbooks, and decisions stay with your team. No mystery handoff." },
  ],
};

export const HOME_FIT = {
  fit: { title: "A good fit", items: ["A painful workflow or journey already exists.", "One person can make scope decisions.", "We can work in the repo and see real inputs.", "A useful first gate can be named."] },
  notFit: { title: "Not a fit", items: ["A deck is the main deliverable.", "The brief is a 40-feature wishlist.", "Access to users, data, or code is off-limits.", "You need guaranteed trading or business results."] },
};

export const HOME_CLOSE = {
  kicker: "The first call",
  title: "Bring the stuck part.",
  lede: "In 30 minutes, we will identify the track, pressure-test the first gate, and say plainly if the work is not ready or not ours.",
  phoneNote: "No pitch deck. No obligation. You leave with a narrower next decision.",
};
