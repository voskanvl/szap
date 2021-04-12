import "./containers/selectContainer.js";
import "./containers/imagesCarouselContainer";
import "./containers/specificationContainer";
import "./containers/mainImageContainer.js";
import "./containers/descriptionTextContainer.js";
import "./containers/descriptionPrice.js";
import "./containers/descriptionTitle.js";
import "./pointers/selectPointer";
import "./pointers/imagesPointer";
import "./globalShake.js";

let a = document.querySelector(".select-carousel__container");
a.addEventListener("imagesLoaded", () => console.log("imagesLoaded"));

//TODO: сделать начальную инициализацию, что бы нижний указатель сразу вставал на 0
//TODO продолжить с контейнерами и флагами. Они должны самостоятельно меняться в зависимости от состояния стейта
//TODO при ресайзе окна и при скролинге контейнеров нужно отслеживать положение указателей
