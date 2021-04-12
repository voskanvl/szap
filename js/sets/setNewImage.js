import { gsap } from "gsap";
import imagesPointer from "../imagesPointer";
import { setCurrentImage } from "./setCurrentImage.js";
export const setNewImage = currentIndex => x => {
    setCurrentImage(currentIndex)(x);
    imagesPointer(x);
    gsap.from(".main-panel", { x: 5, ease: "elastic.out(1.1,0.1)" });
};
