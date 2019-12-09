
$( document ).ready(function() {
  $("#textArea2").hide();
  $("#line1Input").hide();
  $("#line2Input").hide();
  $("#line5Input").hide();
  $("#EditLine").hide();
  $("#SaveLine").hide();
  $("#DownloadBtn").hide();
});
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
  console.log("hello")
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
  //START CHECKING IF DATA INPUT IS EMPTY
if(document.getElementById("inputYear").value !="none"){
document.getElementById("span_inputYear").innerHTML = "";
if(document.getElementById("semester").value !="none"){
  document.getElementById("span_semester").innerHTML = "";
  if(document.getElementById("ta_inputData").value.trim()){
    document.getElementById("span_btn_inputData").innerHTML ="";
    
    var lines = document.getElementById("ta_inputData").value.split("\n");  // THE INPUT FROM HTML
    var texts = [];				 // SAVING THE SPLITED STRING IN THIS VARIABLE
    var dept = [];  			 // SAVING THE SPLITED DEPT IN THIS VARIABLE
    var major = [];				 // SAVING THE SPLITED major IN THIS VARIABLE
    var count= [];				 // SAVING THE SPLITED count IN THIS VARIABLE
    var paid_count= [];			 // SAVING THE SPLITED paid_count IN THIS VARIABLE
    var arr = [];	
    var school = [];
    var year=	document.getElementById("inputYear").value;
    var semSlot=document.getElementById("semester").value.split(" ");
    var semester=semSlot[0];
    var slot=semSlot[1];
    var flag;
    /* var flagDup; */
   
    for(var i = 0; i < lines.length; i++){
      var lineData = /(.+[^\s])\s*-\s([a-zA-Z\\(\\)\s]*)\s([0-9]{1,3})\s*([0-9]{1,3})/g.exec(lines[i])
      var loopCount=i+1;
     
      flag=false;
      if (lineData) {
        texts.push(lineData[0].trim());
        dept.push(lineData[1].trim());
        major.push(lineData[2].trim());
        count.push(lineData[3].trim());
        paid_count.push(lineData[4].trim());
        flag=true;
        console.log('Data::', lineData);
       
      }else{
        document.getElementById("span_btn_inputData").innerHTML ="Error in Input in line "+loopCount;
        break;
      }
    }

    function hasDuplicates(arr) {
      return (new Set(arr)).size !== arr.length;
    }
    if(hasDuplicates(texts)==true){
      document.getElementById("span_btn_inputData").innerHTML ="Duplicate Value Detected";
    }
   
    
  
      
      //PRINTING EVERYTHING IN HTML/ SCREEN 
    /* 	document.getElementById("demo2").innerHTML = "dept: " + dept;	
      document.getElementById("demo3").innerHTML = "major: " + major;	
      document.getElementById("demo4").innerHTML ="count: " + count;	 
      document.getElementById("demo5").innerHTML = "paid count: " + paid_count;	 //  EnglishLanguageTeaching */
         //Differentiating school based on dept START
         for(var j=0;j<major.length;j++){
          //console   console.log("modiMajor:" + major.length);
             var modiMajor=major[j].trim();
           //console  console.log("modiMajor:" + modiMajor);
             if(modiMajor!=" " || modiMajor!=null || modiMajor!=undefined){
               if(modiMajor=="Pharmacy") school.push("SESM");//DONE
               else if(modiMajor=="English Language Teaching") school.push("SLASS");//DONE
               else if(modiMajor=="English Literature") school.push("SLASS");//DONE
               else if(modiMajor=="Anthropology") school.push("SLASS");//DONE
               else if(modiMajor=="Accounting") school.push("SB");//DONE
               else if(modiMajor=="Global Studiesand Governance") school.push("SLASS");//DONE
               else if(modiMajor=="Finance") school.push("SB");//DONE
               else if(modiMajor=="General Management") school.push("SB"); //DONE
               else if(modiMajor=="Human Resources Management") school.push("SB"); //DONE
               else if(modiMajor=="International Business") school.push("SB");//DONE
               else if(modiMajor=="Investment Management") school.push("SB");//DONE
               else if(modiMajor=="Management Information Systems") school.push("SB");//DONE
               else if(modiMajor=="Marketing") school.push("SB");//DONE
               else if(modiMajor=="Mediaand Communication") school.push("SLASS");//DONE
               else if(modiMajor=="Sociology") school.push("SLASS");//DONE
               else if(modiMajor=="Biochemistry and Biotechnology") school.push("SLS");//DONE
               else if(modiMajor=="Biochemistry") school.push("SLS");//DONE
               else if(modiMajor=="Computer Engineering") school.push("SECS");//DONE
               else if(modiMajor=="Computer Science") school.push("SECS");//DONE
               else if(modiMajor=="Computer Scienceand Engineering") school.push("SECS");//DONE
               else if(modiMajor=="Economics") school.push("SB");//DONE
               else if(modiMajor=="Electrical and Electronic Engineering") school.push("SECS");//DONE
               else if(modiMajor=="Electronic and Telecommunication Engineering") school.push("SECS");//DONE
               else if(modiMajor=="Environmental Management") school.push("SESM"); //DONE
               else if(modiMajor=="Environmental Science") school.push("SESM");  //DONE
               else if(modiMajor=="Microbiology") school.push("SLS");//DONE
               else if(modiMajor=="Physics(Hons)") school.push("SECS"); //DONE
               else if(modiMajor=="Mathematics") school.push("SECS"); //DONE
               else if(modiMajor=="Population Environment") school.push("SESM"); //DONE
               else if(modiMajor=="Laws(Hons)") school.push("SLASS");//DONE
               else school.push("OTHERS");//DONE
             }
           }
            //CHECKING EVERYTHING IN CONSOLE LOG
            console.log("dept:" + dept);
            console.log("major:" + major);
            console.log("count:" + count);
            console.log("paid count:" + paid_count);
            console.log("year:" + year);
            console.log("semester:" + semester);
            console.log("slot:" + slot);
            console.log("School" + school);	
            console.log("Duplicate:"+hasDuplicates(texts))
         
         //Differentiating school based on dept END
         
        
         
         
         
         // TRYING TO MAKE AN OBJECT HERE --- START
         
         
         if(flag==true && hasDuplicates(texts)==false){
          var obj = new Object();
         
          for (var k = 0; k < texts.length; k++) {
            obj[k] = ({
              key:texts[k],
              dept:dept[k],
              major:major[k],
              count:count[k],
              paid_count:paid_count[k],
              school:school[k],
              year:year,
              semester:semester,
              slot:slot,
            });
          };
           //CLEARING ALL THE FIELDS START
         document.getElementById("inputYear").value = "none";
         document.getElementById("semester").value = "none";
         document.getElementById("ta_inputData").value =" ";
         document.getElementById("span_SuccessMsg").innerHTML = "SAVED SUCCESSFULLY";
         setTimeout(function(){ 
         document.getElementById("span_SuccessMsg").innerHTML = " ";
       }, 2000);
         //CLEARING ALL THE FIELDS END
         }
          
  
  
      
      
      console.log(obj);
      
    
      // TRYING TO MAKE AN OBJECT HERE --- END
    
  
  
  }else{
    document.getElementById("span_btn_inputData").innerHTML = "Data is empty ";
  }
}else{
  document.getElementById("span_semester").innerHTML = "Please Select a semester ";
}
}else{
document.getElementById("span_inputYear").innerHTML = "Please Enter the year properly";
}


}// END OF JS


