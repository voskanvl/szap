import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { animation } from "../animationConfig";

const descriptionText = $(".description__text");

const render = x => {
    descriptionText.innerText = data[x].description;
    animation(descriptionText, {
        yPercent: 100,
        duration: 1,
        ease: "power1.out",
    });
};

state.on("index", render);

render(state.getState().index);
