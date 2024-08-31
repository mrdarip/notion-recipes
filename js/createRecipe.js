onSubmit(){
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let previewSrc = document.getElementById('previewSrc').value;
    let rating = document.getElementById('rating').value;
    let observations = document.getElementById('observations').value;
    let sourceURL = document.getElementById('sourceURL').value;
    let ingredients = document.getElementById('ingredients').value;

    let meal = new Meal(name, description, previewSrc, rating, observations, sourceURL, ingredients);

    print(meal);
}