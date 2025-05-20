// AddMoney.js
// Initialize balance from localStorage or set default value
let balance = parseFloat(localStorage.getItem("balance")) || 45000;

// Show the current balance on page load
document.getElementById("total-balance").innerText = balance;

// Handle form submission
document.getElementById("moneyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("AddedMoney").value);
    const pin = document.getElementById("PIN").value;
    const errorElement = document.getElementById("NOMONEY");

    // Reset error message
    errorElement.classList.add("hidden");

    // Basic validation
    if (isNaN(amount)) {
        errorElement.textContent = "Please enter a valid amount";
        errorElement.classList.remove("hidden");
        return;
    }

    if (amount <= 0) {
        errorElement.textContent = "Amount must be greater than 0";
        errorElement.classList.remove("hidden");
        return;
    }

    if (!pin || pin.length !== 4 || !/^\d+$/.test(pin)) {
        errorElement.textContent = "Please enter a valid 4-digit PIN";
        errorElement.classList.remove("hidden");
        return;
    }

    // Hardcoded PIN check (for demo purposes)
    if (pin !== "1234") {
        errorElement.textContent = "Incorrect PIN";
        errorElement.classList.remove("hidden");
        return;
    }

    // Update balance
    balance += amount;
    localStorage.setItem("balance", balance);
    document.getElementById("total-balance").innerText = balance;
    document.getElementById("AddedMoney").value = "";
    document.getElementById("PIN").value = "";

    // Show success message
    errorElement.textContent = `Successfully added $${amount} to your account!`;
    errorElement.classList.remove("hidden");
    errorElement.classList.remove("text-red-500");
    errorElement.classList.add("text-green-500");

    // Reset to error styling after 3 seconds
    setTimeout(function() {
        errorElement.classList.add("hidden");
        errorElement.classList.remove("text-green-500");
        errorElement.classList.add("text-red-500");
    }, 3000);
});