import UaeGeoPage from "@/components/uae/UaeGeoPage";
import { getUaePage } from "@/content/uae";

export default function UaeMarketsPage() {
  return <UaeGeoPage page={getUaePage("markets")} />;
}
