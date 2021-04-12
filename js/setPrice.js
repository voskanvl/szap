import { $, _ } from "./shorts.js";
import { gsap } from "gsap";
import { data } from "./data.js";
export const setPrice = x => {
    $(".description__price-value").textContent = data[x].price;
    gsap.from(".description__price-value", { opacity: 0, scale: 0.2 });
};
