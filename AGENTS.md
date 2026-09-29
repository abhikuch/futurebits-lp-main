## Learned User Preferences
- User prefers autonomous execution and asks not to wait between phases.
- User prefers concise, direct progress toward implementation over extended discussion.
- User expects primary call-to-action buttons to use consistent short labeling site-wide (“Book a call”) unless a vertical explicitly requires different wording.
- User expects thoughtful design judgment for layout and motion work (explicit hierarchy, sequencing, and editorial density), not mechanical uniform grids.
- For site-wide animation and motion passes, follow the Cursor user-level skill at `/Users/abhi/.cursor/skills/motion-design/SKILL.md`.
- Keep reusable agent skills at `/Users/abhi/.cursor/skills/`, not duplicated in per-project `.agents/skills/` folders.
- Prefer vertical-first service discovery from `/ai`, `/markets`, and `/design` rather than treating `/services` as the primary entrypoint.
- Homepage `/` (and shared chrome like `/about`) should match the vertical pages’ shared design system and cadence, while AI/Markets/Design palettes stay hard-isolated.
- Brand narrative: Futurebits as makers of the bits — digital design, software, and automation in one place.
- Primary SEO and enquiry focus is UAE and the Gulf for the service catalog.
- For Mission Control and similar operator tools, design and verify from real user/operator workflows (actionable per-brand strategy and setup), not agent-centric assumptions.
- For Mission Control setup surfaces, prefer editable table UIs with validation over dense multi-card forms; Social should feel Buffer-like (pulse, queue/drafts/approvals/sent, insights).

## Learned Workspace Facts
- Current focus includes `/`, `/about`, and the three primary vertical pages: `/ai`, `/markets`, and `/design`.
- User has explicitly deprioritized CMS integration for the current phase.
- User has explicitly deprioritized case studies for the current phase.
- AI, Markets, and Design are hard-isolated visual systems: never cross-mix palettes, motifs, or hardcoded colors across vertical landing pages or their service templates; use each vertical’s tokens only.
- Service category, listing, and detail pages must inherit the parent vertical’s motifs, hero treatment, and spacing cadence so they read as part of that vertical.
- Testimonials use a shared bento layout across verticals; carousels are not the desired pattern.
- Agent-readiness for `futurebits.tech` is an active priority (real 404s with recovery content, crawlable SSR copy, markdown `Accept` negotiation with `Vary`, and `llms.txt` when-to-use guidance).
- Marketing site `futurebits.tech` deploys from this repo via Vercel on push to `main`.
- Open Graph images use ogimagecn (`src/app/og/route.jsx`) with track-specific variants for home/AI/Markets/Design; use the real Futurebits logo, not placeholder brand marks.
- Mission Control is `Futurebits-Tech/mission-control` (local checkout `/Users/abhi/Downloads/Cursor/mission-control`), live at `https://mission.futurebits.tech`, on the Hostinger VPS at `/srv/mission-control` (Docker Compose; SSH host `tgimc-hostinger`).
- Mission Control is a multi-brand marketing control plane (Buffer/SES/Cal/analytics adapters; human approval before publish/send); the UI must support adding and configuring multiple Buffer accounts and channels per brand, not env/seed-only setup.
