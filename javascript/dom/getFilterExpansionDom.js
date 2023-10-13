//Imports
import { emptyList } from "../utils/common.js";
import {
    addIngredientsName,
    addAppliancesName,
    addUstensilsName,
    isIngredientSelected,
    isApplianceSelected,
    isUstensilSelected,
    filtersSearchQueryApply,
} from "../utils/filters.js";

//Imports
function generateListContent(
    filterSearchQuery,
    id,
    state,
    selectedList,
    unselectedList
) {
    //finding the right data
    let addFiltersName;
    let checkIfSelected;
    switch (id) {
        case "filter-ingredient":
            addFiltersName = addIngredientsName;
            checkIfSelected = isIngredientSelected;
            break;
        case "filter-appliance":
            addFiltersName = addAppliancesName;
            checkIfSelected = isApplianceSelected;
            break;
        case "filter-ustensil":
            addFiltersName = addUstensilsName;
            checkIfSelected = isUstensilSelected;
            break;
    }
    const filtersNameSet = new Set();
    for (let result of state.results) {
        addFiltersName(filtersNameSet, result);
    }
    //removing the unsearched filters
    const filtersName = filtersSearchQueryApply(
        filtersNameSet,
        filterSearchQuery
    );
    //adding the filters to the dom
    for (let filterName of filtersName) {
        const listElement = document.createElement("li");
        if (checkIfSelected(state.filters, filterName)) {
            //selected filters
            selectedList.appendChild(listElement);
            listElement.setAttribute(
                "class",
                "flex justify-between px-3 py-1 bg-brand-yellow hover:text-brand-yellow hover:bg-brand-black hover:cursor-pointer"
            );
            listElement.innerHTML = `<p class="text-pascalcase font-bold">${filterName}</p><img src="./images/icon/remove.svg" alt="Retirer" class="ml-2"/>`;
        } else {
            //unselected filters
            unselectedList.appendChild(listElement);
            listElement.setAttribute(
                "class",
                "text-pascalcase px-3 py-1 hover:bg-brand-yellow hover:cursor-pointer"
            );
            listElement.innerHTML = filterName;
        }
    }
}

//Exports
export default function getFilterExpansionDom(id, state) {
    const expansion = document.createElement("section");
    expansion.setAttribute("id", "filter-expansion");
    expansion.setAttribute(
        "class",
        "z-10 absolute bg-white top-full left-0 right-0 rounded-b-xl"
    );

    //Search
    const searchContainer = document.createElement("div");
    expansion.appendChild(searchContainer);
    searchContainer.setAttribute(
        "class",
        "mx-3 mb-2 p-1 flex flex-row rounded-sm border border-ltgray"
    );

    const searchInput = document.createElement("input");
    searchContainer.appendChild(searchInput);
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("name", "filter-search");
    searchInput.setAttribute(
        "class",
        "w-full text-brand-dkgray grow p-1 text-sm mr-1"
    );
    searchInput.addEventListener("input", (e) => {
        emptyList(selectedList);
        emptyList(unselectedList);
        generateListContent(
            e.target.value,
            id,
            state,
            selectedList,
            unselectedList
        );
    });

    const searchIcon = document.createElement("img");
    searchContainer.appendChild(searchIcon);
    searchIcon.setAttribute("src", "./images/icon/search-gray.svg");
    searchIcon.setAttribute("alt", "Chercher");
    searchIcon.setAttribute("class", "m-auto w-3.5 h-3.5 mr-1");

    //Lists
    const listsContainer = document.createElement("div");
    expansion.appendChild(listsContainer);
    listsContainer.setAttribute("class", "max-h-60 overflow-y-scroll pb-2");

    const selectedList = document.createElement("ul");
    listsContainer.appendChild(selectedList);
    selectedList.setAttribute("class", "selected-options mt-3");

    const unselectedList = document.createElement("ul");
    listsContainer.appendChild(unselectedList);
    unselectedList.setAttribute("class", "unselected-options mt-3");

    generateListContent("", id, state, selectedList, unselectedList);

    return expansion;
}
