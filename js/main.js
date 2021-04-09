/** @format */
import "regenerator-runtime/runtime.js";
import "./init";
import "./dragEl.js";

import { selectPointer } from "./selectPointer";
import data from "../data.json";
import { $, $$, _ } from "./shorts.js";
import setIndex, { setCurrentImage } from "./setIndex.js";
import { imagesPointer } from "./imagesPointer";

const selectItems = $$(".select-carousel__item");
let imagesItems = $$(".images-carousel__item");

let currentIndex = 0;

const setNewIndex = x => {
    currentIndex = x;
    setIndex(x);
    imagesItems = $$(".images-carousel__item");
    imagesItems.forEach((e, i) => {
        e.addEventListener("click", () => {
            setNewImage(i);
        });
    });
};

const setNewImage = x => {
    setCurrentImage(currentIndex)(x);
    imagesPointer(x);
};

selectItems.forEach((e, i) => {
    e.addEventListener("click", () => setNewIndex(i));
});

setNewIndex(currentIndex);
// selectPointer(0);
// imagesPointer(0);
