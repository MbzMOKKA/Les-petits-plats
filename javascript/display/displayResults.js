//Imports
import { resultCount, cardList, noResultMessage } from "../components.js";
import getRecipeCardDom from "./getRecipeCardDom.js";

//Util
function emptyResultList() {
    while (cardList.firstChild) {
        cardList.removeChild(cardList.firstChild);
    }
}

function fillResultList(results) {
    for (let result of results) {
        cardList.appendChild(getRecipeCardDom(result));
    }
}

function displayResultCount(count) {
    resultCount.innerText = `${count} recette${count > 1 ? "s" : ""}`;
}

//Exports
export default function displayResults(results) {
    emptyResultList();
    fillResultList(results);
    noResultMessage.setAttribute("visible", results.length === 0);
    displayResultCount(results.length);
}
