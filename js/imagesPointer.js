/** @format */
import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";
import { debounce } from "./debounce.js";
import { limiter } from "./limiter.js";

const pointer = $(".images-pointer");
const mainPanel = $(".main-panel");

let items = $$(".images-carousel__item");
let imagesCarouselContainer = $(".images-carousel__container");
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
            if (i >= 30) {
                clearInterval(interval);
                reject("Картинки не загрузились");
            }

            if (loadedImages === itemImages.length) {
                items = $$(".images-carousel__item");
                items.forEach((e, idx) => {
                    const { top, width, height } = e.getBoundingClientRect();
                    const center = top + height / 2;
                    items[idx].center = center;
                });
                clearInterval(interval);
                resolve(items);
            }
        }, 100);
    });

const currentLeft = () => {
    imagesCarouselContainer = $(".images-carousel__container");
    const { left, width } = imagesCarouselContainer.getBoundingClientRect();
    pointer.style.left = left + width + "px";
    return left + width;
};

let currentEl = 0;

const imagesPointer = async current => {
    await calculateItemCenter();
    currentLeft();
    currentEl = current;

    const {
        top: topContainer,
        height: heightContainer,
    } = imagesCarouselContainer.getBoundingClientRect();

    const { upLimit, downLimit } = {
        upLimit: topContainer,
        downLimit: topContainer + heightContainer,
    };

    const { value: top, more, less } = limiter(items[current].center)(
        upLimit,
        downLimit,
    );

    gsap.to(pointer, {
        top,
        y: "-50%",
        x: -pointer.offsetWidth,
        ease: "elastic.out(1,0.3)",
        rotate: () => {
            if (more) return -90;
            if (less) return 90;
            return 0;
        },
    });
};

const recalc = async () => {
    await calculateItemCenter();
    await imagesPointer(currentEl);
};

imagesCarouselContainer.addEventListener("scroll", debounce(recalc, 500));
window.addEventListener("resize", debounce(recalc, 500));

export default imagesPointer;

//TODO: доделать передвижение флажка
