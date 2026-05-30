# Futurebits Design System

**Status:** Draft for review  
**Reference pages:** `/ai`, `/design`, `/markets`  
**Goal:** Apply this spec to all secondary pages (`/services`, `/about`, `/blog`, `/press`, `/resources`, etc.) so they feel like part of the same product — not a separate template.

---

## 1. Design principles (from the core pages)

1. **Dark-first, vertical-accented** — Near-black backgrounds with one accent family per vertical (cyan/purple for AI, white/light for Design, teal/steel for Markets).
2. **Typography does the hierarchy** — Montserrat for headings, Poppins for body/labels. No random `text-display-*` on content pages unless it matches `fb-hero-title`.
3. **Glass panels, not flat boxes** — Cards use `border-white/10`, low-opacity fills, optional `backdrop-blur-sm`, and hover brightening — not plain gray rectangles.
4. **Section rhythm** — Core pages alternate full-bleed hero → proof band → link band → `fb-section` content blocks → engagement → FAQ → footer.
5. **Decorations are optional but themed** — Glow orbs, gradient rails, particles, and hero imagery belong to vertical identity; secondary pages should use the matching vertical’s glow/divider tokens, not generic purple blur only.
6. **One navbar, one footer pattern** — Fixed `TopNavbar` (glass pill) on interior pages; vertical landings embed the same nav inside hero. Footer uses `SiteFooter` or vertical Footer with matching `backgroundClassName`.

---

## 2. Color palette

### Base (shared)

| Token | Hex / value | Usage |
|-------|-------------|--------|
| `bg-base-ai` | `#060618` / `#060719` / `#000000` (hero) | AI page shell, FAQ, POV strips |
| `bg-base-design` | `#08081E` | Design page shell, engagement section |
| `bg-base-markets` | `#080808` | Markets page shell |
| `bg-band-dark` | `#050512` | ProofBand background |
| `bg-section-tint` | `fb-section` utility | Section top border + subtle vertical gradient |
| `text-primary` | `text-white` | Headings |
| `text-body` | `text-white/70` – `text-white/80` | Body copy |
| `text-muted` | `text-white/45` – `text-white/60` | Eyebrows, meta, breadcrumbs |
| `border-subtle` | `border-white/10` – `border-white/20` | Cards, dividers |
| `surface-panel` | `bg-white/[0.02]` – `bg-white/[0.05]` | Panels and cards |

### AI accent (`/ai`)

| Token | Value |
|-------|--------|
| Primary accent | `#01B0EA` (cyan) |
| Secondary accent | `#2E2688` (purple) |
| Hero gradient rail | `AI_BOTTOM_RAIL_GRADIENT` — see `themeTokens.js` |
| Beam CTA background | `#2E2688` (`MarketingButton tone="ai"`) |
| Title gradient | `from-white via-[#DDF7FF] to-[#B6E9FF]` |
| Glow orbs | `#2E2688/35` left, `#01B0EA/25` right |

### Design accent (`/design`)

| Token | Value |
|-------|--------|
| Primary accent | `#01B0EA` (cyan beam button) |
| Hero light asset | `assets/design/light.webp` — centered above fold |
| Particles | White dots, low quantity, hero only |
| Title gradient | White → white/80 (minimal color in headline) |
| Beam CTA background | `#01B0EA` (`MarketingButton tone="design"`) |
| Card borders | `border-white/20`, brighter glass fills |

### Markets accent (`/markets`)

| Token | Value |
|-------|--------|
| Primary accent | `#267088` (steel teal) |
| Secondary accent | `#7BC3D8` (kicker / labels) |
| Hero background | Wavy chart imagery + `#000000` gradient overlay |
| Beam CTA | White fill, black text (`MarketingButton tone="markets"`) |
| Title gradient | `from-white via-[#E7F6FB] to-[#C2E6F1]` |
| Glow orb | `#267088/30` |

### Canonical gradient (brand rail)

