var stringArr =[ "Ahmed","Mohamed","Fatma","Dina"];

function copy(stringArr){
   
    var stringifiedKey  = JSON.stringify(stringArr);
    console.log( stringifiedKey.toLowerCase());
    console.log(stringArr);
    
}

 copy(stringArr);
