/*
var personalData = {
    name:"ahmed",
    Age:"22",
    track:"ui"
};
function funcData(personalData){
  var prop;
for (prop in  personalData){
  
       document.write(prop + ": " +  personalData [prop] + "<br>");
    }
}
funcData(personalData);
*/

var Name  = prompt("please enter your name");
    var Age = prompt("please enter your age");
    var Track = prompt("please enter your track");
    var myObject = {
    name: Name ,
    age:  Age ,
    track:  Track  
}

function returnObject(myObject){
    for(var prop in myObject){
    
    document.write(prop + ": " + myObject[prop] + " <br>");
}
}
returnObject(myObject);

