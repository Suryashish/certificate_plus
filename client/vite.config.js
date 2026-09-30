import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Any request to /api is forwarded to the Express server,
    // so the frontend can just call fetch("/api/...").
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
