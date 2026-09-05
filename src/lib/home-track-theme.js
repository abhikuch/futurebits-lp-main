import { CATEGORY_VISUAL_THEME } from "@/app/services/themeTokens";

/**
 * Visual contract for each home track room.
 * Isolation rule: AI cyan (#01B0EA) may appear only on the AI branch.
 *
 * @param {"ai" | "markets" | "design"} id
 */
export function getHomeTrackVisual(id) {
  switch (id) {
    case "ai":
      return {
        sectionClass:
          "relative scroll-mt-28 overflow-hidden bg-[#060618] text-white",
        innerClass: "grid items-start gap-14 lg:grid-cols-12",
        copyClass: "lg:col-span-7",
        asideClass: "lg:col-span-5 lg:pt-20",
        theme: CATEGORY_VISUAL_THEME["ai-automation"],
        kickerClass: "fb-kicker",
        kickerColor: "#01B0EA",
        buttonTone: "ai",
      };
    case "markets":
      return {
        sectionClass:
          "relative scroll-mt-28 overflow-hidden bg-[#080808] text-white",
        innerClass: "grid items-start gap-14 lg:grid-cols-12",
        copyClass: "lg:col-span-7 lg:order-2",
        asideClass: "lg:col-span-5 lg:order-1 lg:pt-8",
        theme: CATEGORY_VISUAL_THEME["markets-trading"],
        kickerClass: "fb-kicker",
        kickerColor: "#7BC3D8",
        buttonTone: "markets",
      };
    case "design":
      return {
        sectionClass:
          "relative scroll-mt-28 overflow-hidden bg-[#08081E] text-white",
        innerClass: "mx-auto max-w-3xl text-center",
        copyClass: "",
        asideClass: "mx-auto mt-14 max-w-3xl text-left",
        theme: CATEGORY_VISUAL_THEME.design,
        kickerClass: "fb-kicker",
        kickerColor: "rgba(255,255,255,0.85)",
        buttonTone: "home",
      };
    default: {
      const unhandled = id;
      throw new Error(`Unhandled home track: ${unhandled}`);
    }
  }
}
