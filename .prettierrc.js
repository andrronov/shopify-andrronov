import baseConfig from "./codestyle/config-prettier/index.js";

const config = {
  ...baseConfig,
  plugins: ["@shopify/prettier-plugin-liquid"],
};

export default config;
