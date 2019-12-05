module.exports = function(server) {

    var server1 = require('./../controllers/controllers.js');

    server.get('/', server1.loginpg);
    server.get('/index', server1.new);
    server.get('/form', server1.new1);
    server.get('/graph', server1.new2);
    server.get('/report', server1.new3);
    server.post('/data/new',server1.create); 
    server.get('/data/list', server1.list);
    server.get('/data/list1', server1.listline);
  
  }