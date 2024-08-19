
class Ingredient {
    constructor(id, name, stock) {
        this.id = id;

        this.name = name;
        this.stock = stock;
    }

    getName() {
        return this.name;
    }

    getStock() {
        return this.stock;
    }
}