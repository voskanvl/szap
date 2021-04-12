import { gsap } from "gsap";
export const shake = () => {
    gsap.from([".panel", ".manager"], {
        rotate: 1,
        ease: "elastic.out(1.1,0.1)",
    });
    gsap.from([".title", ".background__leftside"], {
        xPercent: 1,
        ease: "elastic.out(1.1,0.1)",
    });
    gsap.from(".images-carousel__item", {
        xPercent: -100,
        stagger: 0.1,
        ease: "elastic.out(0.5,0.3)",
    });
};
