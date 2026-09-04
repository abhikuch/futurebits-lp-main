import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { THEME_KEYS } from "../src/app/services/themeTokens.js";
import { CAL } from "../src/config/site.js";
import {
  getCalLinkForThemeKey,
  getTopicAccentTextClass,
} from "../src/lib/page-theme.js";

describe("page theme keys", () => {
  it("resolves accent class and cal link for every THEME_KEYS member", () => {
    for (const key of THEME_KEYS) {
      const accent = getTopicAccentTextClass(key);
      const calLink = getCalLinkForThemeKey(key);
      assert.equal(typeof accent, "string");
      assert.ok(accent.length > 0, `empty accent class for ${key}`);
      assert.match(calLink, /^https:\/\//, `cal link for ${key}`);
    }
  });

  it("throws on unknown theme keys", () => {
    assert.throws(
      () => getTopicAccentTextClass(/** @type {never} */ ("unknown")),
      /Unhandled union member/
    );
    assert.throws(
      () => getCalLinkForThemeKey(/** @type {never} */ ("unknown")),
      /Unhandled union member/
    );
  });

  it("routes the platform theme to the build calendar", () => {
    assert.equal(getCalLinkForThemeKey("platform"), CAL.build);
  });
});
