window.onload = function ()
    {
        var header = document.getElementById('header');

        header.innerHTML = "<nav><ul><li><a href=\"http://127.0.0.1:3000/index.html\"><i class=\"fa-solid fa-house\"></i></a></li><li><input placeholder=\"Search...\" type=\"text\" id=\"searchText\"></li><li><a href=\"http://127.0.0.1:3000/html/create.html\" id=\"createLink\">Create</a></li><li><a href=\"http://127.0.0.1:3000/html/manage.html\" id=\"manageLink\">Manage</a></li></ul></nav>";
        
    }