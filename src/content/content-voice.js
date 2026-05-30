/**
 * Voice rules and lint pass for AI-generated content.
 * Use CONTENT_SYSTEM_PROMPT when batch-regenerating playbooks in Cursor/Claude.
 */

export const BANNED_PHRASES = [
  /\boutcome-first\b/gi,
  /\bsenior pod\b/gi,
  /\bmeasurable outcomes?\b/gi,
  /\bproduction-grade\b/gi,
  /\bclear ownership\b/gi,
  /\bend-to-end delivery\b/gi,
  /\bworld-class\b/gi,
  /\bcutting-edge\b/gi,
  /\bleverage\b/gi,
  /\bsynerg(y|ies)\b/gi,
  /\bholistic\b/gi,
  /\brobust solution\b/gi,
  /\btailored solutions?\b/gi,
  /\bseamless(ly)?\b/gi,
  /\bcomprehensive\b/gi,
  /\butilize\b/gi,
  /\bin today's (fast-paced|digital)/gi,
  /\blook no further\b/gi,
];

export const PHRASE_REPLACEMENTS = [
  [/outcome-first/gi, "focused on what moves the number"],
  [/senior pod/gi, "one small team"],
  [/measurable outcomes/gi, "a metric you can check weekly"],
  [/production-grade/gi, "built to run in prod"],
  [/clear ownership/gi, "one team accountable"],
  [/comprehensive/gi, "full"],
  [/utilize/gi, "use"],
  [/seamlessly/gi, "without breaking flow"],
  [/seamless/gi, "smooth"],
  [/leverage/gi, "use"],
];

export const CONTENT_SYSTEM_PROMPT = `You write service page copy for Futurebits (futurebits.tech) — a small design, AI, and engineering studio.

VOICE (match the site's POV strips):
- Direct, slightly opinionated. Short sentences mixed with longer ones.
- Name real tools, timelines, and failure modes. No vague agency speak.
- Include one contrarian line ("Most teams should not…") and one boundary ("We won't…").
- Say no to something. Agencies that only say yes sound generated.

NEVER USE these phrases: outcome-first, senior pod, measurable outcomes, production-grade, clear ownership, leverage, seamless, comprehensive, cutting-edge, world-class, holistic, utilize, "look no further".

STRUCTURE RULES:
- Not every list item should start the same way. Break parallel rhythm.
- Mix prose paragraphs with bullets. At least one 2-sentence intro paragraph.
- FAQs must vary: not all "How long does X take". Include stack, scope, and "what if we already have" questions.
- Process steps should NOT always be Discovery → Scope → Build → Launch. Vary labels.

REQUIRED FIELDS per service playbook (JSON):
- intro (2-3 sentences, prose)
- contrarian (1 sentence, opinionated)
- wontDo (1 sentence, boundary)
- whoFor (4 items, specific personas not generic "organizations")
- problems (5 items, concrete pain not abstract)
- deliverables (5-6 items, tangible artifacts)
- process (4 steps, varied naming)
- differentiators (3 items, each under 15 words, not parallel structure)
- faqs (5 items with varied question types)
- chips (3 short tags specific to THIS service, not generic)

Include specific tools where relevant (Stripe, Figma, OpenAI, Zendesk, etc.).
Include timeline ranges ("2-4 weeks for v1", not "fast turnaround").`;

export function lintText(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [pattern, replacement] of PHRASE_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

export function lintPlaybook(playbook) {
  if (!playbook) return playbook;

  const lint = (v) => (typeof v === "string" ? lintText(v) : v);

  return {
    ...playbook,
    intro: lint(playbook.intro),
    contrarian: lint(playbook.contrarian),
    wontDo: lint(playbook.wontDo),
    whoFor: playbook.whoFor?.map(lint),
    problems: playbook.problems?.map(lint),
    deliverables: playbook.deliverables?.map(lint),
    process: playbook.process?.map(lint),
    differentiators: playbook.differentiators?.map(lint),
    chips: playbook.chips?.map(lint),
    faqs: playbook.faqs?.map((f) => ({
      q: lint(f.q),
      a: lint(f.a),
    })),
    dominantAudience: lint(playbook.dominantAudience),
    secondaryAudiences: playbook.secondaryAudiences?.map(lint),
  };
}

export function lintServiceCopy(service) {
  return {
    ...service,
    hero: lintText(service.hero),
    subhead: lintText(service.subhead),
    metaTitle: lintText(service.metaTitle),
    metaDescription: lintText(service.metaDescription),
    shortDescription: lintText(service.shortDescription),
  };
}

export function lintBlogPost(post) {
  if (!post) return post;
  return {
    ...post,
    title: lintText(post.title),
    description: lintText(post.description),
    sections: post.sections?.map((section) => ({
      heading: lintText(section.heading),
      body: lintText(section.body),
    })),
  };
}
