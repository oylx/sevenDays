// ./webpack.config.js

// 一定记得运行 Webpack 前先注释掉这里。

// import { Configuration } from 'webpack'
/**

 * @type {Configuration}

 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.md$/,
        use: ["html-loader", "./markdown-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

module.exports = config;
