import shopify from "vite-plugin-shopify";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [
    shopify({
      themeRoot: ".",
      sourceCodeDir: "frontend/*",
      entrypointsDir: "frontend/entrypoints",
    }),
    vue(),
    tailwindcss(),
  ],
  server: {
    cors: {
      origin: [
        /^https?:\/\/(?:(?:[^:]+\.)?localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/,
        "https://andrronov.myshopify.com",
      ],
    },
  },
  build: {
    emptyOutDir: false,
  },
};
