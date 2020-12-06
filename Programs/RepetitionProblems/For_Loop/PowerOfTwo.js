// Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
let val = 1;
for (let i = 1; i <= number; i++) {
    val = 2 * val;
    console.log(`2^${i}=${val}`);
}