import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/app",
  server: {
    host: "0.0.0.0",
    allowedHosts: ["__AGENT_HOST__", "pinclaw.devpinata.cloud"],
    hmr: {
      host: "__AGENT_HOST__",
      protocol: "wss",
      clientPort: 443,
    },
  },
});
