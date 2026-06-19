# design-sync notes — @porter/design-system

This repo was scaffolded from the `porter-design` Claude skill
(`~/.claude/skills/porter-design/`) to make the Porter brand kit syncable to
Claude Design. The skill is the upstream source of truth for tokens/type.

## Build facts
- Shape: `package` (no Storybook). Build: `npm run build` (tsup → `dist/index.es.js` + `dist/index.d.ts`, then copies `src/porter.css` → `dist/porter.css`).
- `cssEntry` = `dist/porter.css` (tokens + component classes in one file).
- Components (5): Button, Card, Badge, Eyebrow, Heading. All have authored previews, all graded good.
- `cardMode: column` set for Card and Heading (wide content overflowed the grid cell).

## Known render warns
- `[FONT_REMOTE]` for Inter / IBM Plex Mono — loaded via a Google Fonts `@import` in `porter.css`. Expected, non-blocking; fonts load at runtime.

## Re-sync risks
- Fonts are NOT bundled — they come from the Google Fonts `@import`. If offline/blocked, designs fall back to system fonts. To self-host, add woff2 files + `@font-face` and wire `extraFonts`.
- Tokens/type live in BOTH this repo's `src/porter.css` and the `porter-design` skill. If the skill's palette changes, update `src/porter.css` to match, then re-sync.
- This is a hand-scaffolded library, not the actual Porter product code. It mirrors the brand-kit primitives only (no slide/landing/gallery section components — those were out of scope for the first sync).
