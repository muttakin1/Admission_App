// Major Wise students' interest @ SECS LINE
$("#MajorWiseStudentsSESM").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    //    console.log(response)
    let noofStd = response.datas
    Yearvalue = $("#focusYearVal").val()
    startYear =$("#startYearVal").val()
    finishYear =$("#finishYearVal").val()
    console.log(Yearvalue)

    let counterSESMAutumn=0
    let counterSESMSpring=0
    let counterSESMSummer=0
    let counterYearlyPharmacy = 0
    let counterYearlyENV = 0
    let counterYearlyENV_management = 0
    let counterYearlyPopulation_Env = 0

    let counterPharmacy = 0
    let counterENV = 0
    let counterENV_management = 0
    let counterPopulation_Env = 0

     // Yearly semester wise SESM
     let counterSpring = 0
     let counterAutumn = 0
     let counterSummer = 0

     let numberAutumn=[]
     let numberSpring=[]
     let numberSummer=[] 


    let numberSESMsemester=[]
    let numberYearlySESM=[]
    let numberOfPharmacy = []
    let numberOfENV = []
    let numberOfENV_management = []
    let numberOfPoplation_Env = []


    for (let i = 2013; i <= 2019; i++) {
      noofStd.forEach((item, index) => {
        if (item.year == Yearvalue && item.Semester == "1" && item.School=="SESM") {
          counterSESMAutumn = counterSESMAutumn + Number(item.no_of_Student)

        }
        else if (item.year == Yearvalue && item.Semester == "2" && item.School=="SESM") {
          counterSESMSpring = counterSESMSpring + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Semester == "3" && item.School=="SESM") {
          counterSESMSummer = counterSESMSummer + Number(item.no_of_Student)
        }

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
          counterYearlyENV_management = counterYearlyPharmacy + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Environmental Science") {
          counterYearlyENV = counterYearlyPharmacy + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Major == "BSc - Population Environment") {
          counterYearlyPopulation_Env = counterYearlyPharmacy + Number(item.no_of_Student)
        }

         // Yearly semester wise SESM
         if (item.year == i  && item.Semester == "3" && item.School == "SESM") {
          counterAutumn = counterAutumn + Number(item.no_of_Student)

        }

        if (item.year == i  && item.Semester == "1" && item.School == "SESM") {
          counterSpring = counterSpring + Number(item.no_of_Student)

        }

        if (item.year == i  && item.Semester == "2" && item.School == "SESM") {
          counterSummer = counterSummer + Number(item.no_of_Student)

        }


      });

      numberSESMsemester.push(counterSESMAutumn)
      numberSESMsemester.push(counterSESMSpring)
      numberSESMsemester.push(counterSESMSummer)
      
      numberOfPharmacy.push(counterPharmacy)
      numberOfENV_management.push(counterENV_management)
      numberOfENV.push(counterENV)
      numberOfPoplation_Env.push(counterPopulation_Env)

      numberYearlySESM.push(counterYearlyENV)
      numberYearlySESM.push(counterYearlyENV_management)
      numberYearlySESM.push(counterYearlyPharmacy)
      numberYearlySESM.push(counterYearlyPopulation_Env)

       // Yearly semester wise SESM
       numberAutumn.push(counterAutumn)
       numberSpring.push(counterSpring)
       numberSummer.push(counterSummer)


      counterYearlyPharmacy = 0
      counterYearlyENV_management = 0
      counterYealryENV = 0
      counterYearlyPopulation_Env = 0

      counterPharmacy = 0
      counterENV_management = 0
      counterENV = 0
      counterPopulation_Env = 0
      
      counterSESMSummer=0
      counterSESMSpring=0
      counterSESMAutumn=0

      counterAutumn = 0
      counterSpring = 0
      counterSummer = 0
    }

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Environmental Science','Environmental Management','Pharmacy','Population Environment'],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberYearlySESM[0], numberYearlySESM[1], numberYearlySESM[2], numberYearlySESM[3],],
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
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

        },


      }
    });
    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Spring','Summer','Autumn',],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberSESMsemester[0], numberSESMsemester[1], numberSESMsemester[2]],
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
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

        },


      }
    });


    //   Line graph
    var ctx = document.getElementById('myChart4');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Number Of Students in Pharmacy',
          fill: false,
          data: [numberOfPharmacy[0], numberOfPharmacy[1], numberOfPharmacy[2], numberOfPharmacy[3], numberOfPharmacy[4], numberOfPharmacy[5], numberOfPharmacy[6], numberOfPharmacy[7],],
          borderColor: [
            'rgba(100, 79, 126, 1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Env Management',
          fill: false,
          data: [numberOfENV_management[0], numberOfENV_management[1], numberOfENV_management[2], numberOfENV_management[3], numberOfENV_management[4], numberOfENV_management[5], numberOfENV_management[6], numberOfENV_management[7],],

          borderColor: [
            'rgba(120, 96, 150, 1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in ENV',
          fill: false,
          data: [numberOfENV[0], numberOfENV[1], numberOfENV[2], numberOfENV[3], numberOfENV[4], numberOfENV[5], numberOfENV[6], numberOfENV[7],],

          borderColor: [
            'rgba(156,139,179,1)',

          ],
          borderWidth: 2
        },
        {
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

    //   Area under the graph
    var ctx = document.getElementById('myChart5');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
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
          text: 'Major wise Students interest @ SESM+Pharmacy'
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
     var ctx = document.getElementById('myChart6');
     var myChart = new Chart(ctx, {
       type: 'bar',
       data: {
         labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
         datasets: [{
           label: 'Autumn',
           fill: false,
           data: [numberAutumn[0], numberAutumn[1], numberAutumn[2], numberAutumn[3], numberAutumn[4], numberAutumn[5], numberAutumn[6], numberAutumn[7],],
           backgroundColor: ['rgba(155,187,89,1)',],
           borderColor: [
             'rgba(155,187,89,1)',
 
           ],
           borderWidth: 2
         },
         {
           label: 'Spring',
           fill: false,
           data: [numberSpring[0], numberSpring[1], numberSpring[2], numberSpring[3], numberSpring[4], numberSpring[5], numberSpring[6], numberSpring[7],],
           backgroundColor: ['rgba(79,129,189, 1)',],
           borderColor: [
             'rgba(79,129,189, 1)',
 
           ],
           borderWidth: 2
         },
         {
           label: 'Summer',
           fill: false,
           data: [numberSummer[0], numberSummer[1], numberSummer[2], numberSummer[3], numberSummer[4], numberSummer[5], numberSummer[6], numberSummer[7],],
           backgroundColor: ['rgba(192,80,77, 1)',],
           borderColor: [
             'rgba(192,80,77, 1)',
 
           ],
           borderWidth: 2
         },
 
         ]
 
       },
       options: {
         title: {
           display: true,
           text: 'Yearly semester wise SLASS',
           scales: {
             xAxes: [{
               stacked: true
             }],
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



  }).fail(function (response) {
    console.log(response.responseText);
  });



})


