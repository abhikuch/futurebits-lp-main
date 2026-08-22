import { SITE_URL } from "@/config/site";
import { lintBlogPost } from "@/content/content-voice";

const RAW_BLOG_POSTS = [
  {
    slug: "website-ux-audit-cost-guide",
    title: "How Much Does a Website UX Audit Cost in 2026?",
    description:
      "A practical breakdown of UX audit pricing, scope, deliverables, and ROI for SaaS and growth teams.",
    publishedAt: "2026-05-15",
    category: "Design",
    readMinutes: 8,
    serviceLinks: [
      { categorySlug: "design", serviceSlug: "website-ux-audit", label: "Website UX Audit" },
      { categorySlug: "design", serviceSlug: "ux-research", label: "UX Research" },
    ],
    sections: [
      {
        heading: "What a UX audit actually includes",
        body: "A proper website UX audit goes beyond \"the button should be bigger.\" It maps your highest-intent user journeys, identifies friction in navigation and conversion paths, reviews mobile experience, and ties findings to metrics you already track: signups, demo requests, checkout completion, or activation rates.",
      },
      {
        heading: "Typical pricing ranges",
        body: "For a focused audit of a marketing site or early-stage SaaS product, agencies typically charge low four figures to mid four figures USD. Broader product experience audits covering onboarding, core workflows, and analytics instrumentation sit higher. The biggest cost driver is page count, analytics depth, and whether you need competitive benchmarking.",
      },
      {
        heading: "When an audit pays for itself",
        body: "If your site already drives meaningful traffic but conversion has plateaued, a UX audit is often the highest-ROI design spend. Fixing one broken funnel step: unclear pricing, weak social proof, or confusing signup. That can recover more pipeline than a full rebrand.",
      },
      {
        heading: "What to ask before hiring",
        body: "Ask for sample deliverables, how findings are prioritized, and whether the team can support implementation. The best audits end with a ranked backlog your engineers and designers can execute immediately.",
      },
    ],
  },
  {
    slug: "rag-vs-fine-tuning-knowledge-base",
    title: "RAG vs Fine-Tuning: Which Is Right for Your AI Knowledge Base?",
    description:
      "Compare retrieval-augmented generation and fine-tuning for custom GPT and internal knowledge base projects.",
    publishedAt: "2026-05-18",
    category: "AI",
    readMinutes: 10,
    serviceLinks: [
      { categorySlug: "ai-automation", serviceSlug: "custom-gpt-knowledge-base", label: "Custom GPT & Knowledge Base" },
      { categorySlug: "ai-automation", serviceSlug: "rag-application-development", label: "RAG Application Development" },
    ],
    sections: [
      {
        heading: "Start with the job to be done",
        body: "Most business knowledge base projects need accurate answers grounded in current documents: policies, product docs, support macros, sales decks. That is a retrieval problem first, not a model training problem.",
      },
      {
        heading: "When RAG is the right default",
        body: "RAG works best when your content changes frequently, you need citations, and you want to update answers without retraining. It also keeps costs predictable and makes hallucination easier to detect with source links.",
      },
      {
        heading: "When fine-tuning makes sense",
        body: "Fine-tuning helps when you need a consistent tone, structured output formats, or domain-specific language that retrieval alone cannot enforce. It is rarely the first step for a v1 internal assistant.",
      },
      {
        heading: "Production controls matter more than architecture debates",
        body: "Evals, guardrails, access control, and logging determine whether your knowledge base survives real users. Plan for these from week one, regardless of RAG or fine-tuning.",
      },
    ],
  },
  {
    slug: "ai-chatbot-customer-support-guide",
    title: "How to Build an AI Chatbot for Customer Support (Step by Step)",
    description:
      "A practical guide to scoping, building, and launching website chatbots that resolve support issues accurately.",
    publishedAt: "2026-05-22",
    category: "AI",
    readMinutes: 9,
    serviceLinks: [
      { categorySlug: "ai-automation", serviceSlug: "chatbot-development", label: "Chatbot Development" },
      { categorySlug: "ai-automation", serviceSlug: "ai-customer-support-tools", label: "AI Customer Support Tools" },
    ],
    sections: [
      {
        heading: "Define the top 20 questions first",
        body: "Support chatbots fail when teams try to automate everything on day one. Start with high-volume, low-risk intents: order status, billing FAQs, account setup. Measure deflection before expanding scope.",
      },
      {
        heading: "Connect to your real knowledge sources",
        body: "Ground responses in help center articles, internal macros, and product docs via retrieval. The bot should cite sources and escalate when confidence is low.",
      },
      {
        heading: "Design escalation paths humans trust",
        body: "Users tolerate AI support when escalation to a human takes one click and passes full context. Integrate with Zendesk or Intercom, attach the transcript, and tell users what happens next.",
      },
      {
        heading: "Launch with evals, not hope",
        body: "Build a test set of real tickets and run it before go-live. Track resolution rate, escalation rate, and CSAT weekly for the first month.",
      },
    ],
  },
  {
    slug: "saas-landing-page-conversion-checklist",
    title: "7 Signs Your SaaS Landing Page Is Killing Conversions",
    description:
      "Common landing page mistakes that block SaaS signups and demo requests, and how to fix them.",
    publishedAt: "2026-05-28",
    category: "Design",
    readMinutes: 7,
    serviceLinks: [
      { categorySlug: "design", serviceSlug: "landing-page-design", label: "Landing Page Design" },
      { categorySlug: "design", serviceSlug: "website-ux-audit", label: "Website UX Audit" },
    ],
    sections: [
      {
        heading: "Your value prop requires scrolling to understand",
        body: "Visitors decide in seconds. If your headline does not state who it is for and what outcome they get, you are paying for traffic that bounces.",
      },
      {
        heading: "Social proof is missing or generic",
        body: "Logos alone are not enough. Use specific outcomes. \"Reduced onboarding time by 40%\". from customers your ICP recognizes.",
      },
      {
        heading: "One page, too many CTAs",
        body: "Demo, free trial, contact sales, and newsletter signup on the same page splits intent. Match your primary CTA to your acquisition channel.",
      },
      {
        heading: "Mobile experience is an afterthought",
        body: "For many B2B SaaS products, 40%+ of landing traffic is mobile. Broken layouts, tiny tap targets, and slow LCP kill conversions silently.",
      },
    ],
  },
  {
    slug: "ai-sales-agents-what-works",
    title: "AI Agents for Sales: What Actually Works in 2026",
    description:
      "Where AI sales agents deliver real pipeline impact, and where they waste budget.",
    publishedAt: "2026-05-10",
    category: "AI",
    readMinutes: 8,
    serviceLinks: [
      { categorySlug: "ai-automation", serviceSlug: "ai-agents-development", label: "AI Agents Development" },
      { categorySlug: "ai-automation", serviceSlug: "ai-workflow-automation", label: "AI Workflow Automation" },
    ],
    sections: [
      {
        heading: "Automate research and prep, not relationship building",
        body: "The highest-ROI sales agents today handle account research, CRM enrichment, follow-up drafts, and meeting prep: tasks with clear inputs and verifiable outputs. Fully autonomous outbound without human review still fails for most B2B products.",
      },
      {
        heading: "Ground agents in your ICP and playbook",
        body: "Generic agents produce generic outreach. Effective sales agents use your positioning docs, case studies, objection handling, and CRM history to personalize at scale without inventing facts.",
      },
      {
        heading: "Measure pipeline quality, not activity volume",
        body: "Track reply rate, meeting acceptance, and stage progression, not emails sent. Agents that inflate activity metrics without improving conversion should be scoped down or killed.",
      },
      {
        heading: "Start with one workflow",
        body: "Pick a single high-friction step: post-demo follow-up, lead qualification, or proposal drafting. Automate that end-to-end before expanding scope.",
      },
    ],
  },
  {
    slug: "excel-automation-dashboard-guide",
    title: "Excel Automation: When to Replace Spreadsheets with Dashboards",
    description:
      "Signs your team has outgrown Excel, and how to migrate to automated reporting without disruption.",
    publishedAt: "2026-05-12",
    category: "Build",
    readMinutes: 7,
    serviceLinks: [
      { categorySlug: "build", serviceSlug: "excel-automation-smart-reporting", label: "Excel Automation" },
      { categorySlug: "build", serviceSlug: "dashboard-development", label: "Dashboard Development" },
    ],
    sections: [
      {
        heading: "You are maintaining spreadsheets like software",
        body: "When Excel files have version control problems, broken formulas, and a dedicated owner who spends days each month updating them, you are running undeclared software. That is the tipping point for automation.",
      },
      {
        heading: "Multiple people need the same data live",
        body: "If leadership, ops, and finance all maintain separate copies of the same report, a single dashboard with role-based views eliminates reconciliation work and errors.",
      },
      {
        heading: "Migrate incrementally",
        body: "Do not big-bang replace Excel. Automate data ingestion first, replicate existing views in a dashboard, validate numbers side-by-side for a month, then retire the spreadsheet.",
      },
      {
        heading: "Keep Excel as an export, not the source of truth",
        body: "Teams still want CSV exports for ad-hoc analysis. Build automated pipelines as the source of truth and let Excel be an output format, not the system.",
      },
    ],
  },
  {
    slug: "design-systems-when-you-need-one",
    title: "Design Systems 101: When Your Product Team Needs One",
    description:
      "How to know when a design system will speed up your team, and when it is premature.",
    publishedAt: "2026-05-14",
    category: "Design",
    readMinutes: 6,
    serviceLinks: [
      { categorySlug: "design", serviceSlug: "design-systems", label: "Design Systems" },
      { categorySlug: "design", serviceSlug: "product-design", label: "Product Design" },
    ],
    sections: [
      {
        heading: "You have three or more designers or engineers shipping UI",
        body: "Once multiple people touch the interface, inconsistent buttons, spacing, and patterns create user confusion and duplicated engineering effort. That is when a minimal design system pays back.",
      },
      {
        heading: "Start with tokens and primitives, not a full library",
        body: "Color, typography, spacing tokens plus 10-15 core components cover 80% of needs. Expand based on actual reuse, not hypothetical future features.",
      },
      {
        heading: "Design systems are products, not projects",
        body: "They need an owner, versioning, and a feedback loop from engineering. A one-time Figma dump without maintenance creates debt within months.",
      },
      {
        heading: "Measure velocity, not component count",
        body: "Success means faster feature shipping and fewer design QA cycles, not component count in the library.",
      },
    ],
  },
  {
    slug: "mvp-vs-full-product-framework",
    title: "MVP vs Full Product: A Founder's Decision Framework",
    description:
      "How to scope your first release without overbuilding or under-shipping.",
    publishedAt: "2026-05-16",
    category: "Product",
    readMinutes: 9,
    serviceLinks: [
      { categorySlug: "startup-tech-partner", serviceSlug: "startup-mvp", label: "Startup MVP" },
      { categorySlug: "build", serviceSlug: "mvp-development", label: "MVP Development" },
      { categorySlug: "startup-tech-partner", serviceSlug: "product-strategy", label: "Product Strategy" },
    ],
    sections: [
      {
        heading: "Define the hypothesis, not the feature list",
        body: "An MVP validates one business hypothesis. \"users will pay for X\" or \"workflow Y saves 5 hours/week.\" Everything in v1 should serve that hypothesis. Everything else is v2.",
      },
      {
        heading: "Cut scope by risk, not by ease",
        body: "Remove features that are easy to build but do not test your hypothesis. Keep the hard parts that validate whether the core value proposition works.",
      },
      {
        heading: "Ship with instrumentation from day one",
        body: "If you cannot measure activation and retention on v1, you will not know whether to pivot or persevere. Analytics is not a v2 feature.",
      },
      {
        heading: "Plan the path from MVP to product",
        body: "Architecture should not require a rewrite at 100 users, but it also should not optimize for 100,000. Make explicit tradeoffs and document what you deferred.",
      },
    ],
  },
  {
    slug: "ai-content-generation-marketing",
    title: "AI Content Generation for Marketing Teams: Quality Controls That Work",
    description:
      "How to build AI content pipelines that protect brand voice and accuracy.",
    publishedAt: "2026-05-20",
    category: "AI",
    readMinutes: 8,
    serviceLinks: [
      { categorySlug: "ai-automation", serviceSlug: "ai-content-generation", label: "AI Content Generation" },
      { categorySlug: "ai-automation", serviceSlug: "ai-workflow-automation", label: "AI Workflow Automation" },
    ],
    sections: [
      {
        heading: "Templates beat open-ended prompts",
        body: "Marketing content needs consistent structure: blog outlines, ad variants, email sequences. Define templates with locked sections and variable slots rather than asking the model to invent format each time.",
      },
      {
        heading: "Build a brand and fact-check layer",
        body: "Automated checks for banned phrases, tone drift, and unsupported claims catch most quality issues before human review. Human editors then focus on strategy, not grammar.",
      },
      {
        heading: "Human review stays in the loop for external content",
        body: "Internal drafts can be more automated. Customer-facing content: ads, landing pages, product copy. Those need a human approval step with one owner.",
      },
      {
        heading: "Track quality metrics over time",
        body: "Monitor edit distance, time-to-publish, and performance metrics (CTR, conversion) by content type. Double down on formats where AI-assisted content performs equal or better.",
      },
    ],
  },
  {
    slug: "ux-research-early-stage-startups",
    title: "UX Research Methods for Early-Stage Startups",
    description:
      "Lightweight research techniques that inform product decisions without slowing shipping.",
    publishedAt: "2026-05-24",
    category: "Design",
    readMinutes: 7,
    serviceLinks: [
      { categorySlug: "design", serviceSlug: "ux-research", label: "UX Research" },
      { categorySlug: "design", serviceSlug: "wireframing", label: "Wireframing" },
    ],
    sections: [
      {
        heading: "Five user interviews beat fifty survey responses",
        body: "At early stage, depth beats breadth. Five 30-minute interviews reveal why users struggle. Surveys only tell you what you thought to ask.",
      },
      {
        heading: "Test prototypes, not opinions",
        body: "Show clickable prototypes or even paper sketches. Observe where users hesitate, misclick, or ask questions. That is faster and cheaper than debating internally.",
      },
      {
        heading: "Research should answer one decision",
        body: "Do not run research to \"learn about users.\" Frame it as: \"Should we use wizard or single-page onboarding?\" Research with a decision deadline gets used.",
      },
      {
        heading: "Bake research into sprint cadence",
        body: "One research session per sprint, even 3 users, compounds into a research habit without a dedicated researcher hire.",
      },
    ],
  },
  {
    slug: "saas-branding-logo-vs-identity",
    title: "Branding for SaaS: Logo vs Full Visual Identity System",
    description:
      "When a logo refresh is enough, and when you need a complete brand system.",
    publishedAt: "2026-05-26",
    category: "Design",
    readMinutes: 6,
    serviceLinks: [
      { categorySlug: "design", serviceSlug: "branding-visual-identity", label: "Branding & Visual Identity" },
      { categorySlug: "design", serviceSlug: "landing-page-design", label: "Landing Page Design" },
    ],
    sections: [
      {
        heading: "A logo alone does not fix positioning",
        body: "If the product value prop is unclear, a new logo will not improve conversion. Fix messaging and UX first; brand identity amplifies clarity. It does not create it.",
      },
      {
        heading: "Full identity systems matter when you scale touchpoints",
        body: "Multiple landing pages, sales decks, product UI, and social channels need consistent typography, color, illustration style, and voice. That is when a system beats a logo file.",
      },
      {
        heading: "Build for digital-first applications",
        body: "SaaS brands live in product UI and marketing sites more than print. Prioritize favicon clarity, dark mode variants, and component-friendly color tokens.",
      },
      {
        heading: "Document usage rules your team will follow",
        body: "A brand guide nobody reads is wasted spend. Keep it short, with do/don't examples for the three most common use cases.",
      },
    ],
  },
  {
    slug: "end-to-end-product-development-guide",
    title: "End-to-End Product Development: Design + Engineering in One Team",
    description:
      "Why one team in one repo beats design-to-dev handoffs for zero-to-one and relaunch work.",
    publishedAt: "2026-05-29",
    category: "Product",
    readMinutes: 8,
    serviceLinks: [
      { categorySlug: "startup-tech-partner", serviceSlug: "end-to-end-product-design-development", label: "End-to-End Product Design & Development" },
      { categorySlug: "design", serviceSlug: "product-design", label: "Product Design" },
      { categorySlug: "build", serviceSlug: "full-stack-development", label: "Full Stack Development" },
    ],
    sections: [
      {
        heading: "Handoffs are where quality dies",
        body: "Design-to-engineering handoffs lose context: edge cases, interaction intent, responsive behavior. One pod shipping in one repo eliminates translation loss.",
      },
      {
        heading: "Designers who code make better tradeoffs",
        body: "When designers understand component constraints, they design what can ship this sprint, not what requires a custom build every time.",
      },
      {
        heading: "Weekly demos keep stakeholders aligned",
        body: "End-to-end teams demo working software weekly, not slide decks. Feedback on staging reduces rework because stakeholders react to real flows.",
      },
      {
        heading: "Best for zero-to-one and major relaunches",
        body: "Teams building v1 products or reimagining core flows benefit most. Maintenance-mode products may need a different engagement shape.",
      },
    ],
  },
];

export const BLOG_POSTS = RAW_BLOG_POSTS.map(lintBlogPost);

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}

export function getBlogPostUrl(slug) {
  return `${SITE_URL}/blog/${slug}`;
}
