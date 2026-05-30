/* Playbook generation with anti-slop structure and voice lint. */

import { lintPlaybook } from "@/content/content-voice";
import { MARKETS_AUDIENCE } from "@/content/service-copy";
import { generateServiceSeed } from "@/content/service-content-seeds";

const PROCESS_VARIANTS = [
  (title, timeline) => [
    `Week 1: map current state, stack, and what "${title.toLowerCase()}" must change`,
    `Week 2: lock scope, acceptance tests, and cut lines`,
    `Weeks 3+: build in your repo with weekly demos`,
    `Final: launch, monitor, handoff docs`,
  ],
  (title) => [
    `Align: goals, constraints, and who signs off on ${title.toLowerCase()}`,
    `Cut: smallest version that proves value — write it down`,
    `Ship: incremental releases with review each week`,
    `Measure: check the metric we agreed on; iterate or close`,
  ],
  (title, _, tools) => [
    `Audit: existing ${tools[0]} setup and failure modes`,
    `Design: approach, risks, and test plan before code`,
    `Implement: focused build with explicit done criteria`,
    `Validate: staging sign-off, then production with rollback plan`,
  ],
  (title, timeline) => [
    `Kickoff: access, repos, and ${timeline} target`,
    `Prototype: rough end-to-end path for feedback early`,
    `Harden: edge cases, monitoring, and docs`,
    `Release: go-live support and next-step backlog`,
  ],
  (title, _, tools) => [
    `Intake: stakeholders, ${tools[0]} access, and success metric`,
    `Spec: written scope with in/out and test cases`,
    `Build: pair with your team or solo in your repo`,
    `Handoff: docs, runbook, and optional retainer`,
  ],
];

const WHO_FOR_BY_CATEGORY = {
  build: [
    (t) => `CTOs who need ${t.toLowerCase()} shipped this quarter — not next year.`,
    (t) => `Ops leads replacing manual work with ${t.toLowerCase()} your team will actually use.`,
    (t) => `Founders post-PMF adding ${t.toLowerCase()} without hiring three engineers first.`,
    (t) => `Product teams blocked on ${t.toLowerCase()} because internal capacity is on core roadmap.`,
  ],
  "ai-automation": [
    (t) => `Product leads adding ${t.toLowerCase()} with evals — not demo-day features.`,
    (t) => `Support or ops managers automating repeat work via ${t.toLowerCase()}.`,
    (t) => `Teams that tried a chatbot hackathon and need ${t.toLowerCase()} in production.`,
    (t) => `Founders who need ${t.toLowerCase()} scoped before the next fundraise narrative.`,
  ],
  design: [
    (t) => `Growth leads where ${t.toLowerCase()} should move signup or demo conversion.`,
    (t) => `Product designers underwater — need ${t.toLowerCase()} for one critical flow.`,
    (t) => `Founders relaunching and need ${t.toLowerCase()} before paid traffic scales.`,
    (t) => `Engineering leads who want ${t.toLowerCase()} that builds cleanly in React.`,
  ],
  "markets-trading": [
    (t) => `Quant and systematic teams formalizing ${t.toLowerCase()} before capital allocation.`,
    (t) => `Prop desks moving from scripts to monitored ${t.toLowerCase()}.`,
    (t) => `Funds with governance gates between research and ${t.toLowerCase()}.`,
    (t) => `Trading ops adding ${t.toLowerCase()} after a near-miss or audit finding.`,
  ],
  "integrations-platform": [
    (t) => `SaaS founders who need ${t.toLowerCase()} live before sales can close deals.`,
    (t) => `Engineering teams scared to touch billing — need ${t.toLowerCase()} done right once.`,
    (t) => `Products expanding to new markets requiring ${t.toLowerCase()}.`,
    (t) => `Teams migrating stacks and need ${t.toLowerCase()} without breaking prod.`,
  ],
  "startup-tech-partner": [
    (t) => `First-time founders who need ${t.toLowerCase()} and honest scope pushback.`,
    (t) => `Pre-seed teams with investor interest but no technical co-founder.`,
    (t) => `Startups between hires — need ${t.toLowerCase()} for 8–12 weeks.`,
    (t) => `Founders who burned budget on agencies and want ${t.toLowerCase()} in one repo.`,
  ],
};

