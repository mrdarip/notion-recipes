class DAO {
    constructor(ingredientsJsonSrc, mealsJsonSrc) {
        this.ingredientsJsonSrc = ingredientsJsonSrc;
        this.mealsJsonSrc = mealsJsonSrc;

        this.ingredients = [];
        this.meals = [];

        this.loadIngredients();
        this.loadMeals();  
    }

    getIngredientsOf(id) {
        //must implement meal recipe cross reference
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

    getMeal(id) {
        return this.meals.find(meal => meal.id === id);
    }

    loadIngredients() {
        fetch(this.ingredientsJsonSrc)
            .then(response => response.json())
            .then(data => {
                this.ingredients = data;
            })
            .catch(error => console.error(error));
    }

    getIngredient(id) {
        return this.ingredients.find(ingredient => ingredient.id === id);
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