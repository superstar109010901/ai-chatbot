import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createServer } from "./server";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks for better caching
          if (id.includes('node_modules')) {
            // React core libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // Radix UI components
            if (id.includes('@radix-ui')) {
              return 'vendor-radix-ui';
            }
            // Animation libraries
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            // 3D libraries (Three.js)
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-3d';
            }
            // Swiper carousel
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            // React Query
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            // Other vendor libraries
            return 'vendor-other';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Increase limit slightly since we're chunking
  },
  plugins: [react(), expressPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      // Only handle API routes, let Vite handle everything else
      server.middlewares.use((req, res, next) => {
        // Only handle /api/* routes with Express
        if (req.url?.startsWith("/api/")) {
          // Use Express app to handle API routes
          // Express will automatically send 404 if route doesn't exist
          app(req, res, next);
        } else {
          // Pass all other requests to Vite's middleware
          next();
        }
      });
    },
  };
}
