//Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. 
//A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.

const prompt = require('prompt-sync')();
const Year = prompt('Enter the Year(YYYY) : ');
let year = Number(Year);

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} is a Leap Year.`);
}
else {
    console.log(`${year} is not a Leap Year.`);
}