# CreativeAdPreview (skin)

The **Google-ad look** for porter-reporting's `google-ads/creative-ad-preview` component. This is an
**empty, data-less skin**: it styles the `.cap-*` class hooks that Reporting emits — it ships no
markup and no data (per `RULES.md`: Design = tokens + appearance only).

- **File:** [`creative-ad-preview.css`](creative-ad-preview.css) — theme-aware, resolves from
  `tokens/themes.css`. Works standalone via `dist/porter-tokens.css` or in the bundle.
- **The one hardcoded exception:** `--gad-title` (the Google ad-title blue). Treated like a
  brand-series color — it's a *format convention* that makes the preview read as a real Google ad.
  Light SERP blue by default; a lighter blue under the `blue`/`purple` dark themes. Everything else
  is tokens.
- **Hooks reference:** the authoritative list of `.cap-*` hooks + what each should look like lives in
  the Reporting component's README (`porter-reporting/.../creative-ad-preview/README.md`,
  "Styling hooks" table). This file implements that.

To fold into the shipped bundle later: `@import` it from `styles.css` (or add to the build) once the
component is promoted out of preview.
