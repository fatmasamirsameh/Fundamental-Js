var askUser = prompt("please enter names of students separated by a comma"),
askArr = askUser.split(",");
console.log(askArr);

var ul = document.createElement('ul');
//ul.innerHTML = askUser;
 var mainDiv= document.getElementById("dynamicList");
mainDiv.appendChild(ul);


    ul.setAttribute("id","main");
 var mainUl = document.getElementById("main");
function myList(askArr){
    for(var i = 0; i < askArr.length ; i++){
          var li = document.createElement('li');
        li.innerHTML = askArr[i];
         mainUl.appendChild( li );
    }
}
myList(askArr);