function onSubmit() {
    let name = document.getElementById('name').value;
    let unit = document.getElementById('unit').value;
    
    let ingredient = new Ingredient(99, name, unit);

    console.log(ingredient);

    dao.addIngredient(ingredient);
}