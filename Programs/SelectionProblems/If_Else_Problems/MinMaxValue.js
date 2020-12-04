//Write a program that reads 5 Random 3 Digit values 
//and then outputs the minimum and the maximum value

let startRange = 100;
let endRange = 999;
let range = endRange - startRange + 1;
let minValue = range;
let maxvalue = 99;
console.log("5 Random Three digit numbers are:");
for (let i = 0; i < 5; i++) {
    let result = Math.floor(Math.random() * range + startRange);
    console.log(result);
    let i = result;
    if (maxvalue > result) {
        maxvalue = maxvalue;
    }
    else {
        maxvalue = result;
    }
    if (minValue > result) {
        minValue = result;
    }
    else {
        minValue = minValue;
    }
}
console.log("Minimum Values is:" + minValue);
console.log("Maximum Value is:" + maxvalue);