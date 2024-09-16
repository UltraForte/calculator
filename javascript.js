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

//Below starts the code to make the display functional:
let displayInput = document.getElementById("displayInput");
displayInput.textContent = "";


const numOne = document.querySelector("btn.num.one");
numOne.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 1;
});
const numTwo = document.querySelector("btn.num.two");
numTwo.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 2;
});
const numThree = document.querySelector("btn.num.three");
numThree.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 3;
});
const numFour = document.querySelector("btn.num.four");
numFour.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 4;
});
const numFive = document.querySelector("btn.num.five");
numFive.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 5;
});
const numSix = document.querySelector("btn.num.six");
numSix.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 6;
});
const numSeven = document.querySelector("btn.num.seven");
numSeven.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 7;
});
const numEight = document.querySelector("btn.num.eight");
numEight.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 8;
});
const numNine = document.querySelector("btn.num.nine");
numNine.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 9;
});
const numZero = document.querySelector("btn.num.zero");
numZero.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += 0;
});
const funcDivide = document.querySelector("btn.func.divide");
funcDivide.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += "/";
});
const funcMultiply = document.querySelector("btn.func.multiply");
funcMultiply.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += "×";
});
const funcSubtract = document.querySelector("btn.func.subtract");
funcSubtract.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += "-";
});
const funcAdd = document.querySelector("btn.func.add");
funcAdd.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += "+";
});
const dotBtn = document.querySelector("btn.dot");
dotBtn.addEventListener("click", () => {
    displayInput.textContent = displayInput.textContent += ".";
});
const clearBtn = document.querySelector("btn.clear");
clearBtn.addEventListener("click", () => {
    displayInput.textContent = "";
});

