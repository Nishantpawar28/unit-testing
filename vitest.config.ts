import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true, //we dont have to impoert "it", "describe" methods in each test file
    setupFiles: "tests/setup.ts",  //This file is run before each test file
  },
});
