// Write a Program to show Sum of three Integer adds to ZERO

const prompt = require('prompt-sync')();
let number = 3;
const num1 = prompt('Enter a first Number : ');
let number1 = Number(num1);
const num2 = prompt('Enter a second Number : ');
let number2 = Number(num2);
const num3 = prompt('Enter a third Number : ');
let number3 = Number(num3);
let array = new Array();
array.push(number1);
array.push(number2);
array.push(number3);
console.log("Elements in Array are : " + array);

for (let i = 0; i < number - 2; i++) {
    let a = array[i];
    for (let j = i + 1; j < number - 1; j++) {
        b = array[j];
        for (let k = j + 1; k < number; k++) {
            let c = array[k];
            let sum = a + b + c;
            if (sum == 0) {
                console.log("The sum of integers adds to zero");
            }
            else {
                console.log("The sum of integers is not zero");
            }
        }
    }
}