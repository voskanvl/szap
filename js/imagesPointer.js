/** @format */
import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";

// const pointer = $(".select-carousel__pointer");
const pointer = $(".images-pointer");

let items = $$(".images-carousel__item");
const imagesCarouselContainer = $(".images-carousel__container");
const itemImages = $$(".images-carousel__container img");

// const selectCarouselLeft = selectCarousel.getBoundingClientRect().left;
let loadedImages = 0;
itemImages.forEach((e, i) => {
    e.addEventListener("load", () => {
        loadedImages++;
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
                items = $$(".images-carousel__item");
                items.forEach((e, idx) => {
                    const { top, width, height } = e.getBoundingClientRect();
                    const center = top + height / 2;
                    _("center", center);
                    items[idx].center = center;
                });
                clearInterval(interval);
                resolve(items);
            }
        }, 100);
    });

const currentRight = () => {
    const { right } = imagesCarouselContainer.getBoundingClientRect();
    pointer.style.right = right + "px";
    return right;
};

let currentEl = 0;

export const imagesPointer = async current => {
    await calculateItemCenter();
    currentRight();
    currentEl = current;
    const top = items[current].center;
    _("top", top);
    gsap.to(pointer, { top, y: "-50%", ease: "elastic.out(1,0.3)" });
};

const recalc = async () => {
    await calculateItemCenter();
    imagesPointer(currentEl);
};

imagesCarouselContainer.addEventListener("scroll", recalc);
window.addEventListener("resize", recalc);

//TODO: доделать передвижение флажка
