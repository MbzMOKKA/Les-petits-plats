//Imports
import componentTypes from "./components/index.js";

//Renders every component
for (var i = 0; i < componentTypes.length; i++) {
    componentTypes[i]();
}

let filterOpened = -1;
