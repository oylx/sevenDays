// ./markdown-loader.js
const marked = require("marked");

module.exports = (source) => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  const html = marked(source);
  return html;
};
