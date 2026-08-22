## Learned User Preferences
- User prefers autonomous execution and asks not to wait between phases.
- User prefers concise, direct progress toward implementation over extended discussion.
- User expects primary call-to-action buttons to use consistent short labeling site-wide (“Book a call”) unless a vertical explicitly requires different wording.
- User expects thoughtful design judgment for layout and motion work (explicit hierarchy, sequencing, and editorial density), not mechanical uniform grids.
- For site-wide animation and motion passes, follow the Cursor user-level skill at `/Users/abhi/.cursor/skills/motion-design/SKILL.md`.
- Keep reusable agent skills at `/Users/abhi/.cursor/skills/`, not duplicated in per-project `.agents/skills/` folders.
- Prefer vertical-first service discovery from `/ai`, `/markets`, and `/design` rather than treating `/services` as the primary entrypoint.

## Learned Workspace Facts
- Current focus scope is three primary pages: `/ai`, `/markets`, and `/design`.
- User has explicitly deprioritized CMS integration for the current phase.
- User has explicitly deprioritized case studies for the current phase.
- AI, Markets, and Design are hard-isolated visual systems: never cross-mix palettes, motifs, or hardcoded colors across vertical landing pages or their service templates; use each vertical’s tokens only.
- Service category, listing, and detail pages must inherit the parent vertical’s motifs, hero treatment, and spacing cadence so they read as part of that vertical.
- Testimonials use a shared bento layout across verticals; carousels are not the desired pattern.
- Agent-readiness for `futurebits.tech` is an active priority (real 404s with recovery content, crawlable SSR copy, markdown `Accept` negotiation with `Vary`, and `llms.txt` when-to-use guidance).
