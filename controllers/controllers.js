var path = require('path')
var Data = require('../model/data');

module.exports.loginpg = function (request, response) {

  response.sendFile(path.join(__dirname, '/../views/login.html'));
}
module.exports.new = function (request, response) {

  response.sendFile(path.join(__dirname, '/../views/index.html'));
}

module.exports.new1 = function (request, response) {

  response.sendFile(path.join(__dirname, '/../views/form.html'));
}

module.exports.new2 = function (request, response) {

  response.sendFile(path.join(__dirname, '/../views/graph.html'));
}

module.exports.new3 = function (request, response) {

  response.sendFile(path.join(__dirname, '/../views/report.html'));
}





module.exports.create = function (request, response) {
  console.log(request.body)
  let bulkOps=request.body.map((item)=>{
    return {

      "insertOne":{"document":new Data(item)
    }
     }
  })
  Data.bulkWrite(bulkOps,{},(err,data)=>{
    if(err){
      return response.status(400).json({
        error:"Could not add to database"
      })
      return response.status(200).json({
        message: "Successfully Added to database"
      })
    }
  })

  // var new_data = new Data(request.body);
  // new_data.save(function (err, data) {
  //   if (err)
  //     return response.status(400)
  //       .json({
  //         error: "Please add a School"
  //       });
  //   console.log(data);
  //   return response.status(200)
  //     .json({
  //       message: "Data succesfully added"
  //     });

  // })
  // console.log(request.body);
}
module.exports.list = function (request, response) {
  Data.find(function (err, data) {
    if (err) {
      response.status(400)
        .json({
          error: "Database query error"
        });
    }

    response.status(200).json({
      datas: data
    });
  });

}
module.exports.listline = function (request, response) {
  Data.find({}, function (err, data) {
    if (err) {
      response.status(400)
        .json({
          error: "Database query error"
        });
    }

    response.status(200).json({
      datas: data
    });
  });

}