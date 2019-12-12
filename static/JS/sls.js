// Major Wise students' interest @ SECS LINE


var myChart2
var myChart3
var myChart4

function saveTitle() {
  var chTitle2 = document.getElementById('chartTitle2').value;
  myChart2.config.options.title.text = chTitle2;
  console.log(chTitle2);
  myChart2.update();

  var chTitle3 = document.getElementById('chartTitle3').value;
  myChart3.config.options.title.text = chTitle3;
  console.log(chTitle3);
  myChart3.update();

  var chTitle4 = document.getElementById('chartTitle4').value;
  myChart4.config.options.title.text = chTitle4;
  console.log(chTitle4);
  myChart4.update();
}

$("#MajorWiseStudentsSLS").click(function (event) {
  $(".dropdown").show();
  $("#content").show();
  getBtn();

  $("#tableMenu2 a").click(function (e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton2").text(selText);
    console.log(selText)
    //console.log(myChart.config.options.type)
    myChart2.config.type = selText
    myChart2.update()
  });

  $("#tableMenu3 a").click(function (e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton3").text(selText);
    console.log(selText)
    //console.log(myChart.config.options.type)
    myChart3.config.type = selText
    myChart3.update()
  });
  $("#tableMenu4 a").click(function (e) {
    e.preventDefault(); // cancel the link behaviour
    var selText = $(this).text();
    $("#tableButton4").text(selText);
    console.log(selText)
    //console.log(myChart.config.options.type)
    myChart4.config.type = selText
    myChart4.update()
  });
 
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    //    console.log(response)
    let noofStd = response.datas

    Yearvalue = $("#focusYearVal").val()
    startYear =$("#startYearVal").val()
    finishYear =$("#finishYearVal").val()
    var period = finishYear-startYear+1;
    var years=[];
    var y=Number(startYear);

         for(let i=0;i<period;i++)
           {
             years[i]=y;
             y=y+1;
          }

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

    var ctx = document.getElementById('myChart');
     $(ctx).show()
    $(ctx).addClass("chartPDFunique")
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


    var ctx = document.getElementById('myChart1');
     $(ctx).show()
    $(ctx).addClass("chartPDFunique")
    var myChart = new Chart(ctx, {
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
    var ctx = document.getElementById('myChart2');
     $(ctx).show()
    $(ctx).addClass("chartPDFunique")
    myChart2 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [{
          lineTension: 0.1,
          label: 'Number Of Students in Biochemistry',
          fill: false,
          data: numberOfBiochem,//[numberOfBiochem[0], numberOfBiochem[1], numberOfBiochem[2], numberOfBiochem[3], numberOfBiochem[4], numberOfBiochem[5], numberOfBiochem[6], numberOfBiochem[7],],
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
          data: numberOfBiochem_Biotech,//[numberOfBiochem_Biotech[0], numberOfBiochem_Biotech[1], numberOfBiochem_Biotech[2], numberOfBiochem_Biotech[3], numberOfBiochem_Biotech[4], numberOfBiochem_Biotech[5], numberOfBiochem_Biotech[6], numberOfBiochem_Biotech[7],],
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
          data: numberOfMicrobio,//[numberOfMicrobio[0], numberOfMicrobio[1], numberOfMicrobio[2], numberOfMicrobio[3], numberOfMicrobio[4], numberOfMicrobio[5], numberOfMicrobio[6], numberOfMicrobio[7],],
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
    var ctx = document.getElementById('myChart3');
     $(ctx).show()
    $(ctx).addClass("chartPDFunique")
    myChart3 = new Chart(ctx, {
      type: 'line',
      data: {
        labels: year,
        datasets: [
          {
            lineTension: 0.1,
            label: 'Number Of Students in Biochemistry',
            // fill: false,
            data: numberOfBiochem,// [numberOfBiochem[0], numberOfBiochem[1], numberOfBiochem[2], numberOfBiochem[3], numberOfBiochem[4], numberOfBiochem[5], numberOfBiochem[6], numberOfBiochem[7],],
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
            data: numberOfBiochem_Biotech,//[numberOfBiochem_Biotech[0], numberOfBiochem_Biotech[1], numberOfBiochem_Biotech[2], numberOfBiochem_Biotech[3], numberOfBiochem_Biotech[4], numberOfBiochem_Biotech[5], numberOfBiochem_Biotech[6], numberOfBiochem_Biotech[7],],
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
            data: numberOfMicrobio,// [numberOfMicrobio[0], numberOfMicrobio[1], numberOfMicrobio[2], numberOfMicrobio[3], numberOfMicrobio[4], numberOfMicrobio[5], numberOfMicrobio[6], numberOfMicrobio[7],],
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
      var ctx = document.getElementById('myChart4');
       $(ctx).show()
    $(ctx).addClass("chartPDFunique")
      myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: year,
          datasets: [{
            label: 'Autumn',
            fill: false,
            data: numberAutumn,//[numberAutumn[0], numberAutumn[1], numberAutumn[2], numberAutumn[3], numberAutumn[4], numberAutumn[5], numberAutumn[6], numberAutumn[7],],
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
            data: numberSpring,//[numberSpring[0], numberSpring[1], numberSpring[2], numberSpring[3], numberSpring[4], numberSpring[5], numberSpring[6], numberSpring[7],],
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
            data: numberSummer,//[numberSummer[0], numberSummer[1], numberSummer[2], numberSummer[3], numberSummer[4], numberSummer[5], numberSummer[6], numberSummer[7],],
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


      removeCanvas();



  }).fail(function (response) {
    console.log(response.responseText);
  });

})