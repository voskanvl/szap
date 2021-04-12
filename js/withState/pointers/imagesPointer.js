import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { limiter } from "../../limiter.js";

const container = $(".images-carousel__container");
const selectItems = $$(".images-carousel__item");

const center = element => {
    const { top, height } = element.getBoundingClientRect();
    return top;
};

const render = x => {
    const {
        top: containerTop,
        height: containerHeight,
        left: containerLeft,
        width: containerWidth,
        right: containerRight,
    } = container.getBoundingClientRect();

    const pointer = limiter(x)(containerTop, containerTop + containerHeight);

    gsap.to(".images-pointer", {
        y: pointer.value,
        x: containerLeft + containerWidth,
        rotate: () => {
            if (pointer.less) return -90;
            if (pointer.more) return 90;
            return 0;
        },
        ease: "elastic.out(1,0.3)",
    });
};

state.on("images", x => render(center(selectItems[x])));

container.addEventListener("imagesLoaded", () =>
    render(center(selectItems[state.getState().images])),
);
container.addEventListener("scroll", () =>
    render(center(selectItems[state.getState().images])),
);
container.addEventListener("mousewheel", () =>
    render(center(selectItems[state.getState().images])),
);
window.addEventListener("resize", () =>
    render(center(selectItems[state.getState().images])),
);
