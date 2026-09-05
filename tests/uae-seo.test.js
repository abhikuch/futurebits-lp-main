import assert from "node:assert/strict";
import { describe, it } from "node:test";

import sitemap from "../src/app/sitemap.js";
import { COMPANY, ROUTES, SITE_URL } from "../src/config/site.js";
import { SERVICES } from "../src/content/services.js";
import {
  AREA_SERVED,
  getAllUaeServiceCopy,
  getUaePage,
  getUaePageKeyForPath,
  UAE_PAGE_KEYS,
  UAE_PATHS,
} from "../src/content/uae.js";
import { getMarkdownForPath } from "../src/lib/agent-markdown.js";

describe("UAE SEO footprint", () => {
  it("exposes exactly four geo URLs, not a 90-URL doorway set", () => {
    assert.deepEqual(Object.values(UAE_PATHS).sort(), [
      "/ai/uae",
      "/design/uae",
      "/markets/uae",
      "/uae",
    ]);
    assert.equal(ROUTES.uae.path, "/uae");
    assert.equal(ROUTES.uaeAi.path, "/ai/uae");
    assert.equal(ROUTES.uaeMarkets.path, "/markets/uae");
    assert.equal(ROUTES.uaeDesign.path, "/design/uae");

    const geoServicePaths = SERVICES.map(
      (service) => `/uae/${service.slug}`
    );
    const routePaths = Object.values(ROUTES).map((route) => route.path);
    for (const path of geoServicePaths) {
      assert.equal(routePaths.includes(path), false);
    }
  });

  it("lists every catalog service on the UAE hub with unique angles", () => {
    const hub = getUaePage("hub");
    assert.equal(hub.serviceCount, SERVICES.length);
    assert.ok(hub.serviceCount >= 80);

    const copies = getAllUaeServiceCopy();
    assert.equal(copies.length, SERVICES.length);
    const angles = copies.map((item) => item.angle);
    assert.equal(new Set(angles).size, angles.length);
  });

  it("keeps vertical UAE pages on a single category", () => {
    assert.deepEqual(
      getUaePage("ai").categories.map((category) => category.slug),
      ["ai-automation"]
    );
    assert.deepEqual(
      getUaePage("markets").categories.map((category) => category.slug),
      ["markets-trading"]
    );
    assert.deepEqual(
      getUaePage("design").categories.map((category) => category.slug),
      ["design"]
    );
  });

  it("includes the four UAE URLs in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const path of Object.values(UAE_PATHS)) {
      assert.ok(urls.includes(`${SITE_URL}${path}`), path);
    }
    assert.equal(
      urls.some((url) => /\/uae\/[a-z0-9-]+$/.test(url) && !url.endsWith("/ai/uae")),
      false
    );
  });

  it("emits substantial markdown for UAE pages and service UAE notes", () => {
    const hub = getMarkdownForPath("/uae");
    assert.ok(hub);
    assert.ok(hub.body.length > 4000);
    assert.match(hub.body, /Chatbot Development/);
    assert.match(hub.body, /\+971/);
    assert.match(hub.body, /GST/);

    const ai = getMarkdownForPath("/ai/uae");
    assert.ok(ai);
    assert.match(ai.body, /WhatsApp/);
    assert.doesNotMatch(ai.body, /DIFC and ADGM desks, prop shops/);

    const service = getMarkdownForPath(
      "/services/ai-automation/chatbot-development"
    );
    assert.match(service.body, /For UAE teams/);
    assert.match(service.body, /WhatsApp/);
  });

  it("maps paths to page keys and ships UAE JSON-LD", () => {
    assert.equal(getUaePageKeyForPath("/uae/"), "hub");
    assert.equal(getUaePageKeyForPath("/markets/uae"), "markets");
    assert.equal(getUaePageKeyForPath("/nope"), null);

    for (const key of UAE_PAGE_KEYS) {
      assert.ok(getUaePage(key)?.faqs.length >= 4);
    }

    assert.ok(
      AREA_SERVED.some((place) => place.name === "United Arab Emirates")
    );
    assert.ok(
      AREA_SERVED.some((place) => place.name === "Dubai")
    );
    assert.equal(COMPANY.phone, "+971585165671");
  });

  it("pairs hreflang for UAE and parent verticals", () => {
    assert.equal(ROUTES.home.languages["en-AE"], `${SITE_URL}/uae`);
    assert.equal(ROUTES.ai.languages["en-AE"], `${SITE_URL}/ai/uae`);
    assert.equal(ROUTES.uaeAi.languages.en, `${SITE_URL}/ai`);
  });
});
