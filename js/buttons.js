/** @format */
import { $ } from "./shorts.js";
import imagesPointer from "./imagesPointer";
import { gsap } from "gsap";

export const addAnimationToControl = control => {
    control.addEventListener("mouseenter", () =>
        gsap.from(control, { scale: 1.1 }),
    );
    control.addEventListener("mouseleave", () =>
        gsap.to(control, { scale: 1 }),
    );
};

export const addListenerToControl = name => {
    const control = $(`.control.${name}`);
    control.addEventListener("click", () => imagesPointer(name));
    addAnimationToControl(control);
};

addListenerToControl("up");
addListenerToControl("down");
