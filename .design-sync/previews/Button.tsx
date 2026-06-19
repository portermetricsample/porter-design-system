import * as React from "react";
import { Button } from "@porter/design-system";

export const Variants = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
    <Button variant="purple">Start free trial</Button>
    <Button variant="pink">Get the report</Button>
    <Button variant="aqua">Connect data</Button>
    <Button variant="yellow">Upgrade plan</Button>
    <Button variant="dark">Book a demo</Button>
    <Button variant="outline">See templates</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
    <Button variant="purple" size="sm">Small</Button>
    <Button variant="purple" size="md">Medium</Button>
    <Button variant="purple" size="lg">Large</Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
    <Button variant="purple">Enabled</Button>
    <Button variant="purple" disabled>Disabled</Button>
  </div>
);
