// ./webpack.config.js

// 一定记得运行 Webpack 前先注释掉这里。

// import { Configuration } from 'webpack'
/**

 * @type {Configuration}

 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveCommentsPlugin = require("./remove-comments-plugin.js");
const path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/main.js",
  devtool: "source-map", // source map 设置
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Sample",
      template: "./src/index.html",
    }),
    // 用于生成 about.html
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [path.resolve(__dirname, "public")],
    }),
    new RemoveCommentsPlugin(),
  ],
};
