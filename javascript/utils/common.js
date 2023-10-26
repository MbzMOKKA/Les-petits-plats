//Exports
export function emptyDomList(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

export function checkIfInfoIsSearched(infoValue, searchQuery) {
    return infoValue.toLowerCase().includes(searchQuery.toLowerCase());
}
