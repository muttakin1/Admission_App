module.exports = function(app) {

    var app1 = require('./../controllers/controllers.js');
  
    app.get('/', app1.new);
    app.get('/form', app1.new1);
   
  
  
  }