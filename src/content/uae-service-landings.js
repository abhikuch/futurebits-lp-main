import { lintText } from "@/content/content-voice";
import { SERVICE_PAGE_COPY } from "@/content/service-copy";
import { generateServiceSeed } from "@/content/service-content-seeds";
import { getServicePlaybook } from "@/content/service-playbooks";
import {
  getCategoryBySlug,
  getRelatedServices,
  SERVICES,
} from "@/content/services";
import {
  getUaeServiceCopy,
  getUaeServicePath,
  SLUG_ANGLES,
  UAE,
} from "@/content/uae";

/**
 * Unique UAE + Gulf landings — one per catalog service.
 * Bodies are composed from slug-specific hooks plus service/playbook facts
 * so two pages cannot collapse into the same three paragraphs.
 */

const META_TITLE_SHAPES = [
  (title) => `${title} for UAE & Gulf teams | Futurebits`,
  (title) => `${title} in the UAE and GCC | Futurebits`,
  (title) => `UAE ${title} | Futurebits`,
  (title) => `${title} for Dubai and Gulf operators | Futurebits`,
  (title) => `${title}: GST-hour delivery | Futurebits`,
  (title) => `${title} for free-zone and mainland teams | Futurebits`,
];

const CATEGORY_GULF_LENS = {
  build: {
    money: "AED pricing, VAT-ready invoices, and a Sunday–Thursday release window",
    buyers:
      "Free-zone operators, mainland companies, and Gulf groups that want software in their repo — not a local retainer that never ships",
    data: "Hosting region you can name in a PDPL or group-IT conversation, backups, and no production data on a personal laptop",
  },
  "ai-automation": {
    money: "Cost caps on model spend and a quality number a Dubai ops lead can read by Tuesday",
    buyers:
      "Support, ops, and product teams in the UAE and KSA who live on WhatsApp and need a human handoff",
    data: "A written data map before documents leave the tenant. Emirates ID scans and policy PDFs are not demo fodder",
  },
  design: {
    money: "AED offers on the page and a CTA that books a call, not a mood film",
    buyers:
      "Founders and product leads in Dubai, Riyadh, and Doha who need bilingual-ready UI and frontend in the same sprint",
    data: "We do not auto-translate legal or brand copy. English ships first unless you already have reviewed Arabic",
  },
  "markets-trading": {
    money: "Fees, sessions, and UAE or KSA holidays you name — in the spec, not a footnote",
    buyers:
      "DIFC and ADGM desks, plus remote books run from Doha or Riyadh that need a kill switch a human can hit",
    data: "You or your licensed entity own the risk. We own repo quality, alerts, and the GST pager window",
  },
  "integrations-platform": {
    money: "Reconciliation in the same window as the integration, in AED or the currency you actually settle",
    buyers:
      "Teams wiring Stripe, WhatsApp, CRM, and auth for UAE and Gulf customers without a six-vendor pile-up",
    data: "Sandbox first, then prod, with a rollback. Official WhatsApp Cloud API only",
  },
  "startup-tech-partner": {
    money: "A scoped MVP you can demo before the next investor coffee in DIFC or Riyadh",
    buyers:
      "Hub71, in5, and Gulf founding teams that need a named counterpart in GST — not a rotating bench",
    data: "One hypothesis, one metric, cut lines in writing. No equity-only deals",
  },
};

