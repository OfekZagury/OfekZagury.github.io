import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Served from the root of https://ofekzagury.github.io, so the base path is "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
