import * as React from "react";

export type CardBackground =
  | "white"
  | "cream"
  | "lavender"
  | "dark"
  | "purple";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface background. Stays within the Porter background family. */
  background?: CardBackground;
  /** Add a hairline border (only meaningful on light surfaces). */
  bordered?: boolean;
  children?: React.ReactNode;
}

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
}: CardProps) {
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
