// Checks if password is strong
function isStrongPassword (password) {
    let result = true; // gets returned

    // check if the password is long enough
    if (password.length <= 8) {
        result = false;
    }
    // checks contains "password"
    if (password.toLowerCase().indexOf("password") != -1){
        result = false;
    }
    // checks for uppercase letters
    if (password.toLowerCase() === password){
        result = false;
    }

    //returns result
    return result;
}

//Alerts user if password is strong or not
const login = document.getElementById("login");
login.addEventListener("click", checkPassword);
function checkPassword(){
    let password = document.getElementById("password").value;
    if (!isStrongPassword(password)){
        alert("Password is weak");
    }
    else {
        alert("Password is strong");
    }
}
