import UaeGeoPage from "@/components/uae/UaeGeoPage";
import { getUaePage } from "@/content/uae";

export default function UaeDesignPage() {
  return <UaeGeoPage page={getUaePage("design")} />;
}
