import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import esmodule from "vite-plugin-esmodule";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
