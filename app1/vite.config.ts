import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3002,
    strictPort: true,
  },
  plugins: [
    federation({
      name: "@squad1",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
