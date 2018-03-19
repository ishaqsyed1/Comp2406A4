var express = require('express');
var mongo = require('mongodb').MongoClient;
var bodyParse = require('body-parser');
var hat = require('hat');
var cookieParser = require('cookie-parser');
var app =express();


const PORT= process.env.PORT || 3000

app.use(express.static(__dirname + "/html")); //provide static server

app.all('*', function(req, res, next){
  console.log('-------------------------------');
  console.log('req.path: ', req.path);
  console.log('serving:' + __dirname + ROOT_DIR + req.path);
  next(); //allow next route or middleware to run
});

const API_KEY ='5d1dd99edc65e3794fcb550af20a841a';
app.set('recipe', path.join(__dirname, 'recipe'));
app.set('recipe engine', 'jade');
app.get('/:id', function(req, res){
   res.send('The id you specified is ' + req.params.id);
});
app.listen(3000)