Used on AI hero bottom, testimonial borders, spotlight effects:

```
#060618 → #2E2688 → #01B0EA → #FFFFFF → #01B0EA → #2E2688 → #060618
```

Defined as `AI_BOTTOM_RAIL_GRADIENT` in `src/app/services/themeTokens.js`.

---

## 3. Typography

### Font families

- **Headings:** `font-montserrat` — `--font-montserrat`
- **Body / labels / nav:** `font-poppins` — `--font-poppins`

### Utility classes (use these — do not invent one-offs)

| Class | Use | Spec |
|-------|-----|------|
| `fb-kicker` | Eyebrow pill above hero | 11px, uppercase, `tracking-[0.2em]`, pill border `white/20`, `bg-white/[0.04]` |
| `fb-hero-title` | Page H1 | Montserrat semibold, `clamp(2rem, 5vw, 4.25rem)`, `leading-[1.1]` |
| `fb-hero-copy` | Hero subhead | Poppins, `clamp(0.95rem, 1.8vw, 1.35rem)`, `text-white/70`, max-w-3xl |
| `fb-h2` | Section titles | Montserrat semibold, `clamp(1.65rem, 3.2vw, 2.6rem)` |
| `fb-h3` | Card / subsection titles | Montserrat semibold, `clamp(1.05rem, 2vw, 1.35rem)` |

### Eyebrow pattern (non-pill)

Used in EngagementModels, FAQ, POV:

```html
<p class="font-poppins text-xs uppercase tracking-[0.25em] text-white/50">Label</p>
```

### Avoid on content pages

- Raw `text-display-md` / `text-display-lg` for H1 (About page currently does this — inconsistent with core pages)
- Default `Heading` component sizing **without** also applying `fb-hero-title` or `fb-h2` where appropriate
- `text-lg` body without `max-w-*` constraint (hero copy should stay readable width)

---

## 4. Layout & spacing

### Shell widths

| Context | Max width | Padding | Source |
|---------|-----------|---------|--------|
| Marketing sections | `max-w-[1200px]` / `fb-shell` | `px-6 sm:px-10 lg:px-16` | ProofBand, FeaturedServiceLinks |
| UI Container | `max-w-6xl` (1152px) | `px-6` | `components/ui/container.jsx` |
| Hero content | `max-w-4xl` | centered | AI / Markets heroes |
| Design hero | `max-w-[1250px]` | `px-4 sm:px-8` | Design hero |
| Navbar | `max-w-[1160px]` | fixed top | TopNavbar |

**Rule for secondary pages:** Pick one shell per page type and stick to it. Prefer `Container` + `Section` for hub/content pages, but match padding to `fb-shell` (`sm:px-10 lg:px-16`) when aligning with marketing bands.

### Vertical spacing

| Element | Class |
|---------|--------|
| Page top (below fixed nav) | `pt-32 sm:pt-36` |
| Section default | `Section` → `py-20 sm:py-28` (override intentionally for tighter bands) |
| Proof / link bands | `py-10` – `py-14` |
| Hero bottom padding | `pb-12` |

### Section wrapper

Core pages wrap major blocks in:

```html
<div class="fb-section">…</div>
```

`fb-section` = top border `white/07` + subtle top-down white gradient. **Secondary pages should use this between major content blocks**, not bare `<section>` with only padding.

---

## 5. Components

### Navigation

| Component | Where | Notes |
|-----------|-------|-------|
| `TopNavbar` | All interior pages via layouts; embedded in vertical heroes | Glass pill, gradient bottom rail, diamond active indicator |
| Vertical nav wrappers | `Navbar.jsx` (AI/Markets), `DesignNavbar.jsx` | Thin wrappers → `TopNavbar` |

**Required on:** `/services/*`, `/about`, `/blog/*`, `/press`, `/resources/*`, `/contact`  
**Already on:** `/services` layout  
**Missing today:** `/about`, `/blog`, `/press`, `/resources` (no TopNavbar)

