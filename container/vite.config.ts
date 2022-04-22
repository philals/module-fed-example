import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: "container",
      filename: "remoteEntry.js",
      remotes: {
        "@mpui": "http://localhost:3001/assets/remoteEntry.js",
        "@squad1": {
          external: "http://localhost:3002/assets/1.0.2/remoteEntry.js",
          from: "vite",
        },
        "@squad2": {
          external: "http://localhost:3003/assets/remoteEntry.js",
          from: "vite",
        },
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
});
