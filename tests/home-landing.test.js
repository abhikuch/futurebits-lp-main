import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

import { BANNED_PHRASES } from "../src/content/content-voice.js";
import {
  HOME_BELIEFS,
  HOME_CAL,
  HOME_CLOSE,
  HOME_FEATURED_SERVICES,
  HOME_HERO,
  HOME_TRACKS,
  HOME_TRACKS_INTRO,
} from "../src/content/home.js";
import { getHomeTrackVisual } from "../src/lib/home-track-theme.js";
import { getMarkdownForPath } from "../src/lib/agent-markdown.js";

function collectCopy(value, bag = []) {
  if (typeof value === "string") {
    bag.push(value);
    return bag;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectCopy(item, bag);
    return bag;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectCopy(item, bag);
  }
  return bag;
}

function assertNoBannedVoice(text) {
  for (const pattern of BANNED_PHRASES) {
    pattern.lastIndex = 0;
    const matched = pattern.test(text);
    pattern.lastIndex = 0;
    assert.equal(matched, false, `banned voice matched ${pattern} in: ${text}`);
  }
}

describe("home landing content", () => {
  it("keeps Book a call as the primary label and tracks as the secondary", () => {
    assert.equal(HOME_HERO.primaryCta, "Book a call");
    assert.equal(HOME_HERO.secondaryCta, "See the tracks");
    assert.equal(HOME_CLOSE.title.includes("wishlist"), true);
  });

  it("uses dedicated home Cal campaigns on the correct events", () => {
    assert.equal(new URL(HOME_CAL.hero).pathname, "/futurebits/ai");
    assert.equal(new URL(HOME_CAL.hero).searchParams.get("utm_campaign"), "home-hero");
    assert.equal(new URL(HOME_CAL.ai).pathname, "/futurebits/ai");
    assert.equal(new URL(HOME_CAL.ai).searchParams.get("utm_campaign"), "home-ai");
    assert.equal(new URL(HOME_CAL.markets).pathname, "/futurebits/markets");
    assert.equal(
      new URL(HOME_CAL.markets).searchParams.get("utm_campaign"),
      "home-markets"
    );
    assert.equal(new URL(HOME_CAL.design).pathname, "/futurebits/design");
    assert.equal(
      new URL(HOME_CAL.design).searchParams.get("utm_campaign"),
      "home-design"
    );
    assert.equal(new URL(HOME_CAL.close).searchParams.get("utm_campaign"), "home-close");
  });

  it("keeps three isolated track rooms pointing at verticals", () => {
    assert.deepEqual(
      HOME_TRACKS.map((track) => track.id),
      ["ai", "markets", "design"]
    );
    assert.equal(HOME_TRACKS[0].href, "/ai");
    assert.equal(HOME_TRACKS[1].href, "/markets");
    assert.equal(HOME_TRACKS[2].href, "/design");
  });

  it("does not dump the catalog or use Browse all services as the hero CTA", () => {
    assert.ok(HOME_FEATURED_SERVICES.length <= 6);
    const blob = collectCopy({
      HOME_HERO,
      HOME_TRACKS_INTRO,
      HOME_TRACKS,
      HOME_BELIEFS,
      HOME_CLOSE,
    }).join("\n");
    assert.doesNotMatch(blob, /Browse all services/);
  });

  it("stays inside the content voice rules", () => {
    const blob = collectCopy({
      HOME_HERO,
      HOME_TRACKS_INTRO,
      HOME_TRACKS,
      HOME_BELIEFS,
      HOME_CLOSE,
    }).join("\n");
    assertNoBannedVoice(blob);
  });

  it("keeps #01B0EA inside the AI room only", () => {
    const ai = JSON.stringify(getHomeTrackVisual("ai"));
    const markets = JSON.stringify(getHomeTrackVisual("markets"));
    const design = JSON.stringify(getHomeTrackVisual("design"));

    assert.match(ai, /#01B0EA|#2E2688/);
    assert.equal(getHomeTrackVisual("ai").kickerColor, "#01B0EA");
    assert.doesNotMatch(markets, /#01B0EA/);
    assert.doesNotMatch(design, /#01B0EA/);
    assert.match(markets, /#267088|#7BC3D8|#080808/);
    assert.equal(getHomeTrackVisual("markets").kickerColor, "#7BC3D8");
    assert.match(design, /#08081E|white/);
    assert.equal(
      getHomeTrackVisual("design").kickerColor,
      "rgba(255,255,255,0.85)"
    );
  });

  it("does not leak AI cyan into hub chrome files", () => {
    const hubFiles = [
      "src/components/home/HomeHero.jsx",
      "src/components/home/HomeAtmosphere.jsx",
      "src/components/home/HomeBeliefs.jsx",
      "src/components/home/HomeClose.jsx",
      "src/components/home/HomeTracks.jsx",
    ];
    for (const file of hubFiles) {
      const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
      assert.doesNotMatch(
        source,
        /#01B0EA/,
        `${file} leaked AI cyan into hub chrome`
      );
    }
  });

  it("describes the three rooms in agent markdown", () => {
    const result = getMarkdownForPath("/");
    assert.ok(result);
    assert.match(result.body, /The rooms/);
    assert.match(result.body, /\/ai/);
    assert.match(result.body, /\/markets/);
    assert.match(result.body, /\/design/);
    assert.match(result.body, /Book a call/);
  });
});
