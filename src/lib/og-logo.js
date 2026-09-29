import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Cached Futurebits mark as a data URL for Satori / ImageResponse. */
let cachedLogoDataUrl;

/**
 * Load `src/assets/og-logo.png` (icon crop of `logo.svg`) as a PNG data URL.
 * ImageResponse cannot resolve webpack SVG imports — use ArrayBuffer → base64.
 */
export async function getOgLogoDataUrl() {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;

  const file = join(process.cwd(), "src/assets/og-logo.png");
  const bytes = await readFile(file);
  cachedLogoDataUrl = `data:image/png;base64,${bytes.toString("base64")}`;
  return cachedLogoDataUrl;
}
