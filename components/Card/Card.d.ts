import * as React from "react";

export type CardBackground = "white" | "cream" | "lavender" | "dark" | "purple";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Surface background. Stays within the Porter background family. */
  background?: CardBackground;
  /** Add a hairline border (only meaningful on light surfaces). */
  bordered?: boolean;
  children?: React.ReactNode;
}

/**
 * Porter content surface — rounded, generously padded, no shadow.
 * @startingPoint section="Core" subtitle="Solid-background content surface" viewport="700x320"
 */
export function Card(props: CardProps): JSX.Element;
