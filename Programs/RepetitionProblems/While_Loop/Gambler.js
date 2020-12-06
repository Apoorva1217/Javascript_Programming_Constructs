// Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke 
//i.e. no more money to gamble or reaches the goal of Rs 200. 
//Keeps track of number of times won and number of bets made.

let stake = 100;
let goal = 200;
let bets = 0;
let win = 0;
while ((stake > 0) || (stake == goal)) {
    bets = bets + 1;
    let result = Math.floor(Math.random() * 2);
    if (result == 1) {
        stake = stake + 1;
        win = win + 1;
    }
    else {
        stake = stake - 1;
    }
}
console.log("Win = " + win);
console.log("Bets = " + bets);