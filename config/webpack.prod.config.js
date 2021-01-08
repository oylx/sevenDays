// ./webpack.config.js

// 一定记得运行 Webpack 前先注释掉这里。

// import { Configuration } from 'webpack'
/**

 * @type {Configuration}

 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RemoveCommentsPlugin = require("../remove-comments-plugin.js");
const path = require("path");
module.exports = {
  mode: "none",
  entry: "./src/main.js",
  devtool: "source-map", // source map 设置
  output: {
    filename: "bundle.js",
  },
  // ... 其他配置项
  optimization: {
    // 模块只导出被使用的成员
    usedExports: true,
    // 尽可能合并每一个模块到一个函数中
    concatenateModules: true,
    // 压缩输出结果
    minimize: true,
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
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: [["@babel/preset-env", { modules: "commonjs" }]],
            // presets: [["@babel/preset-env", { modules: false }]],
            presets: [["@babel/preset-env"]],
          },
        },
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
      patterns: [path.resolve(__dirname, "./../public")],
    }),
    new RemoveCommentsPlugin(),
  ],
};
