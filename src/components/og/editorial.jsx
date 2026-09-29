import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

/**
 * Poster-style OG card — used for the Design track.
 * Registry defaults are cream/rose; we theme to dark + white Design tokens.
 */
export const Editorial = ({
  kicker,
  title,
  meta,
  ghost,
  brand,
  logo,
  colors = {},
}) => {
  const background = colors.background ?? "#060618";
  const foreground = colors.foreground ?? "#fafafa";
  const muted = colors.muted ?? "rgba(255,255,255,0.72)";
  const accent = colors.accent ?? "#ffffff";
  const badgeBg = colors.badgeBg ?? "rgba(255,255,255,0.1)";
  const badgeText = colors.badgeText ?? "rgba(255,255,255,0.9)";
  const ghostColor = colors.ghost ?? "rgba(255,255,255,0.05)";
  const line = colors.line ?? "rgba(255,255,255,0.2)";

  return (
    <div
      style={{
        backgroundColor: background,
        color: foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}>
      <div
        style={{
          bottom: "-60px",
          color: ghostColor,
          display: "flex",
          fontSize: "420px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          position: "absolute",
          right: "-20px",
        }}>
        {ghost ?? title.split(" ")[0]}
      </div>

      <Badge
        background={badgeBg}
        color={badgeText}
        style={{ alignSelf: "flex-start", fontWeight: 700, padding: "10px 24px" }}
        uppercase>
        {kicker}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 72 : 88,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 0.98,
          maxWidth: "1000px",
        }}>
        {title}
      </div>

      <div
        style={{
          alignItems: "center",
          borderTop: `2px solid ${line}`,
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "28px",
        }}>
        <div style={{ alignItems: "center", display: "flex", gap: "12px" }}>
          <BrandMark background={accent} radius={6} size={32} src={logo} />
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
            {brand}
          </div>
        </div>
        <div style={{ color: muted, display: "flex", fontSize: "28px" }}>
          {meta}
        </div>
      </div>
    </div>
  );
};