/** @type {Record<string, { h1: string, buyer: string, work: string, region: string }>} */
const LANDING_HOOKS = {
  "saas-development": {
    h1: "SaaS in your repo, billed in AED, demoed in GST",
    buyer:
      "UAE SaaS buyers expect English admin, AED pricing, and VAT-ready invoices from week one. The teams who book us have already watched a local vendor polish a login screen for a quarter. They want billing, onboarding, and the first paid path in one codebase they own.",
    work: "We cut the product to plans, trials, seats, and the invoice a finance lead in Dubai can open. Auth, roles, and a Sunday–Thursday release window sit in the same scope. If your “SaaS” is still a slide plus a WhatsApp group, we will say so on the call.",
    region:
      "Gulf tenants often mix AED, SAR, and USD in one company. We treat currency and tax display as product work, not a later localization sprint. Free-zone and mainland operators get the same delivery: your repo, GST standups, travel to Dubai when a room is faster.",
  },
  "web-app-development": {
    h1: "Web apps that survive an Arabic toggle and a Sunday week",
    buyer:
      "Most Dubai web apps fail on the Arabic toggle or the Sunday–Thursday week. Founders in DIFC and operators in Sharjah come to us when the first vendor shipped a US calendar and a layout that collapses when a longer Arabic string arrives.",
    work: "We write auth, the data model, and the daily flows into scope. React/Next in your repo. Layouts reserve RTL overflow even when English ships first. The admin your bilingual staff uses is not a shared password in a chat.",
    region:
      "A Riyadh or Doha buyer will ask the same question a Dubai buyer does: who owns the repo and when is standup? GST. +971 58 516 5671. We do not invent a local office to win the meeting.",
  },
  "custom-software-development": {
    h1: "Custom software when the off-the-shelf stack cannot hold the process",
    buyer:
      "Family offices and free-zone operators call when HubSpot, Excel, and a local freelancer cannot model the process. The work is usually a workflow other people call “bespoke” so they can hide an open-ended retainer.",
    work: "We map the process a UAE ops lead actually runs, then build the smallest system that holds it. Written cut lines. Weekly demos. Code in your GitHub. We will not estimate a full platform from a one-line brief.",
    region:
      "Across the GCC the same pattern shows up: a group in Kuwait or a desk in Doha with a process no SaaS vendor wants. We travel when a workshop unblocks the sponsor. Day-to-day is remote in GST.",
  },
  "mvp-development": {
    h1: "A UAE MVP you can demo before the next DIFC coffee",
    buyer:
      "Hub71, in5, and DIFC Innovation Hub teams do not need a 40-screen myth. They need one hypothesis, one metric, and a build that survives a skeptical investor who has already seen three marketplace-plus-AI decks this month.",
    work: "We write the cut list before we write code. Auth, the core flow, and a landing page that books a call. Typical first slice is weeks, not a six-month discovery PDF.",
    region:
      "Riyadh founders and Muscat operators get the same rule: one bet. We will not staff a fantasy roadmap because Vision 2030 or Vision 2040 appeared in the brief.",
  },
  "full-stack-development": {
    h1: "Browser to database, one team, no Dubai vendor split",
    buyer:
      "Dubai launches die when frontend, API, and deploy sit in three companies. You want one repo and one named counterpart who can answer why a write failed.",
    work: "Frontend, API, and deploy in the same sprint cadence. Idempotent writes, staging, rollback. We start from the stack you already pay for unless the audit says otherwise.",
    region:
      "GST standups cover a UAE weekday and overlap a Riyadh afternoon. We will not book an 11pm Dubai call unless you ask. Phone +971 58 516 5671.",
  },
  "frontend-development": {
    h1: "React in your repo that does not collapse when Arabic arrives",
    buyer:
      "UAE product teams have Figma files that look finished and frontends that break on a noon screen or a longer string. They want Core Web Vitals and a layout that can take Arabic later.",
    work: "We implement the screens that matter — not a 200-component library on day one. Tokens, spacing, and RTL overflow go in with the first English ship.",
    region:
      "Luxury-brand taste in Dubai and finance density in ADGM need different type, not a gold-foil kit. We will push back on skyline stock. Gulf buyers get the same frontend pod.",
  },
  "backend-development": {
    h1: "APIs with audit logs a UAE reviewer can actually read",
    buyer:
      "Enterprise buyers in the UAE ask how a write happened. A weekend script with no idempotency fails that conversation. You want APIs, jobs, and a data layer that survives a traffic spike and a PDPL question.",
    work: "Contracts, retries, audit logs, and a staging environment you can point at. We will not ship without basic error monitoring on production paths.",
    region:
      "Hosting region is a sentence in the data map — useful in Dubai, Riyadh, or Doha. We pick the cloud with you. No silent region change.",
  },
  "api-development": {
    h1: "Partner APIs for UAE banks, logistics, and marketplaces",
    buyer:
      "The partner already signed. You need a sandbox, a written go-live checklist, and a failure mode that is not “retry in WhatsApp.”",
    work: "REST or GraphQL contracts, keys, rate limits, and docs a third party in the UAE can integrate against. Sandbox first. Then prod with a rollback.",
    region:
      "Gulf partners often sit in a different free zone or a different country. We treat that as a latency and compliance fact, not a slide about “regional scale.”",
  },
  "dashboard-development": {
    h1: "The number a Dubai manager can check before London opens",
    buyer:
      "Ops dashboards in the UAE fail when they show twelve charts and no next action. A principal wants one number, the state, and who owns the exception.",
    work: "Role-aware views on data your team already trusts. GST hours on the clock. We cut ornament that hides a breach.",
    region:
      "Family-office packs in Doha and desk heads in DIFC ask for the same file on a schedule. We automate the refresh. We do not rebuild a slide every Sunday.",
  },
  "admin-panel-development": {
    h1: "Admin your bilingual staff will actually use",
    buyer:
      "Shared passwords in a WhatsApp group are still common in free-zone teams. That fails the first enterprise review. You want roles, an audit trail, and screens that replace spreadsheet chaos.",
    work: "Internal ops screens with named roles: sponsor, operator, vendor. English first, room for Arabic labels later. Acceptance tests before we call it done.",
    region:
      "A sponsor in Abu Dhabi, operators in Dubai, and a vendor in India is a real org chart. We model that. We do not invent a single “admin” user.",
  },
  "client-portal-development": {
    h1: "Portals UAE clients will open on a phone",
    buyer:
      "UAE clients expect English, invoices, and a mobile-usable status view. A PDF emailed every Thursday is not a portal. Family offices in Doha ask for the same thing with more silence around the data.",
    work: "Auth, files, status, and the invoice trail. We cut the social feed nobody asked for. Staging sign-off before production.",
    region:
      "Qatar and Kuwait buyers often want fewer features and stricter roles. We write that into scope. GST demos. Travel when a workshop unblocks the principal.",
  },
  "internal-tool-development": {
    h1: "Replace the Excel-plus-WhatsApp stack in a free zone",
    buyer:
      "The process is already running. It just lives in three workbooks and a group chat. You want hours back every week, not a platform brand.",
    work: "One job the operator repeats. Written triggers. A tool in your repo. We automate only when the manual cost is measurable.",
    region:
      "Kuwaiti groups and Sharjah operators send the same brief with different letterhead. We do not sell a transformation programme. We ship the tool.",
  },
  "crm-development": {
    h1: "A CRM that matches UAE sales: WhatsApp, referrals, Sunday start",
    buyer:
      "Imported CRMs assume a US week and email-first selling. Dubai and Riyadh sales live on WhatsApp and introductions. The pipeline view has to match that or it dies in week two.",
    work: "Pipeline, assignments, and automations tied to how you actually sell. Official WhatsApp where it belongs. Roles, not a shared login.",
    region:
      "Gulf family groups often have a sponsor who never logs in and operators who live in the tool. We design for the operators and report for the sponsor.",
  },
  "marketplace-development": {
    h1: "Two-sided markets with AED settlement and KYC in v1",
    buyer:
      "UAE marketplace briefs love to hide KYC and payouts behind “phase two.” That is how you launch a brochure. Supply and demand in the UAE need settlement and trust mechanics on day one.",
    work: "Two-sided flows, payouts, and the minimum KYC you actually need. We will cut the AI matching layer if it is decoration.",
    region:
      "Cross-border GCC supply (Dubai demand, KSA supply) is a compliance conversation. We name it. We do not pretend a weekend bot solves KYC.",
  },
  "subscription-platform-development": {
    h1: "Subscriptions that bill AED, show VAT, and cancel cleanly",
    buyer:
      "Dunning that shames a customer in a WhatsApp screenshot is how UAE brands get screenshotted. You want plans, trials, proration, and a cancel path a human can finish.",
    work: "One codebase for plans and upgrades. VAT-aware invoices. Webhooks idempotent. Finance can reconcile without paging engineering every Thursday.",
    region:
      "Bahrain’s 10% VAT and the UAE’s 5% are not the same line. We do not hard-code one rate and hope. Country hubs explain the rest; this page owns the product.",
  },
  "workflow-automation-software": {
    h1: "Kill the copy-paste between sheets, email, and chat",
    buyer:
      "UAE ops teams still move the same row between Excel, email, and WhatsApp. You want written triggers and a weekly demo, not a transformation offsite.",
    work: "Map the steps someone runs fifty times a week. Automate the dull middle. Human review where a wrong write costs money or a licence.",
    region:
      "Sunday–Thursday cadence. GST alerts. The same pain shows up in Muscat and Manama with fewer people. We size the automation to the volume, not a platform brochure.",
  },
  "reporting-platform-development": {
    h1: "Board packs that refresh themselves before the Sunday meeting",
    buyer:
      "Family offices and UAE finance teams still close in a slide someone rebuilt at 11pm. You want a scheduled pack and a file an allocator will actually open.",
    work: "Scheduled reports from data you already trust. No intern pipeline. Access roles for sponsor vs operator.",
    region:
      "Doha and DIFC principals ask for the same Tuesday file. We put it on a clock. We do not invent a BI religion.",
  },
  "business-process-automation": {
    h1: "Automate the handoff that currently lives in email",
    buyer:
      "The process a UAE ops lead runs is rarely the one in the SOP. We map the real path, then automate the middle. We skip the workshop that produces a 60-page persona deck.",
    work: "Handoffs, SLAs, and the exception queue. Written done criteria. Your repo.",
    region:
      "Gulf groups add a sponsor who signs on paper. We leave a human step where that is the law of the land, and we do not hide it behind a bot.",
  },
  "no-code-to-code-migration": {
    h1: "Graduate Airtable before a UAE security review kills it",
    buyer:
      "The Zapier tangle worked until an enterprise buyer in Dubai asked where the data lives. You want a repo, tests, and a host you can name.",
    work: "Keep the workflows that earn their keep. Replace the rest in code. We will not rewrite from scratch if an extension is safer.",
    region:
      "KSA PDPL and UAE PDPL questions show up the week you try to sell upmarket. The migration is the answer, not a policy PDF.",
  },
  "legacy-software-modernization": {
    h1: "Keep the data, replace the 2014 tool Dubai staff still live in",
    buyer:
      "A desktop tool or a 2014 monolith is still the system of record. Rewriting everything is rarely the answer. You want a path that does not stop the Sunday close.",
    work: "Extend what works. Replace what is scary to deploy. Staging, monitoring, a rollback. We will not estimate a greenfield platform from a screenshot.",
    region:
      "Free-zone teams and Gulf groups share the same fear: the person who understands the old system is leaving. We write that risk down, then we cut a slice.",
  },
  "excel-automation-smart-reporting": {
    h1: "UAE finance still closes in Excel — we automate the refresh",
    buyer:
      "Telling a Dubai finance team to “just move to a BI tool” is how projects die. They need the file they can audit, refreshed without a day of copy-paste.",
    work: "Automate the pull, keep a spreadsheet they can open, add checks for the numbers that matter. Typical window is weeks if access is granted.",
    region:
      "Kuwait and Oman briefs look the same with different currency symbols. We do not shame Excel. We stop the manual rebuild.",
  },
  "ai-saas-development": {
    h1: "AI inside the SaaS, with evals and a PDPL story",
    buyer:
      "AI products sold into the GCC need evals, a fallback, and a story for PDPL. A separate demo app that never joins billing is not a product.",
    work: "The model call lives behind your auth, with logging and cost caps. We will tell you when the model is decoration.",
    region:
      "Dubai and Riyadh buyers will ask where the prompt logs live. We write that before go-live. English first. Arabic only with reviewed copy.",
  },
  "ai-product-development": {
    h1: "Search, recommendations, or agents — only if the metric exists",
    buyer:
      "We will tell a Dubai product team when the model is decoration. If it ships, it has a metric a manager can check on a Tuesday.",
    work: "One AI surface inside the existing product. Evals on your data. Human fallback. No infinite-intent chatbot stuffed into the nav.",
    region:
      "Gulf enterprise reviews ask for a data map, not a GIF. We answer in writing. GST demos.",
  },
  "ai-workflow-automation": {
    h1: "Document in, action out, human in the loop — GST hours",
    buyer:
      "UAE ops want a document in and an action out, not a US-timezone bot that pages someone at 2am. Sunday–Thursday is the week.",
    work: "LLM steps where they earn their keep. Review queues where a wrong write costs money. Evals on real tickets, not marketing PDFs.",
    region:
      "WhatsApp is often the inbox. Official API only. KSA and UAE support teams share that constraint; the data map is still local to the tenant.",
  },
  "chatbot-development": {
    h1: "A chatbot that can sit on a Dubai support queue",
    buyer:
      "UAE support lives on web chat and WhatsApp. The bot should answer in English, then hand off to a named agent. Infinite intents are how accuracy dies.",
    work: "Fewer intents, better evals, official WhatsApp Cloud API if that is the channel. We will not scrape WhatsApp Web. Arabic joins when copy is reviewed — not when a model guesses.",
    region:
      "Riyadh teams ask for Arabic-first. We reserve the language switch and refuse a mixed intent table without a human path. Doha and Kuwait usually start English.",
  },
  "rag-application-development": {
    h1: "Retrieve from your policies, cite the chunk, refuse when thin",
    buyer:
      "UAE counsel will ask which paragraph the answer came from. A chatbot that invents a fee is worse than no bot. You want retrieval with citations and a refuse path.",
    work: "Evals on your real documents. Chunking you can defend. Hosting your counsel can accept. We will not silently send Emirates ID scans to a consumer chat UI.",
    region:
      "Policy PDFs in mixed English and scanned Arabic are the UAE corpus. We say when the corpus is too thin. KSA PDPL and UAE PDPL get different maps if the tenant differs.",
  },
  "ai-document-processing": {
    h1: "Trade licenses, invoices, and Emirates ID packets — with a queue",
    buyer:
      "Free-zone vendors still send messy PDFs. Extraction without a human review queue is how you invent a licence number.",
    work: "Structured fields, confidence scores, a review UI. We will not promise accuracy without running on your packet types.",
    region:
      "Gulf packets add national IDs and Arabic stamps. We treat those as sensitive in the data map. No training on customer files without written access rules.",
  },
  "ai-search-systems": {
    h1: "Search that understands mixed English, scanned Arabic, and bad filenames",
    buyer:
      "UAE corpora are not clean Wikipedia. Filenames are dates. Arabic and English sit in the same folder. Generic search ranks the wrong PDF.",
    work: "Semantic search over the corpus you actually have. Filters a human understands. We will say when keyword search is enough.",
    region:
      "A Doha family office and a Dubai operator have different sensitivity, same mess. The data map names who can run a query.",
  },
  "ai-recommendation-systems": {
    h1: "Recommendations with an explain line a merchandiser can defend",
    buyer:
      "A Dubai merchandiser has to explain why SKU A won. Black-box ranking dies in that meeting. You want ranking on your data and a sentence a human can read.",
    work: "Features you can name, an explain line, and a fallback to a merchandiser rule. We will not drop in generic collaborative filtering and leave.",
    region:
      "Inventory and pricing in AED, with VAT visible where the customer sees it. Gulf catalogs add SAR and QAR — we do not hard-code one currency.",
  },
  "ai-agents-development": {
    h1: "Agents with tools, timeouts, and a kill switch on a UAE desk",
    buyer:
      "We do not leave a loop running unattended on a UAE desk. Agents need tools, timeouts, and a person who owns the pager in a named GST window.",
    work: "Sales prep, support triage, or internal ops — one job. Evals. Human fallback. Cost caps. We refuse a “set and forget” brief.",
    region:
      "DIFC and ADGM teams ask the same kill-switch question trading desks ask. The answer is a runbook, not a demo GIF.",
  },
  "llm-integration": {
    h1: "The model behind your auth, with logs and a cost cap",
    buyer:
      "Wire the model into the stack you already have. GST-hour support while we land it. A key that dies at 4pm Dubai time should have a written fallback.",
    work: "Summarization, classification, or generation inside your app. Logging, cost caps, staging. We will not hide the provider if counsel needs the name.",
    region:
      "Approved-model lists are common in UAE groups. We use the one you already signed, including Azure OpenAI if that is the gate.",
  },
  "openai-api-integration": {
    h1: "OpenAI behind your auth — or the model counsel already approved",
    buyer:
      "The key in a .env on someone’s laptop is not an integration. You want calls with fallbacks, logging, and a cost number finance can see.",
    work: "Official SDK, retries, a written fallback if the key dies. We will steer you off OpenAI if your UAE IT already approved another provider.",
    region:
      "Some Gulf buyers cannot send prompts to a US endpoint. Say that on the call. We will not silently route around a data-map decision.",
  },
  "custom-ai-tools": {
    h1: "One internal job a Dubai operator repeats every week",
    buyer:
      "Not a platform. A small tool. The request already lives in Slack or WhatsApp every week. You want it in the repo with a review path.",
    work: "Scope the job, add a fallback, ship a UI your operator will use. We will not expand it into an agent suite to inflate the quote.",
    region:
      "Free-zone teams and KSA operators send the same “small tool” brief. We keep it small. GST demos.",
  },
  "ai-dashboard-development": {
    h1: "Model quality, cost, and the queue — without a data scientist in the room",
    buyer:
      "A UAE ops lead should see quality, cost, and backlog without waiting for a notebook. Vanity charts are how AI projects hide a bad eval.",
    work: "The three numbers that matter for your model. Alerts that mean something. Roles for who can replay a transcript.",
    region:
      "PDPL conversations start when someone asks who can export the log. We answer in the dashboard permissions, not a policy appendix.",
  },
  "ai-data-extraction": {
    h1: "Messy PDFs from free-zone vendors, into JSON you can ingest",
    buyer:
      "The PDF is a scan. The stamp is Arabic. The filename is “final-final-3.” You want structured fields and confidence scores, not silent guesses.",
    work: "Unstructured in, JSON out, review queue for low confidence. We run on your packet types before we quote accuracy.",
    region:
      "Emirates ID, CR, and VAT invoices are different extraction problems. We do not train on them without written rules. Gulf IDs get the same caution.",
  },
  "ai-customer-support-tools": {
    h1: "Deflection a UAE support manager can measure by Tuesday",
    buyer:
      "Macros and handoff, not a personality. The top twenty tickets in a Dubai queue are the brief. Zendesk or Intercom stay in the loop.",
    work: "Deflection on the intents you can eval. Named agent handoff. Official WhatsApp if that is the channel. We will not replace the team on day one.",
    region:
      "Arabic tickets wait for reviewed copy. English can ship first. KSA queues are more Arabic-first; we will not mix both in one table without a review path.",
  },
  "custom-gpt-knowledge-base": {
    h1: "A GPT on your policies, with citations counsel can accept",
    buyer:
      "Hosted where your UAE counsel can accept the data map. Citations. Refuse when the corpus is thin. A Custom GPT that invents leave policy is a liability.",
    work: "Grounding in your policies and product docs. Eval set of real questions. We will not promise accuracy without that set.",
    region:
      "Group IT in Abu Dhabi or Riyadh may require a named region. We write it down. English working language; Arabic articles only when supplied.",
  },
  "ai-content-generation": {
    h1: "English UAE drafts with a human editor — we will not auto-publish Arabic",
    buyer:
      "Campaign drafts for English UAE channels. A human stays in the loop. Auto-publishing Arabic is how brands get screenshotted.",
    work: "Tone and fact-check gates. Brand kit first. We will not spray unreviewed copy into ads.",
    region:
      "Paid social in the UAE and KSA has different sensitivity. We take your list of banned claims. We do not invent cultural fluency.",
  },
  "ai-video-generation": {
    h1: "Short product clips with a brand kit — no unreviewed footage spray",
    buyer:
      "Paid social in the Gulf punishes sloppy footage. You want templated output, a cut list, and a human who says no.",
    work: "Brand kit, templates, and a review step. We do not generate faces you cannot defend. English on-screen first unless you supply Arabic.",
    region:
      "Dubai luxury taste and a Riyadh conservative brief are not the same template. Bring the two ads you respect. We will refuse gold-foil clichés.",
  },
  "ui-ux-design": {
    h1: "Flows for bilingual products — English path, room for Arabic",
    buyer:
      "We design the English path and leave room for Arabic without restacking the page. Founders who want a gold-foil skyline kit should look elsewhere.",
    work: "The three screens a buyer from Dubai Internet City actually uses. Frontend in the same team. The page should book a call.",
    region:
      "Riyadh users may need Arabic first. We still ship English unless copy is approved. Doha and Manama often stay English-first. We will not auto-translate.",
  },
  "product-design": {
    h1: "Decide the first three screens of a UAE launch, then ship them",
    buyer:
      "A 40-screen myth is how GITEX booths stall. You want the first three screens a UAE user finishes, drawn and built.",
    work: "Problem framing in Figma and code. Cut list in week one. We will not take Figma-only work. The first useful screens should be in the repo before anyone books another workshop.",
    region:
      "Gulf launches fail when the CTA hides behind a film. Book a call stays the label. AED honesty on the page when you sell locally. If the offer is still a mood, we will say so on the call.",
  },
  "web-app-design": {
    h1: "Web UI that survives luxury taste and a noon Sheikh Zayed screen",
    buyer:
      "Harsh light, dense finance, and a bilingual ambition. The UI has to be buildable in React, not a poster.",
    work: "Components engineers can ship. Density where it earns its keep. RTL overflow reserved.",
    region:
      "ADGM density and a consumer Dubai brand are different type ramps. We will ask which one you are. Gulf buyers get the same design-plus-frontend pod.",
  },
  "saas-ui-design": {
    h1: "SaaS UI a DIFC analyst and a warehouse clerk can both finish",
    buyer:
      "Onboarding, settings, and billing screens. If those three are unclear, the rest of the design system is decoration.",
    work: "SaaS patterns, empty states, and errors a human can act on. Frontend in the same sprint.",
    region:
      "AED, VAT, and a Sunday week belong on billing screens. We do not leave them as “copy TBD” in a US template.",
  },
  "dashboard-ui-design": {
    h1: "Trading and ops dashboards: the number, the state, the next action",
    buyer:
      "Ornament that hides a breach is how desks lose money. You want scannable density on a laptop, not a 3D pie.",
    work: "Hierarchy, type, and the one action per exception. We cut decorative gradients that fight the data.",
    region:
      "DIFC and ADGM rooms are bright and skeptical. Doha family-office screens need fewer series. We design for the room you name.",
  },
  "design-systems": {
    h1: "A token set that can grow an Arabic theme later",
    buyer:
      "We start English-first so you can ship this quarter. Ten to fifteen components your team reuses — not a 200-component library on day one.",
    work: "Tokens, spacing, type, and RTL-safe primitives. Storybook or the equivalent in your repo. Frontend in the same team.",
    region:
      "Gulf products add a second language under deadline. If the tokens assume short English, you redesign. We do not assume that.",
  },
  "wireframing": {
    h1: "Low-fi that forces the Sunday kickoff: what is in v1",
    buyer:
      "The Dubai launch needs a decision, not a polished myth. Wireframes exist to kill screens before engineering commits.",
    work: "Clickable flows, a cut list, and a metric. We will not spend a month decorating boxes.",
    region:
      "GST workshops — remote or in the room. Gulf sponsors often decide in one sitting if the wireframe is honest.",
  },
  "prototyping": {
    h1: "A prototype you can put in front of a UAE buyer before production CSS",
    buyer:
      "Investors and procurement teams in the UAE believe a click path more than a deck. You want that path before we write production CSS.",
    work: "Figma or code prototype, the happy path, and the one error state that kills deals. Then we build.",
    region:
      "We will not prototype Arabic unless you have copy. Placeholder RTL is a layout test, not a language claim.",
  },
  "landing-page-design": {
    h1: "Landing pages for AED offers and GST-hour CTAs",
    buyer:
      "One job: book the call. The UAE web is full of luxury templates that do not convert. We design the offer, the proof, and the button.",
    work: "Price honesty, timing, and Book a call. Frontend in the same team. We cut the mood film that hides a missing offer.",
    region:
      "AED in the UAE, SAR in KSA if that is who pays. We do not keyword-stuff “Best in Dubai Abu Dhabi Riyadh” into the H1 you ship.",
  },
  "mobile-app-ui-design": {
    h1: "Thumbs-first UI for Emirates Road and a quiet ADGM office",
    buyer:
      "Cars, glare, and one-handed use are the UAE mobile brief. A desktop-first mock that shrinks is not mobile UI.",
    work: "Thumb reach, type size, and the two tasks a user opens the app to finish. RTL reserved.",
    region:
      "Gulf app stores still want English metadata you can defend. Arabic screens wait on copy. We will not auto-translate store listings.",
  },
  "user-flow-design": {
    h1: "WhatsApp inbound, English form, human callback — then cut the rest",
    buyer:
      "The real UAE path is rarely the sitemap. We map inbound, form, and callback, then we delete extra steps.",
    work: "Flows with named owners. The leak is usually the form or the language switch. We score that before we draw more screens.",
    region:
      "KSA paths are more Arabic-first. Qatar family-office paths are more portal-and-email. We do not copy-paste a US funnel.",
  },
  "figma-design": {
    h1: "Figma in your project, named components, frontend on the same team",
    buyer:
      "An orphan file after GITEX is how projects stall. You want components named and a frontend partner in the same pod.",
    work: "Your Figma project, not ours forever. Handoff is code, not a ZIP. We will not take file-only work.",
    region:
      "UAE and Gulf buyers get the same rule. If you need a local art director for Arabic, we can introduce one. We will not fake that craft.",
  },
  "website-ux-audit": {
    h1: "Score the UAE site the way a Dubai Internet City buyer actually clicks",
    buyer:
      "Including the Arabic switch if you have one. Dead CTAs and form drop-off are the leaks. A 60-page persona deck is not an audit.",
    work: "We walk the English path and the language switch, then offer to fix the leaks in the same team. Checklist you can reuse.",
    region:
      "Riyadh sites fail on RTL and form labels. Doha sites fail on hidden CTAs. We write what we saw, not a generic Gulf paragraph.",
  },
  "ux-research": {
    h1: "Five conversations in Dubai or remote beat a 60-page persona deck",
    buyer:
      "Short research with the users you can actually reach. We will not invent a “GCC persona” from a stock photo.",
    work: "A plan, five to eight conversations, and decisions that change the next sprint. English sessions unless you bring a linguist.",
    region:
      "Remote across the Gulf is fine. In-person in Dubai when a room is faster. We do not claim Arabic fluency in research.",
  },
  "branding-visual-identity": {
    h1: "Identity that can sit next to DIFC neighbors without gold-foil cliché",
    buyer:
      "We will say no to skyline stock and “innovation” ligatures. Bring the two sites you respect.",
    work: "A small system: type, color, and the few marks you will actually use. Not a 80-page brand book nobody opens.",
    region:
      "Luxury Dubai and conservative KSA briefs are different constraints. We will ask which room the brand has to enter. Arabic lockups wait on a specialist if you need them.",
  },
  "data-visualization-design": {
    h1: "Charts a family office or desk head can read in ten seconds",
    buyer:
      "We cut the 3D pies. DIFC and Doha principals want the number and the exception, not a color festival.",
    work: "Type, hierarchy, and the series that earn their ink. Implementation in the same team when the dashboard is the product.",
    region:
      "UAE holidays and GST timestamps belong on the axis when the chart is operational. We do not leave a US week on a UAE ops chart.",
  },
  "strategy-backtesting": {
    h1: "Event-driven backtests with fees and the holidays you actually observe",
    buyer:
      "A pretty equity curve that ignores fees and UAE holidays is a story. You want event-driven tests that match the venues you trade.",
    work: "Fees, sessions, and the calendar you name. Reproducible runs. We will not bless a curve we cannot replay.",
    region:
      "Indian cash and F&O, US equities, FX, and crypto perps are the usual set. Bring ADX/DFM or Tadawul docs if that is the book. We do not invent venue coverage.",
  },
  "forward-testing-shadow-mode": {
    h1: "Shadow the live book in GST hours before capital moves",
    buyer:
      "Fill quality is a requirement. Paper that never sees the real book is how weekend bots graduate into losses.",
    work: "Shadow against the live book, compare fills, write the go-live gate. Named owner for the window.",
    region:
      "Dubai and Doha desks share a GST morning before London. We schedule the shadow window you can actually watch.",
  },
  "live-trading-execution-systems": {
    h1: "Idempotent orders and a kill switch someone in Dubai can hit",
    buyer:
      "No weekend-bot theatrics. You want execution with idempotent orders and a human who owns the pager.",
    work: "Order path, retries, kill switch, runbook. We refuse unattended “set and forget.” You or your licensed entity own the risk.",
    region:
      "DIFC, ADGM, or a remote book in Riyadh — the licence is yours. We will not trade ADX or DFM for you. We will not lend a licence.",
  },
  "real-time-pnl-exposure-monitoring": {
    h1: "PnL a principal can see before London opens",
    buyer:
      "Alerts that mean something. A dashboard that hides a breach behind ornament is worse than email.",
    work: "Exposure, PnL, and the exception. GST on-call windows we agree in writing.",
    region:
      "Allocators in DIFC and family offices in Doha ask for the same Tuesday number. We put it on a clock they name.",
  },
  "trade-analytics-reporting": {
    h1: "The post-trade file a DIFC allocator asked for last quarter",
    buyer:
      "On a schedule. Not a one-off export after someone shouts. You want the file they already specified.",
    work: "Post-trade reports, reproducibility, access roles. We build the file you showed us, then we automate it.",
    region:
      "Gulf allocators vary in how much they want in email vs a portal. We ask. We do not email production files to a personal Gmail to go faster.",
  },
  "quant-research-infrastructure": {
    h1: "Research stacks two PMs in Abu Dhabi can reproduce",
    buyer:
      "When two PMs disagree about a feature, the stack should replay the notebook. You want reproducibility, not a hero laptop.",
    work: "Data, environments, and the audit trail of a research run. We will not turn this into a trading product unless you ask.",
    region:
      "ADGM and DIFC research teams care about who can export. The data map is part of the infra, not an appendix.",
  },
  "trading-system-audits-consulting": {
    h1: "We read the code and the runbook, then say what fails an ops review",
    buyer:
      "A serious ops review is not a logo on a slide. You want someone to read the path and name the gap.",
    work: "Code, runbook, alerts, kill switch. A written list of what would fail. We may decline to “fix everything” in one quote.",
    region:
      "UAE desks and remote Gulf books get the same honesty. We do not take a discretionary mandate as part of an audit.",
  },
  "trading-stack-observability-alerting": {
    h1: "Pages that fire when the feed dies — not when CPU is “a bit high”",
    buyer:
      "GST on-call windows you can name. Noise is how people mute the pager before a real gap.",
    work: "Signals that mean the book is unsafe. Runbook links. A person who owns the window.",
    region:
      "Sunday–Thursday coverage is the UAE default. If you need a Friday crypto window, we write it. We do not imply 24/7 if you did not buy it.",
  },
  "tradingview-indicators-automation": {
    h1: "If TradingView is the source of truth, we automate it carefully",
    buyer:
      "We will say when you have outgrown it. Alerts that fire into an unsupervised bot are how accounts blow up.",
    work: "Indicator logic, alert path, and the human gate. We will not scrape a UI we cannot contract against.",
    region:
      "Retail-heavy UAE and Gulf traders start here. Desks that already have a venue API should not. We will say which side you are on.",
  },
  "trading-tech-maintenance-on-call": {
    h1: "A named engineer in an overlapping GST window",
    buyer:
      "Not a ticket queue in another hemisphere. You want someone who already knows the stack when the feed dies.",
    work: "A written window, a runbook, and escalation. We will not sell “24/7” we cannot staff.",
    region:
      "Dubai weekdays first. Doha and Riyadh overlap. Weekend coverage is a separate line if you need it.",
  },
  "payment-gateway-integration": {
    h1: "Checkout for UAE cards and the processor you already have",
    buyer:
      "Reconciliation in the same sprint. A gateway demo that never matches finance is not an integration.",
    work: "The processor you signed, webhooks idempotent, receipts finance can show. Sandbox, then prod, rollback.",
    region:
      "UAE cards, AED, VAT on the receipt when needed. We will steer you off an India-only rail if your buyers are in Dubai.",
  },
  "stripe-integration": {
    h1: "Stripe for AED and the cards UAE customers actually hold",
    buyer:
      "Webhooks idempotent, receipts you can show finance. Checkout that dies on a popular UAE card is a failed launch.",
    work: "Stripe in your account, customer portal if you need it, tax display you can defend. We do not use a shared platform account as your store.",
    region:
      "Bahrain and UAE VAT differ. KSA may want SAR. We do not hard-code 5% and hope. Official docs, not a blog-copy integration.",
  },
  "razorpay-integration": {
    h1: "Razorpay is an India rail — we will say when UAE checkout needs Stripe",
    buyer:
      "If your buyers are in Dubai, we will steer you to Stripe or a local processor and say why. If your buyers are in India, we will wire Razorpay properly.",
    work: "The rail that matches the customer. Webhooks, reconciliation, a written failure mode. No silent dual-stack.",
    region:
      "Gulf companies with an India entity sometimes need both. That is two scopes. We will not hide the second behind “phase two.”",
  },
  "subscription-billing-setup": {
    h1: "Recurring AED billing, proration, and dunning that does not shame",
    buyer:
      "A WhatsApp screenshot of a nasty dunning email is a brand event in the UAE. You want proration, retries, and a cancel path.",
    work: "Plans, taxes, and the customer portal. Finance can reconcile. We write the failed-payment path before go-live.",
    region:
      "Sunday–Thursday dunning windows. Friday-Saturday quiet unless you sell into a different week. Gulf VAT rates are in the quote, not guessed.",
  },
  "crm-integration": {
    h1: "HubSpot — or the CRM you already pay for — wired to Dubai forms and WhatsApp",
    buyer:
      "The inbox is WhatsApp. The form is English. The CRM is whatever you already bought. The job is the wire, not a new religion.",
    work: "Fields, owners, and the handoff. Official WhatsApp if that is inbound. We will not scrape.",
    region:
      "UAE sales weeks start Sunday. Lifecycle mail should respect that. We set send windows; we do not blast Friday prayer hours unless you insist.",
  },
  "whatsapp-api-integration": {
    h1: "Official WhatsApp Cloud API — templates, opt-in, handoff",
    buyer:
      "UAE and KSA customers already live here. We will not scrape WhatsApp Web. You want templates you can defend and a human handoff.",
    work: "Cloud API, opt-in, template review, and the desk you already have. Logging for PDPL questions. No unofficial clients.",
    region:
      "Meta’s rules plus local data questions. We write the data map. Arabic templates wait on reviewed copy. English can ship first.",
  },
  "email-automation-integration": {
    h1: "Lifecycle mail that respects GST send windows and the Friday–Saturday weekend",
    buyer:
      "A 9am Monday US send is 6pm Dubai on the wrong day. You want journeys that match a Sunday–Thursday team.",
    work: "The ESP you already pay for, events you can defend, and quiet hours. We will not add 40 leftover tags.",
    region:
      "Ramadan hours and Friday-Saturday weekends are in the brief if you care. We ask. We do not invent a “Gulf journey” template.",
  },
  "google-analytics-setup": {
    h1: "GA4 with UAE consent reality — events you can defend",
    buyer:
      "Not 40 tags from a leftover GTM dump. You want a small event set a marketer in Dubai can explain.",
    work: "GA4, the conversions that matter, and a consent story you can live with. We delete the junk tags we can prove are junk.",
    region:
      "Consent expectations differ by counsel, not by a blog post. We implement what you approve. We do not claim a legal opinion.",
  },
  "cms-integration": {
    h1: "A CMS a Dubai marketing lead can edit without paging engineering",
    buyer:
      "Every Thursday request for a hero swap is a smell. You want a CMS your lead can use and a preview that matches prod.",
    work: "The CMS you chose, roles, and the templates that matter. We will not invent a custom CMS if a boring one works.",
    region:
      "Arabic fields later, English first. Gulf marketers will add the second language under deadline; the schema should not assume short English only.",
  },
  "third-party-api-integration": {
    h1: "The third-party you already signed — sandbox, retries, written failure",
    buyer:
      "The contract exists. The weekend integration does not. You want retries and a failure mode that is not a WhatsApp to the vendor.",
    work: "Sandbox, mapping, idempotency, go-live checklist. We read the vendor’s docs. We do not guess.",
    region:
      "UAE banks and logistics APIs are slow to sandbox. We put that in the timeline. Gulf vendors vary; the checklist does not.",
  },
  "authentication-setup": {
    h1: "Auth that survives an enterprise SSO ask from a UAE group",
    buyer:
      "MFA on. Passwords not in a sheet. The first enterprise deal in the UAE will ask for SSO. Building that later is how launches slip.",
    work: "The provider you already like, roles, and a staging login path. We will not leave a shared admin forever.",
    region:
      "Sponsors in Abu Dhabi, operators in Dubai, vendors in India — different roles. KSA groups ask the same SSO question. We write it into v1 when they are the buyer.",
  },
  "role-based-access-control": {
    h1: "Roles for the org chart you actually have",
    buyer:
      "Sponsor in Abu Dhabi, operators in Dubai, vendor in India. A single “admin” is how files leak.",
    work: "Named roles, audit of who can export, and a review of the scary permissions. We will not hide a god-mode for convenience.",
    region:
      "PDPL conversations are about export. RBAC is where that sentence becomes real. Same for KSA PDPL if that is the tenant.",
  },
  "database-setup": {
    h1: "A database with backups and a region you can point at in a PDPL talk",
    buyer:
      "We pick it with you. A mystery host is how reviews fail. You want backups and a restore you have rehearsed.",
    work: "Engine, region, backups, access. Staging first. We will not put production on a personal account.",
    region:
      "UAE and Gulf counsel ask “where.” The answer is a region name, not “the cloud.” India remains available when that is the right trade.",
  },
  "cloud-deployment": {
    h1: "Vercel, AWS, or the cloud UAE IT already approved",
    buyer:
      "Staging first, then a rollback you have rehearsed. A hero deploy on Friday afternoon is not a plan.",
    work: "The cloud you named, environments, and monitoring on the load-bearing paths. We will not surprise you with a new vendor.",
    region:
      "Some Gulf IT lists are short. We work inside them. Travel for a go-live when the room helps. GST window written down.",
  },
  "startup-mvp": {
    h1: "A Hub71 or in5 MVP with one metric — we cut the rest",
    buyer:
      "We will cut the marketplace-plus-AI-plus-app fantasy. You want one hypothesis you can demo in GST.",
    work: "Cut list, repo, weekly demos. Typical focused v1 is weeks if you can decide. No equity-only deals.",
    region:
      "Riyadh and Muscat founders get the same cut. Vision slides are not scope. Book a call if you want a named counterpart.",
  },
  "founder-tech-partner": {
    h1: "A founder in Dubai gets a named counterpart, not a rotating bench",
    buyer:
      "Weekly demos in GST. Direct access to the people doing the work. You are not buying a logo wall.",
    work: "A written window, a backlog with cut lines, and one metric. We will say no to staff-augmentation without scope.",
    region:
      "Gulf founders who travel Sunday–Thursday still get GST overlap. We will not book you into a US morning as default.",
  },
  "product-strategy": {
    h1: "Two or three written bets — not a 12-week strategy that never touches the repo",
    buyer:
      "We will not sell a slide that never becomes a ticket. You want bets you can demo.",
    work: "A short, opinionated read, then the first slice in the repo if you want us to build. We decline slide-only work when it is theatre.",
    region:
      "UAE and Gulf boards like decks. We still write cut lines. If the board only wants a deck, we are the wrong call.",
  },
  "product-consulting": {
    h1: "A short read of the product before you hire a 20-person Business Bay agency",
    buyer:
      "Useful before you spend. We will tell you if the bottleneck is the offer, the flow, or the team.",
    work: "A written note with decisions. Optional build after. We do not pad consulting to fill a quarter.",
    region:
      "Dubai agencies sell presence. We sell an opinion you can act on this month. Same for Riyadh and Doha buyers who ask.",
  },
  "tech-consulting": {
    h1: "Architecture advice you can act on this month",
    buyer:
      "We decline work that is only a slide. You want a decision: host, auth, kill switch, the boring parts.",
    work: "A one-sitting architecture for the next two quarters. Names and no’s. Optional implementation after.",
    region:
      "PDPL and group-IT constraints in the UAE and KSA belong in the first sitting, not as a footnote on slide 40.",
  },
  "saas-launch-partner": {
    h1: "Launch the UAE SaaS with billing, auth, and a page that books a call",
    buyer:
      "Same team. The launch is not a conference booth. It is a checkout and a calendar link.",
    work: "Billing, auth, landing page, and the first paid path. We cut the feature list that hides a missing offer.",
    region:
      "AED and VAT on day one if you sell in the UAE. Gulf expansion is a currency and data-map conversation, not a second logo.",
  },
  "prototype-to-product": {
    h1: "Take the Figma or no-code demo you showed at GITEX and make it a repo",
    buyer:
      "Someone has to maintain it after the booth. You want a codebase, not a prototype hostage.",
    work: "Keep the flows that worked. Replace the rest. Tests, hosting, a named owner. We will not wrap the prototype and leave.",
    region:
      "GITEX, Leap, and smaller Gulf events produce the same leftover demo. The work is the week after. GST delivery.",
  },
  "idea-to-mvp": {
    h1: "From a WhatsApp voice note to a scoped MVP",
    buyer:
      "We write the cut list before we write code. Founders in Dubai send voice notes. That is fine. A 40-item roadmap is not.",
    work: "One hypothesis, a written scope, a repo. Weekly demos. We will cut the rest out loud.",
    region:
      "Muscat and Sharjah founders get the same discipline. We do not staff a vision. We staff a slice.",
  },
  "product-roadmap-planning": {
    h1: "A roadmap that fits a Sunday–Thursday team and a real budget",
    buyer:
      "Dates we will defend. A roadmap that assumes a US week and a 20-person team is fiction.",
    work: "Two or three bets, cut lines, and the metric for each. We will not produce a 12-month mural.",
    region:
      "UAE holidays and Ramadan capacity belong on the calendar if they change your team. We ask. We do not guess.",
  },
  "software-architecture-planning": {
    h1: "A one-sitting architecture: auth, backups, kill switches",
    buyer:
      "The boring parts are the ones that fail reviews. You want them named for the next two quarters.",
    work: "Auth, data, deploy, and the failure modes. Written. Optional build after. We decline slide-only theatre.",
    region:
      "UAE and Gulf IT reviews start with region and access. Those sentences go in sitting one.",
  },
  "end-to-end-product-design-development": {
    h1: "Design and build in one pod for a UAE launch — no mystery frontend shop",
    buyer:
      "Figma without frontend is how projects stall after GITEX. You want one team from the first screen to the repo.",
    work: "The screens that convert, then the code. Book a call on the page. Weekly demos. Cut lines in writing.",
    region:
      "English first, room for Arabic, AED honesty. Gulf buyers get the same pod. We will not split design to a local art shop and hope.",
  },
};

