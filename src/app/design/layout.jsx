import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("design");

export default function DesignLayout({ children }) {
  return children;
}
