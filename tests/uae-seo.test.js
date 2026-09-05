import assert from "node:assert/strict";
import { describe, it } from "node:test";

import sitemap, { SITEMAP_FROZEN_LASTMOD } from "../src/app/sitemap.js";
import { COMPANY, ROUTES, SITE_URL } from "../src/config/site.js";
import { SERVICES } from "../src/content/services.js";
import {
  AREA_SERVED,
  getAllUaeServiceCopy,
  getUaePage,
  getUaePageKeyForPath,
  getUaeServicePath,
  parseUaeServicePath,
  UAE_PAGE_KEYS,
  UAE_PATHS,
} from "../src/content/uae.js";
import { getAllUaeServiceLandings } from "../src/content/uae-service-landings.js";
import { GULF_COUNTRIES, GULF_PATHS } from "../src/content/gulf.js";
import { getMarkdownForPath } from "../src/lib/agent-markdown.js";
import { resolveCategoryThemeSlug } from "../src/app/services/themeTokens.js";

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

describe("UAE SEO footprint", () => {
  it("keeps the four vertical/hub geo URLs", () => {
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
  });

  it("exposes exactly one dedicated geo landing per catalog service", () => {
    const landings = getAllUaeServiceLandings();
    assert.equal(landings.length, SERVICES.length);
    assert.ok(landings.length >= 80);

    const paths = landings.map((item) => item.path);
    assert.equal(new Set(paths).size, paths.length);

    for (const service of SERVICES) {
      const expected = `/uae/services/${service.categorySlug}/${service.slug}`;
      assert.equal(getUaeServicePath(service), expected);
      assert.ok(paths.includes(expected), expected);
    }
  });

  it("does not create 90×country doorway URLs", () => {
    const landings = getAllUaeServiceLandings();
    const doorway = GULF_COUNTRIES.flatMap((country) =>
      SERVICES.map((service) => `/gulf/${country.slug}/${service.slug}`)
    );
    const landingPaths = new Set(landings.map((item) => item.path));
    for (const path of doorway) {
      assert.equal(landingPaths.has(path), false);
    }

    const urls = sitemap().map((entry) => entry.url);
    for (const path of doorway) {
      assert.equal(urls.includes(`${SITE_URL}${path}`), false);
    }

    const cityDoorway = ["dubai", "abu-dhabi", "riyadh", "doha"].flatMap((city) =>
      SERVICES.map((service) => `/uae/${city}/${service.slug}`)
    );
    for (const path of cityDoorway) {
      assert.equal(urls.includes(`${SITE_URL}${path}`), false);
    }
  });

  it("writes unique titles, H1s, and 400+ word bodies", () => {
    const landings = getAllUaeServiceLandings();
    const titles = landings.map((item) => item.metaTitle);
    const h1s = landings.map((item) => item.h1);
    const bodies = landings.map((item) => item.body.join("\n"));

    assert.equal(new Set(titles).size, titles.length);
    assert.equal(new Set(h1s).size, h1s.length);
    assert.equal(new Set(bodies).size, bodies.length);

    for (const landing of landings) {
      assert.ok(
        landing.wordCount >= 400,
        `${landing.slug} has ${landing.wordCount} words`
      );
      assert.doesNotMatch(
        landing.h1,
        /Best .+ in Dubai Abu Dhabi Riyadh/
      );
      assert.match(landing.metaTitle, /Futurebits/);
      assert.match(landing.metaDescription, /UAE|Gulf|GST|\+971/i);
    }

    const copies = getAllUaeServiceCopy();
    const angles = copies.map((item) => item.angle);
    assert.equal(new Set(angles).size, angles.length);
  });

  it("lists every catalog service on the UAE hub via geo paths", () => {
    const hub = getUaePage("hub");
    assert.equal(hub.serviceCount, SERVICES.length);
    const listed = hub.categories.flatMap((category) =>
      category.services.map((service) => service.path)
    );
    assert.equal(listed.length, SERVICES.length);
    assert.ok(listed.every((path) => path.startsWith("/uae/services/")));
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

  it("includes geo URLs in the sitemap with a frozen lastmod", () => {
    assert.equal(SITEMAP_FROZEN_LASTMOD, "2026-09-05");
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    for (const path of Object.values(UAE_PATHS)) {
      assert.ok(urls.includes(`${SITE_URL}${path}`), path);
    }
    for (const path of Object.values(GULF_PATHS)) {
      assert.ok(urls.includes(`${SITE_URL}${path}`), path);
    }
    for (const service of SERVICES) {
      assert.ok(
        urls.includes(`${SITE_URL}${getUaeServicePath(service)}`),
        getUaeServicePath(service)
      );
    }

    const geoEntries = entries.filter((entry) =>
      entry.url.includes("/uae/services/")
    );
    assert.ok(geoEntries.length >= 80);
    for (const entry of geoEntries) {
      assert.equal(entry.lastModified.toISOString().startsWith("2026-09-05"), true);
    }
  });

  it("emits substantial markdown for hubs and geo landings", () => {
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

    const geo = getMarkdownForPath(
      "/uae/services/ai-automation/chatbot-development"
    );
    assert.ok(geo);
    assert.ok(wordCount(geo.body) >= 400);
    assert.match(geo.body, /WhatsApp/);
    assert.match(geo.body, /Canonical URL:/);

    const service = getMarkdownForPath(
      "/services/ai-automation/chatbot-development"
    );
    assert.match(service.body, /For UAE teams/);
    assert.match(service.body, /WhatsApp/);
    assert.match(service.body, /uae\/services\/ai-automation\/chatbot-development/);
  });

  it("maps paths to page keys and ships UAE JSON-LD places", () => {
    assert.equal(getUaePageKeyForPath("/uae/"), "hub");
    assert.equal(getUaePageKeyForPath("/markets/uae"), "markets");
    assert.equal(getUaePageKeyForPath("/nope"), null);
    assert.deepEqual(parseUaeServicePath("/uae/services/design/ui-ux-design"), {
      categorySlug: "design",
      serviceSlug: "ui-ux-design",
    });

    for (const key of UAE_PAGE_KEYS) {
      assert.ok(getUaePage(key)?.faqs.length >= 4);
    }

    assert.ok(
      AREA_SERVED.some((place) => place.name === "United Arab Emirates")
    );
    assert.ok(AREA_SERVED.some((place) => place.name === "Dubai"));
    assert.ok(AREA_SERVED.some((place) => place.name === "Saudi Arabia"));
    assert.ok(AREA_SERVED.some((place) => place.name === "Qatar"));
    assert.equal(COMPANY.phone, "+971585165671");
  });

  it("pairs hreflang for UAE and parent verticals", () => {
    assert.equal(ROUTES.home.languages["en-AE"], `${SITE_URL}/uae`);
    assert.equal(ROUTES.ai.languages["en-AE"], `${SITE_URL}/ai/uae`);
    assert.equal(ROUTES.uaeAi.languages.en, `${SITE_URL}/ai`);
  });

  it("keeps vertical token isolation on geo landings", () => {
    const landings = getAllUaeServiceLandings();
    for (const landing of landings) {
      const theme = resolveCategoryThemeSlug(landing.categorySlug);
      if (landing.categorySlug === "ai-automation") {
        assert.equal(theme, "ai-automation");
      } else if (landing.categorySlug === "markets-trading") {
        assert.equal(theme, "markets-trading");
      } else if (landing.categorySlug === "design") {
        assert.equal(theme, "design");
      } else {
        assert.equal(theme, "platform");
      }
    }
  });
});
