import { data } from "../../data";
import { state } from "../../state";
import { $, _ } from "../../shorts.js";
import { animation } from "../animationConfig";

const specification = $(".specification__text");

const render = x => {
    specification.innerText = data[x].specification;
    animation(specification);
};

state.on("index", render);

render(state.getState().index);
