import { data } from "../../data";
import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { animation } from "../animationConfig";

const descriptionTitle = $(".description__title");

const render = x => {
    descriptionTitle.innerText = data[x].name;
    animation(descriptionTitle);
};

state.on("index", render, 1500);

render(state.getState().index);
