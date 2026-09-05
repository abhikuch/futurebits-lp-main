import assert from "node:assert/strict";
import { describe, it } from "node:test";

import sitemap from "../src/app/sitemap.js";
import { ROUTES, SITE_URL } from "../src/config/site.js";
import { SERVICES } from "../src/content/services.js";
import {
  GULF_COUNTRIES,
  GULF_PAGE_KEYS,
  GULF_PATHS,
  getGulfCountrySlugs,
  getGulfPage,
  getGulfPageKeyForPath,
} from "../src/content/gulf.js";
import { getMarkdownForPath } from "../src/lib/agent-markdown.js";
import { SERVICE_HUB_THEME } from "../src/app/services/themeTokens.js";

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

describe("Gulf country hubs", () => {
  it("exposes one hub and five country pages", () => {
    assert.deepEqual(Object.values(GULF_PATHS).sort(), [
      "/gulf",
      "/gulf/bahrain",
      "/gulf/kuwait",
      "/gulf/oman",
      "/gulf/qatar",
      "/gulf/saudi-arabia",
    ]);
    assert.equal(ROUTES.gulf.path, "/gulf");
    assert.equal(ROUTES.gulfSaudiArabia.path, "/gulf/saudi-arabia");
    assert.equal(getGulfCountrySlugs().length, 5);
    assert.equal(GULF_PAGE_KEYS.includes("hub"), true);
  });

  it("writes unique substantial copy per country", () => {
    const bodies = [];
    const titles = [];
    for (const key of GULF_PAGE_KEYS) {
      const page = getGulfPage(key);
      assert.ok(page.faqs.length >= 4, key);
      const text = page.body.join(" ");
      assert.ok(wordCount(text) >= 120, `${key} body too short`);
      bodies.push(text);
      titles.push(page.title);
    }
    assert.equal(new Set(bodies).size, bodies.length);
    assert.equal(new Set(titles).size, titles.length);

    const ksa = getGulfPage("saudi-arabia");
    assert.match(ksa.body.join(" "), /Riyadh|Jeddah|PDPL|SAR/);
    const qatar = getGulfPage("qatar");
    assert.match(qatar.body.join(" "), /Doha|Lusail|famil/i);
    const kuwait = getGulfPage("kuwait");
    assert.match(kuwait.body.join(" "), /WhatsApp|Excel|Kuwait/i);
    const bahrain = getGulfPage("bahrain");
    assert.match(bahrain.body.join(" "), /VAT|Manama|CBB|Stripe/i);
    const oman = getGulfPage("oman");
    assert.match(oman.body.join(" "), /Muscat|MVP|VAT/i);
  });

  it("links services to canonical geo landings, not country clones", () => {
    const ksa = getGulfPage("saudi-arabia");
    assert.ok(ksa.featured.length >= 6);
    for (const service of ksa.featured) {
      assert.match(service.path, /^\/uae\/services\//);
      assert.doesNotMatch(service.path, /\/gulf\/saudi-arabia\//);
    }
  });

  it("maps paths and includes hubs in the sitemap", () => {
    assert.equal(getGulfPageKeyForPath("/gulf/"), "hub");
    assert.equal(getGulfPageKeyForPath("/gulf/qatar"), "qatar");
    assert.equal(getGulfPageKeyForPath("/gulf/nope"), null);

    const urls = sitemap().map((entry) => entry.url);
    for (const path of Object.values(GULF_PATHS)) {
      assert.ok(urls.includes(`${SITE_URL}${path}`), path);
    }
    assert.equal(
      urls.some((url) => /\/gulf\/[a-z-]+\/[a-z0-9-]+$/.test(url)),
      false
    );
  });

  it("emits substantial markdown for Gulf pages", () => {
    const hub = getMarkdownForPath("/gulf");
    assert.ok(hub);
    assert.ok(wordCount(hub.body) >= 300);
    assert.match(hub.body, /Saudi Arabia/);
    assert.match(hub.body, /\+971/);

    const ksa = getMarkdownForPath("/gulf/saudi-arabia");
    assert.ok(ksa);
    assert.match(ksa.body, /Riyadh/);
    assert.doesNotMatch(ksa.body, /Lusail and West Bay/);
  });

  it("keeps country hubs on the neutral theme, not a vertical palette", () => {
    for (const key of GULF_PAGE_KEYS) {
      assert.equal(getGulfPage(key).themeKey, "neutral");
    }
    assert.match(SERVICE_HUB_THEME.pageBgClass, /#060618|#080808|bg-/);
    assert.doesNotMatch(SERVICE_HUB_THEME.pageBgClass, /#01B0EA|#7BC3D8|#F5B942/);
  });

  it("does not claim a 90×6 service-per-country catalog", () => {
    assert.ok(SERVICES.length * GULF_COUNTRIES.length > 400);
    assert.equal(Object.keys(GULF_PATHS).length, 6);
  });
});
