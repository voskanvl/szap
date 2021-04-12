import { gsap } from "gsap";
import { $ } from "../shorts.js";
import { data } from "../data.js";
import { descriptionMotion } from "../descriptionMotion.js";

const descriptionTitle = $(".description__title");
export const setName = x => {
    gsap.from(descriptionTitle, descriptionMotion);
    descriptionTitle.innerText = data[x].name;
};
