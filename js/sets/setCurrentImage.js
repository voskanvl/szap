import { $, _ } from "../shorts.js";
import { gsap } from "gsap";
import { data } from "../data.js";
export const setCurrentImage = idx => x => {
    gsap.from(".current-image>img", {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
    });
    $(".current-image>img").setAttribute("src", data[idx].images.additional[x]);
};
