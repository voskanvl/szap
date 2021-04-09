/** @format */
import { $, $$, _ } from "./shorts.js";
import "./shorts";

// const pointer = $(".select-carousel__pointer");
const pointer = $(".pointer");
const items = $$(".select-carousel__item");
const selectCarouselContainer = $(".select-carousel__container");
const selectCarousel = $(".select-carousel");
// const selectCarouselLeft = selectCarousel.getBoundingClientRect().left;

export const calculateItemCenter = () =>
    items.forEach((e, i) => {
        const { left, width } = e.getBoundingClientRect();
        // const left = e.offsetLeft - selectCarouselContainer.scrollleft;
        // const width = e.offsetWidth;
        const center = left + width / 2;
        _(i, center);
        items[i].center = center;
    });

calculateItemCenter();

let currentEl = 0;

export const selectPointer = current => {
    currentEl = current;
    const left = items[current].center;
    _(left, pointer);
    pointer.style.left = left + "px";
};

const recalc = () =>
    setTimeout(() => {
        calculateItemCenter();
        selectPointer(currentEl);
    });

selectCarouselContainer.addEventListener("scroll", recalc);
window.addEventListener("resize", recalc);
