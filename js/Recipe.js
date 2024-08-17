class Recipe {
    constructor(rating, observations, sourceURL) {
        this.rating = rating;
        this.observations = observations;
        this.sourceURL = sourceURL;
    }

    static getAllRecipes() {
        // needed notion handler
    }

    getIngredients() {
        // needed notion handler
    }

    getRating() {
        return this.rating;
    }

    getObservations() {
        return this.observations;
    }

    getSourceURL() {
        return this.sourceURL;
    }
}