function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'cannot divide by zero';
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator');
    }

}
const prompt = require('prompt-sync')();
let num = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
result = calculate(num, num2, operator);
console.log("Result: " + result);