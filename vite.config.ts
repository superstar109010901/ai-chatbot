import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: [".", "./client", "./shared"],
    },
  },
  build: {
    outDir: "dist",
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
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
