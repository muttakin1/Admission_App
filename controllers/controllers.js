var path = require('path')

module.exports.new = function(request, response) {

  response.sendFile(path.join(__dirname,'/../views/index.html'));
    
 
  }

  module.exports.new1 = function(request, response) {

    response.sendFile(path.join(__dirname,'/../views/form.html'));
      
   
    }
  