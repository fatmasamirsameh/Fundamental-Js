var 
myButton = document.getElementById("butt");
 var userDate = new Date(1992,9,25,30,25),
    theDate = new Date(),
birthYear = userDate.getFullYear();

var nowYear =  theDate.getFullYear(),
 substractYear =parseInt( nowYear - birthYear),
myDiv = document.getElementById("div");

UserMonth = substractYear * 12;

userDay = UserMonth * 30;

userHours = userDay * 24;

UserMinutes = userHours * 60;

UserSeconds = UserMinutes * 60;

myButton.onclick = function(){
     "use strict";
myDiv.innerHTML = 
    "<span>Years:</span>" + substractYear + "<br>" + "<span>Months:</span>" + UserMonth  + "<br>" + "<span>Days:</span>" + userDay + "<br>" + 
        "<span>Hours:</span>" + userHours  + "<br>" + "<span>Minutes:</span>" + UserMinutes + "<br>" + "<span>Seconds:</span>" + UserSeconds + "<br>"; 
 };