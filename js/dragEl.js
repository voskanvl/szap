/** @format */
import { gsap } from "gsap";

let dragEl = document.querySelector(".specification__drag");
let panel = document.querySelector(".panel.specification");
let { width: panelWidth } = panel.getBoundingClientRect();
document.ondragstart = function () {
    return false;
};

const moveAt = ev => {
    const newWidth = ev.pageX - dragEl.offsetWidth / 2;
    if (newWidth > panelWidth && newWidth < panelWidth * 2)
        gsap.to(panel, { width: newWidth + 8, ease: "slow(0.9,0.7,false)" });
    // panel.style.width = newWidth + 8 + "px";
    // dragEl.style.top = ev.pageY - dragEl.offsetHeight / 2 + "px";
};
let downed = false;
let panelEnd = false;

dragEl.addEventListener("mousedown", () => {
    downed = true;
});
document.addEventListener("mouseup", () => {
    downed = false;
});
document.addEventListener("mousemove", e => {
    if (downed) {
        moveAt(e);
    }
});
dragEl.addEventListener("dblclick", () => {
    panelEnd
        ? gsap.to(panel, { width: panelWidth, ease: "bounce.out" })
        : gsap.to(panel, {
              width: panelWidth * 2,
              ease: "bounce.out",
          });
    panelEnd = !panelEnd;
});
onresize = () => (panelWidth = panel.getBoundingClientRect().width);
