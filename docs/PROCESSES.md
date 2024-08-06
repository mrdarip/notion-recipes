```mermaid
sequenceDiagram
    JS->>Notion: ask for all meals
    Notion-->>JS: return meals json
    JS ->> JS: load all meals in document

    loop meal.onClick
        JS->>Notion:Ask for recipes
        Notion-->>JS: return recipes json
        JS ->> JS: load all recipes in document

        loop recipe.onClick
            JS->>Notion:Ask for ingredients
            Notion-->>JS: return ingredients json
            JS ->> JS: load all ingredients in document
        end
    end
```
