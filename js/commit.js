output = document.getElementById('output');
anchor = document.getElementById('commit');

var url = new URL(window.location.href);
var ingredient = url.searchParams.get("ingredient");
var meal = url.searchParams.get("meal");

if (ingredient != null) {
    output.innerHTML = dao.getIngredients() + ingredient;
    anchor.href = "ingredients.html";
}

if (meal != null) {
    output.innerHTML = dao.getMeals() + meal;
    anchor.href = "index.html";
}