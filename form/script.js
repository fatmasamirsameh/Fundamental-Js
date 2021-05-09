function validation(){
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var password_confirm = document.getElementById("password_confirm").value;

    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    error_message.style.padding = "10px";
     error_message.style.color = "red";
    
    if(name.length < 3){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    
    if(password.length < 6){
        text = "Please Enter Correct Password";
        error_message.innerHTML = text;
        return false;
    }
    
     //check if the two passwords match
     if(password !==  password_confirm){
        text = "The Two Passwords Do Not Match";
        error_message.innerHTML = text;
        return false;
    }
    
 
    
    if(male.checked === false && female.checked === false)
        {
             text = "Please Enter Correct Gender";
        error_message.innerHTML = text;
        return false;
        }
   
  
    
     if(isNaN(phone) || phone.length != 11){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 30){
        text = "Please Enter More Than 30 Characters";
        error_message.innerHTML = text;
        return false; 
    }
    return false;
}
