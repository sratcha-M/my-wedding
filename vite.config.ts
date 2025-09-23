import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Import the plugin

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "swiper/css": "swiper/css",
    },
  },
});
