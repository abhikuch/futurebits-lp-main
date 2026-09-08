import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import HomeBeliefs from "@/components/home/HomeBeliefs";
import HomeClose from "@/components/home/HomeClose";
import HomeDiagnostic from "@/components/home/HomeDiagnostic";
import HomeHero from "@/components/home/HomeHero";
import HomeTracks from "@/components/home/HomeTracks";
import SiteFooter from "@/components/shared/SiteFooter";
import TopNavbar from "@/components/shared/TopNavbar";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { buildRouteMetadata, ROUTES, SITE_URL } from "@/config/site";

export const metadata = buildRouteMetadata("home");

export default function HomePage() {
  const breadcrumbItems = [{ name: "Home", url: SITE_URL }];
  return (
    <>
      <JsonLd data={[webPageJsonLd({ path: ROUTES.home.path, name: ROUTES.home.title, description: ROUTES.home.description, image: ROUTES.home.ogImage, breadcrumbItems }), breadcrumbJsonLd(breadcrumbItems, ROUTES.home.path)]} />
      <TopNavbar />
      <main id="main-content" className="min-h-screen bg-[#f1efe8] text-[#11110f]">
        <HomeHero /><HomeDiagnostic /><HomeTracks /><HomeBeliefs /><HomeClose />
      </main>
      <SiteFooter logo={logo} homePath={ROUTES.home.path} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </>
  );
}
