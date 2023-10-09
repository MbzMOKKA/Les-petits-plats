//Imports
import recipes from "../data/recipes.js";
import displayResults from "../display/displayResults.js";
import searchQueryApply from "./searchQueryApply.js";

//Exports
export default function refreshResults(searchQuery) {
    let results = JSON.parse(JSON.stringify(recipes));
    //Main search querry
    results = searchQueryApply(results, searchQuery);
    //Filters
    /* TODO */
    displayResults(results);
}
