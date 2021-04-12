import { gsap } from "gsap";
import { $ } from "../shorts.js";
import { data } from "../data.js";

const specification = $(".specification__text");
export const setSpecification = x => {
    gsap.from(specification, {
        yPercent: 100,
        ease: "elastic.out(0.5,0.3)",
        duration: 1.5,
    });
    specification.innerText = data[x].specification;
};
