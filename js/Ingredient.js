
class Ingredient {
    constructor(id, name, unit) {
        this.id = id;

        this.name = name;
        this.unit = unit;

    }

    getName() {
        return this.name;
    }

    static fromJSON(json) {
        return new Ingredient(
            json.id,
            json.name,
            json.unit
        );
    }
}