//Imports
import { removeFilter } from "../utils/filters.js";

//Exports
export default function getFilterAppliedDom(filtersSelected, filterName) {
    const filter = document.createElement("li");
    filter.setAttribute("class", "mr-6");
    filter.setAttribute("value", filterName);
    filter.addEventListener("click", () => {
        removeFilter(filtersSelected, filterName);
    });

    const button = document.createElement("button");
    filter.appendChild(button);
    button.setAttribute(
        "class",
        "flex flex-row justify-between items-center bg-brand-yellow rounded-xl p-4 hover:shadow-xl"
    );

    const text = document.createElement("p");
    button.appendChild(text);
    text.setAttribute("class", "text-pascalcase text-sm");
    text.innerText = filterName;

    const removeIcon = document.createElement("img");
    button.appendChild(removeIcon);
    removeIcon.setAttribute("src", "./images/icon/cross.svg");
    removeIcon.setAttribute("alt", "Icône");
    removeIcon.setAttribute("class", "ml-8");

    return filter;
}
