---
name: porter-design
description: Use this skill to generate well-branded interfaces and assets for Porter Metrics, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full design guide: visual foundations, iconography, build rules.
- `styles.css` + `tokens/` — link `styles.css` once; everything is CSS custom properties (`--porter-purple`, `--font-display`, …).
- `components/<Name>/` — Button, Card, Badge, Eyebrow, Heading (`.jsx` + `.prompt.md` per component).
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand).
- `ui_kits/marketing/` — full Porter Metrics landing page recreation.

## The five rules to never break
1. Type is the hero — huge, tight, uppercase on covers.
2. Solid color only, never gradients. Max 3 colors per surface.
3. No drop shadows, no decorative pills (badges excepted), no random icons, no emoji.
4. Eyebrows and badges are always IBM Plex Mono, uppercase, tracked.
5. Two-line stacked headline; accent one key word in purple via `<strong>`.
