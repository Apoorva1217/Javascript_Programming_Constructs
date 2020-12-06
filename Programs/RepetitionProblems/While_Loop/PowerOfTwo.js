// Write a program that takes a command-line argument n and prints a table of the powers of 2 
//that are less than or equal to 2^n till 256 is reached..

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
let a = 1, b = 1;
console.log("Table of power of 2 : ");
while ((number != 0) && (a < 256)) {
    a = 2 * a;
    console.log(`2^${b}=${a}`);
    b = b + 1;
    number = number - 1;
}