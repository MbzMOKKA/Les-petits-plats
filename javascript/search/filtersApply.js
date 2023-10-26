//Exports
export default function filtersApply(state) {
    const mainSearchResults = JSON.parse(JSON.stringify(state.results));
    const filterIngredients = state.filters.ingredients;
    const filterAppliances = state.filters.appliances;
    const filterUstensils = state.filters.ustensils;
    return mainSearchResults.filter((recipe) => {
        //If the recipe doesn't contain every ingredient selected tag, it's removed from the results
        for (let requiredIngredient of filterIngredients) {
            let included = false;
            for (let recipeIngredient of recipe.ingredients) {
                if (recipeIngredient.ingredient === requiredIngredient) {
                    included = true;
                }
            }
            if (included === false) {
                return false;
            }
        }
        //If the recipe isn't using the appliance selected tag, it's removed from the results
        if (
            filterAppliances.length > 0 &&
            filterAppliances.includes(recipe.appliance) === false
        ) {
            return false;
        }
        //If the recipe doesn't contain every ustensil selected tag, it's removed from the results
        for (let requiredUstensils of filterUstensils) {
            if (recipe.ustensils.includes(requiredUstensils) === false) {
                return false;
            }
        }
        return true;
    });
}
