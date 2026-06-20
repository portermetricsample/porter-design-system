import * as React from "react";

export type HeadingLevel = "display" | "h1" | "h2";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Type scale. `display` is for covers, `h1`/`h2` for sections. */
  level?: HeadingLevel;
  /** Element override. Defaults to `h1` for display/h1, `h2` otherwise. */
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
}

/**
 * Porter display headline — massive Inter, the protagonist of any layout.
 * @startingPoint section="Core" subtitle="Massive Inter display headline" viewport="700x360"
 */
export function Heading(props: HeadingProps): JSX.Element;
