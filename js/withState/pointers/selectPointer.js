import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";

const selectItems = $$(".select-carousel__item");

const center = element => {
    const { left, width } = element.getBoundingClientRect();
    return left + width / 2;
};

state.on("index", x => {
    gsap.to(".select-pointer", {
        x: center(selectItems[x]),
        ease: "elastic.out(1,0.3)",
    });
});
