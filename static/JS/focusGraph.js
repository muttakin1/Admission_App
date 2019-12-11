// myChart and myChart1: Focus year @ IUB AND Focus year schoolwise distribution
$("#getFocusYear").click(function (event) {
    
  var sYear = document.getElementById('startYearVal').value;
  var finYear = document.getElementById('startYearVal').value;
  var focusYear = document.getElementById('startYearVal').value;
  
  
    if(sYear.value<2013 || finYear<2013 || focusYear<2013 ||
      sYear.value>2020 || finYear>2020 || focusYear>2020){
     alert("Please Enter Year between 2013 to 2019!");
  }
  else{

    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
      
      Yearvalue = $("#focusYearVal").val()
      startYear =$("#startYearVal").val()
      finishYear =$("#finishYearVal").val()
      
      let noofStd = response.datas
      let counterSecs=0
      let counterSlass = 0
      let counterSob = 0
       let counterOther = 0
      let counterAutumn = 0
      let counterSummer = 0
      let counterSpring = 0
       let counterSls=0
     
      let numberBBA=[]
      let numberYearlyMis=[]
      let numberYearlyInvest=[]
      let numberYearlyMkt=[]
      let numberYearlyIb=[]
      let numberYearlyHrm=[]
      let numberYearlyFin=[]
      let numberYearlyEcn=[]
      let numberYearlyAcn=[]
      let numberYearlyMgt=[]
      
      let numberBbaSemester=[]

      let SemesterDist=[]
     
      let numberOfAutumn = []
      let numberOfSummer = []
      let numberOfSpring = []
      
      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == Yearvalue && item.Semester == "1") {
            counterAutumn = counterAutumn + Number(item.no_of_Student)
  
          }
          else if (item.year == Yearvalue && item.Semester == "2") {
            counterSpring = counterSpring + Number(item.no_of_Student)
          }
  
          else if (item.year == Yearvalue && item.Semester == "3") {
            counterSummer = counterSummer + Number(item.no_of_Student)
          }
           if (item.year == Yearvalue && item.School == "SLASS") {
             counterSlass = counterSlass + Number(item.no_of_Student)
  
           }
          else if (item.year == Yearvalue && item.School == "SoB") {
            counterSob = counterSob + Number(item.no_of_Student)
          }
  
          else if (item.year == Yearvalue && (item.School == "Phar" || item.School == "SESM")) {
            counterOther = counterOther + Number(item.no_of_Student)
          }
          else if (item.year == Yearvalue && item.School == "SECS") {
            counterSecs = counterSecs + Number(item.no_of_Student)
          }
          else if (item.year == Yearvalue && item.School == "SLS") {
            counterSls = counterSls + Number(item.no_of_Student)
            
          }
        });        
      
        
         numberBbaSemester.push(counterSlass)
         numberBbaSemester.push(counterSob)
         numberBbaSemester.push(counterOther)
         numberBbaSemester.push(counterSecs)
        numberBbaSemester.push(counterSls)
        
        SemesterDist.push(counterAutumn)
        SemesterDist.push(counterSpring)
        SemesterDist.push(counterSummer)

        numberOfAutumn.push(counterAutumn)
        numberOfSpring.push(counterSpring)
        numberOfSummer.push(counterSummer)

        counterSls=0
        counterAutumn = 0
        counterSecs = 0
        counterSpring = 0
        counterSummer = 0
        counterSlass = 0
        counterSob = 0
        counterOther = 0
      }
     
      
      var ctx = document.getElementById('myChart');
      
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          
          labels: ['Autumn', 'Spring', 'Summer'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students in ' + Yearvalue,
            data: [SemesterDist[0], SemesterDist[1], SemesterDist[2]],
            backgroundColor: [
              'rgba(77, 127, 188, 1)',
            'rgba(191, 79, 78, 1)',
            'rgba(151, 186, 86, 1)',
            ],
            borderColor: [
              'rgba(77, 127, 188, 1)',
              'rgba(191, 79, 78, 1)',
              'rgba(151, 186, 86, 1)',
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          plugins:{
            
            datalabels: {
              
              formatter: function(value){
                return value ;
              }
            }
          },
          title: {
            display: true,
            text: Yearvalue + ' @ IUB',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20
          },
  
          
        }
      });
      var ctx = document.getElementById('myChart1');
      var myChart1 = new Chart(ctx, {
        type: 'pie',
        data: {
         
          labels: ['SLASS', 'SoB','SESM+Pharm','SECS','SLS'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [numberBbaSemester[0], numberBbaSemester[1], numberBbaSemester[2],numberBbaSemester[3],numberBbaSemester[4],numberBbaSemester[5]],
            backgroundColor: [
              'rgba(162, 162, 162, 1)',
              'rgba(30, 70, 122, 1)',
              'rgba(124, 96, 157, 1)',
              'rgba(242, 147, 67, 1)',
              'rgba(151, 186, 86, 1)',
            ],
            borderColor: [
              'rgba(162, 162, 162, 1)',
              'rgba(30, 70, 122, 1)',
              'rgba(124, 96, 157, 1)',
              'rgba(242, 147, 67, 1)',
              'rgba(151, 186, 86, 1)',
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          plugins:{
            
            datalabels: {
              
              formatter: function(value){
                return value ;
              }
            }
          },
          title: {
            display: true,
            text: Yearvalue + ' School wise distribution',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20  
  
          },
         
        }
       });
      
    }).fail(function (response) {
      console.log(response.responseText);
    });
    
  }
  })