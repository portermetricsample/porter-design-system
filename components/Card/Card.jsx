import * as React from "react";

/**
 * Porter content surface. A plain rounded container with generous padding —
 * no drop shadows, no decorative borders. Pick a background from the brand
 * family; pair dark/purple surfaces with light text content.
 */
export function Card({
  background = "white",
  bordered = false,
  className,
  children,
  ...rest
}) {
  const cls = [
    "pds-card",
    background !== "white" ? `pds-card--${background}` : "",
    bordered ? "pds-card--bordered" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
