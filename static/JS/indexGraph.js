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
                    fontColor: [
                        'rgb(0, 0, 0)',
                        'rgb(0, 0, 0)',
                        'rgb(0, 0, 0)',
                    ],
                    borderWidth: 1
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
                  fontSize:20,
                  fontColor: 'rgb(0, 0, 0)'
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
                  borderWidth: 1
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
                  fontSize:20,  
                  fontColor: 'rgb(0, 0, 0)'
                },
               
              }
             });        
        
          }).fail(function (response) {
            console.log(response.responseText);
          });
          
        
        })


$(document).ready(function() {      
        $.ajax({
          method: "GET",
          url: "/data/list"
        }).done(function (response) {
      
      
          let noofStd = response.datas
         
          console.log(2019)
          
           // Focus year graphs, Majors
          let counterYearlyPHY= 0
          let counterYearlyCSE = 0
          let counterYearlyCE = 0
          let counterYearlyEEE = 0
          let counterYearlyETE = 0
          let counterYearlyMATH = 0
          let counterYearlyCS = 0
      
           // Focus year graphs, Departments
          let counterYearlyDeptCSE=0
          let counterYearlyDeptEEE=0
          let counterYearlyDeptPS=0
          
           // Major wise Students' interest @ SECS
          let counterCE = 0
          let counterCSE = 0
          let counterETE = 0
          let counterPhy = 0
          let counterCS = 0
          let counterEEE = 0
          let countermaths = 0
      
          let numberOfCE = []
          let numberOfmaths = []
          let numberOfCSE = []
          let numberOfETE = []
          let numberOfPhy = []
          let numberOfCS = []
          let numberOfEEE = []
      
           // Department graphs
          let counterDeptCSE = 0
          let counterDeptEEE = 0
          let counterDeptPhySci = 0
      
          let numberOfDeptCSE = []
          let numberOfDeptEEE = []
          let numberOfDeptPhySci = []
      
          // Yearly semester wise SECS
          let counterSpring = 0
          let counterAutumn = 0
          let counterSummer = 0
      
          let numberAutumn=[]
          let numberSpring=[]
          let numberSummer=[]   
      
          let numberDept=[]
          let numberSECS = []
         
          for (let i = 2013; i <= 2019; i++) {
            noofStd.forEach((item, index) => {
              
              // Major wise Student's interest @ SECS
              if (item.year == i && item.Major == "BSc - Computer Engineering") {
                counterCE = counterCE + Number(item.no_of_Student)
      
              }
      
              else if (item.year == i && item.Major == "BSc - Electrical and Electronic Engineering") {
                counterEEE = counterEEE + Number(item.no_of_Student)
              }
      
              else if (item.year == i && (item.Major == "BSc - Electronic and Telecommunication Engineering")) {
                counterETE = counterETE + Number(item.no_of_Student)
              }
      
              else if (item.year == i && item.Major == "BSc - Computer Science and Engineering") {
                counterCSE = counterCSE + Number(item.no_of_Student)
              }
      
              else if (item.year == i && (item.Major == "BSc - Physics (Hons)")) {
                counterPhy = counterPhy + Number(item.no_of_Student)
              }
      
              else if (item.year == i && item.Major == "BSc - Computer Science") {
                counterCS = counterCS + Number(item.no_of_Student)
              }
      
              else if (item.year == i && (item.Major == "BSc - Mathematics (Hons)")) {
                countermaths = countermaths + Number(item.no_of_Student)
              }
      
              if (item.year == 2019 && item.Major == "BSc - Computer Engineering") {
                counterYearlyCE = counterYearlyCE + Number(item.no_of_Student)
      
              }
      
              else if (item.year == 2019 && item.Major == "BSc - Electrical and Electronic Engineering") {
                counterYearlyEEE = counterYearlyEEE + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && (item.Major == "BSc - Electronic and Telecommunication Engineering")) {
                counterYearlyETE = counterYearlyETE + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && item.Major == "BSc - Computer Science and Engineering") {
                counterYearlyCSE = counterYearlyCSE + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && (item.Major == "BSc - Physics (Hons)")) {
                counterYearlyPHY = counterYearlyPHY + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && item.Major == "BSc - Computer Science") {
                counterYearlyCS = counterYearlyCS + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && (item.Major == "BSc - Mathematics (Hons)")) {
                counterYearlyMATH = counterYearlyMATH + Number(item.no_of_Student)
              }
      
              // SECS Department
              if (item.year == i && item.Dept == "CSE") {
                counterDeptCSE = counterDeptCSE + Number(item.no_of_Student)
      
              }
      
              if (item.year == i && item.Dept == "EEE") {
                counterDeptEEE = counterDeptEEE + Number(item.no_of_Student)
              }
      
              if (item.year == i && item.Dept == "PhySci") {
                counterDeptPhySci = counterDeptPhySci + Number(item.no_of_Student)
              }
      
              // Focus year graphs
              if (item.year == 2019 && item.Dept == "CSE") {
                counterYearlyDeptCSE= counterYearlyDeptCSE + Number(item.no_of_Student)
      
              }
      
              if (item.year == 2019 && item.Dept == "EEE") {
                counterYearlyDeptEEE = counterYearlyDeptEEE + Number(item.no_of_Student)
              }
      
              if (item.year == 2019 && item.Dept == "PhySci") {
                counterYearlyDeptPS = counterYearlyDeptPS + Number(item.no_of_Student)
              }
      
              // Yearly semester wise SECS
              if (item.year == i  && item.Semester == "3" && item.School == "SECS") {
                counterAutumn = counterAutumn + Number(item.no_of_Student)
      
              }
      
              if (item.year == i  && item.Semester == "1" && item.School == "SECS") {
                counterSpring = counterSpring + Number(item.no_of_Student)
      
              }
      
              if (item.year == i  && item.Semester == "2" && item.School == "SECS") {
                counterSummer = counterSummer + Number(item.no_of_Student)
      
              }
      
      
            });
      
            // Focus year graphs, Majors
            numberSECS.push(counterYearlyCE)
            numberSECS.push(counterYearlyCS)
            numberSECS.push(counterYearlyCSE)
            numberSECS.push(counterYearlyEEE)
            numberSECS.push(counterYearlyETE)
            numberSECS.push(counterYearlyMATH)
            numberSECS.push(counterYearlyPHY)
      
            // Focus year graphs, Departments
            numberDept.push(counterYearlyDeptCSE)
            numberDept.push(counterYearlyDeptEEE)
            numberDept.push(counterYearlyDeptPS)
      
            // Major wise Students' interest @ SECS
            numberOfCE.push(counterCE)
            numberOfEEE.push(counterEEE)
            numberOfETE.push(counterETE)
            numberOfCSE.push(counterCSE)
            numberOfPhy.push(counterPhy)
            numberOfmaths.push(countermaths)
            numberOfCS.push(counterCS)
      
            // Department graphs
            numberOfDeptCSE.push(counterDeptCSE)
            numberOfDeptEEE.push(counterDeptEEE)
            numberOfDeptPhySci.push(counterDeptPhySci)
      
            // Yearly semester wise SECS
            numberAutumn.push(counterAutumn)
            numberSpring.push(counterSpring)
            numberSummer.push(counterSummer)   
      
      
            // reinitializing the counter
            counterYearlyDeptCSE = 0
            counterYearlyDeptEEE = 0
            counterYearlyDeptPS = 0
            counterYearlyPHY = 0
            counterYearlyCSE = 0
            counterYearlyCE = 0
            counterYearlyEEE = 0
            counterYearlyETE = 0
            counterYearlyMATH = 0
            counterYearlyCS = 0
            counterCE = 0
            counterEEE = 0
            counterETE = 0
            counterCSE = 0
            counterPhy = 0
            countermaths = 0
            counterCS = 0
            counterDeptCSE = 0
            counterDeptEEE = 0
            counterDeptPhySci = 0
            counterAutumn = 0
            counterSpring = 0
            counterSummer = 0
          }
          
         
          
      
          // Focus year graphs
          var ctx = document.getElementById('indexChart2');
            var indexChart = new Chart(ctx, {
              type: 'pie',
              data: {
                
                labels: ['Computer Engineering', 'Computer Science', 'Computer Science & Engineering','Electrical and Electronic Engineering', 'Electronic and Telecommunication Engineering','Mathematics', 'Physics',],
                datasets: [{
                  label: 'Number Of Students in SECS in 2019',
                  data: [
                    numberSECS[0],numberSECS[1],numberSECS[2],numberSECS[3],numberSECS[4],numberSECS[5],numberSECS[6],],
                  backgroundColor: [
                    'rgba(248, 192, 165, 1)', //ce
                      'rgba(247, 191, 164, 1)', //cs
                      'rgba(243, 170, 129, 1)', //cse
                      'rgba(242, 147, 67, 1)', //eee
                      'rgba(240, 147, 67, 1)', // ete
                      'rgba(199, 121, 55, 1)', //math
                      'rgba(173, 102, 46, 1)', //physics
                  ],
                  borderColor: [
                    'rgba(248, 192, 165, 1)', //ce
                    'rgba(247, 191, 164, 1)', //cs
                      'rgba(243, 170, 129, 1)', //cse
                      'rgba(242, 147, 67, 1)', //eee
                      'rgba(240, 147, 67, 1)', // ete
                      'rgba(199, 121, 55, 1)', //math
                      'rgba(173, 102, 46, 1)', //physics
                  ],
                  borderWidth: 2
                },
                ]
        
              },
              options: {
                plugins:{
                  
                  datalabels: {
                    
                    formatter: function(value){
                      return value
                    }
                  }
                },
                
                title: {
                  display: true,
                  text: 'SECS Majors 2019',
                  fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                  fontSize:20,
                  fontColor: 'rgb(0,0,0)'  
                },
        
                
              }
            });
        }).fail(function (response) {
            console.log(response.responseText);
          });
        })  

        
