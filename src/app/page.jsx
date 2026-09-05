import JsonLd, { breadcrumbJsonLd, webPageJsonLd } from "@/components/seo/JsonLd";
import HomeBeliefs from "@/components/home/HomeBeliefs";
import HomeClose from "@/components/home/HomeClose";
import HomeHero from "@/components/home/HomeHero";
import HomeTracks from "@/components/home/HomeTracks";
import EngagementModels from "@/components/shared/EngagementModels";
import FeaturedServiceLinks from "@/components/shared/FeaturedServiceLinks";
import SiteFooter from "@/components/shared/SiteFooter";
import TestimonialSection from "@/components/shared/TestimonialSection";
import TopNavbar from "@/components/shared/TopNavbar";
import logo from "@/assets/logo.svg";
import { HOME_CAL, HOME_FEATURED_SERVICES } from "@/content/home";
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
      <main
        id="main-content"
        className={`min-h-screen ${SERVICE_HUB_THEME.pageBgClass} text-white`}
      >
        <HomeHero />
        <HomeTracks />
        <HomeBeliefs />
        <EngagementModels ctaHref={HOME_CAL.close} ctaLabel="Book a call" />
        <TestimonialSection theme="home" />
        <FeaturedServiceLinks
          title="Selected doors into the catalog"
          services={HOME_FEATURED_SERVICES}
        />
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
