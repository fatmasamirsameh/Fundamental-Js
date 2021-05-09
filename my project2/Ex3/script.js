
var enterString = prompt("Please Enter Your String"),

    enterFirstChar = prompt("Please Enter First Character"),
   enterSecondChar = prompt("Please Enter Second Character");
var
    firstSearch = enterString.search(enterFirstChar),
 secondSearch = enterString.search(enterSecondChar);

console.log( firstSearch);
console.log( secondSearch);
 


myChar =  enterString.substring(firstSearch + 1 ,  secondSearch);
console.log(myChar);
alert (myChar);