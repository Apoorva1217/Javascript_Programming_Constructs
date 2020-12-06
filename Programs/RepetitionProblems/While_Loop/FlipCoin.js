// Extend the Flip Coin problem till either Heads or Tails wins 11 times.

let head = 0;
let tail = 0;
while ((head != 11) && (tail != 11)) {
    let result = Math.floor(Math.random() * 2);
    if (result == 1) {
        head = head + 1;
    }
    else {
        tail = tail + 1;
    }
}
console.log("Head occured : " + head);
console.log("Tail occured : " + tail);

if (head == 11) {
    console.log("Head Wins 11 Times.");
}
else {
    console.log("Tail Wins 11 Times.");
}