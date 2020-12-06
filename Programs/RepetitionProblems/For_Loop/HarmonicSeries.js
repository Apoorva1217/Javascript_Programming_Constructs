// Write a program that takes a command-line argument n and prints the nth harmonic number.
// Harmonic Number is of the form 1/1+1/2+1/3+...

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
let series = 1 / 1;
console.log("1/1+");
for (let i = 2; i <= number; i++) {
    if (i < number) {
        console.log(`1/${i}+`);
        series = series + 1 / i;
    }
    if (i == number) {
        console.log(`1/${i}`);
        series = series + 1 / i;
    }
}
