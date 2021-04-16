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
// import "./dragEl.js";
import { $ } from "./shorts";
import { gsap } from "gsap";
import { managerData } from "./managerData";

onload = () => {
    const specification__text = $(".specification__text");
    const { width } = specification__text.getBoundingClientRect();
    gsap.timeline()
        .to(specification__text, {
            columnCount: ((width / 360) | 0) + 1,
        })
        .to(specification__text, {
            opacity: 1,
        });
    //=========== MANAGER=============
    const managerHTML = $(".manager>.container");
    const { img, name, contact } = managerData();
    managerHTML.innerHTML = `
    <div class="manager-image__container">
        <div class="manager-image__dummy"></div>
        <img src="${img}" alt="${img}">
    </div>
    <div class="manager-name">${name}</div>
    <div class="manager-contact">
        <img src="/phone-call.46916504.svg">
        <div>${contact}</div>
    </div>`;
};

//TODO: сделать начальную инициализацию, что бы нижний указатель сразу вставал на 0
//TODO продолжить с контейнерами и флагами. Они должны самостоятельно меняться в зависимости от состояния стейта
//TODO при ресайзе окна и при скролинге контейнеров нужно отслеживать положение указателей
