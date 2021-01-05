// ./markdown-loader.js
const marked = require("marked");

module.exports = (source) => {
  // 加载到的模块内容 => '# About\n\nthis is a markdown file.'
  const html = marked(source);
  console.log(`hi: ` + html);
  const code = `module.exports = ${JSON.stringify(html)}`;

  // 返回值就是最终被打包的内容

  return code;
};
