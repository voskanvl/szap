import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { debounce } from "../../debounce.js";

const mainImage = $(".current-image img");

const render = images => index => {
    mainImage.src = data[index].images.additional[images];
    gsap.from(mainImage, {
        scale: 1.05,
        yPercent: -10,
        ease: "elastic.out(1.2,0.4)",
        duration: 1.5,
    });
};

state.on("index", debounce(render(state.getState().images), 1500));
state.on("images", x => debounce(render(state.getState().images)(x), 1500));

render(state.getState().images)(state.getState().index);
