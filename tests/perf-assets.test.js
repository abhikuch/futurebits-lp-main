import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

function repoFile(relativePath) {
  return readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), "utf8");
}

function repoPath(relativePath) {
  return fileURLToPath(new URL(relativePath, import.meta.url));
}

describe("perf assets", () => {
  it("loads only the body-copy font weights", () => {
    const layout = repoFile("../src/app/layout.jsx");
    assert.match(layout, /weight: \["400", "500", "600", "700"\]/);
    assert.equal((layout.match(/weight: \["400", "500", "600", "700"\]/g) ?? []).length, 2);
    assert.doesNotMatch(layout, /"100"|"200"|"300"|"800"|"900"/);
    assert.match(layout, /preload: false/);
  });

  it("keeps Next image output on avif/webp", () => {
    const config = repoFile("../next.config.mjs");
    assert.match(config, /image\/avif/);
    assert.match(config, /image\/webp/);
  });

  it("does not pull Swiper into Markets WhyUs", () => {
    const whyUs = repoFile("../src/components/market/WhyUs.jsx");
    const pkg = JSON.parse(repoFile("../package.json"));
    assert.doesNotMatch(whyUs, /swiper/i);
    assert.equal(pkg.dependencies.swiper, undefined);
  });

  it("does not re-render particles on every mousemove", () => {
    const particles = repoFile("../src/components/ui/particles.jsx");
    assert.doesNotMatch(particles, /function MousePosition/);
    assert.match(particles, /prefers-reduced-motion/);
    assert.match(particles, /requestIdleCallback/);
    assert.match(particles, /IntersectionObserver/);
  });

  it("replaces base64-heavy SVGs with optimized webp", () => {
    const gone = [
      "../src/assets/market/Forex.svg",
      "../src/assets/market/Indian_Markets.svg",
      "../src/assets/design/intro_light.svg",
      "../src/assets/landing-page-AI/index11.svg",
      "../src/assets/landing-page-AI/index13.svg",
    ];
    for (const file of gone) {
      assert.equal(existsSync(repoPath(file)), false, file);
    }

    const webps = [
      "../src/assets/market/forex.webp",
      "../src/assets/market/indian-markets.webp",
      "../src/assets/market/crypto.webp",
      "../src/assets/market/us-markets.webp",
    ];
    for (const file of webps) {
      assert.equal(existsSync(repoPath(file)), true, file);
    }

    const brokers = repoFile("../src/components/market/SupportedBroker.jsx");
    assert.match(brokers, /indian-markets\.webp/);
    assert.match(brokers, /forex\.webp/);
    assert.doesNotMatch(brokers, /\.svg/);
  });
});
