import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/


export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/v1": env.VITE_BACKEND_URL || 'http://localhost:3000',
      },
    },
  }
})


