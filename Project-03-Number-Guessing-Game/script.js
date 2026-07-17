const prompt = require('prompt-sync')();
const secretNumber = 25;
let guess;
let attempts = 0;
let maxAttempts = 5;

console.log("Welcome to the Number Guessing Game!");
console.log(`You have ${maxAttempts} attempts to guess the secret number between 1 and 50.`);
while (attempts < maxAttempts) {
    let guess = parseInt(prompt("Enter your guess: "));
    if (isNaN(guess) || guess < 1 || guess > 50) {
        console.log("Please enter a valid number between 1 and 50.");
    } else if (guess === secretNumber) {
        console.log("Congratulations! You've guessed the secret number!");
        break;
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
        attempts++;
    } else if (guess > secretNumber) {
        console.log("Too high! Try again.");
        attempts++;
    }
    else {
        console.log("congratulations! You've guessed the secret number!");
    }
}
if (attempts === maxAttempts) {
    console.log(`Game over! The secret number was ${secretNumber}.`);
}