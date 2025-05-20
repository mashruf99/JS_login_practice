// Load existing balance from localStorage or initialize to 45000
let balance = parseFloat(localStorage.getItem("balance")) || 45000;

// Show the current balance on page load
document.getElementById("total-balance").innerText = balance;
