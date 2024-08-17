
class Ingredient {
    constructor(name, stock) {
        this.name = name;
        this.stock = stock;
    }

    static getAllIngredients() {
        // needed notion handler
    }

    getName() {
        return this.name;
    }

    getStock() {
        return this.stock;
    }
}