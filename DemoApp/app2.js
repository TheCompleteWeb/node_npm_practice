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

app.listen(process.env.PORT, process.env.IP, function (){
    console.log('server has started!');
});