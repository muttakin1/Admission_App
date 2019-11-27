
//Number of Students
$("#getline").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
   
      let noofStd = response.datas

      startYear =$("#startYearVal").val()
      finishYear =$("#finishYearVal").val()
  
      let counter = 0
      let numberOfStd = []
      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i) {
            counter = counter + Number(item.no_of_Student)
          }
        }
  
        );
        numberOfStd.push(counter)
        counter = 0
      }
      console.log(numberOfStd)
  
  
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students',
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
  
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var dataset = data.datasets[tooltipItem.datasetIndex];
                var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                  return previousValue + currentValue;
                });
                var currentValue = dataset.data[tooltipItem.index];
                var percentage = Math.floor(((currentValue/total) * 100)+0.5);         
                return percentage + "%";
              }
            }
          }
        }
      });
  
    }).fail(function (response) {
      console.log(response.responseText);
    });
    
  })
  
  
  $("#schoolWise").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
      console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterSLS = 0
      let counterSESM_PHARM = 0
      let numberOfStd = []
      let numberOfSob = []
      let numberOfOth = []
      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i && item.School == "SECS") {
            counter = counter + Number(item.no_of_Student)
  
          }
          else if (item.year == i && item.School == "SoB") {
            counterSLS = counterSLS + Number(item.no_of_Student)
          }
  
          else if (item.year == i && (item.School == "Phar" || item.School == "SESM" || item.School == "SLASS" || item.School == "SLS")) {
            counterSESM_PHARM = counterSESM_PHARM + Number(item.no_of_Student)
          }
  
        }
  
        );
  
        numberOfStd.push(counter)
        numberOfSob.push(counterSLS)
        numberOfOth.push(counterSESM_PHARM)
        counter = 0
        counterSLS = 0
        counterSESM_PHARM = 0
      }
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students in SECS',
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
  
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }, {
            lineTension:0.1,
            label: 'Number Of Students in SoB',
            data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Others',
            data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
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
  
  $("#barSchoolWise").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
      console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterSLS = 0
      let counterSESM_PHARM = 0
      let counterSlass = 0
      let counterSls = 0
      let numberOfStd = []
      let numberOfSob = []
      let numberOfOth = []
      let numberOfSlass = []
      let numberOfSls = []
      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i && item.School == "SECS") {
            counter = counter + Number(item.no_of_Student)
  
          }
          else if (item.year == i && item.School == "SoB") {
            counterSLS = counterSLS + Number(item.no_of_Student)
          }
  
          else if (item.year == i && (item.School == "Phar" || item.School == "SESM")) {
            counterSESM_PHARM = counterSESM_PHARM + Number(item.no_of_Student)
          }
          else if (item.year == i && item.School == "SLASS") {
            counterSlass = counterSlass + Number(item.no_of_Student)
          }
          else if (item.year == i && item.School == "SLS") {
            counterSls = counterSls + Number(item.no_of_Student)
          }
  
        }
  
        );
  
        numberOfStd.push(counter)
        numberOfSob.push(counterSLS)
        numberOfOth.push(counterSESM_PHARM)
        numberOfSlass.push(counterSlass)
        numberOfSls.push(counterSls)
        counter = 0
        counterSLS = 0
        counterSESM_PHARM = 0
        counterSls = 0
        counterSlass = 0
      }
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            label: 'Number Of Students in SECS',
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
  
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 2
          }, {
            label: 'Number Of Students in SoB',
            data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in SESM+PHARM',
            data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          { 
            label: 'Number Of Students in Slass',
            data: [numberOfSlass[0], numberOfSlass[1], numberOfSlass[2], numberOfSlass[3], numberOfSlass[4], numberOfSlass[5], numberOfSlass[6], numberOfSlass[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in SLS',
            data: [numberOfSls[0], numberOfSls[1], numberOfSls[2], numberOfSls[3], numberOfSls[4], numberOfSls[5], numberOfSls[6], numberOfSls[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
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
  
  
  
  
  $("#OtherWise").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
      console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterSLS = 0
      let counterSESM_PHARM = 0
      let numberOfStd = []
      let numberOfSob = []
      let numberOfOth = []
      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i && item.School == "SLASS") {
            counter = counter + Number(item.no_of_Student)
  
          }
          else if (item.year == i && item.School == "SLS") {
            counterSLS = counterSLS + Number(item.no_of_Student)
          }
  
          else if (item.year == i && (item.School == "Phar" || item.School == "SESM")) {
            counterSESM_PHARM = counterSESM_PHARM + Number(item.no_of_Student)
          }
  
        }
  
        );
  
        numberOfStd.push(counter)
        numberOfSob.push(counterSLS)
        numberOfOth.push(counterSESM_PHARM)
        counter = 0
        counterSLS = 0
        counterSESM_PHARM = 0
      }
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students in Slass',
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
  
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }, {
            lineTension:0.1,
            label: 'Number Of Students in SLS',
            data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Sesm+Phar',
            data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
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
  
  