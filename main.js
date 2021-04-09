/** @format */

let dragEl = document.querySelector(".specification__drag");
let panel = document.querySelector(".panel.specification");
const { width: panelWidth } = panel.getBoundingClientRect();
document.ondragstart = function () {
    return false;
};
dragEl.onmousedown = e => {
    const moveAt = ev => {
        const newWidth = ev.pageX - dragEl.offsetWidth / 2;
        if (newWidth > panelWidth && newWidth < panelWidth * 2)
            panel.style.width = newWidth + "px";
        // dragEl.style.top = ev.pageY - dragEl.offsetHeight / 2 + "px";
    };
    document.onmousemove = ev => {
        moveAt(ev);
    };
    document.onmouseup = () => {
        document.onmousemove = null;
        dragEl.onmouseup = null;
    };
    moveAt(e);
};
