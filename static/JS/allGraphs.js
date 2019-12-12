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
$("#getFocusYear").click(function (event) {
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



    
//myChart2: Number of Students
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
     
      let year=[]
      for (let i = startYear; i <= finishYear; i++) {
        year.push(Number(i))
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
    }).fail(function (response) {
      console.log(response.responseText);
    });   
  })
    
 // myChart3: Schoolwise Interest in IUB (line)
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
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
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
              text: 'Other Schools',
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
    
      }).fail(function (response) {
        console.log(response.responseText);
      });
      
    })
  

    // SECS Graphs: myChart6 to myChart12

    $("#getFocusYear").click(function (event) {        
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
    
        let year=[]
        for (let i = startYear; i <= finishYear; i++) {
          year.push(Number(i))
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
        var ctx = document.getElementById('myChart7');
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
                text: 'SECS Majors ' + Yearvalue,
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontSize:20  
              },
      
              
            }
          });
    
          var ctx = document.getElementById('myChart9');
          var myChart7 = new Chart(ctx, {
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
        
        var ctx = document.getElementById('myChart8');
         myChart8 = new Chart(ctx, {
          type: 'line',
          data:{
            labels: year,
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
      //  console.log(myChart2)
        
    
        //   Area under the graph
        var ctx = document.getElementById('myChart10');
        myChart9 = new Chart(ctx, {
          type: 'line',
          data: {
            labels: year,
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
        var ctx = document.getElementById('myChart11');
         myChart10 = new Chart(ctx, {
          type: 'line',
          data: {
            labels: year,
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
        var ctx = document.getElementById('myChart12');
        myChart11 = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: year,
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
        var ctx = document.getElementById('myChart13');
        var myChart12 = new Chart(ctx, {
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
              text: 'Yearly semester wise SECS',
              fontSize:20  
             
              
            }
          }
        });
    
      }).fail(function (response) {
        console.log(response.responseText);
      });
    })
    

// SESM Graphs myChart13 to myChart17
$("#getFocusYear").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    //    console.log(response)
    let noofStd = response.datas
    Yearvalue = $("#focusYearVal").val()
    startYear = $("#startYearVal").val()
    finishYear = $("#finishYearVal").val()
    console.log(Yearvalue)

    let counterSESMAutumn = 0
    let counterSESMSpring = 0
    let counterSESMSummer = 0
    let counterYearlyPharmacy = 0
    let counterYearlyENV = 0
    let counterYearlyENV_management = 0
    let counterYearlyPopulation_Env = 0

    // Major wise Students' interest @ SESM
    let counterPharmacy = 0
    let counterENV = 0
    let counterENV_management = 0
    let counterPopulation_Env = 0

    let numberOfPharmacy = []
    let numberOfENV = []
    let numberOfENV_management = []
    let numberOfPoplation_Env = []

    // Yearly semester wise SESM
    let counterSpring = 0
    let counterAutumn = 0
    let counterSummer = 0

    let numberAutumn = []
    let numberSpring = []
    let numberSummer = []


    let numberSESMsemester = []
    let numberYearlySESM = []


    let year=[]
    for (let i = startYear; i <= finishYear; i++) {
      year.push(Number(i))
      noofStd.forEach((item, index) => {
        if (item.year == Yearvalue && item.Semester == "1" && item.School == "SESM") {
          counterSESMAutumn = counterSESMAutumn + Number(item.no_of_Student)

        }
        else if (item.year == Yearvalue && item.Semester == "2" && item.School == "SESM") {
          counterSESMSpring = counterSESMSpring + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Semester == "3" && item.School == "SESM") {
          counterSESMSummer = counterSESMSummer + Number(item.no_of_Student)
        }

        // Major wise Student's interest @ SESM
        if (item.year == i && item.Major == "B.Pharm - Pharmacy") {
          counterPharmacy = counterPharmacy + Number(item.no_of_Student)

        }

        else if (item.year == i && (item.Major == "BSc - Environmental Management")) {
          counterENV_management = counterENV_management + Number(item.no_of_Student)
        }

        else if (item.year == i && item.Major == "BSc - Environmental Science") {
          counterENV = counterENV + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "BSc - Population Environment")) {
          counterPopulation_Env = counterPopulation_Env + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Major == "B.Pharm - Pharmacy") {
          counterYearlyPharmacy = counterYearlyPharmacy + Number(item.no_of_Student)

        }

        else if (item.year == Yearvalue && item.Major == "BSc - Environmental Management") {
          counterYearlyENV_management = counterYearlyENV_management + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Environmental Science") {
          counterYearlyENV = counterYearlyENV + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Population Environment") {
          counterYearlyPopulation_Env = counterYearlyPopulation_Env + Number(item.no_of_Student)
        }

        // Yearly semester wise SESM
        if (item.year == i && item.Semester == "3" && item.School == "SESM") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "1" && item.School == "SESM") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "2" && item.School == "SESM") {
          counterSummer = counterSummer + Number(item.no_of_Student)

        }


      });

      numberSESMsemester.push(counterSESMAutumn)
      numberSESMsemester.push(counterSESMSpring)
      numberSESMsemester.push(counterSESMSummer)

      // Major wise Students' interest @ SECS
      numberOfPharmacy.push(counterPharmacy)
      numberOfENV_management.push(counterENV_management)
      numberOfENV.push(counterENV)
      numberOfPoplation_Env.push(counterPopulation_Env)

      numberYearlySESM.push(counterYearlyENV)
      console.log('SESM number'+numberYearlySESM[0])
      numberYearlySESM.push(counterYearlyENV_management)
      numberYearlySESM.push(counterYearlyPharmacy)
      numberYearlySESM.push(counterYearlyPopulation_Env)

      // Yearly semester wise SESM
      numberAutumn.push(counterAutumn)
      numberSpring.push(counterSpring)
      numberSummer.push(counterSummer)

      // reinitializing the counter
      counterYearlyPharmacy = 0
      counterYearlyENV_management = 0
      counterYearlyENV = 0
      counterYearlyPopulation_Env = 0

      counterPharmacy = 0
      counterENV_management = 0
      counterENV = 0
      counterPopulation_Env = 0

      counterSESMSummer = 0
      counterSESMSpring = 0
      counterSESMAutumn = 0

      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0
    }
    console.log(year)

    var ctx = document.getElementById('myChart14');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Environmental Science', 'Environmental Management', 'Pharmacy', 'Population Environment'],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberYearlySESM[0], numberYearlySESM[1], numberYearlySESM[2], numberYearlySESM[3],],
          backgroundColor: [
            'rgba(151, 134, 176, 1)',
            'rgba(119, 90, 157, 1)',
            'rgba(97, 75, 121, 1)',
            'rgba(194, 186, 196, 1)',
          ],
          borderColor: [
            'rgba(151, 134, 176, 1)',
            'rgba(119, 90, 157, 1)',
            'rgba(97, 75, 121, 1)',
            'rgba(194, 186, 196, 1)',
          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value
            }
          }
        },

        title: {
          display: true,
          text: 'SESM Majors ' + Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20  

        },


      }
    });
    var ctx = document.getElementById('myChart15');
    var myChart14 = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Spring', 'Summer', 'Autumn',],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberSESMsemester[0], numberSESMsemester[1], numberSESMsemester[2]],
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
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value
            }
          }
        },

        title: {
          display: true,
          text: Yearvalue + ' @ SESM',
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });


    //   Line graph
    var ctx = document.getElementById('myChart16');
    myChart15 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in Pharmacy',
          fill: false,
          data: [numberOfPharmacy[0], numberOfPharmacy[1], numberOfPharmacy[2], numberOfPharmacy[3], numberOfPharmacy[4], numberOfPharmacy[5], numberOfPharmacy[6], numberOfPharmacy[7],],
          borderColor: [
            'rgba(100, 79, 126, 1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Env Management',
          fill: false,
          data: [numberOfENV_management[0], numberOfENV_management[1], numberOfENV_management[2], numberOfENV_management[3], numberOfENV_management[4], numberOfENV_management[5], numberOfENV_management[6], numberOfENV_management[7],],

          borderColor: [
            'rgba(120, 96, 150, 1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in ENV',
          fill: false,
          data: [numberOfENV[0], numberOfENV[1], numberOfENV[2], numberOfENV[3], numberOfENV[4], numberOfENV[5], numberOfENV[6], numberOfENV[7],],

          borderColor: [
            'rgba(156,139,179,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Population_Env',
          fill: false,
          data: [numberOfPoplation_Env[0], numberOfPoplation_Env[1], numberOfPoplation_Env[2], numberOfPoplation_Env[3], numberOfPoplation_Env[4], numberOfPoplation_Env[5], numberOfPoplation_Env[6], numberOfPoplation_Env[7],],

          borderColor: [
            'rgba(195,187,208,1)',

          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        title: {
          display: true,
          text: 'Major wise Students interest @ SESM+Pharmacy',
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

    //   Area under the graph
    var ctx = document.getElementById('myChart17');
    myChart16 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in Population_ENV',
          // fill: false,
          data: [numberOfPoplation_Env[0], numberOfPoplation_Env[1], numberOfPoplation_Env[2], numberOfPoplation_Env[3], numberOfPoplation_Env[4], numberOfPoplation_Env[5], numberOfPoplation_Env[6], numberOfPoplation_Env[7],],
          backgroundColor: ['rgba(195,187,208, 1)',],
          borderColor: [
            'rgba(195,187,208,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in ENV_Management',
          // fill: false,
          data: [numberOfENV_management[0], numberOfENV_management[1], numberOfENV_management[2], numberOfENV_management[3], numberOfENV_management[4], numberOfENV_management[5], numberOfENV_management[6], numberOfENV_management[7],],
          backgroundColor: ['rgba(120, 96, 150, 1)',],
          borderColor: [
            'rgba(120, 96, 150,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in ENV',
          // fill: false,
          data: [numberOfENV[0], numberOfENV[1], numberOfENV[2], numberOfENV[3], numberOfENV[4], numberOfENV[5], numberOfENV[6], numberOfENV[7],],
          backgroundColor: ['rgba(156,139,179, 1)',],
          borderColor: [
            'rgba(156,139,179,1)',

          ],
          borderWidth: 2
        },

        {
          lineTension: 0.1,
          label: 'Number Of Students in Pharmacy',
          // fill: false,
          data: [numberOfPharmacy[0], numberOfPharmacy[1], numberOfPharmacy[2], numberOfPharmacy[3], numberOfPharmacy[4], numberOfPharmacy[5], numberOfPharmacy[6], numberOfPharmacy[7],],
          backgroundColor: ['rgba(100, 79, 126, 1)',],
          borderColor: [
            'rgba(100, 79, 126, 1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        title: {
          display: true,
          text: 'Major wise Students interest @ SESM+Pharmacy',
          fontSize:20  
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
      // options: {
      //   title: {
      //     display: true,
      //     text: 'Major wise Students interest @ SESM+Pharmacy',
      //     fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
      //   },
      //   scales: {
      //     yAxes: [{ 
      //        stacked: true,
      //       ticks: { 
      //         beginAtZero: true
      //       }
      //     }]
      //   }

      // }
    });

     // Yearly semester wise SESM
     var ctx = document.getElementById('myChart18');
      myChart17 = new Chart(ctx, {
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
          }]},
         title: {
           display: true,
           text: 'Yearly semester wise SESM',
           fontSize:20  
          
           }
         
       }
     });
     
  }).fail(function (response) {
    console.log(response.responseText);
  });
})


