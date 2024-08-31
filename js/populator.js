/*
    Available attributes:
    
    - delete: Deletes the element contents
    - mealsAs: Populates the element with the meals names as the specified element


*/

let dao = new DAO("../data/ingredients.json", "../data/meals.json");

while (!dao.isReady) {
    console.log("waiting for DAO to be ready");
}

// Get all elements with the populate attribute
elements = document.querySelectorAll("[populate]");

elements.forEach(element => {
    // Get the populate values
    // They are defined like in css but in a single line, like this:
    // property: value; property: value;
    var populateValues = element.getAttribute("populate").split(";");

    populateValues.forEach(pair => {
        //the switch will go through the case that is true
        switch (true) {
            // using regex to check if pair contains the word delete ( delete.* )
            case /delete.*/i.test(pair):
                element.innerHTML = "";
                break;
            
            // using regex to check if pair contains the word mealsAs ( mealsAs.* )
            case /mealsAs.*/i.test(pair):
                //get the value asignated (ingredientsAs: value)
                wrappingElement = pair.split(":")[1];

                dao.getMeals().forEach(meal => {
                        let mealElement = document.createElement(wrappingElement);
                        mealElement.innerHTML = meal.name;
                        element.appendChild(mealElement);
                    }
                );
                break;

            // using regex to check if pair contains the word ingredientsAs ( ingredientsAs.* )
            case /ingredientsAs.*/i.test(pair):
                //get the value asignated (ingredientsAs: value)
                wrappingElement = pair.split(":")[1];

                dao.getIngredients().forEach(ingredient => {
                    let ingredientElement = document.createElement(wrappingElement);
                    ingredientElement.innerHTML = ingredient.name;
                    element.appendChild(ingredientElement);
                });
                break;

            default:
                console.log("Unknown populate flag: " + pair);
                break;
        }
    });
});
