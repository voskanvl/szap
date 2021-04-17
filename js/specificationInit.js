import { $ } from "./shorts";
import { gsap } from "gsap";

export const specificationInit = () => {
    const specification__text = $(".specification__text");
    const { width } = specification__text.getBoundingClientRect();
    gsap.timeline()
        .to(specification__text, {
            columnCount: ((width / 360) | 0) + 1,
        })
        .to(specification__text, {
            opacity: 1,
        });
};
