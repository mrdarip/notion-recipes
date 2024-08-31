var output = document.getElementById('output');
var anchor = document.getElementById('commit-anchor');


anchor.setAttribute("href", "index.html");
console.log(anchor);


var url = new URL(window.location.href);
var ingredient = url.searchParams.get("ingredient");
var meal = url.searchParams.get("meal");

if (ingredient != null) {
    output.innerHTML = dao.getIngredients() + ingredient;
}

if (meal != null) {
    output.innerHTML = dao.getMeals() + meal;
}