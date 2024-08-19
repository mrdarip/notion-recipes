class Meal {
    constructor(id, name, description, previewSrc, rating, observations, sourceURL, ingredients) {
        this.id = id;

        this.name = name;
        this.description = description;
        this.previewSrc = previewSrc;
        this.rating = rating;
        this.observations = observations;
        this.sourceURL = sourceURL;
        this.ingredients = ingredients;
    }

    getRecipes() {
        MealDAO.queryRecipesOf(this.id);
    }

    getRating() {
        return this.rating;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPreviewSrc() {
        return this.previewSrc;
    }

    getObservations() {
        return this.observations;
    }

    getSourceURL() {
        return this.sourceURL;
    }

    static fromJSON(json) {
        return new Meal(
            json.id,
            json.name,
            json.description,
            json.previewSrc,
            json.rating,
            json.observations,
            json.sourceURL,
            json.ingredients.map(ingredient => Ingredient.fromJSON(ingredient))
        );
    }
}
