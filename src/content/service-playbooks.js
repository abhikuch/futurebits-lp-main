/* Service playbooks for service detail pages. */

export const SERVICE_PLAYBOOKS = {
  "website-ux-audit": {
    whoFor: [
      "Growth leads responsible for conversion rate and pipeline efficiency.",
      "Product owners inheriting a stale marketing site with unclear impact.",
      "Founders preparing for a relaunch or funding narrative refresh.",
      "Marketing teams that need a prioritized UX backlog, not opinions.",
    ],
    problems: [
      "High intent traffic with weak conversion and unclear drop-off points.",
      "User paths that feel inconsistent across key sections and CTAs.",
      "Site speed, accessibility, or trust gaps that reduce qualified leads.",
      "No single source of truth for what to fix first and why.",
      "Past redesigns that failed to move revenue metrics.",
    ],
    deliverables: [
      "Heuristic and journey audit across critical pages and flows.",
      "Analytics and funnel review tied to conversion moments.",
      "Prioritized UX backlog with expected impact and effort ranges.",
      "Annotated screenshots and redline guidance for key pages.",
      "Quick-win fixes you can ship in a sprint.",
      "Strategic roadmap for redesign or experimentation.",
    ],
    process: [
      "Discovery: align on goals, traffic sources, and conversion targets.",
      "Scope: map critical journeys, analytics views, and success metrics.",
      "Build: audit, document findings, and quantify impact opportunities.",
      "Launch: deliver the fix plan, handoff, and testing recommendations.",
    ],
    differentiators: [
      "Outcome-first audit tied to revenue actions, not style notes.",
      "Senior pod delivery with clear impact and execution plan.",
      "Fast turnaround with zero fluff and direct prioritization.",
    ],
    faqs: [
      {
        q: "How long does a website UX audit take?",
        a: "Most audits ship in 2-3 weeks depending on page count and analytics access.",
      },
      {
        q: "Do you need access to analytics or heatmaps?",
        a: "Yes. GA4, PostHog, or Hotjar access lets us quantify issues and rank impact.",
      },
      {
        q: "Will you redesign the site as part of the audit?",
        a: "No. The audit produces a prioritized fix plan that your team can build or we can execute.",
      },
      {
        q: "What pages are covered in the audit?",
        a: "We focus on high-intent paths: homepage, product pages, pricing, and key conversion flows.",
      },
      {
        q: "Can you help validate the fixes?",
        a: "Yes. We can support A/B testing, QA, and post-launch measurement.",
      },
    ],
  },
  "ui-ux-design": {
    whoFor: [
      "Product teams preparing for a major UX refresh.",
      "Founders needing a senior design pod to ship fast.",
      "Growth teams that need conversion-first interfaces.",
      "Engineering leads who want design that builds cleanly.",
    ],
    problems: [
      "Inconsistent UI patterns across core product flows.",
      "Feature velocity blocked by unclear UX direction.",
      "User drop-off caused by friction in key journeys.",
      "Design assets that look good but fail in build.",
      "Stakeholder feedback cycles dragging launch dates.",
    ],
    deliverables: [
      "User flow maps and prioritization for core journeys.",
      "High-fidelity UI design aligned to product goals.",
      "Responsive layouts with interaction states and edge cases.",
      "Component-level specs for engineering handoff.",
      "Design QA pass to ensure production matches intent.",
      "Design files ready for iterative scaling.",
    ],
    process: [
      "Discovery: align on goals, users, and success metrics.",
      "Scope: define key flows, screens, and build constraints.",
      "Build: design iterations, interaction states, and handoff assets.",
      "Launch: support build, QA, and post-launch improvements.",
    ],
    differentiators: [
      "Senior designers who ship production-ready systems.",
      "Design that respects engineering constraints and speed.",
      "Direct, outcome-driven feedback loops with stakeholders.",
    ],
    faqs: [
      {
        q: "Do you work in Figma?",
        a: "Yes. We deliver all design assets in Figma with organized components and specs.",
      },
      {
        q: "Can you work with our existing design system?",
        a: "Absolutely. We extend existing systems or evolve them where needed.",
      },
      {
        q: "How do you handle UX research input?",
        a: "We synthesize available research and run focused validation where needed.",
      },
      {
        q: "What does a typical UI/UX design engagement include?",
        a: "Flows, high-fidelity screens, component specs, and build-ready handoff.",
      },
      {
        q: "Can you stay on for design QA during development?",
        a: "Yes. We support engineering to keep quality tight through launch.",
      },
    ],
  },
  "landing-page-design": {
    whoFor: [
      "Growth teams launching new products or campaigns.",
      "Founders needing a high-conversion page fast.",
      "Marketing teams preparing for paid acquisition.",
      "Sales-led teams that need a clear story for buyers.",
    ],
    problems: [
      "Traffic is high but conversions are flat.",
      "Messaging is unclear or generic for the ICP.",
      "Pages load slowly or feel untrustworthy.",
      "CTA focus is diluted across too many actions.",
      "Design looks good but lacks conversion psychology.",
    ],
    deliverables: [
      "Conversion-first messaging hierarchy and layout.",
      "High-fidelity landing page design with responsive states.",
      "Section-by-section copy guidance and CTA logic.",
      "Trust stack: proof points, logos, and social validation.",
      "Build-ready specs and optimization notes.",
      "Post-launch iteration plan based on data.",
    ],
    process: [
      "Discovery: align on audience, offer, and conversion goals.",
      "Scope: map section flow, proof requirements, and CTA strategy.",
      "Build: craft design, copy structure, and interaction states.",
      "Launch: support build, QA, and iterative optimization.",
    ],
    differentiators: [
      "Senior pod that blends design, UX, and conversion strategy.",
      "Fast delivery without sacrificing research-backed structure.",
      "Clear handoff that engineers can build in one sprint.",
    ],
    faqs: [
      {
        q: "Do you write the landing page copy?",
        a: "We provide copy structure and messaging guidance; full copywriting can be added.",
      },
      {
        q: "How fast can a landing page be delivered?",
        a: "Typically 1-2 weeks depending on complexity and approvals.",
      },
      {
        q: "Can you design for multiple variants?",
        a: "Yes. We can design A/B variants and test-ready layouts.",
      },
      {
        q: "What tech stack do you design for?",
        a: "We design for modern web stacks and provide specs for any frontend team.",
      },
      {
        q: "Can you improve an existing page instead of designing new?",
        a: "Yes. We can redesign or optimize within the current layout constraints.",
      },
    ],
  },
  "product-strategy": {
    whoFor: [
      "Founders aligning roadmap with revenue outcomes.",
      "Product leaders under pressure to ship the right bet.",
      "Teams facing conflicting stakeholder priorities.",
      "Scale-ups preparing for a new market entry.",
    ],
    problems: [
      "Roadmaps packed with features that lack clear ROI.",
      "Unclear positioning or differentiation in a crowded market.",
      "Stakeholders disagree on the next product direction.",
      "Customer feedback exists but is not synthesized into action.",
      "Teams shipping fast without clear success metrics.",
    ],
    deliverables: [
      "Product strategy brief with target outcomes and bets.",
      "ICP and positioning alignment with value narrative.",
      "Prioritized roadmap with decision criteria and trade-offs.",
      "Success metrics and measurement framework.",
      "Risk analysis and mitigation plan for top bets.",
      "Decision-ready documentation for leadership alignment.",
    ],
    process: [
      "Discovery: assess goals, customers, and existing product signals.",
      "Scope: define strategic questions, constraints, and success metrics.",
      "Build: synthesize insights into a prioritized strategy.",
      "Launch: align stakeholders and translate into roadmap execution.",
    ],
    differentiators: [
      "Senior pod that balances product, design, and engineering realities.",
      "Bias toward measurable outcomes and execution clarity.",
      "Strategy that feeds directly into build-ready roadmaps.",
    ],
    faqs: [
      {
        q: "How long does a product strategy engagement take?",
        a: "Most projects run 3-5 weeks depending on research depth and alignment cycles.",
      },
      {
        q: "Do you run customer interviews?",
        a: "We can. We typically synthesize existing data and add targeted interviews when needed.",
      },
      {
        q: "Will you deliver a roadmap?",
        a: "Yes. A prioritized roadmap and decision framework are standard outputs.",
      },
      {
        q: "Can you work with our leadership team?",
        a: "Yes. We run structured alignment sessions to lock in direction.",
      },
      {
        q: "Is this only for early-stage startups?",
        a: "No. We work with both early-stage and growth-stage teams.",
      },
    ],
  },
  "end-to-end-product-design-development": {
    whoFor: [
      "Founders who need full product delivery without hiring.",
      "Teams spinning up a new product or feature line.",
      "Organizations that need a senior pod to ship faster.",
      "Product leaders who want one accountable delivery partner.",
    ],
    problems: [
      "Hand-offs between design and engineering slow delivery.",
      "No single owner accountable for outcomes end-to-end.",
      "Internal teams are overloaded or missing key skills.",
      "Unclear scope and shifting requirements derail timelines.",
      "Quality slips when speed becomes the only priority.",
    ],
    deliverables: [
      "Product strategy and roadmap alignment.",
      "UX/UI design with build-ready specs.",
      "Production-ready frontend and backend implementation.",
      "QA, testing, and launch readiness support.",
      "Post-launch iteration and performance tuning.",
      "Clear documentation and ownership handoff.",
    ],
    process: [
      "Discovery: align on vision, users, and delivery outcomes.",
      "Scope: define MVP, milestones, and success metrics.",
      "Build: design and engineering in one integrated pod.",
      "Launch: QA, deploy, and handoff with measurable results.",
    ],
    differentiators: [
      "Single senior pod accountable for the full build.",
      "Fast delivery without fragmented vendor management.",
      "Quality-focused execution with clear business outcomes.",
    ],
    faqs: [
      {
        q: "Do you handle both design and engineering?",
        a: "Yes. We deliver full-stack product builds with a unified pod.",
      },
      {
        q: "Can you work with our internal team?",
        a: "Yes. We can integrate with your team or operate independently.",
      },
      {
        q: "How do you manage scope creep?",
        a: "We lock scope in discovery, then manage changes through clear trade-offs.",
      },
      {
        q: "What tech stacks do you build in?",
        a: "We use modern web stacks and align with your infrastructure preferences.",
      },
      {
        q: "Do you provide ongoing support after launch?",
        a: "Yes. We offer post-launch optimization and roadmap iteration.",
      },
    ],
  },
  "ai-product-development": {
    whoFor: [
      "Founders building an AI-first product MVP.",
      "Teams adding AI features to a core workflow.",
      "Product leaders needing LLM integration done right.",
      "Enterprises piloting AI use cases with real ROI.",
    ],
    problems: [
      "AI prototypes that fail to move real business metrics.",
      "Unclear data strategy for reliable AI outputs.",
      "LLM costs spiraling without guardrails.",
      "Security and compliance risks around AI usage.",
      "Engineering teams unsure how to productionize AI features.",
    ],
    deliverables: [
      "AI product strategy and success metrics.",
      "LLM workflow design with prompt and tool architecture.",
      "Data pipelines and evaluation harnesses.",
      "Production-grade AI feature implementation.",
      "Cost, safety, and reliability guardrails.",
      "Launch-ready AI UX and operational playbooks.",
    ],
    process: [
      "Discovery: define AI use case, data constraints, and ROI.",
      "Scope: choose model stack, eval plan, and rollout phases.",
      "Build: implement AI workflows, UI, and observability.",
      "Launch: ship to production with monitoring and iteration loops.",
    ],
    differentiators: [
      "Senior pod with AI + product + engineering alignment.",
      "Focus on measurable outcomes, not AI demos.",
      "Production-grade guardrails for reliability and cost.",
    ],
    faqs: [
      {
        q: "Can you build both the AI model and the product?",
        a: "We focus on product delivery using proven LLM stacks; custom model work is scoped separately.",
      },
      {
        q: "How do you handle AI safety and compliance?",
        a: "We implement guardrails, monitoring, and data policies aligned to your requirements.",
      },
      {
        q: "Do you optimize for cost?",
        a: "Yes. We design for efficient model usage and measurable ROI.",
      },
      {
        q: "How do you evaluate AI quality?",
        a: "We build evaluation harnesses tied to user outcomes and error budgets.",
      },
      {
        q: "Can you integrate with our existing product?",
        a: "Yes. We integrate AI into existing workflows and infrastructure.",
      },
    ],
  },
  "chatbot-development": {
    whoFor: [
      "Support leaders reducing ticket volume with automation.",
      "Product teams adding in-app help for retention.",
      "Sales teams that need instant qualification and routing.",
      "Founders building a chatbot-first experience.",
    ],
    problems: [
      "Support teams overwhelmed by repeat questions.",
      "Chatbots that feel generic and fail to resolve issues.",
      "Poor handoff from bot to human agents.",
      "No visibility into bot performance or deflection rate.",
      "Knowledge sources are scattered and outdated.",
    ],
    deliverables: [
      "Chatbot strategy and success metrics.",
      "Knowledge base integration and content mapping.",
      "Conversation flows for top intents.",
      "LLM-driven bot implementation with guardrails.",
      "Human handoff logic and escalation paths.",
      "Analytics and performance dashboards.",
    ],
    process: [
      "Discovery: define bot goals, intents, and success metrics.",
      "Scope: map knowledge sources and escalation rules.",
      "Build: design flows, integrate data, and implement bot.",
      "Launch: deploy, monitor, and optimize responses.",
    ],
    differentiators: [
      "Outcome-first bots focused on resolution, not novelty.",
      "Senior pod experience across UX, AI, and engineering.",
      "Clear measurement of deflection and customer impact.",
    ],
    faqs: [
      {
        q: "Can the chatbot integrate with our support tools?",
        a: "Yes. We integrate with common CRMs, ticketing, and chat platforms.",
      },
      {
        q: "How do you keep answers accurate?",
        a: "We use curated sources, retrieval guardrails, and continuous evaluation.",
      },
      {
        q: "Do you support human handoff?",
        a: "Yes. We design clear escalation and routing workflows.",
      },
      {
        q: "How long does chatbot development take?",
        a: "Typical builds take 3-6 weeks based on integrations and complexity.",
      },
      {
        q: "Can you train the bot on our internal docs?",
        a: "Yes. We connect to docs, FAQs, and knowledge bases securely.",
      },
    ],
  },
  "custom-gpt-knowledge-base": {
    whoFor: [
      "Support teams needing faster, consistent answers.",
      "Ops teams that need internal policy and process access.",
      "Product teams scaling documentation without chaos.",
      "Sales teams that need instant product and pricing clarity.",
    ],
    problems: [
      "Knowledge is scattered across tools and out of date.",
      "Employees waste time searching for the right answer.",
      "Customer responses are inconsistent across teams.",
      "No governance or access control for sensitive docs.",
      "GPT outputs are inaccurate or hallucinated.",
    ],
    deliverables: [
      "Knowledge base architecture and content mapping.",
      "Document ingestion and retrieval pipeline.",
      "Custom GPT setup with guardrails and evaluation.",
      "Role-based access and secure data handling.",
      "Answer quality monitoring and feedback loops.",
      "Training for internal teams on usage and updates.",
    ],
    process: [
      "Discovery: identify knowledge sources and access requirements.",
      "Scope: define retrieval logic, permissions, and evaluation.",
      "Build: implement ingestion, GPT layer, and governance.",
      "Launch: onboard teams and optimize answer quality.",
    ],
    differentiators: [
      "Senior pod that blends AI reliability with governance.",
      "Focus on accurate answers and operational adoption.",
      "Scalable knowledge architecture for long-term use.",
    ],
    faqs: [
      {
        q: "Can you use our internal docs securely?",
        a: "Yes. We implement access controls and secure retrieval pipelines.",
      },
      {
        q: "How do you prevent hallucinations?",
        a: "We enforce grounded retrieval, guardrails, and evaluation checks.",
      },
      {
        q: "Which GPT models do you support?",
        a: "We work with leading LLM providers and choose based on cost and performance.",
      },
      {
        q: "Do we need to restructure our docs?",
        a: "Not always. We can map existing content and recommend improvements.",
      },
      {
        q: "Can this integrate with our internal tools?",
        a: "Yes. We integrate with Slack, Notion, Confluence, and other systems.",
      },
    ],
  },
  "ai-agents-development": {
    whoFor: [
      "Operations teams automating workflows across tools.",
      "Product teams building AI-powered task automation.",
      "Founders creating agent-led products.",
      "Enterprises testing agent workflows for efficiency gains.",
    ],
    problems: [
      "Manual workflows slow down critical operations.",
      "AI agents fail without clear tool and data access.",
      "Unclear boundaries cause agents to take risky actions.",
      "No monitoring or control over agent behavior.",
      "Agent prototypes do not scale to production needs.",
    ],
    deliverables: [
      "Agent strategy and use-case definition.",
      "Tooling and API integrations for agent actions.",
      "Workflow orchestration and guardrails.",
      "Agent UX for approvals and oversight.",
      "Reliability, logging, and evaluation framework.",
      "Production deployment and iteration plan.",
    ],
    process: [
      "Discovery: identify workflows and automation goals.",
      "Scope: define agent boundaries, tools, and data access.",
      "Build: implement agent logic, UX, and monitoring.",
      "Launch: deploy with guardrails and iterate on outcomes.",
    ],
    differentiators: [
      "Agents built for real workflows, not demos.",
      "Senior pod with strong governance and safety focus.",
      "Clear metrics for automation impact and reliability.",
    ],
    faqs: [
      {
        q: "What types of agents can you build?",
        a: "We build workflow, support, and operations agents tailored to your use cases.",
      },
      {
        q: "How do you control agent actions?",
        a: "We use approvals, guardrails, and audit logs to enforce control.",
      },
      {
        q: "Can agents integrate with our existing tools?",
        a: "Yes. We integrate with CRMs, databases, and internal APIs.",
      },
      {
        q: "How do you measure agent performance?",
        a: "We track task success, escalation rate, and time saved.",
      },
      {
        q: "Can you deploy agents in production?",
        a: "Yes. We build production-grade systems with monitoring and rollback.",
      },
    ],
  },
  "ai-content-generation": {
    whoFor: [
      "Marketing teams scaling content output without quality loss.",
      "SEO teams building consistent content pipelines.",
      "Product teams generating support or knowledge content.",
      "Agencies delivering content at scale for clients.",
    ],
    problems: [
      "Manual content production is too slow and expensive.",
      "AI content lacks brand voice and accuracy.",
      "No workflow for review, approval, and publishing.",
      "Inconsistent SEO or keyword targeting across content.",
      "Teams do not trust AI output quality.",
    ],
    deliverables: [
      "Content generation strategy and prompt system.",
      "Brand voice and style guide enforcement.",
      "Workflow automation for drafting, review, and publishing.",
      "Quality evaluation and plagiarism safeguards.",
      "SEO metadata and keyword integration.",
      "Analytics tracking for content performance.",
    ],
    process: [
      "Discovery: define content goals, audiences, and quality bar.",
      "Scope: map content types, approval steps, and tooling.",
      "Build: implement generation workflows and guardrails.",
      "Launch: train team, monitor quality, and iterate.",
    ],
    differentiators: [
      "Content systems built for brand fidelity and accuracy.",
      "Senior pod focused on quality and governance.",
      "Automation that integrates with your publishing stack.",
    ],
    faqs: [
      {
        q: "Can you match our brand voice?",
        a: "Yes. We build a structured voice system with examples and guardrails.",
      },
      {
        q: "Do you handle SEO optimization?",
        a: "Yes. We embed keyword targeting and metadata into the workflow.",
      },
      {
        q: "What CMS platforms do you support?",
        a: "We integrate with most modern CMS platforms and publishing APIs.",
      },
      {
        q: "How do you ensure content accuracy?",
        a: "We implement grounding, fact checks, and human review steps.",
      },
      {
        q: "Can you generate different content formats?",
        a: "Yes. We support blogs, product docs, FAQs, and more.",
      },
    ],
  },
  "ai-video-generation": {
    whoFor: [
      "Marketing teams creating video content at scale.",
      "Product teams building AI-driven video features.",
      "Agencies delivering video assets for multiple clients.",
      "Founders testing video-heavy marketing strategies.",
    ],
    problems: [
      "Video production is too slow and costly.",
      "AI video tools lack workflow and quality control.",
      "No pipeline for approvals, edits, and publishing.",
      "Brand consistency is hard to maintain across videos.",
      "Teams cannot measure video impact effectively.",
    ],
    deliverables: [
      "AI video generation workflow design.",
      "Prompt templates and asset management system.",
      "Brand-safe style and visual guidelines.",
      "Editing, approval, and export pipeline.",
      "Performance tracking and iteration plan.",
      "Integration with publishing and marketing tools.",
    ],
    process: [
      "Discovery: define video goals, audiences, and quality targets.",
      "Scope: map content types, tools, and approval stages.",
      "Build: implement generation pipeline and guardrails.",
      "Launch: deliver training, monitor quality, and optimize.",
    ],
    differentiators: [
      "Production-ready video pipelines, not tool demos.",
      "Senior pod focused on quality and brand consistency.",
      "Systems built for speed without sacrificing control.",
    ],
    faqs: [
      {
        q: "Which AI video tools do you support?",
        a: "We select tools based on quality, cost, and your workflow needs.",
      },
      {
        q: "Can you integrate with our existing video stack?",
        a: "Yes. We can integrate with editing, storage, and publishing tools.",
      },
      {
        q: "How do you ensure brand consistency?",
        a: "We build template systems, style guides, and review checkpoints.",
      },
      {
        q: "Do you handle video editing workflows?",
        a: "Yes. We implement edit-ready exports and review loops.",
      },
      {
        q: "Can you track video performance?",
        a: "Yes. We connect analytics to measure engagement and conversion impact.",
      },
    ],
  },
  "data-visualization-design": {
    whoFor: [
      "Product teams building dashboards for customers.",
      "Data teams presenting insights to executives.",
      "Founders needing investor-ready visuals.",
      "Analytics teams modernizing reporting UI.",
    ],
    problems: [
      "Dashboards are cluttered and hard to interpret.",
      "Key metrics get lost in low-quality visuals.",
      "Data presentations fail to drive decisions.",
      "Designs do not align with engineering constraints.",
      "No consistent visual language for analytics.",
    ],
    deliverables: [
      "Information architecture for dashboards and reports.",
      "Data visualization designs with clear hierarchy.",
      "Component specs for charts, tables, and filters.",
      "Interactive states for drill-downs and alerts.",
      "Design QA and build guidance.",
      "Style guide for data visual consistency.",
    ],
    process: [
      "Discovery: align on insights, users, and decisions.",
      "Scope: define metrics, data sources, and views.",
      "Build: design dashboards, charts, and interaction patterns.",
      "Launch: QA implementation and iterate on usability.",
    ],
    differentiators: [
      "Visualizations designed for decisions, not decoration.",
      "Senior pod that bridges data, UX, and engineering.",
      "Systems that scale across dashboards and teams.",
    ],
    faqs: [
      {
        q: "Can you work with existing data models?",
        a: "Yes. We design around your current metrics and data constraints.",
      },
      {
        q: "Do you provide chart component specs?",
        a: "Yes. We deliver build-ready component specifications.",
      },
      {
        q: "Can you redesign a legacy dashboard?",
        a: "Yes. We modernize dashboards while preserving essential metrics.",
      },
      {
        q: "Do you handle data storytelling?",
        a: "Yes. We craft narratives for executive and investor audiences.",
      },
      {
        q: "How do you handle accessibility?",
        a: "We design for clarity, contrast, and accessible data interpretation.",
      },
    ],
  },
  "excel-automation-smart-reporting": {
    whoFor: [
      "Ops teams trapped in manual Excel workflows.",
      "Finance teams needing reliable reporting automation.",
      "Analysts who spend more time cleaning than analyzing.",
      "Leaders needing dependable weekly KPI reporting.",
    ],
    problems: [
      "Manual Excel work creates errors and delays.",
      "Reports require constant copy-paste across files.",
      "No single source of truth for key metrics.",
      "Data updates break fragile spreadsheets.",
      "Teams waste hours on repetitive reporting.",
    ],
    deliverables: [
      "Automated Excel models with clean input layers.",
      "Data ingestion and refresh workflows.",
      "Smart reporting dashboards and outputs.",
      "Quality checks and error handling.",
      "Documentation for ongoing maintenance.",
      "Handoff and training for team adoption.",
    ],
    process: [
      "Discovery: review current spreadsheets and reporting needs.",
      "Scope: define automation targets and data inputs.",
      "Build: implement automation, dashboards, and validation.",
      "Launch: train team, finalize documentation, and optimize.",
    ],
    differentiators: [
      "Automation focused on reliability and time saved.",
      "Senior pod that understands finance and ops realities.",
      "Clean documentation for long-term ownership.",
    ],
    faqs: [
      {
        q: "Do you work directly in Excel?",
        a: "Yes. We build Excel automations and can integrate with other data sources.",
      },
      {
        q: "Can you connect Excel to APIs or databases?",
        a: "Yes. We connect Excel to live data sources securely.",
      },
      {
        q: "Will this reduce manual reporting time?",
        a: "Yes. The goal is to eliminate repetitive manual steps.",
      },
      {
        q: "Do you document the spreadsheets?",
        a: "Yes. We provide clear documentation and usage guidance.",
      },
      {
        q: "Can you support ongoing maintenance?",
        a: "Yes. We can provide ongoing support or train your team.",
      },
    ],
  },
  "design-systems": {
    whoFor: [
      "Product teams scaling across multiple squads.",
      "Design leads who need consistency across products.",
      "Engineering teams tired of reinventing UI patterns.",
      "Organizations launching new product lines.",
    ],
    problems: [
      "UI inconsistency across product surfaces.",
      "Slow delivery due to repeated design debates.",
      "Engineering builds without reusable components.",
      "Design debt piling up with each release.",
      "No governance model for design evolution.",
    ],
    deliverables: [
      "Design system foundations: tokens, typography, and color.",
      "Component library with documented usage patterns.",
      "Design-to-code handoff specifications.",
      "Governance model for updates and adoption.",
      "Migration plan for existing product UI.",
      "Documentation for teams and onboarding.",
    ],
    process: [
      "Discovery: audit current UI and alignment needs.",
      "Scope: define system foundations and component priorities.",
      "Build: create components, documentation, and governance.",
      "Launch: roll out adoption plan and support teams.",
    ],
    differentiators: [
      "Systems designed for both design and engineering adoption.",
      "Senior pod that balances speed with consistency.",
      "Clear governance so the system stays healthy.",
    ],
    faqs: [
      {
        q: "Can you build the system in Figma and code?",
        a: "Yes. We deliver both design assets and component specs for engineering.",
      },
      {
        q: "Do you support existing design systems?",
        a: "Yes. We can extend or refactor existing systems.",
      },
      {
        q: "How long does a design system take to build?",
        a: "Typical timelines range from 4-8 weeks depending on scope.",
      },
      {
        q: "How do you handle system adoption?",
        a: "We provide rollout plans, documentation, and training.",
      },
      {
        q: "Can you help migrate legacy UI?",
        a: "Yes. We plan migrations and prioritize high-impact surfaces.",
      },
    ],
  },
  "ux-research": {
    whoFor: [
      "Product leaders needing evidence for roadmap decisions.",
      "Teams launching new features without user clarity.",
      "Designers validating risky UX changes.",
      "Founders needing customer insight fast.",
    ],
    problems: [
      "Product decisions based on internal assumptions.",
      "Limited visibility into why users churn or drop off.",
      "Conflicting stakeholder opinions with no research signal.",
      "Insights buried in support tickets and feedback.",
      "Research that does not translate into action.",
    ],
    deliverables: [
      "Research plan aligned to product decisions.",
      "User interviews and synthesis reports.",
      "Journey maps and pain point analysis.",
      "Actionable insights tied to roadmap impact.",
      "Persona updates or JTBD summaries.",
      "Executive-ready findings deck.",
    ],
    process: [
      "Discovery: define research goals and decisions to support.",
      "Scope: identify participants, methods, and timeline.",
      "Build: run research, synthesize insights, and map impact.",
      "Launch: deliver findings with clear next steps.",
    ],
    differentiators: [
      "Research tied to business decisions and ROI.",
      "Senior pod that delivers insight and action together.",
      "Fast cycles without sacrificing depth.",
    ],
    faqs: [
      {
        q: "How many interviews do you run?",
        a: "Typically 6-12 depending on scope and user segments.",
      },
      {
        q: "Do you recruit participants?",
        a: "We can recruit or work with your existing user base.",
      },
      {
        q: "How do you deliver insights?",
        a: "We provide a synthesis report with clear recommendations.",
      },
      {
        q: "Can you combine research with UX design?",
        a: "Yes. We often pair research with design execution.",
      },
      {
        q: "How fast can you deliver findings?",
        a: "Most projects deliver insights within 2-4 weeks.",
      },
    ],
  },
  "branding-visual-identity": {
    whoFor: [
      "Founders preparing for a launch or rebrand.",
      "Marketing teams needing a consistent visual system.",
      "Product teams that outgrew a startup brand.",
      "Companies expanding into new markets.",
    ],
    problems: [
      "Brand identity feels generic or inconsistent.",
      "Visual assets vary across teams and channels.",
      "Product design and marketing look disconnected.",
      "New positioning is not reflected visually.",
      "Brand guidelines are missing or ignored.",
    ],
    deliverables: [
      "Visual identity system with logo, color, and typography.",
      "Brand guidelines for digital and product use.",
      "UI alignment notes for product design continuity.",
      "Core marketing assets and templates.",
      "Voice and tone cues tied to visual identity.",
      "Launch-ready asset package and handoff.",
    ],
    process: [
      "Discovery: align on positioning and brand goals.",
      "Scope: define identity components and usage needs.",
      "Build: craft identity system and visual assets.",
      "Launch: deliver guidelines and rollout support.",
    ],
    differentiators: [
      "Senior pod focused on strategic positioning and visuals.",
      "Brand systems designed to scale across teams.",
      "Clear handoff that marketing and product can adopt fast.",
    ],
    faqs: [
      {
        q: "Do you redesign logos?",
        a: "Yes. We can refine or rebuild logos based on strategy and goals.",
      },
      {
        q: "Will this include brand guidelines?",
        a: "Yes. We deliver detailed guidelines and usage rules.",
      },
      {
        q: "Can you align branding with product UI?",
        a: "Yes. We ensure the brand translates into product design.",
      },
      {
        q: "How long does branding take?",
        a: "Typically 3-6 weeks depending on scope and revisions.",
      },
      {
        q: "Do you create marketing templates?",
        a: "Yes. We deliver templates for decks, social, and web.",
      },
    ],
  },
  "strategy-backtesting": {
    dominantPersona: "Quant funds",
    dominantAudience:
      "Quant funds validating signal stability before allocation decisions and capital allocation reviews.",
    secondaryAudiences: [
      "Prop desks testing strategy variants across regimes and liquidity conditions.",
      "Discretionary teams codifying repeatable playbooks into testable systems.",
    ],
    problems: [
      "Backtests that ignore realistic execution friction and overstate edge.",
      "Research outputs that cannot be reproduced or promoted safely to live.",
      "No shared acceptance criteria for strategy go/no-go decisions.",
    ],
    deliverables: [
      "Event-driven backtest framework with realistic slippage, fees, and fill logic.",
      "Reusable experiment templates and versioned parameter tracking.",
      "Promotion checklist from research to forward-test readiness.",
    ],
    process: [
      "Discovery: align on strategy objectives, data sources, and risk limits.",
      "Scope: define test universe, execution assumptions, and acceptance criteria.",
      "Build: implement backtests, validation reports, and reproducibility.",
      "Launch: deliver results, documentation, and promotion guidance.",
    ],
    differentiators: [
      "Realistic execution modeling, not idealized backtests.",
      "Promotion criteria tied to capital allocation decisions.",
      "Audit-ready research artifacts for governance.",
    ],
    faqs: [
      {
        q: "Do you model slippage and fees?",
        a: "Yes. We build realistic execution assumptions for each venue and strategy.",
      },
      {
        q: "Can you work with our existing research stack?",
        a: "Yes. We integrate with your data and research tooling.",
      },
      {
        q: "Do you provide reproducible results?",
        a: "Yes. We deliver versioned experiments and documented assumptions.",
      },
    ],
  },
  "forward-testing-shadow-mode": {
    dominantPersona: "Prop desks",
    dominantAudience:
      "Prop desks pressure-testing intraday systems before risking desk capital.",
    secondaryAudiences: [
      "Funds with strict deployment governance between research and production.",
      "Discretionary desks validating model overlays alongside manual execution.",
    ],
    problems: [
      "No controlled step between promising backtests and real-money deployment.",
      "Weak observability on strategy behavior during live-feed validation.",
      "Ad-hoc promotion decisions without statistical confidence thresholds.",
    ],
    deliverables: [
      "Paper + shadow mode execution environment mirroring production pathways.",
      "Validation dashboards for drift, fill-quality, and risk violations.",
      "Clear promotion criteria and rollback guardrails.",
    ],
    process: [
      "Discovery: align on strategy goals and promotion thresholds.",
      "Scope: define validation windows, telemetry, and risk checks.",
      "Build: implement shadow execution and monitoring views.",
      "Launch: run validation, document outcomes, and go/no-go guidance.",
    ],
    differentiators: [
      "Bridges research to live with measurable confidence.",
      "Observability built into every validation run.",
      "Governed promotion and rollback workflows.",
    ],
    faqs: [
      {
        q: "How long should shadow mode run?",
        a: "We set duration based on strategy frequency and statistical confidence needs.",
      },
      {
        q: "Do you mirror production execution?",
        a: "Yes. We mirror order pathways, risk checks, and routing logic.",
      },
      {
        q: "Can you define promotion criteria?",
        a: "Yes. We design measurable thresholds with stakeholders.",
      },
    ],
  },
  "live-trading-execution-systems": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds requiring reliable order lifecycle handling at production scale with governance.",
    secondaryAudiences: [
      "Prop desks that need fast execution with hard risk stops.",
      "Discretionary teams automating repeatable execution legs without losing control.",
    ],
    problems: [
      "Execution stacks break under venue/API edge cases and volatile sessions.",
      "Inconsistent retries/idempotency causing duplicate or missing orders.",
      "Risk controls and runbooks are too fragile for high-pressure operations.",
    ],
    deliverables: [
      "Production execution engine with idempotent order flow and fail-safe retries.",
      "Pre-trade and intra-trade risk gates with kill-switch support.",
      "Operational runbooks, incident workflows, and audit-ready traces.",
    ],
    process: [
      "Discovery: align on venues, risk policies, and performance targets.",
      "Scope: define order lifecycle, failure modes, and SLAs.",
      "Build: implement execution, risk, and observability layers.",
      "Launch: validate in production with runbooks and monitoring.",
    ],
    differentiators: [
      "Execution engineered for resilience under stress.",
      "Governance-ready risk controls and auditability.",
      "Senior pod with market infrastructure experience.",
    ],
    faqs: [
      {
        q: "Do you support multiple venues and brokers?",
        a: "Yes. We design systems to handle multi-venue routing and redundancy.",
      },
      {
        q: "How do you handle order failures?",
        a: "We implement idempotent retries, circuit breakers, and alerting.",
      },
      {
        q: "Can you integrate with our existing OMS?",
        a: "Yes. We can integrate or build around your OMS stack.",
      },
    ],
  },
  "real-time-pnl-exposure-monitoring": {
    dominantPersona: "Prop desks",
    dominantAudience:
      "Prop desks monitoring desk-level exposure and strategy health in real time.",
    secondaryAudiences: [
      "Funds needing portfolio-wide risk visibility throughout the trading day.",
      "Discretionary teams tracking automated and manual positions in one surface.",
    ],
    problems: [
      "Delayed risk and PnL visibility prevents timely intervention.",
      "Fragmented dashboards hide cross-strategy exposure concentration.",
      "Alerting is noisy, late, or disconnected from actionable runbooks.",
    ],
    deliverables: [
      "Unified real-time monitoring for PnL, exposure, and strategy status.",
      "Alerting thresholds mapped to practical intervention workflows.",
      "Role-aware monitoring views for traders, risk, and operations.",
    ],
    process: [
      "Discovery: align on risk metrics, roles, and alert priorities.",
      "Scope: define data feeds, latency targets, and dashboards.",
      "Build: implement monitoring, alerting, and escalation flows.",
      "Launch: validate in live sessions and refine thresholds.",
    ],
    differentiators: [
      "Real-time visibility with action-first alerting.",
      "Designed for trading desk decision speed.",
      "Clear escalation playbooks tied to metrics.",
    ],
    faqs: [
      {
        q: "Can you integrate with our trading data feeds?",
        a: "Yes. We connect to live feeds and normalize them for monitoring.",
      },
      {
        q: "How do you reduce alert noise?",
        a: "We tune thresholds and tie alerts to actionable runbooks.",
      },
      {
        q: "Do you support role-based views?",
        a: "Yes. We design views for traders, risk, and operations.",
      },
    ],
  },
  "trade-analytics-reporting": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds that need attribution clarity for PM updates and risk committee reviews.",
    secondaryAudiences: [
      "Prop desks optimizing execution quality and strategy-level expectancy.",
      "Discretionary teams turning journal-style insights into measurable analytics.",
    ],
    problems: [
      "Performance reporting lacks attribution depth for decision-making.",
      "Slippage and edge decay signals are discovered too late.",
      "Post-trade analysis is manual and inconsistent across teams.",
    ],
    deliverables: [
      "Per-trade and aggregate analytics with attribution and slippage decomposition.",
      "Daily/weekly reporting pipelines with strategy-level diagnostics.",
      "Decision-ready KPI layers for PM, trader, and risk cadences.",
    ],
    process: [
      "Discovery: align on reporting needs, KPIs, and cadence.",
      "Scope: define data sources, attribution logic, and outputs.",
      "Build: implement analytics pipelines and reporting dashboards.",
      "Launch: validate reports and train teams on usage.",
    ],
    differentiators: [
      "Reporting tied to decision-making, not vanity metrics.",
      "Automated pipelines that reduce manual analysis work.",
      "Strategy-level diagnostics for actionable improvements.",
    ],
    faqs: [
      {
        q: "Can you break down slippage and execution quality?",
        a: "Yes. We include slippage decomposition and fill-quality analysis.",
      },
      {
        q: "Do you support daily and weekly reporting?",
        a: "Yes. We automate both cadence levels with clear summaries.",
      },
      {
        q: "Can you integrate with our data warehouse?",
        a: "Yes. We can pull from your warehouse or trading systems.",
      },
    ],
  },
  "quant-research-infrastructure": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds scaling strategy research across multiple researchers and model owners.",
    secondaryAudiences: [
      "Prop desks formalizing idea-to-production workflows.",
      "Discretionary teams introducing systematic overlays with clear controls.",
    ],
    problems: [
      "Research pipelines are fragmented and difficult to reproduce.",
      "No shared standards for data quality, experiment hygiene, and reviews.",
      "Hand-off from research notebooks to production is unreliable.",
    ],
    deliverables: [
      "Structured research workspace with reproducible experiment pipelines.",
      "Dataset/version controls and model/strategy auditability.",
      "Research-to-production handoff protocol and validation gates.",
    ],
    process: [
      "Discovery: align on research workflows and collaboration pain points.",
      "Scope: define pipeline architecture, data governance, and tooling.",
      "Build: implement research infrastructure and reproducibility layers.",
      "Launch: onboard teams and standardize research operations.",
    ],
    differentiators: [
      "Infrastructure built for multi-researcher scale.",
      "Auditability baked into every experiment.",
      "Clear handoff process to production teams.",
    ],
    faqs: [
      {
        q: "Can you integrate with existing research tools?",
        a: "Yes. We integrate with notebooks, data lakes, and experiment tracking.",
      },
      {
        q: "How do you ensure reproducibility?",
        a: "We implement version control for data, code, and experiments.",
      },
      {
        q: "Do you support governance reviews?",
        a: "Yes. We build frameworks for research approval and audit.",
      },
    ],
  },
  "trading-system-audits-consulting": {
    dominantPersona: "Funds",
    dominantAudience:
      "Funds requiring independent architecture and risk assessment before scaling capital.",
    secondaryAudiences: [
      "Prop desks troubleshooting recurring execution or stability failures.",
      "Discretionary teams modernizing legacy tooling without full rebuild risk.",
    ],
    problems: [
      "Hidden failure modes in execution, risk, or infrastructure layers.",
      "No objective severity framework for technical and operational debt.",
      "Fixes are reactive and uncoupled from measurable reliability targets.",
    ],
    deliverables: [
      "System audit across architecture, execution, risk, and observability.",
      "Severity-ranked findings with practical remediation sequence.",
      "Advisory support for implementation and verification cycles.",
    ],
    process: [
      "Discovery: gather system context, logs, and incident history.",
      "Scope: define audit surface and risk prioritization criteria.",
      "Build: deliver findings, severity scoring, and remediation plan.",
      "Launch: support fixes and verification milestones.",
    ],
    differentiators: [
      "Independent, senior review with no vendor bias.",
      "Severity-based roadmap for reliability gains.",
      "Hands-on advisory to execute remediation.",
    ],
    faqs: [
      {
        q: "Do you provide a remediation plan?",
        a: "Yes. We deliver prioritized fixes with impact and effort guidance.",
      },
      {
        q: "Can you review both infra and execution logic?",
        a: "Yes. We audit the full stack from data to order lifecycle.",
      },
      {
        q: "Do you help implement fixes?",
        a: "Yes. We can support remediation or execute directly.",
      },
    ],
  },
  "trading-stack-observability-alerting": {
    dominantPersona: "Prop desks",
    dominantAudience:
      "Prop teams needing low-latency incident detection and escalation during sessions.",
    secondaryAudiences: [
      "Funds operating multiple strategy services in production.",
      "Discretionary teams combining automated alerts with human oversight.",
    ],
    problems: [
      "Incidents are detected late due to weak telemetry coverage.",
      "Alert fatigue from noisy thresholds and poor signal quality.",
      "No clear mapping from alerts to response owners and actions.",
    ],
    deliverables: [
      "Observability stack for latency, fills, order states, and infra health.",
      "Signal-first alerting tuned by severity and operational context.",
      "Escalation flows and incident response playbooks.",
    ],
    process: [
      "Discovery: review current telemetry and incident patterns.",
      "Scope: define critical metrics, thresholds, and responders.",
      "Build: implement dashboards, alerts, and runbooks.",
      "Launch: validate in live sessions and refine signals.",
    ],
    differentiators: [
      "Alerting tuned to actions, not noise.",
      "Senior pod with trading system ops experience.",
      "Clear incident playbooks for faster recovery.",
    ],
    faqs: [
      {
        q: "Do you integrate with existing monitoring tools?",
        a: "Yes. We can integrate with your current observability stack.",
      },
      {
        q: "How do you reduce alert fatigue?",
        a: "We tune thresholds and tie alerts to response workflows.",
      },
      {
        q: "Can you add on-call workflows?",
        a: "Yes. We build escalation paths and ownership rules.",
      },
    ],
  },
  "tradingview-indicators-automation": {
    dominantPersona: "Discretionary teams",
    dominantAudience:
      "Discretionary traders systematizing repeatable setup detection and execution workflows.",
    secondaryAudiences: [
      "Funds prototyping rapid indicator-driven workflows.",
      "Prop desks turning TradingView signals into executable infrastructure hooks.",
    ],
    problems: [
      "Indicator logic is inconsistent across users and sessions.",
      "Signal-to-execution handoff is manual and error-prone.",
      "TradingView automation lacks governance and production controls.",
    ],
    deliverables: [
      "Custom indicator and alert architecture aligned to strategy logic.",
      "Signal pipelines that connect TradingView outputs to downstream systems.",
      "Operational controls around alert quality and execution triggers.",
    ],
    process: [
      "Discovery: align on trading setups and automation goals.",
      "Scope: define indicator logic, alert criteria, and integration points.",
      "Build: implement indicators, alerts, and downstream hooks.",
      "Launch: validate signals and refine execution workflows.",
    ],
    differentiators: [
      "Signal logic tied directly to trading execution needs.",
      "Governance and validation for alert accuracy.",
      "Integration-ready pipelines beyond TradingView.",
    ],
    faqs: [
      {
        q: "Do you build custom TradingView indicators?",
        a: "Yes. We design and implement indicators and alert logic.",
      },
      {
        q: "Can alerts trigger automated execution?",
        a: "Yes. We integrate alert pipelines into execution systems.",
      },
      {
        q: "How do you test indicator accuracy?",
        a: "We validate against historical data and live monitoring.",
      },
    ],
  },
  "trading-tech-maintenance-on-call": {
    dominantPersona: "Discretionary teams",
    dominantAudience:
      "Discretionary teams relying on lean engineering bandwidth for stack reliability.",
    secondaryAudiences: [
      "Funds needing dependable support for always-on trading stacks.",
      "Prop desks requiring rapid response during market sessions.",
    ],
    problems: [
      "Critical maintenance and incidents compete with roadmap delivery.",
      "No clear on-call structure for high-stakes market windows.",
      "Recurring reliability issues remain unresolved between sessions.",
    ],
    deliverables: [
      "Maintenance cadence for infrastructure, execution services, and integrations.",
      "On-call response model with clear ownership and escalation paths.",
      "Reliability improvement backlog tied to incident learnings.",
    ],
    process: [
      "Discovery: review incident history and maintenance gaps.",
      "Scope: define on-call windows, coverage, and tooling.",
      "Build: implement monitoring, response playbooks, and fixes.",
      "Launch: operate support and iterate on reliability.",
    ],
    differentiators: [
      "Senior pod with trading session reliability focus.",
      "Proactive maintenance tied to incident learnings.",
      "Clear ownership and response SLAs.",
    ],
    faqs: [
      {
        q: "Do you provide on-call coverage during market hours?",
        a: "Yes. We align coverage with your trading schedule.",
      },
      {
        q: "Can you take over existing systems?",
        a: "Yes. We stabilize and document before ongoing support.",
      },
      {
        q: "How do you handle recurring incidents?",
        a: "We prioritize root-cause fixes and track reliability improvements.",
      },
    ],
  },
};

export function getServicePlaybook(slug) {
  return SERVICE_PLAYBOOKS[slug] ?? null;
}

export function buildServiceSections(service, category) {
  const playbook = getServicePlaybook(service?.slug);
  if (playbook) {
    if (
      category?.slug === "markets-trading" &&
      playbook.dominantAudience &&
      playbook.secondaryAudiences
    ) {
      return {
        ...playbook,
        whoFor: [playbook.dominantAudience, ...playbook.secondaryAudiences],
      };
    }
    return playbook;
  }

  return {
    whoFor: [
      `Teams that need ${service.title.toLowerCase()} delivered with speed and clear ownership.`,
      "Product leaders balancing timeline pressure with quality requirements.",
      "Organizations that want senior execution without long onboarding drag.",
    ],
    problems: [
      "Scope and execution drift due to unclear delivery boundaries.",
      "Slow cycles caused by fragmented ownership across teams.",
      "Low confidence in production readiness and business impact.",
    ],
    deliverables: [
      `${service.title} implementation scoped to measurable outcomes.`,
      "Technical and product acceptance criteria before build starts.",
      "Weekly demos, clear handoff notes, and production-ready rollout support.",
    ],
  };
}
