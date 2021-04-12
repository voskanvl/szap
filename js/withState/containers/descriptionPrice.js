import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { debounce } from "../../debounce.js";

const descriptionPriceValue = $(".description__price-value");

const render = x => {
    descriptionPriceValue.innerText = data[x].price;
    gsap.from(descriptionPriceValue, {
        xPercent: -100,
        ease: "elastic.out(1,0.4)",
        duration: 1.5,
        delay: 0.4,
    });
};

state.on("index", debounce(render, 1500));

render(state.getState().index);
