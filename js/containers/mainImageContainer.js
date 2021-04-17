import { data } from "../data";
import { state } from "../state";
import { $ } from "../shorts.js";
import { animation } from "../animationConfig";

const mainImage = $(".main-img");

const render = images => index => {
    mainImage.style.backgroundImage = `url(${data[index].images.additional[images]})`;
    animation(mainImage);
};

state.on("index", render(state.getState().images));
state.on("images", x => render(x)(state.getState().index));

render(state.getState().images)(state.getState().index);
