import * as React from "react";

export type HeadingLevel = "display" | "h1" | "h2";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Type scale. `display` is for covers, `h1`/`h2` for sections. */
  level?: HeadingLevel;
  /**
   * Optional element override. Defaults to `h1` for `display`/`h1`, `h2`
   * otherwise. Wrap a word in `<strong>` to tint it Porter purple.
   */
  as?: "h1" | "h2" | "h3";
  children?: React.ReactNode;
}

/**
 * Porter display headline — massive Inter, tight tracking, the protagonist of
 * any layout. Follow the two-line stacked pattern (normal word on top, key
 * word huge below) and use `<strong>{word}</strong>` to accent in purple.
 */
export function Heading({
  level = "h1",
  as,
  className,
  children,
  ...rest
}: HeadingProps) {
  const Tag = (as ?? (level === "h2" ? "h2" : "h1")) as "h1";
  const cls = ["pds-heading", `pds-heading--${level}`, className]
    .filter(Boolean)
    .join(" ");
  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  );
}
