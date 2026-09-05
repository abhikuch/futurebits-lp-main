import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { CAL } from "../src/config/site.js";
import { CONTACT_VERTICALS } from "../src/lib/contact-validate.js";
import { SERVICE_CATEGORIES } from "../src/content/services.js";
import { buildCalUrl } from "../src/lib/cal.js";
import {
  getCalLinkForPath,
  getCalLinkForThemeKey,
} from "../src/lib/page-theme.js";

function calEventPath(href) {
  return new URL(href).pathname;
}

function calCampaign(href) {
  return new URL(href).searchParams.get("utm_campaign");
}

describe("Cal.com booking routes", () => {
  it("keeps a dedicated home campaign on the AI calendar event", () => {
    assert.equal(calEventPath(CAL.home), "/futurebits/ai");
    assert.equal(calCampaign(CAL.home), "home-hero");
  });

  it("keeps dedicated events for AI, Design, and Markets verticals", () => {
    assert.equal(calEventPath(CAL.ai), "/futurebits/ai");
    assert.equal(calCampaign(CAL.ai), "ai-vertical");
    assert.equal(calEventPath(CAL.design), "/futurebits/design");
    assert.equal(calCampaign(CAL.design), "design-vertical");
    assert.equal(calEventPath(CAL.markets), "/futurebits/markets");
    assert.equal(calCampaign(CAL.markets), "markets-vertical");
  });

  it("points Build and Startup Tech Partner at the build event", () => {
    assert.equal(calEventPath(CAL.build), "/futurebits/build");
    assert.equal(calCampaign(CAL.build), "build-vertical");
    assert.equal(calEventPath(CAL.startup), "/futurebits/build");
    assert.equal(calCampaign(CAL.startup), "startup-tech-partner");
  });

  it("maps service category CTAs without inheriting the AI calendar", () => {
    const bySlug = Object.fromEntries(
      SERVICE_CATEGORIES.map((category) => [category.slug, category.ctaHref])
    );

    assert.equal(bySlug.build, CAL.build);
    assert.equal(bySlug["startup-tech-partner"], CAL.startup);
    assert.equal(bySlug["ai-automation"], CAL.ai);
    assert.equal(bySlug.design, CAL.design);
    assert.equal(bySlug["markets-trading"], CAL.markets);
    assert.equal(bySlug["integrations-platform"], CAL.ai);
  });

  it("routes navbar / in-tree CTAs from pathname", () => {
    assert.equal(getCalLinkForPath("/services/build"), CAL.build);
    assert.equal(
      getCalLinkForPath("/services/build/saas-development"),
      CAL.build
    );
    assert.equal(
      getCalLinkForPath("/services/startup-tech-partner"),
      CAL.startup
    );
    assert.equal(
      getCalLinkForPath(
        "/services/startup-tech-partner/end-to-end-product-design-development"
      ),
      CAL.startup
    );

    assert.equal(getCalLinkForPath("/ai"), CAL.ai);
    assert.equal(getCalLinkForPath("/services/ai-automation"), CAL.ai);
    assert.equal(
      getCalLinkForPath("/services/ai-automation/chatbot-development"),
      CAL.ai
    );
    assert.equal(getCalLinkForPath("/design"), CAL.design);
    assert.equal(getCalLinkForPath("/services/design"), CAL.design);
    assert.equal(getCalLinkForPath("/markets"), CAL.markets);
    assert.equal(
      getCalLinkForPath("/services/markets-trading"),
      CAL.markets
    );
    assert.equal(getCalLinkForPath("/"), CAL.home);
    assert.equal(getCalLinkForPath("/uae"), CAL.ai);
    assert.equal(getCalLinkForPath("/ai/uae"), CAL.ai);
    assert.equal(getCalLinkForPath("/design/uae"), CAL.design);
    assert.equal(getCalLinkForPath("/markets/uae"), CAL.markets);
    assert.equal(
      getCalLinkForPath("/uae/services/design/ui-ux-design"),
      CAL.design
    );
    assert.equal(
      getCalLinkForPath("/uae/services/markets-trading/strategy-backtesting"),
      CAL.markets
    );
    assert.equal(
      getCalLinkForPath("/uae/services/build/saas-development"),
      CAL.build
    );
    assert.equal(getCalLinkForPath("/gulf"), CAL.ai);
    assert.equal(getCalLinkForPath("/gulf/saudi-arabia"), CAL.ai);
    assert.equal(getCalLinkForPath("/contact"), CAL.ai);
  });

  it("stamps uae- and gulf- campaign UTMs on geo CTAs", () => {
    const uaeChat = buildCalUrl(CAL.ai, {
      medium: "uae-service",
      campaign: "uae-chatbot-development",
    });
    assert.equal(
      new URL(uaeChat).searchParams.get("utm_campaign"),
      "uae-chatbot-development"
    );

    const gulfKsa = buildCalUrl(CAL.ai, {
      medium: "gulf-page",
      campaign: "gulf-saudi-arabia",
    });
    assert.equal(
      new URL(gulfKsa).searchParams.get("utm_campaign"),
      "gulf-saudi-arabia"
    );
    assert.equal(getCalLinkForPath("/blog"), CAL.ai);
  });

  it("routes the platform theme to the build calendar", () => {
    assert.equal(getCalLinkForThemeKey("platform"), CAL.build);
  });

  it("includes build in CONTACT_VERTICALS", () => {
    assert.ok(CONTACT_VERTICALS.has("build"));
  });
});

