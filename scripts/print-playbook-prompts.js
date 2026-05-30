#!/usr/bin/env node
/**
 * Prints AI regeneration prompts for service playbooks.
 * Usage: node scripts/print-playbook-prompts.js [slug]
 *
 * Paste output into Cursor/Claude with CONTENT_SYSTEM_PROMPT from content-voice.js.
 * Use results to extend SERVICE_PAGE_COPY or playbook overrides in service-copy.js.
 */

import { CONTENT_SYSTEM_PROMPT } from "../src/content/content-voice.js";
import { generateServiceSeed } from "../src/content/service-content-seeds.js";
import { RAW_SERVICES, SERVICE_CATEGORIES } from "../src/content/services.js";

const slugFilter = process.argv[2];

const services = RAW_SERVICES.map(([categorySlug, slug, title]) => ({
  categorySlug,
  slug,
  title,
  category: SERVICE_CATEGORIES.find((c) => c.slug === categorySlug),
})).filter((s) => !slugFilter || s.slug === slugFilter);

console.log(CONTENT_SYSTEM_PROMPT);
console.log("\n---\n");

for (const service of services) {
  const seed = generateServiceSeed(
    { slug: service.slug, title: service.title },
    service.category
  );
  console.log(`## Regenerate: ${service.title} (${service.slug})`);
  console.log(`Category: ${service.category?.title}`);
  console.log(`Seed context (use, do not copy verbatim):`);
  console.log(JSON.stringify(seed, null, 2));
  console.log(`Output valid JSON only with keys: intro, contrarian, wontDo, chips, whoFor, problems, deliverables, process, differentiators, faqs`);
  console.log("\n---\n");
}
