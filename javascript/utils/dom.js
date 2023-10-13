//Imports
import { cardList, resultCount } from "../components.js";
import getRecipeCardDom from "../dom/getRecipeCardDom.js";

//Exports
export function filterSetChevron(component, type) {
    component
        .getElementsByClassName("chevron")[0]
        .setAttribute("src", `./images/icon/chevron-${type}.svg`);
}

export function displayResultCount(count) {
    resultCount.innerText = `${count} recette${count > 1 ? "s" : ""}`;
}

export function fillResultList(results) {
    for (let result of results) {
        cardList.appendChild(getRecipeCardDom(result));
    }
}
