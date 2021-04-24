import { $ } from "./shorts";
import { managerData } from "./managerData";
import phone from "url:../assets/phone-call.svg";
export const manager = () => {
    const managerHTML = $(".manager>.container");
    const { img, name, contact } = managerData();
    managerHTML.innerHTML = `
    <div class="manager-image__container">
        <div class="manager-image__dummy"></div>
        <img src="${img}" alt="${img}">
    </div>
    <div class="manager-name">${name}</div>
    <div class="manager-contact">
        <img src="${phone}" alt="phone">
        <a href="tel:${contact.replace(/[(|)|-]/g, "")}">${contact}</a>
    </div>`;
};
