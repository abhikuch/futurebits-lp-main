import { assertNever } from "@/lib/assert-never";

/**
 * Home hero stage quality. `full` is the only path that loads `three`.
 *
 * @typedef {"still" | "lite" | "full"} HeroStageMode
 */

/** @type {readonly HeroStageMode[]} */
export const HERO_STAGE_MODES = ["still", "lite", "full"];

/**
 * @param {{
 *   reducedMotion: boolean,
 *   coarsePointer: boolean,
 *   narrowViewport: boolean,
 * }} input
 * @returns {HeroStageMode}
 */
export function resolveHeroStageMode({
  reducedMotion,
  coarsePointer,
  narrowViewport,
}) {
  if (reducedMotion) return "still";
  if (coarsePointer || narrowViewport) return "lite";
  return "full";
}

/**
 * @param {HeroStageMode} mode
 */
export function shouldLoadWebGL(mode) {
  switch (mode) {
    case "still":
    case "lite":
      return false;
    case "full":
      return true;
    default:
      return assertNever(mode);
  }
}

/**
 * Cap renderer DPR. Full desktop stays in the 1–1.5 band.
 *
 * @param {number} devicePixelRatio
 * @param {HeroStageMode} [mode]
 */
export function capHeroDpr(devicePixelRatio, mode = "full") {
  if (!Number.isFinite(devicePixelRatio) || devicePixelRatio <= 0) return 1;

  switch (mode) {
    case "still":
    case "lite":
      return 1;
    case "full":
      return Math.min(1.5, Math.max(1, devicePixelRatio));
    default:
      return assertNever(mode);
  }
}

/**
 * @param {Pick<Window, "matchMedia">} win
 */
export function readHeroStageContext(win) {
  return {
    reducedMotion: win.matchMedia("(prefers-reduced-motion: reduce)").matches,
    coarsePointer: win.matchMedia("(pointer: coarse)").matches,
    narrowViewport: win.matchMedia("(max-width: 767px)").matches,
  };
}
