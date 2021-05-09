/*
var  myInput = document.getElementById("listTitle"),
   myDiv = document.getElementById("div");

    myInput.onkeyup = function(){
    
    "use strict";
     myDiv.innerHTML = myInput.value;
}  
    
  var employeeName = ["ahmed" , "ali" , "amrr"],
      employeeNumber = ["20" , "10" , "30"];


    var employee = document.getElementsByClassName("empName"),
    
 
      employeeNum = document.getElementsByClassName("empNumber");

for( var i = 0; i < employeeName.length; i++){
    employee.innerHtml = employeeName[i];
    console.log(employeeName[i]);
    console.log(employeeNumber[i]);
     
      employeeNum.innerHTML =  employeeNumber[i];
}
*/
var askUser = prompt("please Enter A sentence");
var Element = document.createElement('div');
Element.innerHTML = askUser;
document.body.appendChild(Element);
var id = Element.setAttribute('id' , "listTitle");


var employeeName = prompt("please enter employee names seperated by comma"),
    employeeNamesArr = employeeName.split(","),
    employeeNumbers = prompt("please enter employee numbers seperated by comma"),
    employeeNumbersArr = employeeNumbers.split(",");
for (i = 0; i < employeeNamesArr.length; i++){
var spanName = document.createElement('span');
spanName.setAttribute('class' , "empName");
document.body.appendChild(spanName);
spanName.innerHTML = employeeNamesArr[i] + ":"; 
    
var spanNumber = document.createElement('span');
spanNumber.setAttribute('class' , "empNum");
document.body.appendChild(spanNumber);
 spanNumber.innerHTML = employeeNumbersArr[i] + "<br> ";
}

