import { data } from "../../data";
import { state } from "../../state";
import { $, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { debounce } from "../../debounce.js";

const specification = $(".specification__text");

const render = x => {
    specification.innerText = data[x].specification;
    gsap.from(specification, {
        yPercent: 25,
        opacity: 0.5,
        ease: "bounce.out",
        duration: 1.5,
    });
};

state.on("index", debounce(render, 1500));

render(state.getState().index);
