import { permanentRedirect } from "next/navigation";
import { ROUTES } from "@/config/site";

export default function HomePage() {
  permanentRedirect(ROUTES.ai.path);
}
