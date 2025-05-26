import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  
  return {
    plugins: [react()],
    // base: '/ccchat-project/',  // For GitHub Pages
    server: {
      port: 8086, 
      proxy: {
        "/query": {
          target: env.VITE_TARGET_IP,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