### Footer

| Component | Background |
|-----------|------------|
| `SiteFooter` | Pass `backgroundClassName` matching page vertical or `bg-[#060618]` |
| AI `Footer` | Vertical-specific (AI landing only) |
| Design / Markets `Footer` | Vertical-specific |

Interior pages should use **`SiteFooter`** with background matching page theme.

### CTAs

| Type | Class / component | When |
|------|-------------------|------|
| Primary shimmer | `MarketingButton` — `tone="ai" \| "design" \| "markets"` | Main conversion |
| Secondary outline | `fb-cta-secondary` | “See work”, “View services” |
| Simple white pill | `rounded-full bg-white text-[#060618] h-11 px-6` | ProofBand, EngagementModels mobile |
| Hub outline | `border border-white/30 hover:bg-white/10` | Services hub secondary links |

**Tone mapping by page context:**

| Page family | Primary CTA tone |
|-------------|------------------|
| AI services & `/ai` | `ai` |
| Design services & `/design` | `design` |
| Markets services & `/markets` | `markets` |
| Generic hub (services index, about, blog) | `ai` or white pill (pick one — recommend white pill for neutral pages) |

### Cards & panels

| Pattern | Classes |
|---------|---------|
| Standard panel | `fb-panel` → `rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm` |
| Service card (AI) | `rounded-2xl border border-[#01B0EA]/25 bg-gradient-to-b from-[#01B0EA]/10 to-white/[0.02] …` |
| Service card (Design) | `rounded-3xl border border-white/20 bg-gradient-to-b from-white/[0.1] …` |
| Service card (Markets) | `rounded-2xl border border-[#267088]/40 bg-gradient-to-b from-[#267088]/14 …` |
| FAQ item | `divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]` |
| Stat / proof cell | `rounded-xl border border-white/10 bg-black/10 p-5` |

### Shared marketing bands (reuse — do not rebuild)

| Component | Purpose |
|-----------|---------|
| `ProofBand` | 3-up stats + CTA |
| `FeaturedServiceLinks` | Pill links to services |
| `EngagementModels` | Sprint / Pod / Partner |
| `FAQSection` | Vertical FAQ + JSON-LD |
| `POVStrip` | Opinion block with accent glow |
| `Breadcrumbs` | Interior wayfinding — `text-white/55`, `/` separators |

---

## 6. Reference page anatomy

### `/ai` — `LandingPageAI`

```
bg-[#060719] wrapper
├── main bg-[#000000]
│   └── Hero (full viewport, particles, side SVGs, hero WebP, gradient bottom rail)
├── ProofBand vertical="ai"
├── FeaturedServiceLinks
├── fb-section → ServicesSection
├── fb-section → ProjectsSection
├── fb-section → TestimonialsCarousel
├── EngagementModels
├── FAQSection vertical="ai"
├── fb-section → AboutMe
├── fb-section → Feature
└── Footer (AI)
```

### `/design` — `DesignLandingPage`

```
bg-[#08081E] wrapper
├── main (particles + light.webp hero image)
│   └── Hero (social proof avatars, fb-kicker, centered copy, BeamButton design tone)
├── ProofBand vertical="design"
├── FeaturedServiceLinks
├── fb-section → Portfolio / Offering / Benefits / Intro
├── POVStrip vertical="design"
├── TestimonialsCarousel
├── EngagementModels
├── FAQSection vertical="design"
└── Footer (Design)
```

### `/markets` — `MarketLandingPage`

```
bg-[#080808] wrapper
├── main
│   ├── Navbar
│   └── Hero (WavyBackground, dark gradient, ShimmerButton markets tone)
├── ProofBand vertical="markets"
├── FeaturedServiceLinks
├── fb-section → OurSolutions / SupportedBroker / WhyUs
├── POVStrip vertical="markets"
├── fb-section → Testimonials / Benefits
├── EngagementModels
├── FAQSection vertical="markets"
├── fb-section → FooterCTA
└── Footer (Markets)
```

