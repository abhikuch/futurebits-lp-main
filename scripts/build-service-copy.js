#!/usr/bin/env node
/**
 * Coverage check and optional regenerator for SERVICE_PAGE_COPY.
 *
 * Default --check: every RAW_SERVICES slug must have a SERVICE_PAGE_COPY entry.
 * --write: rebuild SERVICE_PAGE_COPY from generateServiceSeed. Preserves MARKETS_AUDIENCE.
 *
 * Run via:
 *   node --import ./tests/register-loader.mjs scripts/build-service-copy.js
 *   npm run service-copy -- --check
 *   npm run service-copy -- --write
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { generateServiceSeed } from "../src/content/service-content-seeds.js";
import { MARKETS_AUDIENCE, SERVICE_PAGE_COPY } from "../src/content/service-copy.js";
import { RAW_SERVICES, SERVICE_CATEGORIES } from "../src/content/services.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = path.resolve(__dirname, "../src/content/service-copy.js");

const HERO_SUFFIXES = [
  ". Scoped, shipped, signed off.",
  " that holds up under real users.",
  " in your repo, with weekly demos.",
  " without the six-month discovery phase.",
];

/**
 * @param {string} title
 * @param {{ chips: string[], tools: string[], timeline: string, intro: string }} seed
 */
export function buildPageCopyFromSeed(title, seed) {
  const suffixIndex = (seed.chips[0]?.length ?? 0) % HERO_SUFFIXES.length;
  const focus = seed.tools?.length
    ? `${seed.tools[0]} over ${seed.timeline}`
    : seed.timeline;

  return {
    hero: `${title}${HERO_SUFFIXES[suffixIndex]}`,
    subhead: `We focus on ${focus}. Written scope, your stack, weekly demos. No account-manager layer.`,
    metaTitle: `${title} | Futurebits`,
    metaDescription: `${title} by Futurebits: ${focus}. Fixed-scope sprints, direct team access, ship in your repo.`,
  };
}

/**
 * @param {typeof RAW_SERVICES} rawServices
 * @param {Record<string, unknown>} pageCopy
 */
export function missingServiceCopySlugs(rawServices = RAW_SERVICES, pageCopy = SERVICE_PAGE_COPY) {
  return rawServices
    .map(([, slug]) => slug)
    .filter((slug) => !pageCopy[slug]);
}

function toJsLiteral(value, indent = 0) {
  const pad = "  ".repeat(indent);
  const padIn = "  ".repeat(indent + 1);

  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((item) => `${padIn}${toJsLiteral(item, indent + 1)}`);
    return `[\n${items.join(",\n")},\n${pad}]`;
  }

  if (typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    const entries = keys.map((key) => {
      const keyLit = /^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key);
      return `${padIn}${keyLit}: ${toJsLiteral(value[key], indent + 1)}`;
    });
    return `{\n${entries.join(",\n")},\n${pad}}`;
  }

  throw new Error(`Cannot serialize ${typeof value}`);
}

function buildGeneratedCopy() {
  /** @type {Record<string, ReturnType<typeof buildPageCopyFromSeed>>} */
  const nextCopy = {};

  for (const [categorySlug, slug, title] of RAW_SERVICES) {
    const category = SERVICE_CATEGORIES.find((item) => item.slug === categorySlug);
    if (!category) {
      throw new Error(`Unknown category for ${slug}: ${categorySlug}`);
    }
    const seed = generateServiceSeed({ slug, title }, category);
    nextCopy[slug] = buildPageCopyFromSeed(title, seed);
  }

  return nextCopy;
}

function writeServiceCopy(pageCopy) {
  const banner = `/**
 * Service page copy keyed by RAW_SERVICES slug.
 *
 * Check coverage (default):
 *   node --import ./tests/register-loader.mjs scripts/build-service-copy.js
 *   node --import ./tests/register-loader.mjs scripts/build-service-copy.js --check
 *
 * Regenerate SERVICE_PAGE_COPY from seeds (preserves MARKETS_AUDIENCE):
 *   node --import ./tests/register-loader.mjs scripts/build-service-copy.js --write
 */

export const SERVICE_PAGE_COPY = ${toJsLiteral(pageCopy)};

export const MARKETS_AUDIENCE = ${toJsLiteral(MARKETS_AUDIENCE)};
`;

  fs.writeFileSync(OUTPUT_PATH, banner);
}

function runCheck(pageCopy = SERVICE_PAGE_COPY) {
  const missing = missingServiceCopySlugs(RAW_SERVICES, pageCopy);
  if (missing.length > 0) {
    console.error("Missing SERVICE_PAGE_COPY entries:");
    for (const slug of missing) {
      console.error(`  - ${slug}`);
    }
    process.exitCode = 1;
    return false;
  }

  console.log(`SERVICE_PAGE_COPY covers ${RAW_SERVICES.length} RAW_SERVICES slugs.`);
  return true;
}

function main() {
  const args = new Set(process.argv.slice(2));
  const shouldWrite = args.has("--write");
  const shouldCheck = args.has("--check") || !shouldWrite;

  if (shouldWrite) {
    const nextCopy = buildGeneratedCopy();
    writeServiceCopy(nextCopy);
    console.log(`Wrote SERVICE_PAGE_COPY for ${Object.keys(nextCopy).length} services (MARKETS_AUDIENCE preserved).`);
    if (shouldCheck && args.has("--check")) {
      runCheck(nextCopy);
    }
    return;
  }

  if (shouldCheck) {
    runCheck();
  }
}

const invokedDirectly = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  main();
}
