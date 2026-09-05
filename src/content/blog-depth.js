/**
 * Extra editorial sections for each blog post.
 * Keeps the 12 posts from reading as thin, four-block programmatic pages.
 * Bump CONTENT_UPDATED_AT in site.js when this file changes.
 */

export const BLOG_DEPTH_UPDATED_AT = "2026-09-04";

export const BLOG_DEPTH = {
  "website-ux-audit-cost-guide": {
    readMinutes: 13,
    sections: [
      {
        heading: "A sample two-week audit schedule",
        body: "Week one is instrumentation and journey mapping: analytics access, session recordings, and the three flows that already carry paid traffic. Week two is the write-up: ranked findings, annotated screens, and a backlog your engineers can estimate. If a vendor cannot describe those two weeks without a discovery workshop, they are selling a slide deck.",
      },
      {
        heading: "What belongs in the deliverable, and what does not",
        body: "A useful audit names the page, the user action, the evidence, and the change. \"Hero is weak\" is not a finding. \"Signup CTA sits below the fold on 390px viewports; 28% of paid mobile sessions never reach it\" is a finding. Skip persona posters, mood boards, and competitive grids that do not change a ticket.",
      },
      {
        heading: "How to compare quotes without buying theater",
        body: "Ask each firm for one redacted sample, the number of recorded sessions they will watch, and whether implementation is in scope. A $4k audit that ends in Figma comments you already knew is more expensive than an $8k audit that ships the first three fixes. Price the backlog, not the PDF page count.",
      },
    ],
  },
  "rag-vs-fine-tuning-knowledge-base": {
    readMinutes: 14,
    sections: [
      {
        heading: "A concrete decision table for v1",
        body: "If documents change weekly, start with retrieval. If you need the model to speak in a locked output schema, add constrained decoding or a small adapter later. If legal requires a citation on every answer, fine-tuning alone will not get you there. Write those three rules on the kickoff doc so architecture debates do not restart every sprint.",
      },
      {
        heading: "Chunking and metadata beat model shopping",
        body: "Most \"the model is wrong\" tickets are retrieval misses: 2,000-token blobs with no heading, no product line, and no last-updated field. Split on document structure, store source URL and owner, and reject chunks that have no title. You will fix more answers this way than by swapping vendors.",
      },
      {
        heading: "What to measure before you call it production",
        body: "Keep a set of 50 real questions with expected sources. Score answer faithfulness, citation match, and \"I don't know\" rate every week. If the I-don't-know rate is near zero, the system is guessing. If citation match is below 80% on the gold set, do not put it on a customer channel.",
      },
    ],
  },
  "ai-chatbot-customer-support-guide": {
    readMinutes: 13,
    sections: [
      {
        heading: "Pick channels after you pick intents",
        body: "Website widget, email draft, and Zendesk sidebar are three different products. A bot that answers \"where is my order\" in chat should not also rewrite refund policy emails on day one. Ship one channel with one owner, then copy the same retrieval index to the next surface.",
      },
      {
        heading: "Confidence, refusal, and the transcript you hand off",
        body: "Show the user the source, or escalate. Do not invent a third state called \"maybe.\" When a human takes over, pass the last six turns, the articles the bot cited, and the user identifier. Agents who have to re-ask the order number will turn the bot off within a month.",
      },
      {
        heading: "A 30-day launch checklist",
        body: "Days 1–7: ticket sample and intent list. Days 8–14: retrieval over the help center, plus a 40-ticket eval set. Days 15–21: shadow mode next to live chat, no customer-visible answers. Days 22–30: one intent live with a kill switch and a weekly CSAT review. Expand only when deflection is real and escalation is clean.",
      },
    ],
  },
  "saas-landing-page-conversion-checklist": {
    readMinutes: 12,
    sections: [
      {
        heading: "Write the first screen as a sales conversation",
        body: "Headline: who it is for and the outcome. Subhead: the mechanism in one sentence. Proof: a named customer or a number. CTA: one verb that matches the ad they clicked. If any of those four is missing, do not spend the next week debating illustration style.",
      },
      {
        heading: "Form friction you can measure this week",
        body: "Count fields, required fields, and the time to first input on mobile. A demo form that asks for company size, tech stack, and a phone number before a visitor has seen pricing will lose the same people your ads just paid for. Start with email plus one qualifier. Add fields only after you see junk volume.",
      },
      {
        heading: "A 90-minute review you can run without a redesign",
        body: "Record three first-time visits on a phone. Note where they pause, where they pinch-zoom, and whether they ever reach the form. Then check LCP on a mid-range Android and the first paint of your hero image. Most \"conversion problems\" in that hour are a buried CTA, a 3MB hero, or a headline that describes the company instead of the job.",
      },
    ],
  },
  "ai-sales-agents-what-works": {
    readMinutes: 13,
    sections: [
      {
        heading: "Where CRM writes go wrong",
        body: "Agents that create contacts, overwrite titles, or close tickets without an idempotency key will poison the pipeline. Require a dry-run log for a week: proposed field, old value, new value, source. A human approves the first 100 writes. After that, auto-write only the fields you already trust.",
      },
      {
        heading: "A safe first workflow: post-demo follow-up",
        body: "Inputs are a transcript, the opportunity record, and your one-pager. Output is a draft email plus three CRM notes, never a send. Reps edit the draft. You measure time-to-send and meeting-to-next-step rate, not emails generated. That workflow has a clear owner and a clear undo.",
      },
      {
        heading: "Kill criteria before you expand scope",
        body: "Stop the agent if reply quality complaints hit two in a week, if fabricated case studies appear once, or if activity volume rises while meetings stay flat. Write those rules in the kickoff. Teams that skip kill criteria keep paying for a noisy intern that nobody wants to turn off.",
      },
    ],
  },
  "excel-automation-dashboard-guide": {
    readMinutes: 12,
    sections: [
      {
        heading: "Find the real source of truth before you pick a chart library",
        body: "List every spreadsheet that leadership treats as official. For each one, name the upstream system, the person who pastes, and the Friday ritual. Automation fails when you rebuild the chart and leave three people exporting CSVs into a shared drive. The first deliverable is a pipeline, not a color palette.",
      },
      {
        heading: "A side-by-side month that prevents a revolt",
        body: "Run the old workbook and the new dashboard for four closes. Publish a one-page variance log: field, old number, new number, reason. Finance will not retire Excel because you promised accuracy. They will retire it when the variance log is boring.",
      },
      {
        heading: "Access, exports, and the 2am request",
        body: "Role-based views, a scheduled PDF for the people who will never log in, and a CSV export that matches the columns they already use. If the dashboard cannot answer \"send me last month as a file,\" it will lose to email. Build that export on day one, not as a phase-two wish.",
      },
    ],
  },
  "design-systems-when-you-need-one": {
    readMinutes: 11,
    sections: [
      {
        heading: "The first 15 components that actually get reused",
        body: "Button, input, select, checkbox, radio, modal, toast, tabs, table, pagination, badge, avatar, dropdown, empty state, and page header. If those 15 are documented with tokens and states, most feature work stops inventing new chrome. Leave charts, marketing blobs, and one-off illustrations out of v1.",
      },
      {
        heading: "Figma and code have to share names",
        body: "A token called `color/action/primary` in Figma that ships as `--blue-600` in CSS is how systems die. Pick one naming scheme, generate both sides from it, and reject PRs that introduce a hex the token file does not know. The audit is a grep, not a workshop.",
      },
      {
        heading: "Governance that fits a team of six",
        body: "One designer and one engineer own the system for a quarter. Changes go through a short RFC in the repo, not a committee. Deprecate in code with a comment and a removal date. If nobody owns it, you do not have a system. You have a folder of components that will fork next sprint.",
      },
    ],
  },
  "mvp-vs-full-product-framework": {
    readMinutes: 13,
    sections: [
      {
        heading: "Write the cut list before you write the backlog",
        body: "For every requested feature, assign it to \"proves the hypothesis,\" \"makes the demo less embarrassing,\" or \"wait.\" Only the first group is v1. The second group gets a time box of two days total. Everything else is a note in the deferred file so stakeholders can see it was heard, not forgotten.",
      },
      {
        heading: "Architecture that can survive 100 users without a rewrite speech",
        body: "One database, one auth provider, one deploy pipeline, and background jobs you can see. Skip multi-region, custom billing engines, and an event bus you cannot operate. Document the first thing you will replace at 1,000 users. Founders sleep better when the rewrite trigger is written down.",
      },
      {
        heading: "A four-week v1 shape that still looks like a product",
        body: "Week one: auth, empty states, and the core object. Week two: the one workflow that proves the bet. Week three: the admin or ops screen you will actually use. Week four: instrumentation, a pricing page that does not lie, and a restore path. If week four is still adding features, you did not cut enough in week one.",
      },
    ],
  },
  "ai-content-generation-marketing": {
    readMinutes: 13,
    sections: [
      {
        heading: "A brand file the model can actually follow",
        body: "Banned claims, required disclaimers, product names with correct casing, and three example paragraphs that sound like you. A 40-page brand PDF is not a prompt. A 80-line markdown file with do and don't pairs is. Update it when an editor rejects the same mistake twice.",
      },
      {
        heading: "Route by risk, not by content type",
        body: "Internal brief: auto-draft, human optional. Customer email: human approve. Paid ad and homepage: human approve plus a second reader. Legal or medical claims: do not generate. Teams that apply one review rule to every asset either bottleneck everything or ship a claim they cannot defend.",
      },
      {
        heading: "Eval the output the way you eval a junior writer",
        body: "Score 20 pieces a week on factual errors, banned phrases, and edit distance from the published version. If editors are rewriting more than a third of the draft, the template is wrong or the source brief is empty. Fix the brief before you buy another model seat.",
      },
    ],
  },
  "ux-research-early-stage-startups": {
    readMinutes: 12,
    sections: [
      {
        heading: "Recruit without a research ops team",
        body: "Use your waitlist, a $50 gift card, and a 20-minute calendar link. Screen for people who have the job to be done, not people who like startups. Five sessions booked in a week beats a panel vendor quote that takes three. Record with permission and clip the moments, not the whole hour.",
      },
      {
        heading: "A script that answers one decision",
        body: "Open with the last time they tried to solve the problem. Then put the prototype in front of them and stop talking. Ask \"what would you do next\" instead of \"do you like this.\" Close by asking what would make them switch this week. That script fits a single product question. Throw it out when the question changes.",
      },
      {
        heading: "Turn notes into tickets the same day",
        body: "After each session, write one observation, one quote, and one implied change. If the same change appears three times, it is a ticket with a owner. Research that sits in a Notion page until the next offsite did not happen. The test of a session is whether the next sprint looks different.",
      },
    ],
  },
  "saas-branding-logo-vs-identity": {
    readMinutes: 11,
    sections: [
      {
        heading: "A logo brief that does not waste a week",
        body: "Name the product, the one competitor you do not want to resemble, and the three surfaces that matter: favicon, sign-in header, and invoice. Ask for dark and light marks at 16px and 120px. If the designer cannot make the mark readable at 16px, you do not have a logo. You have a poster.",
      },
      {
        heading: "When to stop at a mark and a typeface",
        body: "If you have one landing page, one product UI, and no sales deck, a mark, two typefaces, and four colors is enough. A 60-page identity book will not increase activation. Buy the book when you have five people shipping marketing assets and they keep inventing a fifth blue.",
      },
      {
        heading: "Ship the system in the repo, not only in Figma",
        body: "Tokens in CSS, a README with do and don't screenshots, and the SVG set in the same pull request as the marketing site. A brand that lives only in a shared drive will be rebuilt by the next contractor. Treat the first implementation as the source, then sync Figma to it.",
      },
    ],
  },
  "end-to-end-product-development-guide": {
    readMinutes: 13,
    sections: [
      {
        heading: "One repo, one staging URL, one weekly demo",
        body: "Design files, application code, and the deploy preview live together. Stakeholders click a URL, not a PDF. The weekly demo is a recorded walkthrough of what merged, what slipped, and what you will not do next week. That rhythm replaces status meetings that exist to hide missing software.",
      },
      {
        heading: "How decisions get made when design and engineering sit together",
        body: "The person who will implement the interaction is in the critique. If a motion or a custom chart adds two days and does not change the metric, it is cut in the room. Write the cut in the ticket. Teams that \"take it offline\" grow a second backlog of taste arguments.",
      },
      {
        heading: "When this shape is the wrong hire",
        body: "If you need a staff-augmentation bench, a brand-only engagement, or a six-month architecture study with no users, a single design-and-build pod will frustrate you. Hire that pod when you have a date, a metric, and a repo. Hire someone else when you want options, not shipped software.",
      },
    ],
  },
};
