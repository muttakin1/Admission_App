// myChart and myChart1: Focus year @ IUB AND Focus year schoolwise distribution
$("#overall").click(function (event) {
    
    var sYear = document.getElementById('startYearVal').value;
    var finYear = document.getElementById('startYearVal').value;
    var focusYear = document.getElementById('startYearVal').value;
    
    
      if(sYear.value<2013 || finYear<2013 || focusYear<2013 ||
        sYear.value>2020 || finYear>2020 || focusYear>2020){
       alert("Please Enter Year between 2013 to 2019!");
    }
    else{
      
      // Get method for focusgraphs
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
        
        let numberSemester=[]
  
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
        
          
           numberSemester.push(counterSlass)
           numberSemester.push(counterSob)
           numberSemester.push(counterOther)
           numberSemester.push(counterSecs)
          numberSemester.push(counterSls)
          
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
              data: [numberSemester[0], numberSemester[1], numberSemester[2],numberSemester[3],numberSemester[4]],
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

    
//myChart2: Number of Students
$("#overall").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) { 
      let noofStd = response.datas
  
      startYear =$("#startYearVal").val()
      finishYear =$("#finishYearVal").val()
      
     // Yearly semester wise SECS
    let counterSpring = 0
    let counterAutumn = 0
    let counterSummer = 0

    let numberAutumn=[]
    let numberSpring=[]
    let numberSummer=[]   

      let counter = 0
      let numberOfStd = []
     
      let year=[]
      for (let i = startYear; i <= finishYear; i++) {
        year.push(Number(i))
          noofStd.forEach((item, index) => {
            if (item.year == i) {
              counter = counter + Number(item.no_of_Student)
            }

              // Yearly semester wise SECS
        if (item.year == i  && item.Semester == "3") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i  && item.Semester == "1") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i  && item.Semester == "2") {
          counterSummer = counterSummer + Number(item.no_of_Student)

        }
          }
        );
        numberOfStd.push(counter)
      // Yearly semester wise SECS
      numberAutumn.push(counterAutumn)
      numberSpring.push(counterSpring)
      numberSummer.push(counterSummer) 

      // reinitializing the counter
      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0
      counter = 0
      }
      console.log(numberOfStd)
    
      var ctx = document.getElementById('myChart3');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: year,
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
            text: 'Number of Students over the years',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20  
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

       // Yearly semester wise Number of Students
    var ctx = document.getElementById('myChart2');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: year,
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
          text: 'Yearly semester wise Number of Students',
          fontSize:20  
         
          
        }
      }
    });

    }).fail(function (response) {
      console.log(response.responseText);
    });   
  })
    
 // myChart3: Schoolwise Interest in IUB (line)
 $("#overall").click(function (event) {
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
      
    let year=[]
    for (let i = startYear; i <= finishYear; i++) {
      year.push(Number(i))
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
      });
  
      // numberOfStd.push(counter)
      // numberOfSob.push(counterSLS)
      // numberOfOth.push(counterSESM_PHARM)
      // counter = 0
      // counterSLS = 0
      // counterSESM_PHARM = 0

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
      type: 'line',
      data:
      {
        labels: year,
        datasets: [{
          lineTension:0.1,
          label: 'Number Of Students in SECS',
          data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
  
          backgroundColor: [
              'rgba(228,108,10, 1)',
          ],
          borderColor: [
            'rgba(228,108,10, 1)',
          ],
          borderWidth: 2
        }, 
        {
          lineTension:0.1,
          label: 'Number Of Students in SoB',
          data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],
  
          backgroundColor: [
              'rgba(31,73,125,1)',
          ],
          borderColor: [
            'rgba(31,73,125,1)',
          ],
          borderWidth: 2
        },
      //   {
      //     lineTension:0.1,
      //     label: 'Number Of Students in Others',
      //     data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
  
      //     backgroundColor: [
      //         'rgba(128,100,162,1)',
      //     ],
      //     borderColor: [
      //       'rgba(128,100,162,1)',
      //     ],
      //     borderWidth: 2
      //   },

      {
          lineTension:0.1,
          label: 'Number Of Students in SESM+PHARM',
          data: [numberOfOth[0], numberOfOth[1], numberOfOth[2], numberOfOth[3], numberOfOth[4], numberOfOth[5], numberOfOth[6], numberOfOth[7],],
          
          backgroundColor: [
            'rgba(128,100,162,1)',
          ],
          borderColor: [
            'rgba(128,100,162,1)',
          ],
          borderWidth: 2
        },
        { 
          lineTension:0.1,
          label: 'Number Of Students in Slass',
          data: [numberOfSlass[0], numberOfSlass[1], numberOfSlass[2], numberOfSlass[3], numberOfSlass[4], numberOfSlass[5], numberOfSlass[6], numberOfSlass[7],],

          backgroundColor: [
            'rgba(166,166,166,1)',
          ],

          borderColor: [
            'rgba(166,166,166,1)',
          ],
          borderWidth: 2
        },
        {
          lineTension:0.1,
          label: 'Number Of Students in SLS',
          data: [numberOfSls[0], numberOfSls[1], numberOfSls[2], numberOfSls[3], numberOfSls[4], numberOfSls[5], numberOfSls[6], numberOfSls[7],],

          backgroundColor: [
            'rgba(155,187,89,1)',
          ],

          borderColor: [
            'rgba(155,187,89,1)',

          ],
          borderWidth: 2
          },
          ]
  
        },
      options: {
        scales: {
          xAxes: [{ stacked : true
          }],
          yAxes: [{ stacked : true,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        title: {
          display: true,
          text: 'Schoolwise interest in IUB',
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20    
        }
           
      }
    });

  }).fail(function (response) {
    console.log(response.responseText);
  });  
})
    
    // myChart4: Schoolwise Interest in IUB (bar)
    $("#overall").click(function (event) {
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
        
        let year=[]
        for (let i = startYear; i <= finishYear; i++) {
          year.push(Number(i))
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
        var ctx = document.getElementById('myChart5');
        var myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: year,
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
               text: 'Schoolwise interest in IUB',
               fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
               fontSize:20  
              
               }
             
          }
        });
    
      }).fail(function (response) {
        console.log(response.responseText);
      });
    
    })
    
    // myChart5: Other Schools
    $("#overall").click(function (event) {
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
        
        let year=[]
        for (let i = startYear; i <= finishYear; i++) {
          year.push(Number(i))
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
        var ctx = document.getElementById('myChart6');
        var myChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: year,
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
              text: 'Number of Students of SLASS, SLS, SESM+Pharma',
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize:20  
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
        removeCanvas();

    
      }).fail(function (response) {
        console.log(response.responseText);
      });
      
    })