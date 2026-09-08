import EditorialVerticalHero from "@/components/shared/EditorialVerticalHero";
import { COMPANY } from "@/config/site";
import { getCalLinkForPath } from "@/lib/page-theme";

export default function AboutHero() {
  return (
    <EditorialVerticalHero
      vertical="neutral"
      discipline={`About ${COMPANY.name}`}
      title="You will not hire a bench. You will hire a studio."
      lede={`Futurebits is a roughly dozen-person studio founded in ${COMPANY.founded}. We ship production AI, trading infrastructure, and product design from one accountable team.`}
      proof="Small senior teams / Written scopes / Production handover"
      primaryHref={getCalLinkForPath("/about")}
      secondaryHref="#rooms"
      secondaryLabel="Explore the three rooms"
      motifLabel="One studio / three disciplines"
    />
  );
}
