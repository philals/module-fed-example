import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3001,
    strictPort: true,
  },
  plugins: [
    federation({
      name: "@mpui",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header.tsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        "react-router-dom": { singleton: true },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
