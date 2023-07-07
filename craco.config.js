const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [
    {
      // less
      plugin: CracoLessPlugin,
    },
  ],
  // webpack
  webpack: {
    alias: {
      // 别名配置的路径是绝对路径
      "@": path.resolve(__dirname, "src"),
    },
  },
};
