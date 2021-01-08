// ./src/main.js

import createHeading from "./heading.js";
import createEditor from "./editor.js";
// ./src/main.js

import { Button } from "./components";

import "./main.css";

const heading = createHeading();
const editor = createEditor();

document.body.append(heading);
document.body.append(editor);
document.body.appendChild(Button());

console.log("main.js running");

// 运行时错误

// console.log111("main.js running");
//hmr
let lastEditor = editor;
module.hot.accept("./editor.js", () => {
  console.log("hi");
  // 当 editor.js 更新，自动执行此函数
  // 临时记录更新前编辑器内容
  const value = lastEditor.value;
  // 移除更新前的元素
  document.body.removeChild(lastEditor);
  // 创建新的编辑器
  // 此时 createEditor 已经是更新过后的函数了
  lastEditor = createEditor();
  // 还原编辑器内容
  lastEditor.value = value;
  // 追加到页面
  document.body.appendChild(lastEditor);
});

// module.hot.accept("./editor.js", () => {
//   // 当 ./editor.js 更新，自动执行此函数
//   console.log("editor 更新了～～");
// });
