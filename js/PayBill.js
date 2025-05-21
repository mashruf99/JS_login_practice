let balance = parseFloat(localStorage.getItem("balance")) || 45000;
document.getElementById("total-balance").innerText = balance;


document.getElementById("moneyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById("subtrack").value);
    const pin = document.getElementById("PIN").value;
    const agentNumber = document.getElementById("agentNumber").value;
    const errorElement = document.getElementById("NOMONEY");

    errorElement.classList.add("hidden");


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

    if (balance < amount) {
        errorElement.textContent = "Insufficient balance for this transaction";
        errorElement.classList.remove("hidden");
        return;
    }

    if (!agentNumber || agentNumber.length < 5) {
        errorElement.textContent = "Please enter a valid agent number";
        errorElement.classList.remove("hidden");
        return;
    }

    if (!pin || pin.length !== 4 || !/^\d+$/.test(pin)) {
        errorElement.textContent = "Please enter a valid 4-digit PIN";
        errorElement.classList.remove("hidden");
        return;
    }

    if (pin !== "1234") {
        errorElement.textContent = "Incorrect PIN";
        errorElement.classList.remove("hidden");
        return;
    }


    balance -= amount;
    localStorage.setItem("balance", balance);
    document.getElementById("total-balance").innerText = balance;
    document.getElementById("subtrack").value = "";
    document.getElementById("PIN").value = "";
    document.getElementById("agentNumber").value = "";

    
    errorElement.textContent = `Successfully withdrew $${amount} from your account!`;
    errorElement.classList.remove("hidden");
    errorElement.classList.remove("text-red-500");
    errorElement.classList.add("text-green-500");


    setTimeout(function() {
        errorElement.classList.add("hidden");
        errorElement.classList.remove("text-green-500");
        errorElement.classList.add("text-red-500");
    }, 3000);

    
    document.getElementById("moneyForm").reset();
    const transactionData = {
        type: "Pay Bill", 
        amount: amount,   
        date: new Date().toLocaleString()  
    };


    console.log("Transaction Data:", transactionData);
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.unshift(transactionData);
    if (transactions.length > 10) {
        transactions = transactions.slice(0, 10);
    }
    localStorage.setItem('transactions', JSON.stringify(transactions));
    const transactionEvent = new CustomEvent('transactionComplete', {
        detail: transactionData
    });
    window.dispatchEvent(transactionEvent);
    document.getElementById("moneyForm").reset();
});