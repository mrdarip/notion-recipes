var output = document.getElementById('output');
var anchor = document.getElementById('commit-anchor');

var url = new URL(window.location.href);
var ingredient = url.searchParams.get("ingredient");
var meal = url.searchParams.get("meal");

fillElements();

async function fillElements(){
    await dao.loadIngredients();
    await dao.loadMeals();

    if (ingredient != null) {
        ingredientObject = JSON.parse(ingredient);
        dao.getIngredients().push(ingredientObject);
        output.innerHTML = JSON.stringify({ingredients:dao.getIngredients()},0,4);
        anchor.href = "https://github.com/mrdarip/notion-recipes/edit/main/data/ingredients.json";
    }

    if (meal != null) {
        mealObject = JSON.parse(meal);
        dao.getMeals().push(mealObject);
        output.innerHTML = JSON.stringify({meals:dao.getMeals()},0,4);
        anchor.href = "https://github.com/mrdarip/notion-recipes/edit/main/data/meals.json";
    }
}