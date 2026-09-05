import {
  CATEGORY_VISUAL_THEME,
  VERTICAL_DECOR_CLASSES,
} from "@/app/services/themeTokens";
import { assertNever } from "@/lib/assert-never";

/**
 * Isolated visual tokens for one About "room".
 * Each room may use only its vertical's tokens — never the others.
 *
 * @param {import("@/content/about").AboutRoomId} roomId
 */
export function getAboutRoomVisual(roomId) {
  switch (roomId) {
    case "ai":
      return {
        theme: CATEGORY_VISUAL_THEME["ai-automation"],
        glowClasses: [
          VERTICAL_DECOR_CLASSES.ai.glowLeft,
          VERTICAL_DECOR_CLASSES.ai.glowRight,
        ],
        layout: "lead",
      };
    case "markets":
      return {
        theme: CATEGORY_VISUAL_THEME["markets-trading"],
        glowClasses: [VERTICAL_DECOR_CLASSES.markets.glowLeft],
        layout: "offset",
      };
    case "design":
      return {
        theme: CATEGORY_VISUAL_THEME.design,
        glowClasses: [],
        layout: "wide",
      };
    default:
      return assertNever(roomId);
  }
}