$(document).ready(function(){
    $.ajax({
        method: "GET",
        url: "/data/list"
      }).done(function (response) {
    
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
    
    
    
        for (let i = 2013; i <= 2019; i++) {
          noofStd.forEach((item, index) => {
    
            if (item.year == 2019 && item.Major == "BBA - Management Information Systems") {
              counterBBAMis = counterBBAMis + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - Finance") {
              counterBBAFin = counterBBAFin + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - Investment Management") {
              counterInvestMgt = counterInvestMgt + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - Accounting") {
              counterBBAACN = counterBBAACN + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - General Management") {
              counterBBAMGT = counterBBAMGT + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - Human Resources Management") {
              counterHR = counterHR + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - International Business") {
              counterIB = counterIB + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BBA - Marketing") {
              counterMkt = counterMkt + Number(item.no_of_Student)
    
            }
            if (item.year == 2019 && item.Major == "BSc - Economics") {
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
    
    
        var ctx = document.getElementById('indexChart3');
        var indexChart = new Chart(ctx, {
          type: 'pie',
          data: {
    
            labels: ['Management Information Systems', 'Finance', 'Investment Management', 'Accounting', 'General Management', 'Human Resources Management', 'International Business', 'Marketing', 'Economics'],
            datasets: [{
    
              label: 'Number Of Students in 2019',
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
              text: 'SOB Majors 2019',
              fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
              fontSize:20,  
              fontColor: 'rgb(0,0,0)'        
            },
    
    
          }
        });

    }).fail(function (response) {
        console.log(response.responseText);
      });
    })


$(document).ready(function() {
    $.ajax({
      method: "GET",
      url: "/data/list"
    }).done(function (response) {
        let noofStd = response.datas 

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




        for (let i = 2013; i <= 2019; i++) {
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

            else if (item.year == 2019 && item.Major == "BSS - Global Studies and Governance") {
            counterYearlyGSG = counterYearlyGSG + Number(item.no_of_Student)
            }

            else if (item.year == 2019 && (item.Major == "BSS - Media and Communication")) {
            counterYearlyMedia_Com = counterYearlyMedia_Com + Number(item.no_of_Student)
            }

            else if (item.year == 2019 && item.Major == "BSS - Anthropology") {
            counterYearlyAnt = counterYearlyAnt + Number(item.no_of_Student)
            }

            else if (item.year == 2019 && (item.Major == "LLB - Laws (Hons)")) {
            counterYearlyLaw = counterYearlyLaw + Number(item.no_of_Student)
            }

            else if (item.year == 2019 && item.Major == "BA - English Literature") {
            counterYearlyEngLit = counterYearlyEngLit + Number(item.no_of_Student)
            }

            else if (item.year == 2019 && (item.Major == "BSS - Sociology")) {
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
            if (item.year == 2019 && item.Dept == "Eng" || item.Dept == "ENG") {
            counterYearlyDeptENG = counterYearlyDeptENG + Number(item.no_of_Student)

            }

            if (item.year == 2019 && item.Dept == "SOC") {
            counterYearlyDeptSOC = counterYearlyDeptSOC + Number(item.no_of_Student)
            }

            if (item.year == 2019 && item.Dept == "GSG") {
            counterYearlyDeptGSG = counterYearlyDeptGSG + Number(item.no_of_Student)
            }

            if (item.year == 2019 && item.Dept == "MED") {
            counterYearlyDeptMed = counterYearlyDeptMed + Number(item.no_of_Student)
            }

            if (item.year == 2019 && item.Dept == "LAW") {
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


        var ctx = document.getElementById('indexChart4');
        var indexChart = new Chart(ctx, {
        type: 'pie',
        data: {

            labels: ['Anthropology', 'English Language', 'English Literature', 'Global Studies and Governance', 'Law', 'Media & Communication', 'Sociology',],
            datasets: [{
            label: 'Number Of Students in Slass in 2019',
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
            text: 'SLASS Majors 2019',
            fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
            fontSize:20,  
            fontColor: 'rgb(0,0,0)'
            },


        }
        });

    }).fail(function (response) {
        console.log(response.responseText);
      });
    })

$(document).ready(function(){
        $.ajax({
          method: "GET",
          url: "/data/list"
        }).done(function (response) {
      
          //    console.log(response)
          let noofStd = response.datas
          
          let counterSLSAutumn = 0
          let counterSLSSpring = 0
          let counterSLSSummer = 0
      
          let counterYearlyBioChem = 0
          let counterYearlyMicroBio = 0
          let counterYearlyBiochem_Biotech = 0
      
          let counterBiochem = 0
          let counterMicroBio = 0
          let counterBiochem_Biotech = 0
      
          // Yearly semester wise SLS
          let counterSpring = 0
          let counterAutumn = 0
          let counterSummer = 0
      
          let numberAutumn = []
          let numberSpring = []
          let numberSummer = []
      
      
          let numberOfBiochem = []
          let numberOfMicrobio = []
          let numberOfBiochem_Biotech = []
          let numberYearlySLS = []
          let numberSLSsemester = []
      
      
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
      
      
              if (item.year == 2019 && item.Major == "BSc - Biochemistry") {
                counterYearlyBioChem = counterYearlyBioChem + Number(item.no_of_Student)
                // console.log(counterBiochem)
              }
      
              else if (item.year == 2019 && (item.Major == "BSc - Biochemistry and Biotechnology")) {
                counterYearlyBiochem_Biotech = counterYearlyBiochem_Biotech + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && item.Major == "BSc - Microbiology") {
                counterYearlyMicroBio = counterYearlyMicroBio + Number(item.no_of_Student)
              }
      
              if (item.year == 2019 && item.Semester == "1" && item.School == "SLS") {
                counterSLSAutumn = counterSLSAutumn + Number(item.no_of_Student)
      
              }
              else if (item.year == 2019 && item.Semester == "2" && item.School == "SLS") {
                counterSLSSpring = counterSLSSpring + Number(item.no_of_Student)
              }
      
              else if (item.year == 2019 && item.Semester == "3" && item.School == "SLS") {
                counterSLSSummer = counterSLSSummer + Number(item.no_of_Student)
              }
      
              // Yearly semester wise SLS
              if (item.year == i && item.Semester == "3" && item.School == "SLS") {
                counterAutumn = counterAutumn + Number(item.no_of_Student)
      
              }
      
              if (item.year == i && item.Semester == "1" && item.School == "SLS") {
                counterSpring = counterSpring + Number(item.no_of_Student)
      
              }
      
              if (item.year == i && item.Semester == "2" && item.School == "SLS") {
                counterSummer = counterSummer + Number(item.no_of_Student)
      
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
      
            // Yearly semester wise SLASS
            numberAutumn.push(counterAutumn)
            numberSpring.push(counterSpring)
            numberSummer.push(counterSummer)
      
      
            counterBiochem = 0
            counterBiochem_Biotech = 0
            counterMicroBio = 0
            counterYearlyBioChem = 0
            counterYearlyMicroBio = 0
            counterYearlyBiochem_Biotech = 0
      
            counterAutumn = 0
            counterSpring = 0
            counterSummer = 0
          }
      
          var ctx = document.getElementById('indexChart5');
          var indexChart = new Chart(ctx, {
            type: 'pie',
            data: {
      
              labels: ['Bio-Chemistry', 'Bio-Chemisrtry & Bio-Technology', 'Micro-Biology'],
              datasets: [{
                label: 'Number Of Students in Slass in 2019',
                data: [numberYearlySLS[0], numberYearlySLS[1], numberYearlySLS[2],],
                backgroundColor: [
                  'rgba(80, 95, 38, 1)',
                  'rgba(196, 211, 154, 1)',
                  'rgba(119, 143, 59, 1)',
                ],
                borderColor: [
                  'rgba(80, 95, 38, 1)',
                  'rgba(196, 211, 154, 1)',
                  'rgba(119, 143, 59, 1)',
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
                text: 'SLS Majors 2019',
                fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                fontSize:20, 
                fontColor: 'rgb(0,0,0)'
              },
      
      
            }
          })
        
        }).fail(function (response) {
            console.log(response.responseText);
          });
        })

        $(document).ready(function() { 
            $.ajax({
                method: "GET",
                url: "/data/list"
              }).done(function (response) {
            
                //    console.log(response)
                
                let noofStd = response.datas
            
                let counterSESMAutumn = 0
                let counterSESMSpring = 0
                let counterSESMSummer = 0
                let counterYearlyPharmacy = 0
                let counterYearlyENV = 0
                let counterYearlyENV_management = 0
                let counterYearlyPopulation_Env = 0
            
                // Major wise Students' interest @ SESM
                let counterPharmacy = 0
                let counterENV = 0
                let counterENV_management = 0
                let counterPopulation_Env = 0
            
                let numberOfPharmacy = []
                let numberOfENV = []
                let numberOfENV_management = []
                let numberOfPoplation_Env = []
            
                // Yearly semester wise SESM
                let counterSpring = 0
                let counterAutumn = 0
                let counterSummer = 0
            
                let numberAutumn = []
                let numberSpring = []
                let numberSummer = []
            
            
                let numberSESMsemester = []
                let numberYearlySESM = []
            
            
                let year=[]
                for (let i = 2013; i <= 2019; i++) {
                  year.push(Number(i))
                  noofStd.forEach((item, index) => {
                    if (item.year == 2019 && item.Semester == "1" && item.School == "SESM") {
                      counterSESMAutumn = counterSESMAutumn + Number(item.no_of_Student)
            
                    }
                    else if (item.year == 2019 && item.Semester == "2" && item.School == "SESM") {
                      counterSESMSpring = counterSESMSpring + Number(item.no_of_Student)
                    }
            
                    else if (item.year == 2019 && item.Semester == "3" && item.School == "SESM") {
                      counterSESMSummer = counterSESMSummer + Number(item.no_of_Student)
                    }
            
                    // Major wise Student's interest @ SESM
                    if (item.year == i && item.Major == "B.Pharm - Pharmacy") {
                      counterPharmacy = counterPharmacy + Number(item.no_of_Student)
            
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
            
                    if (item.year == 2019 && item.Major == "B.Pharm - Pharmacy") {
                      counterYearlyPharmacy = counterYearlyPharmacy + Number(item.no_of_Student)
            
                    }
            
                    else if (item.year == 2019 && item.Major == "BSc - Environmental Management") {
                      counterYearlyENV_management = counterYearlyENV_management + Number(item.no_of_Student)
                    }
            
                    else if (item.year == 2019 && item.Major == "BSc - Environmental Science") {
                      counterYearlyENV = counterYearlyENV + Number(item.no_of_Student)
                    }
            
                    else if (item.year == 2019 && item.Major == "BSc - Population Environment") {
                      counterYearlyPopulation_Env = counterYearlyPopulation_Env + Number(item.no_of_Student)
                    }
            
                    // Yearly semester wise SESM
                    if (item.year == i && item.Semester == "3" && item.School == "SESM") {
                      counterAutumn = counterAutumn + Number(item.no_of_Student)
            
                    }
            
                    if (item.year == i && item.Semester == "1" && item.School == "SESM") {
                      counterSpring = counterSpring + Number(item.no_of_Student)
            
                    }
            
                    if (item.year == i && item.Semester == "2" && item.School == "SESM") {
                      counterSummer = counterSummer + Number(item.no_of_Student)
            
                    }
            
            
                  });
            
                  numberSESMsemester.push(counterSESMAutumn)
                  numberSESMsemester.push(counterSESMSpring)
                  numberSESMsemester.push(counterSESMSummer)
            
                  // Major wise Students' interest @ SECS
                  numberOfPharmacy.push(counterPharmacy)
                  numberOfENV_management.push(counterENV_management)
                  numberOfENV.push(counterENV)
                  numberOfPoplation_Env.push(counterPopulation_Env)
            
                  numberYearlySESM.push(counterYearlyENV)
                  console.log('SESM number'+numberYearlySESM[0])
                  numberYearlySESM.push(counterYearlyENV_management)
                  numberYearlySESM.push(counterYearlyPharmacy)
                  numberYearlySESM.push(counterYearlyPopulation_Env)
            
                  // Yearly semester wise SESM
                  numberAutumn.push(counterAutumn)
                  numberSpring.push(counterSpring)
                  numberSummer.push(counterSummer)
            
                  // reinitializing the counter
                  counterYearlyPharmacy = 0
                  counterYearlyENV_management = 0
                  counterYearlyENV = 0
                  counterYearlyPopulation_Env = 0
            
                  counterPharmacy = 0
                  counterENV_management = 0
                  counterENV = 0
                  counterPopulation_Env = 0
            
                  counterSESMSummer = 0
                  counterSESMSpring = 0
                  counterSESMAutumn = 0
            
                  counterAutumn = 0
                  counterSpring = 0
                  counterSummer = 0
                }

              var ctx = document.getElementById('indexChart6');
              var indexChart = new Chart(ctx, {
                type: 'pie',
                data: {
          
                  labels: ['Environmental Science', 'Environmental Management', 'Pharmacy', 'Population Environment'],
                  datasets: [{
                    label: 'Number Of Students in Slass in 2019',
                    data: [numberYearlySESM[0], numberYearlySESM[1], numberYearlySESM[2], numberYearlySESM[3],],
                    backgroundColor: [
                      'rgba(151, 134, 176, 1)',
                      'rgba(119, 90, 157, 1)',
                      'rgba(97, 75, 121, 1)',
                      'rgba(194, 186, 196, 1)',
                    ],
                    borderColor: [
                      'rgba(151, 134, 176, 1)',
                      'rgba(119, 90, 157, 1)',
                      'rgba(97, 75, 121, 1)',
                      'rgba(194, 186, 196, 1)',
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
                    text: 'SESM Majors 2019',
                    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
                      fontSize:20  
          
                  },
          
          
                }
              });

                
  }).fail(function (response) {
    console.log(response.responseText);
  });
})
