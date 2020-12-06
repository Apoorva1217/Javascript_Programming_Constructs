// Write a program that takes User Inputs and does Unit Conversion of different Length units
// 1. Feet to Inch 
// 2. Feet to Meter 
// 3. Inch to Feet
// 4. Meter to Feet

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number for Unit Conversion : ');
let number = Number(num);

console.log("1. Convert Feet to Inch");
console.log("2. Convert Feet to Meter");
console.log("3. Convert Inch to Feet");
console.log("4. Convert Meter to Feet");
const ch = prompt('Enter your choice : ');
let choice = Number(ch);

switch (choice) {
    case 1:
        result = number * 12;
        console.log(`${number} Feet is ` + result + " Inch");
        break;
    case 2:
        result = number / 3.281;
        console.log(`${number} Feet is ` + result + " Meter");
        break;
    case 3:
        result = number / 12;
        console.log(`${number} Inch is ` + result + " Feet");
        break;
    case 4:
        result = number * 3.281;
        console.log(`${number} Meter is ` + result + " Feet");
        break;
    default:
        console.log("Invalid Input");
        break;
}
