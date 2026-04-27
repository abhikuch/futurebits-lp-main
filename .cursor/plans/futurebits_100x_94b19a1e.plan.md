# Futurebits 1x -> 100x Execution Plan

Last updated: 2026-04-27
Status: Phases 1-5 complete, optimization backlog remains

## Scope lock (as requested)

- Core pages: `/ai`, `/markets`, `/design`
- Supporting pages: `/about`, `/contact`, `/privacy-policy`
- Redirects: `/` -> `/ai` (301), `/market` -> `/markets` (301)
- Out of scope: CMS, case studies, A/B testing, work/pricing/blog pages

## Phase 1 - Foundation and architecture (Completed)

- [x] Create central site config (`src/config/site.js`)
- [x] Route reshape + canonical redirects
- [x] Consolidate route metadata generation
- [x] Switch fonts to `next/font`
- [x] Defer analytics loading (`lazyOnload`)
- [x] Add security headers + image remote patterns
- [x] Build `/about` and `/contact` (Server Action form)
- [x] Add `sitemap`, `robots`, `manifest`
- [x] Add JSON-LD (Organization, Website, Service, FAQ)
- [x] Accessibility quick wins (skip link, reduced motion guards)
- [x] Inline modules added on all 3 vertical pages (POV, models, FAQ)
- [x] Design token updates in Tailwind config
- [x] Dead code/dependency cleanup
- [x] CTA/button consolidation into shared marketing button
- [x] Shared UI primitives (`Container`, `Section`, `Heading`)
- [x] Decorative lazy-mount wrapper added for heavy particle effects
- [x] Verify with `npm run lint` and `npm run build`

## Current verification state

- Lint: passing (no warnings/errors)
- Build: passing
- Rendering: static generation succeeds for all route targets

## Phase 2 - Conversion and messaging polish (Completed)

### 2.1 Above-the-fold clarity
- [x] Rewrite hero headlines/subheads on `/ai`, `/markets`, `/design` for sharper ICP/value proposition fit
- [x] Normalize CTA copy hierarchy (primary vs secondary actions)
- [x] Tighten nav CTA consistency across all breakpoints

### 2.2 Proof and trust density
- [x] Strengthen trust block language (outcomes over generic claims)
- [x] Refine testimonial snippets to emphasize business impact
- [x] Add compact capability/proof rows near first scroll depth

### 2.3 Information scent and scanability
- [x] Reduce duplicate/repetitive section copy across verticals
- [x] Improve section heading semantics and readability rhythm
- [x] Ensure each section has one explicit conversion intent

### 2.4 SEO and AEO refinement
- [x] Tune per-page meta title/description for intent match
- [x] Tighten FAQ phrasing to improve answer-engine pickup
- [x] Validate structured data coherence against page copy

### 2.5 Final QA pass
- [x] Mobile spacing and CTA visibility sweep
- [x] Keyboard/focus walkthrough on nav, forms, disclosures
- [x] Re-run lint/build and spot-check route behavior

## Phase 3 - Visual and conversion polish (Completed)

- [x] Introduce a shared proof band module for first-scroll trust signals
- [x] Add vertical-specific proof/value content (`ai`, `markets`, `design`)
- [x] Place proof band immediately after hero on all three vertical pages
- [x] Improve mobile-first CTA visibility inside the proof band
- [x] Verify with lint + production build

## Phase 4 - Consistency and interaction polish (Completed)

- [x] Unify navbar CTA components with shared marketing button styles
- [x] Tighten hero mobile horizontal spacing for CTA rows
- [x] Improve focus-visible states on high-intent CTA links/buttons
- [x] Add subtle hover feedback to proof cards for better scanability
- [x] Re-run lint/build and confirm static generation health

## Phase 5 - Conversion instrumentation (Completed)

- [x] Add canonical CTA event naming in shared CTA component
- [x] Emit `gtag` CTA event payloads with tone/label context
- [x] Attach analytics data attributes to shared marketing CTA buttons
- [x] Verify lint/build and static generation health

## Phase 6 - Backlog (Queued)

### 6.1 Visual QA and consistency
- [ ] Cross-page typography rhythm pass (heading scale and line-length harmonization)
- [ ] Color/contrast consistency audit for text-on-dark sections
- [ ] Standardize section top/bottom rhythm around transition boundaries

### 6.2 Performance and runtime quality
- [ ] Optional: split heavy carousel/decorative modules with dynamic imports where safe
- [ ] Add lightweight web-vitals event mapping for conversion-critical pages
- [ ] Run Lighthouse pass and record baseline scores in repo docs

### 6.3 Conversion instrumentation follow-through
- [ ] Add non-CTA funnel events (`contact_submit_success`, section-depth milestones)
- [ ] Ensure non-shared CTA links (if any) emit consistent analytics payloads
- [ ] Add analytics QA checklist for future copy/layout changes

## Notes

- This plan reflects the currently implemented codebase state.
- Any net-new page scope (e.g., pricing/work pages or experimentation) should be added as a separate roadmap phase.
