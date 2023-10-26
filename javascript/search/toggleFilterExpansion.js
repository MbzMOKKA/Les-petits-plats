//Imports
import { filters } from "../components.js";
import generateFilterOptionListsContent from "../dom/generateFilterOptionListsContent.js";
import getFilterExpansionDom from "../dom/getFilterExpansionDom.js";
import { state } from "../index.js";
import { filterSetChevron } from "../utils/dom.js";
import { filterIsExpanded, filterSetExpanded } from "../utils/filters.js";

//Exports
export default function toggleFilterExpansion(clickedComponent, id) {
    for (let filter of filters) {
        const isTheFilterClicked = filter == clickedComponent;
        if (isTheFilterClicked) {
            filterSetExpanded(filter, !filterIsExpanded(filter));
        } else {
            filterSetExpanded(filter, false);
        }
        if (filterIsExpanded(filter)) {
            filterSetChevron(filter, "up");
            state.filterSelectedId = id;
            filter.appendChild(getFilterExpansionDom());
            generateFilterOptionListsContent("");
        } else {
            filterSetChevron(filter, "down");
            const expansion = filter.getElementsByTagName("section")[0];
            if (expansion) {
                filter.removeChild(expansion);
            }
            if (isTheFilterClicked) {
                state.filterSelectedId = null;
            }
        }
    }
}
