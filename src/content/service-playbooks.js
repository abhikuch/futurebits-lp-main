/* Service playbooks — generated per service with voice lint. */

import { generateServicePlaybook } from "@/content/service-playbook-generator";

export function getServicePlaybook(slug, service, category) {
  if (!service || !category) return null;
  return generateServicePlaybook(service, category);
}

export function buildServiceSections(service, category) {
  const playbook = getServicePlaybook(service?.slug, service, category);
  if (!playbook) return null;

  if (
    category.slug === "markets-trading" &&
    playbook.dominantAudience &&
    playbook.secondaryAudiences
  ) {
    return {
      ...playbook,
      whoFor: [playbook.dominantAudience, ...playbook.secondaryAudiences],
    };
  }

  return playbook;
}
