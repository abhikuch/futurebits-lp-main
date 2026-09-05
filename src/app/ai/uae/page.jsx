import UaeGeoPage from "@/components/uae/UaeGeoPage";
import { getUaePage } from "@/content/uae";

export default function UaeAiPage() {
  return <UaeGeoPage page={getUaePage("ai")} />;
}
