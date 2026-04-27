/**
 * Vertical-specific copy for the inline POV / Engagement Models / FAQ
 * modules embedded inside `/ai`, `/markets`, and `/design`.
 *
 * Designed so all three pages share one component shell with different
 * content. When we add the content layer in the next phase, this file
 * is the canonical seed.
 */

export const POV = {
  ai: {
    eyebrow: "How we think about AI",
    title: "Most AI projects fail because they automate the wrong thing first.",
    body:
      "We start with the smallest workflow that, if AI does it well, frees up real hours every week. Then we measure those hours back. No demos, no theatre — just the line that moved.",
    bullets: [
      "We map workflows before models. The model is the last decision, not the first.",
      "We refuse projects where the cost of a wrong AI answer is higher than the value of a right one.",
      "Every AI surface ships with an evaluation harness. If we can't measure it, we don't ship it.",
    ],
  },
  markets: {
    eyebrow: "How we think about markets",
    title: "Trading systems that survive the next regime change.",
    body:
      "We build trading and analytics infrastructure for teams who treat markets as a long game. Edge dies; infrastructure compounds. We bias toward boring code, fast feedback, and ruthless risk hygiene.",
    bullets: [
      "Backtests are evidence, not arguments. We build them to break, then we publish what broke.",
      "Latency, slippage, and fees are first-class citizens — not appendices in the appendix.",
      "Every system ships with a kill switch and a one-page runbook. If a junior can't shut it down at 2am, it isn't done.",
    ],
  },
  design: {
    eyebrow: "How we think about design",
    title: "Design is what changes the metric — not what makes the deck pretty.",
    body:
      "We use design to clarify product strategy. The brief that comes out of week one is sharper than the brief that came in. Visual taste is table stakes; the work is in the thinking underneath.",
    bullets: [
      "Every screen earns its place by moving a real number — activation, retention, or revenue.",
      "We design with code in the loop. Mockups are throwaways; live prototypes are the artefact.",
      "We default to fewer pixels, fewer pages, and fewer features. The hard work is removing things.",
    ],
  },
};

export const ENGAGEMENT_MODELS = [
  {
    name: "Sprint",
    duration: "2 – 4 weeks",
    bestFor: "A clear, scoped problem. Land one shipped artefact fast.",
    deliverables: [
      "One shipped surface — a flow, a prototype, an automation",
      "A short post-mortem with what we'd do next and why",
      "Daily async updates, one weekly working session",
    ],
  },
  {
    name: "Pod",
    duration: "8 – 12 weeks",
    bestFor:
      "A 0-to-1 launch or a meaningful 1-to-10 jump. We embed alongside your team.",
    deliverables: [
      "A senior pod (design, engineering, AI) running end-to-end",
      "Weekly demo cycle, fortnightly steering committee",
      "Hand-off docs your team can keep running with",
    ],
  },
  {
    name: "Partner",
    duration: "Ongoing",
    bestFor:
      "Long-running product or platform work. Compounding output, not vendor billable hours.",
    deliverables: [
      "Senior team allocated as a fractional product unit",
      "Quarterly OKRs tied to your business metrics",
      "Right of first refusal on new bets, shared roadmap ownership",
    ],
  },
];

export const FAQ = {
  ai: [
    {
      q: "What kind of AI projects do you ship?",
      a: "Production AI systems for support, operations, and product workflows — including retrieval pipelines, evaluations, guardrails, and observability. We prioritize measurable business outcomes over demos.",
    },
    {
      q: "Can you work with our existing engineering team?",
      a: "Yes — most of our pods do. We pair with your engineers, write code in your repo, and follow your review process. The goal is your team is stronger when we leave.",
    },
    {
      q: "How quickly can we expect ROI from an AI engagement?",
      a: "Most teams see first useful automation in 2-3 weeks. Full production rollouts typically land in 8-12 weeks depending on integrations and governance requirements.",
    },
    {
      q: "What does an AI engagement usually cost?",
      a: "Sprints typically start in the low five figures USD; pods scale with scope and complexity. We share indicative pricing on the first call and a fixed proposal within a week.",
    },
    {
      q: "Do you replace our existing engineering team?",
      a: "No. We pair with your engineers in your repo, follow your review process, and aim to leave your team stronger than we found it.",
    },
  ],
  markets: [
    {
      q: "Are you a prop trading firm?",
      a: "No. We build trading and analytics infrastructure for prop firms, funds, and serious traders. We don't run capital ourselves — that keeps incentives clean.",
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
      a: "Yes. Designers and engineers work in one pod and ship in one repo, reducing handoff loss and accelerating iteration speed.",
    },
    {
      q: "Do you challenge product assumptions or just execute briefs?",
      a: "We challenge assumptions when it improves outcomes. The first deliverable is often a sharper problem definition and success metric set.",
    },
    {
      q: "Can you work in our design system?",
      a: "Yes — and we'll improve it on the way out. If you don't have one, we'll ship the smallest one that earns its keep.",
    },
    {
      q: "What is a typical design engagement timeline?",
      a: "2-4 week sprints for focused wins, 8-12 week pods for major launches, and ongoing partner setups for compounding product work.",
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
      { label: "First useful automation", value: "2-3 weeks" },
      { label: "Typical production rollout", value: "8-12 weeks" },
      { label: "Delivery model", value: "Senior pod in your repo" },
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
