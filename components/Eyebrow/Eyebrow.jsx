import * as React from "react";

/**
 * Small mono, uppercase, tracked label that sits above a headline (the Koho
 * "eyebrow"). Use it to name the section/topic in 1–4 words; the headline
 * carries the message.
 */
export function Eyebrow({ className, children, ...rest }) {
  const cls = ["pds-eyebrow", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
