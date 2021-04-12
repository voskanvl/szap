import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { debounce } from "../../debounce.js";

const descriptionTitle = $(".description__title");

const render = x => {
    descriptionTitle.innerText = data[x].name;
    gsap.from(descriptionTitle, {
        xPercent: -100,
        ease: "elastic.out(1,0.4)",
        duration: 1.5,
    });
};

state.on("index", debounce(render, 1500));

render(state.getState().index);
