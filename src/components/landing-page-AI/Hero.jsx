import EditorialVerticalHero from "@/components/shared/EditorialVerticalHero";
import { CAL } from "@/config/site";

export default function Hero() {
  return (
    <EditorialVerticalHero
      vertical="ai"
      discipline="Applied AI systems"
      title="Production AI that cuts manual work."
      lede="We build retrieval, automation, and agent systems inside your repo. One team takes the work from a measured first use case to production rollout."
      proof="First useful automation in 2–3 weeks / Full rollout in 8–12 / No hand-offs"
      primaryHref={CAL.ai}
      secondaryHref="#project"
      secondaryLabel="See what we ship"
      motifLabel="Evaluation / retrieval / action"
    />
  );
}
