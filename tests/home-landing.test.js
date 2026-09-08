import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { describe, it } from "node:test";

import { BANNED_PHRASES } from "../src/content/content-voice.js";
import { HOME_BELIEFS, HOME_CAL, HOME_CLOSE, HOME_DIAGNOSTIC, HOME_FIT, HOME_HERO, HOME_TRACKS } from "../src/content/home.js";
import { getMarkdownForPath } from "../src/lib/agent-markdown.js";

function source(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

function collectCopy(value, bag = []) {
  if (typeof value === "string") bag.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectCopy(item, bag));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => collectCopy(item, bag));
  return bag;
}

describe("home editorial landing", () => {
  it("routes buyers through three vertical-first practices", () => {
    assert.equal(HOME_HERO.primaryCta, "Book a call");
    assert.equal(HOME_HERO.secondaryCta, "Choose a track");
    assert.deepEqual(HOME_TRACKS.map((track) => track.href), ["/ai", "/markets", "/design"]);
    assert.equal(HOME_DIAGNOSTIC.routes.length, 3);
  });

  it("keeps dedicated call campaigns", () => {
    assert.equal(new URL(HOME_CAL.hero).searchParams.get("utm_campaign"), "home-hero");
    assert.equal(new URL(HOME_CAL.markets).pathname, "/futurebits/markets");
    assert.equal(new URL(HOME_CAL.design).pathname, "/futurebits/design");
  });

  it("follows the site voice", () => {
    const text = collectCopy({ HOME_HERO, HOME_DIAGNOSTIC, HOME_TRACKS, HOME_BELIEFS, HOME_FIT, HOME_CLOSE }).join("\n");
    for (const pattern of BANNED_PHRASES) {
      pattern.lastIndex = 0;
      assert.equal(pattern.test(text), false, `banned voice matched ${pattern}`);
      pattern.lastIndex = 0;
    }
  });

  it("is server-rendered and contains no home WebGL path", () => {
    const files = ["src/app/page.jsx", "src/components/home/HomeHero.jsx", "src/components/home/HomeDiagnostic.jsx", "src/components/home/HomeTracks.jsx", "src/components/home/HomeTrackChapter.jsx", "src/components/home/HomeBeliefs.jsx", "src/components/home/HomeClose.jsx"];
    for (const file of files) {
      const text = source(file);
      assert.doesNotMatch(text, /"use client"|WebGL|<canvas|from\s+["']three/i);
    }
    ["src/components/home/HomeHeroStage.jsx", "src/components/home/HomeHeroWebGLCanvas.jsx", "src/components/home/home-hero-webgl.js", "src/lib/home-hero-stage.js"].forEach((file) => {
      assert.equal(existsSync(new URL(`../${file}`, import.meta.url)), false);
    });
    assert.equal(JSON.parse(source("package.json")).dependencies.three, undefined);
  });

  it("keeps markdown useful and vertical-first", () => {
    const result = getMarkdownForPath("/");
    assert.match(result.body, /Choose by failure state/);
    assert.match(result.body, /What delivery produces/);
    assert.match(result.body, /\/ai/);
    assert.match(result.body, /\/markets/);
    assert.match(result.body, /\/design/);
  });
});
