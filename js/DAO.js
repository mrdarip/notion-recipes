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
        console.log(json);
 
        this.meals = json["meals"];
    }

    getMeals() {
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
        window.location.href = "commit.html?ingredient=" + JSON.stringify(ingredient);
    }

    addMeal(meal) {
        window.location.href = "commit.html?meal=" + JSON.stringify(meal);
    }
}

dao = new DAO("../data/ingredients.json", "../data/meals.json");

dao.loadIngredients().then(() => {
    console.log(dao.getIngredients());
});


function githubify(path) {
    var githubifiedPath = path;

    isGithubPage = window.location.hostname === "mrdarip.github.io";
    isRoot = window.location.pathname.split("/").length <= 3;

    if (isGithubPage && isRoot) {
        githubifiedPath = path.replace("../", "./");
    }

    return githubifiedPath;
}