// Extend the program to take a range of number as input and output the Prime Numbers in that range.

const prompt = require('prompt-sync')();
const num1 = prompt('Enter a Lower Bound of Interval : ');
let lowerBound = Number(num1);
const num2 = prompt('Enter a Upper Bound of Interval : ');
let upperBound = Number(num2);
console.log(`Prime Numbers within Range ${lowerBound} to ${upperBound} are : `);
for (let i = lowerBound; i <= upperBound; i++) {
    let count = 1;
    for (let j = 2; j <= i / 2; j++) {
        if ((i % j) == 0) {
            count = 0;
            break;
        }
    }
    if (count == 1) {
        console.log(i);
    }
}