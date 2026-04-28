export const CATEGORY_VISUAL_THEME = {
  "ai-automation": {
    pageBg: "bg-[#060618]",
    kickerClass: "fb-kicker text-[#01B0EA]",
    dividerClass:
      "mt-6 h-px w-28 bg-gradient-to-r from-[#01B0EA]/80 via-[#2E2688]/60 to-transparent",
    titleClass:
      "mt-6 fb-hero-title max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#DDF7FF] to-[#B6E9FF]",
    bodyClass: "mt-6 max-w-3xl text-lg text-[#D4F2FF]/80",
    serviceCardClass:
      "rounded-2xl border border-[#01B0EA]/25 bg-gradient-to-b from-[#01B0EA]/10 to-white/[0.02] p-5 transition hover:from-[#01B0EA]/15 hover:to-white/[0.04]",
    ctaPanelClass:
      "rounded-3xl border border-[#01B0EA]/25 bg-gradient-to-b from-[#01B0EA]/10 to-white/[0.03] p-8",
    ctaButtonClass:
      "mt-7 inline-flex h-11 items-center justify-center rounded-full border border-[#01B0EA]/40 bg-[#01B0EA]/18 px-6 text-sm font-medium text-white transition hover:bg-[#01B0EA]/26",
  },
  "markets-trading": {
    pageBg: "bg-[#080808]",
    kickerClass: "fb-kicker text-[#7BC3D8]",
    dividerClass:
      "mt-6 h-px w-28 bg-gradient-to-r from-[#7BC3D8]/80 via-[#267088]/70 to-transparent",
    titleClass:
      "mt-6 fb-hero-title max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E7F6FB] to-[#C2E6F1]",
    bodyClass: "mt-6 max-w-3xl text-lg text-[#D8EEF4]/80",
    serviceCardClass:
      "rounded-2xl border border-[#267088]/40 bg-gradient-to-b from-[#267088]/14 to-white/[0.02] p-5 transition hover:from-[#267088]/20 hover:to-white/[0.04]",
    ctaPanelClass:
      "rounded-3xl border border-[#267088]/40 bg-gradient-to-b from-[#267088]/16 to-white/[0.03] p-8",
    ctaButtonClass:
      "mt-7 inline-flex h-11 items-center justify-center rounded-full border border-[#267088]/55 bg-[#267088]/26 px-6 text-sm font-medium text-white transition hover:bg-[#267088]/36",
  },
  design: {
    pageBg: "bg-[#060618]",
    kickerClass: "fb-kicker text-white/85",
    dividerClass:
      "mt-6 h-px w-28 bg-gradient-to-r from-white/80 via-white/40 to-transparent",
    titleClass:
      "mt-6 fb-hero-title max-w-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80",
    bodyClass: "mt-6 max-w-3xl text-lg text-white/75",
    serviceCardClass:
      "rounded-2xl border border-white/20 bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-5 transition hover:from-white/[0.14] hover:to-white/[0.05]",
    ctaPanelClass:
      "rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.1] to-white/[0.03] p-8",
    ctaButtonClass:
      "mt-7 inline-flex h-11 items-center justify-center rounded-full border border-white/35 bg-white/15 px-6 text-sm font-medium text-white transition hover:bg-white/22",
  },
};

export const DETAIL_VISUAL_THEME = {
  "ai-automation": {
    accentText: "text-[#8BE7FF]",
    accentBorder: "border-[#01B0EA]/45",
    chipBg: "bg-[#01B0EA]/18",
    pageBg: "bg-[#060618]",
  },
  "markets-trading": {
    accentText: "text-[#9CD8E8]",
    accentBorder: "border-[#267088]/55",
    chipBg: "bg-[#267088]/24",
    pageBg: "bg-[#080808]",
  },
  design: {
    accentText: "text-white",
    accentBorder: "border-white/30",
    chipBg: "bg-white/18",
    pageBg: "bg-[#060618]",
  },
};

export const DETAIL_HERO_PRESET = {
  "ai-automation": {
    shellClass:
      "relative overflow-hidden rounded-3xl border border-[#01B0EA]/35 bg-[#080811]/85 p-7 text-center sm:p-10",
    titleClass: "mt-5 fb-hero-title mx-auto max-w-4xl",
    subheadClass:
      "mt-5 mx-auto max-w-3xl text-lg leading-relaxed text-[#D9F5FF]/78",
    ctaRowClass: "mt-8 flex flex-wrap justify-center gap-3",
    bottomRailType: "ai",
  },
  "markets-trading": {
    shellClass:
      "relative overflow-hidden rounded-3xl border border-[#267088]/45 bg-[#07070f]/90 p-7 sm:p-10",
    titleClass: "mt-5 fb-hero-title max-w-4xl",
    subheadClass: "mt-5 max-w-3xl text-lg leading-relaxed text-[#D6EDF3]/78",
    ctaRowClass: "mt-8 flex flex-wrap gap-3",
    bottomRailType: null,
  },
  design: {
    shellClass:
      "relative overflow-hidden rounded-3xl border border-white/25 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-7 text-center sm:p-10",
    titleClass: "mt-5 fb-hero-title mx-auto max-w-4xl",
    subheadClass: "mt-5 mx-auto max-w-3xl text-lg leading-relaxed text-white/78",
    ctaRowClass: "mt-8 flex flex-wrap justify-center gap-3",
    bottomRailType: "design",
  },
};

