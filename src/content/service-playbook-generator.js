import { lintPlaybook } from "@/content/content-voice";
import { MARKETS_AUDIENCE } from "@/content/service-copy";

const CATEGORY_COPY = {
  build: {
    intro: (title) =>
      `${title} should remove a specific bottleneck, not create another platform to maintain. We agree on the working path and its edge cases before code lands in your repository.`,
    whoFor: (title) => [
      `Product teams with a defined ${title.toLowerCase()} backlog item`,
      "Operations leads replacing a manual workflow",
      "Founders extending a product that already has users",
      "Engineering teams blocked by a load-bearing feature",
    ],
    problems: (title) => [
      `${title} has no agreed acceptance criteria`,
      "A manual workflow is creating errors or slowing delivery",
      "The current implementation fails on known edge cases",
      "Internal capacity is committed to the core roadmap",
      "Ownership after launch is unclear",
    ],
    deliverables: (title) => [
      `Working ${title.toLowerCase()} in your repository`,
      "Written scope and acceptance checks",
      "Tests for the critical path and known failure cases",
      "Deployment notes and an operating runbook",
      "A short record of decisions and deferred work",
    ],
  },
  "ai-automation": {
    intro: (title) =>
      `${title} starts with the workflow and the cost of a wrong answer. We use real examples to define what the system may automate, what needs review, and when it must stop.`,
    whoFor: (title) => [
      `Product teams with a named use case for ${title.toLowerCase()}`,
      "Support teams with repeat questions and a reliable knowledge source",
      "Operations leads who can supply representative inputs",
      "Engineering teams that need an AI feature inside an existing product",
    ],
    problems: () => [
      "A promising demo has no test set or review path",
      "Answers cannot be traced to a source",
      "Manual triage consumes time but exceptions are poorly documented",
      "Model behavior changes without anyone noticing",
      "The product has no safe fallback when confidence is low",
    ],
    deliverables: (title) => [
      `Working ${title.toLowerCase()} in your repository`,
      "A test set built from representative inputs",
      "Review, escalation, and fallback paths",
      "Logs for quality, latency, and cost",
      "Access boundaries and deployment notes",
    ],
  },
  design: {
    intro: (title) =>
      `${title} is useful when it resolves a product decision or removes friction from a critical journey. We work from observed behavior and product constraints, then carry the approved direction into frontend implementation where needed.`,
    whoFor: (title) => [
      `Product teams improving a specific journey through ${title.toLowerCase()}`,
      "Founders preparing a product or site for real traffic",
      "Growth leads with evidence of a conversion problem",
      "Engineering teams that need buildable states and components",
    ],
    problems: () => [
      "The critical journey is unclear or needlessly long",
      "Screens omit empty, loading, and error states",
      "Research findings are not reflected in the product",
      "Design and implementation keep drifting apart",
      "The component library no longer matches the live interface",
    ],
    deliverables: (title) => [
      `${title} files with annotated states and behavior`,
      "A prioritized journey or usability diagnosis",
      "Prototype of the critical path",
      "Component and content decisions",
      "Frontend implementation or a build-ready handoff",
    ],
  },
  "markets-trading": {
    intro: (title) =>
      `${title} has to account for fees, latency, partial fills, and bad data before it reaches live capital. We make those assumptions visible and give operators a controlled path from research to production.`,
    whoFor: (title) => [
      `Systematic teams formalizing ${title.toLowerCase()}`,
      "Prop desks moving beyond unmonitored scripts",
      "Funds with review gates between research and execution",
      "Trading operations teams addressing an audit or reliability gap",
    ],
    problems: () => [
      "Research and live behavior disagree",
      "Fees, slippage, or partial fills are missing from tests",
      "Orders are not idempotent across retries",
      "Risk controls depend on one operator",
      "Failures cannot be reconstructed from logs",
    ],
    deliverables: (title) => [
      `Working ${title.toLowerCase()} with explicit assumptions`,
      "Validation criteria for paper or shadow operation",
      "Risk limits and an operator-controlled stop path",
      "Monitoring for orders, positions, and failures",
      "Runbook for normal and degraded operation",
    ],
  },
};

const DEFAULT_COPY = {
  intro: (title) =>
    `${title} starts with the current system, the blocked path, and a written definition of done. The implementation stays in your repository with the operating details your team needs after launch.`,
  whoFor: (title) => [
    `Teams with a defined need for ${title.toLowerCase()}`,
    "Owners who can make scope decisions",
    "Engineering teams with repository and staging access",
    "Operators who can validate the working path",
  ],
  problems: () => [
    "The current path is fragile or incomplete",
    "Success has not been defined in testable terms",
    "Known edge cases keep delaying release",
    "System ownership is split across vendors",
    "Documentation does not match production",
  ],
  deliverables: (title) => [
    `Working ${title.toLowerCase()} in your repository`,
    "Written scope and acceptance checks",
    "Validation of the critical path",
    "Deployment and operating notes",
    "A record of decisions and deferred work",
  ],
};

const PROCESS = [
  "Review the current path, constraints, and available evidence",
  "Write the smallest useful scope and its acceptance checks",
  "Ship reviewable increments in the existing repository",
  "Validate the working path and document how to operate it",
];

function buildFaqs(title) {
  return [
    {
      q: `Can you continue an existing ${title} project?`,
      a: "Yes. We review the current state first and keep working parts in place. Rewrites need a concrete technical reason.",
    },
    {
      q: "What do you need before starting?",
      a: "One person who can make scope decisions, access to the relevant repository or files, and examples of the current problem.",
    },
    {
      q: "How is scope agreed?",
      a: "The proposal names the working path, acceptance checks, exclusions, and dependencies. Timing follows from that scope rather than a standard package.",
    },
    {
      q: "What remains with our team?",
      a: "Code and design files stay in your systems. We also leave the tests, operating notes, and decisions needed to continue the work.",
    },
  ];
}

export function generateServicePlaybook(service, category) {
  const copy = CATEGORY_COPY[category.slug] ?? DEFAULT_COPY;
  const markets = MARKETS_AUDIENCE[service.slug];

  return lintPlaybook({
    intro: copy.intro(service.title),
    whoFor: copy.whoFor(service.title),
    problems: copy.problems(service.title),
    deliverables: copy.deliverables(service.title),
    process: PROCESS,
    faqs: buildFaqs(service.title),
    ...(markets
      ? {
          dominantPersona: markets.dominantPersona,
          dominantAudience: markets.dominantAudience,
          secondaryAudiences: markets.secondaryAudiences,
        }
      : {}),
  });
}
