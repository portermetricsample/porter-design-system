import * as React from "react";

/**
 * Porter pill label — mono, uppercase, tracked. Use for functional tags
 * (status, category, "new"), never as decoration. Keep the text to 1–3 words.
 */
export function Badge({ variant = "purple", className, children, ...rest }) {
  const cls = ["pds-badge", `pds-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
