var userName = document.getElementById("userName"),
name_error = document.getElementById("name_error"),
password = document.getElementById("password"),
password_error = document.getElementById("password_error"),
password_confirm = document.getElementById("password_confirm");

// setting all event listners
userName.addEventListener("blur", nameVerify , true);
password.addEventListener("blur", passwordVerify , true);
//password_confirm.addEventListener("blur", confirmVerify , true);

//validation function
function validate(){
    
    if (userName.value == ""){
        userName.style.border = "1px solid red";
        name_error.textContent = "Username is required";
        userName.focus();
        return false;
    }
    
     if (password.value == ""){
        password.style.border = "1px solid red";
        password_error.textContent = "password is required";
        password.focus();
        return false;
    }
    //check if the two passwords match
    if(password.value != password_confirm.value){
        password.style.border = "1px solid red";
        password_confirm.style.border = "1px solid red";
       password_error.innerHTML = "the two passwords do not match";
        return false;
    }
    
    
}

function nameVerify(){
    if(userName.value !=""){
        userName.style.border = "1px solid #5E6E66";
        name_error.innerHTML = "";
        return true;
        
    }
}


function passwordVerify(){
    if(password.value !=""){
        password.style.border = "1px solid #5E6E66";
        password_error.innerHTML = "";
        return true;
        
    }
}



