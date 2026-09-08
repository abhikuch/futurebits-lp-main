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
      "Design, engineering, and AI work in one small group. You talk directly to the people doing the work, from the first call to the last merge.",
  },
  {
    variant: "offset",
    title: "Ship the smallest thing that proves the bet.",
    body:
      "We cut scope until one hypothesis is testable. The proposal names the first useful version and what has been deferred.",
  },
  {
    variant: "split",
    title: "Design clarifies. It does not decorate.",
    body:
      "Design forces decisions about what ships, waits, or gets cut. The work includes the reasoning underneath the interface.",
  },
  {
    variant: "close",
    title: "AI when the math works.",
    body:
      "AI is useful when changes in speed, quality, or workload can be checked. The first scope establishes that check before a larger build.",
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
      "Retrieval, agents, automations, and evals for a narrow workflow with representative inputs. Model choice follows the workflow and its failure cases.",
    points: [
      "A test set and review path are part of the build.",
      "The cost of a wrong answer shapes the scope.",
      "Quality, latency, and cost are visible in production.",
    ],
    cta: "Enter the AI room",
  },
  {
    id: "markets",
    href: "/markets",
    kicker: "The markets room",
    title: "Infrastructure that survives the next regime.",
    body:
      "Execution, analytics, and risk for funds, prop desks, and serious traders. The work favors explicit costs, observable behavior, and controls that operators can use under pressure.",
    points: [
      "Event-driven backtests with fees, slippage, and partial fills in the spec.",
      "Paper and shadow operation provide evidence before cutover.",
      "Futurebits builds systems and does not run client capital.",
    ],
    cta: "Enter the markets room",
  },
  {
    id: "design",
    href: "/design",
    kicker: "The design room",
    title: "Screens that ship in your repo.",
    body:
      "Product design and frontend stay in the same working loop. The output can include prototypes, component decisions, and merged code.",
    points: [
      "Every screen earns its place on activation, conversion, or retention.",
      "Scope favors the journeys that affect activation, conversion, or retention.",
      "Existing components are reused and extended where they still work.",
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
      "Slack or email reaches the people writing the code and design files. Questions and decisions stay close to the work.",
  },
  {
    variant: "pair",
    numeral: "02",
    title: "Written scope",
    body:
      "A short scope records the hypothesis, success check, dependencies, and exclusions before kickoff.",
  },
  {
    variant: "pair",
    numeral: "03",
    title: "Weekly demos",
    body:
      "Working software is reviewed on a regular cadence. The update includes decisions, unresolved risks, and any scope change.",
  },
  {
    variant: "full",
    numeral: "04",
    title: "Your repo",
    body:
      "Code lands in your repository and follows your review process, CI, and branch rules.",
  },
  {
    variant: "cut",
    numeral: "05",
    title: "Cut lines",
    body:
      "The proposal records what is outside the scope and which assumptions could change it.",
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
    "Staff augmentation without a defined product problem",
    "A large bench used mainly to park headcount",
    "Strategy decks with no path to implementation",
    "An AI brief with no workflow, inputs, or owner",
  ],
};

export const ABOUT_PEOPLE = {
  name: "Aayush Kucheria",
  role: "AI Lead, Futurebits. Production AI, evals, applied research.",
  paragraphs: [
    "I lead AI at Futurebits. My work covers retrieval, agents, and evals for operations, support, and product teams, alongside LLM behavior research, healthcare AI, and applied modelling.",
    "We take on AI work with a defined workflow and a way to check whether it helped. Sometimes that review points to a simpler automation.",
  ],
  studio:
    "The studio is a small group of roughly a dozen people across design, engineering, and markets. Each engagement has a named counterpart who stays close to the work.",
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
    `${COMPANY.name} is a roughly dozen-person studio founded in ${COMPANY.founded}, working across production AI, trading infrastructure, and product design.`,
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
