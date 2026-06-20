# AGENTS.md — Porter Metrics Design System

Contract for building reports, dashboards & slides on-brand. **Read this first.**
Every value here is canonical — do not invent colors, fonts, sizes, or spacing.

---

## 1. Non-negotiable rules

- **No gradients.** Solid colors only. Max 3 colors per surface.
- **No drop shadows.** Surfaces use color + a 2px border (or 1px inset hairline) only.
- **No emoji.** Not part of the brand.
- **Typography:** Bricolage Grotesque for display/headings, Hanken Grotesk for body/meta. (Inter/IBM Plex Mono are legacy — do not use for new work.)
- **Theming:** never hard-code a theme hex. Set `data-theme` on a wrapper and paint from the semantic vars in §4. Brand series colors (§5) are the only theme-agnostic hexes you repeat.
- **Stylesheet:** consumers link the single entry `styles.css` (it `@import`s all tokens). Components read from `window.PorterMetricsDesignSystem_101e0b`.

## 2. Fonts

```
--font-bricolage: 'Bricolage Grotesque', 'Inter', sans-serif;  /* display, headings, big numbers */
--font-hanken:    'Hanken Grotesk', 'Inter', sans-serif;        /* body, labels, meta, legends */
```
Loaded from Google Fonts in `tokens/typography.css`. Weights: Bricolage 400–800, Hanken 400–700.

## 3. Core brand color tokens (`tokens/colors.css`)

| Token | Hex | Role |
|---|---|---|
| `--porter-purple` | `#6701e6` | primary |
| `--porter-dark` | `#1a0340` | signature dark / primary text |
| `--porter-pink` | `#ec4899` | accent |
| `--porter-yellow`| `#fbbf24` | accent |
| `--porter-aqua` | `#2dd4bf` | accent |
| `--porter-cream` | `#fdf8f0` | soft paper bg |
| `--accent` (lime)| `#cdfb52` | highlight on dark/purple |
| `--accent-deep` | `#9bc400` | highlight on light |

Scales available: `--lime-100..700`, `--purple-100..950`, `--pink-100..700`, `--aqua-100..700`, `--yellow`, `--neutral`. Ink text: `--ink #1a0340`, `--ink-soft #4a4458`, `--ink-mute #8b85a0`.

## 4. The 4 themes (`tokens/themes.css`) — APPLY VIA `data-theme`

```html
<body data-theme="cream">   <!-- light · soft paper (default) -->
<body data-theme="white">   <!-- light · pure white -->
<body data-theme="blue">    <!-- dark · deep indigo -->
<body data-theme="purple">  <!-- dark · deep purple -->
```

Paint everything from these semantic vars (resolve per theme automatically):

| Var | cream | white | blue | purple |
|---|---|---|---|---|
| `--surface-bg` | `#fdf8f0` | `#ffffff` | `#100225` | `#1b0e36` |
| `--surface-card` | `#ffffff` | `#ffffff` | `#1c0942` | `#2a1850` |
| `--card-border` | `#e5e7eb` | `#e5e7eb` | `rgba(255,255,255,.10)` | `#3d2a5e` |
| `--text-title` | `#1a0340` | `#1a0340` | `#ffffff` | `#fff8ec` |
| `--text-body` | `#4a4458` | `#4a4458` | `#d9d2ee` | `#cdbfe8` |
| `--text-muted` | `#8b85a0` | `#8b85a0` | `#a79fce` | `#9c8dc0` |
| `--eyebrow-color`| `#6701e6` | `#6701e6` | `#a78bfa` | `#3fbe86` |
| `--accent-line` | `#6701e6` | `#6701e6` | `#a78bfa` | `#b79cf0` |
| `--grid-line` | `#ece6f5` | `#eef0f3` | `#2b1856` | `#3a2a5c` |
| `--highlight-fill`| `#9bc400`| `#9bc400` | `#cdfb52` | `#cdfb52` |

Note: the **purple** theme uses a **green eyebrow** (`#3fbe86`) — that's its signature, not a mistake.

## 5. Brand series colors (theme-agnostic — identical in all themes)

Use for data-series swatches/lines so channels read consistently everywhere:

```
--series-meta:      #6701e6   --series-google:    #2dd4bf
--series-instagram: #ec4899   --series-shopify:   #fbbf24
--series-other:     #1a0340
```

