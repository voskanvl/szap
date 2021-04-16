import { gsap } from "gsap";

export const animation = (element, option = {}) =>
    gsap.from(element, {
        scale: 1.05,
        yPercent: -10,
        opacity: 0,
        ease: "elastic.out(1.2,0.4)",
        duration: 0.2,
        ...option,
    });
