/** @format */

import { $, _ } from "./shorts.js";
import { gsap } from "gsap";
import { data } from "./data.js";
import { selectPointer } from "./selectPointer";
import { setSpecification } from "./setSpecification";
import { setName } from "./setName";
import imagesPointer from "./imagesPointer";
import { debounce } from "./debounce.js";
import { shake } from "./shake.js";
import { setDescription } from "./setDescription.js";
import { setPrice } from "./setPrice.js";

const currentImage = $(".current-image>img");
const imagesCarouselContainer = $(".images-carousel__container");

export const setNewImage = currentIndex => x => {
    setCurrentImage(currentIndex)(x);
    imagesPointer(x);
    gsap.from(".main-panel", { x: 5, ease: "elastic.out(1.1,0.1)" });
};

export const setCurrentImage = idx => x => {
    gsap.from(currentImage, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
    });
    currentImage.setAttribute("src", data[idx].images.additional[x]);
};

export const createNewImagesItems = index => {
    const result = data[index].images.additional.reduce(
        (acc, img, i) =>
            (acc += `<div class="images-carousel__item">
                        <img
                            src="${img}"
                            alt="${data[index].name}-${i}"
                            class="images-carousel__item-img"
                        />
                    </div>`),
        "",
    );
    imagesCarouselContainer.innerHTML = result;
};

const setIndex = x => {
    selectPointer(x);
    imagesPointer(0);
    setSpecification(x);
    setName(x);
    setDescription(x);
    setCurrentImage(x)(0);
    createNewImagesItems(x);
    setPrice(x);
    shake();
};
export default debounce(setIndex, 1000);
