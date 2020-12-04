// 1. Random function to get single digit
let randomNumber = Math.floor(Math.random() * 10);
console.log("Single Digit Random Number is : " + randomNumber);

// 2. Random to get Dice Number between 1 to 6
let diceRoll = Math.floor(Math.random() * 6 + 1);
console.log("Dice Number is : " + diceRoll);

// 3. Add two Random Dice Number and Print the Result
let diceOneRoll = Math.floor(Math.random() * 6 + 1);
console.log("Number on Dice One is : " + diceOneRoll);
let diceTwoRoll = Math.floor(Math.random() * 6 + 1);
console.log("Number on Dice Two is: " + diceTwoRoll);
let sumOfDice = diceOneRoll + diceTwoRoll;
console.log("Sum of Two Dice Number is : " + sumOfDice);

// 4. Write a program that reads 5 Random 2 Digit values , then find their sum and the average
let sum = 0, average = 0;
let startRange = 10;
let endRange = 99;
let range = endRange - startRange + 1;
console.log("5 Random Two digit numbers are:");
for (let i = 0; i < 5; i++) {
    let result = Math.floor(Math.random() * range + startRange);
    console.log(result);
    sum = sum + result;
    average = sum / 5;
}
console.log("Sum of 5 Random Two digit number is : " + sum);
console.log("Average of 5 Random Two digit number is : " + average);

// 5. Unit Conversion
// a. 1ft = 12 in then 42 in = ? ft
let inches = 42;
let feet = inches / 12;
console.log("42 inch is : " + feet + " feet");

// b. Rectangular Plot of 60 feet x 40 feet in meters
let length = 60;
let breadth = 40;
let plot = length * breadth;
let meters = plot / 3.2808;
console.log("Total metes are : " + meters);

// c. Calculate area of 25 such plots in acres
let numberOfPlots = 25;
let area = plot * numberOfPlots;
let acres = area / 43560;
console.log("Total acres are : " + acres);