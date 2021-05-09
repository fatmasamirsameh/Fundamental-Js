/*
    var arr = ["ahmed" , "dina" , "fatma"];
    var mainUl = document.getElementById("list-item");

function myList(arr){
    for(var i = 0; i < arr.length ; i++){
          var li = document.createElement('li');
        li.innerHTML = arr[i];
       mainUl.appendChild( li );
    }
}
myList(arr);
*/
var userString = prompt("please enter names"),
    stringArr = userString.split(",");
function list(stringArr){
     var ul = document.createElement('ul');
    ul.setAttribute('id' , "main");
    document.body.appendChild(ul);
    for( var i = 0; i < stringArr.length; i++){
   
        var li = document.createElement("li");
    var getList = document.getElementById("main");
     getList.appendChild(li);
    li.innerHTML = stringArr[i];
    }
}
    list(stringArr);
    
                  