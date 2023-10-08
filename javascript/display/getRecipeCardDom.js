//Exports
export default function getRecipeCardDom(recipe) {
    const card = document.createElement("li");
    card.setAttribute("class", "shadow-card rounded-[20px] overflow-hidden");

    //Thumbnail
    const thumbnailContainer = document.createElement("div");
    card.appendChild(thumbnailContainer);
    thumbnailContainer.setAttribute("class", "relative");

    const thumbnail = document.createElement("img");
    thumbnailContainer.appendChild(thumbnail);
    thumbnail.setAttribute("src", `./images/thumbnail/${recipe.image}`);
    thumbnail.setAttribute("alt", recipe.name);
    thumbnail.setAttribute("loading", "lazy");
    thumbnail.setAttribute("class", "w-full h-[253px] object-cover");

    const timeToCook = document.createElement("p");
    thumbnailContainer.appendChild(timeToCook);
    timeToCook.setAttribute(
        "class",
        "absolute right-[22px] top-[21px] bg-brand-yellow rounded-full px-[15px] py-[5px] text-xs text-brand-black"
    );
    timeToCook.innerText = `${recipe.time}min`;

    //Body
    const bodyContainer = document.createElement("div");
    card.appendChild(bodyContainer);
    bodyContainer.setAttribute("class", "pt-[32px] px-[25px] pb-[60px]");

    const name = document.createElement("h2");
    bodyContainer.appendChild(name);
    name.setAttribute("class", "text-lg font-anton mb-[28px]");
    name.innerText = recipe.name;

    //Description
    const description = document.createElement("div");
    bodyContainer.appendChild(description);
    description.setAttribute("class", "mb-[35px]");

    const descriptionCategoryName = document.createElement("h3");
    description.appendChild(descriptionCategoryName);
    descriptionCategoryName.setAttribute(
        "class",
        "mb-[15px] text-brand-dkgray text-xs uppercase font-bold tracking-[1.08px]"
    );
    descriptionCategoryName.innerText = "Recette";

    const descriptionContent = document.createElement("p");
    description.appendChild(descriptionContent);
    descriptionContent.setAttribute("class", "text-brand-black text-sm");
    descriptionContent.innerText = recipe.description;

    //Ingredients
    const ingredients = document.createElement("div");
    bodyContainer.appendChild(ingredients);

    const ingredientsCategoryName = document.createElement("h3");
    ingredients.appendChild(ingredientsCategoryName);
    ingredientsCategoryName.setAttribute(
        "class",
        "mb-[15px] text-brand-dkgray text-xs uppercase font-bold tracking-[1.08px]"
    );
    ingredientsCategoryName.innerText = "Ingrédients";

    const ingredientsList = document.createElement("ul");
    ingredients.appendChild(ingredientsList);
    ingredientsList.setAttribute(
        "class",
        "grid justify-between grid-cols-2 gap-x-2.5 gap-y-5"
    );

    for (let i of recipe.ingredients) {
        const container = document.createElement("li");
        ingredientsList.appendChild(container);
        container.setAttribute("class", "flex flex-col");

        const name = document.createElement("h4");
        container.appendChild(name);
        name.setAttribute("class", "text-sm text-brand-black font-medium");
        name.innerHTML = i.ingredient;

        const value = document.createElement("p");
        container.appendChild(value);
        value.setAttribute("class", "text-sm text-brand-dkgray");
        value.innerHTML = i.quantity
            ? `${i.quantity} ${i.unit ? i.unit : ""}`
            : "-";
    }

    return card;
}
