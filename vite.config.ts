import { defineConfig, optimizeDeps } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@chakra-ui/react-use-merge-refs"],
  },
});
