var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

// --------Routes and Locations Below----------
app.get('/cats', function(request, response) 
{
    var cats_array = ["salah", "mane", "vvd", "alisson"];
    response.render('cats', {cats: cats_array});
});

app.get('/details/:name', function(request, response) 
{
    var name = request.params.name
    console.log(name);
    var details_array = [
        {img: "salah", name: "Salah", country: "Egypt", age: "26", team: "Liverpool FC"},
        {img: "mane", name: "Mane", country: "Senegal", age: "26", team: "Liverpool FC"},
        {img: "vvd", name: "VVD", country: "Netherlands", age: "27", team: "Liverpool FC"},
        {img: "alisson", name: "Alisson", country: "Brazil", age: "25", team: "Liverpool FC"}
    ];
    for(var i in details_array)
    {
        if (details_array[i].img == name)
        {
            var context = details_array[i];
        }
    }
    response.render('details', {cat : context});
});
// -----Port Listener------------
app.listen(8000, function() {
  console.log("listening on port 8000");
})
