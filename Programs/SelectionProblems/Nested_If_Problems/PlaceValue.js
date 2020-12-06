// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number as 1,10,100,..... : ');
let number = Number(num);
if (number == 1) { console.log("Units"); }
else if (number == 10) { console.log("Tens"); }
else if (number == 100) { console.log("Hundread"); }
else if (number == 1000) { console.log("Thousands"); }
else if (number == 10000) { console.log("Ten of Thousands"); }
else if (number == 100000) { console.log("Hundreds of Thousands"); }
else if (number == 1000000) { console.log("Millions"); }
else if (number == 10000000) { console.log("Billions"); }
else { console.log("Invalid Input"); }