

$("#getFocusYear").click(function (event) {
    
  
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
        console.log("hello")
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
      let numberOfSls=[]
      let numberOfSlass = []
      let numberOfSob = []
      let numberOfOth = []
      let numberOfSecs = []
      let numberOfAutumn = []
      let numberOfSummer = []
      let numberOfSpring = []
      let numberOfBBAMis=[]
      let numberofBBAfin=[]
      let numberOFInvestMgt=[]
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
  
        }
  
  
  
        );
        numberOfSlass.push(counterSlass)
        numberOfSob.push(counterSob)
        numberOfOth.push(counterOther)
        numberOfSecs.push(counterSecs)
        numberOfAutumn.push(counterAutumn)
        numberOfSpring.push(counterSpring)
        numberOfSummer.push(counterSummer)
        numberOfSls.push(counterSls)
        numberOfBBAMis.push(counterBBAMis)
        numberofBBAfin.push(counterBBAFin)
        numberOFInvestMgt.push(counterInvestMgt)
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
         
          labels: ['Spring', 'Summer', 'Autumn'],
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
          
          labels: ['Spring', 'Summer', 'Autumn'],
          datasets: [{
            label: 'Number Of Students in ' + Yearvalue,
            data: [numberOfBBAMis[0],numberofBBAfin[0],numberOFInvestMgt[0]],
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