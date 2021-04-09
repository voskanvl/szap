/** @format */

import { $, $$, _ } from "./shorts.js";
import { gsap } from "gsap";
import data from "../data.json";

const specification = $(".specification__text");
const descriptionTitle = $(".description__title");
const descriptionText = $(".description__text");
const currentImage = $(".current-image>img");

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
export const setCurrentImage = x => {
    gsap.from(currentImage, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
    });
    currentImage.setAttribute("src", data[x].images.main);
};

const setIndex = x => {
    selectPointer(x);
    setSpecification(x);
    setName(x);
    setDescription(x);
    setCurrentImage(x);
};
export default setIndex;
