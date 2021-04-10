/** @format */
import "regenerator-runtime/runtime.js";
import "./init";
import "./dragEl.js";

import { selectPointer } from "./selectPointer";
import data from "../data.json";
import { $, $$, _ } from "./shorts.js";
import setIndex, { setCurrentImage } from "./setIndex.js";
import imagesPointer from "./imagesPointer";
import { debounce } from "./debounce";
import { gsap } from "gsap";

const selectItems = $$(".select-carousel__item");
let imagesItems = $$(".images-carousel__item");

let currentIndex = 0;

const setNewImage = x => {
    setCurrentImage(currentIndex)(x);
    imagesPointer(x);
    gsap.from(".main-panel", { x: 5, ease: "elastic.out(1.1,0.1)" });
};

const setNewIndex = x => {
    currentIndex = x;
    setIndex(x);
    imagesItems = $$(".images-carousel__item");
    imagesItems.forEach((e, i) => {
        e.addEventListener(
            "click",
            debounce(() => {
                setNewImage(i);
            }, 1000),
        );
    });
};

selectItems.forEach((e, i) => {
    e.addEventListener("click", () => setNewIndex(i));
});

setNewIndex(currentIndex);

//TODO: проработать рекомендации lighthouse
//TODO: решить вопрос с багом основной панели
//TODO: сделать адаптив @mediaquery
//TODO: проверить кроссбраузерность
//TODO: баг, связанный с тем, что в images-carousel при первоначальной загрузки не грузятся картинки
//
/*TODO: <picture>
 <source type="image/webp" srcset="image.webp">
 <source type="image/jpeg" srcset="image.jpg">
 <img src="image.jpg" alt="Изображение">
</picture>*/
