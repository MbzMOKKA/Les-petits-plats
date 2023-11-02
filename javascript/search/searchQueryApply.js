//Imports
import { checkIfInfoIsSearched } from "../utils/common.js";

//Exports
export default function searchQueryApply(results, searchQuery) {
    if (searchQuery.length < 3) {
        //The search query isn't applied if it contains less than 3 letters
        return results;
    }
    const validRecipes = [];
    for (let i = 0; i < results.length; i++) {
        const recipe = results[i];
        //Name, description and ingredients are counted in the main search bar
        if (checkIfInfoIsSearched(recipe.name, searchQuery)) {
            validRecipes.push(recipe);
        } else {
            if (checkIfInfoIsSearched(recipe.description, searchQuery)) {
                validRecipes.push(recipe);
            } else {
                for (let ingredient of recipe.ingredients) {
                    if (
                        checkIfInfoIsSearched(
                            ingredient.ingredient,
                            searchQuery
                        )
                    ) {
                        validRecipes.push(recipe);
                        break;
                    }
                }
            }
        }
    }
    return validRecipes;
}
