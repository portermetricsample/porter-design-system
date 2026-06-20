# Porter Metrics Design System — "Porter Brand Kit"

Marketing-analytics platform that pulls data from **25+ ad and marketing
sources** into on-brand dashboards and reports for agencies and marketers. This
is the **Koho-inspired brand kit**: massive Inter typography is the protagonist,
solid brand colors, and zero decoration.

> **Design philosophy in one line:** type is the hero, color is the canvas,
> everything else gets out of the way.

---

## Sources this system was built from

- **Local codebase:** `Porter Design System/` — the authored React library
  (`src/components/*.tsx`, `src/porter.css`, `design-notes/how-to-use.md`).
- **GitHub repo:** `portermetricsample/porter-design-system`
  (`https://github.com/portermetricsample/porter-design-system`) — same library
  plus `.design-sync/` with authored component previews and `conventions.md`.
  Explore it to recreate or extend product-faithful designs.

Both describe the same five primitives and token set; this project ports them to
the compiler's format (CSS tokens + JSX components + specimen cards + a UI kit).

> The source repo's `NOTES.md` is explicit that it "mirrors the brand-kit
> primitives only (no slide/landing/gallery section components)" and "is not the
> actual Porter product code." So the **app/dashboard is intentionally not part
> of this system** — these primitives serve marketing surfaces.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import` lines only).
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `components.css`.
- `readme.md` — this file. `SKILL.md` — Agent-Skills-compatible wrapper.

**Components** (`components/<Name>/` — `.jsx` + `.d.ts` + `.prompt.md` + card)
- `Button` · `Card` · `Badge` · `Eyebrow` · `Heading`

**Foundation cards** (`guidelines/` — render in the Design System tab)
- Colors: core, accents, neutrals, purple scale, tint scales
- Type: display, headings, body & mono
- Spacing: space scale, radius
- Brand: headline pattern, principles, surface families

**UI kit** (`ui_kits/marketing/`)
- `index.html` — full Porter Metrics landing page (open this)

---

## VISUAL FOUNDATIONS

**Color.** Solid only — **never gradients**. Primary purple `#6701E6` carries
actions and accents; signature dark `#1A0340` anchors dramatic surfaces; cream
`#FDF8F0` is the soft paper background. Pink `#EC4899`, aqua `#2DD4BF`, yellow
`#FBBF24` are supporting accents (aqua/yellow text reads on dark). **Electric
lime `#CDFB52` (`--accent`) is the highlight color** — reserved for the single
positive/featured thing on a surface (a winning metric, a recap pill, a cover
underline, a CTA strip). It sings on dark/purple; on light surfaces use the
deeper `#9BC400` (`--accent-deep`) so text stays legible. **Max 3
colors per surface.** Imagery, when present, is not the point — there are no
photographic treatments in the kit; color blocks do the work.

**Type.** Inter for everything (headlines *and* body); IBM Plex Mono for
eyebrows, badges, and meta. Display is Inter **900**, `letter-spacing: -4px`,
`line-height: 0.9`, UPPERCASE — genuinely massive (72–140px). H1 800/-2.5px,
H2 800/-1.5px. Body Inter 400, 18px, 1.55. One word per headline is wrapped in
`<strong>` to tint it purple (900 weight).

**Spacing & layout.** Generous, even rhythm (4→128px scale); sections breathe
with ~96px vertical padding; 1200–1280px max content width. Layout glue uses the
token custom properties, never hard-coded hex.

**Backgrounds.** Flat solid fills only. No images, no full-bleed photography, no
repeating patterns/textures, no gradients, no grain. Sections alternate within
the approved family (cream / white / lavender / purple / dark).

**Corners & surfaces.** Cards are rounded `20px` (large feature surfaces 28px);
buttons 10–14px; **badges are the only pill** (999px) in the system. Cards are a
plain colored container with generous padding — **no drop shadow, no decorative
border** (an optional 1px hairline on light surfaces is the only border).

**Shadows.** There is **no shadow system** — by design. The one `box-shadow`
usages are *inset* hairlines/rings (outline button ring, bordered card), never
elevation. Don't add elevation shadows.

**Animation.** Minimal and functional. Buttons transition `transform 0.08s` and
`opacity 0.15s`. Press state nudges down `translateY(1px)`. No bounces, no
decorative loops, no parallax.

**Hover / press states.** Buttons darken via solid color + slight opacity on
disabled (0.45); press = 1px downward nudge. Keep interactions quiet.

**Borders & transparency.** A single hairline (`#E5E7EB`) on light surfaces;
on dark surfaces, low-opacity white rules (`rgba(255,255,255,0.12)`) and chips
(`rgba(255,255,255,0.08)`). No blur, no glass.

---

## ICONOGRAPHY

**Porter's brand is deliberately icon-light** — "no random icons" is an explicit
principle, and the source codebase ships **zero icon assets** (no icon font, no
SVG sprite, no PNG glyphs). Decoration is carried by **type and solid color**,
not iconography.

Practical guidance:
- Prefer **no icon**. If a list needs a marker, use the brand's em-dash bullet
  (`—` tinted purple/aqua), as in the pricing feature lists.
- The only "shape" primitive is the **Badge** pill (mono, uppercase) for
  functional tags — use it instead of reaching for an icon.
- If a product surface genuinely needs UI icons (it won't, for marketing), use a
  thin, single-weight line set (e.g. **Lucide**, 1.5px stroke, no fill) from CDN
  and keep them monochrome — but this is a **substitution**, flagged here, not
  something present in the source.
- **No emoji, no unicode-glyph icons.**

**Logo:** the source ships **no logo file**. The UI kit uses a typographic
wordmark ("Porter" + a small purple square), which is on-brand (type-as-hero).
*If you have the official Porter Metrics logo, drop it into `assets/` and swap
the `Wordmark` component.*

---

## Build rules (cheat sheet)

1. Type is the hero — go big, tight, uppercase on covers.
2. Solid color only. Never gradients.
3. No drop shadows. No decorative pills (badges excepted). No random icons.
4. Max 3 colors per surface.
5. Eyebrows & badges are always mono, uppercase, tracked.
6. Two-line stacked headline; accent one key word in purple with `<strong>`.
7. Style components through their props; use token custom properties for glue —
   never hard-code hex.

---

## Caveats / substitutions

- **Fonts load from Google Fonts at runtime** (Inter + IBM Plex Mono) via an
  `@import` in `tokens/typography.css` — they are **not self-hosted/bundled**.
  Offline, designs fall back to system fonts. Drop woff2 files + `@font-face`
  into the project to self-host.
- **No official logo or brand imagery** was provided; a typographic wordmark
  stands in.
