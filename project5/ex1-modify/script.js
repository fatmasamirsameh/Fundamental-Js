var myButton = document.getElementById('click'),
    myDiv = document.getElementById('elapsedSeconds'),
    myTime;


myButton.onclick = function(){
    'use strict';
    // myButton.textContent = "Start"; 
    if(this.textContent === 'Start'){     
function countUp() {
    'use strict';

        myDiv.textContent = parseInt(myDiv.textContent ) + 1;
    myButton.textContent = "stop";
    
}
    myTime = setInterval(countUp,1000); 
    }else{
         clearInterval(myTime);
          myButton.textContent = "Start";
        
    }
    
};
