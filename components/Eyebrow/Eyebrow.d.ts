import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/**
 * Mono uppercase label that sits above a headline (the Koho "eyebrow").
 * @startingPoint section="Core" subtitle="Mono uppercase section label" viewport="700x120"
 */
export function Eyebrow(props: EyebrowProps): JSX.Element;
