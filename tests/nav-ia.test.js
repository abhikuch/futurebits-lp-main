import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  NAV_ITEMS,
  NAV_OVERFLOW,
  NAV_ROOMS,
  NAV_UTILITY,
  ROUTES,
} from "../src/config/site.js";
import { getNavAccent, getNavTone, isNavItemActive } from "../src/lib/nav.js";

describe("site navigation IA", () => {
  it("keeps the logo on home, never the AI vertical", () => {
    assert.equal(ROUTES.home.path, "/");
    assert.notEqual(ROUTES.home.path, ROUTES.ai.path);
  });

  it("treats AI, Markets, and Design as the only rooms", () => {
    assert.deepEqual(
      NAV_ROOMS.map((item) => item.label),
      ["AI", "Markets", "Design"]
    );
    assert.deepEqual(
      NAV_ROOMS.map((item) => item.url),
      ["/ai", "/markets", "/design"]
    );
  });

  it("keeps About as utility and parks the rest in overflow", () => {
    assert.deepEqual(
      NAV_UTILITY.map((item) => item.label),
      ["About"]
    );
    assert.deepEqual(
      NAV_ITEMS.map((item) => item.label),
      ["AI", "Markets", "Design", "About"]
    );
    assert.deepEqual(
      NAV_OVERFLOW.map((item) => item.label),
      ["Contact", "Services", "Blog", "UAE"]
    );
    for (const peer of ["UAE", "Gulf", "Services", "Blog", "Contact"]) {
      assert.equal(
        NAV_ITEMS.some((item) => item.label === peer),
        false,
        `${peer} must not sit as a primary peer`
      );
    }
  });

  it("marks rooms from vertical and in-tree service paths", () => {
    assert.equal(isNavItemActive("/ai", "/ai"), true);
    assert.equal(isNavItemActive("/ai/uae", "/ai"), true);
    assert.equal(isNavItemActive("/services/ai-automation", "/ai"), true);
    assert.equal(
      isNavItemActive("/services/ai-automation/chatbot-development", "/ai"),
      true
    );
    assert.equal(isNavItemActive("/design", "/design"), true);
    assert.equal(isNavItemActive("/services/design", "/design"), true);
    assert.equal(
      isNavItemActive("/uae/services/design/ui-ux-design", "/design"),
      true
    );
    assert.equal(isNavItemActive("/markets/uae", "/markets"), true);
    assert.equal(isNavItemActive("/", "/ai"), false);
    assert.equal(isNavItemActive("/about", "/ai"), false);
    assert.equal(isNavItemActive("/uae", "/ai"), false);
    assert.equal(isNavItemActive("/services", "/ai"), false);
    assert.equal(isNavItemActive("/about", "/about"), true);
  });

  it("resolves isolated nav tones without crossing palettes", () => {
    assert.equal(getNavTone("/"), "studio");
    assert.equal(getNavTone("/about"), "studio");
    assert.equal(getNavTone("/uae"), "studio");
    assert.equal(getNavTone("/contact"), "studio");
    assert.equal(getNavTone("/ai"), "ai");
    assert.equal(getNavTone("/ai/uae"), "ai");
    assert.equal(getNavTone("/services/ai-automation"), "ai");
    assert.equal(getNavTone("/markets"), "markets");
    assert.equal(getNavTone("/services/markets-trading"), "markets");
    assert.equal(getNavTone("/design"), "design");
    assert.equal(getNavTone("/services/design/ui-ux-design"), "design");
    assert.equal(getNavTone("/services/build"), "platform");

    assert.equal(getNavAccent("ai"), "#01B0EA");
    assert.equal(getNavAccent("markets"), "#7BC3D8");
    assert.equal(getNavAccent("design"), "#FFFFFF");
    assert.equal(getNavAccent("platform"), "#F5B942");
    assert.equal(getNavAccent("studio"), "#FFFFFF");
    assert.notEqual(getNavAccent("markets"), "#01B0EA");
    assert.notEqual(getNavAccent("design"), "#01B0EA");
  });

  it("throws on an unknown nav tone", () => {
    assert.throws(
      () => getNavAccent(/** @type {never} */ ("unknown")),
      /Unhandled union member/
    );
  });
});
