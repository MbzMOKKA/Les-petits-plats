//Imports
import { state } from "../index.js";
import { filterOptionLists } from "../utils/components.js";
import {
    addIngredientsName,
    addAppliancesName,
    addUstensilsName,
    filtersSearchQueryApply,
    removeFilter,
    addFilter,
} from "../utils/filters.js";

//Exports
export default function generateFilterOptionListsContent() {
    const { selectedList, unselectedList } = filterOptionLists();
    //finding the right data
    let addFiltersName;
    let filtersSelected;
    switch (state.filterSelectedId) {
        case "filter-ingredient":
            addFiltersName = addIngredientsName;
            filtersSelected = state.filters.ingredients;
            break;
        case "filter-appliance":
            addFiltersName = addAppliancesName;
            filtersSelected = state.filters.appliances;
            break;
        case "filter-ustensil":
            addFiltersName = addUstensilsName;
            filtersSelected = state.filters.ustensils;
            break;
    }
    const filtersNameSet = new Set();
    for (let result of state.results) {
        addFiltersName(filtersNameSet, result);
    }

    //removing the unsearched filters
    const filtersName = filtersSearchQueryApply(filtersNameSet);

    //adding the filters to the dom
    for (let filterName of filtersName) {
        const listElement = document.createElement("li");
        if (filtersSelected.includes(filterName)) {
            //selected filters
            selectedList.appendChild(listElement);
            listElement.setAttribute(
                "class",
                "flex justify-between px-3 py-1 bg-brand-yellow hover:text-brand-yellow hover:bg-brand-black hover:cursor-pointer"
            );
            listElement.innerHTML = `<p class="text-pascalcase font-bold">${filterName}</p><img src="./images/icon/remove.svg" alt="Retirer" class="ml-2"/>`;
            listElement.addEventListener("click", () => {
                removeFilter(filtersSelected, filterName);
            });
        } else {
            //unselected filters
            unselectedList.appendChild(listElement);
            listElement.setAttribute(
                "class",
                "text-pascalcase px-3 py-1 hover:bg-brand-yellow hover:cursor-pointer"
            );
            listElement.innerHTML = filterName;
            listElement.addEventListener("click", () => {
                addFilter(filtersSelected, filterName);
            });
        }
    }
}
