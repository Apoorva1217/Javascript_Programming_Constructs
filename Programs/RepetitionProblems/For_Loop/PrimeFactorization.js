// Write a program to compute Factors of a number N using prime factorization method.
// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
console.log("Prime Factors are : ");
for (let i = 2; i <= number; i++) {
    while ((number % i) == 0) {
        number = number / i;
        console.log(i);
    }
}