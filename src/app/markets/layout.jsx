import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("markets");

export default function MarketsLayout({ children }) {
  return children;
}
