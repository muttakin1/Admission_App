// Major Wise students' interest @ SECS LINE
$("#MajorWiseStudentsSESM").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
    //    console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterPharmacy = 0
      let counterENV = 0
      let counterENV_management = 0
      let counterPopulation_Env = 0
      let numberOfPharmacy = []
      let numberOfENV = []
      let numberOfENV_management = []
      let numberOfPoplation_Env = []
     

      for (let i = 2013; i <= 2019; i++) {
        noofStd.forEach((item, index) => {
          if (item.year == i && item.Major == "B.Pharm - Pharmacy") {
                counterPharmacy = counterPharmacy + Number(item.no_of_Student)
                    // console.log(counterPharmacy)
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

          
          });

  
        numberOfPharmacy.push(counterPharmacy)
        numberOfENV_management.push(counterENV_management)
        numberOfENV.push(counterENV)
        numberOfPoplation_Env.push(counterPopulation_Env)
        counterPharmacy = 0
        counterENV_management = 0
        counterENV = 0
        counterPopulation_Env = 0
      }
    //   Line graph
      var ctx = document.getElementById('myChart');
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
      var ctx = document.getElementById('myChart1');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{ 
              lineTension:0.1,
              label: 'Number Of Students in Population_ENV',
              // fill: false,
              data: [numberOfPoplation_Env[0], numberOfPoplation_Env[1], numberOfPoplation_Env[2], numberOfPoplation_Env[3], numberOfPoplation_Env[4], numberOfPoplation_Env[5], numberOfPoplation_Env[6], numberOfPoplation_Env[7],],
              backgroundColor: [ 'rgba(195,187,208, 1)',],
              borderColor: [
                'rgba(195,187,208,1)',
    
              ],
              borderWidth: 2
            },          
          {lineTension:0.1,
            label: 'Number Of Students in ENV_Management',
            // fill: false,
            data: [numberOfENV_management[0], numberOfENV_management[1], numberOfENV_management[2], numberOfENV_management[3], numberOfENV_management[4], numberOfENV_management[5], numberOfENV_management[6], numberOfENV_management[7],],
            backgroundColor: [ 'rgba(120, 96, 150, 1)',],
            borderColor: [
              'rgba(120, 96, 150,1)',
  
            ],
            borderWidth: 2
          },
          {lineTension:0.1,
            label: 'Number Of Students in ENV',
            // fill: false,
            data: [numberOfENV[0], numberOfENV[1], numberOfENV[2], numberOfENV[3], numberOfENV[4], numberOfENV[5], numberOfENV[6], numberOfENV[7],],
            backgroundColor: [ 'rgba(156,139,179, 1)',],
            borderColor: [
              'rgba(156,139,179,1)',
  
            ],
            borderWidth: 2
          },

          {lineTension:0.1,
            label: 'Number Of Students in Pharmacy',
            // fill: false,
            data: [numberOfPharmacy[0], numberOfPharmacy[1], numberOfPharmacy[2], numberOfPharmacy[3], numberOfPharmacy[4], numberOfPharmacy[5], numberOfPharmacy[6], numberOfPharmacy[7],],
            backgroundColor: [ 'rgba(100, 79, 126, 1)',],
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
            text: 'Major wise Students interest @ SESM+Pharmacy'},
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

   
  
    }).fail(function (response) {
      console.log(response.responseText);
    });

    
    
  })


  