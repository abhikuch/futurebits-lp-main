#!/usr/bin/env node

import path from "node:path";
import { fileURLToPath } from "node:url";

import { SERVICE_PAGE_COPY } from "../src/content/service-copy.js";
import { RAW_SERVICES } from "../src/content/services.js";

export function missingServiceCopySlugs(
  rawServices = RAW_SERVICES,
  pageCopy = SERVICE_PAGE_COPY
) {
  return rawServices
    .map(([, slug]) => slug)
    .filter((slug) => !pageCopy[slug]);
}

function checkCoverage() {
  const missing = missingServiceCopySlugs();
  if (missing.length === 0) {
    console.log(
      `SERVICE_PAGE_COPY covers ${RAW_SERVICES.length} RAW_SERVICES slugs.`
    );
    return;
  }

  console.error(`Missing SERVICE_PAGE_COPY entries: ${missing.join(", ")}`);
  process.exitCode = 1;
}

const invokedDirectly =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  checkCoverage();
}
