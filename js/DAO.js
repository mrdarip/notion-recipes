class DAO {
    constructor(ingredientsJsonSrc, mealsJsonSrc) {
        this.ingredientsJsonSrc = ingredientsJsonSrc;
        this.mealsJsonSrc = mealsJsonSrc;

        this.ingredients = [];
        this.meals = [];

        this.loadIngredients();
        this.loadMeals();  
    }

    getIngredientsOf(mealId) {
        meal = this.getMeal(mealId);
        return meal.ingredientsUsed.map(ingredient => this.getIngredient(ingredient.id));
    }

    loadMeals() {
        fetch(this.mealsJsonSrc)
            .then(response => response.json())
            .then(data => {
                this.meals = data;
            })
            .catch(error => console.error(error));
    }

    getMeals() {
        return this.meals;
    }

    getMeal(mealId) {
        return this.meals.find(meal => meal.id === mealId);
    }

    loadIngredients() {
        fetch(this.ingredientsJsonSrc)
            .then(response => response.json())
            .then(data => {
                this.ingredients = data;
            })
            .catch(error => console.error(error));
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