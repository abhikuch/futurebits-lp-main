import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getAboutRoomVisual } from "../src/components/about/about-theme.js";
import { ROUTES } from "../src/config/site.js";
import {
  ABOUT_BELIEFS,
  ABOUT_ENGAGEMENT_STEPS,
  ABOUT_FIT,
  ABOUT_PEOPLE,
  ABOUT_ROOMS,
  ABOUT_STATS,
} from "../src/content/about.js";
import { BANNED_PHRASES } from "../src/content/content-voice.js";

function collectStrings(value, acc = []) {
  if (typeof value === "string") {
    acc.push(value);
    return acc;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectStrings(item, acc);
    return acc;
  }
  if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, acc);
  }
  return acc;
}

function flattenTheme(theme) {
  return JSON.stringify(theme);
}

describe("about landing copy", () => {
  it("keeps only already-true proof stats", () => {
    assert.deepEqual(
      ABOUT_STATS.map((stat) => stat.value),
      ["12+", "20+", "30+", "2023"]
    );
  });

  it("points rooms at isolated verticals", () => {
    assert.deepEqual(
      ABOUT_ROOMS.map((room) => [room.id, room.href]),
      [
        ["ai", "/ai"],
        ["markets", "/markets"],
        ["design", "/design"],
      ]
    );
  });

  it("does not invent extra named staff", () => {
    assert.equal(ABOUT_PEOPLE.name, "Aayush Kucheria");
    const blob = collectStrings({
      ABOUT_BELIEFS,
      ABOUT_ENGAGEMENT_STEPS,
      ABOUT_FIT,
      ABOUT_PEOPLE,
      ABOUT_ROOMS,
    }).join("\n");
    assert.doesNotMatch(blob, /Punam|Kartik/i);
    assert.doesNotMatch(blob, /5\+\s*years/i);
  });

  it("avoids banned voice phrases", () => {
    const blob = [
      ROUTES.about.title,
      ROUTES.about.description,
      ...collectStrings({
        ABOUT_BELIEFS,
        ABOUT_ENGAGEMENT_STEPS,
        ABOUT_FIT,
        ABOUT_PEOPLE,
        ABOUT_ROOMS,
      }),
    ].join("\n");

    for (const pattern of BANNED_PHRASES) {
      const copy = new RegExp(pattern.source, pattern.flags.replace("g", ""));
      assert.equal(copy.test(blob), false, `Banned phrase matched: ${pattern}`);
    }
  });

  it("updates about metadata to the studio manifesto", () => {
    assert.match(ROUTES.about.title, /About Futurebits/i);
    assert.match(ROUTES.about.description, /dozen-person studio/i);
    assert.match(ROUTES.about.description, /2023/);
  });
});

describe("about room isolation", () => {
  it("keeps each room on its own vertical tokens", () => {
    const ai = flattenTheme(getAboutRoomVisual("ai").theme);
    const markets = flattenTheme(getAboutRoomVisual("markets").theme);
    const design = flattenTheme(getAboutRoomVisual("design").theme);

    assert.match(ai, /01B0EA/);
    assert.doesNotMatch(ai, /267088/);
    assert.match(markets, /267088/);
    assert.doesNotMatch(markets, /01B0EA/);
    assert.doesNotMatch(design, /01B0EA/);
    assert.doesNotMatch(design, /267088/);
  });
});
