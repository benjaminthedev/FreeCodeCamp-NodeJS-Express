var express = require('express');
var app = express();



console.log("Hello World");
//Standard GET Req
// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

//Use the styles
app.use("/public", express.static(__dirname + "/public"));
//Get the views
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
//App GET json data
app.get("/json", (req, res) => {

  console.log('working?');
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({
          message: "HELLO JSON"
        });
    } else {
        res.json({
          message: "Hello Json"
        });
    }
});





























 module.exports = app;
