import AboutAtmosphere from "@/components/about/AboutAtmosphere";
import AboutBeliefs from "@/components/about/AboutBeliefs";
import AboutClose from "@/components/about/AboutClose";
import AboutEngagement from "@/components/about/AboutEngagement";
import AboutFit from "@/components/about/AboutFit";
import AboutHero from "@/components/about/AboutHero";
import AboutPeople from "@/components/about/AboutPeople";
import AboutProof from "@/components/about/AboutProof";
import AboutRooms from "@/components/about/AboutRooms";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import SiteFooter from "@/components/shared/SiteFooter";
import logo from "@/assets/logo.svg";
import { SERVICE_HUB_THEME } from "@/app/services/themeTokens";

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className={`relative min-h-screen overflow-hidden ${SERVICE_HUB_THEME.pageBgClass} text-white`}
    >
      <AboutAtmosphere />
      <AboutHero />
      <div className="fb-section">
        <AboutBeliefs />
      </div>
      <div className="fb-section">
        <AboutRooms />
      </div>
      <div className="fb-section">
        <AboutEngagement />
      </div>
      <div className="fb-section">
        <AboutFit />
      </div>
      <div className="fb-section">
        <AboutPeople />
      </div>
      <AboutProof />
      <div className="fb-section">
        <AboutTestimonials />
      </div>
      <AboutClose />
      <SiteFooter logo={logo} backgroundClassName={SERVICE_HUB_THEME.footerBgClass} />
    </main>
  );
}
