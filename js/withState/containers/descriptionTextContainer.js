import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { debounce } from "../../debounce.js";

const descriptionText = $(".description__text");

const render = x => {
    descriptionText.innerText = data[x].description;
    gsap.from(descriptionText, {
        xPercent: 100,
        ease: "bounce.out",
        duration: 1.5,
    });
};

state.on("index", debounce(render, 1500));

render(state.getState().index);
