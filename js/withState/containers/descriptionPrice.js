import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { animation } from "../animationConfig";

const descriptionPriceValue = $(".description__price-value");

const render = x => {
    descriptionPriceValue.innerText = data[x].price;
    animation(descriptionPriceValue, {
        xPercent: 40,
        yPercent: null,
        scale: 1,
        opacity: 1,
        ease: "power1.out",
    });
};

state.on("index", render);

render(state.getState().index);
