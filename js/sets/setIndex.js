import { selectPointer } from "./selectPointer";
import { setSpecification } from "./setSpecification";
import { setName } from "./setName";
import imagesPointer from "../imagesPointer";
import { debounce } from "../debounce.js";
import { shake } from "../shake.js";
import { setDescription } from "./setDescription.js";
import { setPrice } from "./setPrice.js";
import { setCurrentImage } from "./setCurrentImage.js";
import { createNewImagesItems } from "./createNewImagesItems.js";

let currentIndex = 0;

const setIndex = x => {
    currentIndex = x;
    selectPointer(x);
    imagesPointer(0);
    setSpecification(x);
    setName(x);
    setDescription(x);
    setCurrentImage(x)(0);
    createNewImagesItems(x);
    setPrice(x);
    shake();
};

export const getCurrentIndex = () => currentIndex;
export default debounce(setIndex, 1000);
