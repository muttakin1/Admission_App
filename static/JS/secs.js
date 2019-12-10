// Major Wise students' interest @ SECS LINE
// function secsGraphs(event) {
  var myChart2
  var myChart3
  var myChart4
  var myChart5

  function saveTitle() {
    var chTitle2 = document.getElementById('chartTitle2').value;
    myChart2.config.options.title.text = chTitle2;
    console.log(chTitle2);
    myChart2.update();

    var chTitle3 = document.getElementById('chartTitle3').value;
    myChart3.config.options.title.text = chTitle3;
    console.log(chTitle3);
    myChart3.update();

    var chTitle4 = document.getElementById('chartTitle4').value;
    myChart4.config.options.title.text = chTitle4;
    console.log(chTitle4);
    myChart4.update();

    
  }

  $("#MajorWiseStudentsSECS").click(function (event) {
    
    getBtn();
    
    $(".dropdown").show();
    $("#content").show();

    //Edit graphs functions
    $("#tableMenu2 a").click(function(e){
      e.preventDefault(); // cancel the link behaviour
      var selText = $(this).text();
      $("#tableButton2").text(selText);
      console.log(selText)
      //console.log(myChart.config.options.type)
      myChart2.config.type = selText
      myChart2.update()
  });

  $("#tableMenu3 a").click(function(e){
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton3").text(selText);
    console.log(selText)
    //console.log(myChart.config.options.type)
    myChart3.config.type = selText
    myChart3.update()
});
$("#tableMenu4 a").click(function(e){
  e.preventDefault(); // cancel the link behaviour
  var selText = $(this).text();
  $("#tableButton4").text(selText);
  console.log(selText)
  //console.log(myChart.config.options.type)
  myChart4.config.type = selText
  myChart4.update()
});

 
  
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {


    let noofStd = response.datas
   
    console.log(Yearvalue)

    
     // Focus year graphs, Majors
    let counterYearlyPHY= 0
    let counterYearlyCSE = 0
    let counterYearlyCE = 0
    let counterYearlyEEE = 0
    let counterYearlyETE = 0
    let counterYearlyMATH = 0
    let counterYearlyCS = 0

     // Focus year graphs, Departments
    let counterYearlyDeptCSE=0
    let counterYearlyDeptEEE=0
    let counterYearlyDeptPS=0
    
     // Major wise Students' interest @ SECS
    let counterCE = 0
    let counterCSE = 0
    let counterETE = 0
    let counterPhy = 0
    let counterCS = 0
    let counterEEE = 0
    let countermaths = 0

    let numberOfCE = []
    let numberOfmaths = []
    let numberOfCSE = []
    let numberOfETE = []
    let numberOfPhy = []
    let numberOfCS = []
    let numberOfEEE = []

     // Department graphs
    let counterDeptCSE = 0
    let counterDeptEEE = 0
    let counterDeptPhySci = 0

    let numberOfDeptCSE = []
    let numberOfDeptEEE = []
    let numberOfDeptPhySci = []

    // Yearly semester wise SECS
    let counterSpring = 0
    let counterAutumn = 0
    let counterSummer = 0

    let numberAutumn=[]
    let numberSpring=[]
    let numberSummer=[]   

    let numberDept=[]
    let numberSECS = []
   
    Yearvalue = $("#focusYearVal").val()
    startYear =$("#startYearVal").val()
    finishYear =$("#finishYearVal").val()

    for (let i = startYear; i <= finishYear; i++) {
      noofStd.forEach((item, index) => {
        
        // Major wise Student's interest @ SECS
        if (item.year == i && item.Major == "BSc - Computer Engineering") {
          counterCE = counterCE + Number(item.no_of_Student)

        }

        else if (item.year == i && item.Major == "BSc - Electrical and Electronic Engineering") {
          counterEEE = counterEEE + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "BSc - Electronic and Telecommunication Engineering")) {
          counterETE = counterETE + Number(item.no_of_Student)
        }

        else if (item.year == i && item.Major == "BSc - Computer Science and Engineering") {
          counterCSE = counterCSE + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "BSc - Physics (Hons)")) {
          counterPhy = counterPhy + Number(item.no_of_Student)
        }

        else if (item.year == i && item.Major == "BSc - Computer Science") {
          counterCS = counterCS + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "BSc - Mathematics (Hons)")) {
          countermaths = countermaths + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Major == "BSc - Computer Engineering") {
          counterYearlyCE = counterYearlyCE + Number(item.no_of_Student)

        }

        else if (item.year == Yearvalue && item.Major == "BSc - Electrical and Electronic Engineering") {
          counterYearlyEEE = counterYearlyEEE + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && (item.Major == "BSc - Electronic and Telecommunication Engineering")) {
          counterYearlyETE = counterYearlyETE + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Computer Science and Engineering") {
          counterYearlyCSE = counterYearlyCSE + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && (item.Major == "BSc - Physics (Hons)")) {
          counterYearlyPHY = counterYearlyPHY + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Computer Science") {
          counterYearlyCS = counterYearlyCS + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && (item.Major == "BSc - Mathematics (Hons)")) {
          counterYearlyMATH = counterYearlyMATH + Number(item.no_of_Student)
        }

        // SECS Department
        if (item.year == i && item.Dept == "CSE") {
          counterDeptCSE = counterDeptCSE + Number(item.no_of_Student)

        }

        if (item.year == i && item.Dept == "EEE") {
          counterDeptEEE = counterDeptEEE + Number(item.no_of_Student)
        }

        if (item.year == i && item.Dept == "PhySci") {
          counterDeptPhySci = counterDeptPhySci + Number(item.no_of_Student)
        }

        // Focus year graphs
        if (item.year == Yearvalue && item.Dept == "CSE") {
          counterYearlyDeptCSE= counterYearlyDeptCSE + Number(item.no_of_Student)

        }

        if (item.year == Yearvalue && item.Dept == "EEE") {
          counterYearlyDeptEEE = counterYearlyDeptEEE + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Dept == "PhySci") {
          counterYearlyDeptPS = counterYearlyDeptPS + Number(item.no_of_Student)
        }

        // Yearly semester wise SECS
        if (item.year == i  && item.Semester == "3" && item.School == "SECS") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i  && item.Semester == "1" && item.School == "SECS") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i  && item.Semester == "2" && item.School == "SECS") {
          counterSummer = counterSummer + Number(item.no_of_Student)

        }


      });

      // Focus year graphs, Majors
      numberSECS.push(counterYearlyCE)
      numberSECS.push(counterYearlyCS)
      numberSECS.push(counterYearlyCSE)
      numberSECS.push(counterYearlyEEE)
      numberSECS.push(counterYearlyETE)
      numberSECS.push(counterYearlyMATH)
      numberSECS.push(counterYearlyPHY)

      // Focus year graphs, Departments
      numberDept.push(counterYearlyDeptCSE)
      numberDept.push(counterYearlyDeptEEE)
      numberDept.push(counterYearlyDeptPS)

      // Major wise Students' interest @ SECS
      numberOfCE.push(counterCE)
      numberOfEEE.push(counterEEE)
      numberOfETE.push(counterETE)
      numberOfCSE.push(counterCSE)
      numberOfPhy.push(counterPhy)
      numberOfmaths.push(countermaths)
      numberOfCS.push(counterCS)

      // Department graphs
      numberOfDeptCSE.push(counterDeptCSE)
      numberOfDeptEEE.push(counterDeptEEE)
      numberOfDeptPhySci.push(counterDeptPhySci)

      // Yearly semester wise SECS
      numberAutumn.push(counterAutumn)
      numberSpring.push(counterSpring)
      numberSummer.push(counterSummer)   


      // reinitializing the counter
      counterYearlyDeptCSE = 0
      counterYearlyDeptEEE = 0
      counterYearlyDeptPS = 0
      counterYearlyPHY = 0
      counterYearlyCSE = 0
      counterYearlyCE = 0
      counterYearlyEEE = 0
      counterYearlyETE = 0
      counterYearlyMATH = 0
      counterYearlyCS = 0
      counterCE = 0
      counterEEE = 0
      counterETE = 0
      counterCSE = 0
      counterPhy = 0
      countermaths = 0
      counterCS = 0
      counterDeptCSE = 0
      counterDeptEEE = 0
      counterDeptPhySci = 0
      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0
    }
    
   
    

    // Focus year graphs
    var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          
          labels: ['Computer Engineering', 'Computer Science', 'Computer Science & Engineering','Electrical and Electronic Engineering', 'Electronic and Telecommunication Engineering','Mathematics', 'Physics',],
          datasets: [{
            label: 'Number Of Students in SECS in ' + Yearvalue,
            data: [
              numberSECS[0],numberSECS[1],numberSECS[2],numberSECS[3],numberSECS[4],numberSECS[5],numberSECS[6],],
            backgroundColor: [
              'rgba(248, 192, 165, 1)', //ce
                'rgba(247, 191, 164, 1)', //cs
                'rgba(243, 170, 129, 1)', //cse
                'rgba(242, 147, 67, 1)', //eee
                'rgba(240, 147, 67, 1)', // ete
                'rgba(199, 121, 55, 1)', //math
                'rgba(173, 102, 46, 1)', //physics
            ],
            borderColor: [
              'rgba(248, 192, 165, 1)', //ce
              'rgba(247, 191, 164, 1)', //cs
                'rgba(243, 170, 129, 1)', //cse
                'rgba(242, 147, 67, 1)', //eee
                'rgba(240, 147, 67, 1)', // ete
                'rgba(199, 121, 55, 1)', //math
                'rgba(173, 102, 46, 1)', //physics
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          plugins:{
            
            datalabels: {
              
              formatter: function(value){
                return value
              }
            }
          },
          
          title: {
            display: true,
            text: Yearvalue + ' @ Secs Majors',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20  
          },
  
          
        }
      });

      var ctx = document.getElementById('myChart1');
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          
          labels: ['CSE', 'EEE', 'PS',],
          datasets: [{
            label: 'SECS Departments in ' + Yearvalue,
            data: [numberDept[0],numberDept[1],numberDept[2]],
            backgroundColor: [
              'rgba(202, 121, 55, 1)',
                'rgba(243, 148, 68, 1)',
                'rgba(2248, 192, 165, 1)',
                
            ],
            borderColor: [
              'rgba(202, 121, 55, 1)',
                'rgba(243, 148, 68, 1)',
                'rgba(2248, 192, 165, 1)',
                
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          plugins:{
            
            datalabels: {
              
              formatter: function(value){
                return value
              }
            }
          },
          
          title: {
            display: true,
            text: "SECS departments "+Yearvalue ,
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20  
  
          },
  
          
        }
      });

      
    //   Line graph
    
    var ctx = document.getElementById('myChart2');
     myChart2 = new Chart(ctx, {
      type: 'line',
      data:{
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019','2020',],
        datasets: [{
          label: 'Number Of Students in Computer Engineering',
          lineTension:0.1,
          fill: false,
          data: [//loop for giving indexes in the array
            // numberOfCE.forEach(function(item,i){  })],
            numberOfCE[0], numberOfCE[1], numberOfCE[2], numberOfCE[3], numberOfCE[4], numberOfCE[5], numberOfCE[6], numberOfCE[7],],
          backgroundColor: [
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
          ],
          borderColor: [
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
  
          ],
          borderWidth: 2
        }, {
          label: 'Number Of Students in Electrical and Electronic Engineering',
          lineTension:0.1,
          fill: false,
          data: [numberOfEEE[0], numberOfEEE[1], numberOfEEE[2], numberOfEEE[3], numberOfEEE[4], numberOfEEE[5], numberOfEEE[6], numberOfEEE[7],],
          backgroundColor: [
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
          ],
          borderColor: [
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
  
          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Electronic and Telecommunication Engineering',
          lineTension:0.1,
          fill: false,
          data: [numberOfETE[0], numberOfETE[1], numberOfETE[2], numberOfETE[3], numberOfETE[4], numberOfETE[5], numberOfETE[6], numberOfETE[7],],
          backgroundColor: [
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
          ],
          borderColor: [
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
  
          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Computer Science and Engineering',
          lineTension:0.1,
          fill: false,
          data: [numberOfCSE[0], numberOfCSE[1], numberOfCSE[2], numberOfCSE[3], numberOfCSE[4], numberOfCSE[5], numberOfCSE[6], numberOfCSE[7],],
          backgroundColor: [
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
          ],
          borderColor: [
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
  
          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Computer Science',
          lineTension:0.1,
          fill: false,
          data: [numberOfCS[0], numberOfCS[1], numberOfCS[2], numberOfCS[3], numberOfCS[4], numberOfCS[5], numberOfCS[6], numberOfCS[7],],
          backgroundColor: [
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
          ],
          borderColor: [
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
  
          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Physics',
          lineTension:0.1,
          fill: false,
          data: [numberOfPhy[0], numberOfPhy[1], numberOfPhy[2], numberOfPhy[3], numberOfPhy[4], numberOfPhy[5], numberOfPhy[6], numberOfPhy[7],],
          backgroundColor: [
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
          ],
          borderColor: [
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
  
          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Maths',
          lineTension:0.1,
          fill: false,
          data: [numberOfmaths[0], numberOfmaths[1], numberOfmaths[2], numberOfmaths[3], numberOfmaths[4], numberOfmaths[5], numberOfmaths[6], numberOfmaths[7],],
          backgroundColor: [
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
          ],
          borderColor: [
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
  
          ],
          borderWidth: 2
        },
        ]
  
      },
      options:{   
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }],
        },
        title: {
          display: true,
          text: 'Major wise Students interest @  SECS',
            fontSize:20  ,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        
      }
    }
  });
    console.log(myChart2)
    

    //   Area under the graph
    var ctx = document.getElementById('myChart3');
    myChart3 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          lineTension:0.1,
          label: 'Number Of Students in Maths',
          // fill: false,
          data: [numberOfmaths[0], numberOfmaths[1], numberOfmaths[2], numberOfmaths[3], numberOfmaths[4], numberOfmaths[5], numberOfmaths[6], numberOfmaths[7],],
          backgroundColor: [
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
          ],
          borderColor: [
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',
            'rgba(199, 121, 55, 1)',

          ],
          borderWidth: 2
        },

        {  lineTension:0.1,
          label: 'Number Of Students in Computer Engineering',
          // fill: false,
          data: [numberOfCE[0], numberOfCE[1], numberOfCE[2], numberOfCE[3], numberOfCE[4], numberOfCE[5], numberOfCE[6], numberOfCE[7],],
          backgroundColor: [
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
          ],
          borderColor: [
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',
            'rgba(248, 192, 165, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension:0.1,
          label: 'Number Of Students in Electrical and Electronic Engineering',
          // fill: false,
          data: [numberOfEEE[0], numberOfEEE[1], numberOfEEE[2], numberOfEEE[3], numberOfEEE[4], numberOfEEE[5], numberOfEEE[6], numberOfEEE[7],],
          backgroundColor: [
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
          ],
          borderColor: [
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',
            'rgba(242, 147, 67, 1)',

          ],
          borderWidth: 2
        },
        { lineTension:0.1,
          label: 'Number Of Students in Electronic and Telecommunication Engineering',
          // fill: false,
          data: [numberOfETE[0], numberOfETE[1], numberOfETE[2], numberOfETE[3], numberOfETE[4], numberOfETE[5], numberOfETE[6], numberOfETE[7],],
          backgroundColor: [
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
          ],
          borderColor: [
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',
            'rgba(240, 147, 67, 1)',

          ],
          borderWidth: 2
        },
        { lineTension:0.1,
          label: 'Number Of Students in Computer Science and Engineering',
          // fill: false,
          data: [numberOfCSE[0], numberOfCSE[1], numberOfCSE[2], numberOfCSE[3], numberOfCSE[4], numberOfCSE[5], numberOfCSE[6], numberOfCSE[7],],
          backgroundColor: [
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
          ],
          borderColor: [
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',
            'rgba(243, 170, 129, 1)',

          ],
          borderWidth: 2
        },
        { lineTension:0.1,
          label: 'Number Of Students in Computer Science',
          // fill: false,
          data: [numberOfCS[0], numberOfCS[1], numberOfCS[2], numberOfCS[3], numberOfCS[4], numberOfCS[5], numberOfCS[6], numberOfCS[7],],
          backgroundColor: [
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
          ],
          borderColor: [
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',
            'rgba(247, 191, 164, 1)',

          ],
          borderWidth: 2
        },
        { lineTension:0.1,
          label: 'Number Of Students in Physics',
          // fill: false,
          data: [numberOfPhy[0], numberOfPhy[1], numberOfPhy[2], numberOfPhy[3], numberOfPhy[4], numberOfPhy[5], numberOfPhy[6], numberOfPhy[7],],
          backgroundColor: [
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
          ],
          borderColor: [
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',
            'rgba(173, 102, 46, 1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }],},
        title: {
          display: true,
          text: 'Major wise Students interest @  SECS',
          
            fontSize:20  ,
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      
    }
    });

    //   SECS Dept Line Chart
    var ctx = document.getElementById('myChart4');
     myChart4 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          lineTension:0.1,
          label: 'Number Of Students in EEE',
          fill: false,
          data: [numberOfDeptEEE[0], numberOfDeptEEE[1], numberOfDeptEEE[2], numberOfDeptEEE[3], numberOfDeptEEE[4], numberOfDeptEEE[5], numberOfDeptEEE[6], numberOfDeptEEE[7],],
          backgroundColor: ['rgba(253,148,69,1)',],
          borderColor: [
            'rgba(253,148,69,1)',

          ],
          borderWidth: 2
        },
        {  lineTension:0.1,
          label: 'Number Of Students in Computer Science Engineering',
          fill: false,
          data: [numberOfDeptCSE[0], numberOfDeptCSE[1], numberOfDeptCSE[2], numberOfDeptCSE[3], numberOfDeptCSE[4], numberOfDeptCSE[5], numberOfDeptCSE[6], numberOfDeptCSE[7],],
          backgroundColor: ['rgba(209,122,55, 1)',],
          borderColor: [
            'rgba(209,122,55, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension:0.1,
          label: 'Number Of Students in Physical Sciences',
          fill: false,
          data: [numberOfDeptPhySci[0], numberOfDeptPhySci[1], numberOfDeptPhySci[2], numberOfDeptPhySci[3], numberOfDeptPhySci[4], numberOfDeptPhySci[5], numberOfDeptPhySci[6], numberOfDeptPhySci[7],],
          backgroundColor: ['rgba(254,194,168, 1)',],
          borderColor: [
            'rgba(254,194,168, 1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        title: {
          display: true,
          text: 'SECS Departments',
            fontSize:20  ,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    });

    //SECS dept bar chart
    var ctx = document.getElementById('myChart5');
    myChart5 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Number Of Students in EEE',
          fill: false,
          data: [numberOfDeptEEE[0], numberOfDeptEEE[1], numberOfDeptEEE[2], numberOfDeptEEE[3], numberOfDeptEEE[4], numberOfDeptEEE[5], numberOfDeptEEE[6], numberOfDeptEEE[7],],
          backgroundColor: [
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            ],
          borderColor: [
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',
            'rgba(253,148,69,1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Computer Science Engineering',
          fill: false,
          data: [numberOfDeptCSE[0], numberOfDeptCSE[1], numberOfDeptCSE[2], numberOfDeptCSE[3], numberOfDeptCSE[4], numberOfDeptCSE[5], numberOfDeptCSE[6], numberOfDeptCSE[7],],
          backgroundColor: [
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
          ],
          borderColor: [
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',
            'rgba(209,122,55, 1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Physical Sciences',
          fill: false,
          data: [numberOfDeptPhySci[0], numberOfDeptPhySci[1], numberOfDeptPhySci[2], numberOfDeptPhySci[3], numberOfDeptPhySci[4], numberOfDeptPhySci[5], numberOfDeptPhySci[6], numberOfDeptPhySci[7],],
          backgroundColor: [
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
          ],
          borderColor: [
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',
            'rgba(254,194,168, 1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }],
        },
        title: {
          display: true,
          text: 'SECS Departments',
          fontSize:20  
         
          
        }
      }
    });

    // Yearly semester wise SECS
    var ctx = document.getElementById('myChart6');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Autumn',
          fill: false,
          data: [numberAutumn[0], numberAutumn[1], numberAutumn[2], numberAutumn[3], numberAutumn[4], numberAutumn[5], numberAutumn[6], numberAutumn[7],],
          backgroundColor: [
        
          'rgba(155,187,89,1)', 
          'rgba(155,187,89,1)', 
          'rgba(155,187,89,1)',
          'rgba(155,187,89,1)', 
          'rgba(155,187,89,1)', 
          'rgba(155,187,89,1)',
          'rgba(155,187,89,1)', 
          'rgba(155,187,89,1)',         
        
        ],
          borderColor: [
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',
            'rgba(155,187,89,1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Spring',
          fill: false,
          data: [numberSpring[0], numberSpring[1], numberSpring[2], numberSpring[3], numberSpring[4], numberSpring[5], numberSpring[6], numberSpring[7],],
          backgroundColor: [
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
          ],
          borderColor: [
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',
            'rgba(79,129,189, 1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Summer',
          fill: false,
          data: [numberSummer[0], numberSummer[1], numberSummer[2], numberSummer[3], numberSummer[4], numberSummer[5], numberSummer[6], numberSummer[7],],
          backgroundColor: [
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
          ],
          borderColor: [
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',
            'rgba(192,80,77, 1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }],},
        title: {
          display: true,
          text: 'Yearly semester wise SECS',
          fontSize:20  
         
          
        }
      }
    });

  }).fail(function (response) {
    console.log(response.responseText);
  });



})


