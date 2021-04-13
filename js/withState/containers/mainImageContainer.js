import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { animation } from "../animationConfig";

const mainImage = $(".current-image img");

const render = images => index => {
    mainImage.src = data[index].images.additional[images];
    animation(mainImage);
};

state.on("index", render(state.getState().images));
state.on("images", x => render(x)(state.getState().index));

render(state.getState().images)(state.getState().index);
