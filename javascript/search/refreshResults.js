//Imports
import recipes from "../data/recipes.js";
import displayResults from "../dom/displayResults.js";
import { state } from "../index.js";
import { refreshFilterOptionLists } from "../utils/filters.js";
import filtersApply from "./filtersApply.js";
import searchQueryApply from "./searchQueryApply.js";

//Exports
export default function refreshResults() {
    const searchQuery = state.searchQuery;
    //Main search querry
    state.results = searchQueryApply(recipes, searchQuery);
    //Filters
    state.results = filtersApply(state);
    //Refresh card container's DOM
    displayResults(state.results);
    //Refresh filter button expansion if opened
    if (state.filterSelectedId != null) {
        refreshFilterOptionLists("");
    }
}
