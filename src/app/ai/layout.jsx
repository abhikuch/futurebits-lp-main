import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("ai");

export default function AILayout({ children }) {
  return children;
}
