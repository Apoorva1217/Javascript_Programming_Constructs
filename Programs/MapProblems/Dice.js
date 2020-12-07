// Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for minimum times

let dieRollMap = new Map();
dieRollMap.set(1, 0);
dieRollMap.set(2, 0);
dieRollMap.set(3, 0);
dieRollMap.set(4, 0);
dieRollMap.set(5, 0);
dieRollMap.set(6, 0);

while (true) {
    let result = Math.floor(Math.random() * 6) + 1;
    let value = dieRollMap.get(result);
    dieRollMap.set(result, value + 1);
    if (value == 9) {
        break;
    }
}
for (let [key, value] of dieRollMap) {
    console.log(`Dice[${key}] : ${value}`);
}

let minValue = Math.min(...dieRollMap.values());
let maxValue = Math.max(...dieRollMap.values());

for (let [key, value] of dieRollMap) {
    if (value == minValue) {
        console.log(`Minimum number dice occured is : Dice[${key}]`);
    }
    if (value == maxValue) {
        console.log(`Maximum number dice occured is : Dice[${key}]`);
    }
}