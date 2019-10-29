var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dataSchema = new Schema({
  school: {
    type: String,
    required: "School name required"
  },
  department: {
    type: String,
   
  },
  major: {
    type: String,
    
  },
  no_of_Student: {
    type: String,
    
  },
  Exam_no: {
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