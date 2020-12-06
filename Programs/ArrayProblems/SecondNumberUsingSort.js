// Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

let start = 100;
let end = 999;
range = end - start + 1;
let array = new Array();
console.log("10 Random 3 Digit Numbers are:");
for (let i = 0; i < 10; i++) {
    let result = Math.floor(Math.random() * range) + start;
    console.log(result);
    array.push(result);
}
let sortedArray = array.sort();
console.log("The second smallest number is : " + sortedArray[1]);
console.log("The second largest number is : " + sortedArray[8]);