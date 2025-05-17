console.log("login.js loaded");

const button = document.getElementById("button-login");
const phoneNumber = document.getElementById("phone-number");
const pinNumber = document.getElementById("pin-number");

button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Button clicked");
    console.log(phoneNumber.value);  
    console.log(pinNumber.value);
    if (phoneNumber.value === "017897352088" || pinNumber.value === "1234") {
        console.log("Login successful");
        window.location.href = "home.html";
    }

});

