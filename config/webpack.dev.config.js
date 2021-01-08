// ./webpack.config.js

// 一定记得运行 Webpack 前先注释掉这里。

// import { Configuration } from 'webpack'
/**

 * @type {Configuration}

 */
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveCommentsPlugin = require("../remove-comments-plugin.js");
const path = require("path");
module.exports = {
  mode: "none",
  entry: "./src/main.js",
  devtool: "source-mcheap-module-eval-source-map", // source map 设置
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/,
        use: ["html-loader", "./markdown-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Sample",
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [path.resolve(__dirname, "../public")],
    }),
    // HMR 特性所需要的插件
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    open: true,
  },
};
