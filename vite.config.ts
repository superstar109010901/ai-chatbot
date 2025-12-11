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
            // React core libraries - Keep React in main bundle to ensure it loads first
            // This prevents "React is undefined" errors in other chunks
            if (id.includes('react') && !id.includes('react-router') && !id.includes('react-hook-form') && 
                !id.includes('react-day-picker') && !id.includes('react-resizable-panels')) {
              // Don't chunk React - keep it in main bundle for immediate availability
              return undefined;
            }
            // React Router - Keep with React to ensure proper module resolution
            if (id.includes('react-router')) {
              return undefined; // Keep in main bundle with React
            }
            // Radix UI components (depend on React)
            if (id.includes('@radix-ui')) {
              return 'vendor-radix-ui';
            }
            // Animation libraries (depend on React) - Keep with React for proper access
            if (id.includes('framer-motion')) {
              return undefined; // Keep in main bundle with React
            }
            // React Query (depends on React)
            if (id.includes('@tanstack/react-query')) {
              return 'vendor-query';
            }
            // React Hook Form (depends on React)
            if (id.includes('react-hook-form')) {
              return 'vendor-react-forms';
            }
            // Other React-dependent libraries
            if (id.includes('next-themes') || id.includes('sonner') || id.includes('react-day-picker') || 
                id.includes('react-resizable-panels') || id.includes('recharts') || id.includes('embla-carousel-react') ||
                id.includes('lucide-react') || id.includes('vaul') || id.includes('cmdk') || id.includes('input-otp')) {
              return 'vendor-react-utils';
            }
            // 3D libraries (Three.js)
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor-3d';
            }
            // Swiper carousel
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            // Pure utility libraries (no React dependency)
            if (id.includes('zod') || id.includes('clsx') || id.includes('tailwind-merge') || 
                id.includes('class-variance-authority') || id.includes('date-fns') ||
                id.includes('@hookform/resolvers') || id.includes('globals')) {
              return 'vendor-utils';
            }
            // Unknown libraries - put with React utils to ensure React is available
            return 'vendor-react-utils';
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
});
