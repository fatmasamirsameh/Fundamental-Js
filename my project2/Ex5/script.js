var userString = prompt("please enter astring"),
 vowel = "a e o u i",
    count = 0;
function vowelChar(userString){
"use strict";

     for (var i = 0;  i < userString.length; i++){
         if(userString[i] == "a" || userString[i] == "e" || userString[i] == "o" || userString[i] == "u" || userString[i] == "i" ){
          count = count + 1;
     }
    
    
}
    alert(count);
                                                                                       
  }                                                                                     
    vowelChar(userString);
    
