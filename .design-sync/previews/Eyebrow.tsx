import * as React from "react";
import { Eyebrow, Heading } from "@porter/design-system";

export const Default = () => <Eyebrow>Marketing reports</Eyebrow>;

export const AboveHeadline = () => (
  <div>
    <Eyebrow>Looker Studio</Eyebrow>
    <Heading level="h2" style={{ marginTop: 16 }}>
      Your data, <strong>on brand</strong>
    </Heading>
  </div>
);
