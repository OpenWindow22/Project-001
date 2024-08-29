function calculatePayment() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const term = parseFloat(document.getElementById('term').value) * 12;
    
    if (!amount || !rate || !term) {
        document.getElementById('result').textContent = 'Please fill out all fields.';
        return;
    }

    const payment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    document.getElementById('result').textContent = `Monthly Payment: $${payment.toFixed(2)}`;
}
