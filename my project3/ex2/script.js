function funcRandom(){

var x = Math.random();
document.write(Math.floor((x * 6) + 1));
}
funcRandom();


  var askUser;
window.onclick = function Ask(){
  var askUser = confirm("Are you want to generate a random number");
}
    while(  askUser === true){

 funcRandom();}

 