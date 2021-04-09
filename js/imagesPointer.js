/** @format */
import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";

// const pointer = $(".select-carousel__pointer");
const pointer = $(".images-pointer");
const items = $$(".images-carousel__item");
const imagesCarouselContainer = $(".images-carousel__container");

// const selectCarouselLeft = selectCarousel.getBoundingClientRect().left;

const calculateItemCenter = () =>
    items.forEach((e, i) => {
        const { top, width, height } = e.getBoundingClientRect();
        // const left = e.offsetLeft - selectCarouselContainer.scrollleft;
        // const width = e.offsetWidth;
        const center = top + height / 2;
        _(center);
        items[i].center = center;
    });

// calculateItemCenter();

let currentEl = 0;

export const imagesPointer = current => {
    calculateItemCenter();
    currentEl = current;
    const top = items[current].center;
    // pointer.style.left = left + "px";
    gsap.to(pointer, { top, ease: "elastic.out(1,0.3)" });
};

const recalc = () =>
    setTimeout(() => {
        calculateItemCenter();
        imagesPointer(currentEl);
    });

imagesCarouselContainer.addEventListener("scroll", recalc);
window.addEventListener("resize", recalc);
