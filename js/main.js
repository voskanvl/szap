import "./containers/selectContainer";
import "./containers/imagesCarouselContainer";
import "./containers/specificationContainer";
import "./containers/mainImageContainer";
import "./containers/descriptionTextContainer";
import "./containers/descriptionPrice";
import "./containers/descriptionTitle";
import "./pointers/selectPointer";
import "./pointers/imagesPointer";
import "./buttons/buttons";
import "./globalShake";
import { gsap } from "gsap";
import { manager } from "./manager";
import { specificationInit } from "./specificationInit.js";

onload = () => {
    specificationInit();
    manager();
    window.utils = gsap.utils;
};
