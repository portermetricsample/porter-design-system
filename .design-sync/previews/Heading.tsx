import * as React from "react";
import { Heading } from "@porter/design-system";

export const Levels = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
    <Heading level="display">Report</Heading>
    <Heading level="h1">Dashboards that ship</Heading>
    <Heading level="h2">Connect your data in minutes</Heading>
  </div>
);

export const StackedAccent = () => (
  <Heading level="display">
    Report<br />
    <strong>faster</strong>
  </Heading>
);
