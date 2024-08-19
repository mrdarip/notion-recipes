/*
    Available attributes:
    
    - delete: Deletes the element contents


*/

let dao = new Dao();

elements = document.querySelectorAll("[populate]");

elements.forEach(element => {
    populateFlags = element.getAttribute("populate").replace(" ","").split(";");

    populateFlags.forEach(flag => {
        switch (true) {
            case /delete.*/i.test(flag):
                element.innerHTML = "";
                break;

            case /mealsAs.*/i.test(flag):
                wrappingElement = flag.split(":")[1];
                dao.getMeals().forEach(meal => {
                    let mealElement = document.createElement(wrappingElement);
                    mealElement.innerHTML = meal.name;
                    element.appendChild(mealElement);
                });
                break;

            case /ingredientsAs.*/i.test(flag):
                wrappingElement = flag.split(":")[1];
                dao.getIngredients().forEach(ingredient => {
                    let ingredientElement = document.createElement(wrappingElement);
                    ingredientElement.innerHTML = ingredient.name;
                    element.appendChild(ingredientElement);
                });
                break;

            default:
                console.log("Unknown populate flag: " + flag);
                break;
        }
    });
});