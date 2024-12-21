import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@App": path.resolve(__dirname, "src/app"),
      "@Shared": path.resolve(__dirname, "src/shared"),
      "@Entities": path.resolve(__dirname, "src/entities"),
      "@Features": path.resolve(__dirname, "src/features"),
      "@Widgets": path.resolve(__dirname, "src/widgets"),
      "@Pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
