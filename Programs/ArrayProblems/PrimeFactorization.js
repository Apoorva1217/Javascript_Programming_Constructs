// Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
let array = new Array();
if((number==0)||(number==1)){
    console.log(`${number} is not a Prime Number`);
}
else{
    for(let i=2;i<=number;i++){
        while((number%i)==0){
            number=number/i;
            array.push(i);
        }
    }
}
console.log("Array of Prime Factorization : "+array);