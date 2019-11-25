var admissionData = {
  School: $('#schoolN').val(),
  Department: $('#deptN').val(),
  Major: $('#majorN').val(),
  no_of_Student: $('#studentNo').val(),
  no: $('#examNo').val(),
  year: $('#yearNo').val(),
  semester_no: $('#semesterN').val(),
  Semester: $('#semesterNum').val(),
}


$("#datainput").click(function (event) {


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
function divide(){  //START OF JS
		
		
	var lines = document.getElementById("dataInput").value.split("\n");  // THE INPUT FROM HTML
	var texts = [];				 // SAVING THE SPLITED STRING IN THIS VARIABLE
	var dept = [];  			 // SAVING THE SPLITED DEPT IN THIS VARIABLE
	var major = [];				 // SAVING THE SPLITED major IN THIS VARIABLE
	var count= [];				 // SAVING THE SPLITED count IN THIS VARIABLE
	var paid_count= [];			 // SAVING THE SPLITED paid_count IN THIS VARIABLE
  var yearNo=$("#yearNo").val()
  var semesterNO=$("#semesterNum").val()
  var semesterSlotNo=$("#semesterSlotNum").val()
  //console.log(yearNo+semesterNO+semesterSlotNo)
	
		
		for (var i=0; i < lines.length; i++) {   //STRUPPING ANY EXTRA NEW LINE EXCEPT THE VALUE
		if (/\S/.test(lines[i])) {
			texts.push(lines[i]);
		  }
		}
	 //document.getElementById("demo").innerHTML = texts; //PRINTING THE SPLITED LINES IN HTML/ SCREEN 

	/* 	THIS IS WHERE THE MAGIC HAPPENS SO PLEASE DON'T ASK ME WHAT IS HAPPENING HERE*/
		for (var i=0;i<texts.length; i++) {
 //console.log("split data1:" + texts[i]);
			var split_dept = texts[i].split("-");
			dept.push(split_dept[0]);
			var split_dept2= split_dept[1].split("   ");
			major.push(split_dept2[0]);
			count.push(split_dept2[1].trim());
			paid_count.push(split_dept2[2].trim());
			//console.log("split data2:" +split_dept2 +" ---split data2 array:" + split_dept2[1] );
		}
	
		
		// TRYING TO MAKE AN OBJECT HERE --- START
		
		
		
		var admissionInputData = new Object();
		
		for (var i = 0; i < texts.length; i++) {
			admissionInputData[i] = ({year:yearNo,semester_SlotNo:semesterSlotNo,semester_no:semesterNO, dept:dept[i],major:major[i],count:count[i],paid_count:paid_count[i]});
		};
		console.log(admissionInputData);
		

	
}