import { defineConfig } from "tsup";

export default defineConfig({
  name: "tsup",
  clean: true,
  target: "node20",
  entry: ["src/index.ts"],
  splitting: false,
});
