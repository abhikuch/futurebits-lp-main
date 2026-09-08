import EditorialVerticalHero from "@/components/shared/EditorialVerticalHero";
import { CAL } from "@/config/site";

export default function Hero() {
  return (
    <EditorialVerticalHero
      vertical="markets"
      discipline="Markets infrastructure"
      title="Trading systems built to survive regime change."
      lede="We build the boring layer that makes alpha survive: realistic backtests, paper-and-shadow validation, production execution, and runbooks your desk can trust."
      proof="Realistic costs / Risk gates / Kill-switches / Audit-ready operations"
      primaryHref={CAL.markets}
      secondaryHref="#markets-services"
      secondaryLabel="Explore the stack"
      motifLabel="Research / execution / control"
    />
  );
}
