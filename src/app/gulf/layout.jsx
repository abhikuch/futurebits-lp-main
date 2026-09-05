import TopNavbar from "@/components/shared/TopNavbar";
import { buildRouteMetadata } from "@/config/site";

export const metadata = buildRouteMetadata("gulf");

export default function GulfLayout({ children }) {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
}
