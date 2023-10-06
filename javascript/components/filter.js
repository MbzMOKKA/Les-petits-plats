//Imports
import { renderComponent } from "../componentMaker.js";

//Component of a filter
export default function Filter() {
    renderComponent("componentTest", ({ name }) => {
        return `<div class="flex flex-row items-center p-4 mr-16 rounded-xl bg-white hover:cursor-pointer"><p class="text-base mr-14">${name}</p><img src="./images/icon/chevron-down.svg" alt="Chevron" /></div>`;
    });
}
