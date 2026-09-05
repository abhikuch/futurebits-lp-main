import { assertNever } from "@/lib/assert-never";

/**
 * @typedef {"studio" | "ai" | "markets" | "design" | "platform"} NavTone
 */

const ROOM_SERVICE_ROOTS = {
  "/ai": "/services/ai-automation",
  "/markets": "/services/markets-trading",
  "/design": "/services/design",
};

/**
 * @param {string | null | undefined} pathname
 * @param {string} root
 */
function isPathInTree(pathname, root) {
  if (!pathname || !root) return false;
  return pathname === root || pathname.startsWith(`${root}/`);
}

/**
 * Active state for a room or utility link. Service-tree URLs light the
 * parent vertical so `/services/design/...` reads as Design, not a fourth tab.
 *
 * @param {string | null | undefined} pathname
 * @param {string} url
 */
export function isNavItemActive(pathname, url) {
  if (!pathname || !url) return false;
  if (isPathInTree(pathname, url)) return true;

  const serviceRoot = ROOM_SERVICE_ROOTS[url];
  if (!serviceRoot) return false;
  return pathname === serviceRoot || pathname.includes(`${serviceRoot}/`);
}

/**
 * Visual tone for shared chrome. Isolated accents only — never mix
 * AI cyan onto markets/design surfaces.
 *
 * @param {string | null | undefined} pathname
 * @returns {NavTone}
 */
export function getNavTone(pathname) {
  if (!pathname) return "studio";

  if (
    isPathInTree(pathname, "/design") ||
    pathname === "/services/design" ||
    pathname.includes("/services/design/")
  ) {
    return "design";
  }
  if (
    isPathInTree(pathname, "/markets") ||
    pathname === "/services/markets-trading" ||
    pathname.includes("/services/markets-trading/")
  ) {
    return "markets";
  }
  if (
    isPathInTree(pathname, "/ai") ||
    pathname === "/services/ai-automation" ||
    pathname.includes("/services/ai-automation/")
  ) {
    return "ai";
  }
  if (
    pathname.includes("/services/build") ||
    pathname.includes("/services/startup-tech-partner") ||
    pathname.includes("/services/integrations-platform")
  ) {
    return "platform";
  }
  return "studio";
}

/**
 * @param {NavTone} tone
 */
export function getNavAccent(tone) {
  switch (tone) {
    case "ai":
      return "#01B0EA";
    case "markets":
      return "#7BC3D8";
    case "design":
      return "#FFFFFF";
    case "platform":
      return "#F5B942";
    case "studio":
      return "#FFFFFF";
    default:
      return assertNever(tone);
  }
}
