import UaeGeoPage from "@/components/uae/UaeGeoPage";
import { getUaePage } from "@/content/uae";

export default function UaeHubPage() {
  return <UaeGeoPage page={getUaePage("hub")} />;
}
