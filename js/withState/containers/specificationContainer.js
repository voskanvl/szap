import { data } from "../../data";
import { state } from "../../state";
import { $, _ } from "../../shorts.js";
import { animation } from "../animationConfig";
import { limiter } from "../../limiter.js";
import { gsap } from "gsap";

const specification = $(".specification__text");
let dragEl = $(".specification__drag");
let panel = $(".panel.specification");
let specificationTitle = $(".specification__title");
let specificationText = $(".specification__text");
let { width: startPanelWidth } = panel.getBoundingClientRect();

const render = x => {
    specification.innerText = data[x].specification;
    animation(specification);
};

state.on("index", render);

render(state.getState().index);

let percentPanel = panel.getBoundingClientRect().width / innerWidth;

document.ondragstart = function () {
    return false;
};

const moveAt = ev => {
    const newWidth = limiter(ev.pageX - dragEl.offsetWidth / 2)(
        startPanelWidth,
        innerWidth,
    );
    panel.style.width = newWidth.value + "px";
    gsap.to(specificationText, {
        columnCount: () => ((newWidth.value / 360) | 0) + 1,
    });
    // specificationText.style.columns = ((newWidth.value / 360) | 0) + 1;
    percentPanel = newWidth.value / innerWidth;
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

const handlerDblclick = e => {
    panelEnd
        ? gsap.to(panel, { width: startPanelWidth, ease: "bounce.out" })
        : gsap.to(panel, {
              width: innerWidth,
              ease: "bounce.out",
          });
    panelEnd = !panelEnd;
};

dragEl.addEventListener("dblclick", handlerDblclick);
specificationTitle.addEventListener("dblclick", handlerDblclick);

addEventListener("resize", () => {
    const { width: newWidth } = panel.getBoundingClientRect();
    if (newWidth !== (startPanelWidth | 0)) {
        gsap.to(panel, {
            width: startPanelWidth,
            ease: "bounce.out",
        });
        gsap.timeline()
            .to(specificationText, { opacity: 0 })
            .to(specificationText, {
                columnCount: () => ((startPanelWidth / 360) | 0) + 1,
            })
            .to(specificationText, { opacity: 1 });
    }
});

window.matchMedia("(max-width: 420px)").addListener(() => _("кряк"));
window
    .matchMedia("(max-width: 1024px) and (min-width: 421px)")
    .addListener(() => _("кряк 2"));
