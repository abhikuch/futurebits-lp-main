import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import HomeBuyerSignals from "@/components/home/HomeBuyerSignals";
import HomeClose from "@/components/home/HomeClose";
import HomeDelivery from "@/components/home/HomeDelivery";
import HomeFit from "@/components/home/HomeFit";
import HomeHero from "@/components/home/HomeHero";
import HomeProof from "@/components/home/HomeProof";
import HomeTracks from "@/components/home/HomeTracks";
import SiteFooter from "@/components/shared/SiteFooter";
import TestimonialSection from "@/components/shared/TestimonialSection";
import TopNavbar from "@/components/shared/TopNavbar";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";
import { buildRouteMetadata, ROUTES, SITE_URL } from "@/config/site";

export const metadata = buildRouteMetadata("home");

export default function HomePage() {
  const breadcrumbItems = [{ name: "Home", url: SITE_URL }];

  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: ROUTES.home.path,
            name: ROUTES.home.title,
            description: ROUTES.home.description,
            image: ROUTES.home.ogImage,
            breadcrumbItems,
          }),
          breadcrumbJsonLd(breadcrumbItems, ROUTES.home.path),
        ]}
      />
      <TopNavbar />
      <main id="main-content" className="min-h-screen bg-[#060618] text-white">
        <HomeHero />
        <HomeBuyerSignals />
        <HomeTracks />
        <HomeDelivery />
        <HomeProof />
        <TestimonialSection
          theme="home"
          eyebrow="Client record"
          title="What clients say after the work"
        />
        <HomeFit />
        <HomeClose />
      </main>
      <SiteFooter
        logo={logo}
        homePath={ROUTES.home.path}
        backgroundClassName={SERVICE_HUB_THEME.footerBgClass}
      />
    </>
  );
}