// SLASS Graphs myChart18 to myChart24

$("#getFocusYear").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {


    let noofStd = response.datas
    Yearvalue = $("#focusYearVal").val()
    startYear = $("#startYearVal").val()
    finishYear = $("#finishYearVal").val()

    // Focus year graphs, Majors
    let counterYearlyEngLang = 0
    let counterYearlyAnt = 0
    let counterYearlyMedia_Com = 0
    let counterYearlyLaw = 0
    let counterYearlyEngLit = 0
    let counterYearlyGSG = 0
    let counterYearlySOC = 0

    // Focus year graphs, Departments
    let counterYearlyDeptENG = 0
    let counterYearlyDeptSOC = 0
    let counterYearlyDeptGSG = 0
    let counterYearlyDeptMed = 0
    let counterYearlyDeptLaw = 0

    // Major wise Students' interest @ SLASS
    let counterEngTrainingLang = 0
    let counterANT = 0
    let counterMedia_Com = 0
    let counterLaw = 0
    let counterEngLit = 0
    let counterGSG = 0
    let counterSOC = 0

    let numberOfEngTrainingLang = []
    let numberOfSOC = []
    let numberOfANT = []
    let numberOfMedia_Com = []
    let numberOfLaw = []
    let numberOfEngLit = []
    let numberOfGSG = []

    // Department graphs
    let counterDeptENG = 0
    let counterDeptSOC = 0
    let counterDeptGSG = 0
    let counterDeptMed = 0
    let counterDeptLaw = 0

    let numberOfDeptENG = []
    let numberOfDeptSOC = []
    let numberOfDeptGSG = []
    let numberOfDeptMed = []
    let numberOfDeptLaw = []

    // Yearly semester wise SLASS
    let counterSpring = 0
    let counterAutumn = 0
    let counterSummer = 0

    let numberAutumn = []
    let numberSpring = []
    let numberSummer = []

    let numberSlassDept = []
    let numberSlass = []




    let year=[]
    for (let i = startYear; i <= finishYear; i++) {
      year.push(Number(i))
      noofStd.forEach((item, index) => {

        // Major wise Student's interest @ SECS
        if (item.year == i && item.Major == "BA - English Language Teaching") {
          counterEngTrainingLang = counterEngTrainingLang + Number(item.no_of_Student)
          // console.log(counterEngTrainingLang)
        }

        else if (item.year == i && item.Major == "BSS - Global Studies and Governance") {
          counterGSG = counterGSG + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "BSS - Media and Communication")) {
          counterMedia_Com = counterMedia_Com + Number(item.no_of_Student)
        }

        else if (item.year == i && item.Major == "BSS - Anthropology") {
          counterANT = counterANT + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "LLB - Laws (Hons)")) {
          counterLaw = counterLaw + Number(item.no_of_Student)
        }

        else if (item.year == i && item.Major == "BA - English Literature") {
          counterEngLit = counterEngLit + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.Major == "BSS - Sociology")) {
          counterSOC = counterSOC + Number(item.no_of_Student)
        }

        if (item.year == i && item.Major == "BA - English Language Teaching") {
          counterEngTrainingLang = counterEngTrainingLang + Number(item.no_of_Student)
          // console.log(counterEngTrainingLang)
        }

        else if (item.year == Yearvalue && item.Major == "BSS - Global Studies and Governance") {
          counterYearlyGSG = counterYearlyGSG + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && (item.Major == "BSS - Media and Communication")) {
          counterYearlyMedia_Com = counterYearlyMedia_Com + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSS - Anthropology") {
          counterYearlyAnt = counterYearlyAnt + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && (item.Major == "LLB - Laws (Hons)")) {
          counterYearlyLaw = counterYearlyLaw + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BA - English Literature") {
          counterYearlyEngLit = counterYearlyEngLit + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && (item.Major == "BSS - Sociology")) {
          counterYearlySOC = counterYearlySOC + Number(item.no_of_Student)
        }

        // SECS Department
        if (item.year == i && item.Dept == "Eng") {
          counterDeptENG = counterDeptENG + Number(item.no_of_Student)

        }

        if (item.year == i && item.Dept == "SOC") {
          counterDeptSOC = counterDeptSOC + Number(item.no_of_Student)
        }

        if (item.year == i && item.Dept == "GSG") {
          counterDeptGSG = counterDeptGSG + Number(item.no_of_Student)
        }

        if (item.year == i && item.Dept == "MED") {
          counterDeptMed = counterDeptMed + Number(item.no_of_Student)
        }

        if (item.year == i && item.Dept == "LAW") {
          counterDeptLaw = counterDeptLaw + Number(item.no_of_Student)
        }

        // Focus year graphs
        if (item.year == Yearvalue && item.Dept == "Eng" || item.Dept == "ENG") {
          counterYearlyDeptENG = counterYearlyDeptENG + Number(item.no_of_Student)

        }

        if (item.year == Yearvalue && item.Dept == "SOC") {
          counterYearlyDeptSOC = counterYearlyDeptSOC + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Dept == "GSG") {
          counterYearlyDeptGSG = counterYearlyDeptGSG + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Dept == "MED") {
          counterYearlyDeptMed = counterYearlyDeptMed + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Dept == "LAW") {
          counterYearlyDeptLaw = counterYearlyDeptLaw + Number(item.no_of_Student)
        }

        // Yearly semester wise SLASS
        if (item.year == i && item.Semester == "3" && item.School == "SLASS") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "1" && item.School == "SLASS") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "2" && item.School == "SLASS") {
          counterSummer = counterSummer + Number(item.no_of_Student)

        }


      });

      // Focus year graphs, Departments
      numberSlassDept.push(counterYearlyDeptENG)
      numberSlassDept.push(counterYearlyDeptGSG)
      numberSlassDept.push(counterYearlyDeptLaw)
      numberSlassDept.push(counterYearlyDeptMed)
      numberSlassDept.push(counterYearlyDeptSOC)

      // Focus year graphs, Majors
      numberSlass.push(counterYearlyAnt)
      numberSlass.push(counterYearlyEngLang)
      numberSlass.push(counterYearlyEngLit)
      numberSlass.push(counterYearlyGSG)
      numberSlass.push(counterYearlyLaw)
      numberSlass.push(counterYearlyMedia_Com)
      numberSlass.push(counterYearlySOC)

      // Major wise Students' interest @ SECS
      numberOfEngTrainingLang.push(counterEngTrainingLang)
      numberOfGSG.push(counterGSG)
      numberOfMedia_Com.push(counterMedia_Com)
      numberOfANT.push(counterANT)
      numberOfLaw.push(counterLaw)
      numberOfSOC.push(counterSOC)
      numberOfEngLit.push(counterEngLit)

      // Department graphs
      numberOfDeptENG.push(counterDeptENG)
      numberOfDeptSOC.push(counterDeptSOC)
      numberOfDeptGSG.push(counterDeptGSG)
      numberOfDeptMed.push(counterDeptMed)
      numberOfDeptLaw.push(counterLaw)

      // Yearly semester wise SLASS
      numberAutumn.push(counterAutumn)
      numberSpring.push(counterSpring)
      numberSummer.push(counterSummer)

      // reinitializing the counter
      counterYearlyDeptENG = 0
      counterYearlyDeptSOC = 0
      counterYearlyDeptGSG = 0
      counterYearlyDeptMed = 0
      counterYearlyDeptLaw = 0
      counterYearlyAnt = 0
      counterYearlyEngLang = 0
      counterYearlyEngLit = 0
      counterYearlyGSG = 0
      counterYearlyLaw = 0
      counterYearlyMedia_Com = 0
      counterYearlySOC = 0
      counterEngTrainingLang = 0
      counterGSG = 0
      counterMedia_Com = 0
      counterANT = 0
      counterLaw = 0
      counterSOC = 0
      counterEngLit = 0
      counterDeptENG = 0
      counterDeptSOC = 0
      counterDeptGSG = 0
      counterDeptMed = 0
      counterLaw = 0

      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0
    }


    var ctx = document.getElementById('myChart19');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Anthropology', 'English Language', 'English Literature', 'Global Studies and Governance', 'Law', 'Media & Communication', 'Sociology',],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberSlass[0], numberSlass[1], numberSlass[2], numberSlass[3], numberSlass[4], numberSlass[5], numberSlass[6],],
          backgroundColor: [
            'rgba(54, 54, 54, 0.5)',
            'rgba(94, 94, 94, 0.5)',
            'rgba(177, 177, 177, 0.5)',
            'rgba(11, 11, 11 0.5)',
            'rgba(122, 122, 122 0.5)',
            'rgba(215, 215, 215, 0.5)',
            'rgba(167, 167, 167, 0.5)'
          ],
          borderColor: [
            'rgba(54, 54, 54, 0.5)',
            'rgba(94, 94, 94, 0.5)',
            'rgba(177, 177, 177, 0.5)',
            'rgba(11, 11, 11 0.5)',
            'rgba(122, 122, 122 0.5)',
            'rgba(215, 215, 215, 0.5)',
            'rgba(167, 167, 167, 0.5)'
          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value
            }
          }
        },

        title: {
          display: true,
          text: 'SLASS Majors ' + Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });


    var ctx = document.getElementById('myChart20');
    var myChart19 = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Language', 'Global Studies and Governance', 'Law', 'Media & Communication', 'Sociology',],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberSlassDept[0], numberSlassDept[1], numberSlassDept[2], numberSlassDept[3], numberSlassDept[4]],
          backgroundColor: [
            'rgba(94, 94, 94, 1)',
            'rgba(57, 57, 57, 1)',
            'rgba(215, 215, 215, 1)',
            'rgba(32, 32, 32, 1)',
            'rgba(177, 177, 177, 1)',
            
          ],
          borderColor: [
            'rgba(94, 94, 94, 1)',
            'rgba(57, 57, 57, 1)',
            'rgba(215, 215, 215, 1)',
            'rgba(32, 32, 32, 1)',
            'rgba(177, 177, 177, 1)',
          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value
            }
          }
        },

        title: {
          display: true,
          text: 'SLASS Departments ' + Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });



    //   Line graph
    var ctx = document.getElementById('myChart21');
    myChart20 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in EngTrainingLang',
          fill: false,
          data: [numberOfEngTrainingLang[0], numberOfEngTrainingLang[1], numberOfEngTrainingLang[2], numberOfEngTrainingLang[3], numberOfEngTrainingLang[4], numberOfEngTrainingLang[5], numberOfEngTrainingLang[6], numberOfEngTrainingLang[7],],
          backgroundColor: ['rgba(109,109,109, 1)',],
          borderColor: [
            'rgba(109,109,109, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension: 0.1,
          label: 'Number Of Students in GSG',
          fill: false,
          data: [numberOfGSG[0], numberOfGSG[1], numberOfGSG[2], numberOfGSG[3], numberOfGSG[4], numberOfGSG[5], numberOfGSG[6], numberOfGSG[7],],
          backgroundColor: ['rgba((33,33,33,1)',],
          borderColor: [
            'rgba((33,33,33,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Media Com',
          fill: false,
          data: [numberOfMedia_Com[0], numberOfMedia_Com[1], numberOfMedia_Com[2], numberOfMedia_Com[3], numberOfMedia_Com[4], numberOfMedia_Com[5], numberOfMedia_Com[6], numberOfMedia_Com[7],],
          backgroundColor: ['rgba(218,218,218,1)',],
          borderColor: [
            'rgba(218,218,218,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Anthropology',
          fill: false,
          data: [numberOfANT[0], numberOfANT[1], numberOfANT[2], numberOfANT[3], numberOfANT[4], numberOfANT[5], numberOfANT[6], numberOfANT[7],],
          backgroundColor: ['rgba(137,137,137,1)',],
          borderColor: [
            'rgba(137,137,137,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in English Literature',
          fill: false,
          data: [numberOfEngLit[0], numberOfEngLit[1], numberOfEngLit[2], numberOfEngLit[3], numberOfEngLit[4], numberOfEngLit[5], numberOfEngLit[6], numberOfEngLit[7],],
          backgroundColor: ['rgba(179,179,179,1)',],
          borderColor: [
            'rgba(179,179,179,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Law',
          fill: false,
          data: [numberOfLaw[0], numberOfLaw[1], numberOfLaw[2], numberOfLaw[3], numberOfLaw[4], numberOfLaw[5], numberOfLaw[6], numberOfLaw[7],],
          backgroundColor: ['rgba(124,124,124,1)',],
          borderColor: [
            'rgba(124,124,124,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Sociology',
          fill: false,
          data: [numberOfSOC[0], numberOfSOC[1], numberOfSOC[2], numberOfSOC[3], numberOfSOC[4], numberOfSOC[5], numberOfSOC[6], numberOfSOC[7],],
          backgroundColor: ['rgba(170,170,170,1)',],
          borderColor: [
            'rgba(170,170,170,1)',

          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        title: {
          display: true,
          text: 'Major wise Students interest @ SLASS',
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

    //   Area under the graph
    var ctx = document.getElementById('myChart22');
    myChart21 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in Sociology',
          // fill: false,
          data: [numberOfSOC[0], numberOfSOC[1], numberOfSOC[2], numberOfSOC[3], numberOfSOC[4], numberOfSOC[5], numberOfSOC[6], numberOfSOC[7],],
          backgroundColor: ['rgba(170,170,170,0.2)',],
          borderColor: [
            'rgba(170,170,170,0.2)',

          ],
          borderWidth: 2
        },

        {
          lineTension: 0.1,
          label: 'Number Of Students in EngTrainingLang',
          // fill: false,
          data: [numberOfEngTrainingLang[0], numberOfEngTrainingLang[1], numberOfEngTrainingLang[2], numberOfEngTrainingLang[3], numberOfEngTrainingLang[4], numberOfEngTrainingLang[5], numberOfEngTrainingLang[6], numberOfEngTrainingLang[7],],
          backgroundColor: ['rgba(109,109,109, 1)',],
          borderColor: [
            'rgba(109,109,109, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension: 0.1,
          label: 'Number Of Students in GSG',
          // fill: false,
          data: [numberOfGSG[0], numberOfGSG[1], numberOfGSG[2], numberOfGSG[3], numberOfGSG[4], numberOfGSG[5], numberOfGSG[6], numberOfGSG[7],],
          backgroundColor: ['rgba((33,33,33,1)',],
          borderColor: [
            'rgba((33,33,33,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Media Com',
          // fill: false,
          data: [numberOfMedia_Com[0], numberOfMedia_Com[1], numberOfMedia_Com[2], numberOfMedia_Com[3], numberOfMedia_Com[4], numberOfMedia_Com[5], numberOfMedia_Com[6], numberOfMedia_Com[7],],
          backgroundColor: ['rgba(218,218,218,1)',],
          borderColor: [
            'rgba(218,218,218,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Anthropology',
          // fill: false,
          data: [numberOfANT[0], numberOfANT[1], numberOfANT[2], numberOfANT[3], numberOfANT[4], numberOfANT[5], numberOfANT[6], numberOfANT[7],],
          backgroundColor: ['rgba(137,137,137,1)',],
          borderColor: [
            'rgba(137,137,137,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Eng Lit',
          // fill: false,
          data: [numberOfEngLit[0], numberOfEngLit[1], numberOfEngLit[2], numberOfEngLit[3], numberOfEngLit[4], numberOfEngLit[5], numberOfEngLit[6], numberOfEngLit[7],],
          backgroundColor: ['rgba(179,179,179,1)',],
          borderColor: [
            'rgba(179,179,179,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Law',
          // fill: false,
          data: [numberOfLaw[0], numberOfLaw[1], numberOfLaw[2], numberOfLaw[3], numberOfLaw[4], numberOfLaw[5], numberOfLaw[6], numberOfLaw[7],],
          backgroundColor: ['rgba(124,124,124,1)',],
          borderColor: [
            'rgba(124,124,124,1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        title: {
          display: true,
          text: 'Major wise Students interest @ SLASS',
          fontSize:20  
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

    //   SLASS Dept
    var ctx = document.getElementById('myChart23');
    myChart22 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in SOC',
          fill: false,
          data: [numberOfDeptSOC[0], numberOfDeptSOC[1], numberOfDeptSOC[2], numberOfDeptSOC[3], numberOfDeptSOC[4], numberOfDeptSOC[5], numberOfDeptSOC[6], numberOfDeptSOC[7],],
          backgroundColor: ['rgba(179,179,179,1)',],
          borderColor: [
            'rgba(179,179,179,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in ENG',
          fill: false,
          data: [numberOfDeptENG[0], numberOfDeptENG[1], numberOfDeptENG[2], numberOfDeptENG[3], numberOfDeptENG[4], numberOfDeptENG[5], numberOfDeptENG[6], numberOfDeptENG[7],],
          backgroundColor: ['rgba(95,95,95, 1)',],
          borderColor: [
            'rgba(95,95,95, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension: 0.1,
          label: 'Number Of Students in GSG',
          fill: false,
          data: [numberOfDeptGSG[0], numberOfDeptGSG[1], numberOfDeptGSG[2], numberOfDeptGSG[3], numberOfDeptGSG[4], numberOfDeptGSG[5], numberOfDeptGSG[6], numberOfDeptGSG[7],],
          backgroundColor: ['rgba(137,137,137, 1)',],
          borderColor: [
            'rgba(137,137,137, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension: 0.1,
          label: 'Number Of Students in Media and Com',
          fill: false,
          data: [numberOfDeptMed[0], numberOfDeptMed[1], numberOfDeptMed[2], numberOfDeptMed[3], numberOfDeptMed[4], numberOfDeptMed[5], numberOfDeptMed[6], numberOfDeptMed[7],],
          backgroundColor: ['rgba(33,33,33, 1)',],
          borderColor: [
            'rgba(33,33,33, 1)',

          ],
          borderWidth: 2
        }, {
          lineTension: 0.1,
          label: 'Number Of Students in Law',
          fill: false,
          data: [numberOfDeptLaw[0], numberOfDeptLaw[1], numberOfDeptLaw[2], numberOfDeptLaw[3], numberOfDeptLaw[4], numberOfDeptLaw[5], numberOfDeptLaw[6], numberOfDeptLaw[7],],
          backgroundColor: ['rgba(218,218,218, 1)',],
          borderColor: [
            'rgba(218,218,218, 1)',

          ],
          borderWidth: 2
        },

        ]

      },
      options: {
        title: {
          display: true,
          text: 'SLASS Departments',
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

    var ctx = document.getElementById('myChart24');
    var myChart23 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: year,
        datasets: [{
          label: 'Number Of Students in SOC',
          fill: false,
          data: [numberOfDeptSOC[0], numberOfDeptSOC[1], numberOfDeptSOC[2], numberOfDeptSOC[3], numberOfDeptSOC[4], numberOfDeptSOC[5], numberOfDeptSOC[6], numberOfDeptSOC[7],],
          backgroundColor: [
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',

          ],
          borderColor: [
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',
            'rgba(179,179,179,1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in ENG',
          fill: false,
          data: [numberOfDeptENG[0], numberOfDeptENG[1], numberOfDeptENG[2], numberOfDeptENG[3], numberOfDeptENG[4], numberOfDeptENG[5], numberOfDeptENG[6], numberOfDeptENG[7],],
          backgroundColor: [
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
          ],
          borderColor: [
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',
            'rgba(95,95,95, 1)',

          ],
          borderWidth: 2
        }, {
          label: 'Number Of Students in GSG',
          fill: false,
          data: [numberOfDeptGSG[0], numberOfDeptGSG[1], numberOfDeptGSG[2], numberOfDeptGSG[3], numberOfDeptGSG[4], numberOfDeptGSG[5], numberOfDeptGSG[6], numberOfDeptGSG[7],],
          backgroundColor: [
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
        ],
          borderColor: [
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',
            'rgba(137,137,137, 1)',

          ],
          borderWidth: 2
        }, {
          label: 'Number Of Students in Media and Com',
          fill: false,
          data: [numberOfDeptMed[0], numberOfDeptMed[1], numberOfDeptMed[2], numberOfDeptMed[3], numberOfDeptMed[4], numberOfDeptMed[5], numberOfDeptMed[6], numberOfDeptMed[7],],
          backgroundColor: [
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',

          ],
          borderColor: [
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',
            'rgba(33,33,33, 1)',

          ],
          borderWidth: 2
        }, {
          label: 'Number Of Students in Law',
          fill: false,
          data: [numberOfDeptLaw[0], numberOfDeptLaw[1], numberOfDeptLaw[2], numberOfDeptLaw[3], numberOfDeptLaw[4], numberOfDeptLaw[5], numberOfDeptLaw[6], numberOfDeptLaw[7],],
          backgroundColor: [
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',

          ],
          borderColor: [
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',
            'rgba(218,218,218, 1)',

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
          }]},
        title: {
          display: true,
          text: 'SLASS Departments',
          fontSize:20  
         
          
        }
      }
    });

    // Yearly semester wise SLASS
    var ctx = document.getElementById('myChart25');
    var myChart24 = new Chart(ctx, {
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
          }]},
        title: {
          display: true,
          text: 'Yearly semester wise SLASS',
          fontSize:20  
         
          }
        
      }
    });

  }).fail(function (response) {
    console.log(response.responseText);
  });
 })


// SLS Graphs myChart25 to myChart29

$("#getFocusYear").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    //    console.log(response)
    let noofStd = response.datas
    Yearvalue = $("#focusYearVal").val()
    startYear = $("#startYearVal").val()
    finishYear = $("#finishYearVal").val()

    let counterSLSAutumn = 0
    let counterSLSSpring = 0
    let counterSLSSummer = 0

    let counterYearlyBioChem = 0
    let counterYearlyMicroBio = 0
    let counterYearlyBiochem_Biotech = 0

    let counterBiochem = 0
    let counterMicroBio = 0
    let counterBiochem_Biotech = 0

    // Yearly semester wise SLS
    let counterSpring = 0
    let counterAutumn = 0
    let counterSummer = 0

    let numberAutumn = []
    let numberSpring = []
    let numberSummer = []


    let numberOfBiochem = []
    let numberOfMicrobio = []
    let numberOfBiochem_Biotech = []
    let numberYearlySLS = []
    let numberSLSsemester = []


    let year=[]
    for (let i = startYear; i <= finishYear; i++) {
      year.push(Number(i))
      noofStd.forEach((item, index) => {
        if (item.year == i && item.Major == "BSc - Biochemistry") {
          counterBiochem = counterBiochem + Number(item.no_of_Student)
          // console.log(counterBiochem)
        }

        else if (item.year == i && (item.Major == "BSc - Biochemistry and Biotechnology")) {
          counterBiochem_Biotech = counterBiochem_Biotech + Number(item.no_of_Student)
        }

        else if (item.year == i && item.Major == "BSc - Microbiology") {
          counterMicroBio = counterMicroBio + Number(item.no_of_Student)
        }


        if (item.year == Yearvalue && item.Major == "BSc - Biochemistry") {
          counterYearlyBioChem = counterYearlyBioChem + Number(item.no_of_Student)
          // console.log(counterBiochem)
        }

        else if (item.year == Yearvalue && (item.Major == "BSc - Biochemistry and Biotechnology")) {
          counterYearlyBiochem_Biotech = counterYearlyBiochem_Biotech + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Microbiology") {
          counterYearlyMicroBio = counterYearlyMicroBio + Number(item.no_of_Student)
        }

        if (item.year == Yearvalue && item.Semester == "1" && item.School == "SLS") {
          counterSLSAutumn = counterSLSAutumn + Number(item.no_of_Student)

        }
        else if (item.year == Yearvalue && item.Semester == "2" && item.School == "SLS") {
          counterSLSSpring = counterSLSSpring + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Semester == "3" && item.School == "SLS") {
          counterSLSSummer = counterSLSSummer + Number(item.no_of_Student)
        }

        // Yearly semester wise SLS
        if (item.year == i && item.Semester == "3" && item.School == "SLS") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "1" && item.School == "SLS") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "2" && item.School == "SLS") {
          counterSummer = counterSummer + Number(item.no_of_Student)

        }

      });
      numberSLSsemester.push(counterSLSAutumn)
      numberSLSsemester.push(counterSLSSpring)
      numberSLSsemester.push(counterSLSSummer)

      numberYearlySLS.push(counterYearlyBioChem)
      numberYearlySLS.push(counterYearlyBiochem_Biotech)
      numberYearlySLS.push(counterYearlyMicroBio)

      numberOfBiochem.push(counterBiochem)
      numberOfBiochem_Biotech.push(counterBiochem_Biotech)
      numberOfMicrobio.push(counterMicroBio)

      // Yearly semester wise SLASS
      numberAutumn.push(counterAutumn)
      numberSpring.push(counterSpring)
      numberSummer.push(counterSummer)


      counterBiochem = 0
      counterBiochem_Biotech = 0
      counterMicroBio = 0
      counterYearlyBioChem = 0
      counterYearlyMicroBio = 0
      counterYearlyBiochem_Biotech = 0

      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0
    }

    var ctx = document.getElementById('myChart26');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Bio-Chemistry', 'Bio-Chemisrtry & Bio-Technology', 'Micro-Biology'],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberYearlySLS[0], numberYearlySLS[1], numberYearlySLS[2],],
          backgroundColor: [
            'rgba(80, 95, 38, 1)',
            'rgba(196, 211, 154, 1)',
            'rgba(119, 143, 59, 1)',
          ],
          borderColor: [
            'rgba(80, 95, 38, 1)',
            'rgba(196, 211, 154, 1)',
            'rgba(119, 143, 59, 1)',
          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value
            }
          }
        },

        title: {
          display: true,
          text: 'SLS Majors ' + Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20  

        },


      }
    })


    var ctx = document.getElementById('myChart27');
    var myChart26 = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Spring', 'Summer', 'Autumn',],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberSLSsemester[0], numberSLSsemester[1], numberSLSsemester[2]],
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
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value
            }
          }
        },

        title: {
          display: true,
          text: Yearvalue + ' @ SLS',
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });

    //   Line graph
    var ctx = document.getElementById('myChart28');
    myChart27 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in Biochemistry',
          fill: false,
          data: [numberOfBiochem[0], numberOfBiochem[1], numberOfBiochem[2], numberOfBiochem[3], numberOfBiochem[4], numberOfBiochem[5], numberOfBiochem[6], numberOfBiochem[7],],
          backgroundColor: ['rgba(125,152,74, 1)',],
          borderColor: [
            'rgba(125,152,74, 1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Biochemistry and Biotechnology',
          fill: false,
          data: [numberOfBiochem_Biotech[0], numberOfBiochem_Biotech[1], numberOfBiochem_Biotech[2], numberOfBiochem_Biotech[3], numberOfBiochem_Biotech[4], numberOfBiochem_Biotech[5], numberOfBiochem_Biotech[6], numberOfBiochem_Biotech[7],],
          backgroundColor: ['rgba(197,213,173,1)',],
          borderColor: [
            'rgba(197,213,173,1)',

          ],
          borderWidth: 2
        },
        {
          lineTension: 0.1,
          label: 'Number Of Students in Microbiology',
          fill: false,
          data: [numberOfMicrobio[0], numberOfMicrobio[1], numberOfMicrobio[2], numberOfMicrobio[3], numberOfMicrobio[4], numberOfMicrobio[5], numberOfMicrobio[6], numberOfMicrobio[7],],
          backgroundColor: ['rgba(153,185,91,1)',],
          borderColor: [
            'rgba(153,185,91,1)',

          ],
          borderWidth: 2
        },
        ]

      },
      options: {
        title: {
          display: true,
          text: 'Major wise Students interest @  SLS',
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

    //   Area under the graph
    var ctx = document.getElementById('myChart29');
    myChart28 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [
          {
            lineTension: 0.1,
            label: 'Number Of Students in Biochemistry',
            // fill: false,
            data: [numberOfBiochem[0], numberOfBiochem[1], numberOfBiochem[2], numberOfBiochem[3], numberOfBiochem[4], numberOfBiochem[5], numberOfBiochem[6], numberOfBiochem[7],],
            backgroundColor: ['rgba(125,152,74, 1)',],
            borderColor: [
              'rgba(125,152,74, 1)',

            ],
            borderWidth: 2
          },
          {
            lineTension: 0.1,
            label: 'Number Of Students in Biochemistry and Biotechnology',
            // fill: false,
            data: [numberOfBiochem_Biotech[0], numberOfBiochem_Biotech[1], numberOfBiochem_Biotech[2], numberOfBiochem_Biotech[3], numberOfBiochem_Biotech[4], numberOfBiochem_Biotech[5], numberOfBiochem_Biotech[6], numberOfBiochem_Biotech[7],],
            backgroundColor: ['rgba(197,213,173,1)',],
            borderColor: [
              'rgba(197,213,173,1)',

            ],
            borderWidth: 2
          },
          {
            lineTension: 0.1,
            label: 'Number Of Students in Microbiology',
            // fill: false,
            data: [numberOfMicrobio[0], numberOfMicrobio[1], numberOfMicrobio[2], numberOfMicrobio[3], numberOfMicrobio[4], numberOfMicrobio[5], numberOfMicrobio[6], numberOfMicrobio[7],],
            backgroundColor: ['rgba(153,185,91,1)',],
            borderColor: [
              'rgba(153,185,91,1)',

            ],
            borderWidth: 2
          },

        ]

      },
      options: {
        title: {
          display: true,
          text: 'Major wise Students interest @  SLS',
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

      // Yearly semester wise SLS
      var ctx = document.getElementById('myChart30');
       myChart29 = new Chart(ctx, {
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
            }]},
          title: {
            display: true,
            text: 'Yearly semester wise SLS',
            fontSize:20  
            
            }
          
        }
      });
  }).fail(function (response) {
    console.log(response.responseText);
  });

})

