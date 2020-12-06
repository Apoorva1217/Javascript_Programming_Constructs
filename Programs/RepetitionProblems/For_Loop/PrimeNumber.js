// Write a program that takes a input and determines if the number is a prime.

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number : ');
let number = Number(num);
let count=0;
if((number==0) || (number ==1)){
    console.log(`${number} is neither Prime nor Composite Number`);
}
else if(number>1){
    for(let i=2;i<=(number/2);i++){
        if((number%i)==0){
            count=1;
            break;
        }
    }
    if(count==0){
        console.log(`${number} is Prime Number`);
    }
    else{
        console.log(`${number} is not Prime Number`);
    }
}
else{
    console.log(`${number} is not Prime Number`);
}