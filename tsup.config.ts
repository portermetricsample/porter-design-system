import { defineConfig } from "tsup";
import { copyFileSync } from "node:fs";

export default defineConfig({
  entry: { index: "src/index.ts" },
  format: ["esm"],
  outExtension: () => ({ js: ".es.js" }),
  dts: true,
  clean: true,
  external: ["react", "react-dom", "react/jsx-runtime"],
  // Ship the stylesheet (tokens + component classes) as dist/porter.css
  onSuccess: async () => {
    copyFileSync("src/porter.css", "dist/porter.css");
  },
});
