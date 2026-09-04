import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

import sitemap from "../src/app/sitemap.js";
import { CONTENT_UPDATED_AT, SITE_URL } from "../src/config/site.js";
import { BLOG_POSTS } from "../src/content/blog.js";
import { BANNED_PHRASES } from "../src/content/content-voice.js";
import {
  SERVICES,
  getIndexedServiceDetails,
  getServiceIndexPolicy,
} from "../src/content/services.js";

function repoFile(relativePath) {
  return readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), "utf8");
}

describe("SEO footprint", () => {
  it("uses a stable sitemap lastModified instead of deploy time", () => {
    const expected = new Date(`${CONTENT_UPDATED_AT}T00:00:00.000Z`).getTime();
    const entries = sitemap();
    const sitemapSrc = repoFile("../src/app/sitemap.js");

    assert.match(CONTENT_UPDATED_AT, /^\d{4}-\d{2}-\d{2}$/);
    assert.doesNotMatch(sitemapSrc, /new Date\(\s*\)/);
    assert.ok(entries.length > 0);

    const home = entries.find((entry) => entry.url === `${SITE_URL}/`);
    assert.equal(new Date(home.lastModified).getTime(), expected);

    for (const entry of entries) {
      const ts = new Date(entry.lastModified).getTime();
      assert.ok(Number.isFinite(ts), `invalid lastModified for ${entry.url}`);
    }
  });

  it("lists only priority service details in the sitemap", () => {
    const urls = new Set(sitemap().map((entry) => entry.url));
    const indexed = getIndexedServiceDetails();
    const thin = SERVICES.filter((service) => !service.isPriority);

    assert.ok(indexed.length > 0);
    assert.ok(thin.length > 0);
    assert.equal(indexed.length + thin.length, SERVICES.length);

    for (const service of indexed) {
      assert.equal(urls.has(`${SITE_URL}${service.path}`), true, service.path);
    }

    for (const service of thin) {
      assert.equal(urls.has(`${SITE_URL}${service.path}`), false, service.path);
    }
  });

  it("indexes priority services and noindexes generated supporting pages", () => {
    const priority = SERVICES.find((service) => service.isPriority);
    const thin = SERVICES.find((service) => !service.isPriority);

    assert.deepEqual(getServiceIndexPolicy(priority), {
      index: true,
      follow: true,
    });
    assert.deepEqual(getServiceIndexPolicy(thin), {
      index: false,
      follow: true,
    });
  });

  it("gives every blog post unique depth beyond four thin sections", () => {
    assert.equal(BLOG_POSTS.length, 12);

    const seenHeadings = new Set();

    for (const post of BLOG_POSTS) {
      assert.ok(post.updatedAt, post.slug);
      assert.ok(post.sections.length >= 7, post.slug);
      assert.ok(post.readMinutes >= 11, post.slug);

      const headings = post.sections.map((section) => section.heading);
      assert.equal(new Set(headings).size, headings.length, post.slug);

      for (const section of post.sections) {
        const key = `${section.heading}::${section.body}`;
        assert.equal(seenHeadings.has(key), false, `duplicated section: ${key}`);
        seenHeadings.add(key);

        for (const banned of BANNED_PHRASES) {
          banned.lastIndex = 0;
          assert.equal(
            banned.test(`${section.heading} ${section.body}`),
            false,
            `${post.slug} matched ${banned}`
          );
          banned.lastIndex = 0;
        }
      }
    }
  });

  it("keeps home vertical-first instead of pushing /services as the primary CTA", () => {
    const home = repoFile("../src/app/page.jsx");
    assert.doesNotMatch(home, /Browse all services/);
    assert.doesNotMatch(home, /browse every service we ship/);
    assert.match(home, /Book a call/);
    assert.match(home, /href="#tracks"/);
    assert.doesNotMatch(home, /viewAllHref="\/services"/);
  });

  it("keeps vertical landings as server shells with client islands", () => {
    assert.doesNotMatch(repoFile("../src/app/design/page.jsx"), /"use client"/);
    assert.doesNotMatch(repoFile("../src/app/markets/page.jsx"), /"use client"/);
    assert.doesNotMatch(
      repoFile("../src/components/landing-page-AI/LandingPageAI.jsx"),
      /"use client"/
    );
    assert.doesNotMatch(
      repoFile("../src/components/design/DesignLandingPage.jsx"),
      /"use client"/
    );
    assert.doesNotMatch(
      repoFile("../src/components/market/MarketLandingPage.jsx"),
      /"use client"/
    );
    assert.doesNotMatch(
      repoFile("../src/components/landing-page-AI/Hero.jsx"),
      /"use client"/
    );
    assert.doesNotMatch(repoFile("../src/components/design/hero.jsx"), /"use client"/);
    assert.doesNotMatch(repoFile("../src/components/market/Hero.jsx"), /"use client"/);
    assert.match(
      repoFile("../src/components/market/WavyBackground.jsx"),
      /"use client"/
    );
  });
});
