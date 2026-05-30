import { CAL } from "@/config/site";
import { getBlogPost } from "@/content/blog";
import {
  CATEGORY_VISUAL_THEME,
  DEFAULT_CATEGORY_THEME,
  PLATFORM_CATEGORY_SLUGS,
  resolveCategoryThemeSlug,
} from "@/app/services/themeTokens";

/** Re-export for convenience */
export { PLATFORM_CATEGORY_SLUGS, resolveCategoryThemeSlug };

/** Blog / resource label → theme key */
export const TOPIC_TO_THEME_KEY = {
  AI: "ai-automation",
  Design: "design",
  Build: "platform",
  Product: "platform",
  Markets: "markets-trading",
};

export function getThemeKeyForTopic(topic) {
  if (!topic) return "neutral";
  return TOPIC_TO_THEME_KEY[topic] ?? "neutral";
}

export function getThemeKeyForCategorySlug(categorySlug) {
  if (!categorySlug) return "neutral";
  return resolveCategoryThemeSlug(categorySlug);
}

export function getCategoryTheme(categorySlug) {
  const key = resolveCategoryThemeSlug(categorySlug);
  if (key === "neutral") return DEFAULT_CATEGORY_THEME;
  return CATEGORY_VISUAL_THEME[key] ?? DEFAULT_CATEGORY_THEME;
}

export function getTopicAccentTextClass(themeKey) {
  switch (themeKey) {
    case "design":
      return "text-white/70";
    case "markets-trading":
      return "text-[#7BC3D8]";
    case "platform":
      return "text-[#F5B942]";
    case "ai-automation":
      return "text-[#01B0EA]";
    default:
      return "text-white/45";
  }
}

export function getTopicCtaPanelClass(themeKey) {
  if (themeKey === "neutral" || !CATEGORY_VISUAL_THEME[themeKey]) {
    return "rounded-2xl border border-white/10 bg-white/[0.03] p-6";
  }
  return CATEGORY_VISUAL_THEME[themeKey].ctaPanelClass;
}

export function getTopicCardClass(topicOrThemeKey) {
  const key =
    TOPIC_TO_THEME_KEY[topicOrThemeKey] ??
    (CATEGORY_VISUAL_THEME[topicOrThemeKey] ? topicOrThemeKey : null) ??
    getThemeKeyForTopic(topicOrThemeKey);
  if (key === "neutral" || !CATEGORY_VISUAL_THEME[key]) {
    return DEFAULT_CATEGORY_THEME.serviceCardClass;
  }
  return CATEGORY_VISUAL_THEME[key].serviceCardClass;
}

export function getCalLinkForThemeKey(themeKey) {
  switch (themeKey) {
    case "design":
      return CAL.design;
    case "markets-trading":
      return CAL.markets;
    case "ai-automation":
    case "platform":
    case "neutral":
    default:
      return CAL.ai;
  }
}

/**
 * Context-aware Cal.com link from pathname (and blog slug when applicable).
 */
export function getCalLinkForPath(pathname) {
  if (!pathname) return CAL.ai;

  if (pathname.startsWith("/design") || pathname.includes("/services/design")) {
    return CAL.design;
  }
  if (
    pathname.startsWith("/markets") ||
    pathname.includes("/services/markets-trading")
  ) {
    return CAL.markets;
  }

  for (const slug of PLATFORM_CATEGORY_SLUGS) {
    if (pathname.includes(`/services/${slug}`)) {
      return CAL.ai;
    }
  }

  if (pathname.startsWith("/services/ai-automation")) {
    return CAL.ai;
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)/);
  if (blogMatch) {
    const post = getBlogPost(blogMatch[1]);
    if (post) {
      return getCalLinkForThemeKey(getThemeKeyForTopic(post.category));
    }
  }

  if (pathname.includes("/resources/ux-audit")) {
    return CAL.design;
  }

  return CAL.ai;
}
