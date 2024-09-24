import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.ts"],
  format: ["iife"],
  platform: "browser",
  outExtension() {
    return { js: `.1.js` };
  },
  splitting: false,
});
