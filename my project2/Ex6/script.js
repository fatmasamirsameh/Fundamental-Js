
var enterEmployees = prompt(" please enter names of employees in a comma separated format");
var enterSalaries = prompt("enter the salaries of the employees in a comma separated format");
 var i = 0;
employeeArray = enterEmployees.split(",");
salariesArray = enterSalaries.split(",");

if(employeeArray.length !== salariesArray.length){
    alert("Error,The Count Doesnt Match");
}else{
    for(i = 0; i< employeeArray.length; i++){
        document.write( "Name" + " : " + employeeArray[i] + "   ,   " + "Salary" + " : "  + salariesArray[i] + "<br>");
    }
}

salariesArray.sort(function(a,b){
    return b - a});
  document.write(salariesArray[0] + "<br>");

var userName = prompt("please enter name for search"),
    search = employeeArray.indexOf(userName);
document.write("name: " + userName + "," + "salary: " + salariesArray[search]);


