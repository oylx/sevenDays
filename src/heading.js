// ./src/heading.js
const code = 'console.log("foo~")//# sourceURL=webpack:///./src/heading.js';
eval(code); // 将 code 中的字符串作为 JS 代码执行

export default () => {
  const element = document.createElement("h2");

  element.textContent = "Hello webpack";

  element.addEventListener("click", () => alert("Hello webpack"));

  return element;
};
