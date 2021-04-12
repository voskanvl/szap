import { $, _ } from "./shorts.js";
import { data } from "./data.js";
const selectCarouselContainer = $(".select-carousel__container");
export const createNewSelectItem = index => {
    const selectCarouselItemText = document.createElement("div");
    selectCarouselItemText.classList.add("select-carousel__item-text");
    selectCarouselItemText.innerText = data[index].name;

    const selectCarouselItemImg = document.createElement("img");
    selectCarouselItemImg.classList.add("select-carousel__item-img");
    selectCarouselItemImg.setAttribute("src", data[index].images.main);
    selectCarouselItemImg.setAttribute("alt", data[index].name);

    const selectCarouselItem = document.createElement("div");
    selectCarouselItem.classList.add("select-carousel__item");

    selectCarouselItem.appendChild(selectCarouselItemImg);
    selectCarouselItem.appendChild(selectCarouselItemText);

    return selectCarouselItem;
};

data.forEach((_, i) => {
    const item = createNewSelectItem(i);
    selectCarouselContainer.appendChild(item);
});
