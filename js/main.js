/** @format */
import "regenerator-runtime/runtime.js";
import "./init";
import "./dragEl.js";

import { selectPointer } from "./selectPointer";
import data from "../data.json";
import { $, $$, _ } from "./shorts.js";
import setIndex from "./setIndex.js";

const items = $$(".select-carousel__item");

let currentIndex = 0;

const setNewIndex = async x => {
    currentIndex = x;
    await setIndex(x);
};

items.forEach((e, i) => {
    e.addEventListener("click", () => setNewIndex(i));
});

// [0, 1, 2, 3].forEach(e => {
//     setTimeout(() => selectPointer(e), 2000);
// });
selectPointer(1);
window.selectPointer = selectPointer;
