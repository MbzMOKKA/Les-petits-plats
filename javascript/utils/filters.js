//Imports
import { filtersApplied, filterOptionLists } from "../utils/components.js";
import generateFilterOptionListsContent from "../dom/generateFilterOptionListsContent.js";
import getFilterAppliedDom from "../dom/getFilterAppliedDom.js";
import { state } from "../index.js";
import refreshResults from "../search/refreshResults.js";
import toggleFilterExpansion from "../search/toggleFilterExpansion.js";
import { checkIfInfoIsSearched, emptyDomList } from "./common.js";

//Exports
export function filterAddClickListener(button) {
    const id = button.getAttribute("id");
    button.addEventListener("click", () => {
        toggleFilterExpansion(button.parentNode, id);
    });
    for (let child of button.childNodes) {
        child.addEventListener("click", (e) => {
            toggleFilterExpansion(button.parentNode, id);
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

export function filtersSearchQueryApply(filtersNameSet) {
    const filterSearchQuery = state.filterSearchQuery;
    return Array.from(filtersNameSet).filter((filterName) => {
        return checkIfInfoIsSearched(filterName, filterSearchQuery);
    });
}

export function addFilter(filtersSelected, filterName) {
    filtersSelected.push(filterName);
    const tagDom = getFilterAppliedDom(filtersSelected, filterName);
    filtersApplied.appendChild(tagDom);
    refreshResults();
    refreshFilterOptionLists();
}

export function removeFilter(filtersSelected, filterName) {
    const index = filtersSelected.findIndex((elem) => elem === filterName);
    filtersSelected.splice(index, 1);
    for (let filterApplied of filtersApplied.childNodes) {
        if (filterApplied.getAttribute("value") === filterName) {
            filtersApplied.removeChild(filterApplied);
            break;
        }
    }
    refreshResults();
    refreshFilterOptionLists();
}

export function refreshFilterOptionLists() {
    const { selectedList, unselectedList } = filterOptionLists();
    if (state.filterSelectedId == null) {
        //no need to continue if the button expansion is closed
        return;
    }
    emptyDomList(selectedList);
    emptyDomList(unselectedList);
    generateFilterOptionListsContent();
}
