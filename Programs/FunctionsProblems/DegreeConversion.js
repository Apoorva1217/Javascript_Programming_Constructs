// Help user find degF or degC based on their Conversion Selection. 
// Use Case Statement and ensure that the inputs are within the Freezing Point ( 0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
// a. degF = (degC * 9/5) + 32
// b. degC = (degF – 32) * 5/9

const prompt = require('prompt-sync')();

console.log("1.Convert Degree Celsius to Degree Fahrenheit");
console.log("2.Convert Degree Fahrenheit to Degree Celsius");
const ch = prompt('Enter Your Choice : ');
let choice = Number(ch);

switch (choice) {
    case 1:
        const degreeC = prompt(`Enter temp in Degree Celsius : `);
        let degrC = Number(degreeC);
        function degF(degrC) {
            if ((degC < 0) && (degC > 100)) {
                console.log("Invalid Input");
                return;
            }
        }
        console.log("Temp in Degree Fahrenheit : " + ((degrC * 9 / 5) + 32));
        break;
    case 2:
        const degreeF = prompt(`Enter temp in Degree Fahrenheit : `);
        let degrF = Number(degreeF);
        function degC(degrF) {
            if ((degC < 32) && (degC > 100)) {
                console.log("Invalid Input");
                return;
            }
        }
        console.log("Temp in Degree Celsius : " + ((degrF - 32) * 5 / 9));
        break;
    default:
        console.log("Invalid Input");
        break;
}
