//Imports
import recipes from "../data/recipes.js";
import displayResults from "../dom/displayResults.js";
import searchQueryApply from "./searchQueryApply.js";

//Exports
export default function refreshResults(state) {
    const searchQuery = state.searchQuery;
    //Main search querry
    state.results = searchQueryApply(recipes, searchQuery);
    //Filters
    /* TODO */
    displayResults(state.results);
}
