const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      views: resolve("src/views"),
      assets: resolve("src/assets"),
      services: resolve("src/services"),
    },
  },
};
