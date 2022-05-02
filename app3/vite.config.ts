import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 3004,
    strictPort: true,
  },
  plugins: [
    federation({
      name: "@squad3",
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
