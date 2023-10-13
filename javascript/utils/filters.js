//Imports
import toggleFilterExpansion from "../search/toggleFilterExpansion.js";
import { checkIfInfoIsSearched } from "./common.js";

//Exports
export function addEventListenerToFilter(button, state) {
    const id = button.getAttribute("id");
    button.addEventListener("click", () => {
        toggleFilterExpansion(button.parentNode, id, state);
    });
    for (let child of button.childNodes) {
        child.addEventListener("click", (e) => {
            toggleFilterExpansion(button.parentNode, id, state);
            e.stopPropagation();
        });
    }
}

export function filterIsExpanded(component) {
    return component.getAttribute("expanded") === "false" ? false : true;
}

export function filterSetExpanded(component, value) {
    component.setAttribute("expanded", value);
}

export function addIngredientsName(filtersName, result) {
    for (let ingredient of result.ingredients) {
        filtersName.add(ingredient.ingredient);
    }
}

export function addAppliancesName(filtersName, result) {
    filtersName.add(result.appliance);
}

export function addUstensilsName(filtersName, result) {
    for (let ustensil of result.ustensils) {
        filtersName.add(ustensil);
    }
}

export function isIngredientSelected(filters, filterName) {
    return filters.ingredients.includes(filterName);
}

export function isApplianceSelected(filters, filterName) {
    return filters.appliances.includes(filterName);
}

export function isUstensilSelected(filters, filterName) {
    return filters.ustensils.includes(filterName);
}

export function filtersSearchQueryApply(filtersNameSet, filterSearchQuery) {
    return Array.from(filtersNameSet).filter((filterName) => {
        return checkIfInfoIsSearched(filterName, filterSearchQuery);
    });
}
