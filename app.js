const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || "3000";

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"))

var toDo = [];
//home route
app.get("/", function(req, res) {

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItem: toDo
  });

  console.log(toDo);
});

app.post("/", function(req, res) {

 var list = req.body.toDo;
 toDo.push(list);

  res.redirect("/");
});

app.listen(port, function() {
  console.log("Server running on port: 3000");
});
