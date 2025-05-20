console.log("login.js loaded");

const button = document.getElementById("button-login");
const phoneNumber = document.getElementById("phone-number");
const pinNumber = document.getElementById("pin-number");
const loginError = document.getElementById("login-error");

button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Button clicked");
    console.log(phoneNumber.value);  
    console.log(pinNumber.value);
    if (phoneNumber.value === "017897352088" || pinNumber.value === "1234") {
        console.log("Login successful");
        window.location.href = "home.html";
    }
    else {

        if(pinNumber.value.length < 4) {
            console.log("PIN must be 4 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN must be 4 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(phoneNumber.value.length < 11) {
            console.log("Phone number must be 11 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "Phone number must be 11 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value.length > 4) {
            console.log("PIN must be 4 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN must be 4 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(phoneNumber.value.length > 11) {
            console.log("Phone number must be 11 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "Phone number must be 11 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value === ""){
            console.log("PIN cannot be empty");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN cannot be empty";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(phoneNumber.value === ""){
            console.log("Phone number cannot be empty");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "Phone number cannot be empty";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value.length < 4 && phoneNumber.value.length < 11) {
            console.log("PIN must be 4 digits and Phone number must be 11 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN must be 4 digits and Phone number must be 11 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value.length > 4 && phoneNumber.value.length > 11) {
            console.log("PIN must be 4 digits and Phone number must be 11 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN must be 4 digits and Phone number must be 11 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value.length < 4 && phoneNumber.value.length > 11) {
            console.log("PIN must be 4 digits and Phone number must be 11 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN must be 4 digits and Phone number must be 11 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value.length > 4 && phoneNumber.value.length < 11) {
            console.log("PIN must be 4 digits and Phone number must be 11 digits");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "PIN must be 4 digits and Phone number must be 11 digits";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        if(pinNumber.value.length === "" && phoneNumber.value.length === "") {
            console.log("PIN and Phone number must be 4 digits and 11 digits respectively");
            // Show error message
            loginError.classList.remove("hidden");
            loginError.textContent = "Input PIN and Phone number respectively";
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        else{
            console.log("Login failed");
            // Show error message
            loginError.classList.remove("hidden");
            phoneNumber.value = "";
            pinNumber.value = "";
            phoneNumber.focus();
            // Hide error message after 3 seconds
            setTimeout(function () {
                loginError.classList.add("hidden");
            }, 3000);
        }
        
    }

});

