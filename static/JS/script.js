$("#datainput").click(function (event) {
    var admissionData = {
      school: $('#schoolN').val(),
      department: $('#deptN').val(),
      major: $('#majorN').val(),
      no_of_Student: $('#studentNo').val(),
      Exam_no: $('#examNo').val(),
      year: $('#yearNo').val(),
      semester_no: $('#semesterN').val(),
      Semester: $('#semesterNum').val(),
      
    }
    $.ajax({
      method: "POST",
      url: "/data/new",
     
      data: admissionData
  
    }).done(function (response) {
      console.log(response)
    }).fail(function (response) {
      console.log(response)
    })
  })

$("#getdata").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
      console.log(response);
    }).fail(function (response) {
      console.log(response.responseText);
    });
  
  })