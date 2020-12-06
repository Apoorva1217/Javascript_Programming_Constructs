//Write a program that takes day and month from the command line 
//and prints true if day of month is between March 20 and June 20, false otherwise.

const prompt = require('prompt-sync')();
const Day = prompt('Enter the Day : ');
const Month = prompt('Enter the Month in Digit Format : ');
let day = Number(Day);
let month = Number(Month);

if ((month == 3 && day > 20 && day < 32) || (month == 4 && day > 0 && day < 31) ||
    (month == 5 && day > 0 && day < 32) || (month == 6 && day > 0 && day < 21)) {
    console.log("True");
}
else {
    console.log("False");
}
