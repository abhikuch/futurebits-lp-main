import EditorialVerticalHero from "@/components/shared/EditorialVerticalHero";
import { CAL, SOCIAL } from "@/config/site";

export default function Hero() {
  return (
    <EditorialVerticalHero
      vertical="design"
      discipline="Product design + frontend"
      title="Design that moves the metric, not the deck."
      lede="We pair product design with frontend engineering in one small team. Onboarding, activation, and upgrade surfaces ship in your repo every week."
      proof="Research to interface / Design to production / One accountable pod"
      primaryHref={CAL.design}
      secondaryHref={SOCIAL.behance}
      secondaryLabel="See selected work"
      motifLabel="Signal / hierarchy / interaction"
    />
  );
}
