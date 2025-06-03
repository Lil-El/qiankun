import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  plugins: [
    vue(),
    qiankun("sub-app", {
      useDevMode: true, // 开发模式
    }),
  ],
  base: "/sub-app/",
  server: {
    port: 7101,
    cors: true,
    origin: "http://localhost:7101",
  },
  build: {
    rollupOptions: {
      output: {
        format: "umd",
        // entryFileNames: `[name].js`,
        // chunkFileNames: `[name].js`,
        // assetFileNames: `[name].[ext]`,
      },
    },
  },
});
