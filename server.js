var http = require('http');
var express = require('express');
var server = express();
var server = http.Server(server);
var bodyParser = require('body-parser');
var mongo = require('mongodb');

var path = require('path');
server.use(express.static(path.join(__dirname,'/')))
var db_url = "mongodb+srv://Muttakin:12345six@cluster0-2wehj.mongodb.net/test?retryWrites=true&w=majority";


var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true });
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

require('./routes/routes.js')(app);

server.listen(process.env.PORT || 3000,(err)=>{
  if (err){
    console.log(err)
  }
  console.log('Server running');
});

