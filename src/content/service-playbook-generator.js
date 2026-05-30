/* Category-aware playbook generation for services without hand-written playbooks. */

const CATEGORY_CONTEXT = {
  build: {
    audiencePool: [
      "SaaS founders shipping their next product increment.",
      "Ops teams replacing manual workflows with reliable software.",
      "Product leaders modernizing legacy internal tooling.",
      "Growth-stage companies scaling engineering without hiring lag.",
    ],
    problemPool: [
      "Manual processes creating errors, delays, and hidden operational cost.",
      "Legacy systems that cannot support current product or compliance needs.",
      "Engineering backlog blocking revenue-critical features for quarters.",
      "Unclear scope causing overbuild and missed launch windows.",
      "Fragmented data across tools with no single operational source of truth.",
    ],
    deliverablePool: [
      "Production-ready implementation with clear acceptance criteria.",
      "Architecture and data model aligned to your growth stage.",
      "Automated tests and deployment pipeline for safe releases.",
      "Documentation and handoff materials your team can maintain.",
      "Instrumentation for usage, errors, and business KPI tracking.",
      "Phased rollout plan with milestone-based delivery.",
    ],
    process: [
      "Discovery: align on users, constraints, integrations, and success metrics.",
      "Scope: define the smallest shippable version with measurable outcomes.",
      "Build: weekly demos inside your repo with incremental delivery.",
      "Launch: production rollout, monitoring, and structured handoff.",
    ],
    differentiators: [
      "Senior full-stack pod with direct ownership — no handoff chains.",
      "Outcome-first scoping that avoids overbuild and scope creep.",
      "Production habits: tests, observability, and rollback-safe releases.",
    ],
  },
  "ai-automation": {
    audiencePool: [
      "Product teams adding AI features without risking user trust.",
      "Support and ops leaders automating high-volume repetitive work.",
      "Founders exploring where AI creates measurable ROI first.",
      "Enterprises needing production guardrails, not demo-quality AI.",
    ],
    problemPool: [
      "AI prototypes that fail under real user load or edge cases.",
      "Hallucinations and inconsistent outputs eroding user confidence.",
      "No evaluation framework to measure quality before launch.",
      "Disconnected AI features that do not integrate with existing workflows.",
      "Unclear data privacy and access boundaries for AI systems.",
    ],
    deliverablePool: [
      "Production AI pipeline with retrieval, prompts, and fallback logic.",
      "Evaluation suite with test cases tied to business outcomes.",
      "Guardrails for tone, accuracy, and escalation when confidence is low.",
      "Observability for latency, cost, and quality drift over time.",
      "Integration with your product, CRM, or internal tools.",
      "Runbook for monitoring, retraining, and scope expansion.",
    ],
    process: [
      "Discovery: map workflows, data sources, and ROI hypotheses.",
      "Scope: define v1 automation with eval criteria and safety boundaries.",
      "Build: iterate on quality with test sets before user-facing rollout.",
      "Launch: staged deployment with monitoring and human-in-the-loop where needed.",
    ],
    differentiators: [
      "Production AI with evals and guardrails — not demo-quality outputs.",
      "Measurable ROI tracking from week one of deployment.",
      "Senior pod spanning ML integration, backend, and product UX.",
    ],
  },
  design: {
    audiencePool: [
      "Product teams preparing for a launch or major UX refresh.",
      "Founders who need design and frontend shipped in one pod.",
      "Growth teams optimizing activation, conversion, and retention flows.",
      "Engineering leads wanting implementation-ready design assets.",
    ],
    problemPool: [
      "Inconsistent UI patterns causing user confusion and support load.",
      "Design-engineering handoff loss slowing iteration velocity.",
      "Critical flows with high drop-off and no clear fix priority.",
      "Stakeholder feedback cycles delaying ship dates without improving outcomes.",
      "No design system causing duplicated effort across features.",
    ],
    deliverablePool: [
      "User flows and wireframes for priority journeys.",
      "High-fidelity UI with responsive layouts and interaction states.",
      "Design system components or extensions to your existing library.",
      "Developer-ready specs, tokens, and asset exports.",
      "Design QA on production builds before launch.",
      "Prioritized backlog for post-launch iteration.",
    ],
    process: [
      "Discovery: align on users, metrics, and constraints with engineering.",
      "Scope: map critical journeys and define success criteria per flow.",
      "Build: design sprints with weekly reviews and prototype validation.",
      "Launch: handoff, design QA, and post-launch measurement support.",
    ],
    differentiators: [
      "Design and frontend in one repo — no handoff loss.",
      "Conversion and retention metrics drive design decisions.",
      "Senior designers who understand engineering constraints.",
    ],
  },
  "integrations-platform": {
    audiencePool: [
      "SaaS teams launching billing, auth, or analytics foundations.",
      "Product leaders integrating third-party tools without tech debt.",
      "Startups needing production-grade payments and subscriptions fast.",
      "Ops teams connecting CRM, email, and communication channels.",
    ],
    problemPool: [
      "Fragile integrations breaking silently in production.",
      "Payment or billing edge cases causing revenue leakage.",
      "Auth flows that create security gaps or poor user experience.",
      "Webhook and retry logic missing, causing data sync failures.",
      "No monitoring on integration health until customers complain.",
    ],
    deliverablePool: [
      "Production integration with error handling and retry logic.",
      "Webhook processing with idempotency and audit trails.",
      "Sandbox-to-production validation checklist.",
      "Monitoring and alerting for integration failures.",
      "Documentation for your team to extend and maintain.",
      "Security review of credentials, scopes, and access patterns.",
    ],
    process: [
      "Discovery: audit current stack, vendors, and failure modes.",
      "Scope: define integration requirements and acceptance tests.",
      "Build: implement, test edge cases, and validate in staging.",
      "Launch: production cutover with monitoring and rollback plan.",
    ],
    differentiators: [
      "Integration work treated as product infrastructure, not one-off tasks.",
      "Edge-case handling and observability built in from day one.",
      "Experience across Stripe, auth providers, CRMs, and analytics stacks.",
    ],
  },
  "startup-tech-partner": {
    audiencePool: [
      "First-time founders going from idea to shippable product.",
      "Startup CEOs needing a senior technical co-pilot without full-time hire.",
      "Teams post-seed preparing for scale-up architecture decisions.",
      "Non-technical founders who need clarity on build vs buy tradeoffs.",
    ],
    problemPool: [
      "Unclear product scope causing wasted engineering cycles.",
      "Architecture decisions that block scale-up six months later.",
      "No trusted technical partner for investor or board conversations.",
      "Vendor and agency output that does not compound into a real product.",
      "Roadmap packed with features but missing revenue-linked prioritization.",
    ],
    deliverablePool: [
      "Product and technical strategy aligned to business milestones.",
      "MVP scope definition with cut lines and success metrics.",
      "Architecture plan that supports 10x growth without rewrite.",
      "Vendor evaluation and build-vs-buy recommendations.",
      "Sprint or pod delivery for highest-leverage milestones.",
      "Board-ready progress reporting and risk visibility.",
    ],
    process: [
      "Discovery: understand vision, constraints, and near-term business goals.",
      "Scope: prioritize bets by revenue impact and execution feasibility.",
      "Build: ship in focused sprints with weekly stakeholder demos.",
      "Launch: go-live support and roadmap for the next growth phase.",
    ],
    differentiators: [
      "Founder-aligned partner — we challenge scope, not just execute briefs.",
      "Strategy and delivery in one senior pod.",
      "Speed without sacrificing architecture decisions you will not regret.",
    ],
  },
};

