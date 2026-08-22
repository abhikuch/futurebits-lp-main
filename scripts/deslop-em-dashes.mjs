import fs from "fs";
import path from "path";

const files = [
  "src/content/service-copy.js",
  "src/content/services.js",
  "src/content/blog.js",
  "src/content/service-content-seeds.js",
  "src/content/service-playbook-generator.js",
  "src/content/link-building.js",
  "src/config/site.js",
];

function deSlop(text) {
  let out = text;
  const rules = [
    [/ — scoped, shipped, signed off\./g, ". Scoped, shipped, signed off."],
    [/ weekly demos — no account-manager layer\./g, " weekly demos. No account-manager layer."],
    [/ — not a feature wish list\./g, ", not a feature wish list."],
    [/ — not next year\./g, ", not next year."],
    [/ — not demo-day features\./g, ", not demo-day features."],
    [/ — not status decks\./g, ", not status decks."],
    [/ — not a rotating bench\./g, ", not a rotating bench."],
    [/ — not a rewrite unless necessary\./g, ". We rewrite only when necessary."],
    [/ — not slide decks\./g, ", not slide decks."],
    [/ — not architecture diagrams\./g, ", not architecture diagrams."],
    [/ — not how many components exist in the library\./g, ", not component count in the library."],
    [/ — not emails sent\./g, ", not emails sent."],
    [/ — not a parallel codebase that rots\./g, ". We work in your repo, not a fork that rots."],
    [/One team from kickoff to launch — no hand-offs\./g, "One team from kickoff to launch. No hand-offs."],
    [/ — and how to fix them\./g, ", and how to fix them."],
    [/ — and where they waste budget\./g, ", and where they waste budget."],
    [/ — and how to migrate to automated reporting without disruption\./g, ", and how to migrate to automated reporting without disruption."],
    [/ — and when it is premature\./g, ", and when it is premature."],
    [/ — and when you need a complete brand system\./g, ", and when you need a complete brand system."],
    [/ — scoped, shipped in your repo, with weekly demos\./g, ". Scoped, shipped in your repo, with weekly demos."],
    [/ — scoped in writing, shipped in your repo\./g, ". Scoped in writing, shipped in your repo."],
    [/ — sprints, pods, or partner/g, ". Sprints, pods, or partner"],
    [/ — broken billing, a chatbot that failed,/g, ". Broken billing, a chatbot that failed,"],
    [/ — timeline, stack, budget\./g, ". Timeline, stack, budget."],
    [/Design, engineering, or AI in your repo — weekly demos\./g, "Design, engineering, or AI in your repo. Weekly demos."],
    [/We quote fixed windows — sprints/g, "We quote fixed windows: sprints"],
    [/ product engineering, applied AI, UX, and markets infrastructure — same/g, " product engineering, applied AI, UX, and markets infrastructure. Same"],
    [/we are probably not the right fit — and that is worth/g, "we are probably not the right fit. That is worth"],
    [/one-page scope sketch — keep it whether/g, "one-page scope sketch. Keep it whether"],
    [/The first useful version should land in weeks — not after/g, "The first useful version should land in weeks, not after"],
    [/Design clarifies — it does not decorate\./g, "Design clarifies. It does not decorate."],
    [/We say no when it is not — and we will tell/g, "We say no when it is not. We will tell"],
    [/Futurebits Technologies is a design and engineering studio focused on production outcomes — not slide decks\./g, "Futurebits Technologies is a design and engineering studio focused on production outcomes, not slide decks."],
    [/ — free from Futurebits\./g, ", free from Futurebits."],
    [/ — test with PageSpeed Insights\./g, ". Test with PageSpeed Insights."],
    [/ — not competing demo\/trial\/contact buttons\./g, ". One CTA per page beats competing demo, trial, and contact buttons."],
    [/Meet the team building Futurebits — designers/g, "Meet the team building Futurebits: designers"],
    [/Futurebits media kit — company boilerplate/g, "Futurebits media kit: company boilerplate"],
    [/Free resources from Futurebits — UX audit checklists/g, "Free resources from Futurebits: UX audit checklists"],
    [/Weekly demo — live or recorded — with decisions logged/g, "Weekly demo, live or recorded, with decisions logged"],
    [/Typical window: ([^—]+) — stated in writing before we start\./g, "Typical window: $1, stated in writing before we start."],
    [/Weekly demos with written decisions — not status decks\./g, "Weekly demos with written decisions, not status decks."],
    [/Cut: smallest version that proves value — write it down/g, "Cut: smallest version that proves value. Write it down"],
    [/Product designers underwater — need /g, "Product designers underwater need "],
    [/Engineering teams scared to touch billing — need /g, "Engineering teams scared to touch billing need "],
    [/Startups between hires — need /g, "Startups between hires need "],
    [/ — we won't/g, ". We won't"],
    [/ — we cut/g, ". We cut"],
    [/ — we automate/g, ". We automate"],
    [/ — but we won't/g, ", but we won't"],
    [/ — breadth kills accuracy\./g, ". Breadth kills accuracy."],
    [/ — deflection comes in phases\./g, ". Deflection comes in phases."],
    [/ — we fix the flow first\./g, ". We fix the flow first."],
    [/ — it's a bet\./g, ". It's a bet."],
    [/ — that's the point\./g, ". That's the point."],
    [/ — we've seen it twice this year\./g, ". We've seen it twice this year."],
    [/ — we load-test before launch\./g, ". We load-test before launch."],
    [/ — we force rank by revenue impact\./g, ". We force rank by revenue impact."],
    [/ — we bill for engineering only\./g, ". We bill for engineering only."],
    [/ — and the fix isn't another generic agency retainer\./g, ", and the fix isn't another generic agency retainer."],
    [/ — scope creep is the enemy\./g, ". Scope creep is the enemy."],
    [/ — signups, demo requests, checkout completion, or activation rates\./g, ": signups, demo requests, checkout completion, or activation rates."],
    [/ — unclear pricing, weak social proof, confusing signup — can recover/g, ": unclear pricing, weak social proof, or confusing signup. That can recover"],
    [/ — policies, product docs, support macros, sales decks\./g, ": policies, product docs, support macros, sales decks."],
    [/ — order status, billing FAQs, account setup — and measure/g, ": order status, billing FAQs, account setup. Measure"],
    [/ — tasks with clear inputs and verifiable outputs\./g, ": tasks with clear inputs and verifiable outputs."],
    [/ — post-demo follow-up, lead qualification, or proposal drafting — and automate/g, ": post-demo follow-up, lead qualification, or proposal drafting. Automate"],
    [/ — you are running undeclared software\./g, ", you are running undeclared software."],
    [/ — "users will pay for X" or "workflow Y saves 5 hours\/week\."\./g, ': "users will pay for X" or "workflow Y saves 5 hours/week."'],
    [/ — blog outlines, ad variants, email sequences\./g, ": blog outlines, ad variants, email sequences."],
    [/ — ads, landing pages, product copy — needs a human approval step with clear ownership\./g, ": ads, landing pages, product copy. Those need a human approval step with one owner."],
    [/ — surveys only tell you what you thought to ask\./g, ". Surveys only tell you what you thought to ask."],
    [/ — even 3 users — compounds/g, ", even 3 users, compounds"],
    [/ — it does not create it\./g, ". It does not create it."],
    [/ — edge cases, interaction intent, responsive behavior\./g, ": edge cases, interaction intent, responsive behavior."],
    [/ — not what requires a custom build every time\./g, ", not what requires a custom build every time."],
    [/Production AI — agents/g, "Production AI: agents"],
    [/Backtesting, execution, shadow mode, PnL monitoring, and trading infra — with fees/g, "Backtesting, execution, shadow mode, PnL monitoring, and trading infra. Fees"],
    [/Stripe, Razorpay, auth, billing, analytics, and API integrations — idempotent/g, "Stripe, Razorpay, auth, billing, analytics, and API integrations. Idempotent"],
    [/Founder tech partner, MVP scope, product strategy, and idea-to-launch pods — one small team/g, "Founder tech partner, MVP scope, product strategy, and idea-to-launch pods. One small team"],
    [/UI\/UX, audits, research, branding, landing pages, and design systems — focused on flows/g, "UI/UX, audits, research, branding, landing pages, and design systems, focused on flows"],
    [/Software engineering in your repo — SaaS/g, "Software engineering in your repo: SaaS"],
    [/Yes — maintenance sprints/g, "Yes. Maintenance sprints"],
    [/The same small team from kickoff to launch — not a rotating bench/g, "The same small team from kickoff to launch, not a rotating bench"],
    [/We audit first and tell you if something needs replacing — we won't rip out/g, "We audit first and tell you if something needs replacing. We won't rip out"],
    [/focus on what's blocking launch — not a rewrite unless necessary/g, "focus on what's blocking launch. We rewrite only when necessary"],
    [/ — a small design, AI, and engineering studio\./g, ", a small design, AI, and engineering studio."],
    [/means — so nothing ships\./g, "means. Until that is defined, nothing ships."],
    [/From Indian equities to crypto perps, the same engineering bar — order safety, observability, recovery\./g, "From Indian equities to crypto perps, the same engineering bar: order safety, observability, recovery."],
    [/ — "Reduced onboarding time by 40%" — from customers/g, ': "Reduced onboarding time by 40%" from customers'],
  ];
  for (const [pattern, replacement] of rules) {
    out = out.replace(pattern, replacement);
  }
  out = out.replace(/ — /g, ". ");
  out = out.replace(/\. \./g, ".");
  return out;
}

for (const file of files) {
  const full = path.join(process.cwd(), file);
  const original = fs.readFileSync(full, "utf8");
  const updated = deSlop(original);
  if (original !== updated) {
    fs.writeFileSync(full, updated);
    const count = (original.match(/—/g) || []).length;
    const remaining = (updated.match(/—/g) || []).length;
    console.log(`${file}: ${count} -> ${remaining} em dashes`);
  }
}
