import { BLOG_POSTS } from "@/content/blog";
import { FREE_RESOURCES } from "@/content/link-building";
import { SERVICE_CATEGORIES, SERVICES } from "@/content/services";
import { COMPANY, ROUTES, SITE_URL } from "@/config/site";

const ROUTE_LIST = Object.values(ROUTES);

const RESOURCE_PAGES = [
  {
    path: "/resources/ux-audit-checklist",
    title: "Website UX Audit Checklist",
    description:
      "Free UX audit checklist for product teams evaluating signup, navigation, and conversion flows.",
  },
];

/**
 * @param {string} pathname
 */
export function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  const trimmed = pathname.replace(/\/+$/, "") || "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

/**
 * @param {string} path
 */
function routeMarkdown(path) {
  const route = ROUTE_LIST.find((item) => item.path === path);
  if (!route) return null;

  const lines = [
    `# ${route.title}`,
    "",
    route.description,
    "",
    `Canonical URL: ${SITE_URL}${route.path}`,
    "",
    "## Related links",
    `- [Services](${SITE_URL}/services)`,
    `- [Contact](${SITE_URL}${ROUTES.contact.path})`,
    `- [LLMs guidance](${SITE_URL}/llms.txt)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
  ];

  if (path === ROUTES.home.path) {
    lines.push(
      "",
      "## The rooms",
      "Home is the studio cover. AI, Markets, and Design are isolated tracks — do not treat `/services` as the primary discovery path.",
      `- [AI & Automation](${SITE_URL}${ROUTES.ai.path}): production AI for ops, support, and product`,
      `- [Markets](${SITE_URL}${ROUTES.markets.path}): trading and risk infrastructure`,
      `- [Design](${SITE_URL}${ROUTES.design.path}): product design plus frontend in the repo`,
      "",
      "## Next steps",
      `- [Book a call](${SITE_URL}${ROUTES.contact.path})`,
      `- [Contact](${SITE_URL}${ROUTES.contact.path})`
    );
  }

  if (path === ROUTES.blog.path) {
    lines.push("", "## Articles");
    for (const post of BLOG_POSTS) {
      lines.push(
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`
      );
    }
  }

  if (path === ROUTES.resources.path) {
    lines.push("", "## Free resources");
    for (const resource of FREE_RESOURCES) {
      lines.push(
        `- [${resource.title}](${SITE_URL}${resource.path}): ${resource.description}`
      );
    }
    lines.push("", "## Guides from the blog");
    for (const post of BLOG_POSTS.slice(0, 6)) {
      lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug})`);
    }
  }

  return lines.join("\n");
}

/**
 * @param {string} path
 */
function categoryMarkdown(path) {
  const match = path.match(/^\/services\/([^/]+)$/);
  if (!match) return null;

  const category = SERVICE_CATEGORIES.find((item) => item.slug === match[1]);
  if (!category) return null;

  const services = SERVICES.filter(
    (service) => service.categorySlug === category.slug
  );

  const lines = [
    `# ${category.title}`,
    "",
    category.description,
    "",
    `URL: ${SITE_URL}${path}`,
    "",
    "## Services in this category",
    ...services.slice(0, 12).map(
      (service) =>
        `- [${service.title}](${SITE_URL}${service.path}): ${service.shortDescription}`
    ),
  ];

  if (services.length > 12) {
    lines.push(`- …and ${services.length - 12} more on the services hub.`);
  }

  return lines.join("\n");
}

/**
 * @param {string} path
 */
function serviceMarkdown(path) {
  const service = SERVICES.find((item) => item.path === path);
  if (!service) return null;

  return [
    `# ${service.title}`,
    "",
    service.hero,
    "",
    service.subhead,
    "",
    `Category: ${service.categoryTitle}`,
    `URL: ${SITE_URL}${service.path}`,
    "",
    "## Next steps",
    `- [Book a call](${SITE_URL}${ROUTES.contact.path})`,
    `- [All ${service.categoryTitle} services](${SITE_URL}/services/${service.categorySlug})`,
    `- [Services hub](${SITE_URL}${ROUTES.services.path})`,
  ].join("\n");
}

/**
 * @param {string} path
 */
function blogMarkdown(path) {
  const match = path.match(/^\/blog\/([^/]+)$/);
  if (!match) return null;

  const post = BLOG_POSTS.find((item) => item.slug === match[1]);
  if (!post) return null;

  const lines = [
    `# ${post.title}`,
    "",
    post.description,
    "",
    `Published: ${post.publishedAt}`,
    `URL: ${SITE_URL}${path}`,
    "",
  ];

  for (const section of post.sections ?? []) {
    lines.push(`## ${section.heading}`, "", section.body, "");
  }

  if (post.serviceLinks?.length) {
    lines.push("## Related services");
    for (const link of post.serviceLinks) {
      lines.push(
        `- [${link.label}](${SITE_URL}/services/${link.categorySlug}/${link.serviceSlug})`
      );
    }
  }

  return lines.join("\n").trim();
}

/**
 * @param {string} path
 */
function resourceMarkdown(path) {
  const page = RESOURCE_PAGES.find((item) => item.path === path);
  if (!page) return null;

  return [
    `# ${page.title}`,
    "",
    page.description,
    "",
    `URL: ${SITE_URL}${page.path}`,
  ].join("\n");
}

/**
 * @param {string} pathname
 * @returns {{ body: string; status: number } | null}
 */
export function getMarkdownForPath(pathname) {
  const path = normalizePath(pathname);

  const body =
    routeMarkdown(path) ??
    categoryMarkdown(path) ??
    serviceMarkdown(path) ??
    blogMarkdown(path) ??
    resourceMarkdown(path);

  if (!body) return null;
  return { body, status: 200 };
}

/**
 * @param {string} pathname
 */
export function getNotFoundMarkdown(pathname) {
  const path = normalizePath(pathname);

  return [
    "# Page not found",
    "",
    `No page exists at \`${path}\` on ${COMPANY.name}.`,
    "",
    "## Start here",
    `- [Home](${SITE_URL}/)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    `- [LLMs / agent guidance](${SITE_URL}/llms.txt)`,
  ].join("\n");
}
