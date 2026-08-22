import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { MOTION, MOTION_VARIANTS } from "../src/lib/motion-tokens.js";

describe("motion tokens", () => {
  it("uses corporate-premium timing within skill ranges", () => {
    assert.ok(MOTION.duration >= 0.2 && MOTION.duration <= 0.6);
    assert.ok(MOTION.stagger >= 0.02 && MOTION.stagger <= 0.1);
    assert.equal(MOTION.entranceY, 20);
  });

  it("fadeUp variant resolves with delay", () => {
    const show = MOTION_VARIANTS.fadeUp.show(0.1);
    assert.equal(show.opacity, 1);
    assert.equal(show.y, 0);
    assert.equal(show.transition.delay, 0.1);
  });
});
