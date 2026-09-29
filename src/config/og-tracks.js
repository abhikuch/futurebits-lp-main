/**
 * Open Graph track themes — colors and default copy only from each
 * vertical’s hard-isolated tokens (see themeTokens / landing pages).
 * Never cross-mix AI cyan, Markets teal, or Design white.
 */

export const OG_TRACKS = {
  home: {
    id: "home",
    label: "Futurebits",
    title: "Design, AI, and Automation",
    description: "Design, AI, and automation. Built by one team.",
    brand: "Futurebits",
    meta: "futurebits.tech",
    colors: {
      background: "#060618",
      foreground: "#fafafa",
      muted: "#a1a1aa",
      accent: "#01B0EA",
      accentGlow: "rgba(1,176,234,0.16)",
      badgeBg: "rgba(250,250,250,0.04)",
      badgeBorder: "rgba(250,250,250,0.12)",
      badgeText: "#d4d4d8",
    },
  },
  ai: {
    id: "ai",
    label: "AI & Automation",
    title: "Production AI",
    description:
      "Retrieval, agents, and automations. First useful ship in 2-3 weeks.",
    caption: "first useful automation · 2-3 weeks",
    brand: "Futurebits",
    meta: "futurebits.tech/ai",
    ghost: "AI",
    colors: {
      background: "#060618",
      foreground: "#fafafa",
      muted: "rgba(212,242,255,0.72)",
      accent: "#01B0EA",
      accentSecondary: "#2E2688",
      accentGlow: "rgba(1,176,234,0.22)",
      badgeBg: "rgba(1,176,234,0.12)",
      badgeBorder: "rgba(1,176,234,0.35)",
      badgeText: "#8BE7FF",
      line: "rgba(1,176,234,0.35)",
    },
  },
  markets: {
    id: "markets",
    label: "Markets",
    title: "Trading infrastructure built to last",
    description:
      "Execution, analytics, and risk systems for funds, prop firms, and serious traders.",
    brand: "Futurebits",
    meta: "futurebits.tech/markets",
    ghost: "MARKETS",
    colors: {
      background: "#080808",
      foreground: "#ffffff",
      muted: "rgba(194,230,241,0.72)",
      accent: "#7BC3D8",
      accentSecondary: "#267088",
      accentGlow: "rgba(38,112,136,0.28)",
      badgeBg: "rgba(38,112,136,0.22)",
      badgeBorder: "rgba(38,112,136,0.55)",
      badgeText: "#9CD8E8",
      line: "rgba(123,195,216,0.45)",
    },
  },
  design: {
    id: "design",
    label: "Design",
    title: "Product design that ships in your repo",
    description:
      "Product design plus frontend engineering: activation, conversion, retention.",
    brand: "Futurebits",
    meta: "futurebits.tech/design",
    ghost: "DESIGN",
    colors: {
      background: "#060618",
      foreground: "#fafafa",
      muted: "rgba(255,255,255,0.72)",
      accent: "#ffffff",
      accentSecondary: "rgba(255,255,255,0.35)",
      accentGlow: "rgba(255,255,255,0.08)",
      badgeBg: "rgba(255,255,255,0.1)",
      badgeBorder: "rgba(255,255,255,0.28)",
      badgeText: "rgba(255,255,255,0.9)",
      line: "rgba(255,255,255,0.2)",
      ghost: "rgba(255,255,255,0.05)",
    },
  },
};

/** Route metadata key → OG track id */
export const ROUTE_OG_TRACK = {
  home: "home",
  about: "home",
  contact: "home",
  privacy: "home",
  press: "home",
  blog: "home",
  services: "home",
  uae: "home",
  gulf: "home",
  gulfSaudiArabia: "home",
  gulfKuwait: "home",
  gulfBahrain: "home",
  ai: "ai",
  uaeAi: "ai",
  markets: "markets",
  uaeMarkets: "markets",
  gulfQatar: "markets",
  design: "design",
  uaeDesign: "design",
  resources: "design",
  gulfOman: "design",
};

/**
 * @param {string | null | undefined} track
 * @returns {keyof typeof OG_TRACKS}
 */
export function resolveOgTrack(track) {
  const key = String(track || "home").toLowerCase();
  if (key === "ai" || key === "markets" || key === "design" || key === "home") {
    return key;
  }
  return "home";
}