---

## 7. Vertical theme tokens (for services pages)

Already codified in **`src/app/services/themeTokens.js`**. Use these — do not hardcode one-off colors on service pages.

### Category list pages (`/services/[category]`)

Use `CATEGORY_VISUAL_THEME[categorySlug]`:

- `pageBg`, `kickerClass`, `dividerClass`, `titleClass`, `bodyClass`
- `serviceCardClass`, `ctaPanelClass`, `ctaButtonClass`
- `VerticalDecorations` for ai / design / markets (glow orbs, beams, diamonds)

Categories without a theme entry (`build`, `integrations-platform`, `startup-tech-partner`) fall back to **`DEFAULT_CATEGORY_THEME`** — this is why those pages look “generic” today.

### Service detail pages (`/services/[category]/[service]`)

Use:

- `DETAIL_VISUAL_THEME` — accent text, borders, chips, page bg
- `DETAIL_HERO_PRESET` — hero shell, title/subhead classes, CTA row, bottom rail (AI/design)
- `DETAIL_RHYTHM_PRESET` — section padding, card radius (`rounded-2xl` vs design’s `rounded-3xl`)

---

## 8. Page templates (target state for secondary pages)

### A. Neutral content page (About, Press, Resources index)

**Theme:** AI base (`bg-[#060618]`) — default brand surface  
**Must include:**

- [ ] `TopNavbar`
- [ ] Hero: `fb-kicker` + `fb-hero-title` + `fb-hero-copy`
- [ ] Optional: single purple/cyan glow orb (AI-style, subtle)
- [ ] Content in `fb-panel` or gradient-bordered cards
- [ ] CTA band: `ctaPanelClass` from `SERVICE_HUB_THEME` or AI theme
- [ ] `SiteFooter backgroundClassName="bg-[#060618]"`

### B. Services hub (`/services`)

**Theme:** `SERVICE_HUB_THEME`  
**Improvements needed:**

- [ ] Add `TopNavbar` (layout exists for nested routes only — hub page should match)
- [ ] Category cards should use each category’s `serviceCardClass`, not generic `white/[0.03]`
- [ ] Add `FeaturedServiceLinks` or equivalent cross-links
- [ ] Optional `ProofBand` or stats row

### C. Category / service pages

**Theme:** Map category → vertical theme (see §7)  
**Already partially implemented** — ensure build / integrations / startup get dedicated themes or inherit closest vertical.

### D. Blog index & post

**Theme:** AI base + design typography rhythm  
**Must include:**

- [ ] `TopNavbar`
- [ ] Hero matches §3 utilities (blog index already uses `fb-kicker` + `fb-hero-title` — good)
- [ ] Post cards: use vertical `serviceCardClass` or `fb-panel` with hover
- [ ] Article page: max-w-3xl prose column, FAQ-style dividers for sections
- [ ] Related services band → `FeaturedServiceLinks`

### E. Contact

**Theme:** Match AI (primary conversion path)

---

## 9. Gap analysis — what secondary pages do wrong today

| Issue | Core pages | Secondary pages today |
|-------|------------|------------------------|
| Navbar | Always present | Missing on `/about`, `/blog`, `/press`, `/resources` |
| Hero typography | `fb-hero-title` + `fb-hero-copy` | About uses `text-display-md`; inconsistent subheads |
| Kicker | `fb-kicker` pill | About uses plain uppercase text (no pill) |
| Background | Vertical-specific + decorations | About: single generic purple orb only |
| Section rhythm | `fb-section` between blocks | Services/about/blog: flat sections |
| Cards | Gradient glass per vertical | Generic `border-white/10 bg-white/[0.03]` everywhere |
| CTAs | `MarketingButton` or white pill | Mixed Link styles, no shimmer on primary |
| Category themes | Full token set for 3 verticals | Build / Integrations / Startup use `DEFAULT_*` — look washed out |
| Container width | Consistent shell | Mix of `max-w-5xl`, `max-w-6xl`, custom padding |
| Footer bg | Matches page bg | Sometimes mismatched |

