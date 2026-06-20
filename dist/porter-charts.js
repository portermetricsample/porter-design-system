/* Porter Design System — curve-chart helpers (OPTIONAL)
 * ---------------------------------------------------------------------------
 * The CSS primitives in porter-tokens.css cover bars, breakdown, donut,
 * conditional-format tables, funnel and the scorecard shell. The two charts
 * that need real path math — the sparkline and the time-series line — cannot
 * be pure CSS, so they live here. Framework-free, no dependencies, theme-aware
 * (paints from --accent-line / --area-fill / --grid-line).
 *
 * Usage:
 *   <svg class="pds-scorecard__spark" data-spark="4,5,6,5,7,9"></svg>
 *   <svg class="pds-timeseries" data-series="...comma values..."></svg>
 *   PorterCharts.autorender();           // renders every [data-spark]/[data-series]
 *   PorterCharts.sparkline(svgEl, [..]); // or call directly
 *
 * Rules baked in (so they can't be got wrong):
 *   - Lines are SMOOTHED (Catmull-Rom), never straight polyline segments.
 *   - A subtle area fill sits under the line for weight.
 *   - MIN_POINTS guard: a sparkline with < 5 points renders nothing and warns —
 *     a 2-point "trend" is a flat diagonal that misleads. Show context text instead.
 */
(function (global) {
  'use strict';
  var MIN_POINTS = 5;

  function smoothPath(pts) {
    if (pts.length < 2) return '';
    var d = 'M' + pts[0][0].toFixed(2) + ',' + pts[0][1].toFixed(2);
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += 'C' + c1x.toFixed(2) + ',' + c1y.toFixed(2) + ' ' +
                 c2x.toFixed(2) + ',' + c2y.toFixed(2) + ' ' +
                 p2[0].toFixed(2) + ',' + p2[1].toFixed(2);
    }
    return d;
  }

  function project(values, W, H, padX, padY) {
    var mx = Math.max.apply(null, values), mn = Math.min.apply(null, values), r = (mx - mn) || 1;
    return values.map(function (v, i) {
      var x = padX + (i / (values.length - 1)) * (W - 2 * padX);
      var y = H - padY - ((v - mn) / r) * (H - 2 * padY);
      return [x, y];
    });
  }

  function draw(svg, values, opts) {
    opts = opts || {};
    var W = opts.w || 100, H = opts.h || 26, padX = opts.padX || 0, padY = opts.padY || 4;
    var stroke = opts.stroke || 2, dots = !!opts.dots;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'none');
    var pts = project(values, W, H, padX, padY);
    var line = smoothPath(pts);
    var baseY = H;
    var area = line + ' L' + (W - padX).toFixed(2) + ',' + baseY + ' L' + padX.toFixed(2) + ',' + baseY + ' Z';
    var svgns = 'http://www.w3.org/2000/svg';
    svg.innerHTML = '';
    var a = document.createElementNS(svgns, 'path');
    a.setAttribute('d', area); a.setAttribute('fill', 'var(--area-fill)'); svg.appendChild(a);
    var l = document.createElementNS(svgns, 'path');
    l.setAttribute('d', line); l.setAttribute('fill', 'none');
    l.setAttribute('stroke', 'var(--accent-line)'); l.setAttribute('stroke-width', stroke);
    l.setAttribute('stroke-linecap', 'round'); l.setAttribute('stroke-linejoin', 'round');
    l.setAttribute('vector-effect', 'non-scaling-stroke');
    svg.appendChild(l);
    if (dots) pts.forEach(function (p, i) {
      if (opts.dotEvery && i % opts.dotEvery) return;
      var c = document.createElementNS(svgns, 'circle');
      c.setAttribute('cx', p[0].toFixed(2)); c.setAttribute('cy', p[1].toFixed(2));
      c.setAttribute('r', opts.dotR || 1.6); c.setAttribute('fill', 'var(--accent-line)');
      svg.appendChild(c);
    });
  }

  function parse(el, attr) {
    var raw = el.getAttribute(attr) || '';
    return raw.split(',').map(function (s) { return parseFloat(s.trim()); }).filter(function (n) { return !isNaN(n); });
  }

  var PorterCharts = {
    MIN_POINTS: MIN_POINTS,
    sparkline: function (svg, values, opts) {
      if (!values || values.length < MIN_POINTS) {
        console.warn('[PorterCharts] sparkline needs >= ' + MIN_POINTS +
          ' points (got ' + (values ? values.length : 0) + '). Show context text instead of a flat line.');
        return false;
      }
      draw(svg, values, Object.assign({ w: 100, h: 26, padY: 4, stroke: 2 }, opts || {}));
      return true;
    },
    timeseries: function (svg, values, opts) {
      draw(svg, values, Object.assign({ w: 800, h: 240, padY: 18, stroke: 2.5, dots: true, dotEvery: 2, dotR: 3 }, opts || {}));
      return true;
    },
    autorender: function (root) {
      root = root || document;
      root.querySelectorAll('[data-spark]').forEach(function (el) { PorterCharts.sparkline(el, parse(el, 'data-spark')); });
      root.querySelectorAll('[data-series]').forEach(function (el) { PorterCharts.timeseries(el, parse(el, 'data-series')); });
    }
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = PorterCharts;
  global.PorterCharts = PorterCharts;
  if (typeof document !== 'undefined' && document.currentScript && document.currentScript.dataset.auto !== 'off') {
    if (document.readyState !== 'loading') PorterCharts.autorender();
    else document.addEventListener('DOMContentLoaded', function () { PorterCharts.autorender(); });
  }
})(typeof window !== 'undefined' ? window : this);
