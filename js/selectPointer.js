/** @format */
import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";
// const pointer = $(".select-carousel__pointer");
const pointer = $(".select-pointer");
const items = $$(".select-carousel__item");
const itemImages = $$(".select-carousel__item > img");
const selectCarouselContainer = $(".select-carousel__container");

// const selectCarouselLeft = selectCarousel.getBoundingClientRect().left;
let loadedImages = 0;
itemImages.forEach((e, i) => {
    e.addEventListener("load", () => {
        loadedImages++;
        _("load", i, loadedImages);
    });
});
export const calculateItemCenter = () =>
    new Promise((resolve, reject) => {
        let i = 0;
        const interval = setInterval(() => {
            i++;
            if (i >= 20) {
                clearInterval(interval);
                reject("Картинки не загрузились");
            }
            if (loadedImages === itemImages.length) {
                items.forEach((e, i) => {
                    // debugger;
                    const { left, width } = e.getBoundingClientRect();
                    items[i].center = left + width / 2;
                });
                clearInterval(interval);
                resolve(items);
            }
        }, 100);
    });

// calculateItemCenter();

let currentEl = 0;

export const selectPointer = async current => {
    await calculateItemCenter();
    currentEl = current;
    const left = items[current].center;
    // pointer.style.left = left + "px";
    gsap.to(pointer, { left, ease: "elastic.out(1,0.3)" });
};

const recalc = async () => {
    await calculateItemCenter();
    selectPointer(currentEl);
};

selectCarouselContainer.addEventListener("scroll", recalc);
window.addEventListener("resize", recalc);
