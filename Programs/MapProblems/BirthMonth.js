// Write a Program to generate a birth month of 50 individuals between the year 92 & 93. 
// Find all the individuals having birthdays in the same month. Store it to finally print.

let birthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1;
    let count = birthMap.get(month);
    birthMap.set(month, ++count);
}
console.log("Month => Count");
console.log(birthMap);