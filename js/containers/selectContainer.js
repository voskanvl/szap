import { state } from "../state";
import { $, $$, _ } from "../shorts.js";
import { data } from "../data.js";
import { debounce } from "../debounce";

const selectContainer = $(".select-carousel__container");
const imagesLoaded = new Event("imagesLoaded");

export const fillContainer = () => {
    const inner = data.reduce((acc, { name, images }, i) => {
        return (acc += `<div class="select-carousel__item" data-id="${i}"><img class="select-carousel__item-img" src="${images.main}" alt="${name}"><div class="select-carousel__item-text">${name}</div></div>`);
    }, "");
    selectContainer.innerHTML = inner;
    const allImgs = $$(".select-carousel__item-img");
    let unloaded = allImgs.length;
    allImgs.forEach(img =>
        img.addEventListener("load", () => {
            unloaded--;
            if (unloaded === 0) selectContainer.dispatchEvent(imagesLoaded);
        }),
    );
};

selectContainer.addEventListener(
    "click",
    debounce(
        e =>
            state.setState({
                index: e.target.closest(".select-carousel__item").dataset.id,
            }),
        500,
    ),
);

fillContainer();
