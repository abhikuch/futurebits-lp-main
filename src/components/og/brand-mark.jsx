export const BrandMark = ({
  src,
  size = 40,
  radius = 8,
  background,
  fit = "contain",
  children,
  style
}) =>
  src ? (
    // Satori can paint `alt` text onto the image, so it stays empty.
    <img
      alt=""
      height={size}
      src={src}
      width={size}
      style={{ borderRadius: radius, flexShrink: 0, objectFit: fit, ...style }} />
  ) : (
    <div
      style={{
        alignItems: "center",
        // Satori throws on `undefined` style values.
        ...(background && { background }),
        borderRadius: radius,
        display: "flex",
        flexShrink: 0,
        height: size,
        justifyContent: "center",
        width: size,
        ...style,
      }}>
      {children}
    </div>
  );
