import { ROUTES, SITE_URL } from "@/config/site";
import { SERVICE_CATEGORIES, SERVICES } from "@/content/services";

const PRIORITY = {
  home: 1.0,
  ai: 1.0,
  markets: 0.9,
  design: 0.9,
  services: 0.8,
  about: 0.6,
  contact: 0.6,
  privacy: 0.3,
};

const CHANGE_FREQ = {
  home: "weekly",
  ai: "weekly",
  markets: "weekly",
  design: "weekly",
  services: "weekly",
  about: "monthly",
  contact: "monthly",
  privacy: "yearly",
};

export default function sitemap() {
  const lastModified = new Date();

  const coreRoutes = Object.entries(ROUTES).map(([key, route]) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: CHANGE_FREQ[key] ?? "monthly",
    priority: PRIORITY[key] ?? 0.5,
  }));

  const serviceCategories = SERVICE_CATEGORIES.map((category) => ({
    url: `${SITE_URL}/services/${category.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const serviceDetails = SERVICES.map((service) => ({
    url: `${SITE_URL}${service.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: service.isPriority ? 0.7 : 0.55,
  }));

  return [...coreRoutes, ...serviceCategories, ...serviceDetails];
}
