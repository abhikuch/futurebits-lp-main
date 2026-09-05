/**
 * Shared JSDoc types for the service catalog, playbooks, and visual themes.
 * Import these typedefs from content and theme modules.
 */

/**
 * @typedef {"build" | "ai-automation" | "design" | "markets-trading" | "integrations-platform" | "startup-tech-partner"} CategorySlug
 *
 * @typedef {"ai-automation" | "design" | "markets-trading" | "platform" | "neutral"} ThemeKey
 *
 * @typedef {"ai" | "design" | "markets"} VerticalKey
 *
 * @typedef {"ai" | "design" | "markets" | "platform" | "ghost"} MarketingTone
 *
 * @typedef {"ai" | "markets" | "design" | "build" | "other"} ContactVertical
 *
 * @typedef {Object} ServiceCategory
 * @property {CategorySlug} slug
 * @property {string} title
 * @property {string} shortTitle
 * @property {string} description
 * @property {string} ctaLabel
 * @property {string} ctaHref
 *
 * @typedef {Object} ServiceRecord
 * @property {CategorySlug} categorySlug
 * @property {string} categoryTitle
 * @property {string} slug
 * @property {string} title
 * @property {string} path
 * @property {string} shortDescription
 * @property {string} hero
 * @property {string} subhead
 * @property {string} metaTitle
 * @property {string} metaDescription
 * @property {boolean} isPriority
 *
 * @typedef {Object} ServicePlaybook
 * @property {string} intro
 * @property {string} contrarian
 * @property {string} wontDo
 * @property {string[]} whoFor
 * @property {string[]} problems
 * @property {string[]} deliverables
 * @property {string[]} process
 * @property {string[]} differentiators
 * @property {{ q: string, a: string }[]} faqs
 * @property {string[]} chips
 * @property {string} [dominantAudience]
 * @property {string[]} [secondaryAudiences]
 *
 * @typedef {Object} ServicePageCopy
 * @property {string} hero
 * @property {string} subhead
 * @property {string} metaTitle
 * @property {string} metaDescription
 */

export {};
