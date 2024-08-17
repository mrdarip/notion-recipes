class Meal {
    constructor(name, description, previewSrc, rating) {
        this.name = name;
        this.description = description;
        this.previewSrc = previewSrc;
        this.rating = rating;
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
}
