//Imports
import {
    buttonFilterAppliance,
    buttonFilterIngredient,
    buttonFilterUstensil,
    mainSearchBar,
} from "./utils/components.js";
import refreshResults from "./search/refreshResults.js";
import { filterAddClickListener } from "./utils/filters.js";

//Initialisation
export const state = {
    searchQuery: "",
    filterSearchQuery: "",
    filterSelectedId: null,
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
    refreshResults();
});

//Adding an event listener to the filter buttons to expand or contract on click
filterAddClickListener(buttonFilterIngredient, state);
filterAddClickListener(buttonFilterAppliance, state);
filterAddClickListener(buttonFilterUstensil, state);

//Getting the initial results
refreshResults();
