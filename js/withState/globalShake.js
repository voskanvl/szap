import { state } from "../state";
import { gsap } from "gsap";
import { debounce } from "../debounce.js";

const render = x => {
    gsap.from([".panel", ".background__leftside"], {
        rotate: 1,
        scale: 0.99,
        ease: "elastic.out(1.1,0.1)",
        duration: 1.5,
    });
};

state.on("index", debounce(render, 1500));

render(state.getState().index);
