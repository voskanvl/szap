import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { data } from "../../data.js";

const selectContainer = $(".select-carousel__container");

export const fillContainer = () => {
    _(data);
    const inner = data.reduce((acc, { name, images }, i) => {
        return (acc += `<div class="select-carousel__item" data-id="${i}"><img class="select-carousel__item-img" src="${images.main}" alt="${name}"><div class="select-carousel__item-text">${name}</div></div>`);
    }, "");
    selectContainer.innerHTML = inner;
};

selectContainer.addEventListener("click", e => {
    state.setState({
        index: e.target.closest(".select-carousel__item").dataset.id,
    });
});

fillContainer();
