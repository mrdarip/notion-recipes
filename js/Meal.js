class Meal {
    constructor(name, description, previewSrc, rating, observations, sourceURL) {
        this.name = name;
        this.description = description;
        this.previewSrc = previewSrc;
        this.rating = rating;
        this.observations = observations;
        this.sourceURL = sourceURL;
    }

    static getAllMeals() {
        // needed notion handler
    }

    getRecipes() {
        // needed notion handler
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
