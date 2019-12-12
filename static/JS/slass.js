// // Major Wise students' interest @ SECS LINE

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

$("#MajorWiseStudentsSLASS").click(function (event) {
  getBtn();
  
  $(".dropdown").show();
  $("#content").show();

  
    
  $("#tableMenu2 a").click(function(e){
    console.log("hello2")
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
  //getBtn();
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

    console.log(year)
    var ctx = document.getElementById('myChart');
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
          text: Yearvalue + ' @ SLASS Majors',
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize:20  

        },


      }
    });


    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
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
    var ctx = document.getElementById('myChart2');
    myChart2 = new Chart(ctx, {
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
    var ctx = document.getElementById('myChart3');
    myChart3 = new Chart(ctx, {
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
    var ctx = document.getElementById('myChart4');
    myChart4 = new Chart(ctx, {
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

    var ctx = document.getElementById('myChart5');
    var myChart = new Chart(ctx, {
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
    var ctx = document.getElementById('myChart6');
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
          }]},
        title: {
          display: true,
          text: 'Yearly semester wise SLASS',
          fontSize:20  
         
          }
        
      }
    });

    removeCanvas();




  }).fail(function (response) {
    console.log(response.responseText);
  });



 })


