//Imports
import {
    buttonFilterAppliance,
    buttonFilterIngredient,
    buttonFilterUstensil,
    mainSearchBar,
} from "./components.js";
import refreshResults from "./search/refreshResults.js";
import { addEventListenerToFilter } from "./utils/filters.js";

//Initialisation
const state = {
    searchQuery: "",
    filters: {
        ingredients: [],
        appliances: [],
        ustensils: [],
    },
    results: [],
};

//Adding an event listener to the main search bar so the results are refreshed when its value changes
mainSearchBar.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    refreshResults(state);
});

//Adding an event listener to the filter buttons to expand or contract on click
addEventListenerToFilter(buttonFilterIngredient, state);
addEventListenerToFilter(buttonFilterAppliance, state);
addEventListenerToFilter(buttonFilterUstensil, state);

//Getting the initial results
refreshResults(state);
