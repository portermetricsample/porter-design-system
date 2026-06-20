/* ============================================================================
   Porter Charts — framework-free, dependency-free chart primitives.
   Pairs with the .pds-* CSS primitives. Paints only from theme CSS vars
   (--accent-line, --area-fill, --surface-card), so all 4 themes work.

   Usage (declarative — auto-initialises, re-scans on DOM changes):
     <div class="pds-scorecard__spark" data-spark="2.1,2.3,2.0,2.6,2.4,3.1"></div>
     <div data-series="120,134,128,156,149,171,168,190" style="height:240px"></div>

   Usage (imperative):
     PorterCharts.sparkline(el, [..values], { stroke, fill, fallback });
     PorterCharts.timeseries(el, [..values], { height, dots:true });

   RULES baked in:
   - Sparklines are SMOOTHED (Catmull-Rom) + area-filled — never a raw polyline.
   - ≥5-point guard: a sparkline with <5 points renders NOTHING and shows the
     element's data-spark-fallback text instead (a 2-point "trend" is a lie).
   ============================================================================ */
(function (global) {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';
  var MIN_SPARK_POINTS = 5;

  function svgEl(tag, attrs) {
    var e = document.createElementNS(SVGNS, tag);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) e.setAttribute(k, attrs[k]);
    return e;
  }

  function parseValues(str) {
    if (!str) return [];
    return String(str).split(/[,\s]+/)
      .map(function (s) { return parseFloat(s); })
      .filter(function (v) { return !isNaN(v); });
  }

  // Smoothed path through points via Catmull-Rom → cubic Bezier.
  function smoothPath(pts) {
    if (pts.length < 2) return '';
    if (pts.length === 2) return 'M' + pts[0].x + ',' + pts[0].y + 'L' + pts[1].x + ',' + pts[1].y;
    var d = 'M' + pts[0].x + ',' + pts[0].y;
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i];
      var p1 = pts[i];
      var p2 = pts[i + 1];
      var p3 = pts[i + 2] || p2;
      var c1x = p1.x + (p2.x - p0.x) / 6;
      var c1y = p1.y + (p2.y - p0.y) / 6;
      var c2x = p2.x - (p3.x - p1.x) / 6;
      var c2y = p2.y - (p3.y - p1.y) / 6;
      d += 'C' + c1x + ',' + c1y + ' ' + c2x + ',' + c2y + ' ' + p2.x + ',' + p2.y;
    }
    return d;
  }

  function scale(values, w, h, pad) {
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);
    var range = (max - min) || 1;
    var n = values.length;
    return values.map(function (v, i) {
      return {
        x: n === 1 ? w / 2 : pad + (w - 2 * pad) * (i / (n - 1)),
        y: pad + (h - 2 * pad) * (1 - (v - min) / range)
      };
    });
  }

  function resolve(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  }

  /* ── SPARKLINE ─────────────────────────────────────────────────────────── */
  function sparkline(target, values, opts) {
    opts = opts || {};
    var node = resolve(target);
    if (!node) return;
    if (!values) values = parseValues(node.getAttribute('data-spark'));

    // ≥5-point guard — render nothing, show context text instead.
    if (!values || values.length < MIN_SPARK_POINTS) {
      node.innerHTML = '';
      var fb = opts.fallback || node.getAttribute('data-spark-fallback');
      if (fb) {
        node.textContent = fb;
        node.setAttribute('data-spark-empty', '');
        node.style.font = node.style.font || '';
      }
      return null;
    }

    var w = opts.width || 100;
    var h = opts.height || 26;
    var pad = opts.pad != null ? opts.pad : 3;
    var stroke = opts.stroke || 'var(--accent-line)';
    var fill = opts.fill || 'var(--area-fill)';
    var pts = scale(values, w, h, pad);
    var line = smoothPath(pts);
    var area = line + 'L' + pts[pts.length - 1].x + ',' + h + 'L' + pts[0].x + ',' + h + 'Z';

    var svg = svgEl('svg', { viewBox: '0 0 ' + w + ' ' + h, preserveAspectRatio: 'none' });
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', h);
    svg.style.display = 'block';
    svg.appendChild(svgEl('path', { d: area, fill: fill }));
    svg.appendChild(svgEl('path', {
      d: line, fill: 'none', stroke: stroke,
      'stroke-width': opts.strokeWidth || 2,
      'stroke-linecap': 'round', 'stroke-linejoin': 'round',
      'vector-effect': 'non-scaling-stroke'
    }));
    node.innerHTML = '';
    node.removeAttribute('data-spark-empty');
    node.appendChild(svg);
    return svg;
  }

  /* ── TIME SERIES (smoothed curve + area + dots) ────────────────────────── */
  function timeseries(target, values, opts) {
    opts = opts || {};
    var node = resolve(target);
    if (!node) return;
    if (!values) values = parseValues(node.getAttribute('data-series'));
    if (!values || values.length < 2) { node.innerHTML = ''; return null; }

    var w = opts.width || node.clientWidth || 600;
    var h = opts.height || parseInt(node.getAttribute('data-height'), 10) || node.clientHeight || 240;
    var pad = opts.pad != null ? opts.pad : 18;
    var stroke = opts.stroke || 'var(--accent-line)';
    var fill = opts.fill || 'var(--area-fill)';
    var dots = opts.dots !== false;
    var pts = scale(values, w, h, pad);
    var line = smoothPath(pts);
    var area = line + 'L' + pts[pts.length - 1].x + ',' + (h - pad) + 'L' + pts[0].x + ',' + (h - pad) + 'Z';

    var svg = svgEl('svg', { viewBox: '0 0 ' + w + ' ' + h });
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', h);
    svg.style.display = 'block';
    svg.appendChild(svgEl('path', { d: area, fill: fill }));
    svg.appendChild(svgEl('path', {
      d: line, fill: 'none', stroke: stroke, 'stroke-width': opts.strokeWidth || 2.5,
      'stroke-linecap': 'round', 'stroke-linejoin': 'round'
    }));
    if (dots) {
      pts.forEach(function (p) {
        svg.appendChild(svgEl('circle', {
          cx: p.x, cy: p.y, r: opts.dotRadius || 3.5,
          fill: 'var(--surface-card)', stroke: stroke, 'stroke-width': 2
        }));
      });
    }
    node.innerHTML = '';
    node.appendChild(svg);
    node.__pdsSeries = values;
    return svg;
  }

  /* ── AUTO-INIT (idempotent) + resilient re-scan ────────────────────────── */
  function init(root) {
    root = root || document;
    var sparks = root.querySelectorAll('[data-spark]');
    for (var i = 0; i < sparks.length; i++) {
      if (sparks[i].__pdsDone) continue;
      sparks[i].__pdsDone = true;
      sparkline(sparks[i]);
    }
    var series = root.querySelectorAll('[data-series]');
    for (var j = 0; j < series.length; j++) {
      if (series[j].__pdsDone) continue;
      series[j].__pdsDone = true;
      timeseries(series[j]);
      observeResize(series[j]);
    }
  }

  function observeResize(node) {
    if (typeof ResizeObserver === 'undefined' || node.__pdsRO) return;
    var ro = new ResizeObserver(function () {
      if (node.__pdsSeries) timeseries(node, node.__pdsSeries);
    });
    ro.observe(node);
    node.__pdsRO = ro;
  }

  // Always defer the actual DOM mutation out of the current task, so we never
  // mutate during a host framework's (e.g. React) synchronous commit phase —
  // that is what triggers "node to be removed is not a child" reconcile errors.
  var scanQueued = false;
  function scheduleScan() {
    if (scanQueued) return;
    scanQueued = true;
    // setTimeout (not rAF) — rAF is throttled in background/offscreen iframes.
    setTimeout(function () { scanQueued = false; init(); }, 0);
  }

  function start() {
    scheduleScan();
    if (typeof MutationObserver !== 'undefined') {
      new MutationObserver(scheduleScan).observe(document.documentElement, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  global.PorterCharts = {
    sparkline: sparkline,
    timeseries: timeseries,
    smoothPath: smoothPath,
    parseValues: parseValues,
    init: init,
    scan: scheduleScan,
    MIN_SPARK_POINTS: MIN_SPARK_POINTS
  };
})(typeof window !== 'undefined' ? window : this);