function hashPick(seed, pool, count) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  const items = [];
  const used = new Set();
  for (let i = 0; items.length < count && i < pool.length * 2; i += 1) {
    const idx = Math.abs((hash + i * 7) % pool.length);
    if (!used.has(idx)) {
      used.add(idx);
      items.push(pool[idx]);
    }
  }
  return items;
}

function titleCase(str) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildFaqs(service, category) {
  const title = service.title;
  const lower = title.toLowerCase();
  return [
    {
      q: `How long does ${lower} typically take?`,
      a: `Focused ${lower} scopes usually ship in 2-4 weeks. Broader ${category.shortTitle.toLowerCase()} engagements run 8-12 weeks with weekly demos.`,
    },
    {
      q: `What should we prepare before starting ${lower}?`,
      a: "Share your goals, current stack, constraints, and any existing docs or designs. We will align on scope and success metrics on the first call.",
    },
    {
      q: `Can Futurebits work with our existing ${category.shortTitle.toLowerCase()} team?`,
      a: "Yes. We embed in your repo and process, pair with your team, and leave clear documentation when the engagement ends.",
    },
    {
      q: `How do you measure success for ${lower}?`,
      a: "We define acceptance criteria and business metrics up front — cycle time, conversion, reliability, or cost savings depending on your use case.",
    },
    {
      q: `Do you offer ongoing support after ${lower} launches?`,
      a: "Yes. We offer maintenance, iteration sprints, and partner engagements for teams that want continued senior execution.",
    },
  ];
}

export function generateServicePlaybook(service, category) {
  const ctx = CATEGORY_CONTEXT[category.slug] ?? CATEGORY_CONTEXT.build;
  const seed = service.slug;

  return {
    whoFor: hashPick(`${seed}-who`, ctx.audiencePool, 4).map((item) =>
      item.includes("teams") || item.includes("founders")
        ? `${titleCase(category.shortTitle)} buyers: ${item.charAt(0).toLowerCase()}${item.slice(1)}`
        : item
    ),
    problems: [
      ...hashPick(`${seed}-prob`, ctx.problemPool, 3),
      `${service.title} delayed by unclear requirements or missing technical ownership.`,
    ],
    deliverables: [
      `${service.title} scoped to measurable outcomes with defined acceptance criteria.`,
      ...hashPick(`${seed}-del`, ctx.deliverablePool, 5),
    ],
    process: ctx.process,
    differentiators: ctx.differentiators,
    faqs: buildFaqs(service, category),
  };
}
