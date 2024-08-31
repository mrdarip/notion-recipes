window.onload = function ()
{
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    fetch("../data/html-templates/header.html")
    .then(response => response.text())
    .then(data => header.innerHTML = data);
}