import { CONTENT_UPDATED_AT, ROUTES, SITE_URL } from "@/config/site";
import { BLOG_POSTS } from "@/content/blog";
import {
  SERVICE_CATEGORIES,
  getIndexedServiceDetails,
} from "@/content/services";

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
};

function stableDate(isoDate) {
  return new Date(`${isoDate}T00:00:00.000Z`);
}

export default function sitemap() {
  const lastModified = stableDate(CONTENT_UPDATED_AT);

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

  const serviceDetails = getIndexedServiceDetails().map((service) => ({
    url: `${SITE_URL}${service.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPosts = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: stableDate(post.updatedAt ?? post.publishedAt),
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
    ...blogPosts,
    ...resourcePages,
  ];
}
