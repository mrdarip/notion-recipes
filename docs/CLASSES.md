```mermaid
classDiagram
    class Recipe{
        - int rating
        - String observations
        - String sourceURL

        + static getAllRecipes() Recipe[]
        + getIngredients() Ingredient[]
        + getRating() float
        + getObservations() String
        + getSourceURL() String
    }

    class Meal{
        - String name
        - String description
        - String previewSrc
        - int rating

        + static getAllMeals() Meal[]
        + getRecipes() Recipe[]
        + getRating() float
        + getName() String
        + getDescription() String
        + getPreviewSrc() String
    }

    class Ingredient{
        - String name
        - int stock

        + static getAllIngredients() Ingredient[]
        + getName() String
        + getStock() int
    }
```