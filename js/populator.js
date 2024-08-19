/*
    Available attributes:
    
    - delete: Deletes the element contents


*/

let dao = new DAO("../data/ingredients.json", "../data/meals.json");

elements = document.querySelectorAll("[populate]");

elements.forEach(element => {
    console.log(element);
    populateFlags = element.getAttribute("populate").replace(" ","").split(";");

    populateFlags.forEach(flag => {
        console.log(flag);
        switch (true) {
            case /delete.*/i.test(flag):
                element.innerHTML = "";
                break;

            case /mealsAs.*/i.test(flag):
                console.log("Meals as");
                wrappingElement = flag.split(":")[1];
                dao.getMeals().then(
                    meals => meals.forEach(meal => {
                        console.log(meal);
                        let mealElement = document.createElement(wrappingElement);
                        mealElement.innerHTML = meal.name;
                        element.appendChild(mealElement);
                    }
                ));
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