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


//Generate pdf 
  function print() {
    // Gets texts from the div and saves it in pdf 
    var doc = new jsPDF('portrait');
    var elementHTML = $('#content').html();
    var specialElementHandlers = {
        '#elementH': function (element, renderer) {
            return true;
        }
    };
    doc.fromHTML(elementHTML, 15, 15, {
        'width': 170,
        'elementHandlers': specialElementHandlers
    });
    
   
    

  //});

// Variant
// This one lets you improve the PDF sharpness by scaling up the HTML node tree to render as an image before getting pasted on the PDF.

  var newCanvas = document.querySelector('#myChart');
  var newCanvas1 = document.querySelector('#myChart1');
  var newCanvas2 = document.querySelector('#myChart2');
  var newCanvas3 = document.querySelector('#myChart3');
  var newCanvas4 = document.querySelector('#myChart4');
  var newCanvas5 = document.querySelector('#myChart5');
  var newCanvas6 = document.querySelector('#myChart6');
  var newCanvas7 = document.querySelector('#myChart7');
  
  
  
  //create image from dummy canvas
  var newCanvasImg = newCanvas.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg1 = newCanvas1.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg2 = newCanvas2.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg3 = newCanvas3.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg4 = newCanvas4.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg5 = newCanvas5.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg6 = newCanvas6.toDataURL("image/png", "image/octet-stream");
  var newCanvasImg7 = newCanvas7.toDataURL("image/png", "image/octet-stream");
 
  
    //creates PDF from img
  
  doc.setFontSize(20);
  doc.text(15, 15, "Super Cool Chart");
  doc.addImage(newCanvasImg, 'JPEG', 40, 35, 135, 100 );
  doc.addImage(newCanvasImg1, 'JPEG', 40, 145, 135, 100 );
  doc.addPage();

  doc.addImage(newCanvasImg2, 'JPEG', 40, 35, 135, 100 );
  doc.addImage(newCanvasImg3, 'JPEG', 40, 145, 135, 100 );
  doc.addPage();
  doc.addImage(newCanvasImg4, 'JPEG', 40, 35, 135, 100 );
  doc.addImage(newCanvasImg5, 'JPEG', 40, 145, 135, 100 );
  doc.addPage();
  doc.addImage(newCanvasImg6, 'JPEG', 40, 35, 135, 100 );
  doc.addImage(newCanvasImg7, 'JPEG', 40, 145, 135, 100 );

   // Save the PDF
  doc.save('Report.pdf');
 
  }

