//Creates a DOM element from only its HTML
export function createElement(HTML) {
    const element = document.createElement("div");
    element.innerHTML = HTML;
    return element.firstChild;
}

//Finds every instances of the component and renders them (taking into account the props)
export function renderComponent(name, renderFunction) {
    const componentSlots = document.getElementsByClassName(name);
    while (componentSlots.length > 0) {
        const componentSlot = componentSlots[0];
        const parent = componentSlot.parentNode;
        const componentProps = componentSlot.getAttribute("data-props");
        const componentData = renderFunction(JSON.parse(componentProps));
        const componentDom = createElement(componentData);
        parent.replaceChild(componentDom, componentSlot);
    }
}
