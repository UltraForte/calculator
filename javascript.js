let inputOne;
let inputTwo;
let operator;
let operatorTwo;

function add(inputOne, inputTwo) {
    console.log("You added: " + inputOne + " and " + inputTwo);
    return (inputOne + inputTwo);
};
function subtract(inputOne, inputTwo) {
    console.log("You subtracted: " + inputTwo + " from " + inputOne);
    return (inputOne - inputTwo);
}
function multiply(inputOne, inputTwo) {
    console.log("You multiplied: " + inputOne + " by " + inputTwo);
    let product = (inputOne * inputTwo);
    let productLength = product.toString().length;
    if (productLength > 8 && product < 1) {
        return (inputOne * inputTwo).toFixed(8);
    } else {
        return product;
    };
};
function divide(inputOne, inputTwo) {
    console.log("You divided: " + inputOne + " by " + inputTwo);
    let quotient = (inputOne / inputTwo);
    let quotientLength = quotient.toString().length;
    if ((quotientLength) > 8 && quotient < 1) {
    return (inputOne / inputTwo).toFixed(8);
    } else {
        return quotient;
    };
};


operator = ("");
function operate(inputOne, inputTwo, operator) {
    let execution
    if (operator === "+") {
        return add(inputOne, inputTwo);
    } else if (operator === "-") {
        return subtract(inputOne, inputTwo);
    } else if (operator === "×") {
        return multiply(inputOne, inputTwo);
    } else if (operator === "/") {
        return divide(inputOne, inputTwo);
    };
};

//Below starts the code to make the display functional:
let displayInput = document.getElementById("displayInput");
displayInput.textContent = "";
function checkLength() {
    if (displayInput.textContent.length >= 17) {
        alert("Too many characters!")
    };
};

const numOne = document.querySelector("btn.num.one");
numOne.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 1
});
const numTwo = document.querySelector("btn.num.two");
numTwo.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 2;
});
const numThree = document.querySelector("btn.num.three");
numThree.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 3;
});
const numFour = document.querySelector("btn.num.four");
numFour.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 4;
});
const numFive = document.querySelector("btn.num.five");
numFive.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 5;
});
const numSix = document.querySelector("btn.num.six");
numSix.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 6;
});
const numSeven = document.querySelector("btn.num.seven");
numSeven.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 7;
});
const numEight = document.querySelector("btn.num.eight");
numEight.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 8;
});
const numNine = document.querySelector("btn.num.nine");
numNine.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 9;
});
const numZero = document.querySelector("btn.num.zero");
numZero.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += 0;
});
const funcDivide = document.querySelector("btn.func.divide");
funcDivide.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += "/";
    if (operator === "+" || operator === "-" ||
        operator === "×" || operator === "/") {
            operatorTwo = "/";
    } else {
        operator = "/"
    };
});
const funcMultiply = document.querySelector("btn.func.multiply");
funcMultiply.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += "×";
    if (operator === "+" || operator === "-" ||
        operator === "×" || operator === "/") {
            operatorTwo = "×";
    } else {
        operator = "×"
    };
});
const funcSubtract = document.querySelector("btn.func.subtract");
funcSubtract.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += "-";
    if (operator === "+" || operator === "-" ||
        operator === "×" || operator === "/") {
            operatorTwo = "-";
    } else {
        operator = "-"
    };
});
const funcAdd = document.querySelector("btn.func.add");
funcAdd.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += "+";
    if (operator === "+" || operator === "-" ||
        operator === "×" || operator === "/") {
            operatorTwo = "+";
    } else {
        operator = "+"
    };
});
const dotBtn = document.querySelector("btn.dot");
dotBtn.addEventListener("click", () => {
    checkLength();
    displayInput.textContent += ".";
});
const clearBtn = document.querySelector("btn.clear");
clearBtn.addEventListener("click", () => {
    resetCalc();
});
function resetCalc() {
    displayInput.textContent = "";
    operator = "";
    operatorTwo = "";
};

//Below is the code to get the two values from the input:
const equalsBtn = document.querySelector("btn.equals");
equalsBtn.addEventListener("click", () => {
    let displayInputText = (displayInput.textContent);

    if (operator === "+" || operator === "-" ||
        operator === "×" || operator === "/") {

        } else {
            resetCalc();
            alert("You didn't enter an operand!");
        };
    
    //If operatorTwo exists, then:
    if (operatorTwo === "+" || operatorTwo === "-" ||
        operatorTwo === "×" || operatorTwo === "/") {

        //If lastChar is a number, stop calculation and show alert:
        let lastChar = displayInputText.slice(-1);
        if (lastChar === "+" || lastChar === "-" ||
            lastChar === "×" || lastChar === "/") {
            //Do nothing//
        } else {
            resetCalc();
            alert("Can't evaluate more than one pair of numbers at a time, but you can end with an operand, like this: \"xx-xx+\"");
        };

        inputOne = Number(displayInputText.slice(0,-1).split(operator)[0]);
        inputTwo = Number(displayInputText.slice(0,-1).split(operator)[1]);
        if (inputTwo === 0) {
            resetCalc();
            let age = prompt("Enter your age:");
            alert("You're telling me you're " + age + " and you don't know that you can't divide by zero? Lol");
        };
        //When you add the second operator to the display, it changes
        //the first operator to the new one. You need to lock in the
        //first operator to keep it from changing. Then change it 
        //to the new operator after the calculation happens.
        
        let result = operate(inputOne, inputTwo, operator);
        if (operatorTwo === "+") {
            console.log(result);
            displayInput.textContent = result + "+";
        } else if (operatorTwo === "-") {
            console.log(result);
            displayInput.textContent = result + "-";
        } else if (operatorTwo === "×") {
            console.log(result);
            displayInput.textContent = result + "×";
        } else if (operatorTwo === "/") {
            console.log(result);
            displayInput.textContent = result + "/";
        };
        //Set the operator to the value of operatorTwo, so that the 
        //calculation executes correctly next time equals btn is clicked:
        operator = operatorTwo;
        //Reset operatorTwo:
        operatorTwo = "";
        //else if the last character is not one of the operators, 
        //meaning it is a number, then take the first and second inputs,
        //and excecute the math. 
    } else {
        inputOne = Number(displayInputText.split(operator)[0]);
        inputTwo = Number(displayInputText.split(operator)[1]);
        if (inputTwo === 0) {
            resetCalc();
            let age = prompt("Enter your age:");
            alert("You're telling me you're " + age + " and you don't know that you can't divide by zero? Lol");
            //Use the top one or the one below.
            //alert("You should know that you can't divide by zero!");
        };

        let result = operate(inputOne, inputTwo, operator);
        console.log(result);
        displayInput.textContent = result;
        
        //Reset operator and operatorTwo;
        operator = "";
        operatorTwo = "";
    };
});