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
 * Porter primary action button.
 * @startingPoint section="Core" subtitle="Solid brand action buttons" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
