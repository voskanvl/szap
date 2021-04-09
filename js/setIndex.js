/** @format */

import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";
import data from "../data.json";
import { selectPointer } from "./selectPointer";
import { imagesPointer } from "./imagesPointer";

const specification = $(".specification__text");
const descriptionTitle = $(".description__title");
const descriptionText = $(".description__text");
const currentImage = $(".current-image>img");
const selectCarousel = $(".select-carousel");
const panels = $$(".panel");
const manager = $(".manager");
const title = $(".title");
const imagesCarouselContainer = $(".images-carousel__container");

export const setSpecification = x => {
    gsap.from(specification, {
        yPercent: 100,
        ease: "elastic.out(0.5,0.3)",
        duration: 1.5,
    });
    specification.innerText = data[x].specification;
};
export const setName = x => {
    gsap.from(descriptionTitle, {
        xPercent: 100,
        ease: "elastic.out(0.5,0.3)",
        duration: 1.5,
    });
    descriptionTitle.innerText = data[x].name;
};
export const setDescription = x => {
    gsap.from(descriptionText, {
        xPercent: 100,
        ease: "elastic.out(0.5,0.3)",
        duration: 1.5,
        delay: 0.2,
    });
    descriptionText.innerText = data[x].description;
};
export const setCurrentImage = idx => x => {
    gsap.from(currentImage, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
    });
    currentImage.setAttribute("src", data[idx].images.additional[x]);
};

const shake = () => {
    gsap.from([panels, manager], {
        rotate: 1,
        ease: "elastic.out(1.1,0.1)",
    });
    gsap.from([".title", ".background__leftside"], {
        xPercent: 1,
        ease: "elastic.out(1.1,0.1)",
    });
    gsap.from(".images-carousel__item", {
        xPercent: -100,
        stagger: 0.1,
        ease: "elastic.out(0.5,0.3)",
    });
};

const debounce = (fn, time) => {
    let enabled = true;

    return (...args) => {
        if (!enabled) return;
        fn.apply(null, args);
        enabled = false;
        setTimeout(() => {
            enabled = true;
        }, time);
    };
};

export const createNewImagesItems = index => {
    const result = data[index].images.additional.reduce(
        (acc, img, i) =>
            (acc += `<div class="images-carousel__item">
                        <img
                            src="${img}"
                            alt="${data[index].name}-${i}"
                            class="images-carousel__item-img"
                        />
                    </div>`),
        "",
    );
    imagesCarouselContainer.innerHTML = result;
};

const setIndex = x => {
    selectPointer(x);
    imagesPointer(0);
    setSpecification(x);
    setName(x);
    setDescription(x);
    setCurrentImage(x)(0);
    createNewImagesItems(x);
    shake();
};
export default debounce(setIndex, 1000);
