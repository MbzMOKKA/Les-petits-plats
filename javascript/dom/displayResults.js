//Imports
import { cardList, noResultMessage } from "../components.js";
import { state } from "../index.js";
import { emptyDomList } from "../utils/common.js";
import { fillResultList, displayResultCount } from "../utils/dom.js";

//Exports
export default function displayResults(results) {
    emptyDomList(cardList);
    fillResultList(results);
    noResultMessage.setAttribute("visible", results.length === 0);
    noResultMessage.innerText = `Aucune recette ne contient ‘${state.searchQuery}’ vous pouvez chercher «
    tarte aux pommes », « poisson », etc.`;
    displayResultCount(results.length);
}
