var output = document.getElementById('output');
var anchor = document.getElementById('commit-anchor');

var url = new URL(window.location.href);
var ingredient = url.searchParams.get("ingredient");
var meal = url.searchParams.get("meal");

if (ingredient != null) {
    output.innerHTML = dao.getIngredients() + ingredient;
    anchor.href = "https://github.com/mrdarip/notion-recipes/edit/main/data/ingredients.json";
}

if (meal != null) {
    output.innerHTML = dao.getMeals() + meal;
    anchor.href = "https://github.com/mrdarip/notion-recipes/edit/main/data/meals.json";
}