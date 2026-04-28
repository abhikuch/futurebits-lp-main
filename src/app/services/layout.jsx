import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("services");

export default function ServicesLayout({ children }) {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
}
