import { VERTICAL_DECOR_CLASSES } from "@/app/services/themeTokens";

const GLOW_BY_THEME = {
  "ai-automation": [
    VERTICAL_DECOR_CLASSES.ai.glowLeft,
    VERTICAL_DECOR_CLASSES.ai.glowRight,
  ],
  "markets-trading": [VERTICAL_DECOR_CLASSES.markets.glowLeft],
  design: [],
  platform: [
    VERTICAL_DECOR_CLASSES.platform.glowLeft,
    VERTICAL_DECOR_CLASSES.platform.glowRight,
  ],
  neutral: [],
};

/**
 * Subtle background glow for content pages — matches topic accent.
 */
export default function PageAccentGlow({ themeKey = "neutral" }) {
  const classes = GLOW_BY_THEME[themeKey] ?? GLOW_BY_THEME.neutral;
  if (classes.length === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {classes.map((className) => (
        <div key={className} className={className} />
      ))}
    </div>
  );
}
