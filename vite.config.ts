import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import vue from "@vitejs/plugin-vue";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
const require = createRequire(import.meta.url);

export default defineConfig({
  plugins: [
    vue(),
    ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
