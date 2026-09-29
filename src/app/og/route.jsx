import { ImageResponse } from "next/og";

import { Editorial } from "@/components/og/editorial";
import { Grid } from "@/components/og/grid";
import { Simple } from "@/components/og/simple";
import { Terminal } from "@/components/og/terminal";
import { OG_TRACKS, resolveOgTrack } from "@/config/og-tracks";
import { getOgLogoDataUrl } from "@/lib/og-logo";

// Node runtime so we can read the logo PNG from disk for Satori.
export const runtime = "nodejs";

function renderTrackCard(trackId, logo, overrides = {}) {
  const track = OG_TRACKS[trackId] ?? OG_TRACKS.home;
  const title = overrides.title || track.title;
  const description = overrides.description || track.description;

  switch (trackId) {
    case "ai":
      return (
        <Terminal
          brand={track.brand}
          caption={overrides.caption || track.caption}
          colors={track.colors}
          logo={logo}
          title={title}
        />
      );
    case "markets":
      return (
        <Grid
          brand={track.brand}
          colors={track.colors}
          description={description}
          logo={logo}
          title={title}
        />
      );
    case "design":
      return (
        <Editorial
          brand={track.brand}
          colors={track.colors}
          ghost={track.ghost}
          kicker={track.label}
          logo={logo}
          meta={track.meta}
          title={title}
        />
      );
    case "home":
    default:
      return (
        <Simple
          brand={track.brand}
          colors={track.colors}
          description={description}
          label={track.label}
          logo={logo}
          title={title}
        />
      );
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const trackId = resolveOgTrack(searchParams.get("track"));
  const title = searchParams.get("title") || undefined;
  const description = searchParams.get("description") || undefined;
  const caption = searchParams.get("caption") || undefined;
  const logo = await getOgLogoDataUrl();

  return new ImageResponse(
    renderTrackCard(trackId, logo, { title, description, caption }),
    {
      width: 1200,
      height: 630,
    }
  );
}
