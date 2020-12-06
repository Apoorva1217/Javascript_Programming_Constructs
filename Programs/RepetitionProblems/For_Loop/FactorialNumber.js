// Write a program that computes a factorial of a number taken as input. 
//5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
console.log(`${number} Factorial (${number}!) = `);
let val = 1;
let fact = 1;
for (let i = 2; i <= number; i++) {
    fact = fact * i;
    val = val * i;
}
console.log(fact);