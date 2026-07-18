const prompt = require('prompt-sync')();
let initialbalance = 2000;
let isrunning = true;
let authenticated = false;
const authenticate = () => {
    let pin = parseInt(prompt("Enter your PIN: "));
    if (pin === 1234) {
        authenticated = true;
        console.log("Authentication successful.");
    } else {
        console.log("Authentication failed. Please try again.");
    }
};
console.log("Please authenticate to access your account.");
authenticate();


while (isrunning) {
    console.log("Welcome to the ATM");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");
    let choice = parseInt(prompt("Enter your choice: "));
    switch (choice) {
        case 1:
            if (authenticated) {
                console.log("Your balance is: $" + initialbalance);
            } else {
                console.log("Please authenticate first.");
            }
            break;
        case 2:
            if (authenticated) {
                let amount = parseFloat(prompt("Enter the amount to deposit: "));
                if (amount > 0) {
                    initialbalance += amount;
                    console.log("Deposit successful. Your new balance is: $" + initialbalance);
                } else {
                    console.log("Invalid amount. Please enter a positive number.");
                }
            } else {
                console.log("Please authenticate first.");
            }
            break;
        case 3:
            if (authenticated) {
                let amount = parseFloat(prompt("Enter the amount to withdraw: "));
                if (amount > 0 && amount <= initialbalance) {
                    initialbalance -= amount;
                    console.log("Withdrawal successful. Your new balance is: $" + initialbalance);
                } else {
                    console.log("Invalid amount or insufficient funds.");
                }
            } else {
                console.log("Please authenticate first.");
            }
            break;
        case 4:
            isrunning = false;
            console.log("Thank you for using the ATM. Goodbye!");
            break;
        default:
            console.log("Invalid choice. Please try again.");
    }
};
