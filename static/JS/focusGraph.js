$("#getFocusYear").click(function (event) {
    
  
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
      
      Yearvalue = $("#focusYearVal").val()
    
      let noofStd = response.datas
      let counterSecs=0
      let counterSlass = 0
      let counterSob = 0
      let counterOther = 0
      let counterAutumn = 0
      let counterSummer = 0
      let counterSpring = 0
      let counterSls=0
      let counterBBAMis= 0
      let counterBBAFin=0
      let counterInvestMgt=0
      let counterBBAACN=0
      let counterBBAMGT=0
      let counterIB=0
      let counterMkt=0
      let counterHR=0
      let counterEco=0
      let counterYearlyMkt=0
      let counterYearlyMis=0
      let counterYearlyMgt=0
      let counterYearlyInvest=0
      let counterYearlyIb=0
      let counterYearlyHrm=0
      let counterYearlyFin=0
      let counterYearlyEcn=0
      let counterYearlyAcn=0


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
          if (item.year == Yearvalue && item.Major== "BBA - Management Information Systems") {
            counterBBAMis = counterBBAMis + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - Finance") {
            counterBBAFin = counterBBAFin + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - Investment Management") {
            counterInvestMgt = counterInvestMgt + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - Accounting") {
            counterBBAACN = counterBBAACN + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - General Management") {
            counterBBAMGT = counterBBAMGT + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - Human Resources Management") {
            counterHR = counterHR + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - International Business") {
            counterIB = counterIB + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BBA - Marketing") {
            counterMkt = counterMkt + Number(item.no_of_Student)
            
          }
          if (item.year == Yearvalue && item.Major== "BSc - Economics") {
            counterEco = counterEco + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - Management Information Systems") {
            counterYearlyMis = counterYearlyMis + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - Finance") {
            counterYearlyFin = counterYearlyFin + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - Investment Management") {
            counterYearlyInvest = counterYearlyInvest + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - Accounting") {
            counterYearlyAcn = counterYearlyAcn + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - General Management") {
            counterYearlyMgt = counterYearlyMgt + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - Human Resources Management") {
            counterYearlyHrm = counterYearlyHrm + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - International Business") {
            counterYearlyIb = counterYearlyIb + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BBA - Marketing") {
            counterYearlyMkt = counterYearlyMkt + Number(item.no_of_Student)
            
          }
          if (item.year == i && item.Major== "BSc - Economics") {
            counterYearlyEcn = counterYearlyEcn + Number(item.no_of_Student)
            
          }
  
        });
        numberYearlyMgt.push(counterYearlyMgt)
        numberYearlyMis.push(counterYearlyMis)
        numberYearlyMkt.push(counterYearlyMkt)
        numberYearlyMis.push(counterYearlyMis)
        numberYearlyInvest.push(counterYearlyInvest)
        numberYearlyIb.push(counterYearlyIb)
        numberYearlyHrm.push(counterYearlyHrm)
        numberYearlyFin.push(counterYearlyFin)
        numberYearlyEcn.push(counterYearlyEcn)
        numberYearlyAcn.push(counterYearlyAcn)
        numberBBA.push(counterBBAMis)
        numberBBA.push(counterBBAFin)
        numberBBA.push(counterInvestMgt)
        numberBBA.push(counterBBAACN)
        numberBBA.push(counterBBAMGT)
        numberBBA.push(counterHR)
        numberBBA.push(counterIB)
        numberBBA.push(counterMkt)
        numberBBA.push(counterEco) 

        
      
        
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

         counterYearlyMkt=0
         counterYearlyMis=0
        counterYearlyMgt=0
         counterYearlyInvest=0
         counterYearlyIb=0
         counterYearlyHrm=0
         counterYearlyFin=0
         counterYearlyEcn=0
         counterYearlyAcn=0
        
        counterYearlyMis=0
        counterEco=0
        counterIB=0
        counterMkt=0
        counterHR=0
        counterBBAMGT=0
        counterBBAACN=0
        counterInvestMgt=0
        counterSls=0
        counterAutumn = 0
        counterSecs = 0
        counterSpring = 0
        counterSummer = 0
        counterSlass = 0
        counterSob = 0
        counterOther = 0
        counterBBAMis=0
        counterBBAFin=0
  
      }
     
      
      var ctx = document.getElementById('myChart');
      
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          
          labels: ['Autumn', 'Spring', 'Summer'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [SemesterDist[0], SemesterDist[1], SemesterDist[2]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          
          title: {
            display: true,
            text: Yearvalue + ' @ IUB',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
  
          },
  
          
        }
      });
      var ctx = document.getElementById('myChart1');
      var myChart1 = new Chart(ctx, {
        type: 'pie',
        data: {
         
          labels: ['Slass', 'SoB','Others','Secs','Sls'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [numberBbaSemester[0], numberBbaSemester[1], numberBbaSemester[2],numberBbaSemester[3],numberBbaSemester[4],numberBbaSemester[5]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          plugins:{
            
            datalabels: {
              
              formatter: function(value){
                return value + ' (100%) ';
              }
            }
          },
          title: {
            display: true,
            text: Yearvalue + ' School wise distribution',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
  
          },
         
        }
      });
      var ctx = document.getElementById('myChart2');
      var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          
          labels: ['Management Information Systems', 'Finance', 'Investment Management','Accounting', 'General Management','Human Resources Management', 'International Business','Marketing','Economics'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [numberBBA[0],numberBBA[1],numberBBA[2],numberBBA[3],numberBBA[4],numberBBA[5],numberBBA[6],numberBBA[7],numberBBA[8]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          plugins:{
            
            labels: {
              render: 'percentage',
             
              precision: 2
            }
          },
          
          title: {
            display: true,
            text: Yearvalue + ' @ SOB',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
  
          },
  
          
        }
      });
      var ctx = document.getElementById('myChart3');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          
          labels: ['Management Information Systems', 'Finance', 'Investment Management','Accounting', 'General Management','Human Resources Management', 'International Business','Marketing','Economics'],
          datasets: [{
            label: 'School of Business ' + Yearvalue,
            data: [numberBBA[0],numberBBA[1],numberBBA[2],numberBBA[3],numberBBA[4],numberBBA[5],numberBBA[6],numberBBA[7],numberBBA[8]],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          
          title: {
            display: true,
            text: Yearvalue + ' @ SOB',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
  
          },
  
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      var ctx = document.getElementById('myChart4');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          
          labels: [2013,2014,2015,2016,2017,2018,2019],
          datasets: [{
            label: 'Management Information System',
            data:  [numberYearlyMis[0],numberYearlyMis[1],numberYearlyMis[2],numberYearlyMis[3],numberYearlyMis[4],numberYearlyMis[5],numberYearlyMis[6],numberYearlyMis[7],],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
               
            ],
            borderWidth: 2
          
          },
          {
            label: 'Marketing',
            data: [numberYearlyMkt[0],numberYearlyMkt[1],numberYearlyMkt[2],numberYearlyMkt[3],numberYearlyMkt[4],numberYearlyMkt[5],numberYearlyMkt[6],numberYearlyMkt[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'Accounting',
            data: [numberYearlyAcn[0],numberYearlyAcn[1],numberYearlyAcn[2],numberYearlyAcn[3],numberYearlyAcn[4],numberYearlyAcn[5],numberYearlyAcn[6],numberYearlyAcn[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },{
            label: 'Finance',
            data: [numberYearlyFin[0],numberYearlyFin[1],numberYearlyFin[2],numberYearlyFin[3],numberYearlyFin[4],numberYearlyFin[5],numberYearlyFin[6],numberYearlyFin[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'General Management',
            data: [numberYearlyMgt[0],numberYearlyMgt[1],numberYearlyMgt[2],numberYearlyMgt[3],numberYearlyMgt[4],numberYearlyMgt[5],numberYearlyMgt[6],numberYearlyMgt[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'Human Resources Management',
            data: [numberYearlyHrm[0],numberYearlyHrm[1],numberYearlyHrm[2],numberYearlyHrm[3],numberYearlyHrm[4],numberYearlyHrm[5],numberYearlyHrm[6],numberYearlyHrm[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
           {
            label: 'International Business',
            data: [numberYearlyIb[0],numberYearlyIb[1],numberYearlyIb[2],numberYearlyIb[3],numberYearlyIb[4],numberYearlyIb[5],numberYearlyIb[6],numberYearlyIb[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'Investment Management',
            data: [numberYearlyInvest[0],numberYearlyInvest[1],numberYearlyInvest[2],numberYearlyInvest[3],numberYearlyInvest[4],numberYearlyInvest[5],numberYearlyInvest[6],numberYearlyInvest[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },{
            label: 'Economics',
            data: [numberYearlyEcn[0],numberYearlyEcn[1],numberYearlyEcn[2],numberYearlyEcn[3],numberYearlyEcn[4],numberYearlyEcn[5],numberYearlyEcn[6],numberYearlyEcn[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
      
        ]

  
        },
        options: {
          
          title: {
            display: true,
            text: Yearvalue + ' @ SOB',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
  
          },
  
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                
                beginAtZero: true
              }
            }]
          }
        }
      });
      var ctx = document.getElementById('myChart5');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          
          labels: [2013,2014,2015,2016,2017,2018,2019],
          datasets: [{
            label: 'Management Information System',
            fill: false,
            data:  [numberYearlyMis[0],numberYearlyMis[1],numberYearlyMis[2],numberYearlyMis[3],numberYearlyMis[4],numberYearlyMis[5],numberYearlyMis[6],numberYearlyMis[7],],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
               
            ],
            borderWidth: 2
          
          },
          {
            label: 'Marketing',
            fill: false,
            data: [numberYearlyMkt[0],numberYearlyMkt[1],numberYearlyMkt[2],numberYearlyMkt[3],numberYearlyMkt[4],numberYearlyMkt[5],numberYearlyMkt[6],numberYearlyMkt[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'Accounting',
            fill: false,
            data: [numberYearlyAcn[0],numberYearlyAcn[1],numberYearlyAcn[2],numberYearlyAcn[3],numberYearlyAcn[4],numberYearlyAcn[5],numberYearlyAcn[6],numberYearlyAcn[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },{
            label: 'Finance',
            fill: false,
            data: [numberYearlyFin[0],numberYearlyFin[1],numberYearlyFin[2],numberYearlyFin[3],numberYearlyFin[4],numberYearlyFin[5],numberYearlyFin[6],numberYearlyFin[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'General Management',
            fill: false,
            data: [numberYearlyMgt[0],numberYearlyMgt[1],numberYearlyMgt[2],numberYearlyMgt[3],numberYearlyMgt[4],numberYearlyMgt[5],numberYearlyMgt[6],numberYearlyMgt[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'Human Resources Management',
            fill: false,
            data: [numberYearlyHrm[0],numberYearlyHrm[1],numberYearlyHrm[2],numberYearlyHrm[3],numberYearlyHrm[4],numberYearlyHrm[5],numberYearlyHrm[6],numberYearlyHrm[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
           {
            label: 'International Business',
            fill: false,
            data: [numberYearlyIb[0],numberYearlyIb[1],numberYearlyIb[2],numberYearlyIb[3],numberYearlyIb[4],numberYearlyIb[5],numberYearlyIb[6],numberYearlyIb[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
          {
            label: 'Investment Management',
            fill: false,
            data: [numberYearlyInvest[0],numberYearlyInvest[1],numberYearlyInvest[2],numberYearlyInvest[3],numberYearlyInvest[4],numberYearlyInvest[5],numberYearlyInvest[6],numberYearlyInvest[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },{
            label: 'Economics',
            fill: false,
            data: [numberYearlyEcn[0],numberYearlyEcn[1],numberYearlyEcn[2],numberYearlyEcn[3],numberYearlyEcn[4],numberYearlyEcn[5],numberYearlyEcn[6],numberYearlyEcn[7],],
            backgroundColor: [
              'rgba(38, 185, 154, 0.31)',
                
            ],
            borderColor: [
              'rgba(38, 185, 154, 0.7)',
               
            ],
            borderWidth: 2


          },
      
        ]

  
        },
        options: {
          scales: {
            yAxes: [{
                
            }]
        },
          
          title: {
            display: true,
            text: Yearvalue + ' @ SOB',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
  
          },
  
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
  
  
    }).fail(function (response) {
      console.log(response.responseText);
    });
    
  })