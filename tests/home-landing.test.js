import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { describe, it } from "node:test";

import { BANNED_PHRASES } from "../src/content/content-voice.js";
import { HOME_BELIEFS, HOME_CAL, HOME_CLOSE, HOME_DIAGNOSTIC, HOME_FIT, HOME_HERO, HOME_TRACKS } from "../src/content/home.js";
import { buildRouteMetadata, ROUTES } from "../src/config/site.js";
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
  it("starts with the makers-of-bits capability story", () => {
    assert.equal(HOME_HERO.kicker, "Makers of the bits");
    assert.deepEqual(HOME_HERO.title, ["We make the bits", "your business", "runs on."]);
    assert.equal(HOME_HERO.primaryCta, "Book a call");
    assert.equal(HOME_HERO.secondaryCta, "See what we make");
    assert.deepEqual(HOME_HERO.index.map((item) => item.label), ["Design", "Software", "Automation"]);
    assert.deepEqual(HOME_DIAGNOSTIC.routes.map((route) => route.href), ["/design", "/services/build", "/ai"]);
  });

  it("routes buyers through the three vertical-first areas", () => {
    assert.deepEqual(HOME_TRACKS.map((track) => track.href), ["/design", "/ai", "/markets"]);
    assert.equal(HOME_DIAGNOSTIC.routes.length, 3);
  });

  it("keeps calls focused at the opening and close", () => {
    assert.equal(new URL(HOME_CAL.hero).searchParams.get("utm_campaign"), "home-hero");
    assert.equal(new URL(HOME_CAL.close).searchParams.get("utm_campaign"), "home-close");
    assert.deepEqual(Object.keys(HOME_CAL), ["hero", "close"]);
    assert.doesNotMatch(source("src/components/home/HomeTrackChapter.jsx"), /Book a call/);
  });

  it("follows the site voice", () => {
    const text = collectCopy({ HOME_HERO, HOME_DIAGNOSTIC, HOME_TRACKS, HOME_BELIEFS, HOME_FIT, HOME_CLOSE }).join("\n");
    for (const pattern of BANNED_PHRASES) {
      pattern.lastIndex = 0;
      assert.equal(pattern.test(text), false, `banned voice matched ${pattern}`);
      pattern.lastIndex = 0;
    }
    assert.doesNotMatch(text, /Your next release needs more than a convincing demo/i);
    assert.doesNotMatch(text, /stuck workflows, fragile trading systems, and unclear product journeys/i);
    assert.doesNotMatch(text, /Build the thing your team can actually run/i);
    assert.doesNotMatch(text, /systems behind it|repeat work worth automating/i);
    assert.doesNotMatch(text, /Three kinds of work|Interface\. System\. Repeat work\./i);
    assert.doesNotMatch(text, /Design practice|Specialized systems practice|First gate/i);
    assert.doesNotMatch(text, /Fewer handoffs\. More proof\.|No black-box handoff/i);
    assert.doesNotMatch(text, /\bwe (?:will )?not\b|\bwe won't\b/i);
    assert.doesNotMatch(text, /buyer diagnostic|delivery evidence/i);
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

  it("keeps SSR content, metadata, and markdown aligned", () => {
    const result = getMarkdownForPath("/");
    const metadata = buildRouteMetadata("home");
    assert.match(result.body, /Makers of the bits/);
    assert.match(result.body, /We make the bits your business runs on/);
    assert.ok(result.body.includes(ROUTES.home.description));
    assert.equal(metadata.description, ROUTES.home.description);
    assert.equal(metadata.openGraph.description, ROUTES.home.description);
    assert.equal(metadata.twitter.description, ROUTES.home.description);

    const syncedSections = [
      HOME_HERO.lede,
      HOME_DIAGNOSTIC.title,
      HOME_DIAGNOSTIC.lede,
      ...HOME_DIAGNOSTIC.routes.map((route) => route.label),
      ...HOME_TRACKS.flatMap((track) => [
        track.title,
        track.lede,
        track.painfulState,
        track.scopeNote,
        track.milestone,
        ...track.artifacts,
      ]),
      HOME_BELIEFS.title,
      HOME_BELIEFS.lede,
      ...HOME_BELIEFS.items.flatMap((item) => [item.title, item.body]),
      ...HOME_FIT.fit.items,
      ...HOME_FIT.notFit.items,
      HOME_CLOSE.title,
      HOME_CLOSE.lede,
    ];
    for (const copy of syncedSections) {
      assert.ok(result.body.includes(copy), `markdown missing: ${copy}`);
    }

    assert.match(source("src/app/page.jsx"), /description: ROUTES\.home\.description/);
    assert.match(result.body, /\/services\/build/);
    assert.match(result.body, /\/ai/);
    assert.match(result.body, /\/markets/);
    assert.match(result.body, /\/design/);
    assert.ok(result.body.split(/\s+/).length > 300);
  });

  it("keeps the llms home description concrete", () => {
    const llms = source("public/llms.txt");
    assert.match(llms, /Makers of the bits/);
    assert.match(llms, /interfaces, software, and workflow automation/i);
    assert.match(llms, /written scope to code running in production/i);
    assert.doesNotMatch(llms, /repeat work worth automating|delivery evidence|specialized systems practice/i);
  });
});
