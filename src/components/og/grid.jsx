import { BrandMark } from "@/components/og/brand-mark";
import { GridLines } from "@/components/og/grid-lines";

/** Framed technical OG card — used for the Markets track (teal tokens). */
export const Grid = ({
  title,
  description,
  brand,
  logo,
  colors = {},
}) => {
  const background = colors.background ?? "#080808";
  const foreground = colors.foreground ?? "#ffffff";
  const muted = colors.muted ?? "rgba(194,230,241,0.72)";
  const accent = colors.accent ?? "#7BC3D8";
  const line = colors.line ?? "rgba(123,195,216,0.45)";

  return (
    <div
      style={{
        backgroundColor: background,
        color: foreground,
        display: "flex",
        height: "100%",
        position: "relative",
        width: "100%",
      }}>
      <GridLines color={line} />

      <div
        style={{
          bottom: "128px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          left: "128px",
          position: "absolute",
          right: "128px",
          top: "128px",
          width: "896px",
        }}>
        <div
          style={{
            color: accent,
            display: "flex",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}>
          Markets
        </div>
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            fontSize: title && title.length > 20 ? 64 : 80,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            textWrap: "balance",
          }}>
          {title}
        </div>
        <div
          style={{
            color: muted,
            display: "flex",
            flexGrow: 1,
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: 1.4,
            marginTop: "24px",
            textWrap: "balance",
          }}>
          {description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          bottom: "96px",
          display: "flex",
          gap: "14px",
          position: "absolute",
          right: "96px",
        }}>
        <BrandMark background={accent} radius={12} size={48} src={logo} />
        <span
          style={{
            fontSize: "30px",
            fontWeight: 600,
          }}>
          {brand}
        </span>
      </div>
    </div>
  );
};
