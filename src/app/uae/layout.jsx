import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("uae");

export default function UaeLayout({ children }) {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
}
