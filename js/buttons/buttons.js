import { data } from "../data";
import { state } from "../state";
import { $, $$, _ } from "../shorts";
import { gsap } from "gsap";
import { debounce } from "../debounce";
import { limiter } from "../limiter";

const buttonUp = $(".current-image__control.up");
const buttonDown = $(".current-image__control.down");

const clickHandler = (button, delta) => {
    button.addEventListener(
        "click",
        debounce(() => {
            const newState = limiter(state.getState().images + delta)(
                0,
                data[state.getState().index].images.additional.length - 1,
            );
            state.setState({
                images: newState.value,
            });
        }, 500),
    );
};

clickHandler(buttonUp, -1);
clickHandler(buttonDown, 1);
