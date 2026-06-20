import * as React from "react";

/**
 * Porter primary action button. Use `variant="purple"` for the main CTA on a
 * surface; `outline` for secondary actions. Never put more than one primary
 * purple button in a single decision area.
 */
export function Button({
  variant = "purple",
  size = "md",
  className,
  children,
  ...rest
}) {
  const cls = ["pds-btn", `pds-btn--${variant}`, `pds-btn--${size}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
