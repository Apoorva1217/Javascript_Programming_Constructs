// Read a Number and Display the week day (Sunday, Monday,...)

const prompt = require('prompt-sync')();
const Digit = prompt('Enter a Single Digit from 0-6 : ');
let digit = Number(Digit);
if (digit == 0) { console.log("Sunday"); }
else if (digit == 1) { console.log("Monday"); }
else if (digit == 2) { console.log("Tuesday"); }
else if (digit == 3) { console.log("Wednesday"); }
else if (digit == 4) { console.log("Thursday"); }
else if (digit == 5) { console.log("Friday"); }
else if (digit == 6) { console.log("Saturday"); }
else { console.log("Invalid Input"); }