
var   enterFirstName =  prompt("Please Enter first Name"),
      enterSecondName =  prompt("Please Enter second Name"),
      enterThirdName =  prompt("Please Enter third Name"),
      enterFourthName =  prompt("Please Enter The Fourth Name"),
      enterFifthNames =  prompt("Please Enter Fifth Name"),
      newNames = [enterFirstName , enterSecondName , enterThirdName , enterFourthName , enterFifthNames];
console.log( newNames);

var userSearch =  prompt("Please Enter Name To Search");
if (userSearch === enterFirstName ||  userSearch === enterSecondName ||  userSearch ===  enterThirdName ||  userSearch ===  enterFourthName ||  userSearch ===  enterFifthNames) {
var 
   searchResult =  newNames.indexOf(userSearch);
     console.log (searchResult);
    if(searchResult === 0) {
        alert("First");
    }else if (searchResult === 1){
        alert("Second");  
    }else if (searchResult === 2) {
       alert("Third");   
    }else if (searchResult === 3){
      alert("Fourth");
        
    }else if (searchResult === 4){
        alert("Fifth");  
    }
  
    } else {
    alert("Not Found");
}



/*-----*/

var enterString = prompt("Please Enter Your String"),
   Word =  enterString.split(" ");
    alert(Word.length + " words");

