var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hi There!");
});

app.get('/bye', function(req, res){
    res.send('Good bye!');
});

app.get('/dog', function(req, res){
    console.log('someone has requested a dog request!');
    res.send('Meow!');
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send('Welcome to a the ' + subreddit.toUpperCase() + " page!!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    console.log(req.params);
    res.send('Welcome to comments page');
});

app.get('*', function(req,res){
     res.send('You are a star!');
     console.log('You are a star!');
});



//app.('/r/subredditname/comments/id/title');

app.listen(process.env.PORT, process.env.IP, function (){
    console.log('server has started!');
});