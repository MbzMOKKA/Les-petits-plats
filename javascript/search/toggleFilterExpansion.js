//Imports
import { filters } from "../components.js";
import getFilterExpansionDom from "../dom/getFilterExpansionDom.js";
import { filterSetChevron } from "../utils/dom.js";
import { filterIsExpanded, filterSetExpanded } from "../utils/filters.js";

//Exports
export default function toggleFilterExpansion(clickedComponent, id, state) {
    for (let filter of filters) {
        if (filter == clickedComponent) {
            filterSetExpanded(filter, !filterIsExpanded(filter));
        } else {
            filterSetExpanded(filter, false);
        }
        if (filterIsExpanded(filter)) {
            filterSetChevron(filter, "up");
            filter.appendChild(getFilterExpansionDom(id, state));
        } else {
            filterSetChevron(filter, "down");
            const expansion = filter.getElementsByTagName("section")[0];
            if (expansion) {
                filter.removeChild(expansion);
            }
        }
    }
}
