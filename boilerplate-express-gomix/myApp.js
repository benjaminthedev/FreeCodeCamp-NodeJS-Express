var express = require('express');
var app = express();

// Middlewear
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip)
    //console.log(req.method)
    //console.log(req.ip)
  next()
});


//Use the styles
app.use("/public", express.static(__dirname + "/public"));
//Get the views
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});


// App GET /now
//Chaning Middlewear - A timed server
app.get('/now', (req, res, next) => {
     req.time = new Date().toString();
     next()
}, (req, res) => {
    res.json({
      'time': req.time
    })
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
