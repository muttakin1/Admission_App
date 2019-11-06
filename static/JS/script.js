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


    // twentyThirteenStd = noofStd.filter(it => it.year.includes('2013'));

    // a = twentyThirteenStd.reduce((total, currentValue) => {

    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyFourteenStd = noofStd.filter(it => it.year.includes('2014'));
    // b = twentyFourteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyFifteenStd = noofStd.filter(it => it.year.includes('2015'));
    // c = twentyFifteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentySixteenStd = noofStd.filter(it => it.year.includes('2016'));
    // d = twentySixteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentySeventeenStd = noofStd.filter(it => it.year.includes('2017'));
    // e = twentySeventeenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyEightteenStd = noofStd.filter(it => it.year.includes('2018'));
    // f = twentyEightteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyNineteenStd = noofStd.filter(it => it.year.includes('2019'));
    // g = twentyNineteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)






    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Number Of Students',
          data: [numberOfStd[0], numberOfStd[1], numberOfStd[2], numberOfStd[3], numberOfStd[4], numberOfStd[5], numberOfStd[6], numberOfStd[7],],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',

          ],
          borderWidth: 2
        }]
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


$("#schoolWise").click(function (event) {
  $.ajax({
    method: "GET",
    url: "/data/list"
  }).done(function (response) {

    console.log(response)
    let noofStd = response.datas

    let counter=0
    let counterSob=0
    let counterOther = 0
    let numberOfStd = []
    let numberOfSob=[]
    let numberOfOth=[]
    for (let i = 2013; i <= 2019; i++) {
      noofStd.forEach((item, index) => {
        if (item.year == i && item.School=="SECS" ) {
          counter = counter + Number(item.no_of_Student)
         
        }
        else if (item.year == i && item.School=="SoB" ) {
          counterSob = counterSob + Number(item.no_of_Student)
        }

        else if (item.year == i &&(item.School=="Phar"|| item.School=="SESM" || item.School=="SLASS"|| item.School=="SLS" )) {
          counterOther = counterOther + Number(item.no_of_Student)
        }
      
      }

      );
      
      numberOfStd.push(counter)
      numberOfSob.push(counterSob)
      numberOfOth.push(counterOther)
      counter=0 
      counterSob=0 
      counterOther=0
    }
    console.log(numberOfStd)
    console.log(numberOfSob)
    console.log(numberOfOth)

    // twentyThirteenStd = noofStd.filter(it => it.year.includes('2013') && it.School.includes("SECS"));

    // a = twentyThirteenStd.reduce((total, currentValue) => {

    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    
    // twentyFourteenStd = noofStd.filter(it => it.year.includes('2014')&& it.School.includes("SECS"));
    // b = twentyFourteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyFifteenStd = noofStd.filter(it => it.year.includes('2015')&& it.School.includes("SECS"));
    // c = twentyFifteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentySixteenStd = noofStd.filter(it => it.year.includes('2016')&& it.School.includes("SECS"));
    // d = twentySixteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentySeventeenStd = noofStd.filter(it => it.year.includes('2017')&& it.School.includes("SECS"));
    // e = twentySeventeenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyEightteenStd = noofStd.filter(it => it.year.includes('2018')&& it.School.includes("SECS"));
    // f = twentyEightteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)
    // twentyNineteenStd = noofStd.filter(it => it.year.includes('2019')&& it.School.includes("SECS"));
    // g = twentyNineteenStd.reduce((total, currentValue) => {
    //   return total + Number(currentValue.no_of_Student)
    // }, 0)


    

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
        },{
          label: 'Number Of Students in SoB',
          data: [numberOfSob[0],numberOfSob[1],numberOfSob[2],numberOfSob[3],numberOfSob[4],numberOfSob[5],numberOfSob[6],numberOfSob[7],],
          
          borderColor: [
            'rgba(220,180,0,1)',

          ],
          borderWidth: 2
        },
        {
          label: 'Number Of Students in Others',
          data: [numberOfOth[0],numberOfOth[1],numberOfOth[2],numberOfOth[3],numberOfOth[4],numberOfOth[5],numberOfOth[6],numberOfOth[7],],
          
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




