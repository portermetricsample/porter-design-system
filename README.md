# @porter/design-system

Porter Metrics brand kit (Koho-inspired). Massive Inter typography, solid brand
backgrounds, zero decoration. Import the stylesheet once, then use the
components.

```tsx
import "@porter/design-system/styles.css";
import { Button, Card, Badge, Eyebrow, Heading } from "@porter/design-system";
```

## Usage

```tsx
// Primary CTA
<Button variant="purple" size="lg">Start free trial</Button>
<Button variant="outline">See templates</Button>

// Content surface
<Card background="cream">
  <Eyebrow>Marketing reports</Eyebrow>
  <Heading level="h2">Your data, <strong>on brand</strong></Heading>
</Card>

// Functional tag
<Badge variant="aqua">New</Badge>

// Cover headline (two-line stacked)
<Heading level="display">Report<br/><strong>faster</strong></Heading>
```

## Typography

Two pairings ship; the default needs no setup:

- **Default:** Inter (`--font-display`) + IBM Plex Mono (`--font-alt`).
- **Editorial (opt in):** wrap a subtree in `class="pds-editorial"` to swap to
  **Bricolage Grotesque** (display — headings, cover titles, KPI numbers, chart
  titles) + **Hanken Grotesk** (body, labels, table data, captions). No mono.
  Tokens `--font-bricolage` / `--font-hanken` are also usable directly.

```tsx
<div className="pds-editorial">
  <Heading level="display">Report faster</Heading>   {/* Bricolage */}
  <p>Body copy renders in Hanken Grotesk.</p>
</div>
```

## Tokens

Colors, fonts, spacing (`--space-*`) and radius (`--radius-*`) live in
`dist/porter.css` as CSS custom properties (`--porter-purple`, `--font-display`,
`--font-bricolage`, `--font-hanken`, …).

## Brand assets

`assets/brand/` (Porter mark, wordmark, icon, horizontal lockup) and
`assets/connectors/` (Meta, Google Ads, GA4, Search Console, HubSpot, Shopify,
Instagram, Google Sheets, WordPress…).
