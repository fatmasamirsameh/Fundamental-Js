var myOnButton = document.getElementById('buttOn'),

    myOffButton = document.getElementById('buttOff');
myOnButton.onclick = function (){
    'use strict';
document.getElementById('offImage').style.display = 'none';
     myOnButton.textContent = "turn off";
    
};

   myOffButton.onclick = function(){
       'use strict';
document.getElementById('onImage').style.display = 'none';
         myOffButton.textContent = "turn on";

   };


