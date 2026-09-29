import { Badge } from "@/components/og/badge";
import { BrandMark } from "@/components/og/brand-mark";

/** Brand-default / homepage OG card. Accepts optional track colors. */
export const Simple = ({
  label,
  title,
  description,
  brand,
  logo,
  colors = {},
}) => {
  const background = colors.background ?? "#060618";
  const foreground = colors.foreground ?? "#fafafa";
  const muted = colors.muted ?? "#a1a1aa";
  const accent = colors.accent ?? "#01B0EA";
  const accentGlow = colors.accentGlow ?? "rgba(1,176,234,0.16)";
  const badgeBg = colors.badgeBg ?? "rgba(250,250,250,0.04)";
  const badgeBorder = colors.badgeBorder ?? "rgba(250,250,250,0.12)";
  const badgeText = colors.badgeText ?? "#d4d4d8";

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: background,
        backgroundImage: `radial-gradient(circle at 50% 0%, ${accentGlow}, transparent 55%)`,
        color: foreground,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "96px",
        width: "100%",
      }}>
      <Badge
        background={badgeBg}
        borderColor={badgeBorder}
        color={badgeText}
        style={{ fontSize: "24px", fontWeight: 500, padding: "8px 18px" }}
        uppercase>
        <div
          style={{
            backgroundColor: accent,
            borderRadius: "999px",
            height: "10px",
            width: "10px",
          }} />
        {label}
      </Badge>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 40 ? 64 : 76,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginTop: "40px",
          maxWidth: "900px",
          textAlign: "center",
        }}>
        {title}
      </div>

      <div
        style={{
          color: muted,
          display: "flex",
          fontSize: "32px",
          lineHeight: 1.4,
          marginTop: "28px",
          maxWidth: "760px",
          textAlign: "center",
        }}>
        {description}
      </div>

      <div
        style={{
          alignItems: "center",
          bottom: "56px",
          color: foreground,
          display: "flex",
          fontSize: "26px",
          fontWeight: 600,
          gap: "12px",
          position: "absolute",
        }}>
        <BrandMark background={accent} size={28} src={logo} />
        {brand}
      </div>
    </div>
  );
};
