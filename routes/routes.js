module.exports = function(app) {

    var app1 = require('./../controllers/controllers.js');
  
    app.get('/', app1.new);
    app.get('/form', app1.new1);
    app.get('/graph', app1.new2);
    app.post('/data/new',app1.create); 
    app.get('/data/list', app1.list);
    app.get('/data/list1', app1.listline);
  
  }