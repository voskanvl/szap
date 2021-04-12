import { $, _ } from "../shorts.js";
import { data } from "../data.js";
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
    $(".images-carousel__container").innerHTML = result;
};
