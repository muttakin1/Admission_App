
//Number of Students
$("#getFocusYear").click(function (event) {
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
  
  
      var ctx = document.getElementById('myChart2');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students',
            fill: false,
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
            backgroundColor: [
              'rgba(79, 129, 189, 0.2)',
  
            ],
            borderColor: [
              'rgba(79, 129, 189, 1)',
  
            ],
            borderWidth: 2
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Number of Students over the years'
          },
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
  
  
  $("#getFocusYear").click(function (event) {
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
      var ctx = document.getElementById('myChart1');
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
  
  $("#getFocusYear").click(function (event) {
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
      var ctx = document.getElementById('myChart4');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            label: 'Number Of Students in SECS',
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
  
            backgroundColor: [
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
            ],
            borderColor: [
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
              'rgba(228,108,10, 1)',
            ],
            borderWidth: 2
          }, {
            label: 'Number Of Students in SoB',
            data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],
            
            backgroundColor: [
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
            ],

            borderColor: [
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
              'rgba(31,73,125,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in SESM+PHARM',
            data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
            
            backgroundColor: [
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
            ],

            borderColor: [
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
              'rgba(128,100,162,1)',
  
            ],
            borderWidth: 2
          },
          { 
            label: 'Number Of Students in Slass',
            data: [numberOfSlass[0], numberOfSlass[1], numberOfSlass[2], numberOfSlass[3], numberOfSlass[4], numberOfSlass[5], numberOfSlass[6], numberOfSlass[7],],
  
            backgroundColor: [
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
            ],

            borderColor: [
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
              'rgba(166,166,166,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in SLS',
            data: [numberOfSls[0], numberOfSls[1], numberOfSls[2], numberOfSls[3], numberOfSls[4], numberOfSls[5], numberOfSls[6], numberOfSls[7],],
  
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
          ]
  
        },
        options: {
          scales: {
            xAxes: [{
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]},
           title: {
             display: true,
             text: 'Yearly semester wise SESM',
            
             }
           
        }
      });
  
    }).fail(function (response) {
      console.log(response.responseText);
    });
  
  })
  
  
  
  
  $("#getFocusYear").click(function (event) {
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
      var ctx = document.getElementById('myChart3');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students in Slass',
            fill:false,
            data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
  
            borderColor: [
              'rgba(166, 166, 166, 1)',
  
            ],
            borderWidth: 2
          }, {
            lineTension:0.1,
            label: 'Number Of Students in SLS',
            fill:false,
            data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],
  
            borderColor: [
              'rgba(54,186,88,1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Sesm+Phar',
            fill:false,
            data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
  
            borderColor: [
              'rgba(112, 48, 160, 1)',
  
            ],
            borderWidth: 2
          },
          ]
  
        },
        options: {
          title: {
            display: true,
            text: 'Major wise Students interest @ SLASS'
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
  
  