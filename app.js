var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var routes = require("./routes/user.js");
require("./db/index.js");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});