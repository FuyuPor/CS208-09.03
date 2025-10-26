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

const login = document.getElementById("login");
login.addEventListener("click", doSomething)
function doSomething(){
    const result = "";
    const password = document.getElementById("password").value;
    if (!isStrongPassword(password)){
        alert("Password is weak")
    }
    else {
        alert("Password is strong")
    }
}
