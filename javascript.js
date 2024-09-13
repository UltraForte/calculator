let inputOne
let inputTwo
let operator

function add(inputOne, inputTwo) {
    return (inputOne + inputTwo);
};
let sum = add(5,2);
console.log("I added:" + sum);


function subtract(inputOne, inputTwo) {
    return (inputOne - inputTwo);
}
let difference = subtract(5,2);
console.log("I subtracted:" + difference);


function multiply(inputOne, inputTwo) {
    return (inputOne * inputTwo);
};
let product = multiply(5,2);
console.log("I multiplied:" + product);


function divide(inputOne, inputTwo) {
    return (inputOne / inputTwo);
};
let quotient = divide(5,2);
console.log("I divided:" + quotient);

inputOne = 10;
inputTwo = 5;
operator = ("+");
function operate(inputOne, inputTwo, operator) {
    let execution
    if (operator === "+") {
        return add(inputOne, inputTwo);
    } else if (operator === "-") {
        return subtract(inputOne, inputTwo);
    } else if (operator === "*") {
        return multiply(inputOne, inputTwo);
    } else if (operator === "/") {
        return divide(inputOne, inputTwo);
    };

};
let result = operate(inputOne, inputTwo, operator);
console.log(result);