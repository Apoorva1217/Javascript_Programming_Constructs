// Find the Magic Number
// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const prompt = require('prompt-sync')();
const num = prompt('Think a Number between 1 to 100 : ');
let number = Number(num);
let low = 1;
let high = 100;
let count = 0;
let middleVal = 0;

while (count == 0) {
    middleVal = Math.floor((low + high) / 2);
    const ques = prompt(`Is number less than or equals to ${middleVal} ? `);
    if (number == middleVal) {
        console.log(`${middleVal} is a Magic Number.`);
        count = 1;
    }
    else if (number < middleVal) {
        high = middleVal - 1;
    }
    else {
        low = middleVal + 1;
    }
}