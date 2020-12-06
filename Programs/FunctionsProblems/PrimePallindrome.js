// Take a number from user and check if the number is a Prime then show that its palindrome is also prime
// a. Write function check if number is Prime
// b. Write function to get the Palindrome.
// c. Check if the Palindrome number is also prime

const prompt = require('prompt-sync')();
const n = prompt('Enter a Number : ');
let number = Number(n);
let result = 0;
let rev = 0;
let temp1 = number;
let num = number;
let isPallindrome = true;

function prime(number) {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if ((number % i) == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

function pallindrome(number) {
    while (num > 0) {
        result = num % 10;
        num = parseInt(num / 10);
        rev = rev * 10 + result;
    }
    if (rev != temp1) {
        isPallindrome = false;
    }
    return isPallindrome;
}
if (pallindrome(number)) {
    if (prime(number)) {
        console.log(`Number ${number} is Prime and Pallindrome`);
    }

    else {
        console.log(`Number ${number} is Pallindrome but not Prime`);
    }
}
else {
    console.log(`Number ${number} is not Pallindrome`);
}