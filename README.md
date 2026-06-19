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

## Tokens

Colors and fonts live in `dist/porter.css` as CSS custom properties
(`--porter-purple`, `--porter-pink`, `--porter-aqua`, `--font-display`, …).
