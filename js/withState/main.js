import "./containers/selectContainer.js";
import "./containers/imagesCarouselContainer";
import "./containers/specificationContainer";
import "./containers/mainImageContainer.js";
import "./containers/descriptionTextContainer.js";
import "./containers/descriptionPrice.js";
import "./containers/descriptionTitle.js";
import "./pointers/selectPointer";
import "./pointers/imagesPointer";
import "./buttons/buttons";
import "./globalShake.js";
// import "./dragEl.js";
import { $ } from "../shorts";
import { gsap } from "gsap";

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
};

//TODO: сделать начальную инициализацию, что бы нижний указатель сразу вставал на 0
//TODO продолжить с контейнерами и флагами. Они должны самостоятельно меняться в зависимости от состояния стейта
//TODO при ресайзе окна и при скролинге контейнеров нужно отслеживать положение указателей
