// Major Wise students' interest @ SECS LINE
$("#MajorWiseStudentsSECS").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
    //   console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterCE = 0
      let counterCSE = 0
      let counterETE = 0
      let counterPhy = 0
      let counterCS = 0
      let counterEEE = 0
      let countermaths = 0
      let counterDeptCSE = 0
      let counterDeptEEE = 0
      let counterDeptPhySci = 0
      let numberOfCE = []
      let numberOfmaths = []
      let numberOfCSE = []
      let numberOfETE = []
      let numberOfPhy = []
      let numberOfCS = []
      let numberOfEEE = []
      let numberOfDeptCSE = []
      let numberOfDeptEEE = []
      let numberOfDeptPhySci = []

      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i && item.Major == "BSc - Computer Engineering") {
                counterCE = counterCE + Number(item.no_of_Student)
                    // console.log(counterCE)
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

            if (item.year == i && item.Dept == "CSE") {
                counterDeptCSE = counterDeptCSE + Number(item.no_of_Student)
                   
            }

            if (item.year == i && item.Dept == "EEE") {
                counterDeptEEE = counterDeptEEE + Number(item.no_of_Student)
                }

                if (item.year == i && item.Dept == "PhySci") {
                    counterDeptPhySci = counterDeptPhySci + Number(item.no_of_Student)
                    }

          
          });

  
        numberOfCE.push(counterCE)
        numberOfEEE.push(counterEEE)
        numberOfETE.push(counterETE)
        numberOfCSE.push(counterCSE)
        numberOfPhy.push(counterPhy)
        numberOfmaths.push(countermaths)
        numberOfCS.push(counterCS)
        numberOfDeptCSE.push(counterDeptCSE)
        numberOfDeptEEE.push(counterDeptEEE)
        numberOfDeptPhySci.push(counterDeptPhySci)
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
      }
    //   Line graph
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            label: 'Number Of Students in Computer Engineering',
            fill: false,
            data: [numberOfCE[0], numberOfCE[1], numberOfCE[2], numberOfCE[3], numberOfCE[4], numberOfCE[5], numberOfCE[6], numberOfCE[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }, {
            label: 'Number Of Students in Electrical and Electronic Engineering',
            fill: false,
            data: [numberOfEEE[0], numberOfEEE[1], numberOfEEE[2], numberOfEEE[3], numberOfEEE[4], numberOfEEE[5], numberOfEEE[6], numberOfEEE[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Electronic and Telecommunication Engineering',
            fill: false,
            data: [numberOfETE[0], numberOfETE[1], numberOfETE[2], numberOfETE[3], numberOfETE[4], numberOfETE[5], numberOfETE[6], numberOfETE[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Computer Science and Engineering',
            fill: false,
            data: [numberOfCSE[0], numberOfCSE[1], numberOfCSE[2], numberOfCSE[3], numberOfCSE[4], numberOfCSE[5], numberOfCSE[6], numberOfCSE[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Computer Science',
            fill: false,
            data: [numberOfCS[0], numberOfCS[1], numberOfCS[2], numberOfCS[3], numberOfCS[4], numberOfCS[5], numberOfCS[6], numberOfCS[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Physics',
            fill: false,
            data: [numberOfPhy[0], numberOfPhy[1], numberOfPhy[2], numberOfPhy[3], numberOfPhy[4], numberOfPhy[5], numberOfPhy[6], numberOfPhy[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Maths',
            fill: false,
            data: [numberOfmaths[0], numberOfmaths[1], numberOfmaths[2], numberOfmaths[3], numberOfmaths[4], numberOfmaths[5], numberOfmaths[6], numberOfmaths[7],],
  
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

    //   Area under the graph
      var ctx = document.getElementById('myChart1');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [ {
            label: 'Number Of Students in Maths',
            // fill: false,
            data: [numberOfmaths[0], numberOfmaths[1], numberOfmaths[2], numberOfmaths[3], numberOfmaths[4], numberOfmaths[5], numberOfmaths[6], numberOfmaths[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },              
            
            {
            label: 'Number Of Students in Computer Engineering',
            // fill: false,
            data: [numberOfCE[0], numberOfCE[1], numberOfCE[2], numberOfCE[3], numberOfCE[4], numberOfCE[5], numberOfCE[6], numberOfCE[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }, {
            label: 'Number Of Students in Electrical and Electronic Engineering',
            // fill: false,
            data: [numberOfEEE[0], numberOfEEE[1], numberOfEEE[2], numberOfEEE[3], numberOfEEE[4], numberOfEEE[5], numberOfEEE[6], numberOfEEE[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Electronic and Telecommunication Engineering',
            // fill: false,
            data: [numberOfETE[0], numberOfETE[1], numberOfETE[2], numberOfETE[3], numberOfETE[4], numberOfETE[5], numberOfETE[6], numberOfETE[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Computer Science and Engineering',
            // fill: false,
            data: [numberOfCSE[0], numberOfCSE[1], numberOfCSE[2], numberOfCSE[3], numberOfCSE[4], numberOfCSE[5], numberOfCSE[6], numberOfCSE[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Computer Science',
            // fill: false,
            data: [numberOfCS[0], numberOfCS[1], numberOfCS[2], numberOfCS[3], numberOfCS[4], numberOfCS[5], numberOfCS[6], numberOfCS[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Physics',
            // fill: false,
            data: [numberOfPhy[0], numberOfPhy[1], numberOfPhy[2], numberOfPhy[3], numberOfPhy[4], numberOfPhy[5], numberOfPhy[6], numberOfPhy[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
         
          ]
  
        },
        options: {
          scales: {
            yAxes: [{  stacked: true,
              ticks: {  min: 0,
                max: 1600,
                stepSize: 100,
                beginAtZero: true
              }
            }]
          }
        }
      });

    //   SECS Dept
      var ctx = document.getElementById('myChart2');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [ {
            label: 'Number Of Students in EEE',
            fill: false,
            data: [numberOfDeptEEE[0], numberOfDeptEEE[1], numberOfDeptEEE[2], numberOfDeptEEE[3], numberOfDeptEEE[4], numberOfDeptEEE[5], numberOfDeptEEE[6], numberOfDeptEEE[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },  
            {
            label: 'Number Of Students in Computer Science Engineering',
            fill: false,
            data: [numberOfDeptCSE[0], numberOfDeptCSE[1], numberOfDeptCSE[2], numberOfDeptCSE[3], numberOfDeptCSE[4], numberOfDeptCSE[5], numberOfDeptCSE[6], numberOfDeptCSE[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          },  {
            label: 'Number Of Students in Physical Sciences',
            fill: false,
            data: [numberOfDeptPhySci[0], numberOfDeptPhySci[1], numberOfDeptPhySci[2], numberOfDeptPhySci[3], numberOfDeptPhySci[4], numberOfDeptPhySci[5], numberOfDeptPhySci[6], numberOfDeptPhySci[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
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

      var ctx = document.getElementById('myChart3');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [ {
            label: 'Number Of Students in EEE',
            fill: false,
            data: [numberOfDeptEEE[0], numberOfDeptEEE[1], numberOfDeptEEE[2], numberOfDeptEEE[3], numberOfDeptEEE[4], numberOfDeptEEE[5], numberOfDeptEEE[6], numberOfDeptEEE[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },  
            {
            label: 'Number Of Students in Computer Science Engineering',
            fill: false,
            data: [numberOfDeptCSE[0], numberOfDeptCSE[1], numberOfDeptCSE[2], numberOfDeptCSE[3], numberOfDeptCSE[4], numberOfDeptCSE[5], numberOfDeptCSE[6], numberOfDeptCSE[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          },  {
            label: 'Number Of Students in Physical Sciences',
            fill: false,
            data: [numberOfDeptPhySci[0], numberOfDeptPhySci[1], numberOfDeptPhySci[2], numberOfDeptPhySci[3], numberOfDeptPhySci[4], numberOfDeptPhySci[5], numberOfDeptPhySci[6], numberOfDeptPhySci[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
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
            yAxes: [{  stacked: true,
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


  