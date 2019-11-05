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
    url: "/data/list1"
  }).done(function (response) {

    console.log(response)
    let noofStd = response.datas
    twentyThirteenStd = noofStd.filter(it => it.year.includes('2013'));
    a = twentyThirteenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    twentyFourteenStd = noofStd.filter(it => it.year.includes('2014'));
    b = twentyFourteenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    twentyFifteenStd = noofStd.filter(it => it.year.includes('2015'));
    c = twentyFifteenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    twentySixteenStd = noofStd.filter(it => it.year.includes('2016'));
    d = twentySixteenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    twentySeventeenStd = noofStd.filter(it => it.year.includes('2017'));
    e = twentySeventeenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    twentyEightteenStd = noofStd.filter(it => it.year.includes('2018'));
    f = twentyEightteenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    twentyNineteenStd = noofStd.filter(it => it.year.includes('2019'));
    g = twentyNineteenStd.reduce((total, currentValue) => {
      return total + Number(currentValue.no_of_Student)
    }, 0)
    





    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        datasets: [{
          label: 'Number Of Students',
          data: [a,b,c,d,e,f,g],
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

function add(item) {
  return std = [item.no_of_Student]

}

