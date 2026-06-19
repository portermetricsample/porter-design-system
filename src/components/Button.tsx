import * as React from "react";

export type ButtonVariant =
  | "purple"
  | "pink"
  | "aqua"
  | "yellow"
  | "dark"
  | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Color treatment. `purple` is the primary CTA. */
  variant?: ButtonVariant;
  /** Padding/type scale. */
  size?: ButtonSize;
  /** Button label / contents. */
  children?: React.ReactNode;
}

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
}: ButtonProps) {
  const cls = [
    "pds-btn",
    `pds-btn--${variant}`,
    `pds-btn--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
