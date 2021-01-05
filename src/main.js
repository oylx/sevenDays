// ./src/index.js

import createHeading from "./heading.js";

import about from "./about.md";
console.log(about);
const heading = createHeading();

document.body.append(heading);
