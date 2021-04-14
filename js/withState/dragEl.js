/** @format */
import { $, $$ } from "../shorts";
import { gsap } from "gsap";
import { limiter } from "../limiter.js";

let dragEl = $(".specification__drag");
let panel = $(".panel.specification");
let specificationTitle = $(".specification__title");
let { width: startPanelWidth } = panel.getBoundingClientRect();
document.ondragstart = function () {
    return false;
};

const moveAt = ev => {
    const newWidth = limiter(ev.pageX - dragEl.offsetWidth / 2)(
        startPanelWidth,
        innerWidth,
    );
    panel.style.width = newWidth.value + "px";
    // gsap.to(panel, { width: newWidth });
};
let downed = false;
let panelEnd = false;

const listeners = {
    down: e => {
        e.preventDefault();
        downed = true;
    },
    up: e => {
        e.preventDefault();
        downed = false;
    },
    move: e => {
        e.preventDefault();
        if (downed) {
            moveAt(e);
        }
    },
};

dragEl.addEventListener("mousedown", listeners.down);
dragEl.addEventListener("mousedown", listeners.down);
specificationTitle.addEventListener("pointerdown", listeners.down);
specificationTitle.addEventListener("pointerdown", listeners.down);
document.addEventListener("mouseup", listeners.up);
document.addEventListener("pointerup", listeners.up);
document.addEventListener("mousemove", listeners.move);
document.addEventListener("pointermove", listeners.move);

dragEl.addEventListener("dblclick", () => {
    panelEnd
        ? gsap.to(panel, { width: startPanelWidth, ease: "bounce.out" })
        : gsap.to(panel, {
              width: innerWidth,
              ease: "bounce.out",
          });
    panelEnd = !panelEnd;
});
onresize = () => (panelWidth = panel.getBoundingClientRect().width);
