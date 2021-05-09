


  function factiorial() {
      var num = prompt("please enter a number to compute the factiorial ");
var i;
var fact = 1;
for(i = num; i>= 1; i--)
    {
        fact = parseInt (fact * i);
    }
      alert(fact);
  }
factiorial();


function askUser(){
    do{
  var newAns = confirm("Are You  Want  To Check For Another Number");
    if ( newAns == true){
        factiorial();
    }
    }while(newAns == true)
}
 askUser();

