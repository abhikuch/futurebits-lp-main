import { BLOG_POSTS } from "@/content/blog";
import { FREE_RESOURCES } from "@/content/link-building";
import { SERVICE_CATEGORIES, SERVICES } from "@/content/services";
import { COMPANY, ROUTES, SITE_URL } from "@/config/site";
import { getGulfPage, getGulfPageKeyForPath, GULF } from "@/content/gulf";
import {
  getUaePage,
  getUaePageKeyForPath,
  getUaeServiceCopy,
  parseUaeServicePath,
  UAE,
} from "@/content/uae";
import { getUaeServiceLandingBySlugs } from "@/content/uae-service-landings";

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
      "## Vertical entry points",
      `- [AI & Automation](${SITE_URL}${ROUTES.ai.path})`,
      `- [Design](${SITE_URL}${ROUTES.design.path})`,
      `- [Markets](${SITE_URL}${ROUTES.markets.path})`,
      "",
      "## UAE & GCC",
      `- [UAE hub](${SITE_URL}${ROUTES.uae.path}): GST hours, +971 line, dedicated geo landing per service`,
      `- [Gulf hub](${SITE_URL}/gulf): country hubs for KSA, Qatar, Kuwait, Bahrain, Oman — not 90×country clones`
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
    "## For UAE teams",
    getUaeServiceCopy(service).delivery,
    "",
    `Dedicated geo landing: ${SITE_URL}/uae/services/${service.categorySlug}/${service.slug}`,
    "",
    "## Next steps",
    `- [Book a call](${SITE_URL}${ROUTES.contact.path})`,
    `- [UAE & Gulf landing](${SITE_URL}/uae/services/${service.categorySlug}/${service.slug})`,
    `- [UAE hub](${SITE_URL}/uae)`,
    `- [All ${service.categoryTitle} services](${SITE_URL}/services/${service.categorySlug})`,
    `- [Services hub](${SITE_URL}${ROUTES.services.path})`,
  ].join("\n");
}

/**
 * @param {string} path
 */
function uaeServiceLandingMarkdown(path) {
  const parsed = parseUaeServicePath(path);
  if (!parsed) return null;
  const landing = getUaeServiceLandingBySlugs(
    parsed.categorySlug,
    parsed.serviceSlug
  );
  if (!landing) return null;

  const lines = [
    `# ${landing.h1}`,
    "",
    landing.lede,
    "",
    `Canonical URL: ${SITE_URL}${landing.path}`,
    `Global catalog: ${SITE_URL}${landing.catalogPath}`,
    `Phone: ${UAE.phoneDisplay} · ${UAE.timezoneLabel}`,
    "",
    ...landing.body.flatMap((paragraph) => [paragraph, ""]),
    "## How we deliver this in the UAE and Gulf",
    ...landing.points.flatMap((point) => [
      `### ${point.title}`,
      "",
      point.body,
      "",
    ]),
  ];

  if (landing.related.length) {
    lines.push("## Related UAE & Gulf services");
    for (const item of landing.related) {
      lines.push(`- [${item.title}](${SITE_URL}${item.path})`);
    }
    lines.push("");
  }

  lines.push("## FAQ");
  for (const item of landing.faqs) {
    lines.push(`### ${item.q}`, "", item.a, "");
  }

  lines.push(
    "## Next steps",
    `- [Book a call](${SITE_URL}${ROUTES.contact.path})`,
    `- [UAE hub](${SITE_URL}/uae)`,
    `- [Gulf hub](${SITE_URL}/gulf)`,
    `- [Global catalog page](${SITE_URL}${landing.catalogPath})`
  );

  return lines.join("\n");
}

/**
 * @param {string} path
 */
function gulfMarkdown(path) {
  const key = getGulfPageKeyForPath(path);
  if (!key) return null;
  const page = getGulfPage(key);
  if (!page) return null;

  const lines = [
    `# ${page.title}`,
    "",
    page.lede,
    "",
    `Canonical URL: ${SITE_URL}${page.path}`,
    `Phone: ${GULF.phoneDisplay} · ${GULF.timezoneLabel}`,
    "",
    ...page.body.flatMap((paragraph) => [paragraph, ""]),
    "## How delivery works",
    ...page.points.flatMap((point) => [
      `### ${point.title}`,
      "",
      point.body,
      "",
    ]),
  ];

  if (page.countries?.length && page.key === "hub") {
    lines.push("## Country hubs");
    for (const country of page.countries) {
      lines.push(
        `- [${country.name}](${SITE_URL}${country.href}): ${country.cities.join(", ")}`
      );
    }
    lines.push("");
  }

  if (page.featured?.length) {
    lines.push("## Featured services");
    for (const service of page.featured) {
      lines.push(`- [${service.title}](${SITE_URL}${service.path})`);
    }
    lines.push("");
  }

  for (const category of page.categories ?? []) {
    lines.push(`## ${category.title}`, "");
    for (const service of category.services) {
      lines.push(`- [${service.title}](${SITE_URL}${service.path})`);
    }
    lines.push("");
  }

  lines.push("## FAQ");
  for (const item of page.faqs) {
    lines.push(`### ${item.q}`, "", item.a, "");
  }

  lines.push(
    "## Next steps",
    `- [Book a call](${SITE_URL}${ROUTES.contact.path})`,
    `- [UAE hub](${SITE_URL}/uae)`,
    `- [Gulf hub](${SITE_URL}/gulf)`
  );

  return lines.join("\n");
}

/**
 * @param {string} path
 */
function uaeMarkdown(path) {
  const key = getUaePageKeyForPath(path);
  if (!key) return null;

  const page = getUaePage(key);
  if (!page) return null;

  const lines = [
    `# ${page.title}`,
    "",
    page.lede,
    "",
    `Canonical URL: ${SITE_URL}${page.path}`,
    `Phone: ${UAE.phoneDisplay} · ${UAE.timezoneLabel}`,
    "",
    ...page.body.flatMap((paragraph) => [paragraph, ""]),
    "## How we work with UAE companies",
    ...page.points.flatMap((point) => [
      `### ${point.title}`,
      "",
      point.body,
      "",
    ]),
  ];

  if (page.tracks?.length) {
    lines.push("## Tracks");
    for (const track of page.tracks) {
      lines.push(`- [${track.label}](${SITE_URL}${track.href}): ${track.body}`);
    }
    lines.push("");
  }

  for (const category of page.categories) {
    lines.push(`## ${category.title}`, "", category.intro, "");
    for (const service of category.services) {
      lines.push(
        `- [${service.title}](${SITE_URL}${service.path}): ${service.angle}`
      );
    }
    lines.push("");
  }

  lines.push("## FAQ");
  for (const item of page.faqs) {
    lines.push(`### ${item.q}`, "", item.a, "");
  }

  lines.push(
    "## Next steps",
    `- [Book a call](${SITE_URL}${ROUTES.contact.path})`,
    `- [UAE hub](${SITE_URL}/uae)`,
    `- [Contact](${SITE_URL}${ROUTES.contact.path})`
  );

  return lines.join("\n");
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
    uaeServiceLandingMarkdown(path) ??
    gulfMarkdown(path) ??
    uaeMarkdown(path) ??
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
    `- [UAE & GCC](${SITE_URL}/uae)`,
    `- [Gulf](${SITE_URL}/gulf)`,
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    `- [LLMs / agent guidance](${SITE_URL}/llms.txt)`,
  ].join("\n");
}