function hashIndex(seed, modulo) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % modulo;
}

function pickShape(slug, title) {
  const unique = META_TITLE_SHAPES.map((shape) => shape(title));
  const start = hashIndex(slug, unique.length);
  const ordered = [...unique.slice(start), ...unique.slice(0, start)];
  return ordered[0];
}

function wordCount(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function gulfLens(categorySlug) {
  return CATEGORY_GULF_LENS[categorySlug] ?? CATEGORY_GULF_LENS.build;
}

/**
 * @param {import("@/content/services").SERVICES[number]} service
 */
export function getUaeServiceLanding(service) {
  const hook = LANDING_HOOKS[service.slug];
  if (!hook) {
    throw new Error(`Missing UAE landing hook for ${service.slug}`);
  }

  const category = getCategoryBySlug(service.categorySlug);
  const uae = getUaeServiceCopy(service);
  const seed = generateServiceSeed(service, category);
  const playbook = getServicePlaybook(service.slug, service, category);
  const catalogCopy = SERVICE_PAGE_COPY[service.slug];
  const lens = gulfLens(service.categorySlug);
  const path = getUaeServicePath(service);
  const angle = SLUG_ANGLES[service.slug] ?? uae.angle;

  const lede = lintText(
    `${hook.h1.replace(/\.$/, "")}. ${angle} Remote studio, ${UAE.phoneDisplay}, ${UAE.timezoneLabel}. We travel when a room is faster than another deck.`
  );

  const gst = lintText(
    `${service.title} for a UAE or Gulf buyer runs on ${UAE.timezoneLabel}, Sunday to Thursday. Typical first slice: ${seed.timeline}. We start from ${seed.tools.join(", ")} unless you already standardized. ${seed.contrarian} ${lens.money}.`
  );

  const data = lintText(
    `${lens.data}. ${seed.wontDo} Working language is English. Bilingual UI is a layout problem we will reserve for; native Arabic writing is yours or a specialist we can introduce. ${lens.buyers}.`
  );

  const start = lintText(
    `Book a 30-minute call. We will tell you if ${service.title.toLowerCase()} is the wrong slice. If we continue, you get a written scope, weekly demos, and the work in your repo. ${catalogCopy?.subhead ?? service.subhead} Remote studio, no invented Dubai address, travel when a workshop is the faster path.`
  );

  const playbookIntro = playbook?.intro
    ? lintText(
        `On the global catalog this work is framed as: ${playbook.intro} The geo page adds the GST week, ${UAE.phoneDisplay}, and the Gulf constraints above — it is not a city-name swap of that paragraph.`
      )
    : lintText(
        `${service.hero} That is the global promise. This page is the UAE and Gulf delivery of the same work.`
      );

  let body = [
    lintText(hook.buyer),
    lintText(hook.work),
    lintText(hook.region),
    playbookIntro,
    gst,
    data,
    start,
  ];

  const points = [
    {
      title: lintText("GST hours, +971 line"),
      body: lintText(
        `Sunday–Thursday by default. Call ${UAE.phoneDisplay} or book a slot. ${service.title} is scoped in English and demoed in ${UAE.timezoneLabel}.`
      ),
    },
    {
      title: lintText("Your repo, your cloud"),
      body: lintText(
        `${seed.tools[0]} unless the audit says otherwise. ${lens.data}`
      ),
    },
    {
      title: lintText("Gulf without doorway URLs"),
      body: lintText(
        `This is the canonical geo page for ${service.title}. Country hubs on /gulf explain KSA, Qatar, Kuwait, Bahrain, and Oman. We do not clone this URL once per capital.`
      ),
    },
  ];

  const faqs = [
    {
      q: lintText(`Do you take UAE and Gulf clients for ${service.title}?`),
      a: lintText(
        `Yes. ${uae.faq.a} The phone is ${UAE.phoneDisplay}. We will not invent a walk-in office.`
      ),
    },
    {
      q: lintText(`How is this different from the global ${service.title} page?`),
      a: lintText(
        `The catalog page at ${service.path} is the global offer. This URL is the UAE and Gulf delivery: GST week, PDPL/data map, AED/VAT, WhatsApp, bilingual UI caveats, and country hubs. Same team, different search intent.`
      ),
    },
    {
      q: lintText(`Will you build ${service.title} as a Riyadh-only or Doha-only microsite?`),
      a: lintText(
        `No. That is a doorway set. Read the country hub for local context, then use this landing. If a local entity is a procurement gate, say so on the call.`
      ),
    },
    {
      q: lintText(`What will you not do on ${service.title}?`),
      a: lintText(
        `${seed.wontDo} We also will not claim Arabic fluency or auto-translate legal copy.`
      ),
    },
    uae.faq,
  ];

  const related = getRelatedServices(service.categorySlug, service.slug, 6).map(
    (item) => ({
      title: item.title,
      path: getUaeServicePath(item),
      catalogPath: item.path,
    })
  );

  const extra = lintText(
    `${service.title} stays one URL for UAE and Gulf searchers. We will not publish a Riyadh clone, a Doha clone, or a “best in Dubai Abu Dhabi Sharjah” doorway. Country hubs on /gulf explain local week, money, and data rules. This page is the work: ${angle}`
  );
  const counted = () =>
    wordCount([...body, ...points.map((point) => point.body)].join(" "));
  if (counted() < 400) {
    body = [...body, extra];
  }

  const metaTitle = pickShape(service.slug, service.title);
  const metaDescription = lintText(
    `${service.title} for UAE and Gulf teams: ${angle} ${UAE.phoneDisplay}, GST hours, written scope, ship in your repo. Book a call.`
  );

  const keywords = [
    `${service.title} UAE`,
    `${service.title} Dubai`,
    `${service.title} Gulf`,
    `${service.title} GCC`,
    "Futurebits",
    UAE.cities[0],
    "Abu Dhabi",
    category?.title ?? "Services",
  ];

  return {
    path,
    catalogPath: service.path,
    slug: service.slug,
    categorySlug: service.categorySlug,
    categoryTitle: service.categoryTitle,
    title: service.title,
    h1: lintText(hook.h1),
    lede,
    body,
    points,
    faqs,
    related,
    metaTitle,
    metaDescription,
    keywords,
    angle: lintText(angle),
    themeKey: service.categorySlug,
    wordCount: wordCount([...body, ...points.map((point) => point.body)].join(" ")),
  };
}

export function getAllUaeServiceLandings() {
  return SERVICES.map((service) => getUaeServiceLanding(service));
}

export function getUaeServiceLandingBySlugs(categorySlug, serviceSlug) {
  const service = SERVICES.find(
    (item) => item.categorySlug === categorySlug && item.slug === serviceSlug
  );
  if (!service) return null;
  return getUaeServiceLanding(service);
}

export function countLandingWords(landing) {
  return landing.wordCount;
}
