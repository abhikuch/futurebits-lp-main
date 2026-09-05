import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  getMarkdownForPath,
  getNotFoundMarkdown,
  normalizePath,
} from "../src/lib/agent-markdown.js";

describe("agent markdown", () => {
  it("normalizes trailing slashes", () => {
    assert.equal(normalizePath("/ai/"), "/ai");
    assert.equal(normalizePath("/"), "/");
  });

  it("returns markdown for core routes", () => {
    const result = getMarkdownForPath("/ai");
    assert.ok(result);
    assert.equal(result.status, 200);
    assert.match(result.body, /^# /);
    assert.match(result.body, /Canonical URL:/);
  });

  it("returns markdown for service detail pages", () => {
    const result = getMarkdownForPath(
      "/services/ai-automation/chatbot-development"
    );
    assert.ok(result);
    assert.match(result.body, /AI Chatbot Development|chatbot/i);
  });

  it("returns helpful 404 markdown", () => {
    const body = getNotFoundMarkdown("/does-not-exist");
    assert.match(body, /Page not found/);
    assert.match(body, /llms\.txt/);
    assert.match(body, /sitemap\.xml/);
  });

  it("returns markdown for about and blog index", () => {
    const about = getMarkdownForPath("/about");
    assert.ok(about);
    assert.match(about.body, /About Futurebits/i);
    assert.match(about.body, /Three rooms/i);
    assert.match(about.body, /How an engagement runs/i);

    const blog = getMarkdownForPath("/blog");
    assert.ok(blog);
    assert.match(blog.body, /## Articles/);
  });

  it("returns markdown for service category paths", () => {
    const result = getMarkdownForPath("/services/build");
    assert.ok(result);
    assert.match(result.body, /Build|build/i);
  });

  it("returns null for unknown paths", () => {
    assert.equal(getMarkdownForPath("/does-not-exist"), null);
  });
});
