import * as React from "react";
import { Badge } from "@porter/design-system";

export const Variants = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
    <Badge variant="purple">New</Badge>
    <Badge variant="pink">Beta</Badge>
    <Badge variant="aqua">AI</Badge>
    <Badge variant="yellow">Popular</Badge>
    <Badge variant="dark">Pro</Badge>
  </div>
);
