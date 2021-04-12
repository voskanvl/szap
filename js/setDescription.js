import { $ } from "./shorts.js";
import { gsap } from "gsap";
import { descriptionMotion } from "./descriptionMotion.js";
import { data } from "./data.js";

const descriptionText = $(".description__text");
export const setDescription = x => {
    gsap.from(descriptionText, { ...descriptionMotion, delay: 0.2 });
    descriptionText.innerText = data[x].description;
};
