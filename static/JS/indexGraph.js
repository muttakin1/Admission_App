$(document).ready(function() {
    $.ajax({
        method: "GET",
        url: "/data/list"
    }).done(function (response) {
            
        let noofStd = response.datas
        let counterSecs=0
        let counterSlass = 0
        let counterSob = 0
        let counterOther = 0
        let counterAutumn = 0
        let counterSummer = 0
        let counterSpring = 0
        let counterSls=0
      
      
        let numberBBA=[]
        let numberYearlyMis=[]
        let numberYearlyInvest=[]
        let numberYearlyMkt=[]
        let numberYearlyIb=[]
        let numberYearlyHrm=[]
        let numberYearlyFin=[]
        let numberYearlyEcn=[]
        let numberYearlyAcn=[]
        let numberYearlyMgt=[]
            
        let numberBbaSemester=[]
      
        let SemesterDist=[]
       
        let numberOfAutumn = []
        let numberOfSummer = []
        let numberOfSpring = []
            
        for (let i = 2014; i <= 2019; i++) {
            noofStd.forEach((item, index) => {
                if (item.year == 2019 && item.Semester == "1") {
                  counterAutumn = counterAutumn + Number(item.no_of_Student)
        
                }
                else if (item.year == 2019 && item.Semester == "2") {
                  counterSpring = counterSpring + Number(item.no_of_Student)
                }
        
                else if (item.year == 2019 && item.Semester == "3") {
                  counterSummer = counterSummer + Number(item.no_of_Student)
                }
                 if (item.year == 2019 && item.School == "SLASS") {
                   counterSlass = counterSlass + Number(item.no_of_Student)
        
                 }
                else if (item.year == 2019 && item.School == "SoB") {
                  counterSob = counterSob + Number(item.no_of_Student)
                }
        
                else if (item.year == 2019 && (item.School == "Phar" || item.School == "SESM")) {
                  counterOther = counterOther + Number(item.no_of_Student)
                }
                else if (item.year == 2019 && item.School == "SECS") {
                  counterSecs = counterSecs + Number(item.no_of_Student)
                }
                else if (item.year == 2019 && item.School == "SLS") {
                  counterSls = counterSls + Number(item.no_of_Student)
                  
                }        
              });     
              
            
              
            numberBbaSemester.push(counterSlass)
            numberBbaSemester.push(counterSob)
            numberBbaSemester.push(counterOther)
            numberBbaSemester.push(counterSecs)
            numberBbaSemester.push(counterSls)
              
            SemesterDist.push(counterAutumn)
            SemesterDist.push(counterSpring)
            SemesterDist.push(counterSummer)
      
            numberOfAutumn.push(counterAutumn)
            numberOfSpring.push(counterSpring)
            numberOfSummer.push(counterSummer)
      
              
            counterSls=0
            counterAutumn = 0
            counterSecs = 0
            counterSpring = 0
            counterSummer = 0
            counterSlass = 0
            counterSob = 0
            counterOther = 0        
        }
           
            
        var ctx = document.getElementById('indexChart');
            
        var indexChart = new Chart(ctx, {
            type: 'pie',
            data: {
                
                labels: ['Autumn', 'Spring', 'Summer'],
                datasets: [{
                    lineTension:0.1,
                    label: 'Number Of Students in 2019',
                    data: [SemesterDist[0], SemesterDist[1], SemesterDist[2]],
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
                plugins:{
                  datalabels: {
                    formatter: function(value){
                      return value ;
                    }
                  }
                },
                title: {
                  display: true,
                  text: '2019 at IUB',
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize:20
                },
        
                
              }
            });
            var ctx = document.getElementById('indexChart1');
            var indexChart1 = new Chart(ctx, {
              type: 'pie',
              data: {
               
                labels: ['SLASS', 'SoB','SESM+Pharm','SECS','SLS'],
                datasets: [{
                  label: 'Number Of Students in 2019',
                  data: [numberBbaSemester[0], numberBbaSemester[1], numberBbaSemester[2],numberBbaSemester[3],numberBbaSemester[4],numberBbaSemester[5]],
                  backgroundColor: [
                    'rgba(162, 162, 162, 1)',
                    'rgba(30, 70, 122, 1)',
                    'rgba(124, 96, 157, 1)',
                    'rgba(242, 147, 67, 1)',
                    'rgba(151, 186, 86, 1)',
                  ],
                  borderColor: [
                    'rgba(162, 162, 162, 1)',
                    'rgba(30, 70, 122, 1)',
                    'rgba(124, 96, 157, 1)',
                    'rgba(242, 147, 67, 1)',
                    'rgba(151, 186, 86, 1)',
                  ],
                  borderWidth: 2
                },
                ]
        
              },
              options: {
                plugins:{
                  
                  datalabels: {
                    
                    formatter: function(value){
                      return value ;
                    }
                  }
                },
                title: {
                  display: true,
                  text: '2019 School wise distribution',
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize:20  
        
                },
               
              }
             });

             
      
        
        
          }).fail(function (response) {
            console.log(response.responseText);
          });
          
        
        })

// SECS Graphs: myChart6 to myChart12

// $(document).ready(function() {
//     $.ajax({
//         method: "GET",
//         url: "/data/list"
//     }).done(function (response) {
  
  
//       let noofStd = response.datas
     
//       console.log(2019)
  
      
//        // Focus year graphs, Majors
//       let counterYearlyPHY= 0
//       let counterYearlyCSE = 0
//       let counterYearlyCE = 0
//       let counterYearlyEEE = 0
//       let counterYearlyETE = 0
//       let counterYearlyMATH = 0
//       let counterYearlyCS = 0
  
//        // Focus year graphs, Departments
//       let counterYearlyDeptCSE=0
//       let counterYearlyDeptEEE=0
//       let counterYearlyDeptPS=0
      
//        // Major wise Students' interest @ SECS
//       let counterCE = 0
//       let counterCSE = 0
//       let counterETE = 0
//       let counterPhy = 0
//       let counterCS = 0
//       let counterEEE = 0
//       let countermaths = 0
  
//       let numberOfCE = []
//       let numberOfmaths = []
//       let numberOfCSE = []
//       let numberOfETE = []
//       let numberOfPhy = []
//       let numberOfCS = []
//       let numberOfEEE = []
  
//        // Department graphs
//       let counterDeptCSE = 0
//       let counterDeptEEE = 0
//       let counterDeptPhySci = 0
  
//       let numberOfDeptCSE = []
//       let numberOfDeptEEE = []
//       let numberOfDeptPhySci = []
  
//       // Yearly semester wise SECS
//       let counterSpring = 0
//       let counterAutumn = 0
//       let counterSummer = 0
  
//       let numberAutumn=[]
//       let numberSpring=[]
//       let numberSummer=[]   
  
//       let numberDept=[]
//       let numberSECS = []
     
  
//       for (let i = 2013; i <= 2019; i++) {
//         noofStd.forEach((item, index) => {
          
//           // Major wise Student's interest @ SECS
//           if (item.year == i && item.Major == "BSc - Computer Engineering") {
//             counterCE = counterCE + Number(item.no_of_Student)
  
//           }
  
//           else if (item.year == i && item.Major == "BSc - Electrical and Electronic Engineering") {
//             counterEEE = counterEEE + Number(item.no_of_Student)
//           }
  
//           else if (item.year == i && (item.Major == "BSc - Electronic and Telecommunication Engineering")) {
//             counterETE = counterETE + Number(item.no_of_Student)
//           }
  
//           else if (item.year == i && item.Major == "BSc - Computer Science and Engineering") {
//             counterCSE = counterCSE + Number(item.no_of_Student)
//           }
  
//           else if (item.year == i && (item.Major == "BSc - Physics (Hons)")) {
//             counterPhy = counterPhy + Number(item.no_of_Student)
//           }
  
//           else if (item.year == i && item.Major == "BSc - Computer Science") {
//             counterCS = counterCS + Number(item.no_of_Student)
//           }
  
//           else if (item.year == i && (item.Major == "BSc - Mathematics (Hons)")) {
//             countermaths = countermaths + Number(item.no_of_Student)
//           }
  
//           if (item.year == 2019 && item.Major == "BSc - Computer Engineering") {
//             counterYearlyCE = counterYearlyCE + Number(item.no_of_Student)
  
//           }
  
//           else if (item.year == 2019 && item.Major == "BSc - Electrical and Electronic Engineering") {
//             counterYearlyEEE = counterYearlyEEE + Number(item.no_of_Student)
//           }
  
//           else if (item.year == 2019 && (item.Major == "BSc - Electronic and Telecommunication Engineering")) {
//             counterYearlyETE = counterYearlyETE + Number(item.no_of_Student)
//           }
  
//           else if (item.year == 2019 && item.Major == "BSc - Computer Science and Engineering") {
//             counterYearlyCSE = counterYearlyCSE + Number(item.no_of_Student)
//           }
  
//           else if (item.year == 2019 && (item.Major == "BSc - Physics (Hons)")) {
//             counterYearlyPHY = counterYearlyPHY + Number(item.no_of_Student)
//           }
  
//           else if (item.year == 2019 && item.Major == "BSc - Computer Science") {
//             counterYearlyCS = counterYearlyCS + Number(item.no_of_Student)
//           }
  
//           else if (item.year == 2019 && (item.Major == "BSc - Mathematics (Hons)")) {
//             counterYearlyMATH = counterYearlyMATH + Number(item.no_of_Student)
//           }
  
//           // SECS Department
//           if (item.year == i && item.Dept == "CSE") {
//             counterDeptCSE = counterDeptCSE + Number(item.no_of_Student)
  
//           }
  
//           if (item.year == i && item.Dept == "EEE") {
//             counterDeptEEE = counterDeptEEE + Number(item.no_of_Student)
//           }
  
//           if (item.year == i && item.Dept == "PhySci") {
//             counterDeptPhySci = counterDeptPhySci + Number(item.no_of_Student)
//           }
  
//           // Focus year graphs
//           if (item.year == 2019 && item.Dept == "CSE") {
//             counterYearlyDeptCSE= counterYearlyDeptCSE + Number(item.no_of_Student)
  
//           }
  
//           if (item.year == 2019 && item.Dept == "EEE") {
//             counterYearlyDeptEEE = counterYearlyDeptEEE + Number(item.no_of_Student)
//           }
  
//           if (item.year == 2019 && item.Dept == "PhySci") {
//             counterYearlyDeptPS = counterYearlyDeptPS + Number(item.no_of_Student)
//           }
  
//           // Yearly semester wise SECS
//           if (item.year == i  && item.Semester == "3" && item.School == "SECS") {
//             counterAutumn = counterAutumn + Number(item.no_of_Student)
  
//           }
  
//           if (item.year == i  && item.Semester == "1" && item.School == "SECS") {
//             counterSpring = counterSpring + Number(item.no_of_Student)
  
//           }
  
//           if (item.year == i  && item.Semester == "2" && item.School == "SECS") {
//             counterSummer = counterSummer + Number(item.no_of_Student)
  
//           }
  
  
//         });
  
//         // Focus year graphs, Majors
//         numberSECS.push(counterYearlyCE)
//         numberSECS.push(counterYearlyCS)
//         numberSECS.push(counterYearlyCSE)
//         numberSECS.push(counterYearlyEEE)
//         numberSECS.push(counterYearlyETE)
//         numberSECS.push(counterYearlyMATH)
//         numberSECS.push(counterYearlyPHY)
  
//         // Focus year graphs, Departments
//         numberDept.push(counterYearlyDeptCSE)
//         numberDept.push(counterYearlyDeptEEE)
//         numberDept.push(counterYearlyDeptPS)
  
//         // Major wise Students' interest @ SECS
//         numberOfCE.push(counterCE)
//         numberOfEEE.push(counterEEE)
//         numberOfETE.push(counterETE)
//         numberOfCSE.push(counterCSE)
//         numberOfPhy.push(counterPhy)
//         numberOfmaths.push(countermaths)
//         numberOfCS.push(counterCS)
  
//         // Department graphs
//         numberOfDeptCSE.push(counterDeptCSE)
//         numberOfDeptEEE.push(counterDeptEEE)
//         numberOfDeptPhySci.push(counterDeptPhySci)
  
//         // Yearly semester wise SECS
//         numberAutumn.push(counterAutumn)
//         numberSpring.push(counterSpring)
//         numberSummer.push(counterSummer)   
  
  
//         // reinitializing the counter
//         counterYearlyDeptCSE = 0
//         counterYearlyDeptEEE = 0
//         counterYearlyDeptPS = 0
//         counterYearlyPHY = 0
//         counterYearlyCSE = 0
//         counterYearlyCE = 0
//         counterYearlyEEE = 0
//         counterYearlyETE = 0
//         counterYearlyMATH = 0
//         counterYearlyCS = 0
//         counterCE = 0
//         counterEEE = 0
//         counterETE = 0
//         counterCSE = 0
//         counterPhy = 0
//         countermaths = 0
//         counterCS = 0
//         counterDeptCSE = 0
//         counterDeptEEE = 0
//         counterDeptPhySci = 0
//         counterAutumn = 0
//         counterSpring = 0
//         counterSummer = 0
//       }
      
     
      
  
//       // Focus year graphs
//       var ctx = document.getElementById('myChart2');
//         var myChart2 = new Chart(ctx, {
//           type: 'pie',
//           data: {
            
//             labels: ['Computer Engineering', 'Computer Science', 'Computer Science & Engineering','Electrical and Electronic Engineering', 'Electronic and Telecommunication Engineering','Mathematics', 'Physics',],
//             datasets: [{
//               label: 'Number Of Students in SECS in 2019',
//               data: [
//                 numberSECS[0],numberSECS[1],numberSECS[2],numberSECS[3],numberSECS[4],numberSECS[5],numberSECS[6],],
//               backgroundColor: [
//                 'rgba(248, 192, 165, 1)', //ce
//                   'rgba(247, 191, 164, 1)', //cs
//                   'rgba(243, 170, 129, 1)', //cse
//                   'rgba(242, 147, 67, 1)', //eee
//                   'rgba(240, 147, 67, 1)', // ete
//                   'rgba(199, 121, 55, 1)', //math
//                   'rgba(173, 102, 46, 1)', //physics
//               ],
//               borderColor: [
//                 'rgba(248, 192, 165, 1)', //ce
//                 'rgba(247, 191, 164, 1)', //cs
//                   'rgba(243, 170, 129, 1)', //cse
//                   'rgba(242, 147, 67, 1)', //eee
//                   'rgba(240, 147, 67, 1)', // ete
//                   'rgba(199, 121, 55, 1)', //math
//                   'rgba(173, 102, 46, 1)', //physics
//               ],
//               borderWidth: 2
//             },
//             ]
    
//           },
//           options: {
//             plugins:{
              
//               datalabels: {
                
//                 formatter: function(value){
//                   return value
//                 }
//               }
//             },
            
//             title: {
//               display: true,
//               text: '2019 at SECS Majors',
//               fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//               fontSize:20  
//             },
    
            
//           }
//         });
  
//         var ctx = document.getElementById('myChart3');
//         var myChart3 = new Chart(ctx, {
//           type: 'pie',
//           data: {
            
//             labels: ['CSE', 'EEE', 'PS',],
//             datasets: [{
//               label: 'SECS Departments in 2019',
//               data: [numberDept[0],numberDept[1],numberDept[2]],
//               backgroundColor: [
//                 'rgba(202, 121, 55, 1)',
//                   'rgba(243, 148, 68, 1)',
//                   'rgba(2248, 192, 165, 1)',
                  
//               ],
//               borderColor: [
//                 'rgba(202, 121, 55, 1)',
//                   'rgba(243, 148, 68, 1)',
//                   'rgba(2248, 192, 165, 1)',
                  
//               ],
//               borderWidth: 2
//             },
//             ]
    
//           },
//           options: {
//             plugins:{
              
//               datalabels: {
                
//                 formatter: function(value){
//                   return value
//                 }
//               }
//             },
            
//             title: {
//               display: true,
//               text: "SECS departments 2019",
//               fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
//               fontSize:20  
    
//             },
    
            
//           }
//         });
//     }).fail(function (response) {
//         console.log(response.responseText);
//       });
//     })

