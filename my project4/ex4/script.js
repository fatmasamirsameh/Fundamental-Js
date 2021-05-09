var userColor = prompt("please enter a list of colors  separated by a comma"),
colorArr = userColor.split(",");
console.log(colorArr);



  //  ul.setAttribute("id","main");
  var mainDiv= document.getElementById("main");
    
function myDivColor(colorArr){
    for(var i = 0; i < colorArr.length ; i++){
          var divColor= document.createElement('div');
       divColor.innerHTML = colorArr[i];
         mainDiv.appendChild( divColor);
        divColor.setAttribute("id","color");
     color.textContent ="Hello javascript";
        divColor.style.backgroundColor = colorArr[i];
       
    }
}
myDivColor(colorArr);

   