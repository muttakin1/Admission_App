var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dataSchema = new Schema({
  school: {
    type: String,
    required: "School name required"
  },
  department: {
    type: String,
    required: "Department name required"
  },
  major: {
    type: String,
    required: "Major name required"
  },
  no_of_Student: {
    type: String,
    required: "Number of Student required"
  },
  Exam_no: {
    type: String,
    required: "Exam number required"
  },
  year: {
    type: String,
    required: "Year required"
  },
  semester_no: {
    type: String,
    required: "Semester number required"
  },
  Semester: {
    type: String,
    required: "Semester number required"
  }
});

var app1 = mongoose.model('AdmissionData', dataSchema)
module.exports = app1;