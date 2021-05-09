var firstName = document.getElementById("first"),
    
    secondName = document.getElementById("second"),
    primary = document.getElementById("primary"),
    bouns = document.getElementById("bouns"),
    overtime = document.getElementById("overtime"),
    showData = document.getElementById("butt1"),
    addToCompany = document.getElementById("butt2");

showData.onclick = function() {
  
 
      var
          totalSalary = parseInt(primary.value) + parseInt(bouns.value)+  parseInt(overtime.value);
     alert(firstName.value + " " +  secondName.value + " " + "Salary = " + totalSalary );
    
 };

var

myElement = document.getElementById("sub");
   myElement.onsubmit = function(e){
    'use strict';
     e.preventDefault();
 }
   

var
myDiv = document.getElementById('main');



 addToCompany.addEventListener('click',function(){
  
     var
          totalSalary = parseInt(primary.value) + parseInt(bouns.value)+  parseInt(overtime.value);
       myDiv.innerHTML = 
         "<table  style = 'border: 1px solid black;'>" +
  "<tr>" +
    "<th  style = 'border: 1px solid black;'>" + "Full name" + "</th>" +
    "<th  style = 'border: 1px solid black;'>" + "Total Salary" + "</th>" +
 "</tr>" +
 "<tr>" +
    "<td  style = 'border: 1px solid black;'>" + firstName.value + " " +  secondName.value + "</td>" +
    "<td  style = 'border: 1px solid black;'>" + totalSalary + "</td>" +
"</tr>" +
"</table>" ;
  },false);
  
     
