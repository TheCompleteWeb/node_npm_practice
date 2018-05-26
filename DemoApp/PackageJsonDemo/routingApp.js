var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello there! Welcome to my assignment!");
});

app.get("/speak/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    if(subreddit === "pig")
        res.send('the ' + subreddit.toUpperCase() + " says 'Oink'");
    else if (subreddit === 'cow')
        res.send('the ' + subreddit.toUpperCase() + " says 'Moo'");
    else if (subreddit === 'dog')
        res.send('the ' + subreddit.toUpperCase() + " says 'Woof! Woof!'");
});

app.get("/repeat/:subredditName/:number", function(req, res){
    var num = Number(req.params.number);
    var display = "";
    for(var i = 0; i < num; i++){
        display += req.params.subredditName + " ";
    }
    res.send(display);
});

app.get('*', function(req,res){
     res.send('What are you doing with your life!');
     
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log('server has started!');
});