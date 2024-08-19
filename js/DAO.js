class DAO {
    constructor(ingredientsJsonSrc, mealsJsonSrc) {
        console.log("Creating DAO");
        this.ingredientsJsonSrc = ingredientsJsonSrc;
        this.mealsJsonSrc = mealsJsonSrc;
    }

    queryIngredientsOf(id) {
        console.log("Querying ingredients of meal with id: " + id);
        console.error("Not implemented yet");
    }

    queryMeals() {
        console.log("Querying all meals");
        console.error("Not implemented yet");
    }

    queryMeal(id) {
        console.log("Querying meal with id: " + id);
        console.error("Not implemented yet");
    }

    queryIngredients() {
        console.log("Querying all ingredients");
        console.error("Not implemented yet");
    }

    queryIngredient(id) {
        console.log("Querying ingredient with id: " + id);
        console.error("Not implemented yet");
    }
}