

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
      let numberBBA=[]
      
      let numberOfSls=[]
      let numberOfSlass = []
      let numberOfSob = []
      let numberOfOth = []
      let numberOfSecs = []
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
  
        }
  
  
  
        );
        numberBBA.push(counterBBAMis)
        numberBBA.push(counterBBAFin)
        numberBBA.push(counterInvestMgt)
        numberBBA.push(counterBBAACN)
        numberBBA.push(counterBBAMGT)
        numberBBA.push(counterHR)
        numberBBA.push(counterIB)
        numberBBA.push(counterMkt)
        numberBBA.push(counterEco) 

      
        numberOfSlass.push(counterSlass)
        numberOfSob.push(counterSob)
        numberOfOth.push(counterOther)
        numberOfSecs.push(counterSecs)
        numberOfAutumn.push(counterAutumn)
        numberOfSpring.push(counterSpring)
        numberOfSummer.push(counterSummer)
        numberOfSls.push(counterSls)
       
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
          
          labels: ['Spring', 'Summer', 'Autumn'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [numberOfAutumn[0], numberOfSpring[0], numberOfSummer[0]],
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
  
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
      var ctx = document.getElementById('myChart1');
      var myChart1 = new Chart(ctx, {
        type: 'pie',
        data: {
         
          labels: ['SLS', 'Slass', 'SoB','Others','Secs'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [numberOfSls[0], numberOfSlass[0], numberOfSob[0],numberOfOth[0],numberOfSecs[0]],
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
            
            labels: {
              render: 'percentage',
             
              precision: 2
            }
          },
          title: {
            display: true,
            text: Yearvalue + ' School wise distribution',
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
  
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
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
  
    }).fail(function (response) {
      console.log(response.responseText);
    });
    
  })