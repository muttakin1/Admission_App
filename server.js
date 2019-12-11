var http = require('http');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var mongo = require('mongodb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var path = require('path');
app.use(express.static(path.join(__dirname,'/')))
var db_url = "mongodb+srv://Muttakin:muttakin12@cluster1-2wehj.mongodb.net/test?retryWrites=true&w=majority";


var mongoose = require("mongoose");

mongoose.connect(db_url, { useNewUrlParser: true ,useUnifiedTopology:true});
mongoose.connection.on('error', function(err){
  console.log(err);
  console.log('Could not connect to mongodb');
})



require('./routes/routes.js')(app);

app.listen(process.env.PORT || 3000,(err)=>{
  if(err){
    console.log(err)
  }
  console.log('Server running');
});

