import * as React from "react";

/**
 * Porter display headline — massive Inter, tight tracking, the protagonist of
 * any layout. Follow the two-line stacked pattern (normal word on top, key
 * word huge below) and use `<strong>{word}</strong>` to accent in purple.
 */
export function Heading({ level = "h1", as, className, children, ...rest }) {
  const Tag = as ?? (level === "h2" ? "h2" : "h1");
  const cls = ["pds-heading", `pds-heading--${level}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
