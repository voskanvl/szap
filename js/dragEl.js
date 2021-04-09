/** @format */

let dragEl = document.querySelector(".specification__drag");
let panel = document.querySelector(".panel.specification");
let { width: panelWidth } = panel.getBoundingClientRect();
document.ondragstart = function () {
    return false;
};

const moveAt = ev => {
    const newWidth = ev.pageX - dragEl.offsetWidth / 2;
    if (newWidth > panelWidth && newWidth < panelWidth * 2)
        panel.style.width = newWidth + 8 + "px";
    // dragEl.style.top = ev.pageY - dragEl.offsetHeight / 2 + "px";
};
let downed = false;
let panelEnd = false;

dragEl.addEventListener("mousedown", () => {
    downed = true;
    console.log(downed);
});
document.addEventListener("mouseup", () => {
    downed = false;
    console.log(downed);
});
document.addEventListener("mousemove", e => {
    if (downed) {
        moveAt(e);
        console.log(e);
    }
});
dragEl.addEventListener("dblclick", () => {
    console.log("doubleclick");
    panelEnd
        ? (panel.style.width = panelWidth + "px")
        : (panel.style.width = panelWidth * 2 + "px");
    panelEnd = !panelEnd;
});
onresize = () => (panelWidth = panel.getBoundingClientRect().width);
