import { SITE_URL } from "@/config/site";

export const BLOG_POSTS = [
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
        body: "A proper website UX audit goes beyond \"the button should be bigger.\" It maps your highest-intent user journeys, identifies friction in navigation and conversion paths, reviews mobile experience, and ties findings to metrics you already track — signups, demo requests, checkout completion, or activation rates.",
      },
      {
        heading: "Typical pricing ranges",
        body: "For a focused audit of a marketing site or early-stage SaaS product, agencies typically charge low four figures to mid four figures USD. Broader product experience audits covering onboarding, core workflows, and analytics instrumentation sit higher. The biggest cost driver is page count, analytics depth, and whether you need competitive benchmarking.",
      },
      {
        heading: "When an audit pays for itself",
        body: "If your site already drives meaningful traffic but conversion has plateaued, a UX audit is often the highest-ROI design spend. Fixing one broken funnel step — unclear pricing, weak social proof, confusing signup — can recover more pipeline than a full rebrand.",
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
        body: "Most business knowledge base projects need accurate answers grounded in current documents — policies, product docs, support macros, sales decks. That is a retrieval problem first, not a model training problem.",
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
        body: "Support chatbots fail when teams try to automate everything on day one. Start with high-volume, low-risk intents — order status, billing FAQs, account setup — and measure deflection before expanding scope.",
      },
      {
        heading: "Connect to your real knowledge sources",
        body: "Ground responses in help center articles, internal macros, and product docs via retrieval. The bot should cite sources and escalate when confidence is low.",
      },
      {
        heading: "Design escalation paths humans trust",
        body: "Users tolerate AI support when handoff to a human is seamless. Integrate with your CRM or helpdesk, pass conversation context, and set clear expectations in the UI.",
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
      "Common landing page mistakes that block SaaS signups and demo requests — and how to fix them.",
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
        body: "Logos alone are not enough. Use specific outcomes — \"Reduced onboarding time by 40%\" — from customers your ICP recognizes.",
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
];

export function getBlogPost(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) ?? null;
}

export function getBlogPostUrl(slug) {
  return `${SITE_URL}/blog/${slug}`;
}
