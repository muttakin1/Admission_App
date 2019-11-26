// Major Wise students' interest @ SECS LINE
$("#MajorWiseStudentsSLS").click(function (event) {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
  
    //    console.log(response)
      let noofStd = response.datas
  
      let counter = 0
      let counterBiochem = 0
      let counterMicroBio = 0
      let counterBiochem_Biotech = 0
      let numberOfBiochem = []
      let numberOfMicrobio = []
      let numberOfBiochem_Biotech = []
     

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

          
          });

  
        numberOfBiochem.push(counterBiochem)
        numberOfBiochem_Biotech.push(counterBiochem_Biotech)
        numberOfMicrobio.push(counterMicroBio)
        counterBiochem = 0
        counterBiochem_Biotech = 0
        counterMicroBio = 0
      }
    //   Line graph
      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [{
            lineTension:0.1,
            label: 'Number Of Students in Biochemistry',
            fill: false,
            data: [numberOfBiochem[0], numberOfBiochem[1], numberOfBiochem[2], numberOfBiochem[3], numberOfBiochem[4], numberOfBiochem[5], numberOfBiochem[6], numberOfBiochem[7],],
            backgroundColor: [  'rgba(125,152,74, 1)',],
            borderColor: [
              'rgba(125,152,74, 1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Biochemistry and Biotechnology',
            fill: false,
            data: [numberOfBiochem_Biotech[0], numberOfBiochem_Biotech[1], numberOfBiochem_Biotech[2], numberOfBiochem_Biotech[3], numberOfBiochem_Biotech[4], numberOfBiochem_Biotech[5], numberOfBiochem_Biotech[6], numberOfBiochem_Biotech[7],],
            backgroundColor: [  'rgba(197,213,173,1)',],
            borderColor: [
              'rgba(197,213,173,1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Microbiology',
            fill: false,
            data: [numberOfMicrobio[0], numberOfMicrobio[1], numberOfMicrobio[2], numberOfMicrobio[3], numberOfMicrobio[4], numberOfMicrobio[5], numberOfMicrobio[6], numberOfMicrobio[7],],
            backgroundColor: [  'rgba(153,185,91,1)',],
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
      var ctx = document.getElementById('myChart1');
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          datasets: [          
            {
            lineTension:0.1,
            label: 'Number Of Students in Biochemistry',
            // fill: false,
            data: [numberOfBiochem[0], numberOfBiochem[1], numberOfBiochem[2], numberOfBiochem[3], numberOfBiochem[4], numberOfBiochem[5], numberOfBiochem[6], numberOfBiochem[7],],
            backgroundColor: [  'rgba(125,152,74, 1)',],
            borderColor: [
              'rgba(125,152,74, 1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Biochemistry and Biotechnology',
            // fill: false,
            data: [numberOfBiochem_Biotech[0], numberOfBiochem_Biotech[1], numberOfBiochem_Biotech[2], numberOfBiochem_Biotech[3], numberOfBiochem_Biotech[4], numberOfBiochem_Biotech[5], numberOfBiochem_Biotech[6], numberOfBiochem_Biotech[7],],
            backgroundColor: [  'rgba(197,213,173,1)',],
            borderColor: [
              'rgba(197,213,173,1)',
  
            ],
            borderWidth: 2
          },
          {
            lineTension:0.1,
            label: 'Number Of Students in Microbiology',
            // fill: false,
            data: [numberOfMicrobio[0], numberOfMicrobio[1], numberOfMicrobio[2], numberOfMicrobio[3], numberOfMicrobio[4], numberOfMicrobio[5], numberOfMicrobio[6], numberOfMicrobio[7],],
            backgroundColor: [  'rgba(153,185,91,1)',],
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
            yAxes: [{  stacked: true,
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


  