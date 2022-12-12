import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import compress from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // 支持 Markdown 文件加载
      include: [/\.vue$/],
    }),
    compress({
      threshold: 1024 * 100,
    }),
  ],
  base: "/yulegeyu",
});
