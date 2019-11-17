const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/",function(req,res){
    res.render("index.html");
});

app.get("/mercury.html",function(req,res){
    res.render("mercury.html");
});

app.get("/venus.html",function(req,res){
    res.render("venus.html");
});

app.get("/earth.html",function(req,res){
    res.render("earth.html");
});
app.get("/mars.html",function(req,res){
    res.render("mars.html");
});

app.get("/jupiter.html",function(req,res){
    res.render("jupiter.html");
});

app.get("/saturn.html",function(req,res){
    res.render("saturn.html");
});

app.get("/uranus.html",function(req,res){
    res.render("uranus.html");
});

app.get("/neptune.html",function(req,res){
    res.render("neptune.html");
});

//server listener
//for local testing
/*
app.listen("8080","127.0.0.1", function(){
    console.log("express server is running...");
});
*/

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server...");
});