import { ROUTES, SITE_URL } from "@/config/site";
import { BLOG_POSTS } from "@/content/blog";
import { SERVICE_CATEGORIES, SERVICES } from "@/content/services";
import { getUaeServicePath } from "@/content/uae";

/** Frozen lastmod — do not use `new Date()` on every build. */
export const SITEMAP_FROZEN_LASTMOD = "2026-09-05";

const PRIORITY = {
  home: 1.0,
  ai: 1.0,
  markets: 0.9,
  design: 0.9,
  services: 0.8,
  blog: 0.75,
  press: 0.55,
  resources: 0.7,
  about: 0.6,
  contact: 0.6,
  privacy: 0.3,
  uae: 0.85,
  uaeAi: 0.8,
  uaeMarkets: 0.8,
  uaeDesign: 0.8,
  gulf: 0.82,
  gulfSaudiArabia: 0.78,
  gulfQatar: 0.76,
  gulfKuwait: 0.74,
  gulfBahrain: 0.74,
  gulfOman: 0.74,
};

const CHANGE_FREQ = {
  home: "weekly",
  ai: "weekly",
  markets: "weekly",
  design: "weekly",
  services: "weekly",
  blog: "weekly",
  press: "monthly",
  resources: "monthly",
  about: "monthly",
  contact: "monthly",
  privacy: "yearly",
  uae: "weekly",
  uaeAi: "weekly",
  uaeMarkets: "weekly",
  uaeDesign: "weekly",
  gulf: "weekly",
  gulfSaudiArabia: "monthly",
  gulfQatar: "monthly",
  gulfKuwait: "monthly",
  gulfBahrain: "monthly",
  gulfOman: "monthly",
};

export default function sitemap() {
  const lastModified = new Date(SITEMAP_FROZEN_LASTMOD);

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

  const geoServiceDetails = SERVICES.map((service) => ({
    url: `${SITE_URL}${getUaeServicePath(service)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: service.isPriority ? 0.72 : 0.6,
  }));

  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const resourcePages = [
    {
      url: `${SITE_URL}/resources/ux-audit-checklist`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    },
  ];

  return [
    ...coreRoutes,
    ...serviceCategories,
    ...serviceDetails,
    ...geoServiceDetails,
    ...blogPosts,
    ...resourcePages,
  ];
}
