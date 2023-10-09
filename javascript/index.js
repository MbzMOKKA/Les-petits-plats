//Imports
import { mainSearchBar } from "./components.js";
import refreshResults from "./search/refreshResults.js";

//Initialisation
let searchQuery = "";

//Adding an event listener to the main search bar so the results are refreshed when its value changes
mainSearchBar.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    refreshResults(searchQuery);
});

//Getting the initial results
refreshResults(searchQuery);
