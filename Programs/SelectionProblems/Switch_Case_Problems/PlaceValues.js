// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require('prompt-sync')();
const num = prompt('Enter a Number as 1,10,100,..... : ');
let number = Number(num);

switch(number){
    case 1:
        console.log("Units");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundread");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("Ten of Thousands"); 
        break;
    case 100000:
        console.log("Hundreds of Thousands");
        break;
    case 1000000:
        console.log("Millions");
        break;
    case 10000000:
        console.log("Billions");
        break;
    default:
        console.log("Invalid Input");
        break;
}