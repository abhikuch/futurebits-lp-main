import { COMPANY } from "@/config/site";

export const ABOUT_PHONE_DISPLAY = "+971 58 516 5671";
export const ABOUT_PHONE_HREF = `tel:${COMPANY.phone}`;

export const ABOUT_STATS = [
  { label: "Engagements run end-to-end", value: "12+" },
  { label: "AI systems in production", value: "20+" },
  { label: "Trading systems live", value: "30+" },
  { label: "Operating since", value: COMPANY.founded },
];

/** @typedef {"lead" | "offset" | "split" | "close"} AboutBeliefVariant */

/** @type {readonly { variant: AboutBeliefVariant, title: string, body: string }[]} */
export const ABOUT_BELIEFS = [
  {
    variant: "lead",
    title: "One team, start to finish.",
    body:
      "Design, engineering, and AI in one small group. No outsourcing, no junior hot-swaps, no slide decks pretending to be progress. You talk to the people doing the work — the same names from the first call to the last merge.",
  },
  {
    variant: "offset",
    title: "Ship the smallest thing that proves the bet.",
    body:
      "We cut scope until one hypothesis is testable. The first useful version should land in weeks, not after a six-month discovery phase that produces a PDF nobody reads.",
  },
  {
    variant: "split",
    title: "Design clarifies. It does not decorate.",
    body:
      "We use design to force decisions: what ships, what waits, what gets cut. The brief at the end of week one should be sharper than the one that came in. Taste is assumed. The work is the thinking underneath.",
  },
  {
    variant: "close",
    title: "AI when the math works.",
    body:
      "We build production AI when deflection, speed, or quality gains are measurable. We say no when it is not. We will tell you which side you are on before you spend.",
  },
];

/** @typedef {"ai" | "markets" | "design"} AboutRoomId */

/** @type {readonly { id: AboutRoomId, href: string, kicker: string, title: string, body: string, points: readonly string[], cta: string }[]} */
export const ABOUT_ROOMS = [
  {
    id: "ai",
    href: "/ai",
    kicker: "The AI room",
    title: "Production systems. Not a demo reel.",
    body:
      "Retrieval, agents, automations, evals. We start with the smallest workflow that, if it holds, frees real hours every week. The model is the last decision, not the first.",
    points: [
      "First useful automation in 2–3 weeks when the problem is honest.",
      "We refuse work where a wrong answer costs more than a right one saves.",
      "If we cannot measure it in prod, we do not ship it.",
    ],
    cta: "Enter the AI room",
  },
  {
    id: "markets",
    href: "/markets",
    kicker: "The markets room",
    title: "Infrastructure that survives the next regime.",
    body:
      "Execution, analytics, and risk for funds, prop desks, and serious traders. Edge dies. Plumbing compounds. We bias toward boring code, realistic costs, and a kill switch a junior can hit at 2am.",
    points: [
      "Event-driven backtests with fees, slippage, and partial fills in the spec.",
      "Paper and shadow before cutover. No hero go-lives.",
      "We do not run your capital. Incentives stay clean.",
    ],
    cta: "Enter the markets room",
  },
  {
    id: "design",
    href: "/design",
    kicker: "The design room",
    title: "Screens that ship in your repo.",
    body:
      "Product design plus frontend, one team. We use design to decide what ships. Mockups are throwaways. Live prototypes and merged code are the artefact.",
    points: [
      "Every screen earns its place on activation, conversion, or retention.",
      "We default to fewer pages and fewer features. The hard work is removal.",
      "Your design system leaves stronger than it arrived. Or we ship the smallest one that earns its keep.",
    ],
    cta: "Enter the design room",
  },
];

/** @typedef {"wide" | "pair" | "full" | "cut"} AboutStepVariant */

