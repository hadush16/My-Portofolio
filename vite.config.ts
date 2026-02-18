import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// create __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ mode }) => {
  const isDev = mode !== "production";

  // load Replit plugins ONLY in dev
  const replitPlugins =
    isDev && process.env.REPL_ID
      ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
          (await import("@replit/vite-plugin-dev-banner")).devBanner(),
        ]
      : [];

  return {
    root: path.resolve(__dirname, "client"),

    plugins: [
      react(),
      runtimeErrorOverlay(),
      ...replitPlugins,
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client/src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },

    build: {
      outDir: path.resolve(__dirname, "dist"), // ✅ Netlify friendly
      emptyOutDir: true,
    },

    server: {
      port: 5173,
      open: true,
      fs: {
        strict: true,
      },
    },
  };
});
