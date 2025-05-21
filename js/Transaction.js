document.addEventListener("DOMContentLoaded", () => {
    const historyContainer = document.getElementById('transactionHistory');
    
    if (!historyContainer) {
        console.error("Transaction history container not found!");
        return;
    }

    const displayTransaction = (data) => {
        const transactionElement = document.createElement('div');
        transactionElement.className = 'p-3 bg-gray-50 rounded-lg';
        transactionElement.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <span class="font-medium">${data.type}</span>
                    <div class="text-xs text-gray-400">${data.date}</div>
                </div>
                <span class="${data.type === 'Add Money' ? 'text-green-500' : 'text-red-500'} font-medium">
                    ${data.type === 'Add Money' ? '+' : '-'}$${data.amount.toFixed(2)}
                </span>
            </div>
        `;
        historyContainer.prepend(transactionElement);
    };

    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    savedTransactions.forEach(transaction => {
        displayTransaction(transaction);
    });

    window.addEventListener('transactionComplete', (e) => {
        displayTransaction(e.detail);
        let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.unshift(e.detail);
        if (transactions.length > 10) {
            transactions = transactions.slice(0, 10);
        }
        localStorage.setItem('transactions', JSON.stringify(transactions));
    });
});