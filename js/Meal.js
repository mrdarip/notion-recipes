class Meal {
    constructor(id, name, description, previewSrc, rating, observations, sourceURL) {
        this.id = id;

        this.name = name;
        this.description = description;
        this.previewSrc = previewSrc;
        this.rating = rating;
        this.observations = observations;
        this.sourceURL = sourceURL;
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
}
