// Major Wise students' interest @ SECS LINE
$("#MajorWiseStudentsSLASS").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
    //   console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterEngTrainingLang = 0
      let counterANT = 0
      let counterMedia_Com = 0
      let counterLaw = 0
      let counterEngLit = 0
      let counterGSG = 0
      let counterSOC = 0
      let counterDeptENG = 0
      let counterDeptSOC = 0
      let counterDeptGSG = 0
      let numberOfEngTrainingLang = []
      let numberOfSOC = []
      let numberOfANT = []
      let numberOfMedia_Com = []
      let numberOfLaw = []
      let numberOfEngLit = []
      let numberOfGSG = []
      let numberOfDeptENG = []
      let numberOfDeptSOC = []
      let numberOfDeptGSG = []

      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i && item.Major == "BA - English Language Teaching") {
                counterEngTrainingLang = counterEngTrainingLang + Number(item.no_of_Student)
                    // console.log(counterEngTrainingLang)
          }

            else if (item.year == i && item.Major == "BSS - Global Studies and Governance") {
            counterGSG = counterGSG + Number(item.no_of_Student)
            }

            else if (item.year == i && (item.Major == ",BSS - Media and Communication")) {
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

            if (item.year == i && item.Dept == "CSE") {
                counterDeptENG = counterDeptENG + Number(item.no_of_Student)
                   
            }

            if (item.year == i && item.Dept == "EEE") {
                counterDeptSOC = counterDeptSOC + Number(item.no_of_Student)
                }

                if (item.year == i && item.Dept == "PhySci") {
                    counterDeptGSG = counterDeptGSG + Number(item.no_of_Student)
                    }

          
          });

  
        numberOfEngTrainingLang.push(counterEngTrainingLang)
        numberOfGSG.push(counterGSG)
        numberOfMedia_Com.push(counterMedia_Com)
        numberOfANT.push(counterANT)
        numberOfLaw.push(counterLaw)
        numberOfSOC.push(counterSOC)
        numberOfEngLit.push(counterEngLit)
        numberOfDeptENG.push(counterDeptENG)
        numberOfDeptSOC.push(counterDeptSOC)
        numberOfDeptGSG.push(counterDeptGSG)
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
      }
    //   Line graph
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            label: 'Number Of Students in EngTrainingLang',
            fill: false,
            data: [numberOfEngTrainingLang[0], numberOfEngTrainingLang[1], numberOfEngTrainingLang[2], numberOfEngTrainingLang[3], numberOfEngTrainingLang[4], numberOfEngTrainingLang[5], numberOfEngTrainingLang[6], numberOfEngTrainingLang[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }, {
            label: 'Number Of Students in GSG',
            fill: false,
            data: [numberOfGSG[0], numberOfGSG[1], numberOfGSG[2], numberOfGSG[3], numberOfGSG[4], numberOfGSG[5], numberOfGSG[6], numberOfGSG[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Media Com',
            fill: false,
            data: [numberOfMedia_Com[0], numberOfMedia_Com[1], numberOfMedia_Com[2], numberOfMedia_Com[3], numberOfMedia_Com[4], numberOfMedia_Com[5], numberOfMedia_Com[6], numberOfMedia_Com[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Anthropology',
            fill: false,
            data: [numberOfANT[0], numberOfANT[1], numberOfANT[2], numberOfANT[3], numberOfANT[4], numberOfANT[5], numberOfANT[6], numberOfANT[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in English Literature',
            fill: false,
            data: [numberOfEngLit[0], numberOfEngLit[1], numberOfEngLit[2], numberOfEngLit[3], numberOfEngLit[4], numberOfEngLit[5], numberOfEngLit[6], numberOfEngLit[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Law',
            fill: false,
            data: [numberOfLaw[0], numberOfLaw[1], numberOfLaw[2], numberOfLaw[3], numberOfLaw[4], numberOfLaw[5], numberOfLaw[6], numberOfLaw[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Sociology',
            fill: false,
            data: [numberOfSOC[0], numberOfSOC[1], numberOfSOC[2], numberOfSOC[3], numberOfSOC[4], numberOfSOC[5], numberOfSOC[6], numberOfSOC[7],],
  
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
            label: 'Number Of Students in Sociology',
            // fill: false,
            data: [numberOfSOC[0], numberOfSOC[1], numberOfSOC[2], numberOfSOC[3], numberOfSOC[4], numberOfSOC[5], numberOfSOC[6], numberOfSOC[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },              
            
            {
            label: 'Number Of Students in EngTrainingLang',
            // fill: false,
            data: [numberOfEngTrainingLang[0], numberOfEngTrainingLang[1], numberOfEngTrainingLang[2], numberOfEngTrainingLang[3], numberOfEngTrainingLang[4], numberOfEngTrainingLang[5], numberOfEngTrainingLang[6], numberOfEngTrainingLang[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          }, {
            label: 'Number Of Students in GSG',
            // fill: false,
            data: [numberOfGSG[0], numberOfGSG[1], numberOfGSG[2], numberOfGSG[3], numberOfGSG[4], numberOfGSG[5], numberOfGSG[6], numberOfGSG[7],],
  
            borderColor: [
              'rgba(220,180,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Media Com',
            // fill: false,
            data: [numberOfMedia_Com[0], numberOfMedia_Com[1], numberOfMedia_Com[2], numberOfMedia_Com[3], numberOfMedia_Com[4], numberOfMedia_Com[5], numberOfMedia_Com[6], numberOfMedia_Com[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Anthropology',
            // fill: false,
            data: [numberOfANT[0], numberOfANT[1], numberOfANT[2], numberOfANT[3], numberOfANT[4], numberOfANT[5], numberOfANT[6], numberOfANT[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Eng Lit',
            // fill: false,
            data: [numberOfEngLit[0], numberOfEngLit[1], numberOfEngLit[2], numberOfEngLit[3], numberOfEngLit[4], numberOfEngLit[5], numberOfEngLit[6], numberOfEngLit[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },
          {
            label: 'Number Of Students in Law',
            // fill: false,
            data: [numberOfLaw[0], numberOfLaw[1], numberOfLaw[2], numberOfLaw[3], numberOfLaw[4], numberOfLaw[5], numberOfLaw[6], numberOfLaw[7],],
  
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
                max: 300,
                stepSize: 100,
                beginAtZero: true
              }
            }]
          }
        }
      });

    //   SLASS Dept
      var ctx = document.getElementById('myChart2');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [ {
            label: 'Number Of Students in SOC',
            fill: false,
            data: [numberOfDeptSOC[0], numberOfDeptSOC[1], numberOfDeptSOC[2], numberOfDeptSOC[3], numberOfDeptSOC[4], numberOfDeptSOC[5], numberOfDeptSOC[6], numberOfDeptSOC[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },  
            {
            label: 'Number Of Students in ENG',
            fill: false,
            data: [numberOfDeptENG[0], numberOfDeptENG[1], numberOfDeptENG[2], numberOfDeptENG[3], numberOfDeptENG[4], numberOfDeptENG[5], numberOfDeptENG[6], numberOfDeptENG[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          },  {
            label: 'Number Of Students in GSG',
            fill: false,
            data: [numberOfDeptGSG[0], numberOfDeptGSG[1], numberOfDeptGSG[2], numberOfDeptGSG[3], numberOfDeptGSG[4], numberOfDeptGSG[5], numberOfDeptGSG[6], numberOfDeptGSG[7],],
            
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
            label: 'Number Of Students in SOC',
            fill: false,
            data: [numberOfDeptSOC[0], numberOfDeptSOC[1], numberOfDeptSOC[2], numberOfDeptSOC[3], numberOfDeptSOC[4], numberOfDeptSOC[5], numberOfDeptSOC[6], numberOfDeptSOC[7],],
  
            borderColor: [
              'rgba(180,130,0,1)',
  
            ],
            borderWidth: 2
          },  
            {
            label: 'Number Of Students in ENG',
            fill: false,
            data: [numberOfDeptENG[0], numberOfDeptENG[1], numberOfDeptENG[2], numberOfDeptENG[3], numberOfDeptENG[4], numberOfDeptENG[5], numberOfDeptENG[6], numberOfDeptENG[7],],
            
            borderColor: [
              'rgba(255, 99, 132, 1)',
  
            ],
            borderWidth: 2
          },  {
            label: 'Number Of Students in GSG',
            fill: false,
            data: [numberOfDeptGSG[0], numberOfDeptGSG[1], numberOfDeptGSG[2], numberOfDeptGSG[3], numberOfDeptGSG[4], numberOfDeptGSG[5], numberOfDeptGSG[6], numberOfDeptGSG[7],],
            
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


  