import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getIndexedServiceDetails } from "../src/app/sitemap.js";
import { PRIORITY_SERVICE_SLUGS, RAW_SERVICES, SERVICES } from "../src/content/services.js";
import { SERVICE_PAGE_COPY } from "../src/content/service-copy.js";
import { missingServiceCopySlugs } from "../scripts/build-service-copy.js";

describe("service catalog coverage and sitemap indexing", () => {
  it("has SERVICE_PAGE_COPY for every RAW_SERVICES slug", () => {
    assert.deepEqual(missingServiceCopySlugs(RAW_SERVICES, SERVICE_PAGE_COPY), []);
  });

  it("includes only priority services in sitemap details", () => {
    const indexed = getIndexedServiceDetails(SERVICES);
    assert.ok(indexed.length > 0);
    assert.ok(indexed.every((service) => service.isPriority));
    assert.equal(indexed.length, PRIORITY_SERVICE_SLUGS.size);

    const excluded = SERVICES.filter((service) => !service.isPriority);
    assert.ok(excluded.length > 0);
    const indexedPaths = new Set(indexed.map((service) => service.path));
    for (const service of excluded) {
      assert.equal(indexedPaths.has(service.path), false);
    }
  });
});