//Generate pdf 
function print() {

 
  console.log("PDF Working");


//LINK FOR IUB LOGO on pdf
var img = 'data:image/jpeg;base64,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'


// Gets texts from the div and saves it in pdf 
var doc = new jsPDF('portrait');

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


  var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
  var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
  var mid= pageWidth / 2;

// Cover Page 1: 
  // doc.addImage(img, 'JPEG',55,40,100,100);
  // var coverPg = $('#coverPage').html();
  // var specialElementHandlers = {
  //     '#coverPage': function (element, renderer) {
  //         return true;
  //     }
  // };
  // doc.fromHTML(coverPg, mid-80, 150, {
  //     'width': 150,
  //     'elementHandlers': specialElementHandlers
  // });



  //////////////////
 
  let str1 = document.getElementById('line1').innerText;
  var str2=document.getElementById("line2").innerText;
  var str3=document.getElementById("line3").innerText;
  var str4=document.getElementById("line4").innerText;
  var str5=document.getElementById("line5").innerText;
  
  
doc.addImage(newCanvasImg6, 'JPEG', 50, 40, 115, 100 );
doc.addImage(newCanvasImg7, 'JPEG', 50, 160, 115, 100 );


// Dynamic Page Number: 
var pageCount = doc.internal.getNumberOfPages();
for(i = 2; i < pageCount+1; i++) {  // i=2 for not showing on cover page 
    doc.setPage(i); 
    doc.text(190,285, doc.internal.getCurrentPageInfo().pageNumber + "/" + pageCount);
}
 // Save the PDF
doc.save('Report.pdf');

}

  function EditLine() {
    var l1 = document.getElementById('line1').innerText;
    var l2 = document.getElementById('line2').innerText;
    var l5 = document.getElementById('line5').innerText;
    document.getElementById("line1Input").value=l1;
    document.getElementById("line2Input").value=l2;
    document.getElementById("line5Input").value=l5;
    $("#SaveLine").toggle();
    $("#EditLine").toggle();
    $("#line1Input").toggle();
    $("#line1").toggle();
    $("#line2Input").toggle();
    $("#line2").toggle();
    $("#line5Input").toggle();
    $("#line5").toggle();
    $("#DownloadBtn").toggle();
    $("#getFocusYear").toggle();
  }

  function saveEdit() {
    var l1New = document.getElementById('line1Input').value;
    var l2New = document.getElementById('line2Input').value;
    var l5New = document.getElementById('line5Input').value;
    document.getElementById("line1").innerText=l1New;
    document.getElementById("line2").innerText=l2New;
    document.getElementById("line5").innerText=l5New;
    $("#EditLine").toggle();
    $("#SaveLine").toggle();
    $("#line1Input").toggle();
    $("#line1").toggle();
    $("#line2Input").toggle();
    $("#line2").toggle();
    $("#line5Input").toggle();
    $("#line5").toggle();
    $("#DownloadBtn").toggle();
    $("#getFocusYear").toggle();
  }