**Secondary chart/table tokens** (defined in `tokens/themes.css`):
- `--area-fill` — fill under a chart line (per-theme).
- `--heat-1..6` — **sequential** purple ramp (low→high). Use ONLY for intensity/volume (heat maps, choropleth) — encodes "how much", no good/bad meaning.
- `--cf-1..5` — **diverging** stoplight ramp (bad→good), anchored to brand status: `--cf-1` cherry (`#ec4899` tint) → `--cf-3` yellow → `--cf-5` green. Use for conditional formatting / performance-vs-benchmark. Keeps "bad = cherry" consistent with delta pills.
- `--delta-up` (per-theme green/aqua) / `--delta-down` (`#ec4899`, all themes) — positive/negative deltas.
- `--tip-bg` / `--tip-text` — chart tooltip surface (white / dark, all themes).

> **Two scales, two jobs — don't mix them.** Sequential (one hue = purple) = magnitude. Diverging (cherry→green) = quality vs target. Using the same palette for both is what causes confusion.

## 6. Spacing, radius, layout (`tokens/spacing.css`)

- Space scale: `--space-1..10` = 4,8,12,16,24,32,48,64,96,128 px.
- Radius: `--radius-sm 10 / md 12 / lg 14 / xl 20 (cards) / 2xl 28 / pill 999 (badges only)`.
- Borders: `--border-width: 2px`. Container `--container-max: 1200px`. Section pad-y 96px.

## 7. Components (`window.PorterMetricsDesignSystem_101e0b`)

`Button`, `Card`, `Badge`, `Eyebrow`, `Heading`. Each has a `.d.ts`, `.jsx`, and a `.prompt.md` with usage. Prefer these over re-implementing.

**Inline-text utilities** (`.pds-*` classes, theme-aware — use inside running copy):
- `.pds-chip` + `--pos` / `--neg` / `--neutral` / `--brand` — metric chips. `pos`/`neg` reuse `--delta-up`/`--delta-down` so good/bad matches table & scorecard deltas.
- `.pds-hl` — highlight a phrase (uses `--highlight-fill`).
- `.pds-u` — emphasis underline (aqua).

**Tooltip** (`.pds-tooltip`, theme-aware via `--tip-*`): hover popover for chart points. Wrap the point in `.pds-hotspot` and nest a tooltip; add `.pds-tooltip--show` to force-display.
```html
<div class="cdot pds-hotspot">
  <div class="pds-tooltip"><span class="pds-tooltip__date">W12 · Mar 24</span><span class="pds-tooltip__val">2,180 conv</span></div>
</div>
```

**More primitives:**
- `.pds-tag` — in-cell chip for tables (campaign names, match types). Same tokens as `.pds-chip--neutral`.
- `.pds-stat-card` — tinted KPI/creative card, theme-aware (`--stat-bg`/`--stat-border`); has presence on light AND dark (no washed pastel).
- `.pds-scorecard` (+ `__label`/`__value`/`__spark`) — fixed scorecard rhythm: label · value · full-width sparkline · delta.

**Chart rules:** chart points must be drawn at the line's exact coordinates (SVG `<circle>` or correctly-computed overlay %) — never eyeballed. Column bars use a fixed width (~48px) + centered group, not `flex:1` (which scatters them).

Example: `Conversions grew <span class="pds-chip pds-chip--pos">▲14%</span> on <span class="pds-hl">flat spend</span>, driven by <span class="pds-u">creative testing</span>.`

## 8. How to build (recipe)

1. Pick a theme → set `data-theme` on the page wrapper.
2. Page bg = `var(--surface-bg)`; cards = `var(--surface-card)` + `1px/2px var(--card-border)`, `--radius-xl`.
3. Eyebrow/label → `--font-bricolage`, uppercase, `--eyebrow-color`. Titles → `--font-bricolage`, `--text-title`. Body/meta → `--font-hanken`, `--text-body`/`--text-muted`.
4. Charts: series use §5 colors; gridlines `--grid-line`; primary line `--accent-line`; positive emphasis `--highlight-fill`.
5. Deltas: positive = aqua/green, negative = `--porter-pink`. No red/green stoplight outside conditional-formatting tables.

## 9. Reference templates (`templates/`)

Each family ships all themes. Browse via `Sistema de Diseño - Porter.html`.
`report-blocks*` (charts/KPIs/tables/maps), `report-text-blocks*` (editorial), `report-slides*` (16:9 deck), `marketing-dashboard*`, `executive-report*`. Suffixes: `-type`=cream, `-white`=white, `-type-dark`/`-azul`=blue, `-morado*`=purple.