// SoB Graphs: myChart30 to myChart

$("#getFocusYear").click(function (event) {

  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    Yearvalue = $("#focusYearVal").val()
    startYear = $("#startYearVal").val()
    finishYear = $("#finishYearVal").val()
    let noofStd = response.datas

    let counterBBAMis = 0
    let counterBBAFin = 0
    let counterInvestMgt = 0
    let counterBBAACN = 0
    let counterBBAMGT = 0
    let counterIB = 0
    let counterMkt = 0
    let counterHR = 0
    let counterEco = 0
    let counterYearlyMkt = 0
    let counterYearlyMis = 0
    let counterYearlyMgt = 0
    let counterYearlyInvest = 0
    let counterYearlyIb = 0
    let counterYearlyHrm = 0
    let counterYearlyFin = 0
    let counterYearlyEcn = 0
    let counterYearlyAcn = 0

    // Yearly semester wise SoB
    let counterSpring = 0
    let counterAutumn = 0
    let counterSummer = 0

    let numberAutumn = []
    let numberSpring = []
    let numberSummer = []


    let numberBBA = []
    let numberYearlyMis = []
    let numberYearlyInvest = []
    let numberYearlyMkt = []
    let numberYearlyIb = []
    let numberYearlyHrm = []
    let numberYearlyFin = []
    let numberYearlyEcn = []
    let numberYearlyAcn = []
    let numberYearlyMgt = []

    let numberSemester = []



    let year=[]
    for (let i = startYear; i <= finishYear; i++) {
      year.push(Number(i))
      noofStd.forEach((item, index) => {

        if (item.year == Yearvalue && item.Major == "BBA - Management Information Systems") {
          counterBBAMis = counterBBAMis + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - Finance") {
          counterBBAFin = counterBBAFin + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - Investment Management") {
          counterInvestMgt = counterInvestMgt + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - Accounting") {
          counterBBAACN = counterBBAACN + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - General Management") {
          counterBBAMGT = counterBBAMGT + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - Human Resources Management") {
          counterHR = counterHR + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - International Business") {
          counterIB = counterIB + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BBA - Marketing") {
          counterMkt = counterMkt + Number(item.no_of_Student)

        }
        if (item.year == Yearvalue && item.Major == "BSc - Economics") {
          counterEco = counterEco + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - Management Information Systems") {
          counterYearlyMis = counterYearlyMis + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - Finance") {
          counterYearlyFin = counterYearlyFin + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - Investment Management") {
          counterYearlyInvest = counterYearlyInvest + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - Accounting") {
          counterYearlyAcn = counterYearlyAcn + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - General Management") {
          counterYearlyMgt = counterYearlyMgt + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - Human Resources Management") {
          counterYearlyHrm = counterYearlyHrm + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - International Business") {
          counterYearlyIb = counterYearlyIb + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BBA - Marketing") {
          counterYearlyMkt = counterYearlyMkt + Number(item.no_of_Student)

        }
        if (item.year == i && item.Major == "BSc - Economics") {
          counterYearlyEcn = counterYearlyEcn + Number(item.no_of_Student)

        }

        // Yearly semester wise SoB
        if (item.year == i && item.Semester == "3" && item.School == "SoB") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "1" && item.School == "SoB") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i && item.Semester == "2" && item.School == "SoB") {
          counterSummer = counterSummer + Number(item.no_of_Student)

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

      // Yearly semester wise SLASS
      numberAutumn.push(counterAutumn)
      numberSpring.push(counterSpring)
      numberSummer.push(counterSummer)



      counterYearlyMkt = 0
      counterYearlyMis = 0
      counterYearlyMgt = 0
      counterYearlyInvest = 0
      counterYearlyIb = 0
      counterYearlyHrm = 0
      counterYearlyFin = 0
      counterYearlyEcn = 0
      counterYearlyAcn = 0

      counterYearlyMis = 0
      counterEco = 0
      counterIB = 0
      counterMkt = 0
      counterHR = 0
      counterBBAMGT = 0
      counterBBAACN = 0
      counterInvestMgt = 0
      counterBBAMis = 0
      counterBBAFin = 0

      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0

    }





    var ctx = document.getElementById('myChart31');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Management Information Systems', 'Finance', 'Investment Management', 'Accounting', 'General Management', 'Human Resources Management', 'International Business', 'Marketing', 'Economics'],
        datasets: [{

          label: 'Number Of Students in ' + Yearvalue,
          data: [numberBBA[0], numberBBA[1], numberBBA[2], numberBBA[3], numberBBA[4], numberBBA[5], numberBBA[6], numberBBA[7], numberBBA[8]],
          backgroundColor: [
            'rgba(44, 77, 117, 1)', //mis
                'rgb(89, 135, 192)', // finance
                'rgb(107, 148, 199)', //investment banking
                'rgb(163, 188, 220)', // accounting
                'rgb(0, 134, 179)', //general management
                'rgb(0, 153, 204)', //hrm
                'rgb(102, 181, 255)', //IB
                'rgb(153, 204, 255)', //marketing
                'rgb(204, 230, 255)', // econ
              ],
              borderColor: [
                'rgba(44, 77, 117, 1)',
                'rgb(89, 135, 192)',
                'rgb(107, 148, 199)',
                'rgb(163, 188, 220)',
                'rgb(0, 134, 179)',
                'rgb(0, 153, 204)',
                'rgb(102, 181, 255)',
                'rgb(153, 204, 255)',
                'rgb(204, 230, 255)',
              ],
          borderWidth: 2
        },
        ]

      },
      options: {
        plugins: {

          datalabels: {

            formatter: function (value) {
              return value;
            }
          }
        },

        title: {
          display: true,
          text: 'SOB Majors ' + Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });
    var ctx = document.getElementById('myChart32');
    var myChart31 = new Chart(ctx, {
      type: 'bar',
      data: {

        labels: ['Management Information Systems', 'Finance', 'Investment Management', 'Accounting', 'General Management', 'Human Resources Management', 'International Business', 'Marketing', 'Economics'],
        datasets: [{

          label: 'School of Business ' + Yearvalue,
          data: [numberBBA[0], numberBBA[1], numberBBA[2], numberBBA[3], numberBBA[4], numberBBA[5], numberBBA[6], numberBBA[7], numberBBA[8]],
          backgroundColor: [
            'rgba(44, 77, 117, 1)', //mis
            'rgba(192, 80, 77, 1)', // finance
            'rgba(247, 150, 70, 1)', //investment banking
            'rgba(79, 129, 189, 1)', // accounting
            'rgba(155, 187, 89, 1)', //general management
            'rgba(128, 100, 162, 1)', //hrm
            'rgba(75, 172, 198, 1)', //IB
            'rgba(119, 44, 42, 1)', //marketing
            'rgba(95, 117, 48, 1)', // econ
          ],
          borderColor: [
            'rgba(44, 77, 117, 1)', //mis
            'rgba(192, 80, 77, 1)', // finance
            'rgba(247, 150, 70, 1)', //investment banking
            'rgba(79, 129, 189, 1)', // accounting
            'rgba(155, 187, 89, 1)', //general management
            'rgba(128, 100, 162, 1)', //hrm
            'rgba(75, 172, 198, 1)', //IB
            'rgba(119, 44, 42, 1)', //marketing
            'rgba(95, 117, 48, 1)', // econ
          ],
          borderWidth: 2
        },
        ]

      },
      options: {

        title: {
          display: true,
          text: Yearvalue + ' @ SOB',
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
    var ctx = document.getElementById('myChart33');
    myChart32 = new Chart(ctx, {
      type: 'line',
      data: {

        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Management Information System',
          data: [numberYearlyMis[0], numberYearlyMis[1], numberYearlyMis[2], numberYearlyMis[3], numberYearlyMis[4], numberYearlyMis[5], numberYearlyMis[6], numberYearlyMis[7],],
          backgroundColor: [
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            
          ],
          borderColor: [
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',

          ],
          borderWidth: 2

        },
        {
          lineTension: 0.1,
          label: 'Marketing',
          data: [numberYearlyMkt[0], numberYearlyMkt[1], numberYearlyMkt[2], numberYearlyMkt[3], numberYearlyMkt[4], numberYearlyMkt[5], numberYearlyMkt[6], numberYearlyMkt[7],],
          backgroundColor: [
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',


          ],
          borderColor: [
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'Accounting',
          data: [numberYearlyAcn[0], numberYearlyAcn[1], numberYearlyAcn[2], numberYearlyAcn[3], numberYearlyAcn[4], numberYearlyAcn[5], numberYearlyAcn[6], numberYearlyAcn[7],],
          backgroundColor: [
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',

          ],
          borderColor: [
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',

          ],
          borderWidth: 2


        }, {
          lineTension: 0.1,
          label: 'Finance',
          data: [numberYearlyFin[0], numberYearlyFin[1], numberYearlyFin[2], numberYearlyFin[3], numberYearlyFin[4], numberYearlyFin[5], numberYearlyFin[6], numberYearlyFin[7],],
          backgroundColor: [
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',

          ],
          borderColor: [
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'General Management',
          data: [numberYearlyMgt[0], numberYearlyMgt[1], numberYearlyMgt[2], numberYearlyMgt[3], numberYearlyMgt[4], numberYearlyMgt[5], numberYearlyMgt[6], numberYearlyMgt[7],],
          backgroundColor: [
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            
          ],
          borderColor: [
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'Human Resources Management',
          data: [numberYearlyHrm[0], numberYearlyHrm[1], numberYearlyHrm[2], numberYearlyHrm[3], numberYearlyHrm[4], numberYearlyHrm[5], numberYearlyHrm[6], numberYearlyHrm[7],],
          backgroundColor: [
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',

          ],
          borderColor: [
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'International Business',
          data: [numberYearlyIb[0], numberYearlyIb[1], numberYearlyIb[2], numberYearlyIb[3], numberYearlyIb[4], numberYearlyIb[5], numberYearlyIb[6], numberYearlyIb[7],],
          backgroundColor: [
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',

          ],
          borderColor: [
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'Investment Management',
          data: [numberYearlyInvest[0], numberYearlyInvest[1], numberYearlyInvest[2], numberYearlyInvest[3], numberYearlyInvest[4], numberYearlyInvest[5], numberYearlyInvest[6], numberYearlyInvest[7],],
          backgroundColor: [
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',

          ],
          borderColor: [
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',

          ],
          borderWidth: 2


        }, {
          lineTension: 0.1,
          label: 'Economics',
          data: [numberYearlyEcn[0], numberYearlyEcn[1], numberYearlyEcn[2], numberYearlyEcn[3], numberYearlyEcn[4], numberYearlyEcn[5], numberYearlyEcn[6], numberYearlyEcn[7],],
          backgroundColor: [
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',

          ],
          borderColor: [
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',

          ],
          borderWidth: 2


        },

        ]


      },
      options: {

        title: {
          display: true,
          text: Yearvalue + ' @ SOB',
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

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
    var ctx = document.getElementById('myChart34');
    myChart33 = new Chart(ctx, {
      type: 'line',
      data: {

        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Management Information System',
          fill: false,
          data: [numberYearlyMis[0], numberYearlyMis[1], numberYearlyMis[2], numberYearlyMis[3], numberYearlyMis[4], numberYearlyMis[5], numberYearlyMis[6], numberYearlyMis[7],],
          backgroundColor: [
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',

          ],
          borderColor: [
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',
            'rgba(44, 77, 117, 1)',

          ],
          borderWidth: 2

        },
        {
          lineTension: 0.1,
          label: 'Marketing',
          fill: false,
          data: [numberYearlyMkt[0], numberYearlyMkt[1], numberYearlyMkt[2], numberYearlyMkt[3], numberYearlyMkt[4], numberYearlyMkt[5], numberYearlyMkt[6], numberYearlyMkt[7],],
          backgroundColor: [
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',

          ],
          borderColor: [
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',
            'rgba(119, 44, 42, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'Accounting',
          fill: false,
          data: [numberYearlyAcn[0], numberYearlyAcn[1], numberYearlyAcn[2], numberYearlyAcn[3], numberYearlyAcn[4], numberYearlyAcn[5], numberYearlyAcn[6], numberYearlyAcn[7],],
          backgroundColor: [
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',

          ],
          borderColor: [
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',
            'rgba(79, 129, 189, 1)',

          ],
          borderWidth: 2


        }, {
          lineTension: 0.1,
          label: 'Finance',
          fill: false,
          data: [numberYearlyFin[0], numberYearlyFin[1], numberYearlyFin[2], numberYearlyFin[3], numberYearlyFin[4], numberYearlyFin[5], numberYearlyFin[6], numberYearlyFin[7],],
          backgroundColor: [
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',

          ],
          borderColor: [
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',
            'rgba(192, 80, 77, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'General Management',
          fill: false,
          data: [numberYearlyMgt[0], numberYearlyMgt[1], numberYearlyMgt[2], numberYearlyMgt[3], numberYearlyMgt[4], numberYearlyMgt[5], numberYearlyMgt[6], numberYearlyMgt[7],],
          backgroundColor: [
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',

          ],
          borderColor: [
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',
            'rgba(155, 187, 89, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'Human Resources Management',
          fill: false,
          data: [numberYearlyHrm[0], numberYearlyHrm[1], numberYearlyHrm[2], numberYearlyHrm[3], numberYearlyHrm[4], numberYearlyHrm[5], numberYearlyHrm[6], numberYearlyHrm[7],],
          backgroundColor: [
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',

          ],
          borderColor: [
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',
            'rgba(128, 100, 162, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'International Business',
          fill: false,
          data: [numberYearlyIb[0], numberYearlyIb[1], numberYearlyIb[2], numberYearlyIb[3], numberYearlyIb[4], numberYearlyIb[5], numberYearlyIb[6], numberYearlyIb[7],],
          backgroundColor: [
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',

          ],
          borderColor: [
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',
            'rgba(75, 172, 198, 1)',

          ],
          borderWidth: 2


        },
        {
          lineTension: 0.1,
          label: 'Investment Management',
          fill: false,
          data: [numberYearlyInvest[0], numberYearlyInvest[1], numberYearlyInvest[2], numberYearlyInvest[3], numberYearlyInvest[4], numberYearlyInvest[5], numberYearlyInvest[6], numberYearlyInvest[7],],
          backgroundColor: [
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',

          ],
          borderColor: [
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',
            'rgba(247, 150, 70, 1)',

          ],
          borderWidth: 2


        }, {
          lineTension: 0.1,
          label: 'Economics',
          fill: false,
          data: [numberYearlyEcn[0], numberYearlyEcn[1], numberYearlyEcn[2], numberYearlyEcn[3], numberYearlyEcn[4], numberYearlyEcn[5], numberYearlyEcn[6], numberYearlyEcn[7],],
          backgroundColor: [
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',

          ],
          borderColor: [
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',
            'rgba(95, 117, 48, 1)',

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

      // Yearly semester wise SoB
      var ctx = document.getElementById('myChart35');
      var myChart34 = new Chart(ctx, {
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
            }]},
          title: {
            display: true,
            text: 'Yearly semester wise SoB',
            fontSize:20  
           
            
          }
        }
      
    });
  }).fail(function (response) {
    console.log(response.responseText);
  });

})