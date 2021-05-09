
var
  firstName =  prompt("Please Enter Your first Name"),
  lastName =  prompt("Please Enter Your Last Name");
  alert("welcom " + firstName + " " + lastName);
var
  Age = prompt("How Old Are You");
if ( Age <= 10 && Age >= 1) {
  alert(" Child");
 } else if ( Age <= 18 && Age >=11) {
      alert(" Teenager");
    } else if ( Age <= 50 && Age >= 19) {
          alert(" Grown up ");
    } else {
           alert(" Old is greater ");
    }
var
   ageConfirmation = confirm(" Are you " + Age + " years old");
  if ( ageConfirmation  == true ) {
      alert ("Yes Your Age Is " +  Age );
      
  }else{
      alert("No, sorry age is wrong");
  }
var
  enterNum = prompt("Please Enter a Number");
 if ( (enterNum % 2) == 0){
     alert ("Even");
     
 }else{
     alert ("Odd");
 }
 var
 enterOtherNum = prompt("Please Enter a Number Of Day From  1 to 7")

switch( enterOtherNum){
      case "1":
        alert("Saturday");
        break;
        
      case "2":
        alert("Sunday");
         break;
        
      case "3":
        alert("Monday");
         break;
      case "4":
        alert("Tuseday");
         break;
        
      case "5":
        alert("Wednesday");
         break;
        
     case "6":
        alert("Thursday");
         break;
        
     case "7":
        alert("Friday");
         break;
    default:
        alert(" Sorry, YOU Must be Enter a Number From  1 to 7");
         break;
        
}






    