import * as React from "react";

export type BadgeVariant = "purple" | "pink" | "aqua" | "yellow" | "dark";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. */
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

/**
 * Porter pill label — mono, uppercase, tracked. Functional tags only.
 * @startingPoint section="Core" subtitle="Mono uppercase functional tag" viewport="700x140"
 */
export function Badge(props: BadgeProps): JSX.Element;
