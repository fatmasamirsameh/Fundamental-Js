var
grownUp = document.getElementById("grow"),
    shrink = document.getElementById("shrink"),
    fadeOut = document.getElementById("fadeOut"),
    fadeIn = document.getElementById("fadeIn"),
target = document.getElementById("target");

 
grownUp .addEventListener("click",function(){
   
   target.style.height = 500 + "px";
       target.style.width = 500 + "px";
    
});

shrink.onclick = function () {
 target.style.height = 50 + "px";
      target.style.width = 50 + "px";
       
};

 fadeOut.addEventListener("click",function(){
   
   target.style.opacity = 0.1;
    
});

 fadeIn.addEventListener("click",function(){
   
   target.style.opacity = 1 ;
    
});


