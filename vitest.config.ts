import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // Permite usar describe, it, expect sin importarlos en cada test
    environment: "jsdom", // Simula el DOM en el navegador
    setupFiles: "./src/test/setupTest.ts", // Carga configuración global
  },
});
