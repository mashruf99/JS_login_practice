console.log("login.js loaded");

const button = document.getElementById("button-login");
const phoneNumber = document.getElementById("phone-number");
button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Button clicked");
    console.log(phoneNumber.value);  
});


        