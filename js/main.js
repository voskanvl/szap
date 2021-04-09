/** @format */
import "./shorts";
import "./init";
import "./dragEl.js";

import { selectPointer } from "./selectPointer";
import data from "../data.json";

let currentIndex = 0;
// [0, 1, 2, 3].forEach(e => {
//     setTimeout(() => selectPointer(e), 2000);
// });
selectPointer(currentIndex);
window.selectPointer = selectPointer;
