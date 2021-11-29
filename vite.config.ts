import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// const path = require("path");

export default defineConfig({
//   base: path.resolve(__dirname, "./dist/"),
  plugins: [vue()],
});