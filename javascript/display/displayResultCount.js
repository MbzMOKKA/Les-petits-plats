//Imports
import { resultCount } from "../components.js";

//Exports
export default function displayResultCount(count) {
    resultCount.innerText = `${count} recette${count > 1 ? "s" : ""}`;
}