/** @type {readonly { variant: AboutStepVariant, numeral: string, title: string, body: string }[]} */
export const ABOUT_ENGAGEMENT_STEPS = [
  {
    variant: "wide",
    numeral: "01",
    title: "Access",
    body:
      "Slack or email to the people writing the code. No ticket portal, no account manager translating you. If a question sits more than a day, something is broken and we say so.",
  },
  {
    variant: "pair",
    numeral: "02",
    title: "Written scope",
    body:
      "A one-page scope before kickoff: hypothesis, success check, out-of-scope list. You keep the page whether you hire us or not. If we cannot write it in a page, we do not understand it yet.",
  },
  {
    variant: "pair",
    numeral: "03",
    title: "Weekly demos",
    body:
      "Working software on a weekly cadence. Not status slides. If a week produced no demoable change, we treat that as a miss and say what we cut to recover.",
  },
  {
    variant: "full",
    numeral: "04",
    title: "Your repo",
    body:
      "Code lands in your repository from week one. Your review process, your CI, your branch rules. We do not hostage work in a private sandbox and toss a zip at the end.",
  },
  {
    variant: "cut",
    numeral: "05",
    title: "Cut lines",
    body:
      "What we will not do is written before we start: no staff-aug without a problem, no strategy-only retainers, no fake AI when a script is enough. The cut list is part of the contract, not a vibe.",
  },
];

export const ABOUT_FIT = {
  stay: [
    {
      title: "Founders shipping 0→1 or 1→10",
      body:
        "You need a small team that will argue with the brief and still merge code. You do not have time to manage a bench.",
    },
    {
      title: "Desks and funds",
      body:
        "You need execution, risk, or analytics that survives a real session. You want a runbook, not a pitch about alpha.",
    },
    {
      title: "Product teams",
      body:
        "You want design and frontend in one repo, weekly demos, and a sharper brief after week one.",
    },
  ],
  leave: [
    "If you need slides about digital transformation, leave.",
    "If you need a 40-person Bay bench to park headcount, leave.",
    "If you want staff-augmentation with no written problem, leave.",
    "If you want us to nod at a vague AI program, leave.",
  ],
};

export const ABOUT_PEOPLE = {
  name: "Aayush Kucheria",
  role: "AI Lead, Futurebits. Production AI, evals, applied research.",
  paragraphs: [
    "I lead AI at Futurebits. We build production systems: retrieval, agents, evals for ops, support, and product teams. The work I am proudest of: LLM behavior research, AI in healthcare, and applied modelling that actually shipped.",
    "We take engagements where AI clearly pays back. If your problem is better solved another way, we will tell you on the first call. No theatre.",
  ],
  studio:
    "The rest of the studio is a small group — roughly a dozen people — across design, engineering, and markets. You get a named counterpart. We do not rotate juniors onto your Slack. We do not publish a fake org chart.",
};

export function getAboutMarkdown({ title, description, siteUrl, path }) {
  return [
    `# ${title}`,
    "",
    description,
    "",
    `Canonical URL: ${siteUrl}${path}`,
    "",
    "## Studio",
    `${COMPANY.name} is a roughly dozen-person studio founded in ${COMPANY.founded}. One team across production AI, trading infrastructure, and product design. Not a staff-augmentation bench. Not a strategy firm that hands off.`,
    "",
    "## Three rooms",
    `- [AI](${siteUrl}/ai): production AI — retrieval, agents, automations, evals.`,
    `- [Markets](${siteUrl}/markets): execution, analytics, and risk infrastructure.`,
    `- [Design](${siteUrl}/design): product design plus frontend in your repo.`,
    "",
    "## How an engagement runs",
    "- Direct access to the people doing the work.",
    "- Written one-page scope and cut lines before kickoff.",
    "- Weekly demos of working software.",
    "- Code in your repository from week one.",
    "",
    "## Related links",
    `- [Services](${siteUrl}/services)`,
    `- [Contact](${siteUrl}/contact)`,
    `- [LLMs guidance](${siteUrl}/llms.txt)`,
    `- [Sitemap](${siteUrl}/sitemap.xml)`,
  ].join("\n");
}
