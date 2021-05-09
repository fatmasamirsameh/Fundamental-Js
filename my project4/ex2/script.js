var askUser = prompt(" please enter a name to search for");

var myMainUl = document.getElementById('main'),
    myChild = document.getElementById('myChild');
for(var i = 0; i < myMainUl.childNodes; i++){
  if ( askUser === ( myChild.textContent)){
      
   console.log("found"); 
}else{
    console("not found");
}

}


//console.log( myMainUl.childNodes[5].textContent);
    

//document.mychild.length
