/** @format */
import "./shorts";
import "./init";
import "./dragEl.js";

import { selectPointer } from "./selectPointer";
import data from "../data.json";
import { $, $$, _ } from "./shorts.js";
const items = $$(".select-carousel__item");

let currentIndex = 0;

items.forEach((e, i) => {
    e.addEventListener("click", () => {
        currentIndex = i;
        selectPointer(currentIndex);
        _(currentIndex);
    });
});

// [0, 1, 2, 3].forEach(e => {
//     setTimeout(() => selectPointer(e), 2000);
// });
selectPointer(1);
window.selectPointer = selectPointer;
