// Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

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

let smallest = array[0];
let secSmallest = array[0];
for (let i = 0; i < 10; i++) {
    if (array[i] == smallest) {
        smallest = smallest;
    }
    else if (array[i] < smallest) {
        secSmallest = smallest;
        smallest = array[i];
    }
    else if (array[i] < secSmallest) {
        secSmallest = array[i];
    }
}
console.log("The second smallest number is : " + secSmallest);

let largest = array[0];
let secLargest = array[0];
for (let j = 0; j < 10; j++) {
    if (array[j] == largest) {
        secLargest = largest;
    }
    else if (array[j] > largest) {
        secLargest = largest;
        largest = array[j];
    }
    else if (array[j] > secLargest) {
        secLargest = array[j];
    }
}
console.log("The second largest number is : " + secLargest);