// Enter 3 Numbers do following arithmetic operation and find the one that is maximum and minimum

const prompt = require('prompt-sync')();
const firstNumber = prompt('Enter First Number : ');
let a = Number(firstNumber);
const secondNumber = prompt('Enter Second Number : ');
let b = Number(secondNumber);
const thirdNumber = prompt('Enter Third Number : ');
let c = Number(thirdNumber);

// 1. a + b * c 
let result1 = a + b * c;
console.log(`${a} + ${b} * ${c} = ` + result1);

// 2. a % b + c 
let result2 = a % b + c;
console.log(`${a} % ${b} + ${c} = ` + result2);

//3. c + a / b
let result3 = c + a / b;
console.log(`${c} + ${a} / ${b} = ` + result3);

//4. a * b + c
let result4 = a * b + c;
console.log(`${a} * ${b} + ${c} = ` + result4);

//Find Maximum Value
if ((result1 > result2) && (result1 > result3) && (result1 > result4)) {
    console.log("Maximum Value is : " + result1);
}
else if ((result2 > result1) && (result2 > result3) && (result2 > result4)) {
    console.log("Maximum Value is : " + result2);
}
else if ((result3 > result1) && (result3 > result2) && (result3 > result4)) {
    console.log("Maximum Value is : " + result3);
}
else {
    console.log("Maximum Value is : " + result4);
}

//Find Minimum Value
if ((result1 < result2) && (result1 < result3) && (result1 < result4)) {
    console.log("Minimum Value is : " + result1);
}
else if ((result2 < result1) && (result2 < result3) && (result2 < result4)) {
    console.log("Minimum Value is : " + result2);
}
else if ((result3 < result1) && (result3 < result2) && (result3 < result4)) {
    console.log("Minimum Value is : " + result3);
}
else {
    console.log("Minimum Value is : " + result4);
}
