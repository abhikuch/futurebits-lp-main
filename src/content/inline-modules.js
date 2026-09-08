export const POV = {
  ai: {
    eyebrow: "How we think about AI",
    title: "Most AI projects fail because they automate the wrong thing first.",
    body:
      "We start with a narrow workflow and representative inputs. The first decision is where review belongs; model choice comes later.",
    bullets: [
      "We map workflows before models. The model is the last decision, not the first.",
      "We refuse projects where the cost of a wrong AI answer is higher than the value of a right one.",
      "Every AI surface ships with evals. If we can't measure it, we don't ship it.",
    ],
  },
  markets: {
    eyebrow: "How we think about markets",
    title: "Trading systems that survive the next regime change.",
    body:
      "We build trading and analytics infrastructure around explicit assumptions, observable execution, and controls an operator can use under pressure.",
    bullets: [
      "Backtests are evidence, not arguments. We build them to break, then we publish what broke.",
      "Latency, slippage, and fees belong in the main spec, not a footnote.",
      "Every system ships with a kill switch and a one-page runbook. If a junior can't shut it down at 2am, it isn't done.",
    ],
  },
  design: {
    eyebrow: "How we think about design",
    title: "Design should move the metric, not polish the deck.",
    body:
      "We use design to clarify the critical journey and the decisions around it. Approved states stay connected to implementation.",
    bullets: [
      "Every screen earns its place by moving a real number: activation, retention, or revenue.",
      "We design with code in the loop. Mockups are throwaways; live prototypes are the artefact.",
      "We default to fewer pixels, fewer pages, and fewer features. The hard work is removing things.",
    ],
  },
};

export const ENGAGEMENT_MODELS = [
  {
    name: "Sprint",
    duration: "Focused scope",
    bestFor: "One clear problem with a working path that can be reviewed independently.",
    deliverables: [
      "One shipped surface: a flow, a prototype, or an automation",
      "A short record of decisions, results, and next steps",
    ],
  },
  {
    name: "Pod",
    duration: "Multi-part build",
    bestFor:
      "A launch or product change that needs design and engineering in the same working loop.",
    deliverables: [
      "A named team working in your repository",
      "Reviewable releases plus the tests and operating notes they need",
    ],
  },
  {
    name: "Partner",
    duration: "Long-running work",
    bestFor:
      "A product or platform with a continuing backlog and a stable internal owner.",
    deliverables: [
      "A consistent team and planning cadence",
      "A shared backlog with explicit priorities and cut lines",
    ],
  },
];

export const FAQ = {
  ai: [
    {
      q: "What kind of AI projects do you ship?",
      a: "Production AI systems including chatbots, custom GPTs, knowledge bases, AI agents, content generation, video pipelines, and workflow automation, with evals, guardrails, and observability. We ship what you can measure in prod, not demo-day theatre.",
    },
    {
      q: "Can you work with our existing engineering team?",
      a: "Yes, most of our pods do. We pair with your engineers, write code in your repo, and follow your review process. The goal is your team is stronger when we leave.",
    },
    {
      q: "How do you estimate an AI engagement?",
      a: "We review representative inputs, integrations, review requirements, and the cost of failure before proposing a scope. The first release is narrowed around one testable workflow.",
    },
    {
      q: "What does an AI engagement usually cost?",
      a: "Price follows a written scope covering the workflow, integrations, review path, and acceptance checks. The first call establishes whether there is enough information to quote.",
    },
  ],
  markets: [
    {
      q: "Are you a prop trading firm?",
      a: "No. We build trading and analytics infrastructure for prop firms, funds, and serious traders. We don't run capital ourselves. That keeps incentives clean.",
    },
    {
      q: "Which broker APIs and venues can you integrate?",
      a: "Most major Indian and global broker APIs, plus custom OMS/OEMS stacks. If you provide sandbox access and docs, we can integrate and validate quickly.",
    },
    {
      q: "How do you validate trading systems before go-live?",
      a: "We run event-driven backtests with slippage, fees, partial fills, and latency assumptions, then stage through paper/live shadow modes before production cutover.",
    },
    {
      q: "Can you stabilize and improve an existing trading codebase?",
      a: "Yes. We start with a code + risk audit, identify load-bearing paths, then prioritize reliability, observability, and execution quality improvements.",
    },
    {
      q: "Do you take a cut of trading PnL?",
      a: "No. We bill for engineering work and audits. We don't run capital. Incentives stay clean.",
    },
  ],
  design: [
    {
      q: "Do you handle both design and frontend implementation?",
      a: "Yes. Designers and engineers work in one pod and ship in one repo, from UX research and wireframing through branding, UI design, and frontend code.",
    },
    {
      q: "Do you challenge product assumptions or just execute briefs?",
      a: "We challenge assumptions when it improves outcomes. The first deliverable is often a sharper problem definition and success metric set.",
    },
    {
      q: "Can you work in our design system?",
      a: "Yes, and we'll improve it on the way out. If you don't have one, we'll ship the smallest one that earns its keep.",
    },
    {
      q: "Do you offer UX audits and branding work?",
      a: "Yes. We run complete website UX audits, product experience reviews, branding and visual identity systems, and UX research, alongside UI design and frontend delivery.",
    },
    {
      q: "What is a typical design engagement timeline?",
      a: "It depends on the number of journeys, research access, and whether frontend implementation is included. We quote against a written scope rather than a standard timeline.",
    },
    {
      q: "Will you ship code, or only design files?",
      a: "Code. Designers and engineers ship in one repo on a weekly demo cycle.",
    },
  ],
};

export const PROOF = {
  ai: {
    eyebrow: "What teams get",
    items: [
      { label: "Quality check", value: "Representative test set" },
      { label: "Failure path", value: "Human review and fallback" },
      { label: "Delivery", value: "Code in your repository" },
    ],
  },
  markets: {
    eyebrow: "How we ship",
    items: [
      { label: "Backtesting model", value: "Event-driven + realistic costs" },
      { label: "Go-live safety", value: "Paper/shadow before cutover" },
      { label: "Ops posture", value: "Runbooks + kill switches" },
    ],
  },
  design: {
    eyebrow: "Why teams choose us",
    items: [
      { label: "Team shape", value: "Design + frontend in one pod" },
      { label: "Execution speed", value: "Weekly demo cadence" },
      { label: "Outcome focus", value: "Activation, conversion, retention" },
    ],
  },
};
