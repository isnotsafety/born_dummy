const calculator = require("./calculator");


const args = process.argv.slice(2);
const [operator, num1, num2] = args;


let result;
switch (operator) {
    case "add":
        result = calculator.add(parseFloat(num1), parseFloat(num2));
        break;
    case "subtract":
        result = calculator.subtract(parseFloat(num1), parseFloat(num2));
        break;
    case "multiply":
        result = calculator.multiply(parseFloat(num1), parseFloat(num2));
        break;
    case "divide":
        result = calculator.divide(parseFloat(num1), parseFloat(num2));
        break;
    default:
        result = "Invalid operator";
}


console.log("Result:", result);