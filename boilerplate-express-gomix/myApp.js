var express = require('express');
var app = express();

//Use the styles
app.use("/public", express.static(__dirname + "/public"));
//Get the views
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
//App GET json data
app.get("/json", (req, res) => {

    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
          message: "HELLO JSON"
        });
    } else {
        res.json({
          message: "Hello json"
        });
    }
});

// Do I need to insert this const?

const mySecret = process.env['MESSAGE_STYLE']






























 module.exports = app;
