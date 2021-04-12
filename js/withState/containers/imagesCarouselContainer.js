import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { data } from "../../data.js";

const imagesCarouselContainer = $(".images-carousel__container");
const imagesLoaded = new Event("imagesLoaded");

export const fillContainer = () => {
    const idx = state.getState().index;
    const inner = data[idx].images.additional.reduce((acc, img, i) => {
        return (acc += `<div class="images-carousel__item" data-id="${i}">
        <img src="${img}" alt="${
            data[state.getState().index].name
        }-${i}" class="images-carousel__item-img">
    </div>`);
    }, "");
    imagesCarouselContainer.innerHTML = inner;
    const allImgs = $$(".images-carousel__item-img");
    let unloaded = allImgs.length;
    const tl = gsap.timeline({ defaults: { duration: 0.2 } });
    allImgs.forEach((img, i) => {
        img.addEventListener("load", () => {
            unloaded--;
            if (unloaded === 0)
                imagesCarouselContainer.dispatchEvent(imagesLoaded);
        });
        tl.from(img, { xPercent: -100 });
    });
};

imagesCarouselContainer.addEventListener("click", e => {
    state.setState({
        images: e.target.closest(".images-carousel__item").dataset.id,
    });
});

state.on("index", fillContainer);

fillContainer();
