fillLis();

async function fillLis() {
    var ULs = document.querySelectorAll("#recommendations ul");

    console.log(ULs);

    await dao.loadMeals();
    
    ULs.forEach(ul => {
        console.log("ul:");
        console.log(ul);
        getMealsOrderBy(ul.id).forEach(meal => {
            ul.appendChild(cardOf(meal));
        });
    });
}

function getMealsOrderBy(orderBy) {
    switch(orderBy){
        case "rating":
            return dao.getMeals().sort((a, b) => {
                return b.rating - a.rating;
            });

        case "name":
            return dao.getMeals().sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        default:
            console.log("Invalid orderBy: " + orderBy);
            return dao.getMeals();
    }

}

function cardOf(meal) {
    var card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${meal.previewSrc != ""?meal.previewSrc:"https://dummyimage.com/250"}" alt="${meal.name}">
        <h3>
            ${meal.name}
        </h3>
        <p>
            ${meal.rating}/5
        </p>
    `;

    card.addEventListener("click", function() {
        window.location.href = `recipe.html?id=${meal.id}`;
    });

    return card;
}