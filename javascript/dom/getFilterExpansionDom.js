//Imports
import { state } from "../index.js";
import { refreshFilterOptionLists } from "../utils/filters.js";

//Exports
export default function getFilterExpansionDom() {
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
        state.filterSearchQuery = e.target.value;
        refreshFilterOptionLists();
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
    selectedList.setAttribute("id", "filters-selected");

    const unselectedList = document.createElement("ul");
    listsContainer.appendChild(unselectedList);
    unselectedList.setAttribute("class", "unselected-options mt-3");
    unselectedList.setAttribute("id", "filters-unselected");

    return expansion;
}
