var admissionData = {
  School: $('#schoolN').val(),
  Department: $('#deptN').val(),
  Major: $('#majorN').val(),
  no_of_Student: $('#studentNo').val(),
  no: $('#examNo').val(),
  year: $('#yearNo').val(),
  semester_no: $('#semesterN').val(),
  Semester: $('#semesterNum').val(),
}


$("#datainput").click(function (event) {


  $.ajax({
    method: "POST",
    url: "/data/new",

    data: admissionData

  }).done(function (response) {
    console.log(response)
  }).fail(function (response) {
    console.log(response)
  })
})

function add(item) {
  //Query function

}

$("#getdata").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {
    console.log(response);
  }).fail(function (response) {
    console.log(response.responseText);
  });

})
$("#getline").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    //console.log(response)
    let noofStd = response.datas

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


    //var ctx = document.getElementById('myChart');


  
    // var myChart = new Chart(ctx, {
    //   type: 'line',
    //   data: {
    //     labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    //     datasets: [{
    //       label: 'Number Of Students',
    //       data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',

    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',

    //       ],
    //       borderWidth: 2
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // });

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
    let counterSob = 0
    let counterOther = 0
    let numberOfStd = []
    let numberOfSob = []
    let numberOfOth = []
    for (let i = 2013; i <= 2019; i++) {
      noofStd.forEach((item, index) => {
        if (item.year == i && item.School == "SECS") {
          counter = counter + Number(item.no_of_Student)

        }
        else if (item.year == i && item.School == "SoB") {
          counterSob = counterSob + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.School == "Phar" || item.School == "SESM" || item.School == "SLASS" || item.School == "SLS")) {
          counterOther = counterOther + Number(item.no_of_Student)
        }

      }

      );

      numberOfStd.push(counter)
      numberOfSob.push(counterSob)
      numberOfOth.push(counterOther)
      counter = 0
      counterSob = 0
      counterOther = 0
    }
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Number Of Students in SECS',
          data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],

          borderColor: [
            'rgba(255, 99, 132, 1)',

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
    let counterSob = 0
    let counterOther = 0
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
          counterSob = counterSob + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.School == "Phar" || item.School == "SESM")) {
          counterOther = counterOther + Number(item.no_of_Student)
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
      numberOfSob.push(counterSob)
      numberOfOth.push(counterOther)
      numberOfSlass.push(counterSlass)
      numberOfSls.push(counterSls)
      counter = 0
      counterSob = 0
      counterOther = 0
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
    let counterSob = 0
    let counterOther = 0
    let numberOfStd = []
    let numberOfSob = []
    let numberOfOth = []
    for (let i = 2013; i <= 2019; i++) {
      noofStd.forEach((item, index) => {
        if (item.year == i && item.School == "SLASS") {
          counter = counter + Number(item.no_of_Student)

        }
        else if (item.year == i && item.School == "SLS") {
          counterSob = counterSob + Number(item.no_of_Student)
        }

        else if (item.year == i && (item.School == "Phar" || item.School == "SESM")) {
          counterOther = counterOther + Number(item.no_of_Student)
        }

      }

      );

      numberOfStd.push(counter)
      numberOfSob.push(counterSob)
      numberOfOth.push(counterOther)
      counter = 0
      counterSob = 0
      counterOther = 0
    }
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Number Of Students in Slass',
          data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],

          borderColor: [
            'rgba(255, 99, 132, 1)',

          ],
          borderWidth: 2
        }, {
          label: 'Number Of Students in SLS',
          data: [numberOfSob[0], numberOfSob[1], numberOfSob[2], numberOfSob[3], numberOfSob[4], numberOfSob[5], numberOfSob[6], numberOfSob[7],],

          borderColor: [
            'rgba(220,180,0,1)',

          ],
          borderWidth: 2
        },
        {
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

// $("#getFocusYear").click(function (event) {


//   $.ajax({
//     method: "GET",
//     url: "/data/list"
//   }).done(function (response) {

//     Yearvalue = $("#focusYearVal").val()
    
//     console.log(Yearvalue)
//     let noofStd = response.datas
//     let counterSecs=0
//     let counterSlass = 0
//     let counterSob = 0
//     let counterOther = 0
//     let counterAutumn = 0
//     let counterSummer = 0
//     let counterSpring = 0
//     let counterSls=0
//     let numberOfSls=[]
//     let numberOfSlass = []
//     let numberOfSob = []
//     let numberOfOth = []
//     let numberOfSecs = []
//     let numberOfAutumn = []
//     let numberOfSummer = []
//     let numberOfSpring = []
//     let numberOfBBAMGT=[]
//     let counterBBAMgt= 0
//     for (let i = 2013; i <= 2019; i++) {
//       noofStd.forEach((item, index) => {
//         if (item.year == Yearvalue && item.Semester == "1") {
//           counterAutumn = counterAutumn + Number(item.no_of_Student)

//         }
//         else if (item.year == Yearvalue && item.Semester == "2") {
//           counterSpring = counterSpring + Number(item.no_of_Student)
//         }

//         else if (item.year == Yearvalue && item.Semester == "3") {
//           counterSummer = counterSummer + Number(item.no_of_Student)
//         }
//         if (item.year == Yearvalue && item.School == "SLASS") {
//           counterSlass = counterSlass + Number(item.no_of_Student)

//         }
//         else if (item.year == Yearvalue && item.School == "SoB") {
//           counterSob = counterSob + Number(item.no_of_Student)
//         }

//         else if (item.year == Yearvalue && (item.School == "Phar" || item.School == "SESM")) {
//           counterOther = counterOther + Number(item.no_of_Student)
//         }
//         else if (item.year == Yearvalue && item.School == "SECS") {
//           counterSecs = counterSecs + Number(item.no_of_Student)
//         }
//         else if (item.year == Yearvalue && item.School == "SLS") {
//           counterSls = counterSls + Number(item.no_of_Student)
          
//         }
//         if (item.year == Yearvalue && item.Major== "BBA - Management Information Systems") {
//           counterBBAMgt = counterBBAMgt + Number(item.no_of_Student)
          
//         }

//       }



//       );
//       numberOfSlass.push(counterSlass)
//       numberOfSob.push(counterSob)
//       numberOfOth.push(counterOther)
//       numberOfSecs.push(counterSecs)
//       numberOfAutumn.push(counterAutumn)
//       numberOfSpring.push(counterSpring)
//       numberOfSummer.push(counterSummer)
//       numberOfSls.push(counterSls)
//       numberOfBBAMGT.push(counterBBAMgt)
      
//       counterSls=0
//       counterAutumn = 0
//       counterSecs = 0
//       counterSpring = 0
//       counterSummer = 0
//       counterSlass = 0
//       counterSob = 0
//       counterOther = 0
//       counterBBAMgt=0

//     }
    
//     var ctx = document.getElementById('myChart');
//     var myChart = new Chart(ctx, {
//       type: 'pie',
//       data: {
        
//         labels: ['Spring', 'Summer', 'Autumn'],
//         datasets: [{
//           label: 'Number Of Students in ' + Yearvalue,
//           data: [numberOfAutumn[0], numberOfSpring[0], numberOfSummer[0]],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//           ],
//           borderWidth: 2
//         },
//         ]

//       },
//       options: {
//         plugins:{
//           labels: {
//           render: 'percentage',
//          // fontColor: ['green', 'white', 'red'],
//           precision: 2,
//           arc: true,
//           }
//           },
        
//         title: {
//           display: true,
//           text: Yearvalue + ' @ IUB',
//           fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

//         },

//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//     var ctx = document.getElementById('myChart1');
//     var myChart1 = new Chart(ctx, {
//       type: 'pie',
//       data: {
       
//         labels: ['Spring', 'Summer', 'Autumn'],
//         datasets: [{
//           label: 'Number Of Students in ' + Yearvalue,
//           data: [numberOfSls[0], numberOfSlass[0], numberOfSob[0],numberOfOth[0],numberOfSecs[0]],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//           ],
//           borderWidth: 2
//         },
//         ]

//       },
//       options: {
//         plugins:{
          
//           labels: {
//             render: 'percentage',
           
//             precision: 2
//           }
//         },
//         title: {
//           display: true,
//           text: Yearvalue + ' School wise distribution',
//           fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

//         },
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//     var ctx = document.getElementById('myChart2');
//     var myChart = new Chart(ctx, {
//       type: 'pie',
//       data: {
        
//         labels: ['Spring', 'Summer', 'Autumn'],
//         datasets: [{
//           label: 'Number Of Students in ' + Yearvalue,
//           data: [numberOfBBAMGT[0]],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//           ],
//           borderWidth: 2
//         },
//         ]

//       },
//       options: {
        
//         title: {
//           display: true,
//           text: Yearvalue + ' @ IUB',
//           fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"

//         },

//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });

//   }).fail(function (response) {
//     console.log(response.responseText);
//   });

// })
