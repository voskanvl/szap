import { state } from "../../state";
import { $, $$, _ } from "../../shorts.js";
import { gsap } from "gsap";
import { limiter } from "../../limiter.js";

const container = $(".select-carousel__container");
const selectItems = $$(".select-carousel__item");

const center = element => {
    const { left, width } = element.getBoundingClientRect();
    return left + width / 2;
};

const render = x => {
    const {
        left: containerLeft,
        width: containerWidth,
    } = container.getBoundingClientRect();

    const pointer = limiter(x)(containerLeft, containerLeft + containerWidth);

    gsap.to(".select-pointer", {
        x: pointer.value,
        rotate: () => {
            if (pointer.less) return -90;
            if (pointer.more) return 90;
            return 0;
        },
        ease: "elastic.out(1,0.3)",
    });
};

state.on("index", x => render(center(selectItems[x])));

container.addEventListener("scroll", () =>
    render(center(selectItems[state.getState().index])),
);
container.addEventListener("mousewheel", () =>
    render(center(selectItems[state.getState().index])),
);
window.addEventListener("resize", () =>
    render(center(selectItems[state.getState().index])),
);

render(center(selectItems[state.getState().index]));
