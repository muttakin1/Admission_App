var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dataSchema = new Schema({
  School: {
    type: String,
    required: "School name required"
  },
  Dept: {
    type: String,
   
  },
  Major: {
    type: String,
    
  },
  no_of_Student: {
    type: String,
    
  },
  no: {
    type: String,
   
  },
  year: {
    type: String,
    
  },
  semester_no: {
    type: String,
    
  },
  Semester: {
    type: String,
   
  }
});

var app1 = mongoose.model('AdmissionData', dataSchema)
module.exports = app1;