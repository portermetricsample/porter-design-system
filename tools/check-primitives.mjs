#!/usr/bin/env node
/* Porter Design System — primitive & asset guardrail.
 * Fails CI on the regressions we have actually hit, so a future hand-edit OR a
 * Claude Design re-export can't silently reintroduce them. No dependencies.
 *
 * Checks:
 *   1. SVG logo renders black — <path class="cls-N"> with no resolvable fill.
 *   2. Funnel text inside the bar — .pds-funnel__bar used with text (overflows on steep funnels).
 *   3. Jagged sparkline — .pds-scorecard__spark containing a raw <polyline> (must be smoothed/data-spark).
 *   4. Primitives reverting to legacy fonts — --font-display/--font-body not pointing at Bricolage/Hanken.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const ROOT = process.argv[2] || '.';
const fails = [];
const fail = (file, msg) => fails.push(`✗ ${file}\n    ${msg}`);

function walk(dir) {
  let out = [];
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git' || name === 'uploads') continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else out.push(p);
  }
  return out;
}

const files = walk(ROOT);

// 1. SVGs that use classes but never define a fill for them → render black.
for (const f of files.filter(f => extname(f) === '.svg')) {
  const s = readFileSync(f, 'utf8');
  const usesClass = /class="cls-\d+"/.test(s);
  const hasFill = /<style[\s>]/.test(s) || /fill\s*=\s*"(#|url\(|rgb|none)/.test(s) || /\.cls-\d+[^{]*\{[^}]*fill/.test(s);
  if (usesClass && !hasFill) fail(f, 'SVG uses class="cls-N" but defines no fill → renders BLACK. Add a <style> mapping (see assets/connectors/meta.svg).');
}

// 2/3. Template-level primitive misuse.
for (const f of files.filter(f => /\.html?$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  // funnel: text directly inside the bar
  if (/pds-funnel__bar[^>]*>\s*[^<\s]/.test(s))
    fail(f, '.pds-funnel__bar contains text → overflows on thin stages. Put label+value in .pds-funnel__head ABOVE the bar.');
  // sparkline: raw polyline inside the spark svg
  const sparks = s.match(/<svg[^>]*pds-scorecard__spark[\s\S]*?<\/svg>/g) || [];
  for (const sv of sparks) if (/<polyline/.test(sv))
    fail(f, '.pds-scorecard__spark uses a raw <polyline> → jagged. Use data-spark / PorterCharts.sparkline (smoothed + area).');
}

// 4. Brand fonts must back the primitive aliases.
for (const f of files.filter(f => /porter-tokens\.css$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  const disp = (s.match(/--font-display\s*:\s*([^;]+);/) || [])[1] || '';
  const body = (s.match(/--font-body\s*:\s*([^;]+);/) || [])[1] || '';
  if (disp && !/Bricolage/i.test(disp)) fail(f, `--font-display must lead with Bricolage Grotesque (got: ${disp.trim()}).`);
  if (body && !/Hanken/i.test(body)) fail(f, `--font-body must lead with Hanken Grotesk (got: ${body.trim()}).`);
}

if (fails.length) {
  console.error(`\nDesign-system guardrail FAILED (${fails.length}):\n\n${fails.join('\n\n')}\n`);
  process.exit(1);
}
console.log('✓ Design-system guardrail passed — no known primitive/asset regressions.');
