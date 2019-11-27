// Major Wise students' interest @ SECS LINE
$("#MajorWiseStudentsSLS").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    //    console.log(response)
    let noofStd = response.datas
    Yearvalue = $("#focusYearVal").val()

    let counterSLSAutumn=0
    let counterSLSSpring=0
    let counterSLSSummer=0

    let counterYearlyBioChem = 0
    let counterYearlyMicroBio = 0
    let counterYearlyBiochem_Biotech = 0

    let counterBiochem = 0
    let counterMicroBio = 0
    let counterBiochem_Biotech = 0

    let numberOfBiochem = []
    let numberOfMicrobio = []
    let numberOfBiochem_Biotech = []
    let numberYearlySLS=[]
    let numberSLSsemester=[]


    for (let i = 2013; i <= 2019; i++) {
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
      
        if (item.year == Yearvalue && item.Semester == "1" && item.School=="SLS") {
          counterSLSAutumn = counterSLSAutumn + Number(item.no_of_Student)

        }
        else if (item.year == Yearvalue && item.Semester == "2" && item.School=="SLS") {
          counterSLSSpring = counterSLSSpring + Number(item.no_of_Student)
        }

        else if (item.year == Yearvalue && item.Semester == "3" && item.School=="SLS") {
          counterSLSSummer = counterSLSSummer + Number(item.no_of_Student)
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
      counterBiochem = 0
      counterBiochem_Biotech = 0
      counterMicroBio = 0
       counterYearlyBioChem = 0
       counterYearlyMicroBio = 0
      counterYearlyBiochem_Biotech = 0
    }

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Bio-Chemistry','Bio-Chemisrtry & Bio-Technology','Micro-Biology'],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberYearlySLS[0], numberYearlySLS[1], numberYearlySLS[2], ],
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
          text: 'SLS '+ Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

        },


      }
    })
    

    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: {

        labels: ['Spring','Summer','Autumn',],
        datasets: [{
          label: 'Number Of Students in Slass in ' + Yearvalue,
          data: [numberSLSsemester[0], numberSLSsemester[1], numberSLSsemester[2]],
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
          text: Yearvalue + ' @ SLS',
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

        },


      }
    });

    //   Line graph
    var ctx = document.getElementById('myChart2');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
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
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
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



  }).fail(function (response) {
    console.log(response.responseText);
  });



})


