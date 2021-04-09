/** @format */
import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";
// const pointer = $(".select-carousel__pointer");
const pointer = $(".select-pointer");
const items = $$(".select-carousel__item");
const selectCarouselContainer = $(".select-carousel__container");

// const selectCarouselLeft = selectCarousel.getBoundingClientRect().left;

export const calculateItemCenter = () =>
    items.forEach((e, i) => {
        const { left, width } = e.getBoundingClientRect();
        // const left = e.offsetLeft - selectCarouselContainer.scrollleft;
        // const width = e.offsetWidth;
        const center = left + width / 2;
        items[i].center = center;
    });

calculateItemCenter();

let currentEl = 0;

export const selectPointer = current => {
    calculateItemCenter();
    currentEl = current;
    const left = items[current].center;
    // pointer.style.left = left + "px";
    gsap.to(pointer, { left, ease: "elastic.out(1,0.3)" });
};

const recalc = () =>
    setTimeout(() => {
        calculateItemCenter();
        selectPointer(currentEl);
    });

selectCarouselContainer.addEventListener("scroll", recalc);
window.addEventListener("resize", recalc);
