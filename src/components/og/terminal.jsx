import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

/** Technical OG card — used for the AI track (cyan tokens). */
export const Terminal = ({
  brand,
  title,
  caption,
  logo,
  colors = {},
}) => {
  const background = colors.background ?? "#060618";
  const foreground = colors.foreground ?? "#fafafa";
  const accent = colors.accent ?? "#01B0EA";
  const badgeBg = colors.badgeBg ?? "rgba(1,176,234,0.12)";
  const badgeBorder = colors.badgeBorder ?? "rgba(1,176,234,0.35)";
  const badgeText = colors.badgeText ?? "#8BE7FF";

  return (
    <div
      style={{
        backgroundColor: background,
        color: foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "80px",
        position: "relative",
        width: "100%",
      }}>
      <div
        style={{
          backgroundColor: accent,
          bottom: 0,
          left: 0,
          position: "absolute",
          top: 0,
          width: "10px",
        }} />

      <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
        <BrandMark background={accent} size={44} src={logo} />
        <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
          {brand}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 84 : 104,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
          {title}
        </div>
        {caption ? (
          <Badge
            background={badgeBg}
            borderColor={badgeBorder}
            color={badgeText}
            style={{
              alignSelf: "flex-start",
              borderRadius: "10px",
              fontSize: "30px",
              marginTop: "36px",
              padding: "12px 24px",
            }}>
            {caption}
          </Badge>
        ) : null}
      </div>
    </div>
  );
};
