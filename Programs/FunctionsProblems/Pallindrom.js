// Write a function to check if the two numbers are Palindromes

const prompt = require('prompt-sync')();
const n = prompt('Enter a Number : ');
let number = Number(n);
let result = 0;
let rev = 0;
let temp = number;
let num=number;
let isPallindrome = true;
function pallindrome(number) {
    while (num > 0) {
        result = num % 10;
        num = parseInt(num / 10);
        rev = rev * 10 + result;
    }
    if (rev != temp) {
        isPallindrome = false;
    }
    return isPallindrome;
}
if (pallindrome(number)) {
    console.log(`Number ${number} is Pallindrome`);
}
else {
    console.log(`Number ${number} is not Pallindrome`);
}