/* @ds-bundle: {"format":3,"namespace":"PorterMetricsDesignSystem_101e0b","components":[{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/Eyebrow/Eyebrow.jsx"},{"name":"Heading","sourcePath":"components/Heading/Heading.jsx"}],"sourceHashes":{"components/Badge/Badge.jsx":"907698aef2d0","components/Button/Button.jsx":"598d5fdb5c1c","components/Card/Card.jsx":"5067e5cd683b","components/Eyebrow/Eyebrow.jsx":"3dc43cd193d2","components/Heading/Heading.jsx":"8854eff0d3ee","ui_kits/marketing/Hero.jsx":"cf6a909c8fe7","ui_kits/marketing/Nav.jsx":"d9f8127ba114","ui_kits/marketing/Pricing.jsx":"49de679b7315","ui_kits/marketing/Sections.jsx":"a77e1250d17c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PorterMetricsDesignSystem_101e0b = window.PorterMetricsDesignSystem_101e0b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Porter pill label — mono, uppercase, tracked. Use for functional tags
 * (status, category, "new"), never as decoration. Keep the text to 1–3 words.
 */
function Badge({
  variant = "purple",
  className,
  children,
  ...rest
}) {
  const cls = ["pds-badge", `pds-badge--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Porter primary action button. Use `variant="purple"` for the main CTA on a
 * surface; `outline` for secondary actions. Never put more than one primary
 * purple button in a single decision area.
 */
function Button({
  variant = "purple",
  size = "md",
  className,
  children,
  ...rest
}) {
  const cls = ["pds-btn", `pds-btn--${variant}`, `pds-btn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Porter content surface. A plain rounded container with generous padding —
 * no drop shadows, no decorative borders. Pick a background from the brand
 * family; pair dark/purple surfaces with light text content.
 */
function Card({
  background = "white",
  bordered = false,
  className,
  children,
  ...rest
}) {
  const cls = ["pds-card", background !== "white" ? `pds-card--${background}` : "", bordered ? "pds-card--bordered" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Eyebrow/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small mono, uppercase, tracked label that sits above a headline (the Koho
 * "eyebrow"). Use it to name the section/topic in 1–4 words; the headline
 * carries the message.
 */
function Eyebrow({
  className,
  children,
  ...rest
}) {
  const cls = ["pds-eyebrow", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Eyebrow/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/Heading/Heading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Porter display headline — massive Inter, tight tracking, the protagonist of
 * any layout. Follow the two-line stacked pattern (normal word on top, key
 * word huge below) and use `<strong>{word}</strong>` to accent in purple.
 */
function Heading({
  level = "h1",
  as,
  className,
  children,
  ...rest
}) {
  const Tag = as ?? (level === "h2" ? "h2" : "h1");
  const cls = ["pds-heading", `pds-heading--${level}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Heading/Heading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Porter Metrics — hero + sources strip
const {
  Button,
  Badge,
  Eyebrow,
  Heading,
  Card
} = window.PorterMetricsDesignSystem_101e0b;
const SOURCES = ["Facebook Ads", "Google Ads", "Instagram", "LinkedIn Ads", "TikTok Ads", "Google Analytics 4", "Search Console", "YouTube", "Mailchimp", "Shopify", "HubSpot", "Bing Ads", "Pinterest", "Snapchat Ads", "WooCommerce"];
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--porter-cream)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "64px 48px 80px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Marketing reporting, on autopilot"), /*#__PURE__*/React.createElement(Heading, {
    level: "display",
    style: {
      fontSize: "clamp(64px, 9vw, 132px)",
      marginTop: 20
    }
  }, "Report", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "faster")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 21,
      lineHeight: 1.5,
      color: "var(--porter-dark)",
      maxWidth: 540,
      margin: "28px 0 36px"
    }
  }, "Pull every marketing metric from 25+ ad and analytics sources into one on-brand dashboard. No spreadsheets, no copy-paste, no late nights."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "purple",
    size: "lg"
  }, "Start free trial"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "See templates")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-alt)",
      fontSize: 13,
      letterSpacing: 1,
      textTransform: "uppercase",
      color: "var(--porter-muted)",
      marginTop: 22
    }
  }, "14-day trial \xB7 No credit card"))));
}
function Sources() {
  return /*#__PURE__*/React.createElement("section", {
    id: "sources",
    style: {
      background: "var(--porter-dark)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "72px 48px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 20,
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: "var(--porter-aqua)"
    }
  }, "Integrations"), /*#__PURE__*/React.createElement(Heading, {
    level: "h2",
    style: {
      color: "#fff",
      marginTop: 12,
      fontSize: 44
    }
  }, "Connect ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--aqua-400)"
    }
  }, "25+ sources"))), /*#__PURE__*/React.createElement(Button, {
    variant: "aqua"
  }, "Browse all integrations")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, SOURCES.map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontFamily: "var(--font-alt)",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: 0.5,
      color: "#fff",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.14)",
      padding: "10px 16px",
      borderRadius: 999
    }
  }, s)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-alt)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--porter-yellow)",
      padding: "10px 16px"
    }
  }, "+ 10 more"))));
}
Object.assign(window, {
  Hero,
  Sources
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
// Porter Metrics — marketing site nav + footer
const {
  Button,
  Badge
} = window.PorterMetricsDesignSystem_101e0b;
function Wordmark({
  light
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: "-1px",
      textDecoration: "none",
      color: light ? "#fff" : "var(--porter-dark)",
      display: "inline-flex",
      alignItems: "center",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/brand/porter-mark.png",
    alt: "Porter",
    style: {
      width: 28,
      height: 28,
      objectFit: "contain"
    }
  }), "porter");
}
function Nav() {
  const link = {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 15,
    color: "var(--porter-dark)",
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "22px 48px",
      maxWidth: 1280,
      margin: "0 auto",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#features"
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#sources"
  }, "Integrations"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#pricing"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Templates")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      ...link,
      fontWeight: 700
    },
    href: "#"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "purple",
    size: "sm"
  }, "Start free trial")));
}
function Footer() {
  const col = {
    display: "flex",
    flexDirection: "column",
    gap: 12
  };
  const link = {
    fontFamily: "var(--font-display)",
    fontSize: 14,
    color: "rgba(255,255,255,0.66)",
    textDecoration: "none"
  };
  const head = {
    fontFamily: "var(--font-alt)",
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: "var(--porter-yellow)",
    marginBottom: 4
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--porter-dark)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "72px 48px 48px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.6,
      fontSize: 15,
      marginTop: 16
    }
  }, "Marketing reports your clients actually want to read. 25+ sources, on brand, in minutes.")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Product"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Dashboards"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Reports"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Templates"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Integrations")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Company"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Careers"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Blog"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: col
  }, /*#__PURE__*/React.createElement("span", {
    style: head
  }, "Resources"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Help center"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "API docs"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Status"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Changelog"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "24px 48px",
      boxSizing: "border-box",
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-alt)",
      fontSize: 12,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Porter Metrics"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms")));
}
Object.assign(window, {
  Nav,
  Footer,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Pricing.jsx
try { (() => {
// Porter Metrics — pricing (with interactive monthly/annual toggle) + CTA
const {
  Button,
  Badge,
  Eyebrow,
  Heading,
  Card
} = window.PorterMetricsDesignSystem_101e0b;
const {
  useState
} = React;
const PLANS = [{
  name: "Starter",
  m: 29,
  feat: ["3 dashboards", "10 data sources", "Weekly email reports", "1 brand kit"],
  variant: "outline",
  bg: "white",
  bordered: true
}, {
  name: "Agency",
  m: 79,
  feat: ["Unlimited dashboards", "All 25+ sources", "White-label reports", "5 brand kits", "Scheduled delivery"],
  variant: "purple",
  bg: "dark",
  featured: true
}, {
  name: "Scale",
  m: 199,
  feat: ["Everything in Agency", "Unlimited brand kits", "Client logins", "Priority support", "API access"],
  variant: "outline",
  bg: "white",
  bordered: true
}];
function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = m => annual ? Math.round(m * 0.8) : m;
  const toggleBtn = active => ({
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 14,
    padding: "8px 18px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: active ? "var(--porter-purple)" : "transparent",
    color: active ? "#fff" : "var(--porter-dark)",
    transition: "all .15s ease"
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing",
    style: {
      background: "var(--porter-cream)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "96px 48px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pricing"), /*#__PURE__*/React.createElement(Heading, {
    level: "h1",
    style: {
      fontSize: 60,
      marginTop: 16
    }
  }, "Plans that ", /*#__PURE__*/React.createElement("strong", null, "scale")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 4,
      background: "#fff",
      padding: 5,
      borderRadius: 999,
      marginTop: 28,
      boxShadow: "inset 0 0 0 1px var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: toggleBtn(annual),
    onClick: () => setAnnual(true)
  }, "Annual \xB7 save 20%"), /*#__PURE__*/React.createElement("button", {
    style: toggleBtn(!annual),
    onClick: () => setAnnual(false)
  }, "Monthly"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 48,
      alignItems: "stretch"
    }
  }, PLANS.map(p => {
    const dark = p.bg === "dark";
    return /*#__PURE__*/React.createElement(Card, {
      key: p.name,
      background: p.bg,
      bordered: p.bordered,
      style: {
        display: "flex",
        flexDirection: "column",
        position: "relative"
      }
    }, p.featured && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 24,
        right: 24
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "yellow"
    }, "Most popular")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-alt)",
        fontSize: 13,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        color: dark ? "var(--porter-aqua)" : "var(--porter-purple)"
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 6,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: 56,
        letterSpacing: "-2px",
        color: dark ? "#fff" : "var(--porter-black)"
      }
    }, "$", price(p.m)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        color: dark ? "rgba(255,255,255,0.6)" : "var(--porter-muted)",
        fontSize: 15
      }
    }, "/mo")), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: "none",
        padding: 0,
        margin: "24px 0 32px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        flex: 1
      }
    }, p.feat.map(f => /*#__PURE__*/React.createElement("li", {
      key: f,
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 15,
        color: dark ? "rgba(255,255,255,0.82)" : "var(--porter-dark)",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: dark ? "var(--porter-aqua)" : "var(--porter-purple)",
        fontWeight: 800
      }
    }, "\u2014"), f))), /*#__PURE__*/React.createElement(Button, {
      variant: dark ? "aqua" : p.variant,
      style: {
        width: "100%"
      }
    }, "Choose ", p.name));
  }))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--porter-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 48px 96px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    background: "dark",
    style: {
      padding: "72px 56px",
      textAlign: "center",
      borderRadius: 28
    }
  }, /*#__PURE__*/React.createElement(Heading, {
    level: "h1",
    style: {
      color: "#fff",
      fontSize: 56
    }
  }, "Start reporting ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--porter-yellow)"
    }
  }, "faster")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      color: "rgba(255,255,255,0.78)",
      fontSize: 18,
      margin: "20px auto 32px",
      maxWidth: 440,
      lineHeight: 1.5
    }
  }, "Join 8,000+ agencies and marketers who ditched the spreadsheet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "purple",
    size: "lg"
  }, "Start free trial"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: "#fff",
      boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.4)"
    }
  }, "Book a demo")))));
}
Object.assign(window, {
  Pricing,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Sections.jsx
try { (() => {
// Porter Metrics — features grid + big statement
const {
  Button,
  Badge,
  Eyebrow,
  Heading,
  Card
} = window.PorterMetricsDesignSystem_101e0b;
const FEATURES = [{
  bg: "white",
  badge: {
    v: "purple",
    t: "Dashboards"
  },
  h: /*#__PURE__*/React.createElement(React.Fragment, null, "Live data, ", /*#__PURE__*/React.createElement("strong", null, "one place")),
  p: "Every channel side by side, refreshed automatically. Stop stitching screenshots together."
}, {
  bg: "lavender",
  badge: {
    v: "pink",
    t: "On brand"
  },
  h: /*#__PURE__*/React.createElement(React.Fragment, null, "Your logo, ", /*#__PURE__*/React.createElement("strong", null, "your colors")),
  p: "White-label every report. Clients see your agency, never ours."
}, {
  bg: "cream",
  badge: {
    v: "aqua",
    t: "Reports"
  },
  h: /*#__PURE__*/React.createElement(React.Fragment, null, "Send on a ", /*#__PURE__*/React.createElement("strong", null, "schedule")),
  p: "Build once, deliver weekly. Reports land in inboxes while you sleep."
}];
function Features() {
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      background: "var(--porter-white)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "96px 48px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Why agencies switch"), /*#__PURE__*/React.createElement(Heading, {
    level: "h1",
    style: {
      fontSize: 64,
      marginTop: 16,
      maxWidth: 760
    }
  }, "Reporting that ", /*#__PURE__*/React.createElement("strong", null, "runs itself")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      marginTop: 48
    }
  }, FEATURES.map((f, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    background: f.bg,
    bordered: f.bg === "white",
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 280
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: f.badge.v
  }, f.badge.t), /*#__PURE__*/React.createElement(Heading, {
    level: "h2",
    style: {
      fontSize: 32,
      marginTop: 22
    }
  }, f.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      color: "var(--porter-muted)",
      lineHeight: 1.55,
      fontSize: 16,
      marginTop: 14
    }
  }, f.p))))));
}
function Statement() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--porter-purple)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "112px 48px",
      boxSizing: "border-box",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      color: "rgba(255,255,255,0.7)"
    }
  }, "The numbers"), /*#__PURE__*/React.createElement(Heading, {
    level: "display",
    style: {
      color: "#fff",
      fontSize: "clamp(56px,8vw,116px)",
      marginTop: 20
    }
  }, "15 hours", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--porter-yellow)"
    }
  }, "saved weekly")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 19,
      color: "rgba(255,255,255,0.82)",
      maxWidth: 520,
      margin: "28px auto 0",
      lineHeight: 1.5
    }
  }, "The average agency reclaims two full working days every month by automating client reporting with Porter.")));
}
Object.assign(window, {
  Features,
  Statement
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Heading = __ds_scope.Heading;

})();