export const DETAIL_RHYTHM_PRESET = {
  "ai-automation": {
    heroSectionClass: "pb-12 pt-32 sm:pb-14 sm:pt-36",
    infoSectionClass: "py-8 sm:py-10",
    deliverSectionClass: "py-8 sm:py-10",
    faqSectionClass: "py-10 sm:py-12",
    relatedSectionClass: "py-10 sm:py-12",
    splitGapClass: "grid gap-5 md:grid-cols-3",
    compactCardClass:
      "rounded-2xl border bg-white/[0.04] p-5 sm:p-6 backdrop-blur-sm",
    wideCardClass:
      "rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-sm",
  },
  "markets-trading": {
    heroSectionClass: "pb-6 pt-32 sm:pb-8 sm:pt-36",
    infoSectionClass: "py-10 sm:py-12",
    deliverSectionClass: "py-8 sm:py-10",
    faqSectionClass: "py-8 sm:py-10",
    relatedSectionClass: "py-8 sm:py-10",
    splitGapClass: "grid gap-6 md:grid-cols-3",
    compactCardClass:
      "rounded-2xl border bg-white/[0.04] p-6 sm:p-7 backdrop-blur-sm",
    wideCardClass:
      "rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 backdrop-blur-sm",
  },
  design: {
    heroSectionClass: "pb-14 pt-32 sm:pb-16 sm:pt-36",
    infoSectionClass: "py-9 sm:py-11",
    deliverSectionClass: "py-9 sm:py-11",
    faqSectionClass: "py-10 sm:py-12",
    relatedSectionClass: "py-10 sm:py-12",
    splitGapClass: "grid gap-7 md:grid-cols-3",
    compactCardClass:
      "rounded-3xl border bg-white/[0.05] p-6 sm:p-7 backdrop-blur-sm",
    wideCardClass:
      "rounded-3xl border border-white/10 bg-white/[0.05] p-6 sm:p-7 backdrop-blur-sm",
  },
};

export const DEFAULT_CATEGORY_THEME = {
  pageBg: "bg-[#060618]",
  kickerClass: "fb-kicker",
  dividerClass: "mt-6 h-px w-28 bg-gradient-to-r from-white/70 to-transparent",
  titleClass: "mt-6 fb-hero-title max-w-4xl",
  bodyClass: "mt-6 max-w-3xl text-lg text-white/70",
  serviceCardClass:
    "rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]",
  ctaPanelClass: "rounded-3xl border border-white/10 bg-white/[0.03] p-8",
  ctaButtonClass:
    "mt-7 inline-flex h-11 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-medium text-white transition hover:bg-white/10",
};

export const DEFAULT_DETAIL_THEME = {
  accentText: "text-white",
  accentBorder: "border-white/25",
  chipBg: "bg-white/12",
  pageBg: "bg-[#060618]",
};

export const DEFAULT_DETAIL_HERO_PRESET = {
  shellClass:
    "relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.04] p-7 sm:p-10",
  titleClass: "mt-5 fb-hero-title max-w-4xl",
  subheadClass: "mt-5 max-w-3xl text-lg leading-relaxed text-white/78",
  ctaRowClass: "mt-8 flex flex-wrap gap-3",
  bottomRailType: null,
};

export const DEFAULT_DETAIL_RHYTHM_PRESET = {
  heroSectionClass: "pb-8 pt-32 sm:pt-36",
  infoSectionClass: "py-10",
  deliverSectionClass: "py-10",
  faqSectionClass: "py-10",
  relatedSectionClass: "py-10",
  splitGapClass: "grid gap-6 md:grid-cols-3",
  compactCardClass: "rounded-2xl border bg-white/[0.04] p-6 backdrop-blur-sm",
  wideCardClass:
    "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm",
};

export const AI_MARKETS_BEAM_GRADIENT =
  "radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0) 100%)";

export const AI_BOTTOM_RAIL_GRADIENT =
  "linear-gradient(90deg, #060618 37.95%, #2E2688 52.58%, #01B0EA 57.46%, #FFFFFF 62.34%, #01B0EA 67.21%, #2E2688 72.09%, #060618 86.72%)";

export const SERVICE_HUB_THEME = {
  pageBgClass: "bg-[#060618]",
  footerBgClass: "bg-[#060618]",
  ctaPanelClass:
    "rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.12] to-white/[0.03] p-8 text-center",
};

export const VERTICAL_DECOR_CLASSES = {
  ai: {
    glowLeft:
      "pointer-events-none absolute -left-28 top-24 h-[360px] w-[360px] rounded-full bg-[#2E2688]/35 blur-[120px]",
    glowRight:
      "pointer-events-none absolute -right-24 top-40 h-[320px] w-[320px] rounded-full bg-[#01B0EA]/25 blur-[120px]",
  },
  markets: {
    glowLeft:
      "pointer-events-none absolute -left-24 top-28 h-[360px] w-[360px] rounded-full bg-[#267088]/30 blur-[120px]",
  },
};
