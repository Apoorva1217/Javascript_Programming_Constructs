//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

for (let i = 0; i < 2; i++) {
    let flipCoin = Math.floor(Math.random() * 2);
    if (flipCoin == 1) {
        console.log("Head");
    }
    else {
        console.log("Tail");
    }
}