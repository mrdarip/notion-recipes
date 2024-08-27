class DAO {
    constructor(ingredientsJsonSrc, mealsJsonSrc) {
        this.ingredientsJsonSrc = ingredientsJsonSrc;
        this.mealsJsonSrc = mealsJsonSrc;

        this.ingredients = [];
        this.meals = [];
    }

    getIngredientsOf(mealId) {
        meal = this.getMeal(mealId);
        return meal.ingredientsUsed.map(ingredient => this.getIngredient(ingredient.id));
    }

    async loadMeals() {
        let response = await fetch(githubify(this.mealsJsonSrc));
        let json = await response.json();
 
        this.meals = json["meals"];
    }

    getMeals() {
        console.log(this.meals);
        return this.meals;
    }

    getMeal(mealId) {
        return this.meals.find(meal => meal.id === mealId);
    }

    async loadIngredients() {
        let response = await fetch(githubify(this.ingredientsJsonSrc));
        let json = await response.json();

        this.ingredients = json["ingredients"];
    }

    getIngredient(ingredientId) {
        return this.ingredients.find(ingredient => ingredient.id === ingredientId);
    }

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    addMeal(meal) {
        this.meals.push(meal);
    }
}

function githubify(path) {
    return window.location.hostname === "mrdarip.github.io"? path.replace("../", "./"): path;
}