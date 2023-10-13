//Imports
import { cardList, noResultMessage } from "../components.js";
import { emptyList } from "../utils/common.js";
import { fillResultList, displayResultCount } from "../utils/dom.js";

//Exports
export default function displayResults(results) {
    emptyList(cardList);
    fillResultList(results);
    noResultMessage.setAttribute("visible", results.length === 0);
    displayResultCount(results.length);
}
