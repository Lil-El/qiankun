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
  base: import.meta.env.DEV ? "/sub-app/" : "http://127.0.0.1:5501/",
  server: {
    port: 7100,
    cors: true,
    origin: "http://localhost:7100",
  },
  build: {
    rollupOptions: {
      output: {
        format: "umd",
      },
    },
  },
});
