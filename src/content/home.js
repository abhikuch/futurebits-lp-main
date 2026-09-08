import { buildCalUrl } from "@/lib/cal";
import { ROUTES } from "@/config/site";

const CAL_AI = "https://cal.com/futurebits/ai?duration=30";

export const HOME_CAL = {
  hero: buildCalUrl(CAL_AI, { medium: "cta", campaign: "home-hero" }),
  close: buildCalUrl(CAL_AI, { medium: "cta", campaign: "home-close" }),
};

export const HOME_HERO = {
  kicker: "Makers of the bits",
  title: ["We make the bits", "your business", "runs on."],
  lede: "We design interfaces, build software, and automate workflows. One Futurebits team takes the work from a written scope to code running in production.",
  primaryCta: "Book a call",
  secondaryCta: "See what we make",
  index: [
    { n: "01", label: "Design", href: ROUTES.design.path, line: "Interfaces and product journeys people can use." },
    { n: "02", label: "Software", href: "/services/build", line: "Web services, internal tools, and product infrastructure." },
    { n: "03", label: "Automation", href: ROUTES.ai.path, line: "Support, reporting, and operations workflows with less manual work." },
  ],
};

export const HOME_DIAGNOSTIC = {
  kicker: "Start with the work",
  title: "What needs to work next?",
  lede: "Choose the closest starting point. We scope design, software, and automation together when the job spans them.",
  routes: [
    { n: "D", href: ROUTES.design.path, label: "An interface or product journey is confusing users.", answer: "Explore Design" },
    { n: "S", href: "/services/build", label: "A web service, internal tool, or product needs to be built.", answer: "Explore Build" },
    { n: "A", href: ROUTES.ai.path, label: "A support queue, reporting process, or back-office workflow is still manual.", answer: "Explore AI & Automation" },
  ],
};

export const HOME_TRACKS = [
  {
    id: "design", index: "01", href: ROUTES.design.path, enterLabel: "Explore Design", kicker: "Product design + frontend",
    title: "Fix a critical product journey.",
    lede: "For founders and product leads who can point to friction in onboarding, activation, checkout, or upgrades. We trace where users stall, prototype the selected flow, and implement it in the product.",
    painfulState: "Users hesitate, abandon the flow, or contact support. Screen-by-screen polish has not fixed the journey.",
    scopeNote: "A full redesign only makes sense when the evidence points beyond the critical path.",
    artifacts: ["Annotated journey map", "Prototype for the selected flow", "Component states and interaction rules", "Frontend code with event instrumentation"],
    milestone: "The selected flow works in your repo, with its key event instrumented.",
  },
  {
    id: "ai", index: "02", href: ROUTES.ai.path, enterLabel: "Explore AI", kicker: "AI + workflow automation",
    title: "Move a manual workflow into software.",
    lede: "For product and operations teams dealing with recurring work such as ticket triage, document lookup, or report preparation. We map real inputs and exceptions before choosing retrieval, rules, or an agent.",
    painfulState: "People copy answers between tools, sort queues by hand, and check every result because the existing demo cannot be trusted with live work.",
    scopeNote: "Autonomous agents are reserved for workflows where simpler automation cannot handle the decisions involved.",
    artifacts: ["Workflow map with exception paths", "Test set made from real inputs", "Retrieval or automation service", "Review queue, logs, and rollback controls"],
    milestone: "One defined workflow handles real inputs and sends uncertain cases to a person.",
  },
  {
    id: "markets", index: "03", href: ROUTES.markets.path, enterLabel: "Explore Markets", kicker: "Market infrastructure",
    title: "Turn a strategy into controlled execution.",
    lede: "For trading teams that need to test and operate a strategy beyond a research notebook. We build costed backtests, execution engines, operator controls, and monitoring.",
    painfulState: "Fill assumptions are generous, paper and live behavior disagree, or risk controls live in one person’s head.",
    scopeNote: "Capital management and return promises stay outside the engagement. Fees, slippage, latency, and failure states stay in the specification.",
    artifacts: ["Event-driven, costed backtest", "Paper and shadow deployment", "Risk limits and kill switch", "Monitoring and operator runbook"],
    milestone: "The strategy is tested against explicit fees, slippage, latency, and bad data.",
  },
];

export const HOME_BELIEFS = {
  kicker: "How work gets shipped",
  title: "From scope to production.",
  lede: "You work with the people doing the design and writing the code. Decisions and working versions remain visible throughout the project.",
  items: [
    { index: "01", title: "Scope you can approve", body: "The first release, its boundaries, and acceptance checks are written down before the build expands." },
    { index: "02", title: "Changes in your repo", body: "Code and design decisions live where your team can review them during the project." },
    { index: "03", title: "Working reviews", body: "Reviews use the actual interface, service response, or automation run instead of a status percentage." },
    { index: "04", title: "Operating notes", body: "The people running the work receive acceptance notes, setup details, and a runbook." },
  ],
};

export const HOME_FIT = {
  kicker: "Useful when",
  fit: { title: "The work has a real starting point", items: ["A user journey or workflow can be shown as it works today.", "Someone on your team can make scope decisions.", "We can review the relevant repo, data, or real inputs."] },
  notFit: { title: "A different partner is better when", items: ["The main deliverable is a strategy deck.", "The brief must keep every item in a long feature list.", "The project depends on guaranteed trading or business results."] },
};

export const HOME_CLOSE = {
  kicker: "Bring us the current version",
  title: "What needs to ship next?",
  lede: "Use a 30-minute call to show us the interface, service, or workflow and the problem around it. We will discuss a practical first release and how it could reach production.",
  phoneNote: "Bring the current flow or workflow and any constraints that matter.",
};
