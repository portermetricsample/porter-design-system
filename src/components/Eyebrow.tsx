import * as React from "react";

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/**
 * Small mono, uppercase, tracked label that sits above a headline (the Koho
 * "eyebrow"). Use it to name the section/topic in 1–4 words; the headline
 * carries the message.
 */
export function Eyebrow({ className, children, ...rest }: EyebrowProps) {
  const cls = ["pds-eyebrow", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
