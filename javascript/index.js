//Imports
import { cardList } from "./components.js";
import recipes from "./data/recipes.js";
import displayResultCount from "./display/displayResultCount.js";
import getRecipeCardDom from "./display/getRecipeCardDom.js";

//Display
for (let recipe of recipes) {
    cardList.appendChild(getRecipeCardDom(recipe));
}
displayResultCount(recipes.length);
