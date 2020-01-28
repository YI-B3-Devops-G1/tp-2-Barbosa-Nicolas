const express = require('express');
const app = express();

const path = __dirname + '/views/';
const port = 8080;

app.get('/', function(req,res){
    res.json("hello world");
  });
  
  /*router.get('/status', function(req,res){
    res.sendFile();
  });*/


  app.listen(port)