---

## 14. Decisions (locked)

| Question | Decision |
|----------|----------|
| Neutral pages accent | **By topic** — blog/resources cards and article pages use the accent of their category (AI, Design, Build/Product, Markets). Hub/about/press stay neutral shell with topic accents only on tagged content. |
| Build / Integrations / Startup | **New shared accent: Platform (amber `#F5B942`)** — distinct from AI cyan, Design white, Markets teal. Theme key: `platform` in `themeTokens.js`. |
| Services hub | **Neutral directory** — neutral hero and CTA; each category card uses its own vertical card style. |
| Navbar CTA | **Context-aware Cal link** — `getCalLinkForPath()` in `src/lib/page-theme.js` (design → `CAL.design`, markets → `CAL.markets`, platform/build → `CAL.ai`, blog posts → by post category). |
| Footer | **`SiteFooter` on all interior/content pages**; vertical-specific footers remain on `/ai`, `/design`, `/markets` landings only. |

### Platform accent (Build · Integrations · Startup)

| Token | Value |
|-------|--------|
| Primary | `#F5B942` (amber) |
| Secondary | `#B45309` |
| Light text | `#FDE68A` / `#FEF3C7` |
| Categories | `build`, `integrations-platform`, `startup-tech-partner` |

### Topic → theme mapping (blog & resources)

| Label | Theme key |
|-------|-----------|
| AI | `ai-automation` |
| Design | `design` |
| Build | `platform` |
| Product | `platform` |
| Markets | `markets-trading` |

---

## 15. Implementation status

- [x] Platform theme in `themeTokens.js`
- [x] `page-theme.js` helpers + context-aware Cal
- [x] `TopNavbar` context-aware CTA
- [x] Services hub category cards themed per vertical
- [x] Build / Integrations / Startup category + detail pages
- [x] About, Blog, Press, Resources aligned to design system
- [x] `PageAccentGlow` for topic-accent backgrounds
- [ ] Contact / Privacy — apply neutral template (if needed)
- [ ] Visual QA pass at mobile + desktop

---

*Reference landings (`/ai`, `/design`, `/markets`) unchanged — they remain the source of truth for full marketing page anatomy.*

---

## 11. Motion & performance

- **AI hero:** CSS-only fade-up (`fb-ai-hero-*`) — preferred for LCP
- **Design / Markets:** Framer Motion on hero — acceptable; respect `prefers-reduced-motion` (already in `globals.css`)
- **Particles / wavy backgrounds:** Hero only — do not add to services hub or blog
- **Hover:** `transition` + slight border/background brighten on cards — no scale except testimonial cards

---

## 12. Source file map

| Concern | File |
|---------|------|
| Global typography utilities | `src/app/globals.css` |
| Service/category theme tokens | `src/app/services/themeTokens.js` |
| Navbar | `src/components/shared/TopNavbar.jsx` |
| Footer (interior) | `src/components/shared/SiteFooter.jsx` |
| CTA buttons | `src/components/ui/marketing-button.jsx` |
| Layout primitives | `src/components/ui/container.jsx`, `section.jsx`, `heading.jsx` |
| AI landing | `src/components/landing-page-AI/LandingPageAI.jsx` |
| Design landing | `src/components/design/DesignLandingPage.jsx` |
| Markets landing | `src/components/market/MarketLandingPage.jsx` |
| Shared bands | `src/components/shared/ProofBand.jsx`, `EngagementModels.jsx`, `FAQSection.jsx`, `FeaturedServiceLinks.jsx`, `POVStrip.jsx` |
| Topic / path theme helpers | `src/lib/page-theme.js` |
| Page accent glow | `src/components/shared/PageAccentGlow.jsx` |

