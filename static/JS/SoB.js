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

$("#SoB").click(function (event) {
  getBtn();
    
  $(".dropdown").show();
  $("#content").show();
  
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

    let numberBbaSemester = []


<<<<<<< HEAD

    for (let i = startYear; i <= finishYear; i++) {
=======
    let year=[]
    for (let i = startYear; i <= finishYear; i++) {
      year.push(Number(i))
>>>>>>> 55de8dbf8416b61c84317ec678e769e11abf2da8
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





    var ctx = document.getElementById('myChart');
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
          text: 'Majors SOB ' + Yearvalue,
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });
    var ctx = document.getElementById('myChart5');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {

        labels: ['Management Information Systems', 'Finance', 'Investment Management', 'Accounting', 'General Management', 'Human Resources Management', 'International Business', 'Marketing', 'Economics'],
        datasets: [{

          label: 'School of Business ' + Yearvalue,
          data: numberBBA,
          //[numberBBA[0], numberBBA[1], numberBBA[2], numberBBA[3], numberBBA[4], numberBBA[5], numberBBA[6], numberBBA[7], numberBBA[8]],
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
    var ctx = document.getElementById('myChart2');
    myChart2 = new Chart(ctx, {
      type: 'line',
      data: {

<<<<<<< HEAD
        labels: years,//[2013, 2014, 2015, 2016, 2017, 2018, 2019],
=======
        labels: year,
>>>>>>> 55de8dbf8416b61c84317ec678e769e11abf2da8
        datasets: [{
          lineTension: 0.1,
          label: 'Management Information System',
          data: numberYearlyMis,//[numberYearlyMis[0], numberYearlyMis[1], numberYearlyMis[2], numberYearlyMis[3], numberYearlyMis[4], numberYearlyMis[5], numberYearlyMis[6], numberYearlyMis[7],],
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
          data: numberYearlyMkt,//[numberYearlyMkt[0], numberYearlyMkt[1], numberYearlyMkt[2], numberYearlyMkt[3], numberYearlyMkt[4], numberYearlyMkt[5], numberYearlyMkt[6], numberYearlyMkt[7],],
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
          data: numberYearlyAcn,//[numberYearlyAcn[0], numberYearlyAcn[1], numberYearlyAcn[2], numberYearlyAcn[3], numberYearlyAcn[4], numberYearlyAcn[5], numberYearlyAcn[6], numberYearlyAcn[7],],
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
          data:numberYearlyFin,//[numberYearlyFin[0], numberYearlyFin[1], numberYearlyFin[2], numberYearlyFin[3], numberYearlyFin[4], numberYearlyFin[5], numberYearlyFin[6], numberYearlyFin[7],],
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
          data: numberYearlyMgt,//[numberYearlyMgt[0], numberYearlyMgt[1], numberYearlyMgt[2], numberYearlyMgt[3], numberYearlyMgt[4], numberYearlyMgt[5], numberYearlyMgt[6], numberYearlyMgt[7],],
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
          data: numberYearlyHrm,//[numberYearlyHrm[0], numberYearlyHrm[1], numberYearlyHrm[2], numberYearlyHrm[3], numberYearlyHrm[4], numberYearlyHrm[5], numberYearlyHrm[6], numberYearlyHrm[7],],
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
          data: numberYearlyIb,//[numberYearlyIb[0], numberYearlyIb[1], numberYearlyIb[2], numberYearlyIb[3], numberYearlyIb[4], numberYearlyIb[5], numberYearlyIb[6], numberYearlyIb[7],],
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
          data: numberYearlyInvest,//[numberYearlyInvest[0], numberYearlyInvest[1], numberYearlyInvest[2], numberYearlyInvest[3], numberYearlyInvest[4], numberYearlyInvest[5], numberYearlyInvest[6], numberYearlyInvest[7],],
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
          data: numberYearlyEcn,// [numberYearlyEcn[0], numberYearlyEcn[1], numberYearlyEcn[2], numberYearlyEcn[3], numberYearlyEcn[4], numberYearlyEcn[5], numberYearlyEcn[6], numberYearlyEcn[7],],
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
    var ctx = document.getElementById('myChart2');
    myChart3 = new Chart(ctx, {
      type: 'line',
      data: {

<<<<<<< HEAD
        labels: years,//[2013, 2014, 2015, 2016, 2017, 2018, 2019],
=======
        labels: year,
>>>>>>> 55de8dbf8416b61c84317ec678e769e11abf2da8
        datasets: [{
          lineTension: 0.1,
          label: 'Management Information System',
          fill: false,
          data: numberYearlyMis,//[numberYearlyMis[0], numberYearlyMis[1], numberYearlyMis[2], numberYearlyMis[3], numberYearlyMis[4], numberYearlyMis[5], numberYearlyMis[6], numberYearlyMis[7],],
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
          data: numberYearlyMkt,//[numberYearlyMkt[0], numberYearlyMkt[1], numberYearlyMkt[2], numberYearlyMkt[3], numberYearlyMkt[4], numberYearlyMkt[5], numberYearlyMkt[6], numberYearlyMkt[7],],
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
          data: numberYearlyAcn,//[numberYearlyAcn[0], numberYearlyAcn[1], numberYearlyAcn[2], numberYearlyAcn[3], numberYearlyAcn[4], numberYearlyAcn[5], numberYearlyAcn[6], numberYearlyAcn[7],],
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
          data: numberYearlyFin,//[numberYearlyFin[0], numberYearlyFin[1], numberYearlyFin[2], numberYearlyFin[3], numberYearlyFin[4], numberYearlyFin[5], numberYearlyFin[6], numberYearlyFin[7],],
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
          data: numberYearlyMgt, //[numberYearlyMgt[0], numberYearlyMgt[1], numberYearlyMgt[2], numberYearlyMgt[3], numberYearlyMgt[4], numberYearlyMgt[5], numberYearlyMgt[6], numberYearlyMgt[7],],
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
          data: numberYearlyHrm,//[numberYearlyHrm[0], numberYearlyHrm[1], numberYearlyHrm[2], numberYearlyHrm[3], numberYearlyHrm[4], numberYearlyHrm[5], numberYearlyHrm[6], numberYearlyHrm[7],],
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
          data: numberYearlyIb,//[numberYearlyIb[0], numberYearlyIb[1], numberYearlyIb[2], numberYearlyIb[3], numberYearlyIb[4], numberYearlyIb[5], numberYearlyIb[6], numberYearlyIb[7],],
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
          data: numberYearlyInvest,//[numberYearlyInvest[0], numberYearlyInvest[1], numberYearlyInvest[2], numberYearlyInvest[3], numberYearlyInvest[4], numberYearlyInvest[5], numberYearlyInvest[6], numberYearlyInvest[7],],
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
          data: numberYearlyEcn,//[numberYearlyEcn[0], numberYearlyEcn[1], numberYearlyEcn[2], numberYearlyEcn[3], numberYearlyEcn[4], numberYearlyEcn[5], numberYearlyEcn[6], numberYearlyEcn[7],],
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
<<<<<<< HEAD
      var ctx = document.getElementById('myChart5');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: years,//['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
=======
      var ctx = document.getElementById('myChart4');
       myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
          
          labels:year,
>>>>>>> 55de8dbf8416b61c84317ec678e769e11abf2da8
          datasets: [{
            lineTension:0.1,
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
          {lineTension:0.1,
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
          {lineTension:0.1,
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
            text: 'Yearly semester wise SoB',
            fontSize:20  
           
            
          }
        }
      
    });



  }).fail(function (response) {
    console.log(response.responseText);
  });

})