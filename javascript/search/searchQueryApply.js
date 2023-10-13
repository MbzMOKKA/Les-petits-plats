//Imports
import { checkIfInfoIsSearched } from "../utils/common.js";

//Exports
export default function searchQueryApply(results, searchQuery) {
    return searchQuery.length < 3 //The search query isn't applied if it contains less than 3 letters
        ? results
        : results.filter((recipe) => {
              //Name, description and ingredients are counted in the main search bar
              if (checkIfInfoIsSearched(recipe.name, searchQuery)) {
                  return true;
              }
              if (checkIfInfoIsSearched(recipe.description, searchQuery)) {
                  return true;
              }
              for (let ingredient of recipe.ingredients) {
                  if (
                      checkIfInfoIsSearched(ingredient.ingredient, searchQuery)
                  ) {
                      return true;
                  }
              }
              return false;
          });
}