const PROBLEM_VARIANTS = [
  (t, tools) => `${t} estimates balloon because acceptance criteria were never written.`,
  (t) => `A previous vendor shipped ${t.toLowerCase()} that broke on edge cases in week two.`,
  (t) => `Your team lacks bandwidth to own ${t.toLowerCase()} while shipping the core product.`,
  (t, tools) => `Integrations around ${tools[0]} are fragile and nobody owns on-call.`,
  (t) => `Stakeholders disagree on what "${t.toLowerCase()} done" means — so nothing ships.`,
  (t, tools) => `You have ${tools[1]} in place but ${t.toLowerCase()} never got past the backlog.`,
];

const DELIVERABLE_VARIANTS = [
  (t) => `Written scope for ${t.toLowerCase()} with explicit in/out of scope`,
  "Weekly demo — live or recorded — with decisions logged",
  "Acceptance checklist signed before production launch",
  "Runbook for the failure modes we expect in month one",
  "Handoff doc so your team can maintain without us",
  (t, tools) => `Working implementation in your repo using ${tools.slice(0, 2).join(" and ")}`,
];

function hashIndex(seed, modulo) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % modulo;
}

function buildFaqs(service, seed) {
  const lower = service.title.toLowerCase();
  const toolStr = seed.tools.slice(0, 2).join(" or ");

  const pools = [
    {
      q: `What does the first week of ${lower} look like?`,
      a: `Access, repo setup, and a written scope draft. No build until you sign off on cut lines and the metric we're targeting.`,
    },
    {
      q: `Do you work with our existing ${toolStr} setup?`,
      a: `Yes, when it's sane. We audit first and tell you if something needs replacing — we won't rip out working infra for sport.`,
    },
    {
      q: `What if we already started ${lower} in-house?`,
      a: `We pick up from current state, document what's there, and focus on what's blocking launch — not a rewrite unless necessary.`,
    },
    {
      q: `How is ${lower} priced?`,
      a: `Fixed scope for sprints (${seed.timeline}). Broader work runs as a pod with weekly demos. We quote after a 30-minute scoping call.`,
    },
    {
      q: `What do you need from us to start?`,
      a: `One decision-maker, repo or staging access, and honest constraints (timeline, budget, stack). Existing docs help but aren't required.`,
    },
    {
      q: `Can you stay on after ${lower} launches?`,
      a: `Yes — maintenance sprints or a partner retainer. Many teams keep us for the next bottleneck once v1 is stable.`,
    },
    {
      q: `Who on your team works on ${lower}?`,
      a: `The same small team from kickoff to launch — not a rotating bench. You talk to the people writing code or design files.`,
    },
  ];

  const start = hashIndex(service.slug, pools.length);
  return [...pools.slice(start), ...pools.slice(0, start)].slice(0, 5);
}

function buildDifferentiators(seed) {
  return [
    seed.contrarian,
    seed.wontDo,
    `Typical window: ${seed.timeline} — stated in writing before we start.`,
  ];
}

export function generateServicePlaybook(service, category) {
  const seed = generateServiceSeed(service, category);
  const slug = service.slug;
  const title = service.title;
  const variantIdx = hashIndex(slug, PROCESS_VARIANTS.length);
  const processFn = PROCESS_VARIANTS[variantIdx];
  const whoForFns =
    WHO_FOR_BY_CATEGORY[category.slug] ?? WHO_FOR_BY_CATEGORY.build;
  const whoStart = hashIndex(slug, whoForFns.length);

  const markets = MARKETS_AUDIENCE[slug];

  const playbook = {
    intro: seed.intro,
    contrarian: seed.contrarian,
    wontDo: seed.wontDo,
    chips: seed.chips,
    whoFor: [
      ...whoForFns.slice(whoStart),
      ...whoForFns.slice(0, whoStart),
    ].slice(0, 4).map((fn) => fn(title)),
    problems: PROBLEM_VARIANTS.map((fn) => fn(title, seed.tools)).slice(0, 5),
    deliverables: DELIVERABLE_VARIANTS.map((entry) =>
      typeof entry === "function" ? entry(title, seed.tools) : entry
    ),
    process: processFn(title, seed.timeline, seed.tools),
    differentiators: buildDifferentiators(seed),
    faqs: buildFaqs(service, seed),
    ...(markets
      ? {
          dominantPersona: markets.dominantPersona,
          dominantAudience: markets.dominantAudience,
          secondaryAudiences: markets.secondaryAudiences,
        }
      : {}),
  };

  return lintPlaybook(playbook);
}
