import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

import { HOME_HERO } from "../src/content/home.js";
import {
  capHeroDpr,
  HERO_STAGE_MODES,
  readHeroStageContext,
  resolveHeroStageMode,
  shouldLoadWebGL,
} from "../src/lib/home-hero-stage.js";

function source(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

describe("home hero stage", () => {
  it("keeps Book a call and See the tracks in the hero module", () => {
    const hero = source("src/components/home/HomeHero.jsx");
    assert.match(hero, /HOME_HERO\.primaryCta/);
    assert.match(hero, /HOME_HERO\.secondaryCta/);
    assert.match(hero, /href="#tracks"/);
    assert.equal(HOME_HERO.primaryCta, "Book a call");
    assert.equal(HOME_HERO.secondaryCta, "See the tracks");
  });

  it("does not import three from server or hero chrome modules", () => {
    const files = [
      "src/app/page.jsx",
      "src/components/home/HomeHero.jsx",
      "src/components/home/HomeHeroStage.jsx",
      "src/lib/home-hero-stage.js",
      "src/content/home.js",
    ];
    for (const file of files) {
      const text = source(file);
      assert.doesNotMatch(text, /from\s+["']three["']/, `${file} imported three`);
      assert.doesNotMatch(text, /from\s+["']three\//, `${file} imported a three path`);
    }
  });

  it("loads three only from the client WebGL island via next/dynamic", () => {
    const stage = source("src/components/home/HomeHeroStage.jsx");
    const canvas = source("src/components/home/HomeHeroWebGLCanvas.jsx");
    const webgl = source("src/components/home/home-hero-webgl.js");

    assert.match(stage, /next\/dynamic/);
    assert.match(stage, /import\("\.\/HomeHeroWebGLCanvas"\)/);
    assert.doesNotMatch(stage, /from\s+["']three["']/);
    assert.doesNotMatch(canvas, /from\s+["']three["']/);
    assert.match(webgl, /from\s+["']three["']/);
  });

  it("resolves still / lite / full without loading three on cheap paths", () => {
    assert.equal(
      resolveHeroStageMode({
        reducedMotion: true,
        coarsePointer: false,
        narrowViewport: false,
      }),
      "still"
    );
    assert.equal(
      resolveHeroStageMode({
        reducedMotion: false,
        coarsePointer: true,
        narrowViewport: false,
      }),
      "lite"
    );
    assert.equal(
      resolveHeroStageMode({
        reducedMotion: false,
        coarsePointer: false,
        narrowViewport: true,
      }),
      "lite"
    );
    assert.equal(
      resolveHeroStageMode({
        reducedMotion: false,
        coarsePointer: false,
        narrowViewport: false,
      }),
      "full"
    );

    assert.deepEqual(HERO_STAGE_MODES, ["still", "lite", "full"]);
    assert.equal(shouldLoadWebGL("still"), false);
    assert.equal(shouldLoadWebGL("lite"), false);
    assert.equal(shouldLoadWebGL("full"), true);
    assert.throws(
      () => shouldLoadWebGL(/** @type {never} */ ("unknown")),
      /Unhandled union member/
    );
  });

  it("caps desktop DPR in the 1–1.5 band", () => {
    assert.equal(capHeroDpr(3, "full"), 1.5);
    assert.equal(capHeroDpr(1.25, "full"), 1.25);
    assert.equal(capHeroDpr(0, "full"), 1);
    assert.equal(capHeroDpr(2, "lite"), 1);
    assert.equal(capHeroDpr(2, "still"), 1);
  });

  it("reads motion and pointer media from the window", () => {
    const win = {
      matchMedia(query) {
        return {
          matches:
            query.includes("prefers-reduced-motion: reduce") ||
            query.includes("pointer: coarse"),
        };
      },
    };
    const ctx = readHeroStageContext(win);
    assert.equal(ctx.reducedMotion, true);
    assert.equal(ctx.coarsePointer, true);
    assert.equal(resolveHeroStageMode(ctx), "still");
  });

  it("keeps hub stage files free of AI cyan", () => {
    const files = [
      "src/components/home/HomeHeroStage.jsx",
      "src/components/home/HomeHeroWebGLCanvas.jsx",
      "src/components/home/home-hero-webgl.js",
      "src/lib/home-hero-stage.js",
    ];
    for (const file of files) {
      assert.doesNotMatch(source(file), /#01B0EA/, `${file} leaked AI cyan`);
    }
  });
});
