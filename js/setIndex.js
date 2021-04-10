/** @format */

import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";
import data from "../data.json";
import { selectPointer } from "./selectPointer";
import imagesPointer from "./imagesPointer";
import { debounce } from "./debounce.js";

const specification = $(".specification__text");
const descriptionTitle = $(".description__title");
const descriptionText = $(".description__text");
const descriptionPriceValue = $(".description__price-value");
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

const descriptionMotion = {
    xPercent: 100,
    ease: "bounce.out",
    duration: 0.7,
};
export const setName = x => {
    gsap.from(descriptionTitle, descriptionMotion);
    descriptionTitle.innerText = data[x].name;
};
export const setDescription = x => {
    gsap.from(descriptionText, { ...descriptionMotion, delay: 0.2 });
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

export const setPrice = x => {
    descriptionPriceValue.textContent = data[x].price;
    gsap.from(descriptionPriceValue, { opacity: 0, scale: 0.2 });
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
    setPrice(x);
    shake();
};
export default debounce(setIndex, 1000);
